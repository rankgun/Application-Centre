import React, { useState, useEffect } from "@rbxts/react";
import { Application } from "shared/types";
import { Background } from "./Components/Background";
import { Success, Error } from "./Components/resultsFrame";
import { ApplicationFrame } from "./Components/ApplicationFrame";
import { ListScrollingFrame } from "./Components/ListScrollingFrame";
import { remotes } from "shared/remotes";
import BannerNotify from "@rbxts/banner-notify";
import MultipleChoiceFrame from "./Components/MultipleChoiceFrame";
import { useMotion } from "client/hooks/use-motion";

function shuffleArray<T>(array: T[]): T[] {
	const copy = [...array];
	for (let i = copy.size() - 1; i > 0; i--) {
		const j = math.random(0, i);
		const temp = copy[i];
		copy[i] = copy[j];
		copy[j] = temp;
	}
	return copy;
}

export default function App() {
	const [appId, setAppId] = useState<string>("");
	const [question, setQuestionNumber] = useState<number>(0);
	const [titleText, setTitleText] = useState<string>("Select your application");
	const [application, setApplication] = useState<Application | undefined>();
	const [correctQuestions, setCorrectQuestions] = useState<number>(1);
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
	const [debounce, setDebounce] = useState<boolean>(false);
	const [transferVisibility, transferVisibilityMotion] = useMotion(1);

	useEffect(() => {
		remotes.fetchCentre.request().then((response) => {
			if (response === undefined) {
				return;
			}

			const apps = response.application.applications;

			const matchedApp = apps.find((app: Application) => app.id === appId);

			if (matchedApp) {
				setApplication(matchedApp);
			}
		});
	}, [appId]);

	useEffect(() => {
		if (!application) return;

		const currentQ = application.questions[question];
		const allAnswers = [currentQ.correctAnswer, ...currentQ.incorrectAnswers];
		setTitleText(application.questions[question].question);

		setShuffledAnswers(shuffleArray(allAnswers));
	}, [application, question]);

	function SubmitFunction() {
		if (application === undefined || debounce === true) {
			return;
		}
		transferVisibilityMotion.linear(0);
		setDebounce(true);

		BannerNotify.Notify({
			duration: 5,
			header: "Processing Application",
			icon: "rbxassetid://6023426945",
			message: "We're processing your application right now...",
		});

		remotes.submitAnswers(correctQuestions, application.id);
	}

	function nextQuestionHandler(selectedAnswer: string) {
		if (application === undefined) {
			return;
		}

		if (selectedAnswer === application.questions[question].correctAnswer) {
			setCorrectQuestions(correctQuestions + 1);
		}

		if (question + 1 === application.questions.size()) {
			print("submit");
			SubmitFunction();
		} else {
			setQuestionNumber(question + 1);
		}
	}

	return (
		<screengui IgnoreGuiInset={true} ZIndexBehavior={"Sibling"}>
			<Success />
			<Error />
			<Background>
				<ApplicationFrame titleText={titleText}>
					{!application ? (
						<ListScrollingFrame
							onClick={(appId) => {
								setAppId(appId);
							}}
						/>
					) : (
						<>
							<MultipleChoiceFrame
								id={application.questions[question].id}
								answers={shuffledAnswers}
								nextQuestion={(selectedAnswer) => nextQuestionHandler(selectedAnswer)}
							/>
						</>
					)}
				</ApplicationFrame>
				<frame
					BackgroundColor3={Color3.fromRGB(12, 12, 12)}
					BorderColor3={new Color3()}
					BorderSizePixel={0}
					key={"Block"}
					Transparency={transferVisibility}
					Size={UDim2.fromScale(1, 1)}
					ZIndex={3}
				></frame>
			</Background>
		</screengui>
	);
}
