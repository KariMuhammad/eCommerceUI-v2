import React, { useEffect, useState } from 'react';
import { Rates } from '../shared';
import { CreateReviewRequest, ModalSizes } from '@/types';
import useAuth from '@/hooks/use-auth';
import useModal from '@/hooks/use-modal';
import LoginForm from '../LoginForm';
import { useCreateReviewMutation } from '@/redux/features/reviews';
import { toast } from 'sonner';

interface ReviewFormProps {
    isVisible: boolean;
    productId: string;
    onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ isVisible, productId, onClose }) => {
    const { isAuthenticated } = useAuth();
    const { openModal } = useModal();
    const [isAnimating, setIsAnimating] = useState(false);

    const [createReview, { isSuccess, isError, error }] = useCreateReviewMutation();

    useEffect(() => {
        if (isVisible && !isAuthenticated) {
            openModal({
                title: "Login to write a review",
                children: <LoginForm />,
                size: ModalSizes.sm,
            });
        }
    }, [isAuthenticated, isVisible]);

    useEffect(() => {
        if (isVisible) {
            setIsAnimating(true);
        }
    }, [isVisible]);

    const [rating, setRating] = useState<number>(5);
    const [title, setTitle] = useState<string>('');
    const [review, setReview] = useState<string>('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        const formData: CreateReviewRequest = {
            stars: rating,
            title,
            review,
            productId
        };

        console.log(formData);
        // Handle form submission here
        createReview(formData).then(() => console.log("review created"));
        // After successful submission, you might want to hide the form
    };


    const handleClose = (): void => {
        setIsAnimating(false);
        // Wait for animation to complete before hiding
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleCancel = (): void => {
        setRating(5);
        setTitle('');
        setReview('');
        handleClose();
    };

    // Don't render if not visible and not animating
    if (!isVisible && !isAnimating) {
        return null;
    }

    if (isSuccess && !isError) onClose();

    if (isError) {
        console.error("Error in create product", error)
        toast.error(error.data.errors.message ?? "Error in create review");
    }

    return (
        <div
            className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isVisible && isAnimating
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
                }`}
        >
            {/* Background overlay */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isVisible && isAnimating ? 'opacity-50' : 'opacity-0'
                    }`}
                onClick={handleClose}
            />

            {/* Form container */}
            <div
                className={`relative h-full w-full max-w-4xl mx-auto bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${isVisible && isAnimating
                    ? 'translate-y-0 scale-100'
                    : 'translate-y-full scale-95'
                    }`}
            >
                {/* Scrollable content */}
                <div className="h-full overflow-y-auto">
                    <div className="min-h-full p-6 lg:p-8">
                        {/* Header with close button */}
                        <div className="flex justify-between items-center mb-8 sticky top-0 bg-white py-4 border-b border-gray-100 z-10">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Write a Review
                            </h2>
                            <button
                                onClick={handleClose}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Form content */}
                        <div className="max-w-2xl mx-auto space-y-8">
                            {/* Rating Section */}
                            <div
                                className={`text-center transform transition-all duration-500 delay-100 ${isVisible && isAnimating
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <label className="block text-lg font-medium text-gray-700 mb-4">
                                    How would you rate this?
                                </label>
                                <div className="flex justify-center space-x-1">
                                    <Rates stars={5} rate={rating} isFixed={false} />
                                </div>
                            </div>

                            {/* Review Title */}
                            <div
                                className={`transform transition-all duration-500 delay-200 ${isVisible && isAnimating
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <label className="block text-lg font-medium text-gray-700 mb-3">
                                    Review Title
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Give your review a catchy title"
                                    className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200"
                                />
                            </div>

                            {/* Review Text */}
                            <div
                                className={`transform transition-all duration-500 delay-300 ${isVisible && isAnimating
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <label className="block text-lg font-medium text-gray-700 mb-3">
                                    Your Review
                                </label>
                                <textarea
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    placeholder="Tell others about your experience..."
                                    rows={8}
                                    className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 resize-none"
                                />
                            </div>

                            {/* Privacy Notice */}
                            <div
                                className={`transform transition-all duration-500 delay-400 ${isVisible && isAnimating
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                    <div className="text-sm text-gray-700 leading-relaxed">
                                        <span className="font-semibold text-orange-700">How we use your data:</span> We'll only contact you about the review you left, and only
                                        if necessary. By submitting your review, you agree to Judge.me's{' '}
                                        <a href="#" className="text-orange-600 hover:text-orange-800 underline transition-colors">terms</a>,{' '}
                                        <a href="#" className="text-orange-600 hover:text-orange-800 underline transition-colors">privacy</a> and{' '}
                                        <a href="#" className="text-orange-600 hover:text-orange-800 underline transition-colors">content</a> policies.
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div
                                className={`flex flex-col sm:flex-row justify-center gap-4 pt-8 pb-8 transform transition-all duration-500 delay-500 ${isVisible && isAnimating
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="px-10 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                >
                                    Submit Review
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-10 py-4 bg-white border-2 border-orange-500 text-orange-500 text-lg font-semibold rounded-lg hover:bg-orange-50 active:bg-orange-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;