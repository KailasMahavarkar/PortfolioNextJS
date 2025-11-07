import Header from "./blocks/header.block";
import { ThemeProvider } from "next-themes";
import Footer from "./blocks/footer.block";

interface LayoutProps {
    children: React.ReactNode
    className: string
}

const Layout = ({ children, className }: LayoutProps) => (
    <ThemeProvider defaultTheme="light">
        <div className={`container m-auto ${className}`}>
            <Header />
            <div className="px-5 lg:p-0 py-5">{children}</div>
        </div>
        <Footer />
    </ThemeProvider>
);

export default Layout;
