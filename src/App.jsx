import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WhyUs from "./Components/WhyUs";
import PlayVideo from "./Components/PlayVideo";
import Media from "./Components/Media";
import Blog from "./Components/Blog";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import Footer from "./Components/Footer";

const App = () => {
	const locomotiveScroll = new LocomotiveScroll();

	function easeOutBounce(x) {
		const n1 = 7.5625;
		const d1 = 2.75;

		if (x < 1 / d1) {
			return n1 * x * x;
		} else if (x < 2 / d1) {
			return n1 * (x -= 1.5 / d1) * x + 0.75;
		} else if (x < 2.5 / d1) {
			return n1 * (x -= 2.25 / d1) * x + 0.9375;
		} else {
			return n1 * (x -= 2.625 / d1) * x + 0.984375;
		}
	}

	return (
		<>
			<motion.div
				// initial={{ y: "50%", rotate: 8 }}
				// animate={{ y: 0, rotate: 0 }}
				initial={{ rotate: 8 }}
				animate={{ rotate: 0 }}
				transition={{ ease: easeOutBounce, duration: 1 }}
				// transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}
				className="w-full font-lausanne font-normal origin-top-left overflow-hidden"
			>
				<Navbar />
				<Hero />
				<WhyUs />
				<PlayVideo />
				<Media />
				<Blog />
				<Footer />
			</motion.div>
		</>
	);
};

export default App;
