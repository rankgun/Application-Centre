import React, { useState, useEffect } from "@rbxts/react";
import { Application } from "shared/types";
import { Background } from "./Components/Background";
import { Success, Error } from "./Components/resultsFrame";
import { ApplicationFrame } from "./Components/ApplicationFrame";
import { JobFrame } from "./Components/JobFrame";
import { ListScrollingFrame } from "./Components/ListScrollingFrame";
import { remotes } from "shared/remotes";
import { number } from "@rbxts/react/src/prop-types";
import BannerNotify from "@rbxts/banner-notify";
import MultipleChoiceFrame from "./Components/MultipleChoiceFrame";
import NextFrame from "./Components/NextButton";
import { Submit } from "./Components/SubmitButton";

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
	const [application, setApplication] = useState<Application | undefined>();
	const [currentlySelectedAnswer, setSeletectedAnswer] = useState<string>("");
	const [correctQuestions, setCorrectQuestions] = useState<number>(1);
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
	const [debounce, setDebounce] = useState<boolean>(false);

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

		setShuffledAnswers(shuffleArray(allAnswers));
	}, [application, question]);

	function nextQuestionHandler() {
		if (application === undefined) {
			return;
		}

		if (currentlySelectedAnswer === application.questions[question].correctAnswer) {
			setCorrectQuestions(correctQuestions + 1);
		}

		setQuestionNumber(question + 1);
	}

	function SubmitFunction() {
		if (application === undefined || debounce === true) {
			return;
		}
		setDebounce(true);

		if (currentlySelectedAnswer === application.questions[question].correctAnswer) {
			setCorrectQuestions(correctQuestions + 1);
		}

		BannerNotify.Notify({
			duration: 5,
			header: "Processing Application",
			icon: "rbxassetid://6023426945",
			message: "We're processing your application right now...",
		});

		remotes.submitAnswers(correctQuestions, application.id);
	}

	return (
		<screengui IgnoreGuiInset={true}>
			<Background jobId={game.JobId}>
				<Success />
				<Error />
				<ApplicationFrame>
					{!application ? (
						<ListScrollingFrame onClick={(appId) => setAppId(appId)} />
					) : (
						<>
							<MultipleChoiceFrame
								id={application.questions[question].id}
								QuestionTitle={application.questions[question].question}
								answers={shuffledAnswers}
								onAnswerSelect={(selectedAnswer) => setSeletectedAnswer(selectedAnswer)}
							/>
							{question + 1 === application.questions.size() ? (
								<Submit onClick={SubmitFunction} />
							) : (
								<NextFrame onClick={nextQuestionHandler} />
							)}
						</>
					)}
				</ApplicationFrame>
			</Background>
		</screengui>
	);
}
