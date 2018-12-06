using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_.Controllers
{
    [Route("api/v1")]
    public class GameController : Controller
    {
        private readonly GameDBContext context;
        public GameController(GameDBContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("location")]
        [HttpPut]
        public IActionResult putLocation(int id, [FromBody]Location newLocation)
        {
            var result = context.Locations.SingleOrDefault(g => g.LocationID == id);
            if (result != null)
            {
                result = newLocation;
                context.SaveChanges();
            }
            return Created("", result);
        }


        [Route("location")]
        [HttpPost]
        public IActionResult postGame([FromBody] Location newLocation)
        {
            newLocation.LocationID = context.Games.Count();
            context.Locations.Add(newLocation);
            context.SaveChanges();

            return Created("", newLocation);
        }

        [Route("location")]
        [HttpGet]
        public List<Location> getLocations()
        {
            return context.Locations.Include("Question").ToList();
        }

        [Route("location/{id}")]
        [HttpGet]
        public Location getLocation(int id)
        {
            int _id = id - 1;
            List<Location> list = context.Locations.Include("Question").ToList();
            return list[_id];
        }
        [Route("game/{id}")]
        [HttpPut]
        public IActionResult updateGame(int id, [FromBody]Game update)
        {
            var result = context.Games.SingleOrDefault(g => g.GameID == id);
            if (result != null)
            {
                result.GameCode = update.GameCode;
                result.StartTime = update.StartTime;
                result.StopTime = update.StopTime;
                result.Team = update.Team;

                context.SaveChanges();
            }
            return Created("", result);
        }

        [Route("game")]
        [HttpPost]
        public IActionResult postGame([FromBody] Game newGame)
        {
            //newGame.GameID = context.Games.Count() + 1;
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var stringChars = new char[5];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            var finalString = new String(stringChars);
            newGame.GameCode = finalString;
            context.Games.Add(newGame);
            context.SaveChanges();

            return Created("", newGame);
        }

        [Route("game")]
        [HttpGet]
        public List<Game> getGames()
        {
            return context.Games.Include("Team").ToList();
        }

        [Route("game/{id}")]
        [HttpGet]
        public Game getGame(int id)
        {
            int _id = id - 1;
            List<Game> list = context.Games.Include("Team").ToList();
            return list[_id];
        }
    }
}
