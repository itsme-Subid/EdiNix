import React from "react";
import Logo from "../assets/logo.png";
import Typed from "typed.js";
import { Link } from "react-router-dom";
const Home = () => {
	const el = React.useRef(null);
	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["$ npm install lorem"],
			typeSpeed: 70,
			loop: true,
		});
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<>
			<nav className='flex justify-between items-center max-w-full h-16 bg-slate-950 text-white px-5 '>
				<div className='flex items-center'>
					<img src={Logo} alt='' className='w-10 mx-3' />
					<h1 className='font-semibold'>HackNITR</h1>
				</div>
				<div className='flex justify-center items-center'>
					<button className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Docs
					</button>
					<button
						to='/signup'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Sign Up
					</button>
					<Link
						to='/login'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Login
					</Link>
				</div>
			</nav>
			<section className='flex justify-center items-center min-h-screen'>
				<div className='flex flex-col justify-center items-center lg:px-52 md:px-48 sm:px-36 px-24 flex-wrap'>
					<h1 className='md:text-7xl sm:text-5xl text-4xl font-semibold'>
						Lorem ipsum dolor sit amet.
					</h1>
					<p className='text-lg mt-5 text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
						molestias maxime minus obcaecati similique quam.
					</p>
					<button className='bg-blue-500 hover:bg-blue-700 font-bold py-2 md:px-4 rounded mt-10 duration-300 w-1/2 sm:w-1/3 md:1/4'>
						Get Started
					</button>
					<h1 className='text-gray-400 text-xl'>
						View installation instructions &rarr;
					</h1>
					<div className='my-10 text-2xl'>
						<span ref={el} />
					</div>
					<h1 className='font-semibold text-4xl'>View all our commands</h1>
				</div>
			</section>
		</>
	);
};

export default Home;
