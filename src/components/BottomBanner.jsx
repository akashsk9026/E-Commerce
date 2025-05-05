import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const BottomBanner = () => {
    return (
        <div className="relative mt-20 bg-gray-100 rounded-lg">
            <img
                src={assets.bottom_banner_image}
                alt="bottom-banner"
                className="w-full hidden md:block object-cover rounded-lg"
            />
            <img
                src={assets.bottom_banner_image_sm}
                alt="bottom-banner"
                className="w-full md:hidden object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-8 text-black">
                <div className="flex-1 flex justify-center md:justify-start">
                </div>

                <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-green-800">
                        Why We Are the Best?
                    </h2>
                    <div className="space-y-4 max-w-md">
                        <div className="flex items-start gap-3">
                            <img
                                src={assets.delivery_truck_icon}
                                alt="delivery"
                                className="w-8 h-8"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Fastest Delivery</h3>
                                <p className="text-sm text-gray-600">
                                    Groceries delivered in under 30 minutes.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <img
                                src={assets.leaf_icon}
                                alt="fresh"
                                className="w-8 h-8"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Freshness Guaranteed</h3>
                                <p className="text-sm text-gray-600">
                                    Fresh produce straight from the source.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <img
                                src={assets.coin_icon}
                                alt="price"
                                className="w-8 h-8"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Affordable Prices</h3>
                                <p className="text-sm text-gray-600">
                                    Quality groceries at unbeatable prices.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <img
                                src={assets.trust_icon}
                                alt="trusted"
                                className="w-8 h-8"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Trusted by Thousands</h3>
                                <p className="text-sm text-gray-600">
                                    Loved by 10,000+ happy customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;