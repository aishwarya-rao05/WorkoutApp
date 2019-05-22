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
        WorkoutApplicationDBEntities db = new WorkoutApplicationDBEntities();

        public IHttpActionResult Get()
        {
            var objRepo = new CategoryRepo();
            return Ok(objRepo.ListCategory()); 
        }

        public IHttpActionResult Get(int id)
        {
            var findCategory = db.workout_category.Find(id);
            if (findCategory == null) return NotFound();
            return Ok(findCategory);
        }

        public IHttpActionResult Post(workout_category obj)
        {
            db.workout_category.Add(obj);
            var rows = db.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            else
            {
                return BadRequest();
            }
        }

        public IHttpActionResult Put(workout_category obj)
        {
            db.workout_category.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            var rows = db.SaveChanges();
            if (rows > 0)
            {

                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest();
            }
        }

        //[Route("{category_id}")]
        public IHttpActionResult Delete(int id)
        {
            var findCategory = db.workout_category.Find(id);
            if (findCategory == null) return NotFound();
            db.workout_category.Remove(findCategory);
            var rows = db.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest();
            }
        }


    }
}
