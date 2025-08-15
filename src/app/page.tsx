import Hero from "@/components/home/Hero"
import PricePlan from "@/components/home/PricePlan"


const Home = () => {
    return (
      <section className="page-height">
        <Hero />
        <h2 className="text-center mt-10 text-3xl font-bold">Choose Your Pricing Plan</h2>
        <div className="container m-auto flex flex-wrap justify-center items-center md:gap-7">
          <PricePlan />
          <PricePlan />
          <PricePlan />
        </div>
      </section>
    )
}

export default Home