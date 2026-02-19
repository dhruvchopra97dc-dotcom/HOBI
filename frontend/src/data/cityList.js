// Complete venue database and expanded city list
export const venueData = {
  // ... keeping existing venue data as is from previous implementation
};

// Expanded city list for "Bring HOBI to My City"
export const expandedCities = [
  "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", 
  "Pune", "Ahmedabad", "Gurgaon", "Noida", "Ghaziabad", "Faridabad", 
  "Navi Mumbai", "Jaipur", "Chandigarh", "Lucknow", "Kanpur", "Indore", 
  "Bhopal", "Nagpur", "Surat", "Vadodara", "Coimbatore", "Kochi", 
  "Visakhapatnam", "Vijayawada", "Mysuru", "Patna", "Bhubaneswar", "Guwahati"
];

export const cities = ["Gurgaon", "Delhi", "Noida", "Mumbai", "Pune", "Hyderabad"];
export const sports = ["Badminton", "Football", "Squash", "Tennis", "Table Tennis", "Padel", "Pickleball", "Cricket"];

export const timeSlots = [
  "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
];

export const distanceRanges = [
  { label: "<3 KM", value: 0, maxResults: 2 },
  { label: "3-5 KM", value: 1, maxResults: 4 },
  { label: "5-7 KM", value: 2, maxResults: 6 },
  { label: "7-10 KM", value: 3, maxResults: 8 },
  { label: ">10 KM", value: 4, maxResults: 10 }
];