import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import HomeProjects from "./components/projects/home_projects";
import Statistic from "./components/stats";
import Partners from "./components/partners";
import BestSellingProducts from "./components/bestsellingproduct";
import BlogHome from "./components/blog/blog_home";
import HireSection from "./components/hire";
import HomeServices from "./components/services";

export default function Home() {
    return (
        <>
            <Hero/>
            <HomeServices/>
            <AboutMe/>
            <Statistic/>
            <HomeProjects/>
            <Partners/>
            <BestSellingProducts/>
            <BlogHome/>
            <HireSection />
        </>
    );
}
