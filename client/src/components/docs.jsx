import React from "react";
import { Link } from "react-router-dom";
import { BiExclude } from "react-icons/bi";

const Docs = () => {
	return (
		<>
			<nav className='flex justify-between items-center max-w-full h-16 bg-slate-950 text-white px-5 '>
				<div className='flex items-center'>
					<BiExclude className='text-4xl' />
					<h1 className='font-semibold'>EdiNix</h1>
				</div>
				<div className='flex justify-center items-center'>
					<Link
						to='/'
						className='bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white'>
						Home
					</Link>
					<Link
						to='/docs'
						className='bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white'>
						Docs
					</Link>
					<Link
						to='/signup'
						className='bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white'>
						Sign Up
					</Link>
					<Link
						to='/login'
						className='bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white'>
						Login
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Docs;
