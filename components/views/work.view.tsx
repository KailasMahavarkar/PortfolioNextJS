import Image from "next/image";
import CircleButton from "../utils/circle.button";
import WorkPng from "../../public/work.png";

const TimeLine = ({
	timeframe,
	role,
	mode,
	company,
	children,
	company_url,
}: any) => {
	const style = {
		role: "mb-1 text-lg font-bold md:text-2xl capitalize ",
		company: " shadow-link hover:shadow-none hover:text-red-500",
		children: "leading-snug ",
	};

	const LeftLine = () => {
		return (
			<div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
				<div className="order-1 w-5/12"></div>
				<div className="order-1 w-5/12 px-1 py-4 text-right">
					<p className="mb-3 text-base text-green-600">{timeframe}</p>
					<div className="mb-3 text-lg font-bold md:text-2xl capitalize">
						{role}
					</div>
					<p className="mb-3 text-md">
						<a
							className={style.company}
							target="_blank"
							rel="noopener noreferrer"
							href={company_url}
						>
							{company}
						</a>
					</p>
					<p className={style.children}>{children}</p>
				</div>
			</div>
		);
	};

	const RightLine = () => {
		return (
			<div className="flex items-center justify-between w-full mb-8 right-timeline">
				<div className="order-1 w-5/12"></div>
				<div className="order-1 w-5/12 px-1 py-4">
					<p className="mb-3 text-base text-green-600">{timeframe}</p>
					<div className={style.role}>{role}</div>
					<p className="mb-3 text-md">
						<a
							className={style.company}
							target="_blank"
							rel="noopener noreferrer"
							href={company_url}
						>
							{company}
						</a>
					</p>
					<p className={style.children}>{children}</p>
				</div>
			</div>
		);
	};

	if (mode === "left") {
		return <LeftLine />;
	} else {
		return <RightLine />;
	}
};

const CareerTimeline = () => {
	return (
		<>
			{/* fynd academy */}
			<TimeLine
				mode="right"
				timeframe="August 2022 - Present"
				role="Fynd Academy Trainee"
				company="Fynd.com"
				company_url="https://fynd.com"
			>
				<>
					<strong>
						<a
							className="shadow-link hover:shadow-hover"
							target="_blank"
							rel="noopener noreferrer"
							href="https://fynd.com"
						>
							Fynd
						</a>
						{
							" is India's Largest Fashion O2O company with real-time inventory access to over 9000+ stores"
						}
					</strong>
					<br></br>
					{`currently in fynd i'm learning the fundamentals of web
					development and how to build a full stack web application
					using MEVN stack.`}
				</>
			</TimeLine>

			{/* jhaiho */}
			<TimeLine
				mode="left"
				timeframe="Dec 2021 to Feb 2022"
				role="software developer intern"
				company="Jhaiho PVT Ltd"
				company_url="https://jhaiho.com"
			>
				<>
					<strong>
						<a
							className="shadow-link hover:shadow-hover"
							target="_blank"
							rel="noopener noreferrer"
							href="https://jhaiho.com"
						>
							Jhaiho
						</a>{" "}
						is one-stop destination for everything related to
						tattoos
					</strong>
					, as a intern i was tasked with developing new version of
					their API, it was good opportunity to learn GoLang, GRPC,
					Protobuf and microservice architecture.
				</>
			</TimeLine>

			{/* freelancer + teacher */}
			<TimeLine
				mode="right"
				timeframe="June 2019 to Dec 2021"
				role="Freelance Teacher"
				company="Fiverr.com"
				company_url="https://www.fiverr.com/braincity?up_rollout=true"
			>
				<>
					During pandamic times, i was able to work as a freelancer
					and as a teacher to teach young people about computer
					programming and networking.
				</>
			</TimeLine>
		</>
	);
};

const Work = () => {
	return (
		<div className="p-3 ">
			<div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
				<div className="sticky flex flex-col w-full pl-4 pr-8 mt-2 md:top-36 lg:w-1/3 md:mt-12">
					<p className="font-medium text-green-600 uppercase tracking-loose">
						Professional
					</p>
					<p className="mb-2 text-3xl font-medium leading-normal md:text-4xl md:leading-relaxed">
						Work Experience
					</p>

					<p className="mb-4 text-sm  md:text-base">
						Till now he has developed and launched 2 web-apps one
						for a business and other as startup.
						<strong>
							<a
								className="shadow-link hover:shadow-hover"
								target="_blank"
								rel="noopener noreferrer"
								href="https://sweet2th.app/"
							>
								Pastekey.io
							</a>
						</strong>
						, a text-sharing platform where user can share code or
						any text for free, the webapp offers great security and
						it has
						<strong>active users in thousands</strong>. <br />
						<br />
						He has also helped a local business -{" "}
						<strong>Dynopictures</strong> to develop their online
						presence and has also worked on various Freelance
						projects.
					</p>
					<button className="my-8 text-left">
						<a href="https://cwk.hashnode.dev">
							<span className="inline-block px-8 py-3 font-medium text-white transition duration-500 transform bg-pink-600 rounded-full cursor-pointer ease hover:-translate-y-1">
								Read the blogs
							</span>
						</a>
					</button>
					<CircleButton
						to="#contact"
						text="Contact kailas"
						styles=""
					/>
				</div>
				<div className="sticky ml-0 md:ml-12 lg:w-2/3">
					<div className="container h-full mx-auto sm:w-full md:w-[80%]">
						<div className="relative h-full px-3 py-10 overflow-hidden sm:px-10 wrap">
							<div className="absolute h-full border border-green-600 border-solid rounded-sm sm:border-2 right-1/2"></div>
							<div className="absolute h-full border border-green-600 border-solid rounded-sm sm:border-2 left-1/2"></div>
							<CareerTimeline />
						</div>
						<div className="container relative w-64 h-64 mx-auto sm:w-96 sm:h-80">
							<Image
								loading="lazy"
								placeholder="blur"
								layout="fill"
								alt="working developer"
								src={WorkPng}
								blurDataURL="https://via.placeholder.com/150/FFFFFF/000000/?text=l.o.a.d.i.n.g"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
