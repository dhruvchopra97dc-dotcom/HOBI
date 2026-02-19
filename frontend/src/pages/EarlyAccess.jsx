import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { sports } from '../data/venueData';

const EarlyAccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    primarySport: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.mobile || !formData.email || !formData.primarySport) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Mobile validation (basic 10 digit check)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\D/g, ''))) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive"
      });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#F9F6F1' }}>
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 text-center" style={{ borderColor: '#E76F51' }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: '#E76F51' }}>
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
            >
              Welcome to HOBI!
            </h1>
            
            <p 
              className="text-lg text-gray-600 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Thanks for joining early access, {formData.fullName}! We'll be in touch soon with updates about launching in your area.
            </p>

            <div className="space-y-4">
              <div className="bg-[#F9F6F1] rounded-2xl p-6 text-left">
                <h3 
                  className="font-bold mb-3"
                  style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
                >
                  What's Next?
                </h3>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E76F51' }} />
                    <span>You'll receive an email confirmation shortly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E76F51' }} />
                    <span>We'll notify you when HOBI launches in your city</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E76F51' }} />
                    <span>Get exclusive early access benefits and priority booking</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate('/')}
                  size="lg"
                  className="flex-1 h-12 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  style={{ background: 'linear-gradient(135deg, #E76F51 0%, #F4A261 100%)' }}
                >
                  Back to Home
                </Button>
                <Button
                  onClick={() => navigate('/play-now')}
                  size="lg"
                  variant="outline"
                  className="flex-1 h-12 rounded-xl font-semibold border-2 hover:bg-[#E76F51]/10 transition-all"
                  style={{ borderColor: '#E76F51', color: '#E76F51' }}
                >
                  Explore Play Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#F9F6F1' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#E76F51] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Back to Home</span>
          </button>

          <div className="text-center mb-12">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
            >
              Join Early Access
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Be among the first to experience structured play and build your sports community
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2" style={{ borderColor: '#E76F51' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-[#1F2A44] font-semibold mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-[#E76F51] focus:ring-[#E76F51]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="text-[#1F2A44] font-semibold mb-2 block">
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-[#E76F51] focus:ring-[#E76F51]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#1F2A44] font-semibold mb-2 block">
                  Email ID *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-gray-300 focus:border-[#E76F51] focus:ring-[#E76F51]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="primarySport" className="text-[#1F2A44] font-semibold mb-2 block">
                  Primary Sport *
                </Label>
                <Select
                  value={formData.primarySport}
                  onValueChange={(value) => setFormData({ ...formData, primarySport: value })}
                  required
                >
                  <SelectTrigger className="h-12 rounded-xl border-gray-300">
                    <SelectValue placeholder="Select your primary sport" />
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
                style={{ background: 'linear-gradient(135deg, #E76F51 0%, #F4A261 100%)' }}
              >
                Get Early Access
              </Button>

              <p className="text-sm text-center text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                By submitting, you agree to receive updates about HOBI. We respect your privacy.
              </p>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Priority Access', desc: 'Be first to book venues in your area' },
              { title: 'Exclusive Benefits', desc: 'Early bird discounts and perks' },
              { title: 'Community Building', desc: 'Join founding member groups' }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 hover:border-[#E76F51] transition-all"
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: '#E76F51' }}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 
                  className="font-bold mb-2"
                  style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;
