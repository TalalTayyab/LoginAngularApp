using LoginAngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LoginAngularApp.Controllers
{
    [Authorize]
    public class PersonController : ApiController
    {
        public IEnumerable<Person> Get()
        {
            return Person.Persons;
        }


        public Person Get(int id)
        {
            return Person.Persons.FirstOrDefault(p => p.id == id);
        }

    }
}
