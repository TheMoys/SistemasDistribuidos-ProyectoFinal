# SistemasDistribuidos-ProyectoFinal

# Pokémon Team Manager

Este repositorio contiene una aplicación web y un servidor API para gestionar equipos de Pokémon. La aplicación permite a los usuarios ver una lista de Pokémon, añadir nuevos Pokémon a su equipo, editar y eliminar Pokémon existentes.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. **PokemonAPICliente**: Contiene la aplicación web desarrollada con React.
2. **PokemonAPIServidor**: Contiene el servidor API desarrollado con ASP.NET Core.

### PokemonAPICliente

La carpeta `pokemon-team-manager` dentro de `PokemonAPICliente` contiene el código fuente de la aplicación web. Algunos archivos importantes incluyen:

- `package.json`: Contiene las dependencias y scripts de la aplicación.
- `src/index.js`: Punto de entrada de la aplicación React.
- `src/components/AddPokemonModal.jsx`: Componente para añadir y editar Pokémon.

### PokemonAPIServidor

La carpeta `PokemonAPIServidor` contiene el código fuente del servidor API. Algunos archivos importantes incluyen:

- `Controllers/PokemonController.cs`: Controlador que maneja las solicitudes HTTP relacionadas con los Pokémon.
- `pokedex.json` y `equipo.json`: Archivos JSON que almacenan los datos de la Pokédex y del equipo de Pokémon, respectivamente.
- `Program.cs`: Configuración y arranque del servidor.

## Scripts Disponibles

En el directorio `PokemonAPICliente/pokemon-team-manager`, puedes ejecutar los siguientes comandos:

- `npm start`: Ejecuta la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm test`: Ejecuta las pruebas.
- `npm run eject`: Eyecta la configuración de Create React App.

## Servidor JSON

El archivo `server.js` en `PokemonAPICliente/pokemon-team-manager` configura un servidor JSON para servir los datos de Pokémon desde `src/pokemonData.json`.

## API Endpoints

El servidor API expone varios endpoints para gestionar los Pokémon:

- `GET /api/Pokemon`: Obtiene todos los Pokémon.
- `GET /api/Pokemon/{id}`: Obtiene un Pokémon por su ID.
- `POST /api/Pokemon`: Añade un nuevo Pokémon.
- `PUT /api/Pokemon/{id}`: Actualiza un Pokémon existente.
- `DELETE /api/Pokemon/{id}`: Elimina un Pokémon por su ID.
- `GET /api/Pokemon/equipo`: Obtiene el equipo de Pokémon.
- `POST /api/Pokemon/equipo/{id}`: Añade un Pokémon al equipo.
- `DELETE /api/Pokemon/equipo/{id}`: Elimina un Pokémon del equipo.

## Instalación

Para instalar las dependencias del cliente, navega a `PokemonAPICliente/pokemon-team-manager` y ejecuta:

```sh
npm install