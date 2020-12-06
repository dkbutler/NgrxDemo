using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNetToAngular.DATA
{
    public class TempTable : ITempTable
    {
        public List<Truck> Trucks { get; set; }

        public void AddInitialTrucks()
        {
            Trucks = new List<Truck>();
            Trucks.Add(new Truck { Id = "1", Make = "Chevrolet", Model = "Silverado 1500", Year = "2020" });
            Trucks.Add(new Truck { Id = "2", Make = "Dodge", Model = "Ram 1500", Year = "2002" });
            Trucks.Add(new Truck { Id = "3", Make = "Ford", Model = "F-150", Year = "2021" });

        }
    }
}
