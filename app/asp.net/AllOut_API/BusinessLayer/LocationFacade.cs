using AlloutAPI;
using AlloutAPI.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BusinessLayer
{
    public class LocationFacade
    {
        private readonly DBContext context;
        public LocationFacade(DBContext context)
        {
            this.context = context;
        }
        
        public Location PutLocation(int id, Location newLocation)
        {
            var result = context.Locations.SingleOrDefault(g => g.LocationID == id);
            if (result != null)
            {
                result = newLocation;
                context.SaveChanges();
            }
            return newLocation;
        }
        
        public Location PostGame(Location newLocation)
        {
            newLocation.LocationID = context.Games.Count();
            context.Locations.Add(newLocation);
            context.SaveChanges();

            return newLocation;
        }

        public List<Location> GetLocations()
        {
            return context.Locations.Include("Question").ToList();
        }
        
        public Location GetLocationById(int id)
        {
            int _id = id - 1;
            List<Location> list = context.Locations.Include("Question").ToList();
            return list[_id];
        }
    }
}
