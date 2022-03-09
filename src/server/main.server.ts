import { Players, RunService } from "@rbxts/services";

function onPlayerAdded(player: Player) {}

Players.PlayerAdded.Connect(onPlayerAdded);

if (RunService.IsStudio()) {
    for (const entry of Players.GetPlayers()) {
        onPlayerAdded(entry);
    }
}
