import { ApiResponse, ApplicationCentre, HttpMethod, tApiResponse, Application } from "shared/types";
import { HttpService } from "@rbxts/services";
import { rLog } from "@rbxts/rlog";
import { remotes } from "shared/remotes";

const logger = new rLog();

const URL = "https://hw0lomsin6.execute-api.eu-west-2.amazonaws.com/Prod/";
const APIKEY = HttpService.GetSecret("API_KEY");
let workspaceId: string = "";

let applicationCentre: ApplicationCentre;

function httpRequest(endpoint: string, method: HttpMethod, body?: string): RequestAsyncResponse {
	return HttpService.RequestAsync({
		Url: `${URL}/${endpoint}`,
		Method: method,
		Body: body,
		Headers: { "staff-token": APIKEY as unknown as string, "Content-Type": "application/json" }, // Temporary solution to secrets until secret supported as type.
	});
}

function setId(id: string) {
	workspaceId = id;
}

function fetchCentreData(player: Player): ApiResponse | undefined {
	try {
		const minRankReq = httpRequest(`applications/${workspaceId}/game`, HttpMethod.GET);
		const decodedBody = HttpService.JSONDecode(minRankReq.Body);

		if (minRankReq.StatusCode !== 200) {
			throw decodedBody;
		}

		assert(tApiResponse(decodedBody));

		applicationCentre = decodedBody.application;

		return decodedBody;
	} catch (error) {
		logger.error("Failed to fetch application centre.", { error });
		remotes.raiseError.fire(player, { description: "Failed to fetch application centre.", visible: true });
	}
}

function AjudicateAndAward(player: Player, correctAnswers: number, id: string) {
	const matchedApp = applicationCentre.applications.find((app: Application) => app.id === id);

	if (matchedApp === undefined) {
		return;
	}

	if ((correctAnswers / matchedApp.questions.size()) * 100 <= matchedApp.passingPercentage) {
		player.Kick("You have failed the application and have not been ranked.");
		return;
	}

	try {
		const minRankReq = httpRequest(
			`roblox/set-rank`,
			HttpMethod.POST,
			HttpService.JSONEncode({
				rank: matchedApp.rankAwarded,
				user_id: player.UserId,
				workspace_id: workspaceId,
			}),
		);
		const decodedBody = HttpService.JSONDecode(minRankReq.Body);

		if (minRankReq.StatusCode !== 200) {
			throw decodedBody;
		}

		remotes.raiseSuccess(player, { description: "You passed and were ranked successfully!", visible: true });
	} catch (error) {
		logger.error("Failed to rank individual.", { error });
		remotes.raiseError.fire(player, { description: "Failed to rank individual.", visible: true });
	}
}

export { setId, fetchCentreData, AjudicateAndAward };
