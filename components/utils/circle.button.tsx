import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";

const CircleButton = ({
	to,
	text,
	styles,
}: {
	to: string;
	text: string;
	styles: string;
}) => {
	return (
		<Link href={to} className="">
			<button
				className={`flex align-center transition duration-500 ease transform hover:translate-y-1 cursor-pointer ${styles} `}
			>
				<span className="inline-block p-3 mr-1 border-2 border-gray-400 border-solid rounded-full dark:text-white">
					<BsArrowDown />
				</span>
				<span className="my-3 ml-1 sm:m-3">{text}</span>
			</button>
		</Link>
	);
};

export default CircleButton;
