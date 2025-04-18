import { Client, createRemotes, loggerMiddleware, remote } from "@rbxts/remo";
import { StateMessage, tStateMessage } from "./types";

export const remotes = createRemotes(
	{
		raiseError: remote<Client, [StateMessage]>(tStateMessage),
		raiseSuccess: remote<Client, [StateMessage]>(tStateMessage),
	},
	loggerMiddleware,
);
