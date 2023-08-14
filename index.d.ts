type User = {
    userId: string,
    guildId: string,
    banco: number,
    mano: number
}

declare module "artz-economy" {
    export default class MEconomy {
        static async setUrl(url: string): Promise<typeof import("mongoose")>
        static async crearPerfil(guildId: string, userId: string): Promise<User>
        static async borrarPerfil(guildId: string, userId: string): Promise<User>
        static async sumarMano(guildId: string, userId: string, cantidad: number): Promise<User>
        static async sumarBanco(guildId: string, userId: string, cantidad: number): Promise<User>
        static async restarMano(guildId: string, userId: string, cantidad: number): Promise<User>
        static async restarBanco(guildId: string, userId: string, cantidad: number): Promise<User>
        static async establecerBanco(guildId: string, userId: string, cantidad: number): Promise<User>
        static async establecerMano(guildId: string, userId: string, cantidad: number): Promise<User>
    } 
}