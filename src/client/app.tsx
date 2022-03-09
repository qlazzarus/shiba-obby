import Roact from "@rbxts/roact";
import { StoreProvider } from "@rbxts/roact-rodux";
import stores from "./stores";
import UI from "./ui";

export default function App() {
    return (
        <StoreProvider store={stores}>
            <screengui ResetOnSpawn={false} IgnoreGuiInset={true}>
                <UI />
            </screengui>
        </StoreProvider>
    );
}
