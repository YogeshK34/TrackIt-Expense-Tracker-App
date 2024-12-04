import React from "react";
import { Button } from "../../components/ui/button";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingPlan> = ({ name, price, features }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md p-8 w-full max-w-md">
      <h3 className="text-3xl font-bold mb-4">{name}</h3>
      <p className="text-5xl font-bold mb-4">${price}</p>
      <p className="text-gray-400 mb-8">per month</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="h-6 w-6 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="ghost" className="w-full">
        Get {name}
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Hobby",
      price: "99",
      features: [
        "Access to basic analytics reports",
        "Up to 10,000 data points per month",
        "Email support",
        "Community forum access",
        "Cancel anytime",
      ],
    },
    {
      name: "Starter",
      price: "299",
      features: [
        "Advanced analytics dashboard",
        "Customizable reports and charts",
        "Real-time data tracking",
        "Integration with third-party tools",
        "Everything in Hobby Plan",
      ],
    },
    {
      name: "Pro",
      price: "1490",
      features: [
        "Unlimited data storage",
        "Customizable dashboards",
        "Advanced data segmentation",
        "Real-time data processing",
        "AI-powered insights and recommendations",
        "Everything in Hobby Plan",
      ],
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Simple pricing for advanced people
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
