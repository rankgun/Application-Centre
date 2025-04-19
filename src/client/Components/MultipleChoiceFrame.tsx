import React from "@rbxts/react";

interface MultipleChoiceFrame {
	id: string;
	QuestionTitle: string;
	questions: string[];
}

export default function MultipleChoiceFrame(props: MultipleChoiceFrame) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"MultipleChoiceFrame"}
			Position={UDim2.fromScale(0.5, 0.505814)}
			Size={UDim2.fromScale(1, 0.65348)}
		>
			<uicorner key={"UICorner"} CornerRadius={new UDim(0.1, 0)} />

			<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} Thickness={0.6} />

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
				key={"QuestionMainText"}
				Position={UDim2.fromScale(0.467838, 0.155578)}
				Size={UDim2.fromScale(0.866034, 0.136986)}
				Text="Multiple Choice"
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)}
				key={"QuestionSubText"}
				Position={UDim2.fromScale(0.321525, 0.255226)}
				Size={UDim2.fromScale(0.573409, 0.108515)}
				Text={props.QuestionTitle}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint key={"UITextSizeConstraint"} />
			</textlabel>

			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				key={"MultipleChoiceList"}
				Position={UDim2.fromScale(0.186114, 0.619221)}
				Size={UDim2.fromScale(0.302587, 0.555144)}
			>
				<uilistlayout key={"UIListLayout"} Padding={new UDim(0.02, 0)} SortOrder={Enum.SortOrder.LayoutOrder} />

				{props.questions.map((question, index) => (
					<frame
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						key={"MultipleChoice"}
						Position={UDim2.fromScale(0.5, 0.11536)}
						Size={UDim2.fromScale(1, 0.23072)}
					>
						<frame
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							key={"MultipleChoiceBorder"}
							Position={UDim2.fromScale(0.0580142, 0.458322)}
							Selectable={true}
							Size={UDim2.fromScale(0.5, 0.5)}
						>
							<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

							<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} />

							<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={0.958869} />

							<frame
								AnchorPoint={new Vector2(0.5, 0.5)}
								BackgroundColor3={new Color3(1, 1, 1)}
								key={"MultipleChoiceDot"}
								Position={UDim2.fromScale(0.5, 0.5)}
								Selectable={true}
								Size={UDim2.fromScale(0.51, 0.51)}
							>
								<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />

								<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={0.958869} />

								<uigradient
									key={"UIGradient"}
									Color={
										new ColorSequence([
											new ColorSequenceKeypoint(0, new Color3(1, 1, 1)),
											new ColorSequenceKeypoint(1, new Color3()),
										])
									}
									Rotation={90}
								/>
							</frame>

							<textbutton
								key={"TextButton"}
								BackgroundTransparency={1}
								FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
								Size={UDim2.fromScale(1, 1)}
								TextColor3={new Color3()}
								TextSize={14}
								TextTransparency={1}
							/>
						</frame>

						<textlabel
							AnchorPoint={new Vector2(1, 0.5)}
							BackgroundTransparency={1}
							FontFace={
								new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)
							}
							key={"MultipleChoice"}
							Position={UDim2.fromScale(1.04977, 0.440449)}
							Size={UDim2.fromScale(0.856951, 0.69436)}
							Text={question}
							TextColor3={new Color3(1, 1, 1)}
							TextScaled={true}
							TextXAlignment={Enum.TextXAlignment.Left}
						>
							<uitextsizeconstraint key={"UITextSizeConstraint"} />
						</textlabel>
					</frame>
				))}
			</frame>

			<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={3.20654} />
		</frame>
	);
}
