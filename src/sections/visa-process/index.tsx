import VisaHero from "./VisaHero";
import VisaIntro from "./VisaIntro";
import VisaWhyImportant from "./VisaWhyImportant";
import VisaTypes from "./VisaTypes";
import VisaEligibility from "./VisaEligibility";
import VisaStepProcess from "./VisaStepProcess";
import VisaEssentials from "./VisaEssentials";
import VisaFullChecklist from "./VisaFullChecklist";
import VisaImportantNotes from "./VisaImportantNotes";
import VisaFAQ from "./VisaFAQ";
import VisaTrustAssurance from "./VisaTrustAssurance";
import VisaSidebar from "./VisaSidebar";

export default function VisaProcessSections() {
    return (
        <>
            <VisaHero />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
                {/* Breadcrumbs */}
                <div className="border-y border-gray-100 py-3 mb-6 flex items-center gap-2 text-sm font-bold">
                    <span className="text-[#f1aa4c]">Home</span>
                    <span className="text-gray-400">&gt;</span>
                    <span className="text-[#1a3642]">Visa Process To India</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Area */}
                    <div className="flex-1 max-w-[900px]">
                        <VisaIntro />
                        <VisaWhyImportant />
                        <VisaTypes />
                        <VisaEligibility />
                        <VisaStepProcess />
                        <VisaEssentials />
                        <VisaFullChecklist />
                        <VisaImportantNotes />
                        <VisaFAQ />
                        <VisaTrustAssurance />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-[350px]">
                        <VisaSidebar />
                    </div>
                </div>
            </div>
        </>
    );
}
