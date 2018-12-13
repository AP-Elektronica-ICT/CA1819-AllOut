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

        [HttpPut]
        public IActionResult putLocation(int l_id, [FromBody]Location newLocation)
        {
            return Created("", locationFacade.putLocation(l_id, newLocation));
        }
        

        [HttpGet]
        public List<Location> getLocations()
        {
            return locationFacade.getLocations();
        }

        [Route("{id}")]
        [HttpGet]
        public Location getLocation(int id)
        {
            return locationFacade.getLocation(id);
        }
    }
}