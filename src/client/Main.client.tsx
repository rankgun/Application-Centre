import { Players } from "@rbxts/services";

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";

import App from "./App";

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const root = createRoot(new Instance("Folder"));

root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>);
