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
                    new Pokemon { Id = 1, Nombre = "Bulbasaur", Nivel = 5, Tipo = new List<string> { "Planta", "Veneno" }, Objeto = "Bayas Aranja" },
                    new Pokemon { Id = 2, Nombre = "Charmander", Nivel = 5, Tipo = new List<string> { "Fuego" }, Objeto = null },
                    new Pokemon { Id = 3, Nombre = "Squirtle", Nivel = 5, Tipo = new List<string> { "Agua" }, Objeto = null }
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