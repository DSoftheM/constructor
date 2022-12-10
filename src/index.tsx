import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, createBrowserRouter, Route, Router, Routes } from "react-router-dom";
import New from "./components/pages/NewPage/New";
import Open from "./components/pages/OpenPage/Open";
import Load from "./components/pages/LoadPage/Load";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					{/* <Route path="/new" element={<New />} />
					<Route path="/load" element={<Load />} />
					<Route path="/open" element={<Open />} /> */}
				</Routes>
			</BrowserRouter>
		</ReduxProvider>
	</React.StrictMode>
);
