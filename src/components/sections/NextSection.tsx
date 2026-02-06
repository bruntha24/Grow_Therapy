import peacefulNature from "@/assets/self.jpg";

export default function NextSection() {
  return (
    <section
      className="w-full flex flex-col lg:flex-row items-center px-4 lg:px-0"
      style={{
        minHeight: "16cm", // keep original height
        backgroundColor: "#eef3ef",
      }}
    >
      {/* LEFT: IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center items-center py-16 lg:py-28">
        <div
          className="overflow-hidden shadow-xl"
          style={{
            width: "460px",
            height: "620px",
            borderTopLeftRadius: "230px",
            borderTopRightRadius: "230px",
          }}
        >
          <img
            src={peacefulNature}
            alt="Peaceful Nature"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT: TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-20 py-16 lg:py-28 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2f3e2e] mb-4 sm:mb-6">
          Your Mind Matters — Nurture it Daily
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#2f3e2e]/90 leading-relaxed max-w-md mx-auto lg:mx-0">
          “Light a moment for yourself, reflect on your thoughts, and allow space for calm. 
          Simple daily practices—like journaling, mindfulness, or quiet reflection—can 
          help restore balance and strengthen your well-being.”
        </p>
      </div>
    </section>
  );
}
