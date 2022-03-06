import Roact from "@rbxts/roact";
import { StoreProvider } from "@rbxts/roact-rodux";
import stores from "./stores";

const app = (
    <StoreProvider store={stores}>
        <screengui ResetOnSpawn={false} IgnoreGuiInset={true}>
            <textlabel
                Text="hello world"
                TextScaled={true}
                Position={new UDim2(0.4, 0, 0.1, 0)}
                Size={new UDim2(0.2, 0, 0.1, 0)}
                BackgroundTransparency={1}
            />
        </screengui>
    </StoreProvider>
);

export default app;
