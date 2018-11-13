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
        public string Duration { get; set; }
        public int StartingBoobytraps { get; set; }
        public virtual List<Team> team { get; set; } = new List<Team>();
    }
}
