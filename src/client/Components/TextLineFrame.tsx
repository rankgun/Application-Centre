import React from "@rbxts/react";

interface TextLineProps {
	questionTitle: string;
}

export function TextLineFrame(props: TextLineProps) {
	print(props);
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			key={"DescriptionBox"}
			Size={UDim2.fromScale(1, 0)}
		>
			<frame BackgroundTransparency={1} key={"Idle"} Size={new UDim2(1, 0, 0, 90)}>
				<textlabel
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Medium,
							Enum.FontStyle.Normal,
						)
					}
					LayoutOrder={1}
					key={"Title"}
					Size={new UDim2(1, 0, 0, 18)}
					Text={"Idle Input Box"}
					TextColor3={Color3.fromRGB(150, 150, 150)}
					TextSize={16}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>

				<textlabel
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Medium,
							Enum.FontStyle.Normal,
						)
					}
					LayoutOrder={3}
					key={"Caption"}
					Size={new UDim2(1, 0, 0, 14)}
					Text={"This is a caption, awesome!"}
					TextColor3={Color3.fromRGB(100, 100, 100)}
					TextSize={14}
					TextWrapped={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				/>

				<frame
					BackgroundColor3={Color3.fromRGB(14, 14, 14)}
					LayoutOrder={2}
					key={"Input"}
					Size={UDim2.fromScale(1, 1)}
				>
					<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Shrink} />

					<uicorner key={"UICorner"} CornerRadius={new UDim(0, 12)} />

					<uistroke key={"UIStroke"} Color={Color3.fromRGB(40, 40, 40)} />

					<uipadding key={"UIPadding"} PaddingLeft={new UDim(0, 16)} />

					<textbox
						BackgroundTransparency={1}
						CursorPosition={-1}
						FontFace={
							new Font(
								"rbxasset://fonts/families/GothamSSm.json",
								Enum.FontWeight.Medium,
								Enum.FontStyle.Normal,
							)
						}
						LayoutOrder={2}
						key={"Input"}
						PlaceholderColor3={Color3.fromRGB(100, 100, 100)}
						PlaceholderText={"Type here..."}
						Size={UDim2.fromScale(0.5, 1)}
						Text={""}
						TextColor3={Color3.fromRGB(200, 200, 200)}
						TextSize={14}
						TextXAlignment={Enum.TextXAlignment.Left}
					>
						<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Grow} />
					</textbox>

					<uilistlayout
						key={"UIListLayout"}
						FillDirection={Enum.FillDirection.Horizontal}
						Padding={new UDim(0, 10)}
						SortOrder={Enum.SortOrder.LayoutOrder}
						VerticalAlignment={Enum.VerticalAlignment.Center}
					/>
				</frame>

				<uilistlayout key={"UIListLayout"} Padding={new UDim(0, 8)} SortOrder={Enum.SortOrder.LayoutOrder} />
			</frame>

			<uilistlayout key={"UIListLayout"} Padding={new UDim(0, 10)} SortOrder={Enum.SortOrder.LayoutOrder} />

			<uipadding
				key={"UIPadding"}
				PaddingBottom={new UDim(0, 2)}
				PaddingLeft={new UDim(0, 2)}
				PaddingRight={new UDim(0, 15)}
				PaddingTop={new UDim(0, 2)}
			/>
		</frame>
	);
}
