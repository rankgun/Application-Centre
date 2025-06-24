import React from "@rbxts/react";
import { useMotion } from "client/hooks/use-motion";

interface MultipleChoiceFrame {
	id: string;
	answers: string[];
	nextQuestion: (selectedAnswer: string) => void;
}

interface AnswerOptionProps {
	question: string;
	index: number;
	onSelect: (answer: string) => void;
}

function AnswerOption({ question, index, onSelect }: AnswerOptionProps) {
	const [optionColor, optionColorMotion] = useMotion<Color3>(Color3.fromRGB(40, 40, 40));
	const [thickness, thicknessMotion] = useMotion(1);

	const handleMouseEnter = () => {
		optionColorMotion.tween(Color3.fromRGB(51, 95, 255), { time: 0.5 });
		thicknessMotion.tween(2, { time: 0.1 });
	};

	const handleMouseLeave = () => {
		optionColorMotion.tween(Color3.fromRGB(40, 40, 40), { time: 0.5 });
		thicknessMotion.tween(1, { time: 0.1 });
	};

	return (
		<frame
			key={index}
			BackgroundColor3={Color3.fromRGB(14, 14, 14)}
			Position={UDim2.fromScale(-0.00211416, -0.00243309)}
			Size={new UDim2(1, 0, 0, 80)}
		>
			<textbutton
				Transparency={1}
				Event={{
					MouseEnter: handleMouseEnter,
					MouseLeave: handleMouseLeave,
					MouseButton1Click: () => onSelect(question),
				}}
				Size={UDim2.fromScale(1, 1)}
			/>
			<uistroke key={"UIStroke"} Color={optionColor} Thickness={thickness} />

			<uipadding
				key={"UIPadding"}
				PaddingBottom={new UDim(0, 20)}
				PaddingLeft={new UDim(0, 20)}
				PaddingRight={new UDim(0, 20)}
				PaddingTop={new UDim(0, 20)}
			/>

			<textlabel
				key={"TextLabel"}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Medium, Enum.FontStyle.Normal)
				}
				LayoutOrder={1}
				Size={UDim2.fromScale(1, 1)}
				Text={question}
				TextColor3={Color3.fromRGB(200, 200, 200)}
				TextSize={18}
				TextTruncate={Enum.TextTruncate.AtEnd}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uiflexitem key={"UIFlexItem"} FlexMode={Enum.UIFlexMode.Shrink} />
			</textlabel>

			<uicorner key={"UICorner"} CornerRadius={new UDim(0, 20)} />
		</frame>
	);
}

export default function MultipleChoiceFrame(props: MultipleChoiceFrame) {
	const handleSelection = (answer: string) => {
		props.nextQuestion(answer);
	};

	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			key={"MultipleChoice"}
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

			{props.answers.map((question, index) => (
				<AnswerOption
					key={`${props.id}-${index}`}
					question={question}
					index={index}
					onSelect={handleSelection}
				/>
			))}
		</frame>
	);
}
