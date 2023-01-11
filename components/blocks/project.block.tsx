import { useTheme } from "next-themes";
import { projectCardType } from "../../types";
import ProjectCard from "../cards/project.card";
import projects from "../data/projects.data";

const ProjectBlock = () => {
	const { theme } = useTheme();
	return (
		<div
			className="grid pt-16 pb-4"
			style={{
				gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
				gridGap: "3rem",
			}}
		>
			{projects.map((project: projectCardType, index: number) => {
				return (
					<div key={index} className={`flex justify-center`}>
						<ProjectCard
							title={project.title}
							info={project.info}
							imageurl={
								theme === "light"
									? project.imageurl.light
									: project.imageurl.dark
							}
							github={project.github}
							website={project.website}
							techstack={project.techstack}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectBlock;
