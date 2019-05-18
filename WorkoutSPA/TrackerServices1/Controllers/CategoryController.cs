using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BusinessLogic1;

namespace TrackerServices1.Controllers
{
    public class CategoryController : ApiController
    {
        //WorkoutApplicationDBEntities data = new WorkoutApplicationDBEntities();

        public IHttpActionResult Get()
        {
            var objRepo = new CategoryRepo();
            return Ok(objRepo.ListCategory()); 
        }

    }
}
