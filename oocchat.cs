using GTANetworkServer;

public class OOCChat : Script
{
	public OOCChat() { }
	
	[Command("b", GreedyArg = true)]
	public void Command_Ooc(Client player, string text)
	{
		var players = API.shared.getPlayersInRadiusOfPlayer(20f, player);
		foreach (Client c in players)
		{
			API.triggerClientEvent(c, "TRIGGER_OOC_MESSAGE", player.name + ": (( " + text + " ))");
		};
	}
}
