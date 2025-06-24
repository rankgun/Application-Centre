import React, { useState, useEffect } from "@rbxts/react";
import { remotes } from "shared/remotes";
import { Application } from "shared/types";
import { JobFrame } from "./JobFrame";
import { Players } from "@rbxts/services";

interface listScrollingFrameProps {
	onClick: (appId: string) => void;
}

export function ListScrollingFrame(props: listScrollingFrameProps) {
	const [applications, setApplications] = useState<Application[]>([]);

	useEffect(() => {
		remotes.fetchCentre.request().then((centre) => {
			if (centre !== undefined) {
				const formulatedList = [];
				for (const application of centre.application.applications) {
					if (
						application.minRank !== undefined &&
						application.minRank <= Players.LocalPlayer.GetRankInGroup(centre.groupId)
					) {
						formulatedList.push(application);
					}
				}

				setApplications(formulatedList);
			}
		});
	}, []);

	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.Y}
			BackgroundTransparency={1}
			key={"Applications"}
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
			{applications.map((applications) => (
				<JobFrame
					appId={applications.id}
					name={applications.name}
					desc={applications.desc}
					minrank={applications.minRank}
					onClick={props.onClick}
				/>
			))}
		</frame>
	);
}
