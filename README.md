# Acerca del proyecto 📝

Palomazos es un sitio donde los usuarios podrán compartir sus reseñas, 
comentar opiniones y compartir su gusto por las películas tanto clásicas 
como actuales. Permitiendo generar una comunidad cinéfila que permita a 
todos descubrir nuevas obras del septimo arte. En este proyecto desarrollamos
las vistas de la aplicación utilizando Vite/React.

<b>Caracteristicas principales: </b>📌

<ul>
    <li>Elegir una pelicula para realizar un review.</li>
    <li>Agregar comentarios a las peliculas.</li>
    <li>Puntuar peliculas.</li>
</ul>

## Desarrollado con 🔐

El stack utilizado para desarrollar esta API Rest es el siguiente:

* Vite v4.x
* Material UI
* Emotion/React
* Formik
* Yup
* React Router Dom

## Arrancando 🚀

* Clonar el repo:
  ```bash
  git clone https://github.com/Team21-Fullstack-JS/palomazos.git
  ```

### Pre-requisitos 📋

* Asegurate de estar en la carpeta `/palomazos`
  ```bash
    cd palomazos
    ```
* Ejecutar el siguiente comando para instalar todas las dependencias del proyecto.
  ```bash
    npm install
  ```
* Si deseas probar en modo de desarrollo ejecuta:
  ```bash
    npm run dev
  ```
  No olvides configurar la variable de entorno de tu token de la API the [themoviedb](https://www.themoviedb.org) en tu archivo `.env`, guiate con el archivo `.env.example`
<br><br>
* O puedes ir a la siguiente sección `Demo del frontend` para ejecutarlo en modo de producción.
  <br><br>
* **Importante:** El grid de peliculas se alimenta de la API de [themoviedb](https://www.themoviedb.org) por lo que debes darte de alta y
  y obtener tu token para poder ver las peliculas. **Los comentarios y puntuaciones** se guardan en nuestra propia API Rest de [palomazos-api](https://palomazos-api-a0bcbaa57f47.herokuapp.com/api/v1/documentation/), 
  la cual esta corriendo en un servidor de Heroku (ver seccion _Demo Backend_.).

## Demo del Frontend 🖥️
- [palomazos](https://team21-fullstack-js.github.io/palomazos/) &nbsp; Date de alta y comenta en las películas.

## Proceso: ⏯
1. [x] En primera instancia tenemos el **menu principal**, el cual se encuentra en la cabecera del sitio web.
    ```markdown
    * Inicio. Esta es la pagina principal del sitio web.
    * Peliculas. Aqui se muestran todas las peliculas disponibles. Obtiene la informacion de la API de [themoviedb](https://www.themoviedb.org).
    * Contacto. Aqui se muestra un formulario de contacto del sitio web.
   ```
   Los usuarios sin registro pueden acceder a estas paginas. En el punto 3 abordaremos la seccion `Peliculas`.
    <br><br>
2. [x] En segunda instancia tenemos el **menu de usuario**, en donde se muestran diferentes opciones segun si el usuario esta registrado o no.
    ```markdown
    Opciones para usuarios no registrados:
   
    * Ingresar. Aqui el usuario puede iniciar sesion en el sitio web.
    * Registro. Aqui el usuario puede registrarse en el sitio web.
   ```
   
    ```markdown
   Opciones para usuarios registrados:
   
    * Mi cuenta. Aqui el usuario puede ver su informacion.
    * Mis peliculas. Aqui el usuario puede ver las peliculas que ha comentado.
    * Cerrar sesion. Aqui el usuario puede cerrar su sesion.
   ```
 3. [x] En tercera instancia tenemos la **seccion de peliculas**, en donde se muestran todas las peliculas disponibles.
        Esta seccion tiene un submenu que permite mostrar las peliculas por `Populares`, `Mas valoradas`, `En cartelera` y `Proximamente`. Un usuario sin registro puede ver los comentarios y puntuaciones pero si desea agregar su review debe registrarse.

## Demo del Backend 👨‍💻
- [palomazos-api](https://palomazos-api-a0bcbaa57f47.herokuapp.com/api/v1/documentation/) &nbsp; Visita la documentación de la API Rest.

## Autores ✒️

* **Hiram Chávez** - [JustLearningMX](https://github.com/JustLearningMX)
* **Marco Ibarra** - [mibarra24](https://github.com/mibarra24)
* **Carlos Chirinos** - [carchirinos](https://github.com/carchirinos)
* **Dario Carbajal** - [Madhra](https://github.com/Madhra)