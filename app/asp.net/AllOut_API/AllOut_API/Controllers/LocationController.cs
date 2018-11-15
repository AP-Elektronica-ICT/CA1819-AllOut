using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlloutAPI.Data;
using AlloutAPI;
using BusinessLayer;

namespace AllOut_API.Controllers
{
    [Route("api/v1/location/")]
    public class LocationController : Controller
    {
        private readonly DBContext context;
        private readonly LocationFacade locationFacade;

        public LocationController(DBContext context)
        {
            this.context = context;
            this.locationFacade = new LocationFacade(context);
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPut]
        public IActionResult putLocation(int id, [FromBody]Location newLocation)
        {
            return Created("", locationFacade.putLocation(id, newLocation));
        }

        [HttpPost]
        public IActionResult postGame([FromBody] Location newLocation)
        {
            newLocation.LocationID = context.Games.Count();
            context.Locations.Add(newLocation);
            context.SaveChanges();

            return Created("", newLocation);
        }

        [HttpGet]
        public List<Location> getLocations()
        {
            return context.Locations.Include("Question").ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public Location getLocation(int id)
        {
            int _id = id - 1;
            List<Location> list = context.Locations.Include("Question").ToList();
            return list[_id];
        }
    }
}
