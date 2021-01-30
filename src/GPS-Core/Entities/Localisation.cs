using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GPS_Core.Entities
{
    public class Localisation
    {
        public string Name { get; set; }        
        public string DeviceName { get; set; }
        public string IP { get; set; }

        public bool HighAccuracy { get; set; }

        public long Timestamp { get; set; }
        public int Conter { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public int Accuracy { get; set; }

        public int Altitude { get; set; }
        public int AltitudeAccuracy { get; set; }
        public int Heading { get; set; }
        public int speed { get; set; }
         

    }
}
