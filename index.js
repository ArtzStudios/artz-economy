const mongoose = require("mongoose")
const usuario = require("./models/usuario")
let mongoURL;
if (process.version.slice(1, 3) - 0 < 16) {
    throw new Error(`[Artz-Eco] Necesitas una versión de NodeJS superior a 16, estás usando la ${process.version}. Revisa https://nodejs.org para actualizar o usa tu administrador de paquetes.`);
}
class MEconomy {
    static async setUrl(url) {
        if (!url)
            throw new Error('[Artz-Eco] Tienes que proveer un link de mongoose válido.')
        mongoURL = url;
        return mongoose.connect(mongoURL)
    }
    static async crearPerfil(guildId, userId) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')

        const esUsuario = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (esUsuario) return false;

        const user = await usuario.create({
            guildID: guildId,
            userID: userId
        })

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al crear el perfil.\n${e}`))

        return user;
    }
    static async borrarPerfil(guildId, userId) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')

        const esUsuario = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!esUsuario) return false;

        const user = await usuario.findOneAndDelete({
            guildID: guildId,
            userID: userId
        })

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al borrar el perfil.\n${e}`))

        return user;
    }
    static async sumarMano(guildId, userId, cantidad) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')
        if (!cantidad || cantidad === 0 || isNaN(parseInt(cantidad)))
            throw new TypeError('[Artz-Eco] Tienes que proveer una cantidad de dinero válida.')
        let user = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!user) user = await usuario.create({
            guildID: guildId,
            userID: userId
        }).catch(e => console.log(`[Artz-Eco] Ocurrió un error al crear un perfil.\n${e}`))

        user.mano += parseInt(cantidad, 10);
        user.ultMod = new Date();

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al sumar el dinero.\n${e}`))
        return user;
    }
    static async sumarBanco(guildId, userId, cantidad) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')
        if (!cantidad || cantidad === 0 || isNaN(parseInt(cantidad)))
            throw new TypeError('[Artz-Eco] Tienes que proveer una cantidad de dinero válida.')
        let user = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!user) user = await usuario.create({
            guildID: guildId,
            userID: userId
        }).catch(e => console.log(`[Artz-Eco] Ocurrió un error al crear un perfil.\n${e}`))

        user.banco += parseInt(cantidad, 10);
        user.ultMod = new Date();

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al sumar el dinero.\n${e}`))
        return user;
    }
    static async restarBanco(guildId, userId, cantidad) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')
        if (!cantidad || cantidad === 0 || isNaN(parseInt(cantidad)))
            throw new TypeError('[Artz-Eco] Tienes que proveer una cantidad de dinero válida.')
        let user = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!user) return false

        user.banco -= parseInt(cantidad, 10);
        user.ultMod = new Date();

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al restar el dinero.\n${e}`))
        return user;
    }
    static async restarMano(guildId, userId, cantidad) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')
        if (!cantidad || cantidad === 0 || isNaN(parseInt(cantidad)))
            throw new TypeError('[Artz-Eco] Tienes que proveer una cantidad de dinero válida.')
        let user = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!user) return false

        user.mano -= parseInt(cantidad, 10);
        user.ultMod = new Date();

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al restar el dinero.\n${e}`))
        return user;
    }
    static async establecerBanco(guildId, userId, cantidad) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')
        if (!cantidad || isNaN(parseInt(cantidad)))
            throw new TypeError('[Artz-Eco] Tienes que proveer una cantidad de dinero válida.')
        let user = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!user) user = await usuario.create({
            guildID: guildId,
            userID: userId
        }).catch(e => console.log(`[Artz-Eco] Ocurrió un error al crear un perfil.\n${e}`))

        user.banco = parseInt(cantidad, 10);
        user.ultMod = new Date();

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al establecer el dinero.\n${e}`))
        return user;
    }
    static async establecerMano(guildId, userId, cantidad) {
        if (!userId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if (!guildId)
            throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')
        if (!cantidad || isNaN(parseInt(cantidad)))
            throw new TypeError('[Artz-Eco] Tienes que proveer una cantidad de dinero válida.')
        let user = await usuario.findOne({
            guildID: guildId,
            userID: userId
        })
        if (!user) user = await usuario.create({
            guildID: guildId,
            userID: userId
        }).catch(e => console.log(`[Artz-Eco] Ocurrió un error al crear un perfil.\n${e}`))

        user.mano = parseInt(cantidad, 10);
        user.ultMod = new Date();

        await user.save().catch(e => console.log(`[Artz-Eco] Ocurrió un error al establecer el dinero.\n${e}`))
        return user;
    }
    static async fetch(guildId, userId) {
        if(!userId) throw new TypeError('[Artz-Eco] Tienes que proveer una ID de usuario válida.')
        if(!guildId) throw new TypeError('[Artz-Eco] Tienes que proveer una ID de servidor válida.')

        let user = await usuario.findOne({ guildID: guildId, userID: userId })
        if(!user) return false;

        return user;
    }

}
module.exports = MEconomy;