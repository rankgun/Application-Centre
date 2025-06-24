import React from "@rbxts/react";

interface ApplicationFrame extends React.PropsWithChildren {
	titleText: string;
}

export function ApplicationFrame(props: ApplicationFrame) {
	return (
		<frame BackgroundTransparency={1} key={"Canvas"} Size={UDim2.fromScale(1, 1)}>
			<uilistlayout
				key={"UIListLayout"}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 15)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				key={"Container"}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.75, 0.75)}
			>
				<frame
					AutomaticSize={Enum.AutomaticSize.Y}
					BackgroundTransparency={1}
					LayoutOrder={1}
					key={"Header"}
					Size={UDim2.fromScale(1, 0)}
				>
					<textlabel
						AutomaticSize={Enum.AutomaticSize.Y}
						BackgroundTransparency={1}
						FontFace={
							new Font(
								"rbxasset://fonts/families/GothamSSm.json",
								Enum.FontWeight.Medium,
								Enum.FontStyle.Normal,
							)
						}
						LayoutOrder={2}
						key={"Title"}
						Position={UDim2.fromScale(0, 0.215686)}
						Size={UDim2.fromScale(1, 0)}
						Text={props.titleText}
						TextColor3={Color3.fromRGB(225, 225, 225)}
						TextSize={40}
						TextWrapped={true}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>

					<textlabel
						AutomaticSize={Enum.AutomaticSize.XY}
						BackgroundTransparency={1}
						FontFace={
							new Font(
								"rbxasset://fonts/families/GothamSSm.json",
								Enum.FontWeight.Medium,
								Enum.FontStyle.Normal,
							)
						}
						LayoutOrder={1}
						key={"Eyebrow"}
						Position={UDim2.fromScale(0.0020141, -0.0322581)}
						Text={"Application Centre"}
						TextColor3={Color3.fromRGB(100, 100, 100)}
						TextSize={16}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>

					<uilistlayout
						key={"UIListLayout"}
						Padding={new UDim(0, 6)}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>

					<uipadding key={"UIPadding"} PaddingRight={new UDim(0, 15)} />
				</frame>
				<uilistlayout key={"UIListLayout"} Padding={new UDim(0, 15)} SortOrder={Enum.SortOrder.LayoutOrder} />
				<scrollingframe
					Active={true}
					AutomaticCanvasSize={Enum.AutomaticSize.Y}
					BackgroundTransparency={1}
					BottomImage={"rbxassetid://112215092531711"}
					CanvasSize={new UDim2()}
					LayoutOrder={2}
					MidImage={"rbxassetid://72910408852056"}
					key={"Pages"}
					Position={UDim2.fromScale(0, 0.188192)}
					ScrollBarImageColor3={Color3.fromRGB(40, 40, 40)}
					ScrollBarThickness={3}
					Size={UDim2.fromScale(1, 1)}
					TopImage={"rbxassetid://126598680156839"}
				>
					<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Shrink} />
					{props.children}
				</scrollingframe>
			</frame>
		</frame>
	);
}
