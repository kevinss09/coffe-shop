import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import kindOfCoffee from "../data/kindOfCoffee.json";

export default function Menu() {
	return (
		<section className="bg-[#3F4E4F] min-h-screen px-[70px]">
			{/* Header */}
			<div className="h-[660px] -mx-[70px] img-background-div bg-cover relative ">
				<Header style="" />
				<h1 className=" text-white text-center font-bold text-5xl underline underline-offset-[15px] md:relative z-[30] pt-80 ">
					Menu
				</h1>
			</div>
			{/* Cardboard */}
			<div className="w-full flex md:flex-row flex-col-reverse relative">
				<div className="md:w-1/2 pt-[35px] text-white font-normal tracking-wider">
					<h1 className="">
						This coffee shop will be close on Tuesday in <br /> second week
					</h1>
					<h1 className=" py-6">
						*Sorry for the incovenience, our famous ethiopian coffee only
						available on Monday, Thursday, and Friday
					</h1>
				</div>
				<div className="md:w-1/2 md:pt-0 pt-16">
					<div className="md:absolute md:right-10 md:top-[-5rem] border-[14px] border-[#A27B57] md:w-[350px] p-4 ">
						<h1 className="font-bold text-3xl tracking-wide text-[#DCD7C9] md:text-left text-center">
							Monthly coffee box
						</h1>
						<h1 className=" pt-6 pb-5 text-[#DCD7C9]">
							We are hoping to give back to our community by giving two free
							coffee to our subscriber every week, plus exclusive coffee only
							for you.
						</h1>
						<div className="w-full flex justify-end">
							<button className="px-9 py-1 bg-[#A27B57] rounded-md text-[#DCD7C9] text-lg">
								Sign up
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* End of Cardboard */}
			{/* Lol */}
			<div className="mb-24 md:mt-20 mt-14 md:mx-64">
				{/* card */}
				{kindOfCoffee.map((coffee, index) => {
					return (
						<div
							className={[
								"w-full md:h-[380px] flex md:flex-row flex-col",
								coffee.flexType,
							].join(" ")}
						>
							<div className="md:w-1/2">
								<img
									src={coffee.image}
									alt="img cofe"
									className="h-full w-full bg-cover"
								/>
							</div>
							<div className="md:w-1/2 bg-[#2C3639] p-8 md:mb-0 mb-12">
								<h1 className="md:text-4xl text-3xl font-bold text-white tracking-wider md:text-left text-center">
									{coffee.title}
								</h1>
								<h3 className="text-xl font-light text-white tracking-widest mt-8 md:text-left text-center">
									{coffee.text}
								</h3>
							</div>
						</div>
					);
				})}
				{/* End of one card */}
			</div>
			{/* End of Lol */}
			<Footer />
		</section>
	);
}
