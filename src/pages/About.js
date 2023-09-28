import React from "react";
import Header from "../parts/Header";
import About1 from "../assets/images/About-1.png";
import About2 from "../assets/images/About-2.png";
import CoffeImage from "../assets/images/caffe-background.png";
import Footer from "../parts/Footer";
export default function About() {
	return (
		<section className="bg-[#3F4E4F] min-h-screen px-[70px]">
			{/* Header */}
			<div className="h-[660px] -mx-[70px] img-background-about bg-cover relative">
				<Header style="" />
				<h1 className="text-white text-center font-bold text-5xl underline underline-offset-[15px] md:relative z-[30] pt-44">
					About us
				</h1>
				<h1 className="text-white text-center font-bold md:text-6xl text-5xl leading-tight md:relative z-[30] mt-24 tracking-wider">
					Victoria Coffee Shop
				</h1>
				<h3 className="text-white text-center font-normal md:text-2xl text-lg md:relative z-[30] md:mt-1 mt-3">
					Cafe with perfect ambience and atmosphere
				</h3>
			</div>
			<div className="md:mt-20 pt-20 pb-24 md:mx-48">
				{/* LOL */}
				<div className="w-full md:h-[380px] flex md:flex-row flex-col-reverse">
					<div className="md:w-1/2 md:mr-10 md:pt-0 pt-11 md:text-left text-center">
						<h1 className="text-white text-xl font-bold tracking-widest">
							In here, we do things quite differently{" "}
						</h1>
						<h3 className="text-white mt-9 tracking-widest font-light">
							We’ve put a lot of time and energy into reimagining what a cafe
							and coffee roastery could look like, and we’ve come up with a
							unique space where we can create and share coffee in a way that
							we’re excited about.
						</h3>
						<h3 className="mt-4 text-white tracking-widest font-light">
							Our coffee menu is designed to feature a wide variety of top
							quality coffees, carefully and thoughtfully sourced by our import
							partners who develop long term and healthy relationships with
							farmers and exporters around the world. Because we respect the
							diversity of flavours available in coffee around the world.
						</h3>
					</div>
					<div className="md:w-1/2 md:pt-0">
						<img src={About1} alt="" className="h-full w-full bg-cover" />
					</div>
				</div>
				{/* LOl */}
				{/* LOL */}
				<div className="md:w-full md:h-[380px] flex md:flex-row flex-col md:mt-24 mt-16 md:text-left text-center">
					<div className="md:w-1/2 md:mr-10">
						<img src={About2} alt="" className="h-full w-full bg-cover" />
					</div>
					<div className="md:w-1/2">
						<h3 className="text-white tracking-widest font-extralight md:mt-0 mt-12">
							What makes our roasting style most unusual is that we have
							designed our production roasting around a roasting bar in the same
							space where we brew all our coffees. All our roasting for brewing,
							retail, and wholesale happens in three small Ailio Bullet R1
							roasters located right behind the counter in our tasting room.
						</h3>
						<h3 className="mt-8 text-white tracking-widest font-extralight">
							It’s a transparent and lean production system that allows us to
							carry a large selection of different coffees without the waste
							that can result from committing to bigger batches. At the same
							time, the system of three roasters can efficiently produce a lot
							of coffee quite quickly and gives us incredible control over the
							roast.
						</h3>
					</div>
				</div>
				{/* LOl */}
			</div>
			<div className="-mx-[70px]">
				<img src={CoffeImage} alt="" className="w-full h-[600px] bg-cover" />
			</div>
			<Footer />
		</section>
	);
}
