import heroImage from "../assets/hero-image.png";

function Hero() {
   return (
      <section className="flex justify-between items-center">
         <div>
            <h1 className="text-4xl text-SafetyOrange font-bold mb-8">
               Your body achieves what your mind believes.
            </h1>
            <p className="text-Almond text-3xl font-semibold">
               Check out the most effective exercises personalized to you.
            </p>
         </div>
         <img className="w-[18rem]" src={heroImage} alt="fitness man" />
      </section>
   );
}

export default Hero;
