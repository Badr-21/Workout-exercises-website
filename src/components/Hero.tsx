import heroImage from "../assets/hero-image.png";

function Hero() {
   return (
      <section className="flex md:flex-row md:justify-between md:items-center flex-col-reverse items-center md:mb-0 mb-16">
         <div>
            <h1 className="lg:text-4xl text-SafetyOrange lg:font-bold mb-8 font-semibold sm:text-3xl text-2xl">
               Your body achieves what your mind believes.
            </h1>
            <p className="text-Almond lg:text-3xl lg:font-semibold font-medium sm:text-2xl text-xl">
               Check out the most effective exercises personalized to you.
            </p>
         </div>
         <img className="lg:w-[18rem] sm:w-[15rem] w-[12rem]" src={heroImage} alt="fitness man" />
      </section>
   );
}

export default Hero;
