import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import contactData from "../data/contact.data";
import navbarLinks from "../data/navbar.data";
import { useTheme } from "next-themes";
import { withTheme } from "../helper";

export const socialIcons = [
	{
		name: "twitter",
		to: "https://twitter.com/kailas_mm",
		icon: <FaTwitter size="1.35rem" />,
		color: "text-blue-400",
	},
	{
		name: "github",
		to: "https://github.com/kailasmahavarkar",
		icon: <FaGithub size="1.35rem" />,
		color: "text-gray-800",
	},
	{
		name: "linkedin",
		to: "https://www.linkedin.com/in/kailasmahavarkar",
		icon: <FaLinkedinIn size="1.35rem" />,
		color: "text-blue-700",
	},
];

const Footer = () => {
	const { theme } = useTheme();
	const wt = withTheme(theme);

	const style = {
		footer: wt({
			base: "relative pt-20 mt-0",
			light: "bg-base-300",
			dark: "bg-base-200",
		}),
	};

	return (
		<footer id="contact" className={style.footer}>
			<div className="container px-4 mx-0 sm:mx-auto">
				<div className="flex flex-wrap text-left lg:text-left">
					<div className="w-full px-4 lg:w-6/12">
						<p className="pb-4 text-3xl ">
							{"Let's keep in touch!"}
						</p>
						<h5 className="mt-0 mb-2 text-lg ">
							Find Kai on any of these platforms.
						</h5>
						<div className="flex my-6 row lg:mb-0">
							{socialIcons.map((icon) => (
								<Link key={icon.name} href={icon.to}>
									<a>
										<div className="btn btn-circle mx-1 hover:-translate-y-2">
											{icon.icon}
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="w-full px-4 my-2 lg:w-6/12">
						<div className="flex flex-wrap mb-6 items-top">
							<div className="w-full px-4 ml-auto lg:w-4/12">
								<span className="block mb-2 text-sm  uppercase hover:fotn-bold">
									Contact
								</span>
								<ul className="list-unstyled">
									{contactData.map((contact) => (
										<li
											key={contact.name}
											className="block pb-2 text-sm hover:font-bold"
										>
											<Link href={contact.to}>
												<a>{contact.name}</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="w-full px-4 mt-2 sm:mt-0 lg:w-4/12">
								<span className="block mb-2 text-sm uppercase ">
									Site Map
								</span>
								<ul className="list-unstyled">
									{navbarLinks.map((link) => (
										<li
											key={link.name}
											className="block pb-2 text-sm hover:font-bold"
										>
											<Link href={link.to}>
												<a>{link.name}</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-center pb-6 mt-4 md:justify-between">
					<div className="w-full px-4 mx-auto text-center md:w-4/12">
						<div className="py-1 text-sm font-medium ">
							All rights reserved © Kailas Mahavarkar{" "}
							<span id="get-current-year">
								{new Date().getFullYear()}
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
