using AlloutAPI;
using AlloutAPI.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BusinessLayer
{
    public class TeamFacade
    {
        private readonly DBContext context; 
        public TeamFacade(DBContext context)
        {
            this.context = context; 
        }

        public Team PostTeam(Team team)
        {
            var result = context.Games.Include(t => t.Team).ToList().SingleOrDefault(g => g.GameLogicID == team.GameID);
            result.Team.Add(team);
            context.SaveChanges(); 
            return team; 
        }

        public Team PutTeamPoints(Team team)
        {
            var result = context.Games.Include(t => t.Team).ToList().SingleOrDefault(g => g.GameLogicID == team.GameID);
            var result2 = result.Team.Find(x => x.TeamID == team.TeamID); 
            Console.WriteLine(result2);
            result2.TotalPoints = team.TotalPoints;
            context.SaveChanges(); 
            return team; 
        }
        public List<Team> getTeams()
        {
            var result = context.Teams;
            return result.ToList(); 
        }
    }
}
