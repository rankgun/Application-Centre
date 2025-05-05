import React, { useState } from "@rbxts/react";

interface MultipleChoiceFrame {
	id: string;
	QuestionTitle: string;
	answers: string[];
	onAnswerSelect: (selectedAnswer: string) => void;
}

export default function MultipleChoiceFrame(props: MultipleChoiceFrame) {
	const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined);

	const handleSelection = (answer: string) => {
		setSelectedAnswer(answer);
		props.onAnswerSelect(answer);
	};

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

				{props.answers.map((question, index) => (
					<frame
						key={index}
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Position={UDim2.fromScale(0.5, 0.11536)}
						Size={UDim2.fromScale(1, 0.23072)}
					>
						<frame
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							key={"MultipleChoiceBorder" + index}
							Position={UDim2.fromScale(0.0580142, 0.458322)}
							Selectable={true}
							Size={UDim2.fromScale(0.5, 0.5)}
						>
							<uicorner key={"UICorner"} CornerRadius={new UDim(1, 0)} />
							<uistroke key={"UIStroke"} Color={new Color3(1, 1, 1)} />

							<uiaspectratioconstraint key={"UIAspectRatioConstraint"} AspectRatio={0.958869} />

							<frame
								key={"MultipleChoiceDot" + index}
								AnchorPoint={new Vector2(0.5, 0.5)}
								BackgroundColor3={
									selectedAnswer === question ? new Color3(1, 1, 1) : new Color3(0, 0, 0)
								}
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
								key={"TextButton" + index}
								BackgroundTransparency={1}
								FontFace={new Font("rbxasset://fonts/families/SourceSansPro.json")}
								Size={UDim2.fromScale(1, 1)}
								TextColor3={new Color3()}
								TextSize={14}
								TextTransparency={1}
								Event={{ MouseButton1Click: () => handleSelection(question) }}
							/>
						</frame>

						<textlabel
							key={"MultipleChoiceLabel" + index}
							AnchorPoint={new Vector2(1, 0.5)}
							BackgroundTransparency={1}
							FontFace={
								new Font("rbxassetid://11702779409", Enum.FontWeight.Medium, Enum.FontStyle.Normal)
							}
							Position={UDim2.fromScale(3.056, 0.44)}
							Size={UDim2.fromScale(2.863, 0.694)}
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
		</frame>
	);
}
