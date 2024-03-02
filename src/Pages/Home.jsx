//components import
import Header from "../Components/Header/Header";
import Brands from "../Components/Brands/Brands";
import FeaturedBooks from "../Components/FeaturedBooks/FeaturedBooks";
import BestSellingBook from "../Components/BestSellingBook/BestSellingBook";

export default function Home(){
    return (
        <>
        <Header/>
        <Brands/>
        <FeaturedBooks/>
        <BestSellingBook/>
        </>
    )
}