import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { InferFusionProps } from "@rbxts/ui-labs/";
import { Background } from "client/Components/Background";
import { ApplicationFrame } from "client/Components/ApplicationFrame";
import { ListScrollingFrame } from "client/Components/ListScrollingFrame";
import { JobFrame } from "client/Components/JobFrame";

const controls = {
	jobId: "Tester",
	appId: "affsw",
	name: "Head Chef",
	desc: "Allows you to rule the kitchen.",
	minRank: 255,
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferFusionProps<typeof controls>) => {
		return (
			<Background jobId={props.controls.jobId}>
				<ApplicationFrame>
					<ListScrollingFrame>
						<JobFrame
							appId={props.controls.appId}
							name={props.controls.name}
							desc={props.controls.desc}
							minrank={props.controls.minRank}
						/>
					</ListScrollingFrame>
				</ApplicationFrame>
			</Background>
		);
	},
};

export = story;
