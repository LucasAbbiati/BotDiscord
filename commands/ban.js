const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Bane um membro do servidor")
      .addUserOption((option) =>
        option
          .setName("user")
          .setDescription("Usuário que deseja banir")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("motivo")
          .setDescription("Motivo do ban")
          .setRequired(false)
      ),
    async execute(interaction) {
      const userToBan = interaction.options.getUser("user");
      const motivo =
        interaction.options.getString("motivo") || "Sem motivo";

      if (!interaction.guild) {
        await interaction.reply("This command can only be used in a server.");
        return;
      }

      if (!interaction.member.permissions.has("BAN_MEMBERS")) {
        await interaction.reply(
          "você não tem permissão para usar esse commando"
        );
        return;
      }

      try {
        await interaction.guild.members.ban(userToBan, { motivo });
        await interaction.reply(
          `Usuário ${userToBan.tag} foi banido por: ${motivo}`
        );
      } catch (error) {
        console.error(error);
        await interaction.reply(
          "Houve um erro ao executar esse comando"
        );
    }
}
}