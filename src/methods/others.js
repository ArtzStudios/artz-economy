const modelUser = require("../mongodb/schemas/user");
module.exports = {
    async fetch(userId, guildId, option) {
        let user = await modelUser.findOne({ guildID: guildId, userID: userId});
        if(!user) user = await new modelUser({guildID: guildId, userID: userId});
        const optionTypes = ["efectivo", "wallet", "bank", "banco"];
        if(option) {
            if(!optionTypes.includes(option)) return artzLogger("La opción proveeída es inválida.");
            return user[option]
        }
        return user;
    },
    async withdraw(userId, guildId, amount) {
        let user = await modelUser.findOne({ guildID: guildId, userID: userId});
        if(!user) user = await new modelUser({guildID: guildId, userID: userId});
        if(amount > user.bank) return false;
        user.bank = user.bank - amount;
        user.wallet = user.wallet + amount;
        await user.save();
        return user;
    },
    async deposit(userId, guildId, amount) {
        if(typeof(amount) !== "number") return console.log("La cantidad proveeída es inválida.")
        let user = await modelUser.findOne({ guildID: guildId, userID: userId});
        if(!user) user = await new modelUser({guildID: guildId, userID: userId});
        if(amount > user.wallet) return false;
        user.wallet = user.wallet - amount;
        user.bank = user.bank + amount;
        await user.save();
        return user;
    }
}