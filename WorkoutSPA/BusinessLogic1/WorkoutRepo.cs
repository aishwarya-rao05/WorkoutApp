using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic1
{
    public class WorkoutRepo
    {
        private WorkoutApplicationDBEntities db = new WorkoutApplicationDBEntities();

        //to list all workouts
        public List<workout_collection> ListWorkout()
        {
            try
            {

                return db.workout_collection.ToList();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        //workout by id
        public workout_collection SearchWorkoutById(int id)
        {
            workout_collection objWork = null;
            Console.WriteLine("enter name of category");
            int Id = Convert.ToInt32(Console.ReadLine());

            try
            {
                objWork = (from obj in db.workout_collection
                           where obj.workout_id == Id
                           select obj).First();

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;
        }

        //to add a workout
        public void AddWorkout(workout_collection item)
        {
            try
            {
                db.workout_collection.Add(item);
                db.SaveChanges();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //to edit the workout
        public void EditWorkout(workout_collection item)
        {

            try
            {

                var ObjCategory = (from obj in db.workout_collection
                                   where obj.workout_id == item.workout_id
                                   select obj).First();

                ObjCategory.workout_note = item.workout_note;
                ObjCategory.workout_title = item.workout_title;
                ObjCategory.calories_burn_per_min = item.calories_burn_per_min;

                db.SaveChanges();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //to delete workout
        public void DeleteCategory(int id)
        {
            Console.WriteLine("enter name of category to delete");
            int Id = Convert.ToInt32(Console.ReadLine());
            try
            {

                var Objworkout = (from objj in db.workout_collection
                                   where objj.workout_id == Id
                                   select objj).First();
                db.workout_collection.Remove(Objworkout);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
