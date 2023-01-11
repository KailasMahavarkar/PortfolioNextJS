import { Mapper, tailcss } from "../types";

export const scroller = (element: any) => {
	try {
		// find target element to scroll
		const scroll: any = document.getElementById(element);

		// scroll to target element
		scroll.scrollIntoView({ behavior: "smooth" });
	} catch (error) {
		//
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
	object: Mapper<T, tailcss>,
	options = {
		hideKey: false,
	}
): Mapper<T, string> {
	const res: any = {};

	// loop through object
	for (const key in object) {
		// if key is not hidden
		const value: any = object[key];

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

export const manyCSS = (...args: any[]) => {
	let result = "";
	for (let i = 0; i < args.length; i++) {
		result += args[i] + " ";
	}
	return result.trim();
};

export const withTheme =
	(theme: any) =>
	(object: { base: string; light: string; dark?: string }) => {
		const resolved =
			theme === "light" ? object.light || "" : object.dark || "";

		return manyCSS(resolved, object.base);
	};
