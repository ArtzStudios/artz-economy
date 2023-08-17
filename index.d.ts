type User = {
  userId: string;
  guildId: string;
  banco: number;
  mano: number;
};

declare module "artz-economy" {
  export default class MEconomy {
    static async setUrl(url: string): Promise<typeof import("mongoose")>;
    static async crearPerfil(guildId: string, userId: string): Promise<User>;
    static async borrarPerfil(guildId: string, userId: string): Promise<User>;
    static async sumarMano(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async sumarBanco(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async restarMano(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async restarBanco(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async establecerBanco(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async establecerMano(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async banco(guildId: string, userId: string): Promise<User>;
    static async mano(guildId: string, userId: string): Promise<User>;
    static async depositar(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async retirar(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async xp(guildId: string, userId: string): Promise<User>;
    static async nivel(guildId: string, userId: string): Promise<User>;
    static async sumarXp(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async sumarNivel(
      guildId: string,
      userId: string,
      cantidad: number
    ): Promise<User>;
    static async subirNivel(guildId: string, userId: string): Promise<User>;
  }
}
