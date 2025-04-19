import { Players } from "@rbxts/services";

import React, { StrictMode, useState, useEffect } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";

import { Background } from "./Components/Background";
import { Success, Error } from "./Components/resultsFrame";
import { ApplicationFrame } from "./Components/ApplicationFrame";
import { ListScrollingFrame } from "./Components/ListScrollingFrame";
import App from "./App";

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

const root = createRoot(new Instance("Folder"));

root.render(<StrictMode>{createPortal(<App />, playerGui)}</StrictMode>);
