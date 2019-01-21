using AlloutAPI.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlloutAPI
{
    public class DBContext : DbContext
    {

        public DBContext(DbContextOptions<DBContext> options) : base(options) {
            
        }
        
        public DbSet<Area> Areas { get; set; }
        public DbSet<GameLogic> Games { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Question> Questions { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GameLogic>().ToTable("Game");
            modelBuilder.Entity<Area>().ToTable("Area");
            modelBuilder.Entity<Location>().ToTable("Location");
            modelBuilder.Entity<Question>().ToTable("Question");
        }

    }
}
