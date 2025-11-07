import { projectCardType } from "../../types";
import ProjectCard from "../cards/project.card";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectBlock = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		async function fetchData() {
			// You can await here
			try {
				const response = await axios.get(
					"https://raw.githubusercontent.com/KailasMahavarkar/config/main/portfolio.json"
				);
				console.log("project data initialized")
				setProjects(response.data.projects);
			} catch (error: any) {
				console.log("Snap :(  --->", error.response?.data);
			}
		}
		fetchData();
	}, []);

	return (
		<div
			className="grid place-items-center pt-16 pb-4"
			style={{
				gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
				gridGap: "3rem",
			}}
		>
			{projects.map((project: projectCardType, index: number) => {
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
