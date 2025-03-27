import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Quote, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sahil Kasanna",
    role: "Online business expert (have built two 7-figure agencies)",
    niche: "Business and Marketing",
    content: "I would definitely suggest you rashid if you're looking for someone to help you with Instagram and youtube, you're editing your SEO everything you can manage. He and his agency do a really good work and I can definitely say if you will work with Rashid, you don't have to focus on anything. He will handle each and everything. I would really suggest Rashid. You should work with him.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    videoUrl: "./client1.mp4", // Add actual video URL
    thumbnailUrl: "./client1.png" // Add actual thumbnail URL
  },
  {
    id: 2,
    name: "Joy Aanand",
    role: "Helps businesses scale",
    niche: "Business and Marketing",
    content: "I’ve been working with Rashid for the past ten months, and he’s been handling my YouTube channel. He does the market research and has helped me grow faster than anyone else in the industry. I’ve seen the average results of others on YouTube, and they just can’t match my growth rate. Rashid has delivered outstanding results, so if you’re looking to grow on YouTube, I definitely recommend him. He’s a great guy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    videoUrl: "./client2.mp4", // Add actual video URL
    thumbnailUrl: "./client2.png" // Add actual thumbnail URL
  },
  {
    id: 3,
    name: "Ben Allistor",
    role: "Helps coaches get 5x more clients",
    niche: "Online Business Coach",
    content: "I started YouTube from zero, and Rashid's team began creating all my thumbnails—sometimes three per video. They also took over my ads and helped with SEO. As a result, we’ve tripled our subscribers.They guided me through every step, from thumbnail and title testing to leveraging SEO tactics. Thanks to them, I’m confident we’ll reach our goal of 10,000 subscribers. I highly recommend their service to anyone looking to grow on YouTube!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    videoUrl: "./client3.mp4", // Add actual video URL
    thumbnailUrl: "./client3.png" // Add actual thumbnail URL
  },
  {
    id: 4,
    name: "Elliot Botterill",
    niche: "Digital Marketing",
    role: "Founder of Botters (Digital Growth Agency)",
    content: "I just want to give a special shout-out to Rashid and his agency, who’ve been helping us edit our videos—long form, short form, and doing our thumbnails. These guys are fantastic, not only high-quality but also extremely responsive. They’re a pleasure to deal with: they get back to you quickly, genuinely care, bring new ideas, and overall are just really fun to work with. I highly recommend them for any sort of video editing or thumbnail design.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    videoUrl: "./client4.mp4", // Add actual video URL
    thumbnailUrl: "./client4.png" // Add actual thumbnail URL
  },
  {
    id: 5,
    name: "Usman Kayani",
    role: "Helped grow multiple 8-figure businesses",
    niche: "Sales",
    content: "I want to give a quick shout-out to my friend Rashid and his partner Tena for video editing and thumbnail design. I’ve been around social media for over four years and have tried many editors, but these two are among the very few who can effectively edit video and create amazing thumbnails that truly grab attention. I can’t recommend them enough. If you’re serious about social media, make sure to give them a call. They can really take your social media game to the next level.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    videoUrl: "./client5.mp4", // Add actual video URL
    thumbnailUrl: "./client5.png" // Add actual thumbnail URL
  },
];

const VideoModal = ({ isOpen, onClose, videoUrl, currentIndex }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative w-[90vw] h-[50vh] md:w-[800px] md:h-[450px] mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-agency-orange"
        >
          Close
        </button>
        <video
          className="w-full h-full rounded-lg object-contain bg-black"
          controls
          autoPlay
          src={videoUrl}
        />
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <h3 className="text-white font-bold text-xl px-6">{testimonials[currentIndex].name}</h3>
          <div className='bg-gradient-to-t from-agency-orange/50 via-agency-orange/30 to-transparent p-6 pt-0'>
          <span className="text-agency-orange font-medium text-sm block mb-2">{testimonials[currentIndex].role}</span>
          <p className="text-xs text-white font-medium border border-agency-orange/20 rounded-full px-2.5 py-0.5 inline-block shadow-sm bg-agency-orange/80">{testimonials[currentIndex].niche}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isVideoModalOpen) {
        goToNext();
      }
    }, 6000);

    return () => clearInterval(autoSlide);
  }, [currentIndex, isAnimating, isVideoModalOpen]);

  return (
    <section id="testimonials" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Testimonials</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6">What Our <span className="text-agency-orange">Clients Say</span></h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-md md:text-lg">
              Don't just take our word for it. Here's what our clients have to say about our work and the results we've delivered.
            </p>
          </AnimatedSection>
        </div>

        <div ref={testimonialsRef} className="relative max-w-6xl mx-auto px-4">
          <div
            className="overflow-hidden"
            style={{ minHeight: '360px', marginBottom: '40px' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center",
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                )}
              >
                 <div className="md:w-1/2 bg-agency-orange flex justify-center items-center p-6">
                  <div className="relative w-full max-w-sm cursor-pointer group" onClick={() => setIsVideoModalOpen(true)}>
                    <img
                      src={testimonial.thumbnailUrl}
                      alt={`${testimonial.name}'s video testimonial`}
                      className="w-full h-auto rounded-xl shadow-lg aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-agency-orange ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:w-1/2">
                  <Quote size={48} className="text-agency-orange/30 mb-6" />
                  <div className='flex items-center gap-2'>
                    <h4 className="text-agency-dark text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-white font-medium border border-agency-orange/20 rounded-full px-2.5 py-0.5 inline-block shadow-sm bg-agency-orange/80">{testimonial.niche}</p>
                  </div>
                  <p className="text-agency-orange/70 font-medium">{testimonial.role}</p>
                  <p className="text-gray-600 text-md md:text-lg mt-2 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

               
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-0 justify-center pb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-agency-orange w-12"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white text-agency-orange hover:bg-gray-100 border border-agency-orange/30"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </Button>

          <Button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white text-agency-orange hover:bg-gray-100 border border-agency-orange/30"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* Add a white fade effect behind the bottom of the section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div> */}

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={testimonials[currentIndex].videoUrl}
        currentIndex={currentIndex}
      />
    </section>
  );
};

export default Testimonials;
