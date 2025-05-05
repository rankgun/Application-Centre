import React from "@rbxts/react";

export function ApplicationFrame(children: React.PropsWithChildren) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"ApplicationFrame"}
			Position={UDim2.fromScale(0.499741, 0.507412)}
			Size={UDim2.fromScale(0.469274, 0.398139)}
			Visible={true}
		>
			<uilistlayout
				key={"UIListLayout"}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.04, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"ApplicationText"}
				Position={UDim2.fromScale(0.488217, 0.062234)}
				Size={UDim2.fromScale(0.378806, 0.0851092)}
				Text={"Application Centre"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<imagelabel
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Image={"rbxassetid://90105815352619"}
				key={"LineGradient"}
				Position={UDim2.fromScale(0.499997, 0.125299)}
				Size={UDim2.fromScale(0.700111, 0.0568915)}
			>
				<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={75.75} />
			</imagelabel>

			<uiaspectratioconstraint
				key={"UIAspectRatioConstraint"}
				AspectRatio={1.19}
				AspectType={"ScaleWithParentSize"}
				DominantAxis={"Width"}
			/>
			{children}
		</frame>
	);
}
