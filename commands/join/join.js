const commando = require('discord.js-commando');

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

                message.member.voiceChannel.join()
                    .then(connection =>{
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