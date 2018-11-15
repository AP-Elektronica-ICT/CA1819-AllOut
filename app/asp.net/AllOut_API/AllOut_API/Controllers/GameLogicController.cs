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

        public IActionResult Index()
        {
            return View();
        }

        [Route("{id}")]
        [HttpPut]
        public IActionResult updateGame(int id, [FromBody]GameLogic update)
        {
            return Created("", gameLogicFacade.updateGame(id, update));
        }

        [HttpPost]
        public IActionResult postGame([FromBody] GameLogic newGame)
        {
            return Created("", gameLogicFacade.postGame(newGame));
        }

        [HttpGet]
        public List<GameLogic> getGames()
        {
            return gameLogicFacade.getGames();
        }

        [Route("{id}")] 
        [HttpGet]
        public GameLogic getGame(int id)
        {
            return gameLogicFacade.getGame(id);
        }
    }
}