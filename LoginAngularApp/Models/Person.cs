using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LoginAngularApp.Models
{
    public class Person
    {
        public int id { get; set; }
        public string name { get; set; }

        static IEnumerable<Person> _persons = null;
        static public IEnumerable<Person> Persons
        {
            get
            {
                if (_persons == null)
                {
                    _persons = new Person[] { 
                        new Person() { id = 1, name="Person 1"},
                        new Person() { id= 2, name="Person 2"}
                    };

                }

                return _persons;
            }
        }
    }
}