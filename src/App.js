import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CocktailDetails from "./pages/CocktailDetails";

import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cocktail/:cocktailId" element={<CocktailDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
