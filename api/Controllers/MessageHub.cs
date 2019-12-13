using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace api.Hubs
{
    public class MessageHub : Hub
    {
        public async Task Notify(long username, string message)
        {
            await Clients.All.SendAsync("messageReceived", username, message);
        }
    }
}