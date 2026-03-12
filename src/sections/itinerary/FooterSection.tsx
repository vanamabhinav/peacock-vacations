import Image from "next/image";

export const FooterSection = () => {
    return (
        <footer className="w-full bg-[#0c1b22] text-white py-16 px-8 lg:px-24 font-sans mt-12">

            {/* Partners block */}
            <div className="flex flex-col items-center border-b border-gray-700 pb-12 mb-12">
                <h3 className="text-[#d49747] font-bold text-lg mb-6 tracking-wide">Partners</h3>
                <p className="text-sm text-gray-400 mb-8 max-w-lg text-center">We only partner with the best to ensure you have a safe and wonderful trip.</p>
                <div className="flex items-center gap-8 md:gap-16 flex-wrap justify-center opacity-80">
                    <Image src="/images/Incredible_India_logo.png" alt="Incredible India" width={100} height={40} className="h-10 w-auto object-contain" />
                    <Image src="/images/Toft_logo.png" alt="Toft Tigers" width={80} height={40} className="h-10 w-auto object-contain" />
                    <Image src="/images/columbus_vacations_logo.png" alt="Columbus Vacations" width={120} height={40} className="h-10 w-auto object-contain" />
                </div>
            </div>

            {/* Columns block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-700 pb-12 text-sm text-gray-300">
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Top Destinations</h4>
                    <a href="#" className="hover:text-white transition">Kashmir Tour Packages</a>
                    <a href="#" className="hover:text-white transition">Manali Tour Packages</a>
                    <a href="#" className="hover:text-white transition">Kerala Tour Packages</a>
                    <a href="#" className="hover:text-white transition">Goa Tour Packages</a>
                    <a href="#" className="hover:text-white transition">Rajasthan Tour Packages</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Travel By Theme</h4>
                    <a href="#" className="hover:text-white transition">Honeymoon Packages</a>
                    <a href="#" className="hover:text-white transition">Adventure Escapes</a>
                    <a href="#" className="hover:text-white transition">Family Trips</a>
                    <a href="#" className="hover:text-white transition">Pilgrimage Tours</a>
                    <a href="#" className="hover:text-white transition">Luxury Retreats</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Company</h4>
                    <a href="#" className="hover:text-white transition">About Us</a>
                    <a href="#" className="hover:text-white transition">Our Team</a>
                    <a href="#" className="hover:text-white transition">Careers</a>
                    <a href="#" className="hover:text-white transition">Blog</a>
                    <a href="#" className="hover:text-white transition">Contact Us</a>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Support</h4>
                    <a href="#" className="hover:text-white transition">FAQs</a>
                    <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                    <a href="#" className="hover:text-white transition">Cancellation Policy</a>
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; 2024 Peacock Vacations. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition">Instagram</a>
                    <a href="#" className="hover:text-white transition">Facebook</a>
                    <a href="#" className="hover:text-white transition">Twitter</a>
                </div>
            </div>

        </footer>
    );
};
