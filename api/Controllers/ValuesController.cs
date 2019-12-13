using System.Threading.Tasks;
using api.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace api.Controllers
{
    [Route("api/values")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        IHubContext<MessageHub> _messageHub;
        public ValuesController(IHubContext<MessageHub> messageHub)
        {
            _messageHub = messageHub;
        }
        [HttpPost]
        public async Task<IActionResult> SendMessage([FromBody] string message)
        {
            await _messageHub.Clients.All.SendAsync("Notify", message);
            return Ok();
        }  

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            await _messageHub.Clients.All.SendAsync("Notify", "hi");
            return Ok("Received");
        }  
    }
}
