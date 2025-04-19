import React from "@rbxts/react";

interface NumberListFrame {
	Question: string;
}

export function NumberListFrame(props: NumberListFrame) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(9, 9, 9)}
			BackgroundTransparency={0.5}
			key={"NumberListFrame"}
			Position={UDim2.fromScale(0.557713, 0.787591)}
			Size={UDim2.fromScale(0.966998, 0.376517)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"QuestionMainText"}
				Position={UDim2.fromScale(0.463247, 0.291639)}
				Size={UDim2.fromScale(0.866034, 0.260868)}
				Text={props.Question}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(9, 9, 9)}
				BackgroundTransparency={0.5}
				key={"TextLine"}
				Position={UDim2.fromScale(0.0737837, 0.703676)}
				Size={UDim2.fromScale(0.0871082, 0.237897)}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

				<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

				<textbox
					key={"TextBox"}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					FontFace={new Font("rbxassetid://11702779409")}
					PlaceholderColor3={Color3.fromRGB(166, 166, 166)}
					PlaceholderText={"00"}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(0.968198, 1)}
					Text={""}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} MaxTextSize={30} />
				</textbox>
			</frame>

			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={"rbxassetid://76251084429205"}
				key={"DeductButton"}
				Position={UDim2.fromScale(0.151357, 0.699908)}
				Size={UDim2.fromScale(0.0611511, 0.282494)}
			>
				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={1.29787} />
			</imagebutton>

			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={"rbxassetid://127179147537583"}
				key={"AddButton"}
				Position={UDim2.fromScale(0.205301, 0.699908)}
				Size={UDim2.fromScale(0.0611511, 0.282494)}
			>
				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={1.29787} />
			</imagebutton>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={5.39657} />
		</frame>
	);
}
