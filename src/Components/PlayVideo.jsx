import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import commercial from "../assets/courier.mp4";

const VideoScroll = () => {
	const parentDiv = useRef(null);
	const videoDiv = useRef(null);
	const play = useRef(null);
	const reel = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// First animation: Video expansion
		gsap.to(videoDiv.current, {
			scrollTrigger: {
				trigger: parentDiv.current,
				start: "top center",
				end: "center center",
				scrub: true,
				toggleActions: "play none none reverse",
			},
			width: "100vw",
			height: "100vh",
			duration: 1.5,
			ease: "expo.inOut",
		});

		// Second animation: Text movement
		const textTl = gsap.timeline({
			scrollTrigger: {
				trigger: parentDiv.current,
				start: "top 20%",
				end: "bottom 80%",
				scrub: 0.5,
				toggleActions: "play pause reverse pause",
			},
		});

		textTl
			.to(play.current, {
				x: "-150%",
				opacity: 0,
				duration: 1,
				ease: "back.in(1.7)",
			})
			.to(
				reel.current,
				{
					x: "150%",
					opacity: 0,
					duration: 1,
					ease: "back.in(1.7)",
				},
				"<"
			);

		// Optional: Add parallax effect to video
		gsap.to(videoDiv.current.querySelector("video"), {
			scrollTrigger: {
				trigger: parentDiv.current,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
			scale: 1.3,
			ease: "none",
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div
			ref={parentDiv}
			className="w-full h-screen overflow-hidden relative bg-black"
		>
			<div
				ref={videoDiv}
				className="w-40 sm:w-[40rem] overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				<video
					muted
					loop
					autoPlay
					className="w-full h-full scale-125 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					src={commercial}
				/>
			</div>

			<div className="w-full h-full text-white py-20 flex flex-col justify-between absolute">
				<div className="flex gap-3 justify-center">
					<span>
						<svg
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-4"
						>
							<path
								d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
								fill="currentColor"
							/>
						</svg>
					</span>
					<h3 className="capitalize">Consulting & Process Analysis</h3>
				</div>

				<h1 className="w-full flex justify-center items-center gap-32 sm:gap-96">
					<div ref={play} className="text-4xl sm:text-9xl font-light">
						Play
					</div>
					<div ref={reel} className="text-4xl sm:text-9xl font-light">
						Reel
					</div>
				</h1>

				<p className="text-center px-10 text-xs">
					We support you with tailor-made solutions for process analysis and in
					identifying optimization potential in your logistics.
				</p>
			</div>
		</div>
	);
};

export default VideoScroll;
