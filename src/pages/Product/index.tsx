import { Breadcrump } from "@/components";
import { GiFlamer, GiReturnArrow } from "react-icons/gi";
import { Color, Rates, VerticalProduct } from "@/components/shared";
import { ProductDiscount } from "./ProductDiscount";
import { BsEyeFill } from "react-icons/bs";
import QuantityInput from "@/components/shared/QuantityInput";
import Button from "@/components/shared/Button";
import { MdLocalShipping, MdMail, MdPayment } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";
import { BiLayer, BiShareAlt, BiShield } from "react-icons/bi";
import paymentMethods from "@/constants/payment-methods";
import { ProductImage } from "./ProductImage";
import Tabs from "@/components/shared/Tabs";
import Box from "@/components/shared/Box";
import trendingProducts from "@/constants/trending-products";
import Carousel from "@/components/shared/Carousel";
import SectionHeader from "@/components/shared/SectionHeader";
import { useGetProductBySlugQuery } from "@/redux/features/products/productsApi";
import { useParams } from "react-router-dom";
import Loading from "@/components/shared/Loading";
import { useEffect } from "react";
import CustomerReviews from "@/components/CustomerReviews";
import { useGetReviewsOfProductQuery } from "@/redux/features/reviews";

const Product = () => {
  // const [openReview, setOpenReview] = useState(false);
  const { slug } = useParams();
  const { data: product, isLoading } = useGetProductBySlugQuery(slug!, { skip: !slug });
  console.log("product", product)

  const { data: reviews, isLoading: isLoadingReviews } = useGetReviewsOfProductQuery(product?._id, { skip: !product?._id });

  if (isLoading)
    return <Loading />

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [])

  return (
    <div aria-label="pg-product" className="container mx-auto">
      <div aria-label="breadcrump" className="m-2">
        <Breadcrump
          links={[
            { link: "/", name: "Home" },
            { link: "/store", name: "Store" },
            { name: "Product", link: "/product", active: true },
          ]}
        />
      </div>

      <div className="pg-content flex flex-col md:flex-row gap-6 p-6">
        <ProductImage images={product!.images.map((img) => img.url)} />

        <div className="product-details basis-1/2">
          <h3 className="text-3xl font-bold text-blue-600">
            {product?.name}
          </h3>

          <div className="flex items-baseline gap-2">
            {reviews ? (
              <div
                aria-label="product-reviews"
                className="my-3 flex flex-col sm:flex-row items-center sm:gap-2"
              >
                <Rates stars={5} rate={reviews?.stats?.averageRating} isFixed />
                <span className="text-xs lg:text-lg text-gray-500">
                  ({reviews?.stats?.totalReviews} reviews)
                </span>

              </div>) : <Loading size="sm" />
            }

            <div
              aria-label="product-sold"
              className="flex items-center gap-1"
            >
              <GiFlamer color="red" className="text-lg" />
              <span className="text-sm sm:text-xl font-semibold">
                100 sold last 24 hours
              </span>
            </div>
          </div>
          {/* ./ Upper Data */}

          {reviews?.stats?.totalReviews === 0 && (
            <p className="text-gray-500 text-md italic">
              be first reviewer in this product right now!
            </p>
          )}

          <hr className="w-full h-0.5 bg-gray-200 my-9" />

          <ProductDiscount
            originalPrice={product!.price}
            discount={product!.discount.percentage}
            savingAmount={product!.savingsAmount}
          />

          <div aria-label="product-variant" className="my-1">
            <div aria-label="product-colors" className="flex gap-1">
              {product?.colors.map((color => (
                <div className="flex gap-1 py-1 px-2 bg-slate-200">
                  <Color color={color.hexCode} />
                  {color.name}
                </div>
              )))}
            </div>
          </div>

          <div
            aria-label="product-views"
            className="flex items-center gap-2 mt-4"
          >
            <div className="bg-black p-1 rounded-full w-fit">
              <BsEyeFill className="text-sm text-white" />
            </div>
            <span className="text-black font-semibold">
              24 people are viewing this right now
            </span>
          </div>
          {/* ./Views */}

          <div className="flex flex-col items-start gap-4 mt-6">
            <div className="w-full flex items-center">
              <div className="basis-1/4">
                <QuantityInput maxQty={product?.quantity} />
              </div>

              <div className="basis-3/4 bg-gradient-to-tl from-black to-gray-700 text-white px-4 py-2 ml-4 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-300 animate-in zoom-in ">
                <Button className="bg-transparent uppercase rounded-full">
                  Add to Cart
                </Button>
              </div>
            </div>

            <div
              aria-label="check-terms-condition"
              className="w-full py-2 flex items-center"
            >
              <input type="checkbox" id="terms" className="cursor-pointer" />
              <label
                htmlFor="terms"
                className="text-sm ml-1 text-gray-500 cursor-pointer"
              >
                I agree to{" "}
                <span className="text-blue-600 font-semibold">
                  terms and conditions
                </span>
              </label>
            </div>

            <div aria-label="btn-buy" className="w-full mt-2 mb-1">
              <Button className="text-xl w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Buy Now <MdPayment className="inline-block ml-2" />
              </Button>
            </div>

            <div
              aria-label="product-btns-options"
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-3">
                <div
                  aria-label="wishlist-option"
                  className="group flex items-center cursor-pointer"
                >
                  <HiOutlineHeart className="text-xs text-black group-hover:text-red-600 transition-colors duration-300 cursor-pointer" />
                  <span className="text-sm text-gray-500 ml-1 group-hover:text-red-600">
                    Add to Wishlist
                  </span>
                </div>

                <div
                  aria-label="compare-option"
                  className="group flex items-center cursor-pointer"
                >
                  <BiLayer className="text-xs text-black group-hover:text-yellow-600 transition-colors duration-300" />
                  <span className="text-sm text-gray-500 ml-1 group-hover:text-yellow-600">
                    Add Compare
                  </span>
                </div>
              </div>

              <div
                aria-label="share-btn"
                className="group flex items-center cursor-pointer hover:text-blue-500"
              >
                <BiShareAlt className="text-xs text-black group-hover:text-blue-600 transition-colors duration-300" />
                <span className="font-semibold ml-1 group-hover:text-blue-600">
                  Share
                </span>
              </div>
            </div>

            <hr className="w-full h-0.5 bg-gray-200 my-3" />

            <div className="flex flex-col gap-4 w-full">
              <div
                aria-label="shipping-and-returns"
                className="flex items-center justify-between w-full"
              >
                <h5 className="text-lg font-semibold flex items-center">
                  <BiShield className="text-lg mr-1" />
                  Shipping & Returns
                </h5>

                <span className="text-sm font-semibold">
                  <MdMail className="inline-block mr-1" />
                  <a href="mailto:" className="text-gray-800 hover:underline">
                    Contact us
                  </a>
                </span>
              </div>

              <div aria-label="features" className="flex flex-col">
                <div aria-label="deilvery">
                  <MdLocalShipping className="inline-block text-lg mr-1" />
                  <span className="text-sm text-gray-500">
                    Estimated Delivery:{" "}
                    <span className="font-bold">3-5 days</span>{" "}
                  </span>
                </div>

                <div aria-label="refund">
                  <GiReturnArrow className="inline-block text-lg mr-1" />
                  <span className="text-sm text-gray-600">
                    Return within <span className="font-bold">30 days</span>{" "}
                    of purchase. Taxes are non-refundable
                  </span>
                </div>
              </div>
            </div>

            <hr className="w-full h-0.5 bg-gray-200 my-3" />

            <div aria-label="details" className="w-full">
              <dl className="w-full">
                <div className="flex items-center w-full justify-between">
                  <dt className="font-semibold">Availability:</dt>
                  <dd className="text-sm text-gray-600">{product!.availability ? "In stock" : "Out stock"}</dd>
                </div>

                <div className="flex items-center w-full justify-between">
                  <dt className="font-semibold">Vendor</dt>
                  <dd className="text-sm text-gray-600">Ecom</dd>
                </div>

                <div className="flex items-center w-full justify-between">
                  <dt className="font-semibold">Category</dt>
                  <dd className="text-sm text-gray-600">{product?.category[0].name}</dd>
                </div>

                <div className="flex items-center w-full justify-between">
                  <dt className="font-semibold">Tags</dt>
                  <dd className="text-sm text-gray-600">
                    {product?.tags.join(",").toUpperCase()}
                  </dd>
                </div>
              </dl>
            </div>

            <div
              aria-label="payment-allowed"
              className="w-full bg-gray-200 p-4 rounded-lg"
            >
              <h5 className="text-sm font-semibold text-center">
                Guarantee safe & Secure checkout
              </h5>

              <div className="flex items-center justify-center gap-1">
                {paymentMethods.map((method) => (
                  <img
                    src={method}
                    alt={method}
                    key={method}
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box className="w-full mt-6">
        <Tabs tabs={["description", "reviews"]}>
          <div className="w-full mt-6">
            <h4 className="flex items-center gap-4 text-3xl font-times font-medium mb-4 after:block after:h-1 after:grow after:bg-gray-200">
              Description
            </h4>
            <p className="text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: product!.description }} />
            </p>

            <div className="text-center">
              {product?.images.map(img => (
                <img src={img.url} className="w-1/2 h-full max-w-full mx-auto" />
              ))}
            </div>
          </div>

          <CustomerReviews reviews={reviews} />
        </Tabs>
      </Box>

      <Box className="w-full mt-6">
        <SectionHeader title="Related Products" />

        <Carousel>
          {trendingProducts.map((product, index) => (
            <div className="flex-shrink-0 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
              <VerticalProduct product={product} key={index} />
            </div>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default Product;
