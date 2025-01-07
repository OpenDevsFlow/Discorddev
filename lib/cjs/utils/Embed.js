const { EmbedBuilder } = require("../discord.odf.js");

class Embed {
	static create(type, message) {
		switch (type.toLowerCase()) {
			case "success":
				return new EmbedBuilder()
				  .setColor("0x00FF00")
				  .setDescription(message);
			case "info": 
				return new EmbedBuilder()
				  .setColor("0x0000FF")
				  .setDescription(message);
			case "warning":
				return new EmbedBuilder()
				  .setColor("0xFFFF00")
				  .setDescription(message);
			case "error":
				return new EmbedBuilder()
				  .setColor("0xff0000")
				  .setDescription(message);
			case "nuetral":
				return new EmbedBuilder()
				  .setColor("0x808080")
				  .setDescription(message);
			case "actionrequire":
				return new EmbedBuilder()
				  .setColor("0xFFA500")
				  .setDescription(message);
		}
	}
}

module.exports = Embed;