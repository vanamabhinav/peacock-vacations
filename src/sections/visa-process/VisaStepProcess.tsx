export default function VisaStepProcess() {
    const steps = [
        {
            title: "Application",
            description: "Apply online at the official Indian Government portal or let Peacock Vacations assist you with a hassle-free form."
        },
        {
            title: "Upload Documents & Pay Fee",
            description: "Upload a copy of your passport and a recent photograph. Pay the e-Visa fee online using your credit/debit card."
        },
        {
            title: "Processing",
            description: "Once submitted, the application usually takes 3-4 business days for processing and approval."
        },
        {
            title: "Receive Your Approved e-Visa",
            description: "Your approved Electronic Travel Authorization (ETA) will be sent to your registered email address."
        },
        {
            title: "Arrival in India",
            description: "Carry a printed copy of your approved ETA and show it to the Immigration Officer at the airport in India. Your biometrics will be captured and visa stamped."
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="bg-[#fedec0] text-[#1a3642] text-xl font-black px-6 py-4 rounded-t-[20px] italic">Step-by-Step Visa Process</h2>
            <div className="bg-white border border-gray-200 rounded-b-[20px] p-8 md:p-10 shadow-sm space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-6 items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fff3e7] border border-[#fedec0] flex items-center justify-center text-[#1a3642] font-black text-lg group-hover:bg-[#f1aa4c] group-hover:text-white transition-all">
                            {index + 1}
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-black text-[#1a3642]">{step.title}</h3>
                            <p className="text-[#345b63] font-bold text-sm leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
