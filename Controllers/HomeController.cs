using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Personal.EntityApplication;
using Personal.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Personal.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult About(AboutDto input)
        {
            var address = "No 572 Jln Satria 9A Tmn Serom Utama, Sg.Mati Muar, 84410, Johor.";
            //if(!string.IsNullOrEmpty(input.Address1) || !string.IsNullOrEmpty(input.Address2) || !string.IsNullOrEmpty(input.Address3)
            //    || !string.IsNullOrEmpty(input.PostCode) || !string.IsNullOrEmpty(input.MalaysiaCityName) || !string.IsNullOrEmpty(input.State))
            //{
            //    address = string.Format("{0}{1}{2}{3}",
            //        (!string.IsNullOrEmpty(input.Address1) ? input.Address1.Trim() + "," : "") + 
            //        (!string.IsNullOrEmpty(input.Address2) ? input.Address2.Trim() + "," : "") +
            //        (!string.IsNullOrEmpty(input.Address3) ? input.Address3.Trim() + "," : ""),
            //        !string.IsNullOrEmpty(input.PostCode) ? input.PostCode.Trim() + "," : "",
            //        !string.IsNullOrEmpty(input.MalaysiaCityName) ? input.MalaysiaCityName.Trim() + "," : "",
            //        !string.IsNullOrEmpty(input.State) ? input.State.Trim() : "");
            //}

            var model = new AboutViewModel
            {
                FirstName = !string.IsNullOrEmpty(input.FirstName) ? input.FirstName : "Whan",
                LastName = !string.IsNullOrEmpty(input.LastName) ? input.LastName : "Deng Liao",
                Address = !string.IsNullOrEmpty(input.Address) ? input.Address : address,
                BirthdayDate = input.BirthdayDate.HasValue ? input.BirthdayDate.Value : Convert.ToDateTime("23/08/1994"),
                Status = !string.IsNullOrEmpty(input.Status) ? input.Status : "September 2021",
                Objective = "To continue career in Information Technology (Web & Mobile Application, Android)"
            };
            return View(model);
        }

        public IActionResult Education()
        {
            var model = new EducationViewModel
            {
                University = "Multimedia University, Cyberjaya | Malaysia",
                Bachelor = "Bachelor of Financial Engineering",
                GraduatedDate = "Graduated in June 2017",
                MajorDegree = "Major Finance",
                ResultCGPA = "CGPA 3.0",
                Internship = "Completed internship training in Malacca Securities Sdn Bhd"
            };
            return View(model);
        }

        public IActionResult Skills()
        {
            var model = new SkillsViewModel
            {

            };
            return View(model);
        }

        public IActionResult Experience()
        {
            var model = new ExperienceViewModel
            {

            };
            return View(model);
        }

        public IActionResult ContactMe()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
