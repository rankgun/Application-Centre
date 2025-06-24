import React from "@rbxts/react";

function Background({ children }: React.PropsWithChildren) {
	return (
		<frame
			BackgroundColor3={Color3.fromRGB(12, 12, 12)}
			BorderColor3={new Color3()}
			BorderSizePixel={0}
			key={"Background"}
			Size={UDim2.fromScale(1, 1)}
			ZIndex={0}
		>
			{children}
		</frame>
	);
}

export { Background };
