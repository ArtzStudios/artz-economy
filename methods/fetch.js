module.exports = {
  fetch: async function (guildId, userId, usuario) {
    if (!userId)
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una ID de usuario válida."
      );
    if (!guildId)
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una ID de servidor válida."
      );

    let user = await usuario.findOne({ guildID: guildId, userID: userId });
    if (!user) return false;

    return user;
  },
};
