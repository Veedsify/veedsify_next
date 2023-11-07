import HomeServices from "../components/services";
import PageHero from "../components/page_hero";
import HireSection from "../components/hire";

export default function Services(){
    return(
        <>
            <PageHero PageProps={{link: "/services", title: "Services"}}/>
            <HomeServices/>
            <HomeServices/>
            <HomeServices/>
            <HireSection/>
        </>
    )
}