import Roact from "@rbxts/roact";
import { TextService } from "@rbxts/services";

export default function StageText() {
    const stageText = `Stage: 1`;
    const font: CastsToEnum<Enum.Font> = Enum.Font.ArialBold;
    const fontSize = 50;
    const bounds = new Vector2(300, 50);
    const textSize = TextService.GetTextSize(stageText, fontSize, font, bounds);

    return (
        <textlabel
            Position={new UDim2(0.4, 0, 0.1, 0)}
            AnchorPoint={new Vector2(0, 1)}
            Size={new UDim2(0, textSize.X, 0, textSize.Y)}
            Key="StageNumber"
            Text={stageText}
            TextColor3={Color3.fromRGB(255, 255, 255)}
            TextStrokeColor3={Color3.fromRGB(0, 0, 0)}
            TextStrokeTransparency={0}
            BackgroundTransparency={1}
            Font={font}
            TextSize={fontSize}
        />
    );
}
