using PersonalFinances.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PersonalFinances.DAL
{
    public class Contexts : DbContext
    {
        public Contexts() : base("StringPadrao")
        {

        }
        public DbSet<User> USERS { get; set; }
        public DbSet<Bill> BILLS { get; set; }

    }
}