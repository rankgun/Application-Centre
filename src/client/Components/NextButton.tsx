import React from "@rbxts/react";

interface NextFrameProps {
	onClick: () => void;
}

export default function NextFrame(props: NextFrameProps) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 1)}
			BackgroundTransparency={1}
			key={"NextFrame"}
			Position={UDim2.fromScale(0.5, 1)}
			Selectable={true}
			Visible={true}
			Size={UDim2.fromScale(0.223721, 0.174187)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
				key={"NextText"}
				Position={UDim2.fromScale(0.501911, 0.485597)}
				Size={UDim2.fromScale(0.802626, 0.510997)}
				Text={"NEXT QUESTION"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={3.59444} />

			<textbutton
				key={"TextButton"}
				BackgroundTransparency={1}
				FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
				Size={UDim2.fromScale(1, 1)}
				Text={""}
				TextColor3={new Color3()}
				TextSize={14}
				Event={{
					MouseButton1Click: props.onClick,
				}}
			/>
		</frame>
	);
}
