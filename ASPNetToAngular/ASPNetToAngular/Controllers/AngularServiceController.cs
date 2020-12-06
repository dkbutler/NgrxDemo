using ASPNetToAngular.DATA;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNetToAngular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AngularServiceController : ControllerBase
    {

        private static ITempTable _tempTable;


        public AngularServiceController(ITempTable tempTable)
        {
            if(_tempTable == null)
            {
                _tempTable = tempTable;
                _tempTable.AddInitialTrucks();
            }
            
        }


        [HttpGet("GetTrucks")]
        public List<Truck> GetTrucks()
        {       
            return _tempTable.Trucks;
        }

         
        [HttpPost("UpdateTrucks")]
        public void UpdateTrucks(List<Truck> trucks)
        {
            _tempTable.Trucks = trucks;
        }

    }
}
