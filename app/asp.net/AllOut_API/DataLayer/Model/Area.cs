﻿using AlloutAPI.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Model
{
    public class Area
    {
        public int AreaID { get; set; }
        public List<Location> Locations { get; set; }
        public string Name { get; set; }
    }
}