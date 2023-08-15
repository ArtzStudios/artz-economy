# Artz-Economy

- Artz Economy es un paquete de Node.JS creado para facilitar el uso de mongoose en la creación de una economía para bots de Discord.

## __Instalación__
```bash
npm install artz-economy
```

## __Changelog__

v0.0.3
* Se crearon las funciones: `mano`, `banco`, `depositar`, `retirar`.

v0.0.2
* Se corrigió un bug con el modelo de mongoose.

v0.0.1 
* Se crearon las funciones: `crearPerfil`, `borrarPerfil`, `sumarBanco`, `restarBanco`, `sumarMano`, `restarMano`, `establecerBanco`, `establecerMano`, `fetch`.

## __Métodos__
- [fetch](#fetch)
- [mano](#mano)
- [banco](#banco)
---
- [crearPerfil](#crearPerfil)
- [borrarPerfil](#borrarPerfil)
---
- [sumarBanco](#sumarBanco)
- [sumarMano](#sumarBanco)
---
- [restarMano](#restarMano)
- [restarBanco](#restarBanco)
---
- [establecerMano](#establecerMano)
- [establecerBanco](#establecerBanco)
---

## fetch

```js
fetch(guildId, userId)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

__Retorno__
- Retorna toda la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = eco.fetch(message.guild.id, message.author.id)

console.log(perfil)
```

---

## mano

```js
mano(guildId, userId)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

__Retorno__
- Retorna la cantidad de dinero en la mano del usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = eco.mano(message.guild.id, message.author.id)

console.log(perfil) // 300
```

---

## banco

```js
banco(guildId, userId)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

__Retorno__
- Retorna la cantidad de dinero en el banco del usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = eco.banco(message.guild.id, message.author.id)

console.log(perfil) // 300
```

---

## crearPerfil

```js
crearPerfil(guildId, userId)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

__Anotación__
* El uso de éste método no es obligatorio, cuando se intente ejecutar una acción *(sumarMano, sumarBanco, etcétera)*, si el perfil no existe, se creará automáticamente.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = eco.crearPerfil(message.guild.id, message.author.id)

console.log(perfil)
```

---

## borrarPerfil

```js
borrarPerfil(guildId, userId)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

__Anotación__
* El uso de éste método borrará toda la información sobre el usuario en el servidor, no habrá vuelta atrás tras realizar la misma.

__Retorno__
- Retorna la información que quedó sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = eco.borrarPerfil(message.guild.id, message.author.id)

console.log(perfil)
```

---

## sumarBanco
```js
sumarBanco(guildId, userId, cantidad)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **sumarle** al usuario.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = await eco.sumarBanco(message.guild.id, message.author.id, 300)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 1,
    banco: 300
}*/
```

---

## restarBanco
```js
sumarBanco(guildId, userId, cantidad)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **restarle** al usuario.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = await eco.restarBanco(message.guild.id, message.author.id, 300)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 1,
    banco: 0
}*/
```
---

## sumarMano
```js
sumarMano(guildId, userId, cantidad)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **sumarle** al usuario.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = await eco.sumarMano(message.guild.id, message.author.id, 300)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 300,
    banco: 0
}*/
```

---

## restarBanco
```js
restarMano(guildId, userId, cantidad)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **restarle** al usuario.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = await eco.restarMano(message.guild.id, message.author.id, 300)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 0
}*/
```

---

## establecerMano
```js
establecerMano(guildId, userId, cantidad)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **establecerle** al usuario.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = await eco.establecerMano(message.guild.id, message.author.id, 300)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 300,
    banco: 0
}*/
```

---

## establecerBanco
```js
establecerBanco(guildId, userId, cantidad)
```

__Argumentos__
1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **establecerle** al usuario.

__Retorno__
- Retorna la información sobre el usuario.

__Ejemplo__
```js
const eco = require("artz-economy").setUrl(mongodb)

let perfil = await eco.establecerBanco(message.guild.id, message.author.id, 300)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 300
}*/
```