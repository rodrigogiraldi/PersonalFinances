using PersonalFinances.Models;
using PersonalFinances.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalFinances.Controllers
{
    public class LoginController : Controller
    {
        public LoginService loginService { get; set; }
        public LoginController()
        {
            this.loginService = new LoginService();
        }
        public ActionResult Index()
        {
            if(Session["email"] == null)
            {
                return View();
            }
            else
            {
                return Redirect("/");
            }
        }

        public ActionResult Signin()
        {
            return View();
        }

        public ActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Read(User user)
        {
            return Json(this.loginService.CheckLogin(user));
        }

        [HttpPost]
        public JsonResult CheckEmail(User user)
        {
            return Json(this.loginService.CheckEmail(user.Email));
        }

        [HttpPost]
        public void Create(User user)
        {
            this.loginService.Create(user);
        }
        public JsonResult Logout()
        {
            Session["email"] = null;

            return Json(new {Msg = "logout done" },JsonRequestBehavior.AllowGet);
        }

        public JsonResult Current()
        {
            return Json(new { email = Session["email"] }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CurrentId()
        {
            return Json(new { id = Session["id"] }, JsonRequestBehavior.AllowGet);
        }
    }
}