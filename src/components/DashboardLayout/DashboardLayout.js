import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { AuthForm } from "../../containers/AuthForm/AuthForm";



export default function DashboardLayout({ children }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-between",
            height: '100vh',
        }}> <Header /> <Main>{children}</Main> <Footer /> </div>
    );
}

