// import { Footer } from ".";
import Header from "./blocks/header.block";
import { ThemeProvider } from "next-themes";
import Footer from "./blocks/footer.block";

const Layout = ({ children }: any) => (
	<ThemeProvider defaultTheme="light">
		{/* <Header /> */}
		<div className="container m-auto">
			<Header />
			<div className="px-5 lg:p-0 py-5">{children}</div>
		</div>
		<Footer />
	</ThemeProvider>
);

export default Layout;
