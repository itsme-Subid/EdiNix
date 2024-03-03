import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { BiExclude } from "react-icons/bi";

const Login = () => {
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
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold mx-3 hover:border-2 hover:border-white'>
						Home
					</Link>
					<Link
						to='/docs'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold mx-3 hover:border-2 hover:border-white'>
						Docs
					</Link>
					<Link
						to='/signup'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold mx-3 hover:border-2 hover:border-white'>
						Sign Up
					</Link>
					<Link
						to='/login'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold mx-3 hover:border-2 hover:border-white'>
						Login
					</Link>
				</div>
			</nav>
			<section className='flex justify-center items-center min-h-screen my-10'>
				<div className='w-3/4 h-screen bg-gray-200/50 shadow-white rounded-3xl flex '>
					<div className='w-1/2 h-full bg-black rounded-l-3xl flex justify-center items-center'>
						<div className='w-3/4 text-white'>
							<BiExclude className='text-9xl flex justify-center items-center m-auto' />
							<h1 className='text-4xl font-semibold mb-4 italic'>
								Welcome Back
							</h1>
							<p className='text-lg'>
								To keep connected with us please login with your credentials
							</p>
							<label
								className='block text-white text-sm font-bold mb-2 text-left mt-5'
								htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								id='email'
								placeholder='Email'
								className='mb-4 p-2 border rounded w-full outline-none'
							/>
							<label
								className='block text-white text-sm font-bold mb-2 text-left'
								htmlFor='password'>
								Password
							</label>
							<input
								type='password'
								id='password'
								placeholder='Password'
								className='mb-4 p-2 border rounded w-full outline-none'
							/>
							<Link to='/login'>
								<button className='bg-white text-black p-2 rounded-3xl w-1/2 mt-4 font-semibold flex justify-center items-center m-auto'>
									Log In
								</button>
							</Link>
						</div>
					</div>
					<div className='w-1/2 min-h-screen bg-login-image bg-center bg-cover'></div>
				</div>
			</section>
		</>
	);
};

export default Login;
