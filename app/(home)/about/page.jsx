import PageHero from "../components/page_hero";
import AboutMe from "../components/aboutme";
import HireSection from "../components/hire";
import Statistic from "../components/stats";
import TeamMembers from "../components/team";


export default function About() {
    return (
        <>
            
            <PageHero PageProps={{link: "/about", title: "About"}}/>
            <AboutMe/>
            <TeamMembers/>
            <Statistic/>
            <HireSection/>
        </>
    );
}
