import { Client, createRemotes, loggerMiddleware, remote, Server } from "@rbxts/remo";
import { StateMessage, tStateMessage, ApplicationCentre, ApiResponse, tApiResponse } from "./types";

export const remotes = createRemotes(
	{
		raiseError: remote<Client, [StateMessage]>(tStateMessage),
		raiseSuccess: remote<Client, [StateMessage]>(tStateMessage),
		fetchCentre: remote<Server>().returns<ApiResponse | undefined>(tApiResponse),
		submitAnswers: remote<Server, [correctAnswers: number, applicationId: string]>(),
	},
	loggerMiddleware,
);
