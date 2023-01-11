import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html  >
				<Head />

				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}
