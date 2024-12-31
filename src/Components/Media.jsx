import React, { useEffect, useRef } from "react";
import mainPhoto from "../assets/gal-1.jpg";
import secondaryPhoto from "../assets/bg.jpg";
import future from "../assets/future.mp4";
import truck from "../assets/truck1.jpg";
import stats from "../assets/stats.mp4";
import freeway from "../assets/freeway.jpg";
import gsap, { Linear, ScrollTrigger } from "gsap/all";

const Media = () => {
	const parent = useRef(null);
	const first = useRef(null);
	const second = useRef(null);
	const third = useRef(null);
	const fourth = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: parent.current,
				start: "0 90%",
				scrub: 1,
			},
		});

		tl.to(
			first.current,
			{
				x: "20%",
				ease: Linear,
			},
			"a"
		)
			.to(
				second.current,
				{
					x: "-20%",
					ease: Linear,
				},
				"a"
			)
			.to(
				third.current,
				{
					x: "-20%",
					ease: Linear,
				},
				"a"
			)
			.to(
				fourth.current,
				{
					x: "10%",
					ease: Linear,
				},
				"a"
			);
	});
	return (
		<>
			<div
				ref={parent}
				className="w-full h-[70vh] sm:h-screen bg-white flex justify-center items-center "
			>
				<div className="w-[40%] sm:w-[20%] h-1/2 sm:h-[70%]  relative">
					<div
						ref={first}
						className="absolute w-20 sm:w-40 h-[7rem] sm:h-[15rem] -right-1/3 top-6 "
					>
						<img
							src={mainPhoto}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div
						ref={second}
						className="absolute w-[8rem] sm:w-80 aspect-video -left-2/3 sm:-left-3/4 top-1/4 overflow-hidden"
					>
						<video
							loop
							muted
							autoPlay
							src={future}
							className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						></video>
					</div>
					<div
						ref={third}
						className="absolute w-[6rem] sm:w-[14rem] aspect-video -left-[50%] -bottom-10 "
					>
						<img src={truck} alt="" className="w-full h-full object-cover" />
					</div>
					<div
						ref={fourth}
						className="absolute w-40 sm:w-80  aspect-[1.5/1] bg-red-400  -right-[70%] sm:left-72 -bottom-20 sm:-bottom-36 overflow-hidden "
					>
						<video
							loop
							muted
							autoPlay
							src={stats}
							className="w-full h-full absolute top-1/2 left-1/2 scale-[1.2] -translate-x-1/2 -translate-y-1/2"
						></video>
					</div>
					<div className="absolute"></div>
					<img
						src={secondaryPhoto}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default Media;
