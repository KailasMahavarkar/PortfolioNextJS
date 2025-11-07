import { ProjectCardType } from "@/types";
import { createContext } from "react";
import { ExperienceProps } from "../views/work.view";

export type customContextType = {
    experience: ExperienceProps[];
    projects: ProjectCardType[];
};

const CustomContext = createContext<customContextType>({
    experience: [],
    projects: [],
});

export default CustomContext;
