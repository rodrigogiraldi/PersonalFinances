using PersonalFinances.Models;
using PersonalFinances.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalFinances.Controllers
{
    public class BillController : BaseController
    {
        BillService billService;

        public BillController()
        {
            this.billService = new BillService();
        }

        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Add(Bill bill)
        {
            
            return Json(billService.AddBill(bill));
        }

        public ActionResult Edit()
        {
            return View();
        }

        public ActionResult Search()
        {
            return View();
        }

        public JsonResult ListAll()
        {
            return Json(this.billService.ListBills(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult ListByName(Bill bill)
        {
            return Json(this.billService.ListBillsByName(bill.Name));
        }
    }
}