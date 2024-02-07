![ArtzStudios](https://cdn.discordapp.com/attachments/1132381924720136202/1138475304566927380/artz.png)

# **Artz-Economy**

- Artz Economy es un paquete que se enfoca en la búsqueda de mejorar la creación de un sistema de economía para un bot de Discord, éste trabaja con [MongoDB](https://www.mongodb.com/) para su almacenamiento.

![npm](https://img.shields.io/npm/dw/artz-economy) ![npm](https://img.shields.io/npm/v/artz-economy) ![Discord](https://img.shields.io/discord/1119512494042521690)

## **Instalación**

```bash
npm install artz-economy@latest
```

## **Métodos**
### Generales
- [obtener - fetch](#obtener)

### Efectivo - Wallet
- [efectivo - wallet](#efectivo)
- [eañadir - wadd](#eañadir)
- [eremover - wrem](#eremover)
- [wset](#wset)

### Banco
- [banco - bank](#efectivo)
- [bañadir - badd](#eañadir)
- [bremover - brem](#eremover)
- [bset](#wset)

### Transferencias
- [depositar - deposit](#depositar)
- [extraer - withdraw](#extraer)

## **Changelog**

v0.2.0 _Actual_

- Se corrigió los errores que hacian que el paquete no funcione correctamente.
- Se re-estructuró en su totalidad el paquete.
- Se organizó los archivos del paquete.
- Se removió **en su totalidad** el sistema de niveles, ésto se implementará más adelante con un mejor desarrollo del paquete.

v0.1.0-b

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
---

# Generales
## Obtener

### Modo de uso
```js
artzeconomy.obtener(UserID, GuildID, Opcion)
artzeconomy.fetch(UserID, GuildID, Option)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Opcion *(opcional | **wallet**, **efectivo**, **bank**, **banco**)*: Opción específica a obtener.

### Retorno
- Número (Integer).

---
# Efectivo - Wallet:
## Efectivo

### Modo de uso
```js
artzeconomy.efectivo(UserID, GuildID, Monto);
artzeconomy.wallet(UserID, GuildID, Amount);
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(opcional)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---
## Eañadir

### Modo de uso
```js
artzeconomy.eañadir(UserID, GuildID, Monto)
artzeconomy.wadd(UserID, GuildID, Monto)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(obligatorio)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---
## Eremover

### Modo de uso
```js
artzeconomy.eremover(UserID, GuildID, Monto);
artzeconomy.wrem(UserID, GuildID, Amount);
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(obligatorio)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---
## Wset

### Modo de uso
```js
artzeconomy.wset(UserID, GuildID, Monto)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(Obligatorio)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---

# Banco - Bank
## Banco

### Modo de uso
```js
artzeconomy.banco(UserID, GuildID, Monto);
artzeconomy.bank(UserID, GuildID, Amount);
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(opcional)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---
## Bañadir

### Modo de uso
```js
artzeconomy.bañadir(UserID, GuildID, Monto)
artzeconomy.badd(UserID, GuildID, Monto)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(obligatorio)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---
## Bremover

### Modo de uso
```js
artzeconomy.bremover(UserID, GuildID, Monto);
artzeconomy.brem(UserID, GuildID, Amount);
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(obligatorio)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
---
## Bset

### Modo de uso
```js
artzeconomy.bset(UserID, GuildID, Monto)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(Obligatorio)*: Cantidad de dinero a establecer.

### Retorno
- Número (Integer).
----
# Transferencias
## Depositar

### Modo de uso
```js
artzeconomy.depositar(UserID, GuildID, Monto)
artzeconomy.deposit(UserID, GuildID, Amount)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(Obligatorio)*: Cantidad de dinero a depositar.

### Retorno
- False (Caso de no tener suficiente dinero).
- Número (Integer).

## Extraer

### Modo de uso
```js
artzeconomy.extraer(UserID, GuildID, Monto)
artzeconomy.extract(UserID, GuildID, Amount)
```

### Parámetros
- UserID *(obligatorio)*: ID del usuario.
- GuildID *(obligatorio)*: ID del servidor.
- Monto *(Obligatorio)*: Cantidad de dinero a extraer.

### Retorno
- False (Caso de no tener suficiente dinero).
- Número (Integer).
