import React from 'react'
import Navbar from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { Banner } from '../components/Banner';
import { BannerContent } from '../components/BannerContent';
import { WhyDonate } from '../components/WhyDonate';
import { Footer } from '../components/Footer';

const HomePage = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <HeroSection/>
        <div className= ' mt-40 w-full h-full bg-black text-white'>
            <BannerContent/>
            <Banner/>
        </div>
        <WhyDonate/>
        <Footer/>
    </div>
  )
}
export default HomePage;