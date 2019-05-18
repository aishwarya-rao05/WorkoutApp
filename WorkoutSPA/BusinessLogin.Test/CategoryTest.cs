using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NUnit.Framework;
using BusinessLogic1;

namespace BusinessLogin.Test
{
    [TestFixture]
   public class CategoryTest
    {
        [Test]
        public static void ListCategory()
        {
            var obj = new WorkoutApplicationDBEntities();
            var expected = 0;
            var actual = obj.workout_category.Count();
            Assert.AreEqual(expected, actual);

        }
    }
}
