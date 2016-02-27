using Newtonsoft.Json;
using PersonalFinances.DAL;
using PersonalFinances.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace PersonalFinances.Services
{
    public class LoginService
    {
        public Contexts Context { get; set; }

        public LoginService()
        {
            this.Context = new Contexts();
        }
        public object CheckLogin(User user)
        {
            user.Password = this.CriptografarSenha(user.Password);

            var find = this.Context.USERS.Where(u => u.Email == user.Email && u.Password == user.Password).FirstOrDefault();

            if (find != null)
            {
                HttpContext.Current.Session["email"] = user.Email;
                user.Password = "";
                return user;
            }
            else
            {
                return new { Msg = "Email or password wrong" };
            }
        }

        public object CheckEmail(string email)
        {
            var find = this.Context.USERS.Where(u => u.Email == email).FirstOrDefault();

            if (find != null)
            {
                return new { Msg = "Email ja cadastrado" };
            }
            else
            {
                HttpContext.Current.Session["email"] = email;
                return new { Msg = "Email OK" };
            }
        }

        public bool Create(User user)
        {
            user.Password = this.CriptografarSenha(user.Password);

            this.Context.USERS.Add(user);
            this.Context.SaveChanges();

            return true;
        }

        public string CriptografarSenha(string password)
        {
            byte[] arrayUTF = System.Text.Encoding.UTF8.GetBytes(password);
            SHA1 sha = new SHA1CryptoServiceProvider();
            byte[] arraySHA1 = sha.ComputeHash(arrayUTF);

            string pass = "";
            foreach (var a in arraySHA1)
            {
                pass += a.ToString();
            }

            return pass;
        }

    }
}