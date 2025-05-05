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
		<scrollingframe
			Active={true}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			key={"ListScrollingFrame"}
			Position={UDim2.fromScale(0.474563, 0.477407)}
			ScrollBarThickness={2}
			Size={UDim2.fromScale(1.5, 0.740803)}
		>
			<uilistlayout
				key={"UIListLayout"}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.02, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>

			<uipadding key={"UIPadding"} PaddingTop={new UDim(0.01, 0)} />
			{applications.map((applications) => (
				<JobFrame
					appId={applications.id}
					name={applications.name}
					desc={applications.desc}
					minrank={applications.minRank}
					onClick={props.onClick}
				/>
			))}
		</scrollingframe>
	);
}
