# Desafío técnico programador Fullstack - Haciendola.com - Backend

Este proyecto se realizó con tecnología Node.js y express.js con TypeScript, utilizando como ORM a Sequelize.

## Importante

La base de datos fue hecha con MySQL en un servidor gratuito, por lo tanto, en el correo que enviaré con los 
repositorios, adjuntaré el archivo .env para que lo puedan correr sin problema.

De igual manera, en dado caso que ustedes requieran crear una nueva base de datos, se reemplazan los valores en las 
variables de entorno y en la ruta ./src/database dejaré dos archivos .sql los cuales tienen los scripts para 
la creación de las dos tablas y la creación de todos los registros de los productos.

Para conectarse a la aplicación en cuanto se corran los dos proyectos, se deja en base de datos las siguientes
credenciales:

- Email: usuarioprueba@mail.com
- Password: Pass123.


## Scripts

Antes de todo recordar instalar las dependencias necesarias para el proyecto.

### `npm install`

Para correr en local se ejecuta el siguiente script:

### `npm run dev`

La aplicación correrá en modo de desarrollo
en la ruta [http://localhost:4000](http://localhost:4000).

Para correr el proyecto en un ambiente producción es necesario ejecutar primero el build y luego el start.

### `npm run build`
### `npm run start`
