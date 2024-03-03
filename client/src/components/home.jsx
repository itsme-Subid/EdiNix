import React from "react";
import Logo from "../assets/logo.png";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { BiExclude } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";

const Home = () => {
	const [copied, setCopied] = React.useState(false);
	const el = React.useRef(null);
	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["$ npm install edinix"],
			typeSpeed: 80,
			loop: true,
		});
		return () => {
			typed.destroy();
		};
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText("npm install edinix");
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<>
			<nav className='flex justify-between items-center max-w-full h-16 bg-slate-950 text-white px-5 '>
				<div className='flex items-center gap-2 justify-center'>
					<BiExclude className='text-4xl' />
					<h1 className='font-semibold text-xl'>EdiNix</h1>
				</div>
				<div className='flex justify-around items-center'>
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
			<section className='flex justify-center items-center min-h-screen'>
				<div className='flex flex-col w-full justify-center items-center lg:px-48 md:px-44 sm:px-28 px-20 flex-wrap'>
					<h1 className='md:text-7xl flex justify-center sm:text-5xl text-4xl font-black tracking-tighter '>
						Take Contributions to Next Level
					</h1>
					<div className='flex justify-start flex-col gap-4'>
						<p className='text-2xl font-medium mt-5 text-gray-500'>
							Contribute to open source projects with ease, without worrying
							about git and github.
						</p>
						<button className='bg-gray-500 text-xl hover:bg-gray-700 font-bold py-4 md:px-4 rounded mt-10 duration-300 w-1/2 sm:w-1/3 md:1/4'>
							Get Started
						</button>
						<h1 className='text-gray-200 text-sm'>
							View installation instructions &rarr;
						</h1>
					</div>
					<div className='my-10 text-2xl'>
						<span ref={el} />
					</div>
					<h1
						className=' border border-gray-300 w-1/2 justify-center rounded-lg bg-black text-xl font-extralight py-2 flex gap-2 items-center px-4 cursor-pointer'
						onClick={handleCopy}>
						{!copied && <span>$ npm install edinix</span>}
						{!copied && <MdContentCopy />}
						{copied && <p>Copied</p>}
					</h1>
				</div>
			</section>
		</>
	);
};

export default Home;
