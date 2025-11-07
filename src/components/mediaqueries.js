const screen = {
	screen_xs_max: 767,
	screen_sm_min: 768,
	screen_sm_max: 959,

	screen_md_min: 960,
	screen_md_max: 1279,

	screen_lg_min: 1280,
	screen_lg_max: 1919,

	screen_xl_max: 5000,
	screen_xl_min: 1920,
};

const lessThanSmall = () => width < screen.screen_xs_max;
const lessThanMedium = () => width < screen.screen_sm_max;
const lessThanLarge = () => width < screen.screen_md_max;
const lessThanXLarge = () => width < screen.screen_lg_max;

// V -> very
// X -> extra
const greaterThanVSmall = () => width > screen.screen_vs_min;
const greaterThanSmall = () => width > screen.screen_sm_min;
const greaterThanMedium = () => width > screen.screen_md_min;
const greaterThanLarge = () => width > screen.screen_lg_min;
const greaterThanXLarge = () => width > screen.screen_xl_min;

const mediaQueries = {
	lessThanSmall,
	lessThanMedium,
	lessThanLarge,
	lessThanXLarge,
	greaterThanVSmall,
	greaterThanSmall,
	greaterThanMedium,
	greaterThanLarge,
	greaterThanXLarge,
};

export default mediaQueries;