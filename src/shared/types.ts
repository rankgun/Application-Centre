import { t } from "@rbxts/t";

enum HttpMethod {
	GET = "GET",
	POST = "POST",
	DELETE = "DELETE",
	PATCH = "PATCH",
}

interface StateMessage {
	description: string;
	visible: boolean;
}

const tStateMessage = t.interface({
	description: t.string,
	visible: t.boolean,
});

type Question = {
	id: string;
	question: string;
	questionType: "multipleChoice";
	correctAnswer: string;
	incorrectAnswers: string[];
};

const tQuestion = t.interface({
	id: t.string,
	question: t.string,
	questionType: t.literal("multipleChoice"),
	correctAnswer: t.string,
	incorrectAnswers: t.array(t.string),
});

type Application = {
	id: string;
	name: string;
	desc: string;
	passingPercentage: number;
	minRank?: number;
	rankAwarded: number;
	questions: Question[];
};

const tApplication = t.interface({
	id: t.string,
	name: t.string,
	desc: t.string,
	passingPercentage: t.number,
	minRank: t.optional(t.number),
	rankAwarded: t.number,
	questions: t.array(tQuestion),
});

type ApplicationCentre = {
	id: string;
	applications: Application[];
};

const tApplicationCentre = t.interface({
	id: t.string,
	applications: t.array(tApplication),
});

type ApiResponse = {
	application: ApplicationCentre;
	groupId: number;
};

const tApiResponse = t.interface({
	application: tApplicationCentre,
	groupId: t.number,
});

export {
	HttpMethod,
	StateMessage,
	tStateMessage,
	ApplicationCentre,
	tApplicationCentre,
	Application,
	ApiResponse,
	tApiResponse,
};
