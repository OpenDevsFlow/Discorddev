const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("../discord.odf.js");
const EventEmitter = require("node:events");

class Button extends EventEmitter {
	constructor() {
		super();
		this.button = new ButtonBuilder();
	}

	setEmoji(emoji) {
		this.button.setEmoji(emoji);
    return this;
  }

  setStyle(style) {
    this.button.setStyle(ButtonStyle[style] || ButtonStyle.Primary);
    return this;
	}

  setCustomId(customId) {
		this.button.setCustomId(customId);
    this.customId = customId;
    return this;
  }

	onClick(callback) {
		this.on("click", callback);
		return this;
	}

	build() {
		return new ActionRowBuilder().addComponents(this.button);
  }

	async handleInteraction(interaction) {
		if (interaction.isButton() && interaction.customId === this.customId) {
			this.emit('click', interaction);
		}
	}

	static attachListener(client) {
		client.on('interactionCreate', async (interaction) => {
			if (interaction.isButton()) {
				const button = Button.getButtonByCustomId(interaction.customId);
				if (button) {
					await button.handleInteraction(interaction);
				}
			}
		});
	}

	static registerButton(customId, button) {
		if (!Button.buttonRegistry) {
			Button.buttonRegistry = {};
		}
		Button.buttonRegistry[customId] = button;
	}

	static getButtonByCustomId(customId) {
		return Button.buttonRegistry ? Button.buttonRegistry[customId] : null;
	}

	static build(...buttons) {
		const row = new ActionRowBuilder();
		buttons.forEach(button => row.addComponents(button.button));
		return row;
	}
}

module.exports = Button;