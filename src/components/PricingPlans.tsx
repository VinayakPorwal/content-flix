
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { Check, Sparkles, Users, Briefcase, ArrowRight } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const creatorFeatures = [
    "5 Premium Videos Per Month",
    "Social Media Optimization",
    "Basic Content Strategy",
    "2 Revisions Per Video",
    "Performance Analytics",
    "Dedicated Account Manager"
  ];

  const businessFeatures = [
    "12 Premium Videos Per Month",
    "Multi-Platform Strategy",
    "Custom Brand Style Guide",
    "Unlimited Revisions",
    "Advanced Analytics Dashboard",
    "Priority Support",
    "Quarterly Strategy Reviews",
    "Licensed Music Library Access"
  ];

  return (
    <section id="pricing" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Pricing Plans</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6">Choose Your <span className="text-agency-orange">Perfect Plan</span></h2>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-lg mb-8">
              Tailored packages designed to meet the specific needs of creators and businesses looking to elevate their content strategy.
            </p>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Creator Plan */}
          <AnimatedSection delay={400}>
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-agency-orange/20 h-full"
              whileHover={{ y: -10, boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-agency-orange" />
                    <h3 className="text-xl font-bold text-agency-dark">Creator Plan</h3>
                  </div>
                  <p className="text-gray-600">Perfect for content creators and small brands</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-agency-dark">$1,997</span>
                  <p className="text-gray-600 text-sm">per month</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {creatorFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-agency-orange/20 p-1">
                      <Check className="h-3 w-3 text-agency-orange" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-agency-orange/20 hover:bg-agency-orange/30 text-agency-orange border border-agency-orange/30 rounded-xl h-12"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </AnimatedSection>
          
          {/* Business Plan */}
          <AnimatedSection delay={500}>
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-agency-orange/30 relative h-full overflow-hidden"
              whileHover={{ y: -10, boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Popular tag */}
              <div className="absolute top-2 right-2 bg-agency-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              
              {/* Glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-agency-orange/20 blur-[50px] z-0"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-agency-orange" />
                      <h3 className="text-xl font-bold text-agency-dark">Business Plan</h3>
                    </div>
                    <p className="text-gray-600">For established brands and growing businesses</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-agency-dark">$4,997</span>
                    <p className="text-gray-600 text-sm">per month</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {businessFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-agency-orange/20 p-1">
                        <Check className="h-3 w-3 text-agency-orange" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-agency-orange hover:bg-agency-orange/90 text-white rounded-xl h-12"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution for your specific requirements?</p>
          <Button 
            className="bg-transparent hover:bg-agency-orange/10 text-agency-orange border border-agency-orange/30 rounded-full px-6"
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
