import { Players, RunService } from "@rbxts/services";
import { t } from "@rbxts/t";
import { rLog } from "@rbxts/rlog";
import { remotes } from "shared/remotes";
import { setId, fetchCentreData, AjudicateAndAward } from "./https";

const logger = new rLog();

let workspaceId: string;

Players.PlayerAdded.Connect(function (player: Player) {
	const proposedId = player.GetJoinData().TeleportData;

	if (RunService.IsStudio()) {
		logger.info("Running In Dev Mode");
		workspaceId = "1"; // Change this.
		setId(workspaceId);
		return;
	}

	if (t.string(proposedId) === false) {
		logger.error("Malformed data received from teleport data.", { TeleportData: proposedId });
		player.Kick("Please join through an active hub.");
		return;
	}

	workspaceId = proposedId;
	setId(workspaceId);
});

remotes.fetchCentre.onRequest(fetchCentreData);
remotes.submitAnswers.connect(AjudicateAndAward);
