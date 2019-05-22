using BusinessLogic1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TrackerServices1.Controllers
{
    [Route("api/Workout")]
    public class WorkoutController : ApiController
    {
        WorkoutApplicationDBEntities db = new WorkoutApplicationDBEntities();

        public IHttpActionResult Get()
        {
            var ObjRepository = new WorkoutRepo();
            return Ok(ObjRepository.ListWorkout());
        }


        public IHttpActionResult Post(workout_collection item)
        {

            db.workout_collection.Add(item);
            int NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed To add workout");
            }

        }

        public IHttpActionResult Get(int id)
        {

            if (id < 0)
            {

                return BadRequest("Invalid workout id number ");

            }
            var Obj = db.workout_collection.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            return Ok(Obj);
        }

        public IHttpActionResult Put(workout_collection obj)
        {
            db.workout_collection.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;

            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed To Modify");
            }

        }

        [Route("{workout_id}")]
        public IHttpActionResult Delete(int id)
        {
            var Obj = db.workout_collection.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            db.workout_collection.Remove(Obj);
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed to Delete workout");
            }
        }


    }
}
