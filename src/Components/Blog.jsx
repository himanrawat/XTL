import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
	return (
		<>
			<div className="w-full h-screen bg-white">
				<div className="max-w-screen-xl mx-auto p-5">
					<div className="flex gap-3 justify-center ">
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
						<h3 className="capitalize">Press & News</h3>
					</div>
					<motion.div
						className="text mt-10 text-center overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.3,
								},
							},
						}}
					>
						{["Spread", "the News"].map((item, ind) => {
							return (
								<h1
									className="text-6xl sm:text-9xl tracking-tight overflow-hidden"
									key={ind}
								>
									<motion.span
										variants={{
											hidden: { rotate: "90deg", y: "40%", opacity: 0 },
											viewport: { once: true, amount: 0.5 },
											visible: {
												rotate: 0,
												y: 0,
												opacity: 1,
												transition: {
													ease: [0.22, 1, 0.36, 1],
													duration: 0.5,
												},
											},
										}}
										className="inline-block origin-top-left"
									>
										{item}
									</motion.span>
								</h1>
							);
						})}
						<p className="w-2/3 sm:w-[38%] mx-auto mt-5 sm:mt-10 text-md sm:text-xl leading-5">
							Discover how we’re transforming logistics with AI on leading
							innovation and technology platforms.
						</p>
						<a
							href=""
							className="border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block"
						>
							Browse all news
						</a>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Blog;
