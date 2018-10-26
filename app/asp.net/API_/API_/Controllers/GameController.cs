using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API_.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_.Controllers
{
    [Route("api/v1")]
    public class GameController : Controller
    {
        private readonly DBContext context;
        public GameController(DBContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("location")]
        [HttpPost]
        public IActionResult postGame([FromBody] Location newLocation)
        {
            newLocation.LocationID = context.Games.Count();
            context.Locations.Add(newLocation);

            return Created("", newLocation);
        }

        [Route("location")]
        [HttpGet]
        public List<Location> getLocations()
        {
            return context.Locations.ToList();
        }

        [Route("location/{id}")]
        [HttpGet]
        public Location getLocation(int id)
        {
            int _id = id - 1;
            List<Location> loc = context.Locations.ToList();
            if (loc[_id] != null)
                return loc[_id];
            else
                return null;
        }

        [Route("game")]
        [HttpPost]
        public IActionResult postGame([FromBody] Game newGame)
        {
            newGame.GameID = context.Games.Count();
            context.Games.Add(newGame);

            return Created("", newGame);
        }

        [Route("game")]
        [HttpGet]
        public List<Game> getGames()
        {
            return context.Games.ToList();
        }

        [Route("game/{id}")]
        [HttpGet]
        public Game getGame(int id)
        {
            List<Game> game = context.Games.ToList();
            if (game[id] != null)
                return game[id];
            else
                return null;
        }
    }
}
