import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import coffeImg from "../assets/images/coffe-img.png";
import address from "../assets/icons/address.png";
import call from "../assets/icons/call.png";
import clock from "../assets/icons/clock.png";
import mail from "../assets/icons/mail.png";
import Places from "../data/Places.json";

export default function Contact() {
	return (
		<section className="bg-[#A27B57] min-h-screen px-[70px]">
			{/* Header */}
			<div className="h-[660px] -mx-[70px] img-background-contact bg-cover relative">
				<Header style="" />
				<h1 className="text-white text-center font-bold text-5xl underline underline-offset-[15px] relative z-[30] pt-80">
					Our Locations
				</h1>
			</div>
			{/* Cardboard */}
			{/* Maybe we will use grid to get this right */}
			<div className="py-20 grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 gap-x-20 gap-y-16">
				{Places.map((place, index) => {
					return (
						<div className="sm:w-full sm:h-full flex flex-col bg-[#3F4E4F] rounded-2xl">
							<img
								src={place.image}
								alt=""
								className="w-full h-full bg-cover rounded-t-2xl"
							/>
							<div className="w-full h-full py-5 px-[30px]">
								<div className="flex flex-row items-center">
									<img
										src={address}
										alt=""
										className="h-[30px] w-[30px] mr-5"
									/>
									<h1 className="font-bold text-lg text-[#DCD7C9] tracking-wider">
										{place.street}
									</h1>
								</div>
								<div className="flex flex-row items-center mt-3">
									<img src={call} alt="" className="h-[30px] w-[30px] mr-5" />
									<h1 className="font-bold text-lg text-[#DCD7C9] tracking-wider">
										{place.call}
									</h1>
								</div>
								<div className="flex flex-row items-center mt-3">
									<img src={mail} alt="" className="h-[30px] w-[30px] mr-5" />
									<h1 className="font-bold text-lg text-[#DCD7C9] tracking-wider">
										{place.mail}
									</h1>
								</div>
								{/* <div className="flex flex-row items-center mt-2">
									<img src={mail} alt="" className="h-[30px] w-[30px] mr-5" />
									<h1 className="font-bold text-lg text-[#DCD7C9] tracking-wider">
										{place.mail}
									</h1>
								</div> */}
								<div className="flex flex-row items-center mt-3">
									<img src={clock} alt="" className="h-[30px] w-[30px] mr-5" />
									<h1 className="font-bold text-lg text-[#DCD7C9] tracking-wider">
										{place.clock}
									</h1>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Footer />
		</section>
	);
}
