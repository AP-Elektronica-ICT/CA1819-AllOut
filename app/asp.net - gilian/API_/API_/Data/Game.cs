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
        public virtual List<Team> Team { get; set; } = new List<Team>();
        public DateTime StartTime { get; set; }
        public DateTime StopTime { get; set; }
        public int Boobytraps { get; set; }
    }
}
