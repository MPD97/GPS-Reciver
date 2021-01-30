using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GPS_Core.Entities
{
    public class Localisation
    {
        [Required]
        public string Name { get; set; }                //Run name eg. "Heading north and back".

        [Required]
        public string DeviceName { get; set; }          //eg. "Xiaomi Redmi Note 9"

        [Required]
        public bool HighAccuracy { get; set; }          

        [Required]
        public long Timestamp { get; set; }             //Location timestamp from HTML api

        [Required]
        public int Counter { get; set; }                //Request number to order the results

        [Required]
        public string Latitude { get; set; }       

        [Required]
        public string Longitude { get; set; }

        [Required]
        public int Accuracy { get; set; }               //Latitude, longitude accuraccy in meters

        public int? Altitude { get; set; }               //The altitude in meters above the mean sea level 
        public int? AltitudeAccuracy { get; set; }
        public int? Heading { get; set; }                //The heading as degrees clockwise from North
        public int? Speed { get; set; }                  //The speed in meters per second
    }
}
