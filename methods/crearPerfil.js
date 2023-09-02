module.exports = {
  crearPerfil: async function (guildId, userId, usuario) {
    if (!userId)
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una ID de usuario válida."
      );
    if (!guildId)
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una ID de servidor válida."
      );

    const esUsuario = await usuario.findOne({
      guildID: guildId,
      userID: userId,
    });
    if (esUsuario) return false;

    const user = await usuario.create({
      guildID: guildId,
      userID: userId,
    });

    await user
      .save()
      .catch((e) =>
        console.log(`[Artz-Eco] Ocurrió un error al crear el perfil.\n${e}`)
      );

    return user;
  },
};
