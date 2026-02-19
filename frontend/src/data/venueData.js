// Complete venue database from Excel file
export const venueData = {
  Gurgaon: {
    Badminton: [
      { name: "CourtKing Badminton Club", area: "Sector 56", distance: 2.4 },
      { name: "GameGrid Smash Club", area: "Sector 43", distance: 3.1 },
      { name: "CitySports Badminton Hub", area: "DLF Phase 4", distance: 3.8 },
      { name: "PlayAll Smash Club", area: "Golf Course Road", distance: 4.6 },
      { name: "ActiveZone Smash Club - Sohna Road", area: "Sector 56", distance: 5.2 },
      { name: "GameGrid Badminton Hub", area: "Sector 49", distance: 6.0 },
      { name: "HOBI Smash Club", area: "Sector 65", distance: 6.7 },
      { name: "AceArena Smash Club", area: "Sector 14", distance: 7.6 },
      { name: "CourtKing Badminton Club", area: "Sohna Road", distance: 8.4 },
      { name: "MatchPoint Shuttle House", area: "Udyog Vihar", distance: 9.3 }
    ],
    Football: [
      { name: "Sportyzo Turf Arena", area: "Sector 43", distance: 2.4 },
      { name: "The Sports Yard Football Turf", area: "Sector 29", distance: 3.1 },
      { name: "PrimePlay Football Park", area: "DLF Phase 4", distance: 3.8 },
      { name: "PlayAll Football Turf", area: "Golf Course Road", distance: 4.6 },
      { name: "PlayAll Astro Turf - Sector 29", area: "Sector 56", distance: 5.2 },
      { name: "AceArena Turf Arena", area: "Sector 49", distance: 6.0 },
      { name: "MatchPoint Football Park", area: "Sector 65", distance: 6.7 },
      { name: "PlayAll DLF Phase 4 Goal Ground", area: "Sector 14", distance: 7.6 },
      { name: "RallyRoom Turf Arena", area: "Sohna Road", distance: 8.4 },
      { name: "ActiveZone Astro Turf", area: "Udyog Vihar", distance: 9.3 }
    ],
    Squash: [
      { name: "GameGrid Squash Club - Sector 49", area: "Sector 43", distance: 2.4 },
      { name: "AceArena Squash Club", area: "Sector 29", distance: 3.1 },
      { name: "TurfTown Squash Hub - Sector 65", area: "DLF Phase 4", distance: 3.8 },
      { name: "SmashHaus DLF Phase 4 Squash Studio", area: "Golf Course Road", distance: 4.6 },
      { name: "ActiveZone Squash House - Sector 56", area: "Sector 56", distance: 5.2 },
      { name: "CitySports Sector 49 Squash Hub", area: "Sector 49", distance: 6.0 },
      { name: "SmashHaus Squash House", area: "Sector 65", distance: 6.7 },
      { name: "Sportyzo DLF Phase 4 Squash Club", area: "Sector 14", distance: 7.6 },
      { name: "PlayStreet Squash House - Sector 29", area: "Sohna Road", distance: 8.4 },
      { name: "The Sports Yard Squash House", area: "Udyog Vihar", distance: 9.3 }
    ],
    Tennis: [
      { name: "ActiveZone Tennis Club", area: "Sector 43", distance: 2.4 },
      { name: "UrbanPlay Tennis Club - Sector 56", area: "Sector 29", distance: 3.1 },
      { name: "RallyRoom Tennis Hub", area: "DLF Phase 4", distance: 3.8 },
      { name: "ClubHouse Tennis Courts", area: "Golf Course Road", distance: 4.6 },
      { name: "FitField Udyog Vihar Tennis Academy", area: "Sector 56", distance: 5.2 },
      { name: "SmashHaus Tennis Park", area: "Sector 49", distance: 6.0 },
      { name: "PrimePlay Tennis Park", area: "Sector 65", distance: 6.7 },
      { name: "CourtKing Sector 56 Tennis Park", area: "Sector 14", distance: 7.6 },
      { name: "Sportyzo Tennis Courts", area: "Sohna Road", distance: 8.4 },
      { name: "PlayAll Sector 29 Tennis Hub", area: "Udyog Vihar", distance: 9.3 }
    ],
    "Table Tennis": [
      { name: "SmashHaus Sohna Road Ping Pong Club", area: "Sector 43", distance: 2.4 },
      { name: "AceArena Table Tennis House - Udyog Vihar", area: "Sector 29", distance: 3.1 },
      { name: "TurfTown Table Tennis House", area: "DLF Phase 4", distance: 3.8 },
      { name: "The Sports Yard TT Hub - Sector 14", area: "Golf Course Road", distance: 4.6 },
      { name: "CourtKing TT Studio", area: "Sector 56", distance: 5.2 },
      { name: "UrbanPlay Udyog Vihar TT Club", area: "Sector 49", distance: 6.0 },
      { name: "CitySports TT Studio", area: "Sector 65", distance: 6.7 },
      { name: "Sportyzo TT Studio", area: "Sector 14", distance: 7.6 },
      { name: "UrbanPlay Sohna Road TT Club", area: "Sohna Road", distance: 8.4 },
      { name: "AceArena Golf Course Road Ping Pong Club", area: "Udyog Vihar", distance: 9.3 }
    ],
    Padel: [
      { name: "CitySports Sector 14 Padel Studio", area: "Sector 43", distance: 2.4 },
      { name: "ProPlay Padel Park", area: "Sector 29", distance: 3.1 },
      { name: "CourtKing Padel Park - Sector 49", area: "DLF Phase 4", distance: 3.8 },
      { name: "PlayStreet Padel Park", area: "Golf Course Road", distance: 4.6 },
      { name: "Sportyzo Padel Park", area: "Sector 56", distance: 5.2 },
      { name: "GameGrid Padel Courts - Golf Course Road", area: "Sector 49", distance: 6.0 },
      { name: "SmashHaus Padel Park", area: "Sector 65", distance: 6.7 },
      { name: "ArenaWorks Padel Courts - Sector 29", area: "Sector 14", distance: 7.6 },
      { name: "ActiveZone Padel Club", area: "Sohna Road", distance: 8.4 },
      { name: "PlayAll Padel Courts - DLF Phase 4", area: "Udyog Vihar", distance: 9.3 }
    ],
    Pickleball: [
      { name: "ProPlay Pickleball Park - Golf Course Road", area: "Sector 43", distance: 2.4 },
      { name: "Sportyzo Pickleball Courts", area: "Sector 29", distance: 3.1 },
      { name: "The Sports Yard Pickleball Hub", area: "DLF Phase 4", distance: 3.8 },
      { name: "PlayStreet Sector 14 Pickleball House", area: "Golf Course Road", distance: 4.6 },
      { name: "TurfTown Pickleball Hub", area: "Sector 56", distance: 5.2 },
      { name: "CitySports Pickleball House", area: "Sector 49", distance: 6.0 },
      { name: "Sportyzo Pickleball Club - Udyog Vihar", area: "Sector 65", distance: 6.7 },
      { name: "ClubHouse Pickleball House", area: "Sector 14", distance: 7.6 },
      { name: "ClubHouse Pickleball Club", area: "Sohna Road", distance: 8.4 },
      { name: "PrimePlay Pickleball Club - Golf Course Road", area: "Udyog Vihar", distance: 9.3 }
    ],
    Cricket: [
      { name: "CourtKing Cricket Turf", area: "Sector 43", distance: 2.4 },
      { name: "PrimePlay Cricket Nets", area: "Sector 65", distance: 3.1 },
      { name: "AceArena Sector 49 Box Cricket", area: "DLF Phase 4", distance: 3.8 },
      { name: "AceArena Practice Nets", area: "Golf Course Road", distance: 4.6 },
      { name: "ArenaWorks Cricket Arena", area: "Sector 56", distance: 5.2 },
      { name: "ArenaWorks Cricket Turf", area: "Sector 49", distance: 6.0 },
      { name: "PlayAll Cricket Turf", area: "Sector 65", distance: 6.7 },
      { name: "SmashHaus Sector 29 Cricket Arena", area: "Sector 14", distance: 7.6 },
      { name: "MatchPoint Cricket Arena - DLF Phase 4", area: "Sohna Road", distance: 8.4 },
      { name: "ActiveZone Cricket Arena", area: "Udyog Vihar", distance: 9.3 }
    ]
  },
  Delhi: {
    Badminton: [
      { name: "ActiveZone Saket Shuttle House", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "AceArena Saket Badminton Club", area: "Saket", distance: 3.1 },
      { name: "AceArena Civil Lines Shuttle House", area: "Vasant Kunj", distance: 3.8 },
      { name: "UrbanPlay Smash Club - Rohini Sector 9", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "AceArena Badminton Club - Saket", area: "Rohini Sector 9", distance: 5.2 },
      { name: "AceArena Badminton Club", area: "Pitampura", distance: 6.0 },
      { name: "SmashHaus Shuttle House - Vasant Kunj", area: "Janakpuri", distance: 6.7 },
      { name: "ActiveZone Badminton Hub", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "CourtKing Badminton Club", area: "Surajmal Vihar", distance: 8.4 },
      { name: "MatchPoint Surajmal Vihar Shuttle Court", area: "Civil Lines", distance: 9.3 }
    ],
    Football: [
      { name: "PlayStreet Astro Turf", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "MatchPoint Pitampura Football Turf", area: "Saket", distance: 3.1 },
      { name: "GameGrid Football Turf - Pitampura", area: "Vasant Kunj", distance: 3.8 },
      { name: "PrimePlay Dwarka Sector 10 Astro Turf", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "RallyRoom GK-2 Turf Arena", area: "Rohini Sector 9", distance: 5.2 },
      { name: "UrbanPlay Turf Arena", area: "Pitampura", distance: 6.0 },
      { name: "RallyRoom Football Turf", area: "Janakpuri", distance: 6.7 },
      { name: "ProPlay Astro Turf - Dwarka Sector 10", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "MatchPoint Dwarka Sector 10 Football Park", area: "Surajmal Vihar", distance: 8.4 },
      { name: "HOBI Astro Turf", area: "Civil Lines", distance: 9.3 }
    ],
    Squash: [
      { name: "AceArena Squash Club", area: "Rohini Sector 9", distance: 2.4 },
      { name: "ClubHouse Squash Hub", area: "Saket", distance: 3.1 },
      { name: "HOBI Rohini Sector 9 Squash Club", area: "Vasant Kunj", distance: 3.8 },
      { name: "CitySports Squash Studio", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "PrimePlay Squash Hub", area: "Rohini Sector 9", distance: 5.2 },
      { name: "PlayStreet Squash House", area: "Pitampura", distance: 6.0 },
      { name: "The Sports Yard Squash House", area: "Janakpuri", distance: 6.7 },
      { name: "Sportyzo GK-2 Squash Hub", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "MatchPoint Squash Hub", area: "Surajmal Vihar", distance: 8.4 },
      { name: "PrimePlay Squash Studio", area: "Civil Lines", distance: 9.3 }
    ],
    Tennis: [
      { name: "ClubHouse Tennis Park", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "The Sports Yard Surajmal Vihar Tennis Park", area: "Saket", distance: 3.1 },
      { name: "TurfTown Janakpuri Tennis Hub", area: "Vasant Kunj", distance: 3.8 },
      { name: "PrimePlay Tennis Academy - Rohini Sector 9", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "ActiveZone Tennis Club", area: "Rohini Sector 9", distance: 5.2 },
      { name: "TurfTown Tennis Hub", area: "Pitampura", distance: 6.0 },
      { name: "ArenaWorks Mayur Vihar Phase 1 Tennis Hub", area: "Janakpuri", distance: 6.7 },
      { name: "ClubHouse Tennis Hub", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "FitField Tennis Academy", area: "Surajmal Vihar", distance: 8.4 },
      { name: "PlayAll Rohini Sector 9 Tennis Courts", area: "Civil Lines", distance: 9.3 }
    ],
    "Table Tennis": [
      { name: "TurfTown TT Studio", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "GameGrid Ping Pong Club", area: "Saket", distance: 3.1 },
      { name: "ArenaWorks Civil Lines Ping Pong Club", area: "Vasant Kunj", distance: 3.8 },
      { name: "The Sports Yard Janakpuri Ping Pong Club", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "SmashHaus TT Club - Saket", area: "Rohini Sector 9", distance: 5.2 },
      { name: "GameGrid TT Studio - Surajmal Vihar", area: "Pitampura", distance: 6.0 },
      { name: "Sportyzo Table Tennis House", area: "Janakpuri", distance: 6.7 },
      { name: "ArenaWorks TT Studio", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "ArenaWorks Table Tennis House - Surajmal Vihar", area: "Surajmal Vihar", distance: 8.4 },
      { name: "ActiveZone Ping Pong Club - Vasant Kunj", area: "Civil Lines", distance: 9.3 }
    ],
    Padel: [
      { name: "ArenaWorks Padel Hub", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "ClubHouse Padel Park", area: "Saket", distance: 3.1 },
      { name: "ArenaWorks Rohini Sector 9 Padel Club", area: "Vasant Kunj", distance: 3.8 },
      { name: "AceArena Padel Hub", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "SmashHaus Padel Courts - Dwarka Sector 10", area: "Rohini Sector 9", distance: 5.2 },
      { name: "SmashHaus Padel Courts - Saket", area: "Pitampura", distance: 6.0 },
      { name: "PlayStreet Padel Hub - Surajmal Vihar", area: "Janakpuri", distance: 6.7 },
      { name: "PlayStreet Padel Club - Dwarka Sector 10", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "The Sports Yard Padel Studio - GK-2", area: "Surajmal Vihar", distance: 8.4 },
      { name: "ProPlay Padel Club", area: "Civil Lines", distance: 9.3 }
    ],
    Pickleball: [
      { name: "The Sports Yard Surajmal Vihar Pickleball Park", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "ProPlay Pickleball Courts - Rohini Sector 9", area: "Saket", distance: 3.1 },
      { name: "ProPlay Pickleball Club", area: "Vasant Kunj", distance: 3.8 },
      { name: "The Sports Yard Mayur Vihar Phase 1 Pickleball Courts", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "PrimePlay Pickleball House - GK-2", area: "Rohini Sector 9", distance: 5.2 },
      { name: "CitySports Pickleball House", area: "Pitampura", distance: 6.0 },
      { name: "PlayStreet Mayur Vihar Phase 1 Pickleball Courts", area: "Janakpuri", distance: 6.7 },
      { name: "Sportyzo Pickleball Hub", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "TurfTown Pickleball Park", area: "Surajmal Vihar", distance: 8.4 },
      { name: "The Sports Yard Pickleball Hub", area: "Civil Lines", distance: 9.3 }
    ],
    Cricket: [
      { name: "PlayAll Practice Nets", area: "GK-2 (South Delhi)", distance: 2.4 },
      { name: "MatchPoint Box Cricket", area: "Saket", distance: 3.1 },
      { name: "HOBI Box Cricket", area: "Vasant Kunj", distance: 3.8 },
      { name: "PrimePlay Dwarka Sector 10 Box Cricket", area: "Dwarka Sector 10", distance: 4.6 },
      { name: "ProPlay Civil Lines Cricket Nets", area: "Rohini Sector 9", distance: 5.2 },
      { name: "ArenaWorks Pitampura Cricket Arena", area: "Pitampura", distance: 6.0 },
      { name: "PrimePlay Saket Cricket Turf", area: "Janakpuri", distance: 6.7 },
      { name: "FitField Cricket Nets", area: "Mayur Vihar Phase 1", distance: 7.6 },
      { name: "FitField Cricket Turf - Janakpuri", area: "Surajmal Vihar", distance: 8.4 },
      { name: "TurfTown Civil Lines Cricket Nets", area: "Civil Lines", distance: 9.3 }
    ]
  },
  Noida: {
    Badminton: [
      { name: "CourtKing Shuttle House", area: "Sector 18", distance: 2.4 },
      { name: "CitySports Badminton Club - Sector 104", area: "Sector 21", distance: 3.1 },
      { name: "Greater Noida West MatchPoint Badminton Club", area: "Sector 50", distance: 3.8 },
      { name: "HOBI Badminton Hub", area: "Sector 62", distance: 4.6 },
      { name: "PlayStreet Sector 137 Shuttle House", area: "Sector 76", distance: 5.2 },
      { name: "Greater Noida West PlayStreet Smash Club", area: "Sector 104", distance: 6.0 },
      { name: "PrimePlay Shuttle Court - Sector 137", area: "Sector 110", distance: 6.7 },
      { name: "PlayStreet Shuttle Court", area: "Sector 137", distance: 7.6 },
      { name: "GameGrid Badminton Club - Sector 76", area: "Greater Noida West", distance: 8.4 },
      { name: "GameGrid Badminton Hub - Knowledge Park", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    Football: [
      { name: "UrbanPlay Football Turf", area: "Sector 18", distance: 2.4 },
      { name: "RallyRoom Turf Arena", area: "Sector 21", distance: 3.1 },
      { name: "AceArena Football Park", area: "Sector 50", distance: 3.8 },
      { name: "ActiveZone Greater Noida West Football Turf", area: "Sector 62", distance: 4.6 },
      { name: "PlayAll Astro Turf - Sector 110", area: "Sector 76", distance: 5.2 },
      { name: "ActiveZone Astro Turf - Sector 137", area: "Sector 104", distance: 6.0 },
      { name: "ArenaWorks Football Turf", area: "Sector 110", distance: 6.7 },
      { name: "GameGrid Turf Arena", area: "Sector 137", distance: 7.6 },
      { name: "CitySports Football Park", area: "Greater Noida West", distance: 8.4 },
      { name: "PlayStreet Goal Ground", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    Squash: [
      { name: "ArenaWorks Squash Studio", area: "Sector 76", distance: 2.4 },
      { name: "GameGrid Squash Club", area: "Sector 62", distance: 3.1 },
      { name: "CourtKing Sector 50 Squash House", area: "Sector 50", distance: 3.8 },
      { name: "TurfTown Squash Hub", area: "Sector 62", distance: 4.6 },
      { name: "CourtKing Sector 76 Squash Courts", area: "Sector 76", distance: 5.2 },
      { name: "MatchPoint Squash Courts", area: "Sector 104", distance: 6.0 },
      { name: "ActiveZone Squash Courts", area: "Sector 110", distance: 6.7 },
      { name: "PlayStreet Squash House", area: "Sector 137", distance: 7.6 },
      { name: "SmashHaus Squash Studio", area: "Greater Noida West", distance: 8.4 },
      { name: "PlayAll Squash House", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    Tennis: [
      { name: "SmashHaus Tennis Park", area: "Sector 18", distance: 2.4 },
      { name: "The Sports Yard Tennis Club", area: "Sector 21", distance: 3.1 },
      { name: "PlayAll Sector 62 Tennis Academy", area: "Sector 50", distance: 3.8 },
      { name: "RallyRoom Tennis Hub", area: "Sector 62", distance: 4.6 },
      { name: "PrimePlay Tennis Park", area: "Sector 76", distance: 5.2 },
      { name: "ActiveZone Tennis Courts", area: "Sector 104", distance: 6.0 },
      { name: "CourtKing Tennis Academy", area: "Sector 110", distance: 6.7 },
      { name: "ClubHouse Tennis Park", area: "Sector 137", distance: 7.6 },
      { name: "ArenaWorks Tennis Courts", area: "Greater Noida West", distance: 8.4 },
      { name: "UrbanPlay Tennis Hub", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    "Table Tennis": [
      { name: "PlayStreet TT Studio", area: "Sector 18", distance: 2.4 },
      { name: "GameGrid Ping Pong Club", area: "Sector 21", distance: 3.1 },
      { name: "CitySports Sector 50 Table Tennis House", area: "Sector 50", distance: 3.8 },
      { name: "SmashHaus TT Club", area: "Sector 62", distance: 4.6 },
      { name: "ClubHouse Table Tennis House", area: "Sector 76", distance: 5.2 },
      { name: "AceArena TT Hub", area: "Sector 104", distance: 6.0 },
      { name: "Sportyzo Table Tennis House", area: "Sector 110", distance: 6.7 },
      { name: "ArenaWorks Ping Pong Club", area: "Sector 137", distance: 7.6 },
      { name: "MatchPoint TT Studio", area: "Greater Noida West", distance: 8.4 },
      { name: "PrimePlay Table Tennis House", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    Padel: [
      { name: "PlayAll Padel Club", area: "Sector 18", distance: 2.4 },
      { name: "ActiveZone Padel Park", area: "Sector 21", distance: 3.1 },
      { name: "SmashHaus Padel Courts", area: "Sector 50", distance: 3.8 },
      { name: "GameGrid Padel Hub", area: "Sector 62", distance: 4.6 },
      { name: "CitySports Padel Park", area: "Sector 76", distance: 5.2 },
      { name: "MatchPoint Padel Courts", area: "Sector 104", distance: 6.0 },
      { name: "ClubHouse Padel Studio", area: "Sector 110", distance: 6.7 },
      { name: "ArenaWorks Padel Hub", area: "Sector 137", distance: 7.6 },
      { name: "ProPlay Padel Courts", area: "Greater Noida West", distance: 8.4 },
      { name: "PlayStreet Padel Hub", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    Pickleball: [
      { name: "ClubHouse Pickleball Park", area: "Sector 18", distance: 2.4 },
      { name: "SmashHaus Pickleball Hub", area: "Sector 21", distance: 3.1 },
      { name: "Sportyzo Pickleball House", area: "Sector 50", distance: 3.8 },
      { name: "ArenaWorks Pickleball Courts", area: "Sector 62", distance: 4.6 },
      { name: "ProPlay Pickleball Park", area: "Sector 76", distance: 5.2 },
      { name: "PlayAll Pickleball Hub", area: "Sector 104", distance: 6.0 },
      { name: "TurfTown Pickleball House", area: "Sector 110", distance: 6.7 },
      { name: "PrimePlay Pickleball Courts", area: "Sector 137", distance: 7.6 },
      { name: "CourtKing Pickleball Club", area: "Greater Noida West", distance: 8.4 },
      { name: "ActiveZone Pickleball House", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ],
    Cricket: [
      { name: "ProPlay Cricket Turf", area: "Sector 18", distance: 2.4 },
      { name: "ActiveZone Practice Nets", area: "Sector 21", distance: 3.1 },
      { name: "MatchPoint Cricket Arena", area: "Sector 50", distance: 3.8 },
      { name: "ClubHouse Cricket Nets", area: "Sector 62", distance: 4.6 },
      { name: "PlayAll Box Cricket", area: "Sector 76", distance: 5.2 },
      { name: "Sportyzo Cricket Turf", area: "Sector 104", distance: 6.0 },
      { name: "CourtKing Practice Nets", area: "Sector 110", distance: 6.7 },
      { name: "AceArena Cricket Arena", area: "Sector 137", distance: 7.6 },
      { name: "GameGrid Cricket Nets", area: "Greater Noida West", distance: 8.4 },
      { name: "ArenaWorks Cricket Turf", area: "Knowledge Park (Greater Noida)", distance: 9.3 }
    ]
  },
  Mumbai: {
    Badminton: [
      { name: "SmashHaus Badminton Hub", area: "Andheri West", distance: 2.4 },
      { name: "GameGrid Shuttle House", area: "Bandra West", distance: 3.1 },
      { name: "MatchPoint Badminton Club", area: "Powai", distance: 3.8 },
      { name: "ActiveZone Smash Club", area: "Goregaon East", distance: 4.6 },
      { name: "CourtKing Badminton Hub", area: "Lower Parel", distance: 5.2 },
      { name: "PlayAll Shuttle House", area: "Chembur", distance: 6.0 },
      { name: "CitySports Badminton Club", area: "Malad West", distance: 6.7 },
      { name: "AceArena Smash Club", area: "Dadar", distance: 7.6 },
      { name: "ProPlay Badminton Hub", area: "Vikhroli", distance: 8.4 },
      { name: "PlayStreet Shuttle House", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    Football: [
      { name: "PlayAll Football Turf", area: "Andheri West", distance: 2.4 },
      { name: "UrbanPlay Astro Turf", area: "Bandra West", distance: 3.1 },
      { name: "RallyRoom Football Park", area: "Powai", distance: 3.8 },
      { name: "PrimePlay Turf Arena", area: "Goregaon East", distance: 4.6 },
      { name: "AceArena Goal Ground", area: "Lower Parel", distance: 5.2 },
      { name: "MatchPoint Football Turf", area: "Chembur", distance: 6.0 },
      { name: "ProPlay Astro Turf", area: "Malad West", distance: 6.7 },
      { name: "ClubHouse Football Park", area: "Dadar", distance: 7.6 },
      { name: "ArenaWorks Turf Arena", area: "Vikhroli", distance: 8.4 },
      { name: "GameGrid Goal Ground", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    Squash: [
      { name: "ClubHouse Squash Club", area: "Andheri West", distance: 2.4 },
      { name: "ArenaWorks Squash Hub", area: "Bandra West", distance: 3.1 },
      { name: "TurfTown Squash Studio", area: "Powai", distance: 3.8 },
      { name: "PlayStreet Squash House", area: "Goregaon East", distance: 4.6 },
      { name: "The Sports Yard Squash House", area: "Lower Parel", distance: 5.2 },
      { name: "FitField Squash Club", area: "Chembur", distance: 6.0 },
      { name: "HOBI Squash House - Andheri West", area: "Malad West", distance: 6.7 },
      { name: "FitField Squash Courts", area: "Dadar", distance: 7.6 },
      { name: "GameGrid Squash Courts", area: "Vikhroli", distance: 8.4 },
      { name: "SmashHaus Squash Club", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    Tennis: [
      { name: "ArenaWorks Tennis Club", area: "Andheri West", distance: 2.4 },
      { name: "SmashHaus Tennis Club", area: "Bandra West", distance: 3.1 },
      { name: "PlayStreet Goregaon East Tennis Courts", area: "Powai", distance: 3.8 },
      { name: "ActiveZone Tennis Park", area: "Goregaon East", distance: 4.6 },
      { name: "RallyRoom Tennis Park", area: "Lower Parel", distance: 5.2 },
      { name: "UrbanPlay Tennis Club", area: "Chembur", distance: 6.0 },
      { name: "SmashHaus Tennis Courts", area: "Malad West", distance: 6.7 },
      { name: "PlayAll Tennis Hub", area: "Dadar", distance: 7.6 },
      { name: "ActiveZone Tennis Club", area: "Vikhroli", distance: 8.4 },
      { name: "AceArena Tennis Academy", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    "Table Tennis": [
      { name: "CourtKing TT Studio", area: "Andheri West", distance: 2.4 },
      { name: "PrimePlay Chembur Table Tennis House", area: "Bandra West", distance: 3.1 },
      { name: "PlayAll Ping Pong Club - Lower Parel", area: "Powai", distance: 3.8 },
      { name: "FitField Ping Pong Club", area: "Goregaon East", distance: 4.6 },
      { name: "GameGrid Table Tennis House - Powai", area: "Lower Parel", distance: 5.2 },
      { name: "ArenaWorks TT Hub - Vikhroli", area: "Chembur", distance: 6.0 },
      { name: "CitySports TT Studio", area: "Malad West", distance: 6.7 },
      { name: "ProPlay Table Tennis House", area: "Dadar", distance: 7.6 },
      { name: "Sportyzo TT Hub - Goregaon East", area: "Vikhroli", distance: 8.4 },
      { name: "ArenaWorks TT Studio", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    Padel: [
      { name: "MatchPoint Padel Studio", area: "Andheri West", distance: 2.4 },
      { name: "The Sports Yard Padel Hub", area: "Bandra West", distance: 3.1 },
      { name: "ArenaWorks Padel Club", area: "Powai", distance: 3.8 },
      { name: "Sportyzo Goregaon East Padel Hub", area: "Goregaon East", distance: 4.6 },
      { name: "CitySports Bandra West Padel Courts", area: "Lower Parel", distance: 5.2 },
      { name: "CitySports Padel Courts", area: "Chembur", distance: 6.0 },
      { name: "SmashHaus Padel Studio", area: "Malad West", distance: 6.7 },
      { name: "SmashHaus Padel Courts", area: "Dadar", distance: 7.6 },
      { name: "RallyRoom Andheri West Padel Club", area: "Vikhroli", distance: 8.4 },
      { name: "HOBI Padel Hub", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    Pickleball: [
      { name: "HOBI Pickleball Courts", area: "Andheri West", distance: 2.4 },
      { name: "SmashHaus Pickleball Park", area: "Bandra West", distance: 3.1 },
      { name: "PlayAll Pickleball Park", area: "Powai", distance: 3.8 },
      { name: "ClubHouse Pickleball House - Bandra West", area: "Goregaon East", distance: 4.6 },
      { name: "ClubHouse Pickleball Courts", area: "Lower Parel", distance: 5.2 },
      { name: "ClubHouse Pickleball Hub", area: "Chembur", distance: 6.0 },
      { name: "Sportyzo Pickleball Park - Malad West", area: "Malad West", distance: 6.7 },
      { name: "CourtKing Pickleball Park", area: "Dadar", distance: 7.6 },
      { name: "PlayAll Navi Mumbai Pickleball Hub", area: "Vikhroli", distance: 8.4 },
      { name: "PlayAll Pickleball Courts", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ],
    Cricket: [
      { name: "The Sports Yard Cricket Turf", area: "Andheri West", distance: 2.4 },
      { name: "ArenaWorks Cricket Turf - Navi Mumbai", area: "Bandra West", distance: 3.1 },
      { name: "CourtKing Vikhroli Cricket Nets", area: "Powai", distance: 3.8 },
      { name: "PlayStreet Practice Nets - Goregaon East", area: "Goregaon East", distance: 4.6 },
      { name: "UrbanPlay Practice Nets - Malad West", area: "Lower Parel", distance: 5.2 },
      { name: "CourtKing Cricket Arena", area: "Chembur", distance: 6.0 },
      { name: "AceArena Cricket Arena - Powai", area: "Malad West", distance: 6.7 },
      { name: "PlayAll Cricket Nets", area: "Dadar", distance: 7.6 },
      { name: "PlayStreet Chembur Cricket Nets", area: "Vikhroli", distance: 8.4 },
      { name: "ActiveZone Cricket Nets", area: "Navi Mumbai (Vashi)", distance: 9.3 }
    ]
  },
  Pune: {
    Badminton: [
      { name: "CourtKing Badminton Hub - Wakad", area: "Baner", distance: 2.4 },
      { name: "Camp Sportyzo Shuttle House", area: "Balewadi", distance: 3.1 },
      { name: "MatchPoint Camp Badminton Club", area: "Viman Nagar", distance: 3.8 },
      { name: "SmashHaus Badminton Hub", area: "Kothrud", distance: 4.6 },
      { name: "MatchPoint Shuttle Court", area: "Aundh", distance: 5.2 },
      { name: "AceArena Shuttle Court - Kothrud", area: "Wakad", distance: 6.0 },
      { name: "ActiveZone Shuttle Court", area: "Hinjewadi", distance: 6.7 },
      { name: "PrimePlay Baner Shuttle House", area: "Hadapsar", distance: 7.6 },
      { name: "AceArena Shuttle House", area: "Pimple Saudagar", distance: 8.4 },
      { name: "HOBI Smash Club - Viman Nagar", area: "Camp", distance: 9.3 }
    ],
    Football: [
      { name: "PlayAll Astro Turf", area: "Baner", distance: 2.4 },
      { name: "ClubHouse Astro Turf - Hinjewadi", area: "Balewadi", distance: 3.1 },
      { name: "ArenaWorks Football Park", area: "Viman Nagar", distance: 3.8 },
      { name: "FitField Football Park", area: "Kothrud", distance: 4.6 },
      { name: "Sportyzo Astro Turf", area: "Aundh", distance: 5.2 },
      { name: "PlayAll Football Park - Hadapsar", area: "Wakad", distance: 6.0 },
      { name: "ProPlay Goal Ground - Hadapsar", area: "Hinjewadi", distance: 6.7 },
      { name: "AceArena Astro Turf", area: "Hadapsar", distance: 7.6 },
      { name: "MatchPoint Turf Arena", area: "Pimple Saudagar", distance: 8.4 },
      { name: "CitySports Turf Arena", area: "Camp", distance: 9.3 }
    ],
    Squash: [
      { name: "Sportyzo Squash Courts", area: "Baner", distance: 2.4 },
      { name: "HOBI Aundh Squash Courts", area: "Balewadi", distance: 3.1 },
      { name: "SmashHaus Squash Studio", area: "Viman Nagar", distance: 3.8 },
      { name: "CourtKing Squash Club - Hadapsar", area: "Kothrud", distance: 4.6 },
      { name: "RallyRoom Hinjewadi Squash Courts", area: "Aundh", distance: 5.2 },
      { name: "ClubHouse Squash House", area: "Wakad", distance: 6.0 },
      { name: "The Sports Yard Squash Club", area: "Hinjewadi", distance: 6.7 },
      { name: "ArenaWorks Squash Club - Wakad", area: "Hadapsar", distance: 7.6 },
      { name: "CitySports Squash Hub", area: "Pimple Saudagar", distance: 8.4 },
      { name: "CourtKing Squash Hub", area: "Camp", distance: 9.3 }
    ],
    Tennis: [
      { name: "RallyRoom Tennis Academy", area: "Baner", distance: 2.4 },
      { name: "PlayAll Balewadi Tennis Hub", area: "Balewadi", distance: 3.1 },
      { name: "PlayStreet Tennis Academy", area: "Viman Nagar", distance: 3.8 },
      { name: "The Sports Yard Wakad Tennis Park", area: "Kothrud", distance: 4.6 },
      { name: "UrbanPlay Tennis Courts", area: "Aundh", distance: 5.2 },
      { name: "ClubHouse Tennis Academy", area: "Wakad", distance: 6.0 },
      { name: "MatchPoint Tennis Courts", area: "Hinjewadi", distance: 6.7 },
      { name: "SmashHaus Kothrud Tennis Park", area: "Hadapsar", distance: 7.6 },
      { name: "PrimePlay Balewadi Tennis Courts", area: "Pimple Saudagar", distance: 8.4 },
      { name: "ProPlay Tennis Hub - Camp", area: "Camp", distance: 9.3 }
    ],
    "Table Tennis": [
      { name: "CitySports Table Tennis House", area: "Baner", distance: 2.4 },
      { name: "SmashHaus Ping Pong Club - Balewadi", area: "Balewadi", distance: 3.1 },
      { name: "ArenaWorks TT Hub", area: "Viman Nagar", distance: 3.8 },
      { name: "MatchPoint Table Tennis House", area: "Kothrud", distance: 4.6 },
      { name: "ArenaWorks Ping Pong Club", area: "Aundh", distance: 5.2 },
      { name: "MatchPoint TT Hub", area: "Wakad", distance: 6.0 },
      { name: "PrimePlay Table Tennis House - Pimple Saudagar", area: "Hinjewadi", distance: 6.7 },
      { name: "ArenaWorks Table Tennis House", area: "Hadapsar", distance: 7.6 },
      { name: "ArenaWorks Table Tennis House", area: "Pimple Saudagar", distance: 8.4 },
      { name: "PrimePlay Pimple Saudagar Ping Pong Club", area: "Camp", distance: 9.3 }
    ],
    Padel: [
      { name: "Sportyzo Padel Park", area: "Baner", distance: 2.4 },
      { name: "PlayAll Padel Studio", area: "Balewadi", distance: 3.1 },
      { name: "GameGrid Hadapsar Padel Park", area: "Viman Nagar", distance: 3.8 },
      { name: "MatchPoint Padel Hub - Aundh", area: "Kothrud", distance: 4.6 },
      { name: "PlayStreet Padel Hub", area: "Aundh", distance: 5.2 },
      { name: "UrbanPlay Padel Club", area: "Wakad", distance: 6.0 },
      { name: "ActiveZone Padel Park", area: "Hinjewadi", distance: 6.7 },
      { name: "PrimePlay Padel Courts", area: "Hadapsar", distance: 7.6 },
      { name: "CitySports Padel Courts", area: "Pimple Saudagar", distance: 8.4 },
      { name: "The Sports Yard Padel Courts", area: "Camp", distance: 9.3 }
    ],
    Pickleball: [
      { name: "FitField Pickleball House", area: "Baner", distance: 2.4 },
      { name: "SmashHaus Pickleball House - Balewadi", area: "Balewadi", distance: 3.1 },
      { name: "ClubHouse Pickleball Hub", area: "Viman Nagar", distance: 3.8 },
      { name: "FitField Pickleball Courts", area: "Kothrud", distance: 4.6 },
      { name: "ProPlay Kothrud Pickleball Courts", area: "Aundh", distance: 5.2 },
      { name: "SmashHaus Pickleball Club", area: "Wakad", distance: 6.0 },
      { name: "ClubHouse Pickleball House", area: "Hinjewadi", distance: 6.7 },
      { name: "UrbanPlay Pickleball House - Viman Nagar", area: "Hadapsar", distance: 7.6 },
      { name: "SmashHaus Viman Nagar Pickleball Courts", area: "Pimple Saudagar", distance: 8.4 },
      { name: "ArenaWorks Pickleball Club", area: "Camp", distance: 9.3 }
    ],
    Cricket: [
      { name: "GameGrid Practice Nets", area: "Baner", distance: 2.4 },
      { name: "ArenaWorks Pimple Saudagar Box Cricket", area: "Balewadi", distance: 3.1 },
      { name: "FitField Practice Nets", area: "Viman Nagar", distance: 3.8 },
      { name: "CitySports Practice Nets", area: "Kothrud", distance: 4.6 },
      { name: "The Sports Yard Cricket Turf - Pimple Saudagar", area: "Aundh", distance: 5.2 },
      { name: "RallyRoom Camp Box Cricket", area: "Wakad", distance: 6.0 },
      { name: "AceArena Cricket Nets", area: "Hinjewadi", distance: 6.7 },
      { name: "ActiveZone Cricket Nets", area: "Hadapsar", distance: 7.6 },
      { name: "FitField Cricket Nets", area: "Pimple Saudagar", distance: 8.4 },
      { name: "ArenaWorks Cricket Turf - Viman Nagar", area: "Camp", distance: 9.3 }
    ]
  },
  Hyderabad: {
    Badminton: [
      { name: "PlayAll Smash Club", area: "Gachibowli", distance: 2.4 },
      { name: "HOBI Badminton Hub - Gachibowli", area: "Kondapur", distance: 3.1 },
      { name: "ClubHouse Shuttle House - Madhapur", area: "Jubilee Hills", distance: 3.8 },
      { name: "PlayAll Shuttle House", area: "Madhapur", distance: 4.6 },
      { name: "UrbanPlay Kukatpally Badminton Club", area: "Hitech City", distance: 5.2 },
      { name: "SmashHaus Badminton Club - Hitech City", area: "Kukatpally", distance: 6.0 },
      { name: "SmashHaus Badminton Hub", area: "Banjara Hills", distance: 6.7 },
      { name: "PlayAll Hitech City Badminton Club", area: "Miyapur", distance: 7.6 },
      { name: "SmashHaus Shuttle Court - LB Nagar", area: "Secunderabad", distance: 8.4 },
      { name: "CourtKing Shuttle House", area: "LB Nagar", distance: 9.3 }
    ],
    Football: [
      { name: "CourtKing Football Turf - Madhapur", area: "Gachibowli", distance: 2.4 },
      { name: "PrimePlay Turf Arena", area: "Kondapur", distance: 3.1 },
      { name: "ProPlay Goal Ground", area: "Jubilee Hills", distance: 3.8 },
      { name: "ClubHouse Madhapur Goal Ground", area: "Madhapur", distance: 4.6 },
      { name: "FitField Turf Arena", area: "Hitech City", distance: 5.2 },
      { name: "GameGrid Banjara Hills Goal Ground", area: "Kukatpally", distance: 6.0 },
      { name: "PlayAll Goal Ground", area: "Banjara Hills", distance: 6.7 },
      { name: "ClubHouse Goal Ground", area: "Miyapur", distance: 7.6 },
      { name: "The Sports Yard Turf Arena - Gachibowli", area: "Secunderabad", distance: 8.4 },
      { name: "MatchPoint Football Park", area: "LB Nagar", distance: 9.3 }
    ],
    Squash: [
      { name: "PlayAll Squash Studio", area: "Gachibowli", distance: 2.4 },
      { name: "CitySports Squash Studio", area: "Kondapur", distance: 3.1 },
      { name: "MatchPoint Kukatpally Squash House", area: "Jubilee Hills", distance: 3.8 },
      { name: "ArenaWorks Jubilee Hills Squash Hub", area: "Madhapur", distance: 4.6 },
      { name: "PlayAll Squash Hub", area: "Hitech City", distance: 5.2 },
      { name: "TurfTown Squash Club", area: "Kukatpally", distance: 6.0 },
      { name: "UrbanPlay Squash Studio - Secunderabad", area: "Banjara Hills", distance: 6.7 },
      { name: "ActiveZone Squash Hub", area: "Miyapur", distance: 7.6 },
      { name: "TurfTown Squash Studio", area: "Secunderabad", distance: 8.4 },
      { name: "UrbanPlay Squash Studio", area: "LB Nagar", distance: 9.3 }
    ],
    Tennis: [
      { name: "PlayStreet Tennis Hub - Miyapur", area: "Gachibowli", distance: 2.4 },
      { name: "UrbanPlay Tennis Courts - Miyapur", area: "Kondapur", distance: 3.1 },
      { name: "MatchPoint Tennis Academy", area: "Jubilee Hills", distance: 3.8 },
      { name: "PlayStreet Banjara Hills Tennis Club", area: "Madhapur", distance: 4.6 },
      { name: "ActiveZone Tennis Park", area: "Hitech City", distance: 5.2 },
      { name: "PlayAll Tennis Park", area: "Kukatpally", distance: 6.0 },
      { name: "ArenaWorks Banjara Hills Tennis Academy", area: "Banjara Hills", distance: 6.7 },
      { name: "ArenaWorks Tennis Park", area: "Miyapur", distance: 7.6 },
      { name: "MatchPoint Tennis Academy", area: "Secunderabad", distance: 8.4 },
      { name: "Sportyzo Tennis Club", area: "LB Nagar", distance: 9.3 }
    ],
    "Table Tennis": [
      { name: "ClubHouse Gachibowli TT Studio", area: "Gachibowli", distance: 2.4 },
      { name: "PrimePlay Gachibowli Ping Pong Club", area: "Kondapur", distance: 3.1 },
      { name: "PlayAll TT Studio", area: "Jubilee Hills", distance: 3.8 },
      { name: "The Sports Yard Gachibowli Table Tennis House", area: "Madhapur", distance: 4.6 },
      { name: "ArenaWorks TT Hub - Kukatpally", area: "Hitech City", distance: 5.2 },
      { name: "PlayAll Table Tennis House", area: "Kukatpally", distance: 6.0 },
      { name: "The Sports Yard Hitech City TT Hub", area: "Banjara Hills", distance: 6.7 },
      { name: "CourtKing TT Club - Jubilee Hills", area: "Miyapur", distance: 7.6 },
      { name: "ClubHouse Ping Pong Club", area: "Secunderabad", distance: 8.4 },
      { name: "AceArena Miyapur TT Hub", area: "LB Nagar", distance: 9.3 }
    ],
    Padel: [
      { name: "PrimePlay Miyapur Padel Hub", area: "Gachibowli", distance: 2.4 },
      { name: "CourtKing Padel Courts - Kondapur", area: "Kondapur", distance: 3.1 },
      { name: "RallyRoom Padel Park", area: "Jubilee Hills", distance: 3.8 },
      { name: "MatchPoint Padel Club", area: "Madhapur", distance: 4.6 },
      { name: "FitField Padel Courts", area: "Hitech City", distance: 5.2 },
      { name: "ClubHouse Kondapur Padel Courts", area: "Kukatpally", distance: 6.0 },
      { name: "SmashHaus Padel Courts", area: "Banjara Hills", distance: 6.7 },
      { name: "MatchPoint Padel Studio", area: "Miyapur", distance: 7.6 },
      { name: "ArenaWorks Padel Studio", area: "Secunderabad", distance: 8.4 },
      { name: "PlayAll Padel Hub - Banjara Hills", area: "LB Nagar", distance: 9.3 }
    ],
    Pickleball: [
      { name: "ClubHouse Pickleball Park", area: "Gachibowli", distance: 2.4 },
      { name: "SmashHaus Pickleball Hub - Kondapur", area: "Kondapur", distance: 3.1 },
      { name: "ArenaWorks Kukatpally Pickleball House", area: "Jubilee Hills", distance: 3.8 },
      { name: "ActiveZone Jubilee Hills Pickleball House", area: "Madhapur", distance: 4.6 },
      { name: "PlayStreet Pickleball House", area: "Hitech City", distance: 5.2 },
      { name: "ClubHouse Hitech City Pickleball Courts", area: "Kukatpally", distance: 6.0 },
      { name: "RallyRoom Pickleball Hub", area: "Banjara Hills", distance: 6.7 },
      { name: "ClubHouse Pickleball Hub", area: "Miyapur", distance: 7.6 },
      { name: "TurfTown Hitech City Pickleball House", area: "Secunderabad", distance: 8.4 },
      { name: "FitField Pickleball House", area: "LB Nagar", distance: 9.3 }
    ],
    Cricket: [
      { name: "ClubHouse LB Nagar Box Cricket", area: "Gachibowli", distance: 2.4 },
      { name: "LB Nagar RallyRoom Cricket Turf", area: "Kondapur", distance: 3.1 },
      { name: "CitySports Cricket Nets", area: "Jubilee Hills", distance: 3.8 },
      { name: "Sportyzo Hitech City Cricket Turf", area: "Madhapur", distance: 4.6 },
      { name: "CitySports Practice Nets", area: "Hitech City", distance: 5.2 },
      { name: "ProPlay Cricket Turf", area: "Kukatpally", distance: 6.0 },
      { name: "ProPlay Box Cricket", area: "Banjara Hills", distance: 6.7 },
      { name: "ArenaWorks Gachibowli Cricket Nets", area: "Miyapur", distance: 7.6 },
      { name: "ArenaWorks Practice Nets - Miyapur", area: "Secunderabad", distance: 8.4 },
      { name: "TurfTown LB Nagar Cricket Arena", area: "LB Nagar", distance: 9.3 }
    ]
  }
};

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
