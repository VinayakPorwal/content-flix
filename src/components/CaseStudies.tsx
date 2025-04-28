import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Instagram, Youtube, TrendingUp, Users, Heart, MessageCircle, 
  ChevronLeft, ChevronRight, CheckCircle2, Target, BarChart2
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { caseStudies } from '../data/caseStudies';
import { useParams } from 'react-router-dom';
interface MetricCardProps {
  icon: string;
  title: string;
  value: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, description }) => {
  const getIcon = () => {
    switch (icon) {
      case 'instagram':
        return <Instagram className="w-6 h-6 text-agency-orange" />;
      case 'youtube':
        return <Youtube className="w-6 h-6 text-agency-orange" />;
      case 'trending':
        return <TrendingUp className="w-6 h-6 text-agency-orange" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-agency-orange/20 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-agency-orange/10 rounded-lg">
          {getIcon()}
        </div>
        <h3 className="text-lg font-semibold text-agency-dark">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-agency-orange mb-2">{value}{icon!=="trending" && "+"}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface VideoCardProps {
  title: string;
  thumbnail: string;
  views: string;
  engagement: string;
  link: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, views, engagement, link }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-2xl overflow-hidden border border-agency-orange/20 shadow-sm hover:shadow-md transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="relative aspect-video">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-agency-dark mb-2">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {views}
        </span>
        <span className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          {engagement}
        </span>
      </div>
    </div>
  </motion.a>
);

interface ChallengeCardProps {
  title: string;
  description: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, description }) => (
  <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-agency-orange/20">
    <h4 className="text-lg font-semibold text-agency-dark mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface StrategyCardProps {
  title: string;
  description: string;
  points?: string[];
}

