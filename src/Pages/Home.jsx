import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Category from '../Components/Category'
import { categories, products } from '../data'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import Cards from '../Components/Cards'
import ListItems from '../Components/ListItems'
import Benefits from '../Components/Benefits'

const Home = () => {
    document.body.style.overflowY = "scroll";
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <Cards />
            <Benefits />
            {/* <ProSlider data={products} title="TRENDING PRODUCT"/> */}
            <Category data={categories} title="SHOP BY CATEGORIES" />
            <ListItems products={products}/>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home
