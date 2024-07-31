import Image from "next/legacy/image";
import CircleButton from "../utils/circle.button";
import WorkPng from "../../public/work.png";
import useMedia from "../hooks/useMedia";

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
    };

    const RightLine = () => {
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
    };

    if (mode === "left") {
        return <LeftLine />;
    } else {
        return <RightLine />;
    }
};

const CareerTimeline = () => {

    const media = useMedia();
    console.table(media);

    const timeLineData = [
        {
            timeframe: 'June 2019 - Dec 2021',
            role: 'Freelance Teacher',
            company: 'Fiverr.com',
            companyUrl: 'https://www.fiverr.com/braincity?up_rollout=true',
            linkContent: 'Fiverr',
            linkUrl: 'https://www.fiverr.com/braincity?up_rollout=true',
            postLinkContent: ' is a freelance platform',
            content: 'During pandemic times, I was able to work as a freelancer and as a teacher to teach young people about computer programming and networking.'
        },
        {
            timeframe: 'June 2021 - Feb 2022',
            role: 'Freelance Developer',
            company: 'Dynopictures',
            companyUrl: 'https://dynopictures.netlify.com',
            linkContent: 'Dynopictures',
            linkUrl: 'https://dynopictures.netlify.com',
            postLinkContent: ' is a local business',
            content: `During this time, I maintained multiple websites and helped businesses establish their online presence. I have also worked on various freelance projects.`

        },
        {
            timeframe: 'Dec 2021 - Feb 2022',
            role: 'SDE Intern @Jhaiho',
            company: 'Jhaiho PVT Ltd',
            companyUrl: 'https://jhaiho.com',
            linkContent: 'Jhaiho',
            linkUrl: 'https://jhaiho.com',
            postLinkContent: ' is a one-stop destination for everything related to tattoos',
            content: 'As an intern, I was tasked with developing a new version of their API. It was a good opportunity to learn GoLang, GRPC, Protobuf, and microservice architecture.'
        },

        {
            timeframe: 'August 2022 - November 2022',
            role: 'Trainee/Intern@Fynd',
            company: 'Fynd.com',
            companyUrl: 'https://fynd.com',
            linkContent: 'Fynd',
            linkUrl: 'https://fynd.com',
            postLinkContent: ' is a fashion e-commerce platform',
            content: `I learned MEVN stack and worked on their internal tools.
            It was semi-intern & semi-training program where I learned about the industry standards and best practices.`
        },
        {
            timeframe: 'April 2022 - Present',
            role: 'SDE I @carwale',
            company: 'Carwale',
            companyUrl: 'https://www.carwale.com',
            linkContent: 'Carwale',
            linkUrl: 'https://www.carwale.com',
            postLinkContent: ' is top leading automotive portal in India',
            content: `
                At CarWale, I developed and maintain their Oxygen component library and research and implemented new technologies to enhance web & app performance. My work included DOM element reduction, CSS optimization, video rendering optimization, and researching micro frontend architecture. 
            `
        }
    ];


    return (
        <>
            {
                timeLineData.map((data, index) => {
                    
                    return (
                        <TimeLine
                            key={index}
                            mode={index % 2 === 0 ? 'left' : 'right'}
                            timeframe={data.timeframe}
                            role={data.role}
                            company=''
                            companyUrl={data.companyUrl}
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
