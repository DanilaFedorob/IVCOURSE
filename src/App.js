import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export function App() {
  
  return <div style={{
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    height: '100vh'
  }}><Header/> <Footer /> </div>;
}