<p align="center">
  <strong> Discord.odf </strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/discord.odf">
    <img src="https://img.shields.io/npm/v/discord.odf.svg" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/discord.odf">
    <img src="https://img.shields.io/npm/dm/discord.odf.svg" alt="NPM Downloads">
  </a>
  <a href="https://discord.gg/6UGYjhSS5v">
    <img src="https://img.shields.io/discord/123456789012345678.svg" alt="Discord">
  </a>
</p>

## 💻 About

Discord.odf is a modern, fast, and secure fork of the [discord.js](https://discord.js.org/) library. It retains the core functionality of discord.js while introducing faster updates, improved security, and additional enhancements to help developers build better Discord bots.

## 🚀 Features

- **Frequent Updates**: Stay ahead with the latest features and bug fixes.
- **Enhanced Security**: Built with modern security standards to protect your bots.
- **Fully Compatible**: Easily migrate from discord.js without major changes.
- **Active Community**: Join our [Discord server](https://discord.gg/6UGYjhSS5v) for support and collaboration.

## 📦 Installation

Install Discord.odf using npm:

```bash
npm install discord.odf@latest
```

## Documentation

Comprehensive documentation is available to guide you through every feature. Check it out [here](https://discord.js.org/docs).

## 🛠️ Usage

Here's a quick example to get started:

```javascript
const { Client, GatewayIntentBits } = require('discord.odf');
const { Embed } = require('discord.odf/utils');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === 'ping') {
    const embed = Embed.create("info", "Pong!")
    await message.reply({ embeds: [embed] });
  }
});

client.login('your-bot-token');
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/OpenDevsFlow/discord.odf).

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <a href="https://discord.gg/6UGYjhSS5v">
    <img src="https://api.weblutions.com/discord/invite/a2c3QTWkuk" alt="Join our Discord">
  </a>
</p>