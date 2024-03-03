import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Docs from "./components/docs";
import Test from "./components/test";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home />} />
				<Route path='/docs' element={<Docs />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</Router>
	);
};

export default App;
