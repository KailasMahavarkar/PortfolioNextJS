import Image from "next/legacy/image";

const Avatar = () => {
	return (
		<div className="container relative hidden w-64 h-64 ml-auto sm:inline-block sm:w-80 sm:h-80">
			<Image
				priority={true}
				layout="fill"
				sizes="100vw"
				alt="Display picture of the author"
				className="rounded-full"
				src="/avatar.png"
			/>
		</div>
	);
};

export default Avatar;
