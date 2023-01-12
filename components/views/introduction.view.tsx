import CircleButton from "../utils/circle.button";
import Image from "next/legacy/image";

const baseTextStyle = "font-medium text-gray-400 text-small mt-7 md:text-xl";

const GreenText = (children: string, style: string) => {
	return <span className={`bg-green-500 ${style}`}>{children}</span>;
};

const BackendAbout = () => {
	return (
		<>
			<p className={baseTextStyle}>
				Over the years, I have been exposing myself to various backend
				technologies such as
				<span className="text-green-500">
					{
						" Go, Node.js, AWS, Python, Redis, SQL, and Microservices."
					}
				</span>
			</p>
			<p className={baseTextStyle}>
				For data structures and algorithms (DSA), I prefer to work with
				C++ and Python. I find C++ to be very fast, and Python to be
				very adaptive.
			</p>
		</>
	);
};

const FrontendAbout = () => {
	return (
		<>
			<p className={baseTextStyle}>
				My first experience with programming began in 2017, when I
				started learning PHP. I began my journey by creating websites
				using WordPress for the frontend. I was fascinated by how easy
				it was to create blogs and other content using this platform.
			</p>
		</>
	);
};

const DesignAbout = () => {
	return (
		<p className={baseTextStyle}>
			I also like prototyping and designing basic UI themes, layouts,
			components in
			<span className="text-green-500">{" figma "}</span>
			before starting new project.
		</p>
	);
};

function Introduction() {
	return (
		<div className="flex flex-col items-center justify-center  lg:flex-row pt-16 pb-4 mx-3">
			<div className="container mx-auto lg:col-span-5">
				<div className="relative m-auto w-[300px] h-[300px] justify-center items-center">
					<Image
						layout="fill"
						sizes="
							(max-width: 640px) 100vw"
						className="rounded-md dark:rounded-full "
						alt="about"
						src="/k.jpeg"
					/>
				</div>
			</div>
			<div className="mt-12 col-span-full lg:col-span-6 lg:col-start-6 lg:mt-0 lg:pl-10">
				<h3 className="text-xl leading-tight md:text-2xl">
					Hi there! I’m{" "}
					<span className="font-semibold text-purple-600">
						Kailas.
					</span>{" "}
					{`I'm a passionate coding enthusiast who loves building things with code`}
				</h3>

				<FrontendAbout />
				<BackendAbout />
				<DesignAbout />

				<a
					href="https://drive.google.com/file/d/1LwwRNgKr5_iw1Pjn94nReWlzkTaatdi5/view?usp=sharing"
					target="blank"
				>
					<button
						type="button"
						className="flex px-4 py-3 mt-6 font-medium text-white transition-transform duration-500 transform bg-green-600 rounded-full shadow-lg outline-none ease hover:translate-y-1 cursor pointer"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
						<span className="ml-2">Resume</span>
					</button>
				</a>
				<CircleButton
					to="#projects"
					text="Explore Projects"
					styles="mt-8"
				/>
			</div>
		</div>
	);
}

export default Introduction;
