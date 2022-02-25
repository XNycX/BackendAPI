# BackendApi Films2022

Es el cuarto proyecto que realizo en [GeekHubs Academy](https://geekshubsacademy.com/), consiste en la realización de un Backend, utilizando MySql, Sequelize, Express y NodeJS.


## Pre-requisitos 📋

Necesitaremos la instalación de un programa para realizar nuestro código, en este proyecto se ha utilizado [Visual studio code](https://code.visualstudio.com/Download/),

### Tecnologías utilizadas 🚀

El proyecto ha sido desarrollado utilizando los siguientes paquetes en Nodejs:

* Axios
* Bcryptjs
* Cors
* Dotenv
* Express
* Jsonwebtoken
* Mysql2
* Nodemailer
* Nodemon
* Sequelize

## ¿Como desplegar el proyecto? 📋
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo:

Clonarte el repositorio localmente:
> git clone <url del repositorio>
Instalar las depedencias necesarias:
> npm i
Rellenar las variables necesarias en estos archivos para iniciar el proyecto:
> config.example.json -> Incluir campos Username, Password, Database
> .env.example -> Puerto en el que quieras que se ejecute el server y jwt_secret para la utilización de jsonwebtoken en la autenticación del usuario
Creamos la base de datos:
> sequelize db:create
Creamos las migraciones:
> sequelize db:migrate
Creamos los seeders (datos de prueba para nuestra base de datos):
> sequelize db:seed:all

😊 Genial ya tenemos todo listo para poder llamar a los endpoints, ya podemos recibir y modificar datos 😊
## Modelo de la base de datos 🔧

El diagrama de nuestra base de datos:
  
## Endpoints 🛠️

El sistema puede realizar las siguientes acciones:

- CRUD Movies
- CRUD Orders
- CRUD Users
- CRUD Actors
- Encriptación de ciertos campos mediante Bcryptjs
- Proceso de autenticación mediante jsonwebtoken
- El sistema permite administrar a los usuarios por roles
- Registro mediante email de confirmación o sin email
- Registrar varias peliculas a la vez a traves de array

## Autores ✒️

* **Cristian Santamaria** - *Realización del proyecto total*
