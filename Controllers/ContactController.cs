using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoCRUD.Models;//added to use the context

namespace ProyectoCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ReactAppContext _dbcontext;

        public ContactController(ReactAppContext dbcontext)//dependency inyection
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("ReturnList")]
        public async Task<IActionResult> ReturnList()
        {
            List<Contact> returnList 
                = await _dbcontext.Contacts.OrderByDescending(c => c.IdContacto).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, returnList);
        }

        [HttpPost]
        [Route("SaveList")]
        public async Task<IActionResult> SaveList([FromBody] Contact request)
        {
            await _dbcontext.Contacts.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("EditList")]
        public async Task<IActionResult> EditList([FromBody] Contact request)
        {
            _dbcontext.Contacts.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("DeleteList/{id:int}")]
        public async Task<IActionResult> DeleteList(int id)
        {
            Contact contact = _dbcontext.Contacts.Find(id);
            _dbcontext.Contacts.Remove(contact);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
