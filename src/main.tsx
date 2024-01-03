import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UIProvider } from "@yamada-ui/react";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<UIProvider>
			<App />
		</UIProvider>
	</React.StrictMode>,
);
