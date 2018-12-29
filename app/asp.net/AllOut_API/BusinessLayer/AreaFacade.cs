using AlloutAPI;
using AlloutAPI.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BusinessLayer
{
    public class AreaFacade
    {
        private readonly DBContext context;
        public AreaFacade(DBContext context)
        {
            this.context = context;
        }
        public Area UpdateArea(Area updateArea)
        {
            Area result = context.Areas.Include(a => a.Locations).SingleOrDefault(a => a.AreaID == updateArea.AreaID);
            if (result != null)
            {
                result.Name = updateArea.Name;
                if(updateArea.Locations != null)
                {
                    for(int i = 0; i < updateArea.Locations.Count; i++)
                    {
                        if(i < result.Locations.Count)
                        {
                            result.Locations[i].LocationName = updateArea.Locations[i].LocationName;
                            result.Locations[i].Latitude = updateArea.Locations[i].Latitude;
                            result.Locations[i].Longitude = updateArea.Locations[i].Longitude;
                            result.Locations[i].IsBoobyTrapped = updateArea.Locations[i].IsBoobyTrapped;
                            result.Locations[i].VictorTeamID = updateArea.Locations[i].VictorTeamID;
                        }
                        else
                        {
                            result.Locations.Add(updateArea.Locations[i]);
                        }
                    }
                }
                context.SaveChanges();
            }
            return updateArea;
        }

        public Area PostArea(Area newArea)
        {
            context.Areas.Add(newArea);
            context.SaveChanges();

            return newArea;
        }

        public List<Area> GetAreas()
        {
            return context.Areas.Include(a => a.Locations).ToList();
        }

        public Area GetAreaById(int id)
        {
            int _id = id - 1;
            List<Area> list = context.Areas.Include(a => a.Locations).ToList();
            return list[_id];
        }
    }
}
