using API_.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_
{
    public class DBInitializer
    {
        public static void Initialize(GameDBContext context)
        {
            context.Database.EnsureCreated();
            if (!context.Games.Any())
            {
                var teams = new List<Team>();
                var teams2 = new List<Team>();
                var team1 = new Team()
                {
                    TeamName = "Kwizmasterz",
                    TotalPoints = 0,
                    TotalBoobyTraps = 2
                };
                var team2 = new Team()
                {
                    TeamName = "Xes&Nettet",
                    TotalPoints = 0,
                    TotalBoobyTraps = 2
                };
                var team3 = new Team()
                {
                    TeamName = "Didugetit",
                    TotalPoints = 0,
                    TotalBoobyTraps = 2
                };
                var team4 = new Team()
                {
                    TeamName = "Deminuendos",
                    TotalPoints = 0,
                    TotalBoobyTraps = 2
                };
                teams.Add(team1);
                teams.Add(team2);
                teams2.Add(team3);
                teams2.Add(team4);
                var game = new Game()
                {
                    GameCode = "X35H0",
                    Team = teams,
                    StartTime = DateTime.Now,
                    StopTime = DateTime.Now.AddHours(2)
                };
                var game2 = new Game()
                {
                    GameCode = "A3CD3",
                    Team = teams2,
                    StartTime = DateTime.Now,
                    StopTime = DateTime.Now.AddHours(2)
                };
                context.Games.Add(game);
                context.Games.Add(game2);
                context.SaveChanges();
            }

            if (!context.Locations.Any())
            {
                var que = new Question()
                {
                    QuestionText = "How much is 2 + 2?",
                    Answer = "4",
                    IsSolved = false,
                    Points = 1000
                };
                var que2 = new Question()
                {
                    QuestionText = "Wat is de luchtsnelheid van een onbeladen zwaluw?",
                    Answer = "Een Afrikaanse of een Europese zwaluw?",
                    IsSolved = false,
                    Points = 10000000
                };
                var loc = new Location()
                {
                    LocationName = "AP Ellermansstraat",
                    Latitude = 51.2299036,
                    Longitude = 4.4163052,
                    Question = que2,
                    IsBoobyTrapped = false
                };
                var loc2 = new Location()
                {
                    LocationName = "AP Noord",
                    Latitude = 51.2289238,
                    Longitude = 4.4153827,
                    Question = que,
                    IsBoobyTrapped = false
                };
                context.Locations.Add(loc);
                context.Locations.Add(loc2);
                context.SaveChanges();
            }
        }
    }
}
