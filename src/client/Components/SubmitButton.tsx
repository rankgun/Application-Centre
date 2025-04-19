import React from "@rbxts/react";

export function Submit() {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 1)}
			BackgroundColor3={new Color3(1, 1, 1)}
			BackgroundTransparency={0.8}
			key={"SubmitFrame"}
			Position={UDim2.fromScale(0.5, 1)}
			Selectable={true}
			Visible={false}
			Size={UDim2.fromScale(0.223721, 0.174187)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)}>
				<uigradient
					key={"UIGradient"}
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, new Color3(1, 1, 1)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(70, 102, 66)),
						])
					}
					Rotation={-90}
				/>
			</uistroke>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
				key={"SubmitText"}
				Position={UDim2.fromScale(0.501911, 0.485597)}
				Size={UDim2.fromScale(0.425594, 0.510997)}
				Text={"SUBMIT"}
				TextColor3={Color3.fromRGB(173, 255, 218)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<uigradient
				key={"UIGradient"}
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(173, 255, 218)),
						new ColorSequenceKeypoint(0.474048, Color3.fromRGB(3, 0, 0)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(173, 255, 218)),
					])
				}
			/>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={3.59444} />

			<textbutton
				key={"TextButton"}
				BackgroundTransparency={1}
				FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
				Size={UDim2.fromScale(1, 1)}
				Text={""}
				TextColor3={new Color3()}
				TextSize={14}
			/>
		</frame>
	);
}
