import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Rocket, BarChart, PenTool } from 'lucide-react';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your online visibility and climb search engine rankings.',
    icon: Rocket
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty across platforms.',
    icon: BarChart
  },
  {
    title: 'Content Strategy',
    description: 'Create compelling content that resonates with your target audience.',
    icon: PenTool
  }
];

const ServicesOverview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-full bg-indigo-100 p-3">
                    <service.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;