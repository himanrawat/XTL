import React, { useState } from "react";
import logo from "../assets/xtl_logo.svg";
import TVR from "../assets/TVR_8664.png";
import truck from "../assets/truck2.jpg";
import hypermotion from "../assets/hypermotion.jpg";
import freeway from "../assets/freeway.jpg";
import route from "../assets/route.mp4";
import delivery from "../assets/delivery.mp4";
import integration from "../assets/integration.mp4";
import insights from "../assets/insights.mp4";
import { motion } from "framer-motion";
const WhyUs = () => {
	const [elems, setElems] = useState([
		{
			heading: "Dynamic Real-Time Optimization",
			subheading: "Adapt and optimize your logistics in real-time.",
			video: route,
			image: freeway,
		},
		{
			heading: "Cost-Efficient Solutions",
			subheading: "Reduce costs without compromising service quality.",
			video: delivery,
			image: TVR,
		},
		{
			heading: "Seamless Integration",
			subheading: "Quickly integrate with your existing processes.",
			video: integration,
			image: truck,
		},
		{
			heading: "Data-Driven Insights",
			subheading: "Leverage AI to predict traffic, volumes, and delays.",
			video: insights,
			image: hypermotion,
		},
	]);
	return (
		<>
			<div className="w-full relative bg-white">
				<div className="max-w-screen-xl mx-auto py-20 px-5">
					<div className="flex flex-col">
						<div className="featured flex gap-3 sm:w-[26vw] sm:ml-auto">
							<span>
								<svg
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-4"
									data-v-669b4a84=""
								>
									<path
										d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
										fill="currentColor"
										data-v-669b4a84=""
									></path>
								</svg>
							</span>
							<h3 className="capitalize">Feature</h3>
						</div>
						<div className=" my-5 sm:px-5 sm:order-first overflow-hidden">
							<motion.span
								initial={{ rotate: 40, y: "70%", opacity: 0 }}
								whileInView={{ rotate: 0, y: 0, opacity: 1 }}
								transition={{
									ease: [0.22, 1, 0.36, 1],
									duration: 0.7,
									delay: 0.4,
								}}
								viewport={{ once: true }}
								className="flex gap-2 sm:gap-6 justify-start origin-top-left"
							>
								<span className="text-6xl sm:text-[17.5vw] uppercase leading-none tracking-tighter">
									Why{" "}
								</span>
								<span className="text-2xl sm:text-[8vw] flex flex-col justify-center items-center w-fit">
									<span className="leading-none tracking-tighter">choose</span>
									<span className="w-[8vw]">
										<img src={logo} alt="logo" />
									</span>
								</span>
								<span className="text-6xl sm:text-[17.5vw] leading-none tracking-tighter">
									?
								</span>
							</motion.span>
						</div>
						<p className="sm:w-[26vw] text-2xl sm:ml-auto">
							Transforming transport logistics with innovative AI solutions and
							visionary partnerships.
						</p>
					</div>
					<div className="elems mt-10 sm:-mt-20 sm:grid grid-cols-12 gap-[2vw] sm:gap-y-40">
						{elems.map((elem, ind) => {
							let gridClasses = "";
							let heightClasses = "";
							let videoPosition = "";

							if (ind === 0) {
								gridClasses = "col-start-2 col-span-6 mt-10 sm:mt-0";
								heightClasses = "h-[50vh] sm:h-[50vw] ";
							} else if (ind === 1) {
								gridClasses = "col-start-9 col-span-4 mt-10 sm:mt-auto";
								heightClasses = "h-[25vh] sm:h-[25vw] ";
							} else if (ind === 2) {
								gridClasses = "col-start-2 col-span-4 mt-10 sm:my-auto";
								heightClasses = "h-[25vh] sm:h-[25vw] ";
							} else if (ind === 3) {
								gridClasses = "col-start-7 col-span-6 mt-10 sm:mt-0";
								heightClasses = "h-[50vh] sm:h-[50vw] ";
								videoPosition = "object-left";
							}

							return (
								<div key={ind} className={`elem w-full ${gridClasses}`}>
									<div className="media w-full overflow-hidden relative group ">
										<img
											data-scroll
											data-scroll-speed="-.2"
											className={`w-full ${heightClasses} object-cover `}
											src={elem.image}
											alt={elem.heading}
										/>
										<video
											autoPlay
											muted
											loop
											playsInline
											className={`
                  w-full ${heightClasses} ${videoPosition} object-cover  absolute top-0 left-0
                  sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300
                  block sm:block
                `}
											src={elem.video}
										/>
									</div>
									<div className="mt-4">
										<p className="font-semibold">{elem.heading}</p>
										<p className="capitalize opacity-40">{elem.subheading}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyUs;
