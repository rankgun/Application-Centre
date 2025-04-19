import ReactRoblox from "@rbxts/react-roblox";
import React from "@rbxts/react";
import { InferFusionProps } from "@rbxts/ui-labs/";
import { ApplicationFrame } from "client/Components/ApplicationFrame";
import { Background } from "client/Components/Background";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	story: () => {
		return (
			<Background jobId="Testing">
				<ApplicationFrame />
			</Background>
		);
	},
};

export = story;
