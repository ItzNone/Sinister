const discord = require("discord.js")
const Client = new discord.Client()
Client.once('ready', () => {
	console.log('Ready!');
});

        console.log('\u001b[31m',"----------------------------------------------------------------------------")
	console.log(" ▄▄███▄▄·██╗███╗   ██╗██╗███████╗████████╗███████╗██████╗  ")
	console.log(" ██╔════╝██║████╗  ██║██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗ ")
	console.log(" ███████╗██║██╔██╗ ██║██║███████╗   ██║   █████╗  ██████╔╝ ")
	console.log(" ╚════██║██║██║╚██╗██║██║╚════██║   ██║   ██╔══╝  ██╔══██╗ ")
	console.log(" ███████║██║██║ ╚████║██║███████║   ██║   ███████╗██║  ██║ ")
	console.log(" ╚═▀▀▀══╝╚═╝╚═╝  ╚═══╝╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝ ")
	console.log('\u001b[31m',"----------------------------------------------------------------------------")

Client.login('ODI1Mjk3MDE1MzYxMjQxMTY5.YF73vQ.AHSmu0n50tZaXfWwn0O73Z5E17w');

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

client.on("message", msg => {
  if (msg.content === "z!help") {
    msg.reply("z!ban @user, z!help @user ,z!kick @user");
  }
})

client.on('ready', () => {
  console.log('I am ready!');

client.user.setActivity({ type: "PLAYING", name: "ZeusStore" }); // Delete this if you wish.
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "z!ban"
  if (message.content.startsWith('z!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("You didn't mention the user to ban!");
    }
  }
});

client.on("message", msg => {
  if (msg.content === "Z!ip") {
    msg.reply("https://add.aternos.org/ZeusViva");
  }
})

client.on("message", msg => {
  if (msg.content === "z!ip") {
    msg.reply("https://add.aternos.org/ZeusViva");
  }
})    

module.exports = (client) => {
 const channelId= "877401923727290408";
 client.on("guildMemberAdd", (member) => {

	const message = `Welcome <@${member.id}> to our server!`;

	const channel = member.guild.channels.chace.get(channelId)
	channel.send(message);
});
};

// Log our bot in using the token from https://discord.com/developers/applications
client.login('ODI1Mjk3MDE1MzYxMjQxMTY5.YF73vQ.AHSmu0n50tZaXfWwn0O73Z5E17w');

