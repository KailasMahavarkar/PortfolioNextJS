import CircleButton from "../utils/circle.button";
import { ReactNode, useMemo, useContext } from "react";
import Image from "next/legacy/image";
import WorkPng from "../../../public/work.png"
import CustomContext from "../context/custom.context";

interface TimeLineProps {
    timeframe: string;
    role: string;
    mode: string;
    company: string;
    children: ReactNode;
    company_url: string;
}

export interface ExperienceProps {
    timeframe: string;
    role: string;
    company: string;
    company_url: string;
    linkContent: string;
    linkUrl: string;
    postLinkContent: string;
    content: string;
}

const TimeLine = ({
    timeframe,
    role,
    mode,
    company,
    children,
    company_url,
}: TimeLineProps) => {
    const style = {
        role: "mb-1 text-lg font-bold md:text-2xl capitalize ",
        company: " shadow-link hover:shadow-none hover:text-red-500",
        children: "leading-snug ",
    };

    const LeftLine = useMemo(() => {
        return (
            <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-green-600">{timeframe}</p>
                    <div className="mb-3 text-lg font-bold md:text-2xl capitalize">
                        {role}
                    </div>
                    {
                        company && (
                            <p className="mb-3 ">
                                <a
                                    className={style.company}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={company_url}
                                >
                                    {company}
                                </a>
                            </p>
                        )
                    }
                    <p className={style.children}>{children}</p>
                </div>
            </div>
        );
    }, [timeframe, role, company, company_url, children, style.company, style.children]);

    const RightLine = useMemo(() => {
        return (
            <div className="flex items-center justify-between w-full mb-8 right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-green-600">{timeframe}</p>
                    <div className={style.role}>{role}</div>
                    {
                        company && (
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
                        )
                    }

                    <p className={style.children}>{children}</p>
                </div>
            </div>
        );
    }, [timeframe, style.role, style.company, style.children, role, company, company_url, children]);

    return mode === "left" ? LeftLine : RightLine;
};

const CareerTimeline = () => {
    const { experience } = useContext(CustomContext);

    return (
        <>
            {
                experience?.map((data, index) => {
                    return (
                        <TimeLine
                            key={index}
                            mode={index % 2 === 0 ? 'left' : 'right'}
                            timeframe={data.timeframe}
                            role={data.role}
                            company=''
                            company_url={data.company_url}
                        >
                            <>
                                <strong>
                                    <a
                                        className="shadow-link hover:shadow-hover text-xl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={data.linkUrl}
                                    >
                                        {data.linkContent}
                                    </a>
                                    {
                                        data.postLinkContent
                                    }
                                </strong>
                                <br></br>
                                {data.content}
                            </>
                        </TimeLine>
                    )
                })
            }
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
                        Till now he has developed Multiple frontend applications and done extensive research on backend technologies. One such website was{" "}
                        <strong>
                            <a
                                className="shadow-link hover:shadow-hover"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://pastekey.netlify.app/"
                            >
                                Pastekey.netlify.app
                            </a>
                        </strong>
                        , a text-sharing platform where user can share code or
                        any text for free, the webapp offers great security and
                        it have{" "}
                        <strong>healthy traffic</strong>. <br />
                        <br />

                        {/* He has doen multiple internships and worked for 1.4 years with good product based companies */}
                        He has also worked with{" "}
                        Jhaiho PVT Ltd, a tattoo e-commerce platform,
                        Fynd a fashion e-commerce platform and
                        Carwale, a top leading automotive portal in India.
                        <br />
                        <br />

                        He has also helped multiple business like - {" "}
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
                                sizes="100vw"
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
