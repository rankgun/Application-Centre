import React from "@rbxts/react";

interface TextLineProps {
	questionTitle: string;
}

export function TextLineFrame(props: TextLineProps) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(9, 9, 9)}
			BackgroundTransparency={0.5}
			key={"TextLineFrame"}
			Position={UDim2.fromScale(0.5, 0.54433)}
			Size={UDim2.fromScale(0.966998, 0.357912)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"QuestionMainText"}
				Position={UDim2.fromScale(0.467838, 0.217519)}
				Size={UDim2.fromScale(0.866034, 0.260868)}
				Text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
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
				Position={UDim2.fromScale(0.503995, 0.620291)}
				Size={UDim2.fromScale(0.938348, 0.219367)}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

				<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

				<textbox
					key={"TextBox"}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					FontFace={new Font("rbxassetid://11702779409")}
					PlaceholderColor3={Color3.fromRGB(166, 166, 166)}
					PlaceholderText={props.questionTitle}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(0.968198, 1)}
					Text={""}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} MaxTextSize={15} />
				</textbox>
			</frame>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={5.66133} />
		</frame>
	);
}
