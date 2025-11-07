import type { NextPage } from "next";
import ProjectBlock from "../components/blocks/project.block";
import LandingView from "../components/views/landing.view";
import Separator from "../components/utils/seperator.util";
import SectionLayout from "../components/blocks/sectionlayout.block";
import IntroductionView from "../components/views/introduction.view";
import Work from "../components/views/work.view";


const Home: NextPage = () => {
    return (
        <div className="block bg-base-100">
            <section id="home">
                <LandingView />
            </section>
            <Separator />
            <SectionLayout
                id="about"
                spacing="pt-8 pb-2"
                name="About"
                styles=""
            >
                <IntroductionView />
            </SectionLayout>
            <Separator />
            <SectionLayout
                id="projects"
                spacing="py-4"
                name="Projects"
                styles=""
            >
                <ProjectBlock />
            </SectionLayout>
            <Separator />
            <SectionLayout id="work" spacing="pt-8" name="Work" styles="">
                <Work />
            </SectionLayout>
            <Separator />
        </div>
    );
};

export default Home;
