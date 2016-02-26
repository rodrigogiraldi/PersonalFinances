using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalFinances.Controllers
{
    public class HomeController : BaseController
    //public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}