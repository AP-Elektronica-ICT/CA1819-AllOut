using API_.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_
{
    public class DBInitializer
    {
        public static void Initialize(DBContext context)
        {
            context.Database.EnsureCreated();
            if (!context.Games.Any())
            {
                var teams = new List<Team>();
                var team1 = new Team()
                {
                    TeamName = "Kwizmasterz",
                    TotalPoints = 0,
                    TotalBoobyTraps = 2
                };
                var team2 = new Team()
                {
                    TeamName = "Xes & Nettet",
                    TotalPoints = 0,
                    TotalBoobyTraps = 2
                };
                teams.Add(team1);
                teams.Add(team2);

                var game = new Game()
                {
                    GameCode = "X35H0",
                    team = teams
                };

                context.Games.Add(game);
                context.SaveChanges();
            }

            if (!context.Locations.Any())
            {
                var que = new BasicQuestion()
                {
                    QuestionText = "How much is 2 + 2?",
                    Answer = "4",
                    IsSolved = false,
                    Points = 1000000
                };
                var loc = new Location()
                {
                    LocationName = "AP Ellermansstraat",
                    Latitude = 51.2299036,
                    Longitude = 4.4163052,
                    //Question = que,
                    IsBoobyTrapped = false
                };

                context.Locations.Add(loc);
                context.SaveChanges();
            }
        }
    }
}
