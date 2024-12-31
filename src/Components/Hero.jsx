import React from "react";
import background from "../assets/bg1.jpg";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<motion.div className="relative w-full h-[150vh] sm:h-[250vh]">
				<div
					className="relative picture w-full h-full "
					data-scroll
					data-scroll-speed="-1"
				>
					<img
						src={background}
						alt="background"
						className="w-full h-full object-cover object-center"
					/>
					<div className="absolute top-0 bg-black/40 w-full h-full"></div>
				</div>
				<div className="absolute top-0 w-full">
					<div className=" text max-w-screen-xl h-full mx-auto px-5 text-white ">
						<div className="para mt-72 sm:mt-[30rem]">
							{[
								"We combine cutting-edge research with",
								"real-world AI applications to optimize",
								"last-mile deliveries, reduce costs, and power",
								"your business forward.",
							].map((item, ind) => {
								return (
									<p className="text-md sm:text-3xl overflow-hidden" key={ind}>
										<motion.span
											initial={{ rotate: 90, y: "100%", opacity: 0 }}
											animate={{ rotate: 0, y: 0, opacity: 1 }}
											transition={{
												ease: [0.22, 1, 0.36, 1],
												duration: (ind + 0.1) * 0.5,
												delay: 1.1,
											}}
											className="inline-block origin-top-left"
										>
											{item}
										</motion.span>
									</p>
								);
							})}
						</div>
						<div className="headings mt-5 sm:mt-5">
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{
									hidden: {
										opacity: 0,
									},
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.3, // Staggering each child by 0.3s
											delayChildren: 1.8, // Start staggering after 1.8s
										},
									},
								}}
							>
								{["Intelligent", "Logistics", "Solutions"].map((item, ind) => (
									<h1
										className="text-[12vw] font-normal tracking-normal leading-[1.1] overflow-hidden m-0 p-0 origin-top-left"
										key={ind}
									>
										<motion.span
											className="inline-block origin-top-left"
											variants={{
												hidden: { rotate: 0, y: "100%", opacity: 0 },
												visible: {
													rotate: 0,
													y: 0,
													opacity: 1,
													transition: { duration: 0.8 },
												},
											}}
										>
											{item}
										</motion.span>
									</h1>
								))}
							</motion.div>
						</div>

						<div className="para-2 mt-10 sm:mt-20 w-full flex justify-between flex-wrap  relative">
							<div className="sm:w-1/3 overflow-hidden">
								<motion.p
									initial={{ rotate: 90, y: "100%", opacity: 0 }}
									animate={{ rotate: 0, y: 0, opacity: 1 }}
									transition={{
										ease: [0.22, 1, 0.36, 1],
										duration: 0.5,
										delay: 3.7,
									}}
									className="sm:text-xl origin-top-left"
								>
									Backed by ongoing research and real-world testing, XTL's
									advanced route planning solutions streamline operations from
									dispatch to doorstep, ensuring maximum efficiency and
									reliability in today’s fast-paced market.
								</motion.p>
								<motion.a
									initial={{ rotate: 90, y: "100%", opacity: 0 }}
									animate={{ rotate: 0, y: 0, opacity: 1 }}
									transition={{
										ease: [0.22, 1, 0.36, 1],
										duration: 0.5,
										delay: 3.7,
									}}
									href="#"
									className="sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-50 pb-1 my-10 inline-block origin-top-left"
								>
									XTL | SaaS for transport logistics
								</motion.a>
							</div>
							<div className=" sm:min-w-1/3 sm:text-xl mt-auto sm:absolute -bottom-20 right-0 overflow-hidden">
								{[
									"XTL Kommunikationssysteme GmbH",
									" Konrad-Zuse Str. 8",
									"28359 Bremen",
									"Germany",
									"+49-421-7943-4838",
								].map((item, ind) => {
									return (
										<motion.p
											initial={{ rotate: 90, y: "100%", opacity: 0 }}
											animate={{ rotate: 0, y: 0, opacity: 1 }}
											transition={{
												ease: [0.22, 1, 0.36, 1],
												duration: 0.5,
												delay: 3.7,
											}}
											className=" origin-top-left"
											key={ind}
										>
											{item}
										</motion.p>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Hero;
