import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What is a reverse sales tax calculator?",
    answer: "A reverse sales tax calculator is an essential tool that helps you determine the original price of an item when you only know the final price including sales tax. It's particularly useful for businesses and individuals who need to work backwards from total amounts."
  },
  {
    question: "When would I need a reverse sales tax calculator?",
    answer: [
      "• Reconciling receipts and expenses for accounting",
      "• Determining original costs for inventory management",
      "• Calculating pre-tax amounts for business reimbursements",
      "• Planning budgets and analyzing costs accurately",
      "• Processing customer refunds correctly"
    ]
  },
  {
    question: "How accurate is the reverse sales tax calculation?",
    answer: "Our reverse sales tax calculator provides precise calculations using the formula: Pre-tax amount = Total amount ÷ (1 + Tax rate as decimal). This ensures accuracy to the cent, making it reliable for business and personal use."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}