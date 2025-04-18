import { HttpMethod } from "shared/types";
import { HttpService, MarketplaceService } from "@rbxts/services";
import { rLog } from "@rbxts/rlog";
import { remotes } from "shared/remotes";
import BannerNotify from "@rbxts/banner-notify";

const logger = new rLog();

const URL = "https://hw0lomsin6.execute-api.eu-west-2.amazonaws.com/Prod/";
const APIKEY = HttpService.GetSecret("API_KEY");
let workspaceId: string = "";

function httpRequest(endpoint: string, method: HttpMethod, body?: string): RequestAsyncResponse {
	return HttpService.RequestAsync({
		Url: `${URL}/${endpoint}`,
		Method: method,
		Body: body,
		Headers: { "staff-token": `${APIKEY}`, "Content-Type": "application/json" },
	});
}

function setId(id: string) {
	workspaceId = id;
}

export { setId };
