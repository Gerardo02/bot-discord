const Commando = require('discord.js-commando');
const client = new Commando.Client({
    owner: '625574950710935562'
});
const token = 'NjI1NTc0OTUwNzEwOTM1NTYy.XYrbuQ.-7zytkw9UutCc3EpbWUSqqFX4E8';

const path = require('path');

client.registry.registerGroups([
        ['music', 'Music']
    ]).registerDefaults().registerCommandsIn(path.join(__dirname, 'commands'));

global.currentTeamMembers = [];
global.servers = {};

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'pendejadas');
  if (!channel) return;
  channel.send(`Bienvenido puto, ${member}`);
});
/*client.on('message', message =>{
    if(message.content && message.author.username !== 'Pepsi Woman' && message.author.username !== 'Jerrycherry30'){
        message.channel.send('Fuck you');
        if(message.author.username === 'xRompe Vaginas 3000x'){
            message.channel.send('Como chingas ema');
        }
        else if(message.author.username === 'TwinAlan52'){
            message.channel.send('Ya vete a dormir twin');
        }
        else if(message.author.username === 'EEE00'){
            message.channel.send('Pinchi Eduardo joto');
        }
    }else if(message.content && message.author.username !== 'Pepsi Woman' && message.author.username === 'Jerrycherry30'){
        message.channel.send('A ti te amo cacas <3');
    }
});*/

client.login(token);
