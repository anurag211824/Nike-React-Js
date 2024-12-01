import React from 'react'
import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import SpecialOffers from "./sections/SpecialOffers"
import CustomersReviews from "./sections/CustomerReviews"
import Footer from "./sections/Footer"
import Subscribe from "./sections/Subscribe"

const App = () => {
  return (
   <main className='relative'>
   <Nav/>
   <section className='xl:padding-l wide:padding-l padding-b'>
   <Hero/>
   </section>

    <section className='padding'>
    <PopularProducts/>
    </section>

    <section className='padding'>
    <SuperQuality/>
    </section>

    <section className='padding-x py-10'>
   <Services/>
    </section>

    <section className='padding'>
    <SpecialOffers/>
    </section>

    <section className='padding bg-pale-blue'>
    <CustomersReviews/>
    </section>

    <section className='padding-x sm:py-32 py-16 w-full'>
    <Subscribe/>
    </section>

    <section className='padding bg-black padding-x padding-t'>
    <Footer/>
    </section>
   </main>
  )
}

export default App