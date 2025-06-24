import React from "@rbxts/react";

interface NumberListFrame {
	Question: string;
}

export function NumberListFrame(props: NumberListFrame) {
	print(props);
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			key={"NumberSelectors"}
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
					Text={"Price"}
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
					Text={"Enter an amount in USD"}
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
						PlaceholderText={"Amount..."}
						Size={UDim2.fromScale(0.5, 1)}
						Text={""}
						TextColor3={Color3.fromRGB(200, 200, 200)}
						TextSize={14}
						TextXAlignment={Enum.TextXAlignment.Left}
					>
						<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Grow} />
					</textbox>

					<frame
						AnchorPoint={new Vector2(1, 0)}
						AutomaticSize={Enum.AutomaticSize.X}
						BackgroundTransparency={1}
						LayoutOrder={3}
						key={"Buttons"}
						Position={UDim2.fromScale(1, 0)}
						Size={UDim2.fromScale(0, 1)}
					>
						<frame BackgroundTransparency={1} LayoutOrder={2} key={"Subtract"} Size={UDim2.fromScale(1, 1)}>
							<uiaspectratioconstraint key={"UIAspectRatioConstraint"} />

							<imagelabel
								key={"ImageLabel"}
								AnchorPoint={new Vector2(0.5, 0.5)}
								BackgroundTransparency={1}
								Image={"rbxassetid://79820908028644"}
								ImageColor3={Color3.fromRGB(150, 150, 150)}
								Position={UDim2.fromScale(0.5, 0.5)}
								Size={UDim2.fromOffset(16, 16)}
							/>

							<textbutton
								BackgroundTransparency={1}
								FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
								key={"Trigger"}
								Size={UDim2.fromScale(1, 1)}
								Text={""}
								TextColor3={new Color3()}
								TextSize={14}
								TextTransparency={1}
							/>
						</frame>

						<frame
							BackgroundColor3={Color3.fromRGB(40, 40, 40)}
							BorderColor3={new Color3()}
							BorderSizePixel={0}
							LayoutOrder={3}
							key={"Stroke"}
							Size={new UDim2(0, 1, 1, 0)}
						/>

						<uilistlayout
							key={"UIListLayout"}
							FillDirection={Enum.FillDirection.Horizontal}
							HorizontalAlignment={Enum.HorizontalAlignment.Right}
							SortOrder={Enum.SortOrder.LayoutOrder}
							VerticalAlignment={Enum.VerticalAlignment.Center}
						/>

						<frame BackgroundTransparency={1} LayoutOrder={4} key={"Add"} Size={UDim2.fromScale(1, 1)}>
							<uiaspectratioconstraint key={"UIAspectRatioConstraint"} />

							<imagelabel
								key={"ImageLabel"}
								AnchorPoint={new Vector2(0.5, 0.5)}
								BackgroundTransparency={1}
								Image={"rbxassetid://104874123202354"}
								ImageColor3={Color3.fromRGB(150, 150, 150)}
								Position={UDim2.fromScale(0.5, 0.5)}
								Size={UDim2.fromOffset(16, 16)}
							/>

							<textbutton
								BackgroundTransparency={1}
								FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
								key={"Trigger"}
								Size={UDim2.fromScale(1, 1)}
								Text={""}
								TextColor3={new Color3()}
								TextSize={14}
								TextTransparency={1}
							/>
						</frame>

						<frame
							BackgroundColor3={Color3.fromRGB(40, 40, 40)}
							BorderColor3={new Color3()}
							BorderSizePixel={0}
							LayoutOrder={1}
							key={"Stroke"}
							Size={new UDim2(0, 1, 1, 0)}
						/>
					</frame>

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
