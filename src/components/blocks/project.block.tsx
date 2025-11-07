import { ProjectCardType } from "../../types";
import ProjectCard from "../cards/project.card";
import { useContext } from "react";
import CustomContext from "../context/custom.context";

const ProjectBlock = () => {
    
    const { projects } = useContext(CustomContext);
	return (
		<div
			className="grid place-items-center pt-16 pb-4"
			style={{
				gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
				gridGap: "3rem",
			}}
		>
			{projects.map((project: ProjectCardType, index: number) => {
				return (
					<div key={index} className={`flex justify-center max-w-[340px] self-center `}>
						<ProjectCard
							title={project.title}
							info={project.info}
							imageurl={project.imageurl}
							github={project.github}
							website={project.website}
							techstack={project.techstack}
							maintenance={project.maintenance}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectBlock;
