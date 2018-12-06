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

        public Location putLocation(int a_id, int l_id, Location newLocation)
        {
            var result = context.Areas.SingleOrDefault(g => g.AreaID == a_id);
            if (result != null)
            {
                var result2 = result.Locations.SingleOrDefault(e => e.LocationID == l_id);
                if (result != null)
                {
                    result2 = newLocation;
                }
                context.SaveChanges();
            }
            return newLocation;
        }

        public Location postLocation(int a_id, Location newLocation)
        {
            var result = context.Areas.SingleOrDefault(a => a.AreaID == a_id);
            if (result != null)
            {
                result.Locations.Add(newLocation);
                context.SaveChanges();
            }
            context.SaveChanges();

            return newLocation;
        }

        public List<Location> getLocations(int a_id)
        {
            var result = context.Areas.SingleOrDefault(a => a.AreaID == a_id);
            return result.Locations.ToList();
        }

        public Location getLocation(int a_id, int l_id)
        {
            var area = context.Areas.SingleOrDefault(a => a.AreaID == a_id);
            var locations = area.Locations.SingleOrDefault(l => l.LocationID == l_id);
            return locations;
        }
    }
}