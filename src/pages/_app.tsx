import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import Head from "next/head";
import "@/styles/global.css";

import { Roboto } from 'next/font/google'
import CustomContext from "@/components/context/custom.context";
import { useEffect, useState } from "react";
import { ExperienceProps } from "@/components/views/work.view";
import { ProjectCardType } from "@/types";
import axios, { AxiosError } from "axios";

const roboto = Roboto({
    weight: ['500'],
    subsets: ['latin'],
})


function MyApp({ Component, pageProps }: AppProps) {
    const [experience, setExperience] = useState<ExperienceProps[]>([]);
    const [projects, setProjects] = useState<ProjectCardType[]>([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					"https://raw.githubusercontent.com/KailasMahavarkar/config/main/portfolio.json"
				);
				setExperience(response.data.experience);
				setProjects(response.data.projects);
			} catch (error: unknown) {
				console.log("Snap :(  --->", (error as AxiosError).response?.data);
			}   
		}
		fetchData();
	}, []);


    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
            </Head>

            <CustomContext.Provider value={{ experience, projects }}>
                <Layout className={roboto.className}>
                    <Component {...pageProps} />
                </Layout>
            </CustomContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;
