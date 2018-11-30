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
        public IActionResult putLocation(int a_id, int l_id, [FromBody]Location newLocation)
        {
            return Created("", locationFacade.putLocation(a_id, l_id, newLocation));
        }

        [HttpPost]
        public IActionResult postLocation(int a_id, [FromBody] Location newLocation)
        {
            return Created("", locationFacade.postLocation(a_id, newLocation));
        }

        [HttpGet]
        public List<Location> getLocations(int a_id)
        {
            return locationFacade.getLocations(a_id);
        }

        [Route("{id}")]
        [HttpGet]
        public Location getLocation(int a_id, int l_id)
        {
            return locationFacade.getLocation(a_id, l_id);
        }
    }
}