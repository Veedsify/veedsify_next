import PageHero from "../components/page_hero";
import MyProject from "../components/projects/project";
import HireSection from "../components/hire";


export const metadata = {
    title: "Projects",
};
export default function Project() {
    return (
        <>
            
            <PageHero PageProps={{link: "/project", title: "Projects"}}/>
            <section className="mb-6 short_section">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium">My Projects</h1>
                    <form action="">
                        <select className="border px-3 py-2 outline-none" id="">
                            <option value="all">All Projects</option>
                            <option value="length">By Cost</option>
                        </select>
                    </form>
                </div>
            </section>
            <MyProject/>
            <HireSection/>
        </>
    );
}
