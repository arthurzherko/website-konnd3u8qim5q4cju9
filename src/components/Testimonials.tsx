import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Nexus Digital transformed our online presence. Our engagement rates have skyrocketed!',
    author: 'Sarah Johnson',
    company: 'TechStart Inc.'
  },
  {
    quote: 'The team&apos;s expertise in SEO has significantly improved our search rankings.',
    author: 'Michael Chen',
    company: 'GrowthHub'
  },
  {
    quote: 'Their content strategy breathed new life into our brand. Highly recommended!',
    author: 'Emily Rodriguez',
    company: 'Innovate Co.'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;