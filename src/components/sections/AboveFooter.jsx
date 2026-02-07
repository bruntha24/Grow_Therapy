import React from "react";

export default function MentalTherapyPage() {
  return (
    <div className="w-full">

      {/* Container 1: 11cm height, light beige */}
      <section
        className="w-full flex flex-col items-center justify-center px-8 text-center"
        style={{ height: "11cm", backgroundColor: "#F5F5DC" }}
      >
        <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
          Relax & Breathe
        </h2>
        <p className="text-lg font-light text-gray-700 max-w-3xl leading-relaxed tracking-wide">
         “Take a moment to pause and notice your breath. Let go of tension, feel your body soften, 
         and allow each inhale to bring calm and each exhale 
         to release what no longer serves you. Self-care starts with this simple, mindful 
         practice—inviting peace and presence into your day.”
        </p>
      </section>

      {/* Container 2: 12.7cm height, soft green */}
      <section
        className="w-full flex flex-col items-center justify-center px-8 text-center"
        style={{ height: "12.7cm", backgroundColor: "#D8F3DC" }}
      >
        <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
          Mindfulness
        </h2>
        <p className="text-lg font-light text-gray-700 max-w-3xl leading-relaxed tracking-wide">
         “Mindfulness is about being fully present with yourself, without judgment. Notice your thoughts,
          your breath, and the sensations in your body.
           These small moments of awareness can help you feel grounded,
           calm, and more connected to your inner self.”<p>— Dr. Maya Reynolds, PsyD</p>

        </p>
      </section>

     <section className="w-full bg-[#E0F7FA]">
  <div className="max-w-6xl mx-auto flex flex-col items-center justify-center 
                  px-6 py-16 lg:py-24 text-center">
    
    <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-gray-800 mb-6">
      Inner Peace
    </h2>

    <p className="text-base sm:text-lg lg:text-xl font-light text-gray-700 
                  max-w-4xl leading-relaxed tracking-wide">
      “Cultivating inner peace starts with being gentle with yourself. Let go of worries that weigh you down, 
      notice the small moments of gratitude, and honor your journey. Each mindful pause is a step toward harmony, 
      calm, and a deeper sense of balance within.”
    </p>

    {/* subtle divider */}
    <div className="w-16 h-px bg-gray-400/40 my-6"></div>

    <span className="text-sm lg:text-base font-medium tracking-wide text-gray-600">
      — Dr. Maya Reynolds, PsyD
    </span>
  </div>
</section>


    </div>
  );
}
