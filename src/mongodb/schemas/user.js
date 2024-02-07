const mongoose = require("mongoose");

const Perfil = new mongoose.Schema({
  guildID: { type: String },
  userID: { type: String },
  wallet: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  ultMod: { type: Date, default: new Date() },
});

module.exports = mongoose.model("artz-economy", Perfil);
