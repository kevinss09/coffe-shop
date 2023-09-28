import React from "react";
import rightImg from "../assets/images/Right-imag.png";
import coffees from "../data/coffe.json";
import cafeImg from "../assets/images/cafe-img.png";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<section className="bg-[#2C3639] min-h-screen md:px-[70px]">
			<Header />
			{/* Head-part */}
			<div className="w-full text-[#DCD7C9] flex md:flex-row flex-col-reverse md:pt-32 pt-24 pb-16">
				<div className="md:w-1/2 md:pt-0 pt-8 md:mr-10 flex flex-col justify-between">
					<h1 className="font-bold text-[48px]  md:pr-10 md:text-left text-center">
						Experience Coffe With Good Ambience
					</h1>
					<div className="text-base mt-5 md:mb-14 mb-5 leading-7 md:text-left text-center">
						Boost your productivity and build your mood with a short break in
						the most comfortable places boost your productivity and boost your
						productivity and build your mood with a short break in the most
						comfortable places.
					</div>
					<div className="btn flex md:flex-row flex-col">
						<button className="cursor-pointer btn-head py-6 px-10 mx-4 my-4 bg-[#A27B57] hover:bg-[#2C3639] rounded-2xl text-[#DCD7C9] font-normal text-xl tracking-wider md:mr-12">
							Reservation
						</button>
						<Link
							to="/menu"
							className="cursor-pointer btn-head border border-[#A27B57] py-6 px-6 text-center md:px-[70px] mx-4 my-4 hover:bg-[#A27B57] rounded-2xl text-[#DCD7C9] font-normal text-xl tracking-wider"
						>
							Menu
						</Link>
					</div>
				</div>
				<div className="md:w-1/2 md:ml-10 md:px-0 md:mx-0 mx-[-70px] ">
					<img src={rightImg} alt="coffe-right image" className="md:w-full" />
				</div>
			</div>
			{/* Kind of coffe */}
			<div className="bg-[#DCD7C9] -mx-[70px] pt-16 pb-16">
				<h1 className="text-center text-[#3F4E4F] text-4xl font-bold pb-16 tracking-wide leading-tight">
					What coffee beans <br /> do you want?
				</h1>
				{/* Start grid */}
				<div className="grid md:grid-cols-4 md:grid-rows-1 gap-14 mx-[70px]">
					{/* Start mapping from here */}
					{coffees.map((coffee, index) => {
						return (
							<div className="bg-[#3F4E4F] flex flex-col items-center justify-center p-8 text-[#DCD7C9] rounded-2xl">
								<img src={coffee.img} alt="ethiopia country" />
								<h1 className="font-bold text-5xl">{coffee.country}</h1>
								<div className="font-medium text-xl my-12">
									<h3>Region: {coffee.region}</h3>
									<h3>Variety: {coffee.variety}</h3>
								</div>
								<h5 className="text-center font-normal">{coffee.text}</h5>
							</div>
						);
					})}
				</div>
			</div>
			{/* overview section */}
			<div className="md:py-24 pb-24 md:w-full h-full flex md:flex-row flex-col">
				<div className="md:w-1/2 md:mx-0 mx-[-70px] h-full md:mr-10">
					<img src={cafeImg} alt="" className="md:w-full rounded-xl" />
				</div>
				<div className="md:w-1/2 md:text-left text-center md:mx-10 flex flex-col justify-between md:pt-5 pt-8 pb-2">
					<h3 className="text-[#A27B57] text-3xl font-bold tracking-wider ">
						Overview
					</h3>
					<h1 className="text-white font-bold text-4xl tracking-wider md:mt-0 mt-12">
						Brief about our small cozy cafe
					</h1>
					<h3 className="text-white font-normal text-lg md:mt-0 mt-12">
						Here we attach some information about Victoria coffee that will make
						it easier for your guest at our caffee to know us better
					</h3>
					<div className="flex md:flex-row flex-col justify-between md:mt-0 mt-12">
						<div className="md:mt-0">
							<h1 className="text-[#A27B57] md:text-5xl text-6xl font-bold tracking-wider ">
								10+
							</h1>
							<h5 className="text-white tracking-wider md:mt-1 mt-3 md:text-lg text-2xl">
								Marketing Room
							</h5>
						</div>
						<div className="md:mt-0 mt-12">
							<h1 className="text-[#A27B57] md:text-5xl text-6xl font-bold tracking-wider">
								20+
							</h1>
							<h5 className="text-white tracking-wider md:mt-1 mt-3 md:text-lg text-2xl">
								Event Space
							</h5>
						</div>
						<div className="md:mt-0 mt-12">
							<h1 className="text-[#A27B57] md:text-5xl text-6xl font-bold tracking-wider">
								100+
							</h1>
							<h5 className="text-white tracking-wider md:mt-1 mt-3 md:text-lg text-2xl">
								Seats Occupation
							</h5>
						</div>
					</div>
				</div>
			</div>
			{/* Footer section */}
			<Footer />
		</section>
	);
}
