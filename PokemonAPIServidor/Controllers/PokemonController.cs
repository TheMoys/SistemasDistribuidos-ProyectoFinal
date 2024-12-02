using Microsoft.AspNetCore.Mvc;
using PokemonAPIServidor;

namespace PokemonServidorREST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : ControllerBase
    {
        
        private static List<Pokemon> pokedex = new List<Pokemon>
        {
            new Pokemon { Id = 1, Nombre = "Bulbasaur", Nivel = 5, Tipo = new List<string> { "Planta", "Veneno" }, Objeto = "Bayas Aranja" },
            new Pokemon { Id = 2, Nombre = "Charmander", Nivel = 5, Tipo = new List<string> { "Fuego" }, Objeto = null },
            new Pokemon { Id = 3, Nombre = "Squirtle", Nivel = 5, Tipo = new List<string> { "Agua" }, Objeto = null }
        };

 
        [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            return pokedex;
        }

        
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var pokemon = pokedex.FirstOrDefault(p => p.Id == id);
            if (pokemon == null)
            {
                return NotFound($"No se encontró un Pokémon con el ID {id}");
            }
            return Ok(pokemon);
        }

        
        [HttpPost]
        public IActionResult Post([FromBody] Pokemon nuevoPokemon)
        {
            if (nuevoPokemon == null)
            {
                return BadRequest("El Pokémon no puede ser nulo.");
            }

            nuevoPokemon.Id = pokedex.Count > 0 ? pokedex.Max(p => p.Id) + 1 : 1; // Generar un nuevo ID
            pokedex.Add(nuevoPokemon);
            return CreatedAtAction(nameof(Get), new { id = nuevoPokemon.Id }, nuevoPokemon);
        }

        
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Pokemon pokemonActualizado)
        {
            if (pokemonActualizado == null)
            {
                return BadRequest("El Pokémon no puede ser nulo.");
            }

            var pokemon = pokedex.FirstOrDefault(p => p.Id == id);
            if (pokemon == null)
            {
                return NotFound($"No se encontró un Pokémon con el ID {id}");
            }

            
            pokemon.Nombre = pokemonActualizado.Nombre;
            pokemon.Nivel = pokemonActualizado.Nivel;
            pokemon.Tipo = pokemonActualizado.Tipo;
            pokemon.Objeto = pokemonActualizado.Objeto;

            return NoContent();
        }

        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var pokemon = pokedex.FirstOrDefault(p => p.Id == id);
            if (pokemon == null)
            {
                return NotFound($"No se encontró un Pokémon con el ID {id}");
            }

            pokedex.Remove(pokemon);
            return NoContent();
        }
    }
}
