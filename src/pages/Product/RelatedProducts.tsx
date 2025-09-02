import { VerticalProduct } from "@/components/shared";
import Carousel from "@/components/shared/Carousel"
import Loading from "@/components/shared/Loading";
import SectionHeader from "@/components/shared/SectionHeader"
import { useGetProductsQuery } from "@/redux/features/products/productsApi";


interface RelatedProductsProps {
    tags: string[];
    category: string;
}

export const RelatedProducts = ({ tags, category }: RelatedProductsProps) => {
    const { data: products, isLoading } = useGetProductsQuery({
        category: category,
        limit: 10,
        page: 1,
    });

    console.log(products);

    if (isLoading) return <Loading />
    if (!products) return null;

    return (
        <div>
            <SectionHeader title="Related Products" />

            <Carousel>
                {products.products.length > 0 && products.products.map((product, index) => (
                    <div className="flex-shrink-0 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                        <VerticalProduct product={product} key={index} />
                    </div>
                ))}
            </Carousel>

            {products.products.length === 0 && (
                <div className="flex justify-center items-center h-full">
                    <p className="text-gray-500">No related products found</p>
                </div>
            )}
        </div>
    )
}