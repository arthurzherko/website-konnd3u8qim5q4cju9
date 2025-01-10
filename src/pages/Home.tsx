import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;