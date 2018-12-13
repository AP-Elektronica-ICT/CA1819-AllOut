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
    [Route("api/v1/game/")]
    public class GameController : Controller
    {
        private readonly DBContext context;
        private readonly GameLogicFacade gameLogicFacade;
        
        public GameController(DBContext context)
        {
            this.context = context;
            this.gameLogicFacade = new GameLogicFacade(context);
        }
        
        [HttpPut]
        public IActionResult UpdateGame([FromBody]GameLogic update)
        {
            return Created("", gameLogicFacade.UpdateGame(update));
        }

        [HttpPost]
        public IActionResult PostGame([FromBody] GameLogic newGame = null)
        {
            if (newGame != null)
                gameLogicFacade.PostGame(newGame);
            return Created("", newGame);
        }

        /*[Route("team")]
        [HttpPost]
        public IActionResult PostTeam([FromBody] Team newTeam)
        {
            return Created("", gameLogicFacade.PostTeam(newTeam));
        }*/

        [HttpGet]
        public List<GameLogic> GetGames()
        {
            return gameLogicFacade.GetGames();
        }

        [Route("{id}")] 
        [HttpGet]
        public GameLogic GetGameById(int id)
        {
            return gameLogicFacade.GetGameById(id);
        }
    }
}