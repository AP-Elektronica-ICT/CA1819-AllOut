using AlloutAPI;
using AlloutAPI.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLayer
{
    public class GameLogicFacade
    {
        private readonly DBContext context;
        public GameLogicFacade(DBContext context)
        {
            this.context = context;
        }

        public GameLogic UpdateGame(GameLogic update)
        {
            GameLogic result = context.Games.SingleOrDefault(g => g.GameLogicID == update.GameLogicID);
            if (result != null)
            {
                result.GameCode = update.GameCode;
                result.StartTime = update.StartTime;
                result.StopTime = update.StopTime;
                result.Team = update.Team;
                result.AreaID = update.AreaID;

                context.SaveChanges();
            }
            return update;
        }
        
        public GameLogic PostGame(GameLogic newGame)
        {
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

            return newGame;
        }

        public Team PostTeam(Team newTeam)
        {
            GameLogic result = context.Games.SingleOrDefault(g => g.GameLogicID == newTeam.GameID);
            result.Team.Add(newTeam);
            context.SaveChanges();

            return newTeam;
        }

        public List<GameLogic> GetGames()
        {
            return context.Games.Include("Team").Include("Area").ToList();
        }
        
        public GameLogic GetGameById(int id)
        {
            int _id = id - 1;
            List<GameLogic> list = context.Games.Include("Team").ToList();
            return list[_id];
        }
    }
}
