import { Mapper, Tailcss } from "../types/index";

export const scroller = (element: string) => {
	try {
		// find target element to scroll
		const scroll = document.getElementById(element);

		// scroll to target element
		scroll?.scrollIntoView({ behavior: "smooth" });
	} catch (error) {
		console.error(error);
	}
};

const clover = (prefix: string, str: string = "") => {
	let result = "";

	const propMap = str.split(" ");

	// loop through each property
	for (let i = 0; i < propMap.length; i++) {
		if (propMap[i].startsWith(prefix)) {
			result += propMap[i] + " ";
		}
	}
	return result.trim();
};

// typescript
// tail() function takes input as Type
// and returns key of Type with value of type string
export function tail<T>(
	object: Mapper<T, Tailcss>,
	options = {
		hideKey: false,
	}
): Mapper<T, string> {
	const res: Mapper<T, string> = {} as Mapper<T, string>;

	// loop through object
	for (const key in object) {
		// if key is not hidden
		const value: Tailcss = object[key];

		const smRes = value.sm;
		const mdRes = clover("md", value.md) || "";
		const lgRes = clover("lg", value.lg) || "";
		const xlRes = clover("xl", value.xl) || "";
		const nulled = value.nulled || "";

		res[key] = `${
			options.hideKey ? "" : key
		} ${smRes} ${mdRes} ${lgRes} ${xlRes} ${nulled}`.trim();
	}
	return res;
}

export const manyCSS = (...args: string[]) => {
	let result = "";
	for (let i = 0; i < args.length; i++) {
		result += args[i] + " ";
	}
	return result.trim();
};
