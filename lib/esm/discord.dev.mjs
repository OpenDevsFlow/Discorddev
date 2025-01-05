async function main() {
	return (await Import("../cjs/discord.dev.js")).default;
}

export default await main();

