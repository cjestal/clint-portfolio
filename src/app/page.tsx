import Banner from '@/components/Banner';
import CTA from '@/components/CTA';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Services />
            <Experience />
            <Projects />
            <Skills />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
};

export default HomePage;