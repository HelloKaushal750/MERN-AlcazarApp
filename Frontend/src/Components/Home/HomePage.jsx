import Navbar from "../Navbar/Navbar";
import ProductList from "../Product/ProductList";
import MidSectionHome from "../MidSectionHome/MidSectionHome";
import { Footer } from "../Footer/Footer";

function HomePage(){
    return <div>
        <Navbar />
        <ProductList />
        <MidSectionHome />
        <Footer />
    </div>
}

export default HomePage;