import React from 'react';
import { Calculator, Zap, Lock, BarChart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Calculator,
      title: "Precise Calculations",
      description: "Our reverse sales tax calculator provides accurate results using advanced mathematical formulas to determine pre-tax amounts."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get immediate calculations without waiting. Perfect for processing multiple transactions quickly and efficiently."
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your calculations are performed locally. We don't store any of your financial data, ensuring complete privacy."
    },
    {
      icon: BarChart,
      title: "Business Ready",
      description: "Ideal for businesses needing to process multiple transactions and maintain accurate financial records."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Reverse Sales Tax</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our reverse sales tax calculator simplifies the process of determining pre-tax amounts from total prices. Perfect for businesses and individuals who need accurate calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Why Choose Our Reverse Sales Tax Calculator?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">For Businesses</h4>
            <ul className="space-y-2">
              <li>• Accurate financial record keeping</li>
              <li>• Streamlined expense tracking</li>
              <li>• Easy tax compliance</li>
              <li>• Bulk calculation capability</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">For Individuals</h4>
            <ul className="space-y-2">
              <li>• Simple to use interface</li>
              <li>• Mobile-friendly design</li>
              <li>• Instant calculations</li>
              <li>• No account needed</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}