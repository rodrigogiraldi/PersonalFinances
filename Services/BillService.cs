using PersonalFinances.DAL;
using PersonalFinances.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace PersonalFinances.Services
{
    public class BillService
    {
        public Contexts Context { get; set; }

        public BillService()
        {
            this.Context = new Contexts();
        }

        public object AddBill(Bill bill)
        {
            this.Context.BILLS.Add(bill);
            this.Context.SaveChanges();
            return new { Msg = "Added" };
        }
    }
}