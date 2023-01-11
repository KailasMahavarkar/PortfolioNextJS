import resumeRanker from "../../assets/projects/resumeRanker.jpg";
import anandpal from "../../assets/projects/anandpal.jpg";
import { projectType } from "../../types";

// const project = [
// 	{
// 		title: "DynoPictures.com",
// 		info: "React-JS + NextJS App",
// 		visit_url: "https://dynopictures.com",
// 		source_url: "http://github.com/KailasMahavarkar/",
// 		image: "https://res.cloudinary.com/braincity/image/upload/v1636538342/portfolio/projects/dynopictures.jpg",
// 		category: "NextJS, ReactJS",
// 	},

// 	{
// 		title: "AnandPal ",
// 		info: "Ecommerce + Blogging App",
// 		visit_url: "https://orkait-anandpal.netlify.com",
// 		source_url: "",
// 		image: anandpal,
// 		category: "ReactJS",
// 	},
// 	{
// 		title: "2048 Python",
// 		info: "2048 Game made using python",
// 		visit_url: "https://github.com/KailasMahavarkar/Game2048",
// 		source_url: "https://github.com/KailasMahavarkar/Game2048",
// 		image: "https://i2.wp.com/healthybrains.org/wp-content/uploads/2018/07/wsi-imageoptim-2048game.png?fit=475%2C300&ssl=1",
// 		category: "Gaming",
// 	},
// 	{
// 		title: "Orka-IT solutions",
// 		info: "2048 Game made using python",
// 		visit_url: "google.com",
// 		source_url: "github.com/KailasMahavarkar/",
// 		image: "https://i2.wp.com/healthybrains.org/wp-content/uploads/2018/07/wsi-imageoptim-2048game.png?fit=475%2C300&ssl=1",
// 		category: "Gaming",
// 	},

// ];

const projects: projectType = [
	{
		title: "Pastekey.io",
		info: `Pastekey.io is a web application that allows you to paste text and save it to a database. All private paste are encrypted by AES-256 encryption, It doesn't store your password or even your password hash in database.`,
		website: "https://pastekey.io",
		github: "",
		apidoc: "",
		imageurl: {
			light: "https://i.imgur.com/FYjmYoy.jpeg",
			dark: "https://i.imgur.com/EChbKi1.jpeg",
		},
		techstack: ["NextJS", "Redis", "MongoDB", "AWS", "CI/CD", "JWT"],
	},
	{
		title: "DynoPictures.com",
		info: "Dynopictures.com is portfolio website made for Rahul Dyno an business enthusiast, it showcases his work and projects.",
		website: "https://dynopictures.com",
		github: "http://github.com/KailasMahavarkar/",
		apidoc: "",
		imageurl: {
			light: "https://i.imgur.com/HPjiNIk.jpeg",
			dark: "https://i.imgur.com/HPjiNIk.jpeg",
		},
		techstack: ["NextJS", "ReactJS"],
	},
	{
		title: "Anandpal",
		info: "Ecommerce + Blogging App made for motivational speaker & doctor Mr Anand & Mrs Pallavi",
		website: "https://orkait-anandpal.netlify.com",
		github: "http://github.com/KailasMahavarkar/",
		apidoc: "",
		imageurl: {
			light: "https://i.imgur.com/vK8kli2.jpeg",
			dark: "https://i.imgur.com/vK8kli2.jpeg",
		},
		techstack: ["EditorJS CMS", "ReactJS", "Redis", "MongoDB", "CI/CD"],
	},
	{
		title: "Resume Score Analyzer",
		info: "Scan any IT resume and rank it (KNN + SVM + XGBOOST)",
		website: "https://orka-resumescanner.netlify.com",
		github: "https://github.com/KailasMahavarkar/ResumeScannerML",
		apidoc: "",
		imageurl: {
			light: "https://i.imgur.com/76XZ2tu.jpeg",
			dark: "https://i.imgur.com/76XZ2tu.jpeg",
		},
		techstack: ["Machine Learning"],
	},
	{
		title: "BuildYourPC",
		info: "Build your own PC is a webapp aims to reduce the time spent on building a PC, it provides you with a list of components and you can build your own PC",
		website: "https://buildyourpc.netlify.com",
		github: "https://github.com/KailasMahavarkar/BuildYourPC",
		apidoc: "",
		imageurl: {
			light: "https://i.imgur.com/76XZ2tu.jpeg",
			dark: "https://i.imgur.com/76XZ2tu.jpeg",
		},
		techstack: ["Django", "SQL"],
	},
];

export default projects;
