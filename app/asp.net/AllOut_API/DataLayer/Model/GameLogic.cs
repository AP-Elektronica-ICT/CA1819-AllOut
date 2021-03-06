﻿using System;
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
        public List<Team> Team { get; set; }
        public string StartTime { get; set; }
        public string StopTime { get; set; }
        public bool HasStarted { get; set; }
        public int StartingTraps { get; set; }
    }
}
