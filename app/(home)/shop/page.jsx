import PageHero from "../components/page_hero";
import ShopProducts from "../components/shop/shop_products";
import HireSection from "../components/hire";



export const metadata = {
    title: "Shop"
}
export default function ShopPage() {
    return (
        <>
            <PageHero PageProps={{link: "/shop", title: "Shop"}}/>
            <section className="mb-6 short_section">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-medium">Shop Products</h1>
                    <form action="#">
                        <select className="border px-3 py-2 outline-none" id="">
                            <option value="all">All Posts</option>
                            <option value="length">By Category</option>
                            <option value="views">By Sales</option>
                        </select>
                    </form>
                </div>
            </section>
            <ShopProducts/>
            <HireSection/>
        </>
    );
}
