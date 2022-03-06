import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import app from "./app";

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;

Roact.mount(app, playerGui);
