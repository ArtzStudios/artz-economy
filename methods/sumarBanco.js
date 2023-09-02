module.exports = {
  sumarBanco: async function (guildId, userId, cantidad, usuario) {
    if (!userId)
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una ID de usuario válida."
      );
    if (!guildId)
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una ID de servidor válida."
      );
    if (!cantidad || cantidad === 0 || isNaN(parseInt(cantidad)))
      throw new TypeError(
        "[Artz-Eco] Tienes que proveer una cantidad de dinero válida."
      );
    let user = await usuario.findOne({
      guildID: guildId,
      userID: userId,
    });
    if (!user)
      user = await usuario
        .create({
          guildID: guildId,
          userID: userId,
        })
        .catch((e) =>
          console.log(`[Artz-Eco] Ocurrió un error al crear un perfil.\n${e}`)
        );

    user.banco += parseInt(cantidad, 10);
    user.ultMod = new Date();

    await user
      .save()
      .catch((e) =>
        console.log(`[Artz-Eco] Ocurrió un error al sumar el dinero.\n${e}`)
      );
    return user;
  },
};
