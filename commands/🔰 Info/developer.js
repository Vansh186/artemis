const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "tomato"],
	description: "Shows Information about the Developer",
	useage: "developer",
	run: async (client, message, args) => {
		try {
			message.channel.send(new MessageEmbed()
				.setColor(ee.color)
				.setFooter(ee.footertext + " | Sponsor: Bittmax.de | Code  'x10'  == -5%", ee.footericon)
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
				.setTitle("Van.sh07 | Dev of 3 Orgs | Developer of Poseidon and many other reknowned BOTS")
				.setURL("https://milrato.eu")
				.setDescription(`
> Hello I am **Vansh :D** <@842123613905485855> *(\`Van.sh07🥀#1063\`)*, and i made more then 200 different Discord Bots: [My Bot List](https://bots.musicium.eu)

> I am very proud for all of my Discord bots and other projects whether they are verified or not :), but the Bot I am the most proud of is: [**ARTEMIS AND POSEIDON** | \`2021\'s Best Music AND MULTI FUNCTION BOT\`](https://artemis.glitch.me) <@842123613905485855>

> I am also a **Website** Developer and **Plugin** dev. I made **Modules** Check out my websites: https://solarofficial.glitch.me https://www.vdmusic.ml https://www.vdbot.ml and many mode :D)

> Yeah i hope you like my stuff :v: <3 Ty :D`)
			).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).bgRed)
			return message.channel.send(new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setFooter(ee.footertext, ee.footericon)
				.setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
				.setDescription(`\`\`\`${e.message}\`\`\``)
			);
		}
	}
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
