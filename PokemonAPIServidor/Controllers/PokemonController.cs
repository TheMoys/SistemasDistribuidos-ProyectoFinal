using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PokemonAPIServidor;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;

namespace PokemonServidorREST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : ControllerBase
    {
        private static readonly string filePath = "pokedex.json";

        private static List<Pokemon> LoadPokedex()
        {
            if (!System.IO.File.Exists(filePath))
            {
                return new List<Pokemon>
        {
            new Pokemon { Id = 1, Nombre = "Bulbasaur", Nivel = 5, Tipo = new List<string> { "Planta", "Veneno" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Gruñido", "Látigo Cepa", "Polvo Veneno" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
            new Pokemon { Id = 2, Nombre = "Ivysaur", Nivel = 16, Tipo = new List<string> { "Planta", "Veneno" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Gruñido", "Látigo Cepa", "Polvo Veneno" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
            new Pokemon { Id = 3, Nombre = "Venusaur", Nivel = 32, Tipo = new List<string> { "Planta", "Veneno" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Gruñido", "Látigo Cepa", "Polvo Veneno" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
            new Pokemon { Id = 4, Nombre = "Charmander", Nivel = 5, Tipo = new List<string> { "Fuego" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Arañazo", "Gruñido", "Ascuas", "Lanzallamas" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
            new Pokemon { Id = 5, Nombre = "Charmeleon", Nivel = 16, Tipo = new List<string> { "Fuego" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Arañazo", "Gruñido", "Ascuas", "Lanzallamas" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
            new Pokemon { Id = 6, Nombre = "Charizard", Nivel = 36, Tipo = new List<string> { "Fuego", "Volador" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Arañazo", "Gruñido", "Ascuas", "Lanzallamas" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
            new Pokemon { Id = 7, Nombre = "Squirtle", Nivel = 5, Tipo = new List<string> { "Agua" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Látigo", "Burbuja", "Pistola Agua" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
            new Pokemon { Id = 8, Nombre = "Wartortle", Nivel = 16, Tipo = new List<string> { "Agua" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Látigo", "Burbuja", "Pistola Agua" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
            new Pokemon { Id = 9, Nombre = "Blastoise", Nivel = 36, Tipo = new List<string> { "Agua" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Látigo", "Burbuja", "Pistola Agua" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
            new Pokemon { Id = 10, Nombre = "Caterpie", Nivel = 3, Tipo = new List<string> { "Bicho" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Disparo Demora" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
            new Pokemon { Id = 11, Nombre = "Metapod", Nivel = 7, Tipo = new List<string> { "Bicho" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Fortaleza" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
            new Pokemon { Id = 12, Nombre = "Butterfree", Nivel = 10, Tipo = new List<string> { "Bicho", "Volador" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Confusión", "Polvo Veneno", "Paralizador", "Somnífero" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
            new Pokemon { Id = 13, Nombre = "Weedle", Nivel = 3, Tipo = new List<string> { "Bicho", "Veneno" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Picotazo Veneno", "Disparo Demora" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
            new Pokemon { Id = 14, Nombre = "Kakuna", Nivel = 7, Tipo = new List<string> { "Bicho", "Veneno" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Fortaleza" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
            new Pokemon { Id = 15, Nombre = "Beedrill", Nivel = 10, Tipo = new List<string> { "Bicho", "Veneno" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Picotazo Veneno", "Ataque Furia", "Doble Filo", "Tijera X" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
            new Pokemon { Id = 16, Nombre = "Pidgey", Nivel = 3, Tipo = new List<string> { "Normal", "Volador" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Ataque Arena" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
            new Pokemon { Id = 17, Nombre = "Pidgeotto", Nivel = 18, Tipo = new List<string> { "Normal", "Volador" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Ataque Arena", "Tornado", "Ataque Ala" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
            new Pokemon { Id = 18, Nombre = "Pidgeot", Nivel = 36, Tipo = new List<string> { "Normal", "Volador" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Ataque Arena", "Tornado", "Ataque Ala" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
            new Pokemon { Id = 19, Nombre = "Rattata", Nivel = 3, Tipo = new List<string> { "Normal" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Ataque Rápido", "Mordisco", "Hiperrayo" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
            new Pokemon { Id = 20, Nombre = "Raticate", Nivel = 20, Tipo = new List<string> { "Normal" }, Objeto = "Bayas Aranja", Ataques = new List<string> { "Placaje", "Ataque Rápido", "Mordisco", "Hiperrayo" }, Imagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" }
        };
            }

            var json = System.IO.File.ReadAllText(filePath);
            return JsonConvert.DeserializeObject<List<Pokemon>>(json);
        }

        private static void SavePokedex(List<Pokemon> pokedex)
        {
            var json = JsonConvert.SerializeObject(pokedex, Newtonsoft.Json.Formatting.Indented);
            System.IO.File.WriteAllText(filePath, json);
        }

        private static List<Pokemon> pokedex = LoadPokedex();

        [HttpGet]
        public async Task<IEnumerable<Pokemon>> Get()
        {
            return await Task.FromResult(pokedex);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var pokemon = await Task.FromResult(pokedex.FirstOrDefault(p => p.Id == id));
            if (pokemon == null)
            {
                return NotFound($"No se encontró un Pokémon con el ID {id}");
            }
            return Ok(pokemon);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Pokemon nuevoPokemon)
        {
            if (nuevoPokemon == null)
            {
                return BadRequest("El Pokémon no puede ser nulo.");
            }

            nuevoPokemon.Id = pokedex.Count > 0 ? pokedex.Max(p => p.Id) + 1 : 1; 
            pokedex.Add(nuevoPokemon);
            SavePokedex(pokedex);
            return await Task.FromResult(CreatedAtAction(nameof(Get), new { id = nuevoPokemon.Id }, nuevoPokemon));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Pokemon pokemonActualizado)
        {
            if (pokemonActualizado == null)
            {
                return BadRequest("El Pokémon no puede ser nulo.");
            }

            var pokemon = await Task.FromResult(pokedex.FirstOrDefault(p => p.Id == id));
            if (pokemon == null)
            {
                return NotFound($"No se encontró un Pokémon con el ID {id}");
            }

            pokemon.Nombre = pokemonActualizado.Nombre;
            pokemon.Nivel = pokemonActualizado.Nivel;
            pokemon.Tipo = pokemonActualizado.Tipo;
            pokemon.Objeto = pokemonActualizado.Objeto;
            pokemon.Ataques = pokemonActualizado.Ataques; 
            pokemon.Imagen = pokemonActualizado.Imagen;

            SavePokedex(pokedex);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var pokemon = await Task.FromResult(pokedex.FirstOrDefault(p => p.Id == id));
            if (pokemon == null)
            {
                return NotFound($"No se encontró un Pokémon con el ID {id}");
            }

            pokedex.Remove(pokemon);
            SavePokedex(pokedex);
            return NoContent();
        }
    }
}