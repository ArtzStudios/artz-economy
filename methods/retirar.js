module.exports = {
  retirar: async function (guildId, userId, cantidad, usuario) {
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

    let user = await usuario.findOne({ guildID: guildId, userID: userId });
    if (cantidad > user.banco) return false;
    user.mano += cantidad;
    user.banco -= cantidad;
    user.ultMod = new Date();
    user
      .save()
      .catch((e) =>
        console.log(`[Artz-Eco] Ocurrió un error al retirar el dinero.\n${e}`)
      );
  },
};
