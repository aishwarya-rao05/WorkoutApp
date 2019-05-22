using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic1
{
    public class CategoryRepo
    {
       private WorkoutApplicationDBEntities db = new WorkoutApplicationDBEntities();

        //list of all categories
        public List<workout_category> ListCategory()
        {
            try
            {
                          
                return db.workout_category.ToList();
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //to add a category
        public void AddCategory(workout_category item)
        {
            try
            {
                db.workout_category.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        //to search categories by name
        public workout_category SearchCategoryById(int id)
        {
            workout_category objWork = null;
            Console.WriteLine("enter name of category");
            int Id = Convert.ToInt32(Console.ReadLine());

            try
            {
                objWork = (from obj in db.workout_category
                           where obj.category_id == Id
                           select obj).First();

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;
            }

        //to delete categories
        public void DeleteCategory(int id)
        {
                Console.WriteLine("enter name of category to delete");
            int Id = Convert.ToInt32(Console.ReadLine());
                try
                {

                        var ObjCategory = (from objj in db.workout_category
                                   where objj.category_id == Id
                                   select objj).First();
                        db.workout_category.Remove(ObjCategory);
                        db.SaveChanges();


                }
                catch (Exception ex)
                {
                    throw ex;
                }
        }

        //to edit the categories
        public void EditCategory(workout_category item)
        {

            try
            {
                
                var ObjCategory = (from obj in db.workout_category
                                   where obj.category_id == item.category_id
                                   select obj).First();

                ObjCategory.category_name = item.category_name;

                db.SaveChanges();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        
    }









    }



