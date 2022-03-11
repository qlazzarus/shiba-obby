import { Controller, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import Roact from "@rbxts/roact";
import { StoreProvider } from "@rbxts/roact-rodux";
import { Events, Functions } from "client/events";
import stores from "client/stores";
import UI from "ui";

@Controller()
export class AppController implements OnStart {
    onStart() {
        wait(10);

        Roact.mount(
            <StoreProvider store={stores}>
                <screengui ResetOnSpawn={false} IgnoreGuiInset={true}>
                    <UI />
                </screengui>
            </StoreProvider>,
            Players.LocalPlayer.WaitForChild("PlayerGui"),
        );
    }
}
