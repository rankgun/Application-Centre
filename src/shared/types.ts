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

export { HttpMethod, StateMessage, tStateMessage };
