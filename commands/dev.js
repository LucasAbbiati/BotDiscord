const { SlashCommandBuilder } = require("discord.js")

const exampleEmbed = {
	color: 0x000000,
	title: 'Sobre o desenvolvedor',
    url: 'https://github.com/LucasAbbiati',
	fields: [
        { name: '\u200B', value: '\u200B' },
		{ name: 'Nome', value: 'Lucas Abbiati Pereira', inline: true },
		{ name: 'Formação', value: 'Atualmente estou no 8° período de Ciência da Computação na UFSCar - São Carlos', inline: true },
        { name: 'Idade', value: '20 anos', inline: true },
		{ name: '\u200B', value: '\u200B' },
        { name: 'Interesses', value: 'Atualmente estou estudando linguagens e fazendo aplicações para ter um bom portfólio', inline: true },
		{ name: 'Github', value: 'https://github.com/LucasAbbiati', inline: true },
        { name: 'Linkedin', value: 'https://www.linkedin.com/in/lucasabbiati/', inline: true },
		{ name: '\u200B', value: '\u200B' },
	],
	timestamp: new Date().toISOString(),
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dev")
        .setDescription("informações sobre o desenvolvedor do bot"),

    async execute(interaction) {
        await interaction.reply( {embeds: [exampleEmbed] })
    }
}