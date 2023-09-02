const mongoose = require("mongoose");
const banco = require("./methods/banco");
const borrarPerfil = require("./methods/borrarPerfil");
const crearPerfil = require("./methods/crearPerfil");
const depositar = require("./methods/depositar");
const establecerBanco = require("./methods/establecerBanco");
const establecerMano = require("./methods/establecerMano");
const fetch = require("./methods/fetch");
const mano = require("./methods/mano");
const nivel = require("./methods/nivel");
const restarBanco = require("./methods/restarBanco");
const restarMano = require("./methods/restarMano");
const retirar = require("./methods/retirar");
const subirNivel = require("./methods/subirNivel");
const sumarBanco = require("./methods/sumarBanco");
const sumarMano = require("./methods/sumarMano");
const sumarNivel = require("./methods/sumarNivel");
const sumarXp = require("./methods/sumarXp");
const xp = require("./methods/xp");
const usuario = require("./models/usuario");
let mongoURL;
if (process.version.slice(1, 3) - 0 < 16) {
  throw new Error(
    `[Artz-Eco] Necesitas una versión de NodeJS superior a 16, estás usando la ${process.version}. Revisa https://nodejs.org para actualizar o usa tu administrador de paquetes.`
  );
}
class ArtzEconomy {
  static async setUrl(url) {
    if (!url)
      throw new Error(
        "[Artz-Eco] Tienes que proveer un link de mongoose válido."
      );
    mongoURL = url;
    return mongoose.connect(mongoURL);
  }
  static async crearPerfil(guildId, userId) {
    return crearPerfil(guildId, userId, usuario);
  }
  static async createProfile(guildId, userId) {
    return crearPerfil(guildId, userId, usuario);
  }
  static async borrarPerfil(guildId, userId) {
    return borrarPerfil(guildId, userId, usuario);
  }
  static async borrarPerfil(guildId, userId) {
    return deleteProfile(guildId, userId, usuario);
  }
  static async sumarMano(guildId, userId, cantidad) {
    return sumarMano(guildId, userId, cantidad, usuario);
  }
  static async addWallet(guildId, userId, cantidad) {
    return sumarMano(guildId, userId, cantidad, usuario);
  }
  static async sumarBanco(guildId, userId, cantidad) {
    return sumarBanco(guildId, userId, cantidad, usuario);
  }
  static async addBank(guildId, userId, cantidad) {
    return sumarBanco(guildId, userId, cantidad, usuario);
  }
  static async restarBanco(guildId, userId, cantidad) {
    return restarBanco(guildId, userId, cantidad, usuario);
  }
  static async substractBank(guildId, userId, cantidad) {
    return restarBanco(guildId, userId, cantidad, usuario);
  }
  static async restarMano(guildId, userId, cantidad) {
    return restarMano(guildId, userId, cantidad, usuario);
  }
  static async establecerBanco(guildId, userId, cantidad) {
    return establecerBanco(guildId, userId, cantidad, usuario);
  }
  static async setBank(guildId, userId, cantidad) {
    return establecerBanco(guildId, userId, cantidad, usuario);
  }
  static async establecerMano(guildId, userId, cantidad) {
    return establecerMano(guildId, userId, cantidad, usuario);
  }
  static async setWallet(guildId, userId, cantidad) {
    return establecerMano(guildId, userId, cantidad, usuario);
  }
  static async fetch(guildId, userId) {
    return fetch(guildId, userId, usuario);
  }
  static async mano(guildId, userId) {
    return mano(guildId, userId, usuario);
  }
  static async wallet(guildId, userId) {
    return mano(guildId, userId, usuario);
  }
  static async banco(guildId, userId) {
    return banco(guildId, userId, usuario);
  }
  static async bank(guildId, userId) {
    return banco(guildId, userId, usuario);
  }
  static async depositar(guildId, userId, cantidad) {
    return depositar(guildId, userId, cantidad, usuario);
  }
  static async deposit(guildId, userId, cantidad) {
    return depositar(guildId, userId, cantidad, usuario);
  }
  static async retirar(guildId, userId, cantidad) {
    return retirar(guildId, userId, cantidad, usuario);
  }
  static async withdraw(guildId, userId, cantidad) {
    return retirar(guildId, userId, cantidad, usuario);
  }
  static async xp(guildId, userId) {
    return xp(guildId, userId, usuario);
  }
  static async nivel(guildId, userId) {
    return nivel(guildId, userId, usuario);
  }
  static async level(guildId, userId) {
    return nivel(guildId, userId, usuario);
  }
  static async sumarXp(guildId, userId, cantidad) {
    return sumarXp(guildId, userId, cantidad, usuario);
  }
  static async addXp(guildId, userId, cantidad) {
    return sumarXp(guildId, userId, cantidad, usuario);
  }
  static async sumarNivel(guildId, userId, cantidad) {
    return sumarNivel(guildId, userId, cantidad, usuario);
  }
  static async addLevel(guildId, userId, cantidad) {
    return sumarNivel(guildId, userId, cantidad, usuario);
  }
  static async subirNivel(guildId, userId) {
    return subirNivel(guildId, userId, usuario);
  }
  static async levelUp(guildId, userId) {
    return subirNivel(guildId, userId, usuario);
  }
}
module.exports = ArtzEconomy;
