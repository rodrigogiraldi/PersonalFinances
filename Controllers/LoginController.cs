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
            //var loginOk = this.loginService.CheckLogin(user);
            //return Json(loginOk);
            //if (loginOk)
            //{
            //    return Json(user);
            //}
            //else
            //{
            //    return Json(new { Msg = "Email or password wrong" });
            //}

            //var loginOk = this.loginService.CheckLogin(user);

            //if (loginOk)
            //{
            //    user.Password = "";
            //    return Json(user, JsonRequestBehavior.AllowGet);
            //}
            //else
            //{
            //    string result = "Email or password wrong";
            //    return Json(result, JsonRequestBehavior.AllowGet);
            //}
        }

        [HttpPost]
        public void Create(User user)
        {
            this.loginService.Create(user);
        }
        public void Logout()
        {
            Session["email"] = null;
        }
    }
}