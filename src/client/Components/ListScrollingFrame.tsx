import React from "@rbxts/react";

export function ListScrollingFrame(children: React.PropsWithChildren) {
	return (
		<scrollingframe
			Active={true}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"ListScrollingFrame"}
			Position={UDim2.fromScale(0.474563, 0.477407)}
			ScrollBarThickness={2}
			Size={UDim2.fromScale(1.00727, 0.740803)}
		>
			<uilistlayout
				key={"UIListLayout"}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.02, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>

			<uipadding key={"UIPadding"} PaddingTop={new UDim(0.01, 0)} />
			{children}
		</scrollingframe>
	);
}
