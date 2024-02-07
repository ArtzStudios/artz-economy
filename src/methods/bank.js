const modelUser = require("../mongodb/schemas/user")
module.exports = {
    async bank(userId, guild, amount) {
        if(!userId) return artzLogger("Falta proveer una id de usuario válida.")
        if(!guild) return artzLogger("Falta proveer una id de servidor válida.")
        let user = await modelUser.findOne({ guildID: guild, userID: userId})
        if(!user) user = await new modelUser({ guildID: guild, userID: userId})
        if(amount) {
            if(typeof(amount) !== "number") return artzLogger("El monto especificado no es válido.")
            user.bank = amount;
            await user.save()
        }
        return user.bank;
      },
    async badd(userId, guild, amount) {
        if(!userId) return artzLogger("Falta proveer una id de usuario válida.");
        if(!guild) return artzLogger("Falta proveer una id de servidor válida.");
        if(typeof(amount) !== "number" || 0 > amount) return artzLogger("El monto especificado no es válido.");
        let user = await modelUser.findOne({ guildID: guild, userID: userId});
        if(!user) user = await new modelUser({ guildID: guild, userID: userId});
        user.bank = user.bank + amount;
        await user.save();
        return user.bank;
    },
    async brem(userId, guild, amount) {
        if(!userId) return artzLogger("Falta proveer una id de usuario válida.");
        if(!guild) return artzLogger("Falta proveer una id de servidor válida.");
        if(typeof(amount) !== "number" || 0 > amount) return artzLogger("El monto especificado no es válido.");
        let user = await modelUser.findOne({ guildID: guild, userID: userId});
        if(!user) user = await new modelUser({ guildID: guild, userID: userId});
        user.bank = user.bank - amount;
        await user.save();
        return user.bank;
    },
    async bset(userId, guild, amount) {
      if(!userId) return artzLogger("Falta proveer una id de usuario válida.");
      if(!guild) return artzLogger("Falta proveer una id de servidor válida.");
      if(typeof(amount) !== "number") return artzLogger("El monto especificado no es válido.");
      let user = await modelUser.findOne({guildID: guild, userID: userId});
      if(!user) user = await new modelUser({guildID: guild, userID: userId})
      user.bank = amount;
      await user.save()
      return user.bank;
    }
}