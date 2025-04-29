import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Volume2, Sparkles, X, MousePointer } from 'lucide-react';
import data from '../data/data.json';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import SectionBadge from './SectionBadge';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const ClientCard = ({ client, index, onClick }) => {
  const isMobile = useIsMobile();

  return (
    <div onClick={onClick} className="cursor-pointer w-full relative">
      <AnimatedSection
        delay={100 * index}
        className="rounded-lg p-1 transition-all duration-300"
      >
        <div
          className={`
            bg-blue-900
            rounded-lg
            relative
            shadow-2xl
            transform
            transition-transform
            duration-300
            border-2 border-agency-dark
            hover:scale-[1.02]
            active:scale-[0.98]
            overflow-hidden
            mx-auto
          `}
          style={{
            width: isMobile ? "100%" : client.hw.w,
            height: isMobile ? "auto" : client.hw.h,
            aspectRatio: isMobile ? "9/16" : "auto",
            rotate: isMobile ? "0deg" : `${client.rotate}deg`,
          }}
        >
          {/* Top "speaker/volume" icon */}
          {/* <div className="absolute top-1 right-1 text-white z-10">
            <Volume2 className="w-3 h-3 opacity-90" />
          </div> */}
          {/* Content */}
          <img
            src={client.image}
            alt={client.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </AnimatedSection>

    </div>
  );
};

const ClientResults = () => {
  const { title, clients } = data.clientResults;
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="results" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-16">
          <AnimatedSection>
            <SectionBadge text="Client Results" />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }}
            />
          </AnimatedSection>
        </div>

         
          <div className={`relative flex mx-auto ${isMobile ? 'gap-2' : 'md:flex-row gap-8'} items-center justify-center pb-4`}>
            {clients.slice(0, 3).map((client, index) => (
              <ClientCard
                key={index}
                client={client}
                index={index}
                onClick={() => setSelectedImage(client.image)}
              />
            ))}
            {isMobile && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-3 top-1/2 -translate-y-1/2 text-agency-orange">
                <MousePointer className="w-6 h-6" />
              </motion.div>
            )}
          </div>
        

        {/* YouTube Insights Cards */}
        <div className={`relative flex flex-col ${isMobile ? 'gap-6' : 'md:flex-row'} items-center justify-center gap-4 md:gap-8 mt-8`}>
          <div className="cursor-pointer" onClick={() => setSelectedImage("/yt-2.png")}>
            <AnimatedSection
              delay={400}
              className="rounded-xl p-2 sm:p-4 transition-all duration-300"
            >
              <div
                className={`
                  rounded-2xl
                  relative
                  shadow-2xl
                  transform
                  transition-transform
                  duration-300
                  border-2 sm:border-4 border-agency-dark
                  ${isMobile ? 'w-[90vw]' : ''}
                `}
                style={{
                  width: isMobile ? undefined : "500px",
                  rotate: isMobile ? "0deg" : "-5deg",
                }}
              >
                <img
                  src="/yt-2.png"
                  loading='lazy'
                  alt="YouTube Analytics"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="cursor-pointer" onClick={() => setSelectedImage("/yt-3.png")}>
            <AnimatedSection
              delay={500}
              className="rounded-xl p-2 sm:p-4 transition-all duration-300"
            >
              <div
                className={`
                  rounded-2xl
                  relative
                  shadow-2xl
                  transform
                  transition-transform
                  duration-300
                  border-2 sm:border-4 border-agency-dark
                  ${isMobile ? 'w-[90vw]' : ''}
                `}
                style={{
                  width: isMobile ? undefined : "500px",
                  rotate: isMobile ? "0deg" : "5deg",
                }}
              >
                <img
                  src="/yt-3.png"
                  loading='lazy'
                  alt="Channel Growth"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Image Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] md:max-w-[800px] p-0 bg-transparent border-none">
            <div className="relative flex items-center justify-center">
              <img
                src={selectedImage || ""}
                alt="Zoomed view"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              />
              <DialogClose className="absolute -top-10 right-0 text-white hover:text-agency-orange">
                <X className="h-6 w-6" />
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>

        <AnimatedSection delay={600} className="mt-8 sm:mt-12 text-center w-max mx-auto">
          <Link
            to="/case-studies"
            className=" flex items-center justify-center border-agency-orange bg-white hover:text-agency-orange/80 text-agency-orange hover:bg-agency-orange/10 px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientResults;
