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
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(9, 9, 9)}
			BackgroundTransparency={0.5}
			key={"JobFrame"}
			Position={UDim2.fromScale(0.464162, 0.142085)}
			Size={UDim2.fromScale(0.966998, 0.109069)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.15, 0)} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"JobName"}
				Position={UDim2.fromScale(0.215024, 0.297629)}
				Size={UDim2.fromScale(0.378806, 0.327241)}
				Text={props.name}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409")}
				key={"JobDescription"}
				Position={UDim2.fromScale(0.305566, 0.655844)}
				Size={UDim2.fromScale(0.559891, 0.397137)}
				Text={props.desc}
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
				key={"ApplyButtonFrame"}
				Position={UDim2.fromScale(0.910679, 0.487454)}
				Selectable={true}
				Size={UDim2.fromScale(0.139299, 0.251563)}
			>
				<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

				<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
					key={"ApplyText"}
					Position={UDim2.fromScale(0.5, 0.500001)}
					Size={UDim2.fromScale(0.584933, 0.684038)}
					Text={"Apply"}
					TextColor3={new Color3(1, 1, 1)}
					TextScaled={true}
				>
					<uitextsizeconstraint key={"UITextSizeConstraint"} />
				</textlabel>

				<uiaspectratioconstraint
					key={"UIAspectRatioConstraint"}
					AspectRatio={2.08}
					AspectType={"ScaleWithParentSize"}
					DominantAxis={"Width"}
				/>

				<textbutton
					BackgroundTransparency={1}
					FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
					key={"JobFrame"}
					Size={UDim2.fromScale(1, 1)}
					Text={""}
					Event={{
						MouseButton1Click: () => props.onClick(props.appId),
					}}
					TextColor3={new Color3()}
					TextSize={14}
				/>
			</frame>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={7.86441} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />
		</frame>
	);
}
