using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalFinances.Controllers
{
    public class BaseController : Controller
    {
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (Session["email"] == null)
            {
                filterContext.HttpContext.Response.Redirect("~/Login/Index");
            }
        }
    }
}