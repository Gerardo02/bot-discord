const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
function play(connection, message){
    const server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0]){
            play(connection, message);
        }
        /*else{
            connection.leave();
        }*/
    });
}
class SongCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'song',
            group: 'music',
            memberName: 'song',
            description: 'Pepsi woman mete la cancion'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel){

            if(!message.guild.voiceChannel){

                if(!servers[message.guild.id]){

                    servers[message.guild.id] = {queue: []}
                }
                const server = servers[message.guild.id];
                server.queue.push(args)
                .then(connection=>{
                    message.channel.send('Ahi esta su cancion');
                    play(connection, message);
                });

            }
        }
        else{
            message.channel.send('Metete al chat de voz para que me pueda meter');
        }
    }
}
module.exports = SongCommand;