import React from 'react';
import { Rates } from '../shared';
import { ReviewsResponse } from '@/types';
import Button from '../shared/Button';
import ReviewForm from '../ReviewForm';



interface CustomerReviewsProps {
    reviews?: ReviewsResponse;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
    reviews: data = undefined
}) => {

    const { reviews, stats } = data ?? {};

    return (
        <div className="w-full mt-6">
            <h4 className="flex items-center gap-4 text-3xl font-times font-medium mb-4 after:block after:h-1 after:grow after:bg-gray-200">Customer Reviews</h4>

            <div className="flex items-center justify-between mb-4">

                <div className="avg-ratings">
                    <Rates stars={5} rate={stats?.averageRating} isFixed className="text-black" />
                    based on {stats?.totalReviews} reviews
                </div>

                <Button className="w-fit rounded-md">Write a review</Button>
            </div>

            <ReviewForm />

            <hr className="bg-gray-200 h-1 mb-4" />

            <div className="max-w-4xl py-6 bg-white">
                {/* Reviews List */}
                <div className="space-y-7">
                    {reviews && reviews.map((review) => (
                        <div key={review._id} className="border-b border-gray-100 pb-8 last:border-b-0">
                            {/* Review Header */}
                            <div className="flex items-center gap-2 mb-3">
                                <Rates stars={5} rate={review.stars} isFixed />
                            </div>

                            {/* Review Title */}
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {review.title}
                            </h3>

                            {/* Author and Date */}
                            <div className="flex items-center gap-2 mt-3">
                                <span className="font-semibold text-gray-700">{review.user.first_name}</span>
                                <span className="text-gray-500">on</span>
                                <span className="font-semibold text-gray-700">{new Date(review.createdAt).toLocaleString()}</span>
                            </div>

                            {/* Review Content */}
                            <p className="text-gray-500 mb-4 leading-relaxed">
                                {review.review}
                            </p>

                            {/* TODO: Reply Button */}
                            {/* <div className="flex justify-end">
                                <button
                                    onClick={() => handleReply(review.id)}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
                                >
                                    Reply
                                </button>
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {reviews && reviews.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 mb-4">No reviews yet</p>
                        <button
                            // onClick={handleWriteReviewClick}
                            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium"
                        >
                            Be the first to review
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
};

export default CustomerReviews;