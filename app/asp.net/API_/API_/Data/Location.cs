using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.Data;

namespace API_.Data
{
    public class Location
    {
        public int LocationID { get; set; }
        public string LocationName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public virtual Question Question { get; set; }
        public bool IsBoobyTrapped { get; set; }
        public int VictorTeamID { get; set; } = -1;
    }
}
