import React, { useState } from "react";
import Edinix from "../../../edinix/edinix";

const Test = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			{/* <div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div> */}
			<h1>
				<Edinix
					repo={{
						owner: "niladrix719",
						repo: "demo",
					}}
					className='App-link'
					id='1'
					filePath={"index.html"}
					style={{ color: "grey" }}
					changedText='You can modify this text'>
					You can modify this text
				</Edinix>
			</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
};

export default Test;
