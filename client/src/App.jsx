import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home />} />
				{/* <Route path='/docs' element={<Docs />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
