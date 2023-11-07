import BlogPosts from "../components/blog/blog_posts";
import PageHero from "../components/page_hero";
import User from "../components/user";
import HireSection from "../components/hire";


export const metadata = {
    title: "Blog",
};

export default function BlogPage() {
    return (
        <>
            
            <PageHero PageProps={{link: "/blog", title: "Blog"}}/>
            <section className="mb-6 short_section">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium">My Blogs</h1>
                    <form action="#">
                        <select className="border px-3 py-2 outline-none" id="">
                            <option value="all">All Posts</option>
                            <option value="length">By Length</option>
                            <option value="views">By Views</option>
                        </select>
                    </form>
                </div>
            </section>
            <BlogPosts/>
            <HireSection/>
        </>
    );
}
