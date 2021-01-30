using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GPS_Web.Controllers
{
    public class LocalisationController :Controller
    {
        private readonly ILogger<LocalisationController> _logger;

        public LocalisationController(ILogger<LocalisationController> logger)
        {
            _logger = logger;
        }


        public async Task<IActionResult> Index()
        {
            return View();
        }
    }
}
