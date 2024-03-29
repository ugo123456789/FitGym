import React from "react";
import Header from "../Header/Header.jsx";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
	const transition = { type: "spring", duration: 3 };
	const mobile = window.innerWidth <= 700 ? true : false;
	return (
		<main className="hero">
			<div className="blur hero-blur"></div>
			<div className="left">
				<Header />

				<div className="the-ad">
					<motion.div
						initial={{ left: mobile ? "165 px" : "278px" }}
						whileInView={{ left: "9px" }}
						transition={{ ...transition, type: "tween" }}></motion.div>
					<span>Get your fitness on.. Don't procastinate</span>
				</div>

				<div className="hero-text">
					<div>
						<span className="stroke-text">Shape </span>
						<span> Your</span>
					</div>

					<div>
						<span>Ideal body</span>
					</div>

					<div>
						<span>
							Train whenever you like, 365 days a year – we’re here for you with
							a monitored member entry system
						</span>
					</div>
				</div>

				<div className="figures">
					<div>
						<span>
							<NumberCounter end={140} start={100} delay="4" preFix="+" />
						</span>
						<span>expert coaches</span>
					</div>
					<div>
						<span>
							<NumberCounter end={978} start={800} delay="4" preFix="+" />
						</span>
						<span>members joined</span>
					</div>
					<div>
						<span>
							<NumberCounter end={50} start={0} delay="3" preFix="+" />
						</span>
						<span>fitness programs</span>
					</div>
				</div>

				<div className="hero-buttons">
					<button className="btn">Get Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>

			<div className="right">
				<button className="btn">Join Now</button>

				<motion.div
					initial={{ right: "-1rem" }}
					whileInView={{ right: "4rem" }}
					transition={transition}
					className="heart-rate">
					<img src={heart} alt="heart" />
					<span>Heart Rate</span>
					<span>112 bpm</span>
				</motion.div>

				<img src={hero_image} alt="heroimage" className="hero-image" />
				<motion.img
					initial={{ right: "11rem" }}
					whileInView={{ right: "20rem" }}
					transition={transition}
					src={hero_image_back}
					alt="heroimageback"
					className="hero-image-back"
				/>

				<motion.div
					initial={{ right: "37rem" }}
					whileInView={{ right: "28rem" }}
					transition={transition}
					className="calories">
					<img src={calories} alt="calories_image" />
					<div>
						<span>Calories burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default Hero;
