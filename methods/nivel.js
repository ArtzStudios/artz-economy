module.exports = {
  nivel: async function (guildId, userId, usuario) {
    if (!userId)
      throw new TypeError(
        "[Artz-Eco] Tienes ue proveer una ID de usuario válida."
      );
    if (!guildId)
      throw new TypeError(
        "[Artz-Eco] Tienes ue proveer una ID de servidor válida."
      );
    let user = await usuario.findOne({ guildID: guildId, userID: userId });
    if (!user)
      user = await usuario.create({ guildID: guildId, userID: userId });
    return user.nivel;
  },
};
