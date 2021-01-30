using GPS_Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GPS_Web.Controllers
{
    public class LocalisationController : Controller
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

        [HttpPost]
        public async Task<IActionResult> Upload([FromForm] Localisation model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _logger.LogInformation("Localisation-logs-{Name}-{DeviceName}-{HighAccuracy}-{Counter}-{Timestamp}-{Latitude}-{Longitude}-{Accuracy}",
              model.Name, model.DeviceName, model.HighAccuracy, model.Counter, model.Timestamp, model.Latitude, model.Longitude, model.Accuracy);

            return Ok();
        }
    }
}
