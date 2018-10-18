using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_.Data
{
    public class Game
    {
        public int GameID { get; set; }
        public string GameCode { get; set; }
        public List<Team> team { get; set; }

        public Game()
        {
            team = new List<Team>();
        }
    }
}
