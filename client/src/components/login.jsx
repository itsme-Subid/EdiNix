import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Login = () => {
	return (
		<>
			<nav className='flex justify-between items-center max-w-full h-16 bg-slate-950 text-white px-5 '>
				<div className='flex items-center'>
					<img src={Logo} alt='' className='w-10 mx-3' />
					<h1 className='font-semibold'>HackNITR</h1>
				</div>
				<div className='flex justify-center items-center'>
					<Link
						to='/docs'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Docs
					</Link>
					<Link
						to='/signup'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Sign Up
					</Link>
					<Link
						to='/login'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Login
					</Link>
				</div>
			</nav>
			<section className='flex justify-center items-center min-h-screen'>
				<div className='w-3/4 h-screen bg-gray-200/50 shadow-white rounded-3xl'>
					<div className='p-10 w-2/3 h-full bg-white rounded-l-3xl'>
						<img src={Logo} alt='' className='w-10' />
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
