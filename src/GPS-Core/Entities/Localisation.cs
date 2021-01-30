using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GPS_Core.Entities
{
    public class Localisation
    {
        public string Name { get; set; }                //Run name eg. "Heading north and back".
        public string DeviceName { get; set; }          //eg. "Xiaomi Redmi Note 9"
        public bool HighAccuracy { get; set; }          
        public long Timestamp { get; set; }             //Location timestamp from HTML api
        public int Counter { get; set; }                //Request number to order the results
        public decimal Latitude { get; set; }       
        public decimal Longitude { get; set; }
        public int Accuracy { get; set; }               //Latitude, longitude accuraccy in meters
        public int Altitude { get; set; }               //The altitude in meters above the mean sea level 
        public int AltitudeAccuracy { get; set; }
        public int Heading { get; set; }                //The heading as degrees clockwise from North
        public int Speed { get; set; }                  //The speed in meters per second
    }
}
