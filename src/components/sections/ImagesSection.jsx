import mindfulness from "@/assets/meditate.jpg";

export default function SectionOne() {
  return (
    <section className="w-full flex flex-col lg:flex-row px-4 lg:px-0">
      {/* LEFT TEXT AREA */}
      <div className="w-full lg:w-1/2 bg-[#f0ece4] px-6 lg:px-20 py-24 lg:py-36 flex flex-col justify-center text-center lg:text-left space-y-6 lg:space-y-8">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2f3e2e] leading-tight">
          “Make Space for Your Well-Being”
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-[#2f3e2e]/90 leading-relaxed max-w-md mx-auto lg:mx-0">
          Caring for your mental wellness is not a luxury—it’s essential. By pausing, reflecting, and nurturing yourself, you can reduce stress, restore balance, and feel more grounded in everyday life.
        </p>

        <button className="mt-4 sm:mt-6 border border-[#2f3e2e] px-8 sm:px-12 py-3 sm:py-4 uppercase tracking-wide text-xs sm:text-sm lg:text-base font-semibold text-[#2f3e2e] hover:bg-[#2f3e2e]/10 transition w-fit mx-auto lg:mx-0">
          Let’s Chat →
        </button>
      </div>

      {/* RIGHT IMAGE AREA */}
      <div className="w-full lg:w-1/2 bg-[#f6f3ee] flex items-center justify-center relative mt-8 lg:mt-0">
        {/* MAIN IMAGE */}
        <div
          className="overflow-hidden shadow-lg"
          style={{
            width: "400px", // slightly wider
            height: "700px", // increased height
            maxWidth: "90vw",
            maxHeight: "85vh",
            borderTopLeftRadius: "200px",
            borderTopRightRadius: "200px",
          }}
        >
          <img
            src={mindfulness}
            alt="Mindfulness"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
