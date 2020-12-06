using System.Collections.Generic;

namespace ASPNetToAngular.DATA
{
    public interface ITempTable
    {
        List<Truck> Trucks { get; set; }

        void AddInitialTrucks();
    }
}