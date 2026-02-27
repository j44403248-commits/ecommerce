import React from "react";

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Free Shipping",
            description: "On orders above Rs. 3000",
            icon: "🚚",
        },
        {
            id: 2,
            title: "Fast Delivery",
            description: "Delivery in 3-5 working days",
            icon: "⚡",
        },
        {
            id: 3,
            title: "Easy Returns",
            description: "14 days return & exchange policy",
            icon: "↩️",
        },
        {
            id: 4,
            title: "Secure Payment",
            description: "100% safe and secure checkout",
            icon: "🔒",
        },
    ];

    return (
        <div className="bg-white px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="text-center">
                            <div className="text-5xl mb-3">{feature.icon}</div>
                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
