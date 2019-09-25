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
class JoinCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Pepsi woman se mete al voice chat'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel){

            if(!message.guild.voiceChannel){

                if(!servers[message.guild.id]){

                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        const server = servers[message.guild.id];
                        message.channel.send('Ahi esta su cancion');
                        server.queue.push(args);
                        play(connection, message);
                        message.channel.send('Me uni putos');
                })

            }
        }
        else{
            message.channel.send('Metete al chat de voz para que me pueda meter');
        }
    }
}
module.exports = JoinCommand;