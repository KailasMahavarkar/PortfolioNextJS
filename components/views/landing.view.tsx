import Link from "next/link";
import CircleButton from "../utils/circle.button";
import TypewriterBlock from "../blocks/typewriter.block";
import Avatar from "../blocks/avatar.block";

const LandingView = () => {
	return (
		<>
			<div className="container flex justify-between mb-3 mt-10">
				<TypewriterBlock />
				<Avatar />
			</div>
			<button className="mx-8 mt-8 ">
				<a href="https://cwk.hashnode.dev">
					<span className="inline-block px-8 py-3 font-medium text-white transition duration-500 transform bg-pink-600 rounded-full cursor-pointer ease hover:-translate-y-1">
						Read the blogs
					</span>
				</a>
			</button>
			<CircleButton
				to="#about"
				text="Know more about kailas"
				styles="mx-8 mt-8"
			/>
		</>
	);
};

export default LandingView;
