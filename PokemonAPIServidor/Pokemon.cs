    namespace PokemonAPIServidor
{
    public class Pokemon
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Nivel { get; set; }
        public List<string> Tipo { get; set; }
        public string Objeto { get; set; }
        public List<string> Ataques { get; set; } 
        public string Imagen { get; set; } 
    }
}
