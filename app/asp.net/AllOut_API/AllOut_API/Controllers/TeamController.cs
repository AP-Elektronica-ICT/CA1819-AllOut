using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlloutAPI.Data;
using AlloutAPI;
using BusinessLayer;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AllOut_API.Controllers
{
    [Route("api/v1/team/")]
    public class TeamController : Controller
    {
        private readonly DBContext context;
        private readonly TeamFacade teamFacade;

        public TeamController(DBContext context)
        {
            this.context = context;
            this.teamFacade = new TeamFacade(context); 
        }

        [HttpGet]
        public List<Team> getTeams()
        {
            return teamFacade.getTeams();
        }

        [HttpPost]
        public IActionResult PostTeam([FromBody] Team team)
        {
            return Created("", teamFacade.PostTeam(team));
        }
        [HttpPut]
        public IActionResult PutTeamPoints([FromBody] Team newTeamScore)
        {
            return Created("", teamFacade.PutTeamPoints(newTeamScore)); 
        }

    }
}
