![ArtzStudios](https://cdn.discordapp.com/attachments/1132381924720136202/1138475304566927380/artz.png)

# **Artz-Economy**

- Artz Economy es un paquete de Node.JS creado para facilitar el uso de mongoose en la creación de una economía para bots de Discord utilizando [MongoDB](https://www.mongodb.com/).

![npm](https://img.shields.io/npm/dw/artz-economy) ![npm](https://img.shields.io/npm/v/artz-economy) ![Discord](https://img.shields.io/discord/1119512494042521690)

## **Soporte y comunidad**

- [Discord Oficial](https://discord.gg/Wps6zRufXj)

## **Instalación**

```bash
npm install artz-economy@latest
```

## **Changelog**

v0.1.0-b _Actual_

- Se eliminó la importación de ciertas cosas no necesarias. _(Éste cambio se verá reflejado en los archivos de [npmjs](https://npmjs.com/package/artz-economy) y no en el repositorio)_

v0.1.0-a

- Se agregaron opciones de niveles, entre ello, los métodos: `xp`, `nivel`, `sumarXp`, `sumarNivel`, `subirNivel`.

v0.0.4c

- Se cambió de licencia y se añadió un apartado de soporte y comunidad.

v0.0.4b

- Se agregó información e imágenes al archivo.

v0.0.4

- Se corrigió y ordenó la información de los métodos.

v0.0.3

- Se crearon las funciones: `mano`, `banco`, `depositar`, `retirar`.

v0.0.2

- Se corrigió un bug con el modelo de mongoose.

v0.0.1

- Se crearon las funciones: `crearPerfil`, `borrarPerfil`, `sumarBanco`, `restarBanco`, `sumarMano`, `restarMano`, `establecerBanco`, `establecerMano`, `fetch`.

## **Métodos**

- [fetch](#fetch)
- [crearPerfil (createProfile)](#crearPerfil)
- [borrarPerfil (deleteProfile)](#borrarPerfil)

---

- [mano (wallet)](#mano)
- [sumarMano (addWallet)](#sumarBanco)
- [restarMano (substractWallet)](#restarMano)
- [establecerMano (setWallet)](#establecerMano)
- [retirar (withdraw)](#retirar)

---

- [banco (bank)](#banco)
- [sumarBanco (addBank)](#sumarBanco)
- [restarBanco (substractBank)](#restarBanco)
- [establecerBanco (setBank)](#establecerBanco)
- [depositar (deposit)](#depositar)

---

- [xp (xp)](#xp)
- [nivel (level)](#nivel)
- [sumarXp (addXp)](#sumarXp)
- [sumarNivel (addlevel)](#sumarNivel)
- [subirNivel (levelUp)](#subirNivel)

## fetch

```js
fetch(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Retorno**

- Retorna toda la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = eco.fetch(message.guild.id, message.author.id);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 300,
    banco: 0
}*/

console.log(perfil.mano); // 300
```

## crearPerfil

```js
crearPerfil(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Anotación**

- El uso de éste método no es obligatorio, cuando se intente ejecutar una acción _(sumarMano, sumarBanco, etcétera)_, si el perfil no existe, se creará automáticamente.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = eco.crearPerfil(message.guild.id, message.author.id);

console.log(perfil);
```

## borrarPerfil

```js
borrarPerfil(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Anotación**

- El uso de éste método borrará toda la información sobre el usuario en el servidor, no habrá vuelta atrás tras realizar la misma.

**Retorno**

- Retorna la información que quedó sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = eco.borrarPerfil(message.guild.id, message.author.id);

console.log(perfil);
```

## mano

```js
mano(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Retorno**

- Retorna la cantidad de dinero en la mano del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = eco.mano(message.guild.id, message.author.id);

console.log(perfil); // 300
```

## sumarMano

```js
sumarMano(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **sumarle** al usuario.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = await eco.sumarMano(message.guild.id, message.author.id, 300);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 300,
    banco: 0
}*/
```

## restarMano

```js
restarMano(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **restarle** al usuario.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = await eco.restarMano(message.guild.id, message.author.id, 300);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 0
}*/
```

## establecerMano

```js
establecerMano(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **establecerle** al usuario.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = await eco.establecerMano(message.guild.id, message.author.id, 600);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 600,
    banco: 0
}*/
```

## depositar

```js
depositar(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **depositar**.

**Retorno**

- Retorna la información sobre el usuario.

**Anotación**

- Si el usuario no tiene suficiente dinero, no se hará la operación, por lo que no es necesario realizarlo en el código.

**Ejemplo**

```js
const eco = require("artz-economy")
eco.setUrl(mongodb)

let perfil = await eco.depositar(message.guild.id, message.author.id, 600)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 600,
    banco: 0
}*/
>
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 600
}
```

## banco

```js
banco(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Retorno**

- Retorna la cantidad de dinero en el banco del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = eco.banco(message.guild.id, message.author.id);

console.log(perfil); // 300
```

## sumarBanco

```js
sumarBanco(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **sumarle** al usuario.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = await eco.sumarBanco(message.guild.id, message.author.id, 300);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 1,
    banco: 300
}*/
```

## restarBanco

```js
sumarBanco(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **restarle** al usuario.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = await eco.restarBanco(message.guild.id, message.author.id, 300);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 1,
    banco: 0
}*/
```

## establecerBanco

```js
establecerBanco(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **establecerle** al usuario.

**Retorno**

- Retorna la información sobre el usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let perfil = await eco.establecerBanco(
  message.guild.id,
  message.author.id,
  300
);

console.log(perfil);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 300
}*/
```

## retirar

```js
retirar(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de dinero a **retirar**.

**Retorno**

- Retorna la información sobre el usuario.

**Anotación**

- Si el usuario no tiene suficiente dinero, no se hará la operación, por lo que no es necesario realizarlo en el código.

**Ejemplo**

```js
const eco = require("artz-economy")
eco.setUrl(mongodb)

let perfil = await eco.depositar(message.guild.id, message.author.id, 600)

console.log(perfil)
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 600
}*/
>
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 600,
    banco: 0
}
```

## xp

```js
xp(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Retorno**

- Retorna la experiencia del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let exp = await eco.xp(message.guild.id, message.author.id);

console.log(exp); // 396
```

## nivel

```js
nivel(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Retorno**

- Retorna el nivel del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let nivel = await eco.nivel(message.guild.id, message.author.id);

console.log(nivel); // 3
```

## sumarXp

```js
sumarXp(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de experiencia a sumar al usuario.

**Retorno**

- Retorna la información del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let exp = await eco.sumarXp(message.guild.id, message.author.id, 333);

console.log(exp);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 600,
    xp: 433,
    nivel: 1
}*/
```

## sumarNivel

```js
sumarNivel(guildId, userId, cantidad);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.
3. **cantidad:** Acá se insertará la cantidad de niveles a sumar al usuario.

**Anotación**

- Se recomienda el uso del método `subirNivel` en lugar de éste método.

**Retorno**

- Retorna la información del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let exp = await eco.sumarNivel(message.guild.id, message.author.id, 3);

console.log(exp);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 600,
    xp: 433,
    nivel: 4
}*/
```

## subirNivel

```js
subirNivel(guildId, userId);
```

**Argumentos**

1. **guildId:** Acá se deberá insertar la ID de un servidor, la cual se usará para separar la información de un mismo usuario de varios servidores.
2. **userId:** Acá se deberá insertar la ID del usuario que contendrá la información del mismo.

**Anotación**

- Éste método reiniciará la experiencia del usuario.

**Retorno**

- Retorna la información del usuario.

**Ejemplo**

```js
const eco = require("artz-economy");
eco.setUrl(mongodb);

let exp = await eco.subirNivel(message.guild.id, message.author.id);

console.log(exp);
/* {
    guildID: 'id de la guild',
    userID: 'id del usuario',
    mano: 0,
    banco: 600,
    xp: 0,
    nivel: 2
}*/
```
