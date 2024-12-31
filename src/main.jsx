import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<div className="bg-zinc-900">
		<App />
	</div>
);
