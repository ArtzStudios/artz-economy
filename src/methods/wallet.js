const modelUser = require("../mongodb/schemas/user")
module.exports = {
    async wallet(userId, guild, amount) {
        if(!userId) return artzLogger("Falta proveer una id de usuario válida.")
        if(!guild) return artzLogger("Falta proveer una id de servidor válida.")
        let user = await modelUser.findOne({ guildID: guild, userID: userId})
        if(!user) user = await new modelUser({ guildID: guild, userID: userId})
        if(amount) {
          if(typeof(amount) !== "number") return artzLogger("El monto especificado no es válido.")
          user.wallet = amount;
          await user.save()
      }
        return user.wallet;
      },
      async wadd(userId, guild, amount) {
          if(!userId) return artzLogger("Falta proveer una id de usuario válida.");
          if(!guild) return artzLogger("Falta proveer una id de servidor válida.");
          if(typeof(amount) !== "number" || 0 > amount) return artzLogger("El monto especificado no es válido.");
          let user = await modelUser.findOne({ guildID: guild, userID: userId});
          if(!user) user = await new modelUser({ guildID: guild, userID: userId});
          user.wallet = user.wallet + amount;
          await user.save();
          return user.wallet;
      },
      async wrem(userId, guild, amount) {
          if(!userId) return artzLogger("Falta proveer una id de usuario válida.");
          if(!guild) return artzLogger("Falta proveer una id de servidor válida.");
          if(typeof(amount) !== "number" || 0 > amount) return artzLogger("El monto especificado no es válido.");
          let user = await modelUser.findOne({ guildID: guild, userID: userId});
          if(!user) user = await new modelUser({ guildID: guild, userID: userId});
          user.wallet = user.wallet - amount;
          await user.save();
          return user.wallet;
      },
      async wset(userId, guild, amount) {
        if(!userId) return artzLogger("Falta proveer una id de usuario válida.");
        if(!guild) return artzLogger("Falta proveer una id de servidor válida.");
        if(typeof(amount) !== "number") return artzLogger("El monto especificado no es válido.");
        let user = await modelUser.findOne({guildID: guild, userID: userId});
        if(!user) user = await new modelUser({guildID: guild, userID: userId})
        user.wallet = amount;
        await user.save()
        return user.wallet;
      }
}