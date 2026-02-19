import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Slider } from '../components/ui/slider';
import { format } from 'date-fns';
import { venueData, cities, sports, timeSlots, distanceRanges } from '../data/venueData';

const PlayNow = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [distanceFilter, setDistanceFilter] = useState([4]); // Default to >10 KM (show all)
  const [showResults, setShowResults] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleSearch = () => {
    if (selectedCity && selectedSport) {
      setShowResults(true);
    }
  };

  const getFilteredVenues = () => {
    if (!selectedCity || !selectedSport) return [];
    
    const allVenues = venueData[selectedCity]?.[selectedSport] || [];
    const maxResults = distanceRanges[distanceFilter[0]].maxResults;
    
    return allVenues.slice(0, maxResults);
  };

  const filteredVenues = getFilteredVenues();

  return (
    <div className="min-h-screen" style={{ background: '#F9F6F1' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
          >
            Play Now
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover sports venues near you. Filter by location, sport, and distance.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2" style={{ borderColor: '#E76F51' }}>
            <div className="flex items-center space-x-3 mb-8">
              <Filter className="w-6 h-6" style={{ color: '#E76F51' }} />
              <h2 
                className="text-2xl font-bold"
                style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
              >
                Find Your Game
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* City Selection */}
              <div>
                <Label htmlFor="city" className="text-[#1F2A44] font-semibold mb-2 block flex items-center space-x-2">
                  <MapPin className="w-4 h-4" style={{ color: '#E76F51' }} />
                  <span>Select City</span>
                </Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="h-12 rounded-xl border-gray-300">
                    <SelectValue placeholder="Choose your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sport Selection */}
              <div>
                <Label htmlFor="sport" className="text-[#1F2A44] font-semibold mb-2 block flex items-center space-x-2">
                  <span>Select Sport</span>
                </Label>
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger className="h-12 rounded-xl border-gray-300">
                    <SelectValue placeholder="Choose your sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map((sport) => (
                      <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div>
                <Label className="text-[#1F2A44] font-semibold mb-2 block flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" style={{ color: '#E76F51' }} />
                  <span>Select Date</span>
                </Label>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl justify-start text-left font-normal border-gray-300"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setDatePickerOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div>
                <Label htmlFor="time" className="text-[#1F2A44] font-semibold mb-2 block flex items-center space-x-2">
                  <Clock className="w-4 h-4" style={{ color: '#E76F51' }} />
                  <span>Select Time Slot</span>
                </Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="h-12 rounded-xl border-gray-300">
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Distance Slider */}
            <div className="mt-8">
              <Label className="text-[#1F2A44] font-semibold mb-4 block flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" style={{ color: '#E76F51' }} />
                  <span>Travel Radius</span>
                </span>
                <span className="text-sm font-bold" style={{ color: '#E76F51' }}>
                  {distanceRanges[distanceFilter[0]].label}
                </span>
              </Label>
              <Slider
                value={distanceFilter}
                onValueChange={setDistanceFilter}
                max={4}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>&lt;3 KM</span>
                <span>3-5 KM</span>
                <span>5-7 KM</span>
                <span>7-10 KM</span>
                <span>&gt;10 KM</span>
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              size="lg"
              className="w-full h-14 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all mt-8"
              style={{ background: 'linear-gradient(135deg, #E76F51 0%, #F4A261 100%)' }}
            >
              Search Venues
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
              >
                Available Venues
              </h2>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Found {filteredVenues.length} venues in {selectedCity} for {selectedSport}
              </p>
            </div>

            {filteredVenues.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border-2 border-gray-200">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: '#E76F51' }} />
                <p 
                  className="text-xl text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Please select a city and sport to see available venues
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredVenues.map((venue, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#E76F51] hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 
                          className="text-xl font-bold mb-2 group-hover:text-[#E76F51] transition-colors"
                          style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
                        >
                          {venue.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span style={{ fontFamily: 'Inter, sans-serif' }}>{venue.area}</span>
                        </div>
                      </div>
                      <div 
                        className="px-4 py-2 rounded-xl text-sm font-bold"
                        style={{ background: '#E76F51', color: 'white' }}
                      >
                        {venue.distance} KM
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <Button
                        size="sm"
                        className="w-full rounded-xl font-semibold text-white hover:shadow-lg transition-all"
                        style={{ background: 'linear-gradient(135deg, #E76F51 0%, #F4A261 100%)' }}
                      >
                        Book Slot Here
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Sora, sans-serif', color: '#1F2A44' }}
          >
            This is a Preview
          </h2>
          <p 
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            You're experiencing a static demo of HOBI's discovery flow. Join early access to book real venues, meet players, and build your sports community.
          </p>
          <Button
            onClick={() => window.location.href = '/early-access'}
            size="lg"
            className="px-10 py-6 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            style={{ background: 'linear-gradient(135deg, #E76F51 0%, #F4A261 100%)' }}
          >
            Join Early Access
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PlayNow;
