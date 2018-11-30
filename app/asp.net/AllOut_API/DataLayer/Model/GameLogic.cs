using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlloutAPI.Data
{
    public class GameLogic
    {
        public int GameLogicID { get; set; }
        public string GameCode { get; set; }
        public int AreaID { get; set; }
        public virtual List<Team> Team { get; set; } = new List<Team>();
        public DateTime StartTime { get; set; }
        public DateTime StopTime { get; set; }
        public Area Area { get; set; }
    }
}
