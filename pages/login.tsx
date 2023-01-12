import Image from "next/legacy/image";

const LoginPage = () => {
	return (
		<div className="flex flex-col items-center justify-around my-[10%] md:flex-row">
			<div className="flex flex-col m-2 child:m-2 w-full max-w-xs shadow p-5 ">
				<h2 className="text-center  ">Admin Login</h2>
				<input
					type="text"
					placeholder="Username"
					className="input input-bordered "
				/>
				<input
					type="text"
					placeholder="Password"
					className="input input-bordered "
				/>
				<button className="btn btn-primary ">Submit</button>
			</div>
			<div className="icon">
				<Image
					src="/secure_login.svg"
					alt=""
					width={300}
					height={200}
				/>
			</div>
		</div>
	);
};

export default LoginPage;
