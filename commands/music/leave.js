const commando = require('discord.js-commando');

class LeaveCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Pepsi woman se sale del voice chat'
        });
    }

    async run(message, args){

        if(message.guild.voiceConnection){

            message.guild.voiceConncetion.disconnect();
        }
        else{

            message.channel.send('Tengo que estar en el voice chat para que me saques animal');
        }
    }
}
module.exports = LeaveCommand;