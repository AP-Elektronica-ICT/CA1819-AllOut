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
    [Route("api/v1/area/")]
    public class AreaController : Controller
    {
        private readonly DBContext context;
        private readonly AreaFacade areaFacade;
        public AreaController(DBContext context)
        {
            this.context = context;
            this.areaFacade = new AreaFacade(context);
        }
        [HttpPost]
        public IActionResult PostArea([FromBody] Area newArea = null)
        {
            if (newArea != null)
                areaFacade.PostArea(newArea);
            return Created("", areaFacade.PostArea(newArea));
        }
        [HttpGet]
        public List<Area> GetAreas()
        {
            return areaFacade.GetAreas();
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateArea(int id, [FromBody]Area update)
        {
            return Created("", areaFacade.UpdateArea(id, update));
        }
        [Route("{id}")]
        [HttpGet]
        public Area GetAreaById(int id)
        {
            return areaFacade.GetAreaById(id);
        }
    }
}
