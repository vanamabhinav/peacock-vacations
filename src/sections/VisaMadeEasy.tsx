import Image from "next/image";
function VisaMadeEasy() {
  return (
    <section className="flex justify-center bg-white p-4 md:p-8 lg:p-16">
      <div className="relative border border-black/12 rounded-[18px] w-[72rem] h-[18.25rem] overflow-hidden">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EFF1F5] to-[#D9DCE4]" />

        <div className="z-10 relative grid grid-cols-1 md:grid-cols-10 px-[60px] h-full">
          {/* Content column */}
          <div className="flex flex-col justify-center gap-5 md:gap-7 md:col-span-6 p-6 md:p-8 w-[30rem]">
            <div>
              <h2 className="font-black md:text-[32px] text-2xl leading-tight">
                Visa Assistance Made Easy
              </h2>
              <p className="mt-2 max-w-xl font-normal text-gray-700 text-base md:text-xl md:leading-[140%]">
                Quick & hassle-free visa processing. Get your travel visa done
                effortlessly.
              </p>
            </div>
            <button className="bg-black hover:bg-gray-800 px-5 py-2.5 rounded-[40px] focus:ring-2 focus:ring-black w-fit text-white transition-colors cursor-pointer">
              Start Your Visa Process
            </button>
          </div>

          {/* Image column */}
          <Image
            src="/images/visa_made_easy.png"
            alt="Visa assistance illustration"
            fill
            className="hidden relative md:flex items-end md:col-span-4 h-full object-contain object-right"
            sizes="(min-width: 768px) 100vw, 0vw"
            priority
          />
        </div>

        {/* Bottom shadow/gradient bar */}
        <div
          className="right-0 bottom-0 left-0 absolute rounded-b-[18px] h-5"
          style={{
            background:
              "linear-gradient(267.27deg, #D4D6DB 40.1%, #DCDCDC 85.61%)",
          }}
        />
      </div>
    </section>
  );
}

export default VisaMadeEasy;
