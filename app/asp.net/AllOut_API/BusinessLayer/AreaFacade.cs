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
        public Area UpdateArea(Area update)
        {
            Area result = context.Areas.SingleOrDefault(g => g.AreaID == update.AreaID);
            if (result != null)
            {
                result.Name = update.Name;
                context.SaveChanges();
            }
            return update;
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
