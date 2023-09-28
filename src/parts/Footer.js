import React from "react";

export default function Footer() {
	return (
		<div className="bg-[#DCD7C9] -mx-[70px] md:py-24 pt-12 pb-24">
			{/* Start grid */}
			<div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 md:gap-14 mx-[70px]">
				<div className="flex flex-col justify-center h-full text-center">
					<h1 className="font-bold text-5xl tracking-wide">About</h1>
					<ul className="md:my-10 my-4">
						<li className="my-4 text-lg font-normal">Carrers</li>
						<li className="my-4 text-lg font-normal">Blog</li>
						<li className="my-4 text-lg font-normal">Music night</li>
						<li className="my-4 text-lg font-normal">Community</li>
						<li className="my-4 text-lg font-normal">Becoming Franchise</li>
					</ul>
				</div>
				<div className="flex flex-col justify-center h-full text-center">
					<h1 className="font-bold text-5xl tracking-wide">Support</h1>
					<ul className="md:my-10 my-4 h-1/2">
						<li className="my-4 text-lg font-normal">Privacy Policy</li>
						<li className="my-4 text-lg font-normal">Terms of Service</li>
						<li className="my-4 text-lg font-normal">Covid-19 safety plan</li>
					</ul>
				</div>
				<div className="flex flex-col h-full text-center">
					<h1 className="font-bold text-5xl tracking-wide">Stay in Touch</h1>
					<p className="my-14 text-lg font-normal">
						Join our mailing list .. get updates on the latest new treats + cool
						beverages!
					</p>
					<div className="">
						<button className="w-4/5 py-2 bg-[#3F4E4F] text-white font-normal text-lg text-center rounded-sm">
							Email
						</button>
						<button className="w-1/2 py-2 bg-[#FFFDFB] text-[#3F4E4F] font-light text-lg text-center rounded-lg mt-4">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
