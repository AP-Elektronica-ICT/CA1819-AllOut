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

        public Location putLocation(int l_id, Location newLocation)
        {
            Location result = context.Locations.SingleOrDefault(l => l.LocationID == l_id);
            if (result != null)
            {
                result.LocationName = newLocation.LocationName;
                result.Latitude = newLocation.Latitude;
                result.Longitude = newLocation.Longitude;
                result.Question = newLocation.Question;
                result.IsBoobyTrapped = newLocation.IsBoobyTrapped;

                context.SaveChanges();
            }
            return newLocation;
        }

        public Location postLocation(Location newLocation)
        {
            var result = context.Areas.SingleOrDefault();
            if (result != null)
            {
                result.Locations.Add(newLocation);
                context.SaveChanges();
            }
            context.SaveChanges();

            return newLocation;
        }

        public List<Location> getLocations()
        {
            var result = context.Locations.Include(l => l.Question);
            return result.ToList();
        }

        public Location getLocation(int id)
        {
            var location = context.Locations.Include(l => l.Question).SingleOrDefault(l => l.LocationID == id);
            return location;
        }
    }
}