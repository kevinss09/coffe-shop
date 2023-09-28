import React, { useState } from "react";
import ringer from "../assets/images/icons8-ringer-volume-32.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ style }) {
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={[
				"top-header text-[#DCD7C9] fixed z-40 top-0 left-0 w-screen lg:flex lg:flex-row lg:justify-between md:py-6 p-3 lg:items-center md:bg-[#2C3639] bg-[#3F4E4F] md:px-[70px]",
				style,
			].join(" ")}
		>
			{/* <div className="flex items-center justify-between w-full"> */}
			<div className="left-side justify-between flex items-center">
				<Link
					to="/"
					className="cursor-pointer md:text-xl text-lg font-bold tracking-[0.3rem] ml-3 md:ml-0"
				>
					Victoria
					<br /> coffe shop
				</Link>
				<span
					className={["text-3xl right-0 pt-1 md:hidden block cursor-pointer"]}
					onClick={() => setToggle((prev) => !prev)}
				>
					{toggle ? (
						<FiX className="duration-300 mr-3" />
					) : (
						<FiMenu className="duration-300 mr-3" />
					)}
				</span>
			</div>
			{/* right-side md:flex md:flex-row md:absolute z-[-1] left-0 w-full md:w-auto md:z-auto lg:opacity-100 opacity-0 top-[-400px] text-center  */}
			<ul
				className={[
					"right-side md:flex md:items-center z-[-1] md:static absolute left-0 md:w-auto w-full md:z-auto lg:opacity-100 opacity-0 top-[-400px] text-center md:bg-[#2C3639] bg-[#3F4E4F]",
					toggle ? "opacity-100 top-[0px]" : "",
				].join(" ")}
			>
				<li
					className={[
						"nav-item mx-4 my-4 py-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent",
					]}
				>
					<Link
						to="/"
						className="element text-lg mx-9 duration-300 relative cursor-pointer"
					>
						Home
					</Link>
				</li>
				<li className="nav-item mx-4 my-4 py-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent">
					<Link
						to="/menu"
						className="element text-lg mx-9 duration-300 relative cursor-pointer"
					>
						Menu
					</Link>
				</li>
				<li className="nav-item mx-4 my-4 py-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent">
					<Link
						to="/contact"
						className="element text-lg mx-9 duration-300 relative cursor-pointer"
					>
						Contact
					</Link>
				</li>
				<li className="nav-item mx-4 my-4 py-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent">
					<Link to="/about" className="text-lg mx-9 cursor-pointer">
						About
					</Link>
				</li>
				<li className="md:tracking-wider md:hidden nav-item mx-4 my-4 py-2 lg:my-0 lg:border-0 ">
					<img src={ringer} alt="Ring icon" className="inline h-8 w-8 mr-4 " />
					+1 236 668 4089
				</li>
			</ul>
			<span className="nav-call md:tracking-wider">
				<img src={ringer} alt="Ring icon" className="inline h-8 w-8 mr-4 " />
				+1 236 668 4089
			</span>
			{/* </div> */}
		</nav>
	);
}
