"use client";
import { useState } from "react";

export default function VisaFAQ() {
    const faqs = [
        {
            question: "How do I apply for an Indian e-Visa?",
            answer: "Apply online via the official Indian government portal: https://indianvisaonline.gov.in/ OR contact Peacock Vacations for expert assistance."
        },
        {
            question: "How long does it take to process an e-Visa?",
            answer: "The typical processing time for an e-Visa is 3 to 4 business days. However, it is advisable to apply at least 7-10 days before your travel."
        },
        {
            question: "Which airports and seaports can I use with an e-Visa?",
            answer: "The e-Visa is valid for entry through 31 designated Airports and 5 designated Seaports in India."
        },
        {
            question: "When does my visa start and expire?",
            answer: "Validity starts from the date of first arrival in India. For 30-day visas, it is 30 days. For 1-year and 5-year visas, it is measured from the date of grant of ETA."
        },
        {
            question: "Can I extend my tourist visa?",
            answer: "No, the e-Visa is non-extendable and non-convertible unless in exceptional circumstances as per government rules."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Frequently Asked Questions</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors text-left"
                        >
                            <span className="text-[17px] font-black text-[#1a3642] flex gap-3">
                                <span className="text-gray-400">{index + 1}.</span> {faq.question}
                            </span>
                            <span className={`text-2xl text-[#1a3642] transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                                {openIndex === index ? "×" : "+"}
                            </span>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                            <div className="px-10 py-6 border-t border-gray-50 text-[#345b63] font-bold leading-relaxed text-[15px]">
                                {faq.answer.includes("http") ? (
                                    <>
                                        {faq.answer.split(":")[0]}: <a href={faq.answer.split(": ")[1]} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{faq.answer.split(": ")[1]}</a>
                                    </>
                                ) : faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
