import CircleButton from "../utils/circle.button";
import Image from "next/image";

const startedYear = new Date().getFullYear() - 2017;

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
					{`I'm a passionate coding enthusiast who loves building
                        things with code`}
				</h3>
				<p className="font-medium text-gray-400 text-small mt-7 md:text-xl">
					{`My first experience with programming was ${startedYear} years ago.
                    My journey started with PHP, and I got obsessed with creating sites using WordPress, where I overcame lots of small problems in theme management and templates, and I tried solving them with Google and snippets of PHP.`}
				</p>
				<p className="font-medium text-gray-400 text-small mt-7 md:text-xl">
					{`I've been exposing myself to all aspects of web development over the years, working with various frontend, backend, deployment, and testing tools and frameworks such as`}{" "}
					<span className="text-green-600">
						{`"GoLang", "Nodejs", "Aws", "Python", "Redis", "SQL", "microservices", and so on.`}
					</span>
				</p>
				<p className="font-medium text-gray-400 text-small mt-7 md:text-xl">
					{`I also like prototyping and designing basic UI themes,
					layouts, components before coding it in Figma"`}
				</p>
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
