import Link from "next/link";
import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: NextPage<any> = () => {
	const { setTheme, theme } = useTheme();
	const router = useRouter();

	useEffect(() => {
		const localTheme = localStorage.getItem("theme") || "light";
		setTheme(localTheme);
	}, [setTheme]);

	const navMap = [
		{
			name: "Home",
			url: "/",
		},

		{
			name: "Projects",
			url: "#projects",
		},
	];

	const NavBarItems = () => {
		return (
			<>
				<li className="navbar-center ">
					{navMap.map((item, key) => {
						return (
							<div key={key} className="cursor-pointer mx-2">
								<Link href={item.url} passHref={true}>
									{item.name}
								</Link>
							</div>
						);
					})}
				</li>
			</>
		);
	};

	const themeChangeHandler = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<div className="flex justify-center items-center ">
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<NavBarItems />
						</ul>
					</div>
					<div
						className="normal-case text-2xl font-bold cursor-pointer"
						onClick={() => {
							router.push("/");
						}}
					>
						Kailas Mahavarkar
					</div>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<NavBarItems />
					</ul>
				</div>

				<div className="navbar-end">
					<button
						className="btn btn-circle"
						onClick={themeChangeHandler}
					>
						{theme === "light" ? (
							<FaMoon size="1.35em" />
						) : (
							<FaSun size="1.35em" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
