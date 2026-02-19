import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Eye, Users, CalendarCheck, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      num: '01',
      icon: MapPin,
      title: 'Set Location & Sport',
      description: 'Open HOBI, select your city and sport. Tell us your travel radius — we do the rest.',
      color: '#FF5A36'
    },
    {
      num: '02',
      icon: Eye,
      title: 'Discover Nearby Venues',
      description: 'See a curated list of courts and turfs ranked by distance with availability details.',
      color: '#FFB800'
    },
    {
      num: '03',
      icon: Users,
      title: 'Find Your Match',
      description: 'Browse open games or create one. Match with players at your skill level nearby.',
      color: '#18B0A5'
    },
    {
      num: '04',
      icon: CalendarCheck,
      title: 'Book & Schedule',
      description: 'Confirm your slot, lock in your court. No WhatsApp coordination needed.',
      color: '#FF5A36'
    },
    {
      num: '05',
      icon: TrendingUp,
      title: 'Build Your Community',
      description: 'Regular games create bonds. Bonds create culture. Culture creates cities that play.',
      color: '#FFB800'
    },
    {
      num: '06',
      icon: BarChart3,
      title: 'Track & Grow',
      description: 'Log games, see stats, watch your community grow. Data for players and venues alike.',
      color: '#18B0A5'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: '#F8F8FC' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-0.5 w-12" style={{ background: '#18B0A5' }}></div>
            <span className="text-sm font-semibold tracking-wider" style={{ color: '#18B0A5', fontFamily: 'Inter, sans-serif' }}>
              THE PROCESS
            </span>
            <div className="h-0.5 w-12" style={{ background: '#18B0A5' }}></div>
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47', lineHeight: '1.1' }}
          >
            How HOBI Creates<br />Structured Play
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            From discovery to community — the full HOBI experience in 6 steps.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#F8F8FC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#FF5A36] hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-8xl font-bold opacity-5" style={{ fontFamily: 'Inter, sans-serif', color: step.color }}>
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center" style={{ background: `${step.color}15` }}>
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-4 tracking-tight"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Layers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47', lineHeight: '1.1' }}
            >
              Three Layers of HOBI
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We're not just a booking platform. We're building community infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Discovery Layer',
                desc: 'Find games, courts, and players near you. No more hunting through WhatsApp groups or relying on word-of-mouth.',
                color: '#FF5A36'
              },
              {
                icon: CalendarCheck,
                title: 'Coordination Layer',
                desc: 'Structured scheduling, automated bookings, and clear communication. Everyone knows when, where, and who.',
                color: '#FFB800'
              },
              {
                icon: Users,
                title: 'Community Layer',
                desc: 'Recurring games build relationships. Relationships build culture. Culture builds cities that play together.',
                color: '#18B0A5'
              }
            ].map((layer, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border-2 hover:shadow-xl transition-all group"
                style={{ borderColor: layer.color }}
              >
                <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: `${layer.color}15` }}>
                  <layer.icon className="w-8 h-8" style={{ color: layer.color }} />
                </div>
                <h3 
                  className="text-2xl font-bold mb-4 tracking-tight"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47' }}
                >
                  {layer.title}
                </h3>
                <p 
                  className="text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#F8F8FC' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47', lineHeight: '1.1' }}
          >
            Ready to Start Your Journey?
          </h2>
          <p 
            className="text-xl text-gray-600 mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join thousands of players building structured sports communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/play-now')}
              size="lg"
              className="text-lg px-10 py-6 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #FF5A36 0%, #FF8A5C 100%)' }}
            >
              Play Now
            </Button>
            <Button
              onClick={() => navigate('/early-access')}
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 rounded-xl font-semibold border-2 hover:bg-[#FF5A36]/10 transition-all"
              style={{ borderColor: '#FF5A36', color: '#FF5A36' }}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
