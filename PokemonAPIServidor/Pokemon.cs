    namespace PokemonAPIServidor
{
    public class Pokemon
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Nivel { get; set; }
        public List<string> Tipo { get; set; } = new List<string>();
        public string Objeto { get; set; }

        public static List<Pokemon> pokedex = new List<Pokemon>
{
        new Pokemon { Id = 1, Nombre = "Bulbasaur", Nivel = 5, Tipo = new List<string> { "Planta", "Veneno" }, Objeto = "Bayas Aranja" },
        new Pokemon { Id = 2, Nombre = "Charmander", Nivel = 5, Tipo = new List<string> { "Fuego" }, Objeto = null },
        new Pokemon { Id = 3, Nombre = "Squirtle", Nivel = 5, Tipo = new List<string> { "Agua" }, Objeto = null }
};


    }
}
