import React, { useState } from 'react';
import { Rates } from '../shared';

interface ReviewFormData {
    rating: number;
    title: string;
    review: string;
    // name: string;
    // email: string;
    // file: File | null;
}

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState<number>(5);
    const [title, setTitle] = useState<string>('');
    const [review, setReview] = useState<string>('');

    // const [name, setName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');

    // TODO: Upload Files in Review Form
    // const [file, setFile] = useState<File | null>(null);

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     const selectedFile = e.target.files?.[0] || null;
    //     setFile(selectedFile);
    // };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        const formData: ReviewFormData = {
            rating,
            title,
            review,
            // name,
            // email,
            // file
        };

        console.log(formData);
        // Handle form submission here
    };

    const handleCancel = (): void => {
        setRating(5);
        setTitle('');
        setReview('');
        // setName('');
        // setEmail('');
        // setFile(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
                    Write a review
                </h2>

                <div className="space-y-6">
                    {/* Rating Section */}
                    <div className="text-center">
                        <label className="block text-sm font-medium text-gray-600 mb-3">
                            Rating
                        </label>
                        <div className="flex justify-center space-x-1">
                            <Rates stars={5} rate={0} isFixed={false} />
                        </div>
                    </div>

                    {/* Review Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2 text-center">
                            Review title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Give your review title"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Review Text */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2 text-center">
                            Review
                        </label>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Write your review here"
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                    </div>

                    {/* File Upload */}
                    {/* <div className="text-center">
                        <label className="block text-sm font-medium text-blue-600 mb-3">
                            Picture/Video (Optional)
                        </label>
                        <div className="relative inline-block">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*,video/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                                <BiUpload className="w-4 h-4 mr-2 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                    {file ? file.name : 'Choose File'}
                                </span>
                            </div>
                        </div>
                    </div> */}

                    {/* Name Field */}
                    {/* <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2 text-center">
                            Name (Displayed Publicly like <span className="text-yellow-600 font-medium">John Doe</span>) (Optional)
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name (public)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div> */}

                    {/* Email Field */}
                    {/* <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2 text-center">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div> */}

                    {/* Privacy Notice */}
                    <div className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-medium text-orange-600">How we use your data:</span> We'll only contact you about the review you left, and only
                        if necessary. By submitting your review, you agree to Judge.me's{' '}
                        <a href="#" className="text-blue-600 hover:underline">terms</a>,{' '}
                        <a href="#" className="text-blue-600 hover:underline">privacy</a> and{' '}
                        <a href="#" className="text-blue-600 hover:underline">content</a> policies.
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-8 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-8 py-2.5 bg-white border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;