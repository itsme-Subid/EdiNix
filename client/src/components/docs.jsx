import React from "react";
import { Link } from "react-router-dom";
import { BiExclude } from "react-icons/bi";
const Sidebar = () => {
	return (
		<div className='w-1/3 h-full overflow-y-auto p-4 border-r border-gray-300'>
			<h2 className='font-bold text-xl mb-4'>Get Started</h2>
			<ul className='space-y-2'>
				<li>
					<a href='#section1' className='text-gray-300 hover:underline'>
						Introduction
					</a>
				</li>
				<li>
					<a href='#section2' className='text-gray-300 hover:underline'>
						Installation
					</a>
				</li>
			</ul>
		</div>
	);
};
const MainContent = () => {
	return (
		<div className='flex h-screen overflow-hidden'>
			<div className='flex-grow mx-10 py-4 w-2/3'>
				<h2 id='section1' className='font-bold text-5xl mb-4'>
					Getting Started with EdiNix
				</h2>
				<p className='text-gray-500 text-2xl'>
					Contribute to open source projects with ease, without worrying about
					git and github.
				</p>
				<h1 className='my-5 text-4xl'>What is EdiNix ?</h1>
				<p className='text-justify'>
					Introducing EdiNix, a JavaScript npm library designed to simplify the
					use of Git and GitHub for non-coders. With EdiNix, users can
					effortlessly commit changes and create pull requests with just a
					click, eliminating the need for complex commands and terminal
					navigation. Seamlessly integrated with GitHub, EdiNix offers a
					user-friendly interface that abstracts away the complexities of
					version control.
				</p>
				<h1 className='my-5 text-3xl font-semibold'>Features</h1>
				<ul className='list-disc ml-20'>
					<li>
						<b>Commit with Ease: </b> With EdiNix, users can commit changes to
						their repositories effortlessly. Instead of typing out lengthy
						commit messages and commands, they can simply click a button to save
						their work.
					</li>
					<li>
						Pull Requests Made Simple: Creating pull requests becomes a breeze
						with GitEase. Users can initiate pull requests directly from their
						repositories without needing to understand the intricacies of
						branching and merging.
					</li>
					<li>Point 3</li>
					<li>Point 4</li>
					<li>Point 5</li>
				</ul>
				<h1 className='my-5 text-3xl font-semibold'>Installing</h1>
				<p className='my-4'>Using npm:</p>
				<h1 className='bg-gray-100 py-2 px-10 rounded-md text-black w-3/4'>
					<code>$ npm install edinix</code>
				</h1>
			</div>
		</div>
	);
};
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
			<div className='h-screen'>
				<div className='flex h-full overflow-hidden'>
					<Sidebar />
					<MainContent />
				</div>
			</div>
		</>
	);
};

export default Docs;
