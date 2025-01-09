import Header from "../components/Header";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return ( 
        <div className="w-full">
            <Header />
            <main className="flex justify-content-center">
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}
 
export default PageLayout;