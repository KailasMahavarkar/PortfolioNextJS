import Image from "next/image";

const Avatar = () => {
	return (
		<div className="container relative hidden w-64 h-64 ml-auto sm:inline-block sm:w-80 sm:h-80">
			<Image
				unoptimized
				layout="fill"
				alt="Display picture of the author"
				className="rounded-full"
				src="/avatar.png"
			/>
		</div>
	);
};

export default Avatar;
