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
        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Add(Bill bill)
        {
            BillService billService = new BillService();
            return Json(billService.AddBill(bill));
        }

        public ActionResult Edit()
        {
            return View();
        }
    }
}