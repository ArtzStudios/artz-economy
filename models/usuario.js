const mongoose = require('mongoose');

const Perfil = new mongoose.Schema({
    guildID: {type: String},
    userID: { type: String },
    mano: { type: Number, default: 0 },
    banco: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    nivel: { type: Number, default: 1},
    lastUpdated: { type: Date, default: new Date() },
});

module.exports = mongoose.model('artz-eco-perfil', Perfil)