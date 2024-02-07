artzLogger = function(data)
{
  console.log(`[Artz-Eco - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]`.bgCyan, data)
}
const mongoose = require('mongoose')
const { wallet, wadd, wrem, wset } = require("./src/methods/wallet")
const { bank, badd, brem, bset } = require("./src/methods/bank")
const { fetch, deposit, withdraw } = require("./src/methods/others")
require("colors");
let mongourl;
class ArtzEconomy {
  static async setUrl(url) {
    if(!url || !url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) return artzLogger("El URL de MongoDB es inválido.".bgRed);
    mongourl = url;
    return await mongoose.connect(mongourl).catch(e => artzLogger(e))
  }
  static wallet = wallet;
  static efectivo = wallet;
  static wadd = wadd;
  static wrem = wrem;
  static wset = wset;
  static eañadir = wadd;
  static eremover = wrem;

  static deposit = deposit;
  static depositar = deposit;
  static withdraw = withdraw;
  static extraer = withdraw;
  
  static bank = bank;
  static banco = bank;
  static badd = badd;
  static bañadir = badd;
  static brem = brem;
  static bremover = brem;
  static bset = bset;

  static fetch = fetch;
  static obtener = fetch;
}
module.exports = ArtzEconomy