const StrategyCard: React.FC<StrategyCardProps> = ({ title, description, points }) => (
  <div className="bg-white p-6 rounded-xl border border-agency-orange/20">
    <h4 className="text-lg font-semibold text-agency-dark mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    {points && (
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-agency-orange flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const CaseStudies: React.FC = () => {
  const { name } = useParams();

  const [activeIndex, setActiveIndex] = useState(() => {
    if (name) {
      const index = caseStudies.findIndex(study => study.client.toLowerCase().includes(name.toLowerCase()));
      return index !== -1 ? index : 0;
    }
    return 0;
  });

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[activeIndex] ;

  return (
    <section className="py-20 bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-6 border border-agency-orange/20 shadow-sm">
              <TrendingUp className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Case Studies</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <h2 className="text-4xl font-bold text-agency-dark mb-4">
              Success Stories That <span className="text-agency-orange">Inspire</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped our clients achieve remarkable growth and engagement across social media platforms.
            </p>
          </AnimatedSection>
        <div className="flex flex-wrap gap-4 mx-auto w-full justify-center items-center mt-4">
          {caseStudies.map((study, idx) => (
            <div key={idx} onClick={() => setActiveIndex(idx)} title={study.client}>
              <img src={study.overview.image} alt={study.client} className={`cursor-pointer object-cover rounded-full mix-blend-multiply ${activeIndex === idx ? 'border-4 border-agency-orange w-20 h-20' : 'w-16 h-16'}`} />
            </div>
          ))}
        </div>
        </div>


        <div className="relative">
          <div className="mb-8">
            {/* Client Overview */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/3">
                <img 
                  src={currentStudy?.overview?.image || 'default-image.jpg'} 
                  alt={currentStudy.client || 'Client Image'}
                  className="w-full h-[300px] object-cover rounded-2xl mix-blend-multiply border-4 border-agency-orange/40"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-agency-dark">{currentStudy.client || 'Client Name'}</h3>
                    <p className="text-gray-600">{currentStudy.industry || 'Industry'}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevCase}
                      className="p-2 rounded-full bg-white border border-agency-orange/20 hover:bg-agency-orange/10 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-agency-orange" />
                    </button>
                    <button
                      onClick={nextCase}
                      className="p-2 rounded-full bg-white border border-agency-orange/20 hover:bg-agency-orange/10 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-agency-orange" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-6">{currentStudy?.overview?.description || 'Description not available.'}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentStudy.metrics ? currentStudy.metrics.map((metric, idx) => (
                    <MetricCard key={idx} {...metric} />
                  )) : <p>No metrics available.</p>}
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-agency-orange" />
                <h3 className="text-xl font-semibold text-agency-dark">Challenges Identified</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentStudy?.challenges ? currentStudy.challenges.map((challenge, idx) => (
                  <ChallengeCard key={idx} {...challenge} />
                )) : <p>No challenges available.</p>}
              </div>
            </div>

            {/* Strategy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <BarChart2 className="w-6 h-6 text-agency-orange" />
                <h3 className="text-xl font-semibold text-agency-dark">Our Approach</h3>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-agency-orange/30"></div>
                <div className="space-y-4">
                  {currentStudy.strategy ? currentStudy.strategy.map((strategy, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-agency-orange "></div>
                      <div className="z-10 absolute -left-8 top-1/2 transform -translate-y-1/2 w-24 h-0.5 bg-agency-orange/30"></div>
                      <div className="bg-white rounded-xl z-20 mx-4 relative">
                        <StrategyCard {...strategy} />
                      </div>
                    </div>
                  )) : <p>No strategy available.</p>}
                </div>
              </div>
            </div>

            {/* Results */}
            {currentStudy?.results?.youtube && (
              <div className="mb-12">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-agency-orange" />
                <h3 className="text-xl font-semibold text-agency-dark">Results & Impact</h3>
              </div>
              <p className="text-gray-600 px-4 mb-2">{currentStudy?.results?.youtube?.description || 'No results available.'}</p>
              {currentStudy?.results?.youtube?.channelDashboard && (
                <div className="w-full px-4 pb-8">
                  <h4 className="text-lg font-semibold text-agency-dark mb-2">Channel Analytics Dashboard</h4>
                  <img 
                    src={currentStudy.results.youtube.channelDashboard} 
                    alt="Channel Dashboard" 
                    className="w-full rounded-2xl border-2 border-agency-orange/70"
                  />
                </div>
              )}
              <div className="flex px-4 flex-wrap justify-center w-full gap-6 mb-6">
                {currentStudy?.results?.youtube?.insights ? currentStudy.results.youtube.insights.map((insight, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-agency-orange/20">
                    <div className="flex flex-col md:flex-row items-center relative">
                      <div className="absolute w-1/2 top-1/2 left-10 right-0 h-0.5 bg-agency-orange z-0" />
                      <div className={`p-6 relative z-10 ${insight.insight ? 'md:w-[30%]' : 'md:w-full'}`}>
                        <img src={insight.video} alt={`${insight.title} insight`} className="mt-4 w-full" />
                      </div>
                      {insight.insight && (
                        <div className="w-full p-6 relative z-10">
                          <img src={insight.insight} alt={insight.title} className="rounded-2xl w-full h-full object-contain border-2 border-dashed border-agency-orange/40" />
                        </div>
                      )}
                    </div>
                  </div>
                )) : <p>No insights available.</p>}
              </div>
              
            </div>
            )}

            {/* Instagram Reels */}
            {currentStudy?.results?.instagram && (
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-agency-orange" />
                <h3 className="text-xl font-semibold text-agency-dark">Instagram Reels</h3>
              </div>
                <p className="text-gray-600 p-4 mb-2">{currentStudy?.results?.instagram?.description || 'No Instagram results available.'}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentStudy?.results?.instagram?.insights ? currentStudy.results.instagram.insights.map((reel, idx) => (
                  <div key={idx} className="relative bg-white rounded-2xl overflow-hidden border border-agency-orange/20 shadow-sm hover:shadow-md transition-shadow">
                    <img src={reel.video} alt={`Instagram Reel ${idx + 1}`} className="w-full h-full object-cover" />
                    {/* <img src={"/orange-circle.png"} alt={`Instagram Reel ${idx + 1}`} className="absolute -bottom-6 left-0 w-1/2" /> */}
                  </div>
                )) : <p>No Instagram insights available.</p>}
              </div>
            </div>
            )}

            {/* Testimonial */}
            {/* <div className="mt-12 bg-white p-8 rounded-2xl border border-agency-orange/20">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-agency-orange" />
                <h3 className="text-xl font-semibold text-agency-dark">Client Testimonial</h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">{currentStudy?.testimonial?.quote || 'No testimonial available.'}</p>
              <div>
                <p className="font-semibold text-agency-dark">{currentStudy?.testimonial?.author || 'Author'}</p>
                <p className="text-gray-600">{currentStudy?.testimonial?.role || 'Role'}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    {/* <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom mx-auto text-center">
        <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
            <p className="text-agency-orange">My Instagram ID</p>
            <a href="https://instagram.com/_rashidmukhrtar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              @_rashidmukhrtar
            </a>
          </div>
          <div>
            <p className="text-agency-orange">My Email</p>
            <a href="mailto:rashidmukhtar205@gmail.com" className="text-blue-400 hover:underline">
              rashidmukhtar205@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer> */}

      
    </section>
  );
};

export default CaseStudies; 