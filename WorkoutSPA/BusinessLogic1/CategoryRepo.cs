using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic1
{
    public class CategoryRepo
    {
        public static void ListCategory()
        {
            try
            {
                var Obj = new WorkoutApplicationDBEntities();
                var Query = from obj in Obj.workout_category
                            select obj;

                foreach (workout_category cat in Query)
                {
                    Console.WriteLine("category_id={0}, category_name={1}", cat.category_id, cat.category_name);
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
 
           
 

    }
}
