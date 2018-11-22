using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlloutAPI.Data
{
    public class Team
    {
        public int TeamID { get; set; }
        public int GameID { get; set; }
        public string TeamName { get; set; }
        public int TotalPoints { get; set; }
        public int TotalBoobyTraps { get; set; }
    }
}
