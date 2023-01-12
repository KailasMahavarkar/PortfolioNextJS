import { projectCardType } from "@/types";
import { useTheme } from "next-themes";
import Image from "next/legacy/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
	imageurl,
	title,
	website,
	github,
	info,
	techstack,
	maintenance,
}: projectCardType) => {
	const { theme } = useTheme();
	const Title = () => {
		return (
			<h4 className="leading-normal mb-1 truncate flex items-center gap-2">
				<div
					className={
						"flex gap-2 font-bold text-xl items-center hover:text-primary"
					}
				>
					{title}
					{!maintenance && (
						<span className="text-sm ">
							<FaExternalLinkAlt />
						</span>
					)}
				</div>
			</h4>
		);
	};

	return (
		<div
			className="dark:shadow-md hover:cursor-pointer dark:shadow-gray-500 
		overflow-hidden shadow w-72 sm:w-full h-full rounded-md min-h-[450px] user-select-none
		transition duration-500 ease transform hover:scale-105
		"
		>
			<div className={`overflow-hidden relative`}>
				<a
					className={`w-72 h-full sm:w-full`}
					href={website}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						unoptimized
						height={300}
						width={550}
						layout="responsive"
						objectFit="cover"
						src={theme === "light" ? imageurl.light : imageurl.dark}
						alt={title}
					/>
				</a>
			</div>

			<div>
				<div className={`relative px-6 py-2 sm:py-4 h-full `}>
					<div className="flex items-center justify-between">
						{maintenance ? (
							<Title />
						) : (
							<a
								href={website}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Title />
							</a>
						)}

						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
						>
							{github && (
								<div className="hover:text-primary">
									<FaGithub size="1.35rem" />
								</div>
							)}
						</a>
					</div>

					<p className="mb-4 leading-snug">{info}</p>

					<div>
						{techstack.map((tech: string, index: number) => {
							return (
								<span
									key={index}
									className="bg-primary-content text-primary inline-block rounded-full 
									px-3 py-1 text-sm capitalize mr-2 mb-1"
								>
									{tech}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
