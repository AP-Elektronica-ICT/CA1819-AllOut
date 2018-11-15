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
        
        public DbSet<Location> Locations { get; set; }
        public DbSet<GameLogic> Games { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GameLogic>().ToTable("Game");
            modelBuilder.Entity<Location>().ToTable("Location");
        }

    }
}
