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
        public  void ListCategory()
        {
            var obj = new CategoryRepo();
            var expected = 0;
            var actual = obj.ListCategory().Count();
            Assert.AreEqual(expected, actual);

        }
    }
}
