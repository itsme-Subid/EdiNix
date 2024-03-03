<html><head></head><body>import React from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { BiExclude } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import Edinix from "edinix";

const Home = () =&gt; {
  const [copied, setCopied] = React.useState(false);
  const el = React.useRef(null);
  React.useEffect(() =&gt; {
    const typed = new Typed(el.current, {
      strings: ["$ npm install edinix"],
      typeSpeed: 80,
      loop: true,
    });
    return () =&gt; {
      typed.destroy();
    };
  }, []);

  const handleCopy = () =&gt; {
    navigator.clipboard.writeText("npm install edinix");
    setCopied(true);
    setTimeout(() =&gt; {
      setCopied(false);
    }, 2000);
  };

  return (
    &lt;&gt;
      <nav classname="flex justify-between items-center max-w-full h-16 bg-slate-950 text-white px-5 ">
        <div classname="flex items-center gap-2 justify-center">
          <biexclude classname="text-4xl">
          <h1 classname="font-semibold text-xl">EdiNix</h1>
        </biexclude></div>
        <div classname="flex justify-around items-center">
          <link to="/docs" classname="bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white">
            Docs
          
          <link to="/signup" classname="bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white">
            Sign Up
          
          <link to="/login" classname="bg-slate-950 px-3 mx-5 py-2 rounded-full font-semibold border-2 border-transparent hover:border-white">
            Login
          
        </div>
      </nav>
      <section classname="flex justify-center items-center min-h-screen">
        <div classname="flex flex-col w-[60%] justify-center items-center lg:px-48 md:px-44 sm:px-28 px-20 flex-wrap">
          <h1 classname="md:text-7xl flex mb-4 justify-center sm:text-5xl text-4xl font-black tracking-tighter ">
            Take Contributions to Next Level
          </h1>
          <div classname="flex justify-start flex-col gap-4">
            <edinix repo="{{" owner:="" "itsme-subid",="" repo:="" "hacknitr",="" }}="" classname="App-link" id="test1" filepath="{&quot;client/src/components/home.jsx&quot;}" style="{{" color:="" "grey"="">something random</edinix>
            <button classname="bg-gray-500 text-xl hover:bg-gray-700 font-bold py-4 md:px-4 rounded mt-10 duration-300 w-1/2 sm:w-1/3 md:1/4">
              Get Started
            </button>
            <h1 classname="text-gray-200 text-sm">
              View installation instructions →
            </h1>
          </div>
          <div classname="my-10 text-2xl">
            <span ref="{el}">
          </span></div>
          <h1 classname=" border border-gray-300 w-1/2 justify-center rounded-lg bg-black text-base font-extralight py-2 flex gap-2 items-center px-4 cursor-pointer" onclick="{handleCopy}">
            {!copied &amp;&amp; <span>$ npm install edinix</span>}
            {!copied &amp;&amp; <mdcontentcopy>}
            {copied &amp;&amp; <p>Copied</p>}
          </mdcontentcopy></h1>
        </div>
      </section>
    
  );
};

export default Home;
</body></html>