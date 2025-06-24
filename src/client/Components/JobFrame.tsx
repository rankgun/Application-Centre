import React from "@rbxts/react";
interface JobFrameProps extends React.PropsWithChildren {
	appId: string;
	name: string;
	desc: string;
	minrank: number | undefined;
	onClick: (appId: string) => void;
}

export function JobFrame(props: JobFrameProps) {
	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			key={"Applications"}
			Size={UDim2.fromScale(1, 0)}
		>
			<uipadding
				key={"UIPadding"}
				PaddingBottom={new UDim(0, 2)}
				PaddingLeft={new UDim(0, 2)}
				PaddingRight={new UDim(0, 15)}
				PaddingTop={new UDim(0, 2)}
			/>

			<uilistlayout key={"UIListLayout"} Padding={new UDim(0, 10)} SortOrder={Enum.SortOrder.LayoutOrder} />

			<frame
				BackgroundColor3={Color3.fromRGB(14, 14, 14)}
				LayoutOrder={1}
				key={"JobFrame"}
				Position={UDim2.fromScale(-0.00211416, -0.00243309)}
				Size={new UDim2(1, 0, 0, 80)}
			>
				<uistroke key={"UIStroke"} Color={Color3.fromRGB(40, 40, 40)} />

				<uilistlayout
					key={"UIListLayout"}
					FillDirection={Enum.FillDirection.Horizontal}
					Padding={new UDim(0, 20)}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>

				<uipadding
					key={"UIPadding"}
					PaddingBottom={new UDim(0, 20)}
					PaddingLeft={new UDim(0, 20)}
					PaddingRight={new UDim(0, 20)}
					PaddingTop={new UDim(0, 20)}
				/>

				<uicorner key={"UICorner"} CornerRadius={new UDim(0, 20)} />

				<frame
					AnchorPoint={new Vector2(1, 0.5)}
					BackgroundColor3={Color3.fromRGB(40, 40, 40)}
					LayoutOrder={2}
					key={"Status"}
					Position={UDim2.fromScale(1, 0.45)}
					Size={UDim2.fromOffset(126, 36)}
				>
					<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

					<textbutton
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						FontFace={
							new Font(
								"rbxasset://fonts/families/GothamSSm.json",
								Enum.FontWeight.Medium,
								Enum.FontStyle.Normal,
							)
						}
						key={"Apply"}
						Position={UDim2.fromScale(0.5, 0.5)}
						Size={UDim2.fromOffset(126, 18)}
						Text={"Apply"}
						Event={{
							MouseButton1Click: () => props.onClick(props.appId),
						}}
						TextColor3={new Color3(1, 1, 1)}
						TextScaled={true}
					/>
				</frame>

				<frame BackgroundTransparency={1} LayoutOrder={1} key={"Text"} Size={UDim2.fromScale(1, 1)}>
					<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Shrink} />

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
						LayoutOrder={2}
						key={"Description"}
						Text={props.desc}
						TextColor3={Color3.fromRGB(100, 100, 100)}
						TextSize={16}
						TextTruncate={Enum.TextTruncate.AtEnd}
						TextWrapped={true}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>

					<uilistlayout
						key={"UIListLayout"}
						Padding={new UDim(0, 2)}
						SortOrder={Enum.SortOrder.LayoutOrder}
						VerticalAlignment={Enum.VerticalAlignment.Center}
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
						key={"Title"}
						Text={props.name}
						TextColor3={Color3.fromRGB(200, 200, 200)}
						TextSize={20}
						TextTruncate={Enum.TextTruncate.AtEnd}
						TextWrapped={true}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
			</frame>
		</frame>
	);
}
