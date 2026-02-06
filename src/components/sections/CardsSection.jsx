// CardsSection.jsx
import mindfulness from "@/assets/mindfulness.jpg";
import zenCalm from "@/assets/trauma.jpg";
import peacefulNature from "@/assets/burnout.jpg";

export default function CardsSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#f2f0e9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Supporting Your Mental Wellness
          </h2>
          <p className="text-slate-700 text-base lg:text-lg max-w-2xl mx-auto font-source-sans-pro">
            Explore the key areas we focus on to help you improve your mental wellness and life balance.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="flex flex-col justify-between bg-[#e9e6db] border border-gray-300 p-6 sm:p-8 rounded-lg text-center">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Managing Anxiety & Stress
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                Many high-achieving individuals carry constant tension or worry, even when everything “looks fine” on the outside.
                I help clients understand the patterns behind their anxiety, develop practical coping strategies, 
                and reconnect with a sense of calm and presence in daily life.
              </p>
            </div>
            <div className="mt-8 w-[80%] max-w-[14rem] aspect-square rounded-full overflow-hidden mx-auto">
              <img src={mindfulness} alt="Self-Esteem" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col justify-between bg-[#e9e6db] border border-gray-300 p-6 sm:p-8 rounded-lg text-center">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Trauma & Healing
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                Past experiences—whether a single event or long-standing patterns—can quietly affect your relationships, confidence, and well-being. 
                Together, we work at a pace that feels safe, integrating evidence-based methods to process trauma, 
                regulate emotions, and reclaim a sense of safety.
              </p>
            </div>
            <div className="mt-8 w-[80%] max-w-[14rem] aspect-square rounded-full overflow-hidden mx-auto">
              <img src={zenCalm} alt="Relationships" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col justify-between bg-[#e9e6db] border border-gray-300 p-6 sm:p-8 rounded-lg text-center">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Burnout & Life Balance
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                Feeling exhausted, overworked, or disconnected from yourself is common in today’s fast-paced world. 
                I support clients in recognizing early signs of burnout, setting boundaries, 
                and creating sustainable routines that foster resilience, energy, and a more balanced life.
              </p>
            </div>
            <div className="mt-8 w-[80%] max-w-[14rem] aspect-square rounded-full overflow-hidden mx-auto">
              <img src={peacefulNature} alt="Burnout" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
