using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class CategoryRepository
    {
        

        private static void ListAllCategories()
        {
            try
            {
                var Obj = new WorkoutApplicationDBEntities();
                var Query = from obj in Obj.workout_categorys
                            select obj;
                foreach (workout_category cat in Query)
                {
                    Console.WriteLine("Id={0}, Name={1}", category.Id, category.Name);
                }
            }

            catch (Exception ex)
            {
            
            }

        }

    }
}
