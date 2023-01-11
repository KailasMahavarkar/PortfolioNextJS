import { useRouter } from "next/router";
import { scroller } from "..//helper";

const HeroBlock = () => {
	const router = useRouter();
	return (
		<div className="herowrapper">
			<div className="hero" id="hero">
				<div className="hero__title">
					<div className="hero__welcome">
						<div>
							<span className="elastic">H</span>
							<span className="elastic">i</span>
							<span className="elastic">,</span>
						</div>
					</div>
					<div className="hero__name">
						<div className="hero__name__im">
							<div>
								<span className="elastic">I</span>
								<span className="elastic">{ "'" }</span>
								<span className="elastic">m</span>
							</div>
						</div>
						<div className="hero__name__name">
							<div>
								<span className="elastic hero__red">K</span>
								<span className="elastic">a</span>
								<span className="elastic">i</span>
								<span className="elastic">l</span>
								<span className="elastic">a</span>
								<span className="elastic">s</span>
							</div>
						</div>
					</div>
					<div className="hero__tag">
						{/* I */}
						<div className="hero__tag__item begin">
							<span className="elastic">I</span>
						</div>

						{/* design */}
						<div className="hero__tag__item">
							<span className="elastic">d</span>
							<span className="elastic">e</span>
							<span className="elastic">s</span>
							<span className="elastic">i</span>
							<span className="elastic">g</span>
							<span className="elastic">n</span>
						</div>

						{/* and */}
						<div className="hero__tag__item">
							<span className="elastic">a</span>
							<span className="elastic">n</span>
							<span className="elastic">d</span>
						</div>

						{/* BUILD */}
						<div className="hero__tag__item">
							<span className="elastic">b</span>
							<span className="elastic">u</span>
							<span className="elastic">i</span>
							<span className="elastic">l</span>
							<span className="elastic">d</span>
						</div>

						{/* UI */}
						<div className="hero__tag__item">
							<span className="elastic">U</span>
							<span className="elastic">I</span>
						</div>
					</div>
					<div
						className="hero__button button__red"
						onClick={() => {
							setTimeout(() => {
								scroller("contact");
							}, 1000);
							// history.push("/contact");
						}}
					>
						contact me
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBlock;
