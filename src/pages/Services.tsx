import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your online visibility and climb search engine rankings.',
    details: 'Our SEO experts use the latest techniques to improve your website&apos;s search engine performance, driving organic traffic and increasing your online presence.'
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty across platforms.',
    details: 'We create and manage tailored social media campaigns that resonate with your target audience, increasing engagement and conversions.'
  },
  {
    title: 'Content Strategy',
    description: 'Create compelling content that resonates with your target audience.',
    details: 'Our content strategists develop comprehensive plans to deliver valuable, relevant content that attracts and retains your ideal customers.'
  },
  {
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and increase conversions with paid advertising.',
    details: 'We manage effective pay-per-click campaigns across various platforms to maximize your ROI and reach your marketing goals.'
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and build customer relationships through targeted email campaigns.',
    details: 'Our email marketing experts create personalized, automated campaigns that engage your audience and drive conversions.'
  },
  {
    title: 'Analytics and Reporting',
    description: 'Gain valuable insights into your marketing performance and ROI.',
    details: 'We provide comprehensive analytics and regular reports to help you understand your marketing performance and make data-driven decisions.'
  }
];

const pricingPackages = [
  {
    name: 'Starter',
    price: '$999/mo',
    features: ['Basic SEO optimization', 'Social media management (2 platforms)', 'Monthly content creation (2 posts)', 'Quarterly performance report']
  },
  {
    name: 'Professional',
    price: '$2,499/mo',
    features: ['Advanced SEO optimization', 'Social media management (4 platforms)', 'Weekly content creation', 'PPC campaign management', 'Monthly performance report']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Comprehensive digital strategy', 'Full-service social media management', 'Daily content creation', 'Advanced PPC and remarketing', 'Custom reporting dashboard']
  }
];

const processSteps = [
  { title: 'Discovery', description: 'We analyze your business, goals, and target audience.' },
  { title: 'Strategy', description: 'We develop a customized marketing plan tailored to your needs.' },
  { title: 'Implementation', description: 'Our team executes the strategy across chosen channels.' },
  { title: 'Optimization', description: 'We continuously monitor and refine our approach for best results.' },
  { title: 'Reporting', description: 'Regular updates keep you informed of progress and ROI.' }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">Our Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600">{service.details}</p>
                  <Button onClick={() => setSelectedService(service)} variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="mb-8 mt-20 text-center text-3xl font-bold">Pricing Packages</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPackages.map((pkg, index) => (
            <Card key={pkg.name} className="text-center">
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm">{feature}</li>
                  ))}
                </ul>
                <Button className="mt-6">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="mb-8 mt-20 text-center text-3xl font-bold">Our Process</h2>
        <div className="flex flex-col items-center">
          {processSteps.map((step, index) => (
            <div key={step.title} className="mb-8 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-xl">Let&apos;s transform your digital presence together.</p>
          <Button size="lg">Contact Us Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;