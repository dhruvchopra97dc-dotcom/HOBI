import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MessageSquare, Calendar, Zap, HandshakeIcon, CalendarCheck, UsersRound, TrendingUp, Eye, DollarSign, Trophy, MapPin, CheckCircle, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { sports, cities } from '../data/venueData';
import { expandedCities } from '../data/cityList';

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState('players'); // For Who Benefits tabs

  const [earlyAccessForm, setEarlyAccessForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    primarySport: ''
  });

  const [cityVoteForm, setCityVoteForm] = useState({
    city: '',
    primarySport: ''
  });

  const handleEarlyAccessSubmit = (e) => {
    e.preventDefault();
    if (!earlyAccessForm.fullName || !earlyAccessForm.mobile || !earlyAccessForm.email || !earlyAccessForm.primarySport) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Thanks for joining early access. We'll be in touch soon!",
    });
    
    // Reset form
    setEarlyAccessForm({ fullName: '', mobile: '', email: '', primarySport: '' });
  };

  const handleCityVoteSubmit = (e) => {
    e.preventDefault();
    if (!cityVoteForm.city || !cityVoteForm.primarySport) {
      toast({
        title: "Missing Information",
        description: "Please select both city and sport",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Vote Recorded!",
      description: `We'll prioritize bringing HOBI to ${cityVoteForm.city}!`,
    });
    
    // Reset form
    setCityVoteForm({ city: '', primarySport: '' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#F8F8FC' }}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#F8F8FC' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF5A36] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#18B0A5] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47', lineHeight: '1.1' }}
          >
            Find Your Hobby,<br />Find Your People
          </h1>
          <p 
            className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            HOBI is building the social infrastructure layer for sports communities in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/early-access')}
              size="lg"
              className="text-lg px-8 py-6 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #FF5A36 0%, #FF8A5C 100%)' }}
            >
              Join Early Access
            </Button>
            <Button
              onClick={() => {
                document.getElementById('bring-hobi').scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl font-semibold border-2 hover:bg-[#FF5A36]/10 transition-all"
              style={{ borderColor: '#FF5A36', color: '#FF5A36' }}
            >
              Bring HOBI to My City
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-0.5 w-12" style={{ background: '#18B0A5' }}></div>
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#18B0A5', fontFamily: 'Inter, sans-serif' }}>
                THE PROBLEM
              </span>
            </div>
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47', lineHeight: '1.1' }}
            >
              Sports Communities<br />Are Fragmented
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              India has millions of active players but no structured platform.<br />
              Discovery is broken, coordination is chaos, and potential goes unrealised.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: Search, 
                title: 'Manual Discovery', 
                desc: 'Players hunt for courts through Google, WhatsApp groups, and word-of-mouth. There\'s no easy way to discover who\'s playing, where, or when.'
              },
              { 
                icon: MessageSquare, 
                title: 'Endless Coordination', 
                desc: 'Confirming players, tracking availability, deciding who books and who pays — all scattered across multiple chats.'
              },
              { 
                icon: Calendar, 
                title: 'Low Trust', 
                desc: 'Even after confirming, players cancel last minute. With no structured system, reliability becomes unpredictable.'
              },
              { 
                icon: Target, 
                title: 'Endless Compromise', 
                desc: 'Adjusting location, timing, and playing days just to make a game happen — often settling instead of playing on your terms.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#FF5A36] transition-all hover:shadow-xl group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: 'rgba(255, 90, 54, 0.1)' }}>
                    <item.icon className="w-8 h-8" style={{ color: '#FF5A36' }} />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold mb-3 tracking-tight"
                      style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-base text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-0.5 w-12" style={{ background: '#18B0A5' }}></div>
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#18B0A5', fontFamily: 'Inter, sans-serif' }}>
                THE SOLUTION
              </span>
            </div>
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Sora, sans-serif', color: '#1E2A47' }}
            >
              One Platform.{' '}
              <span style={{ color: '#FF5A36' }}>Structured Play.</span>
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              HOBI is the infrastructure layer connecting players, venues, and sports<br />
              communities across India's cities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                num: '01', 
                icon: MapPin,
                title: 'Discover Nearby Games', 
                desc: 'Find courts and matches near you filtered by sport, distance, and time — in under 30 seconds.',
                iconColor: '#FF5A36'
              },
              { 
                num: '02', 
                icon: HandshakeIcon,
                title: 'Meet New Players', 
                desc: 'Connect with players at your level in your neighbourhood. Build your own sports circle organically.',
                iconColor: '#FFB800'
              },
              { 
                num: '03', 
                icon: CalendarCheck,
                title: 'Join Matches', 
                desc: 'Structured scheduling across all venues. No more ambiguity, no more last-minute coordination chaos.',
                iconColor: '#18B0A5'
              },
              { 
                num: '04', 
                icon: UsersRound,
                title: 'Build Communities', 
                desc: 'Consistent recurring games that bring the same people together — creating real community bonds.',
                iconColor: '#FF5A36'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#FF5A36] hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-8 right-8 text-8xl font-bold opacity-5" style={{ fontFamily: 'Sora, sans-serif', color: item.iconColor }}>
                  {item.num}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center" style={{ background: `${item.iconColor}15` }}>
                    <item.icon className="w-7 h-7" style={{ color: item.iconColor }} />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: 'Sora, sans-serif', color: '#1E2A47' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 
              className="text-5xl md:text-6xl font-bold mb-12 text-center tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47', lineHeight: '1.1' }}
            >
              Built for Every Side<br />of the Court
            </h2>
            
            {/* Tab Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => setActiveTab('players')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-3 ${
                  activeTab === 'players' 
                    ? 'bg-white shadow-lg border-2' 
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
                style={{ 
                  borderColor: activeTab === 'players' ? '#FF5A36' : 'transparent',
                  color: activeTab === 'players' ? '#1E2A47' : '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <UsersRound className="w-5 h-5" />
                <span>Players</span>
              </button>
              <button
                onClick={() => setActiveTab('venues')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-3 ${
                  activeTab === 'venues' 
                    ? 'bg-white shadow-lg border-2' 
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
                style={{ 
                  borderColor: activeTab === 'venues' ? '#FF5A36' : 'transparent',
                  color: activeTab === 'venues' ? '#1E2A47' : '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <MapPin className="w-5 h-5" />
                <span>Venues</span>
              </button>
            </div>
          </div>

          {/* Players Tab Content */}
          {activeTab === 'players' && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              {[
                { 
                  icon: Zap, 
                  title: 'Find Games Instantly', 
                  desc: 'No more searching across multiple apps. Discover games near you in seconds.'
                },
                { 
                  icon: MapPin, 
                  title: 'Filter by Distance', 
                  desc: 'Set your travel radius and only see venues that actually fit your routine.'
                },
                { 
                  icon: CalendarCheck, 
                  title: 'Structured Scheduling', 
                  desc: 'Pre-scheduled slots mean you always know when and where to show up.'
                },
                { 
                  icon: UsersRound, 
                  title: 'Your Sports Circle', 
                  desc: 'Meet regulars, find consistent partners, grow your local sports network.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#18B0A5] transition-all hover:shadow-xl group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(24, 176, 165, 0.1)' }}>
                      <item.icon className="w-8 h-8" style={{ color: '#18B0A5' }} />
                    </div>
                    <div>
                      <h3 
                        className="text-2xl font-bold mb-3 tracking-tight"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47' }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-base text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Venues Tab Content */}
          {activeTab === 'venues' && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              {[
                { 
                  icon: TrendingUp, 
                  title: 'Increase Utilisation', 
                  desc: 'Fill empty slots during off-peak hours with HOBI\'s demand-driven scheduling.'
                },
                { 
                  icon: Eye, 
                  title: 'Improve Visibility', 
                  desc: 'Get discovered by thousands of active players searching for venues near them.'
                },
                { 
                  icon: DollarSign, 
                  title: 'Predictable Bookings', 
                  desc: 'Recurring games mean consistent revenue instead of unpredictable walk-ins.'
                },
                { 
                  icon: Trophy, 
                  title: 'Community Anchor', 
                  desc: 'Become the home base for a local sports community — driving long-term loyalty.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#18B0A5] transition-all hover:shadow-xl group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(24, 176, 165, 0.1)' }}>
                      <item.icon className="w-8 h-8" style={{ color: '#18B0A5' }} />
                    </div>
                    <div>
                      <h3 
                        className="text-2xl font-bold mb-3 tracking-tight"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#1E2A47' }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-base text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Join Early Access */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#F7F9FC' }}>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200">
            <div className="text-center mb-8">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'Sora, sans-serif', color: '#1E2A47' }}
              >
                Join Early Access
              </h2>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Be among the first to experience structured play
              </p>
            </div>

            <form onSubmit={handleEarlyAccessSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-[#1E2A47] font-semibold mb-2 block">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your name"
                  value={earlyAccessForm.fullName}
                  onChange={(e) => setEarlyAccessForm({ ...earlyAccessForm, fullName: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-[#FF5A36] focus:ring-[#FF5A36]"
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="text-[#1E2A47] font-semibold mb-2 block">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile"
                  value={earlyAccessForm.mobile}
                  onChange={(e) => setEarlyAccessForm({ ...earlyAccessForm, mobile: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-[#FF5A36] focus:ring-[#FF5A36]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#1E2A47] font-semibold mb-2 block">Email ID</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={earlyAccessForm.email}
                  onChange={(e) => setEarlyAccessForm({ ...earlyAccessForm, email: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-[#FF5A36] focus:ring-[#FF5A36]"
                />
              </div>

              <div>
                <Label htmlFor="primarySport" className="text-[#1E2A47] font-semibold mb-2 block">Primary Sport</Label>
                <Select
                  value={earlyAccessForm.primarySport}
                  onValueChange={(value) => setEarlyAccessForm({ ...earlyAccessForm, primarySport: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-gray-300">
                    <SelectValue placeholder="Select your sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map((sport) => (
                      <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                style={{ background: 'linear-gradient(135deg, #FF5A36 0%, #FF8A5C 100%)' }}
              >
                Get Early Access
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section - Bring HOBI to My City */}
      <section id="bring-hobi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F7F9FC] rounded-3xl p-10 shadow-2xl border-2" style={{ borderColor: '#FF5A36' }}>
            <div className="text-center mb-8">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: 'Sora, sans-serif', color: '#1E2A47' }}
              >
                Bring HOBI to My City
              </h2>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Vote for your city and help us prioritize expansion
              </p>
            </div>

            <form onSubmit={handleCityVoteSubmit} className="space-y-6">
              <div>
                <Label htmlFor="city" className="text-[#1E2A47] font-semibold mb-2 block">Select City</Label>
                <Select
                  value={cityVoteForm.city}
                  onValueChange={(value) => setCityVoteForm({ ...cityVoteForm, city: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-gray-300 bg-white">
                    <SelectValue placeholder="Choose your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {expandedCities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="voteSport" className="text-[#1E2A47] font-semibold mb-2 block">Primary Sport Interest</Label>
                <Select
                  value={cityVoteForm.primarySport}
                  onValueChange={(value) => setCityVoteForm({ ...cityVoteForm, primarySport: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-gray-300 bg-white">
                    <SelectValue placeholder="Select your sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map((sport) => (
                      <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                style={{ background: 'linear-gradient(135deg, #FF5A36 0%, #FF8A5C 100%)' }}
              >
                Vote
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
