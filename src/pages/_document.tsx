import Document, { Html, Head, Main, NextScript } from "next/document";
import { JSX } from "react";

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en" data-theme="light">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
