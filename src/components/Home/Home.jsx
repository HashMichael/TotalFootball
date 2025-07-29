import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Sub-Components/Navbar/Navbar'
import NewsCard from '../Sub-Components/NewsCard/NewsCard'
import TFNewsCard from '../Sub-Components/TFNewCard/TFNewsCard'

const Home = () => {

  const [news, setNews] = useState([
    {
      id: 1,
      title: "NFL Training Camps Heat Up Across the League",
      summary: "All 32 NFL teams are in full swing with training camp activities as the 2025 season approaches.",
      category: "NFL",
      date: "July 27, 2025",
      location: "Multiple Locations",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=250&fit=crop",
      content: "Training camps across the NFL are showcasing intense competition as teams prepare for the upcoming season. Rookie standouts and veteran battles are emerging at every position.",
      trending: true
    },
    {
      id: 2,
      title: "Premier League Summer Series Kicks Off in New Jersey",
      summary: "Tyler Adams and Bournemouth face Everton at MetLife Stadium in the opening match.",
      category: "Soccer",
      date: "July 26, 2025",
      location: "MetLife Stadium, NJ",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
      content: "The Premier League Summer Series brings top English football to American fans with exciting pre-season matches featuring star players.",
      trending: false
    },
    {
      id: 3,
      title: "MLB All-Star Break Concludes with Trade Deadline Buzz",
      summary: "Teams are making final moves before the trade deadline as the second half of the season begins.",
      category: "MLB",
      date: "July 27, 2025",
      location: "Various",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=250&fit=crop",
      content: "Baseball executives are working around the clock to finalize deals that could shape playoff races in both leagues.",
      trending: true
    },
    {
      id: 4,
      title: "Tour de France Enters Final Week with Dramatic Mountain Stages",
      summary: "The yellow jersey battle intensifies as riders tackle the challenging Alpine climbs.",
      category: "Cycling",
      date: "July 27, 2025",
      location: "French Alps",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      content: "Mountain stages in the French Alps are providing spectacular racing as the general classification battle remains tight.",
      trending: false
    },
    {
      id: 5,
      title: "Wimbledon Tennis Championships Reach Quarterfinal Stage",
      summary: "The world's top tennis players compete for Grand Slam glory on the grass courts of the All England Club.",
      category: "Tennis",
      date: "July 27, 2025",
      location: "London, England",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      content: "Quarterfinal matches promise thrilling tennis as players battle for semifinal spots at the prestigious Wimbledon Championships.",
      trending: true
    },
    {
      id: 6,
      title: "NBA Summer League Showcases Rising Rookie Talent",
      summary: "First-year players and young prospects display their skills in Las Vegas summer action.",
      category: "NBA",
      date: "July 26, 2025",
      location: "Las Vegas, NV",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop",
      content: "Rookie sensations are making their mark in Summer League play, giving fans a preview of the next generation of NBA stars.",
      trending: false
    },
    {
      id: 7,
      title: "Formula 1 Prepares for Hungarian Grand Prix Weekend",
      summary: "Drivers gear up for another exciting race weekend at the Hungaroring circuit.",
      category: "F1",
      date: "July 27, 2025",
      location: "Budapest, Hungary",
      image: "https://images.unsplash.com/photo-1558905546-4d9b3f1e3d4f?w=400&h=250&fit=crop",
      content: "The Hungarian Grand Prix promises wheel-to-wheel racing as Formula 1 continues its thrilling 2025 championship battle.",
      trending: false
    },
    {
      id: 8,
      title: "Women's Cricket World Cup Preparations Intensify",
      summary: "National teams finalize their squads and strategies for the upcoming global tournament.",
      category: "Cricket",
      date: "July 27, 2025",
      location: "Various",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop",
      content: "Women's cricket takes center stage as teams prepare for what promises to be the most competitive World Cup yet.",
      trending: true
    },
    {
      id: 9,
      title: "Olympic Training Camps Ramp Up for 2026 Winter Games",
      summary: "Athletes begin intensive preparation for the upcoming Winter Olympics in Milano-Cortina.",
      category: "Olympics",
      date: "July 26, 2025",
      location: "Multiple Training Facilities",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      content: "Winter sports athletes are beginning their Olympic journey with specialized training programs focused on peak performance.",
      trending: false
    },
    {
      id: 10,
      title: "College Football Programs Begin Summer Workouts",
      summary: "Universities across the nation start preparation for the upcoming college football season.",
      category: "College Football",
      date: "July 27, 2025",
      location: "College Campuses Nationwide",
      image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=400&h=250&fit=crop",
      content: "Student-athletes return to campus for strength training and conditioning as anticipation builds for the fall season.",
      trending: false
    }
  ]);

  const [liveScore, setLiveScores] = useState([
  // Premier League
  {
    id: "match001",
    competition: "Premier League",
    homeTeam: "Manchester City",
    awayTeam: "Arsenal",
    homeScore: 1,
    awayScore: 10,
    status: "Full Time",
    minute: null,
    venue: "Etihad Stadium",
    date: "2025-07-27",
    kickoffTime: "16:30",
    attendance: 55017,
    referee: "Michael Oliver",
    weather: "Sunny, 24°C",
    goalScorers: {
      home: ["Haaland 23'", "De Bruyne 67'"],
      away: ["Saka 45+2'"]
    },
    cards: {
      yellow: ["Rodri 34' (MCI)", "Rice 58' (ARS)", "Gabriel 82' (ARS)"],
      red: []
    }
  },
  {
    id: "match002",
    competition: "Premier League",
    homeTeam: "Liverpool",
    awayTeam: "Chelsea",
    homeScore: 1,
    awayScore: 1,
    status: "Half Time",
    minute: null,
    venue: "Anfield",
    date: "2025-07-27",
    kickoffTime: "14:00",
    attendance: 54074,
    referee: "Anthony Taylor",
    weather: "Overcast, 21°C",
    goalScorers: {
      home: ["Salah 18'"],
      away: ["Jackson 39'"]
    },
    cards: {
      yellow: ["van Dijk 22' (LIV)", "Fernández 44' (CHE)"],
      red: []
    }
  },
  {
    id: "match003",
    competition: "Premier League",
    homeTeam: "Newcastle United",
    awayTeam: "Tottenham",
    homeScore: 0,
    awayScore: 2,
    status: "Live",
    minute: 73,
    venue: "St. James' Park",
    date: "2025-07-27",
    kickoffTime: "17:30",
    attendance: 52305,
    referee: "Simon Hooper",
    weather: "Light rain, 19°C",
    goalScorers: {
      home: [],
      away: ["Son 31'", "Maddison 65'"]
    },
    cards: {
      yellow: ["Bruno Guimarães 47' (NEW)", "Bissouma 71' (TOT)"],
      red: []
    }
  },

  // La Liga
  {
    id: "match004",
    competition: "La Liga",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: 3,
    awayScore: 2,
    status: "Full Time",
    minute: null,
    venue: "Santiago Bernabéu",
    date: "2025-07-27",
    kickoffTime: "21:00",
    attendance: 81044,
    referee: "Antonio Mateu Lahoz",
    weather: "Clear, 28°C",
    goalScorers: {
      home: ["Mbappé 12', 78'", "Bellingham 56'"],
      away: ["Lewandowski 25'", "Gavi 84'"]
    },
    cards: {
      yellow: ["Tchouaméni 33' (RMA)", "Pedri 62' (BAR)", "Araújo 89' (BAR)"],
      red: ["Ferran Torres 90+3' (BAR)"]
    }
  },
  {
    id: "match005",
    competition: "La Liga",
    homeTeam: "Atlético Madrid",
    awayTeam: "Sevilla",
    homeScore: 1,
    awayScore: 0,
    status: "Live",
    minute: 67,
    venue: "Wanda Metropolitano",
    date: "2025-07-27",
    kickoffTime: "19:30",
    attendance: 68456,
    referee: "José María Sánchez",
    weather: "Hot, 31°C",
    goalScorers: {
      home: ["Griezmann 52'"],
      away: []
    },
    cards: {
      yellow: ["Koke 41' (ATM)", "Rakitić 59' (SEV)"],
      red: []
    }
  },

  // Serie A
  {
    id: "match006",
    competition: "Serie A",
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    homeScore: 2,
    awayScore: 2,
    status: "Full Time",
    minute: null,
    venue: "Allianz Stadium",
    date: "2025-07-27",
    kickoffTime: "20:45",
    attendance: 41507,
    referee: "Daniele Orsato",
    weather: "Warm, 26°C",
    goalScorers: {
      home: ["Vlahović 15'", "Chiesa 88'"],
      away: ["Leão 7'", "Giroud 73'"]
    },
    cards: {
      yellow: ["Locatelli 29' (JUV)", "Tonali 55' (MIL)", "Theo Hernández 81' (MIL)"],
      red: []
    }
  },
  {
    id: "match007",
    competition: "Serie A",
    homeTeam: "Inter Milan",
    awayTeam: "Napoli",
    homeScore: 1,
    awayScore: 3,
    status: "Live",
    minute: 89,
    venue: "San Siro",
    date: "2025-07-27",
    kickoffTime: "18:00",
    attendance: 75923,
    referee: "Maurizio Mariani",
    weather: "Mild, 23°C",
    goalScorers: {
      home: ["Lautaro 34'"],
      away: ["Osimhen 12', 67'", "Kvaratskhelia 81'"]
    },
    cards: {
      yellow: ["Barella 28' (INT)", "Kim 55' (NAP)"],
      red: ["Bastoni 76' (INT)"]
    }
  },

  // Bundesliga
  {
    id: "match008",
    competition: "Bundesliga",
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    homeScore: 4,
    awayScore: 1,
    status: "Full Time",
    minute: null,
    venue: "Allianz Arena",
    date: "2025-07-27",
    kickoffTime: "18:30",
    attendance: 75000,
    referee: "Felix Brych",
    weather: "Cool, 18°C",
    goalScorers: {
      home: ["Kane 8', 43'", "Müller 56'", "Musiala 79'"],
      away: ["Bellingham 22'"]
    },
    cards: {
      yellow: ["Kimmich 31' (BAY)", "Can 64' (BVB)", "Hummels 87' (BVB)"],
      red: []
    }
  },

  // Champions League
  {
    id: "match009",
    competition: "UEFA Champions League",
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Manchester United",
    homeScore: 2,
    awayScore: 1,
    status: "Live",
    minute: 85,
    venue: "Parc des Princes",
    date: "2025-07-27",
    kickoffTime: "21:00",
    attendance: 47929,
    referee: "Clément Turpin",
    weather: "Clear, 22°C",
    goalScorers: {
      home: ["Mbappé 33'", "Neymar 72'"],
      away: ["Rashford 58'"]
    },
    cards: {
      yellow: ["Verratti 41' (PSG)", "Casemiro 63' (MUN)", "Hakimi 77' (PSG)"],
      red: []
    }
  },

  // International Friendly
  {
    id: "match010",
    competition: "International Friendly",
    homeTeam: "Brazil",
    awayTeam: "Argentina",
    homeScore: 0,
    awayScore: 0,
    status: "Live",
    minute: 27,
    venue: "Maracanã Stadium",
    date: "2025-07-27",
    kickoffTime: "20:00",
    attendance: 78838,
    referee: "Raphael Claus",
    weather: "Humid, 29°C",
    goalScorers: {
      home: [],
      away: []
    },
    cards: {
      yellow: ["Casemiro 19' (BRA)"],
      red: []
    }
  },

  // Premier League - Additional matches
  {
    id: "match011",
    competition: "Premier League",
    homeTeam: "West Ham United",
    awayTeam: "Brighton",
    homeScore: 1,
    awayScore: 2,
    status: "Full Time",
    minute: null,
    venue: "London Stadium",
    date: "2025-07-27",
    kickoffTime: "15:00",
    attendance: 66000,
    referee: "Craig Pawson",
    weather: "Partly cloudy, 20°C",
    goalScorers: {
      home: ["Antonio 41'"],
      away: ["Gross 23'", "Mac Allister 76'"]
    },
    cards: {
      yellow: ["Rice 35' (WHU)", "Dunk 68' (BRI)"],
      red: []
    }
  },

  // Scheduled matches (not yet started)
  {
    id: "match012",
    competition: "Premier League",
    homeTeam: "Aston Villa",
    awayTeam: "Everton",
    homeScore: null,
    awayScore: null,
    status: "Scheduled",
    minute: null,
    venue: "Villa Park",
    date: "2025-07-27",
    kickoffTime: "19:45",
    attendance: null,
    referee: "Paul Tierney",
    weather: "Expected: Clear, 22°C",
    goalScorers: {
      home: [],
      away: []
    },
    cards: {
      yellow: [],
      red: []
    }
  }
  ]);

  const [leagueTable, setLeagueTable] = useState([
  {
    position: 1,
    team: "Liverpool",
    played: 38,
    won: 28,
    drawn: 7,
    lost: 3,
    goalsFor: 89,
    goalsAgainst: 35,
    goalDifference: 54,
    points: 91,
    qualification: "Champions League",
    status: "Champions",
    form: ["W", "W", "W", "D", "W"],
    manager: "Arne Slot"
  },
  {
    position: 2,
    team: "Arsenal",
    played: 38,
    won: 26,
    drawn: 8,
    lost: 4,
    goalsFor: 82,
    goalsAgainst: 38,
    goalDifference: 44,
    points: 86,
    qualification: "Champions League",
    status: "Runner-up",
    form: ["W", "W", "D", "W", "W"],
    manager: "Mikel Arteta"
  },
  {
    position: 3,
    team: "Manchester City",
    played: 38,
    won: 24,
    drawn: 9,
    lost: 5,
    goalsFor: 78,
    goalsAgainst: 42,
    goalDifference: 36,
    points: 81,
    qualification: "Champions League",
    status: "UCL Qualified",
    form: ["W", "D", "W", "W", "L"],
    manager: "Pep Guardiola"
  },
  {
    position: 4,
    team: "Chelsea",
    played: 38,
    won: 22,
    drawn: 10,
    lost: 6,
    goalsFor: 76,
    goalsAgainst: 48,
    goalDifference: 28,
    points: 76,
    qualification: "Champions League",
    status: "UCL Qualified",
    form: ["W", "W", "D", "W", "W"],
    manager: "Enzo Maresca"
  },
  {
    position: 5,
    team: "Newcastle United",
    played: 38,
    won: 21,
    drawn: 8,
    lost: 9,
    goalsFor: 71,
    goalsAgainst: 52,
    goalDifference: 19,
    points: 71,
    qualification: "Europa League",
    status: "Europa League",
    form: ["W", "W", "L", "W", "W"],
    manager: "Eddie Howe"
  },
  {
    position: 6,
    team: "Tottenham Hotspur",
    played: 38,
    won: 20,
    drawn: 7,
    lost: 11,
    goalsFor: 74,
    goalsAgainst: 58,
    goalDifference: 16,
    points: 67,
    qualification: "Europa League",
    status: "Europa League",
    form: ["W", "L", "W", "D", "W"],
    manager: "Ange Postecoglou"
  },
  {
    position: 7,
    team: "Manchester United",
    played: 38,
    won: 18,
    drawn: 11,
    lost: 9,
    goalsFor: 65,
    goalsAgainst: 52,
    goalDifference: 13,
    points: 65,
    qualification: "Conference League",
    status: "Conference League",
    form: ["W", "W", "D", "L", "W"],
    manager: "Ruben Amorim"
  },
  {
    position: 8,
    team: "Aston Villa",
    played: 38,
    won: 18,
    drawn: 9,
    lost: 11,
    goalsFor: 63,
    goalsAgainst: 55,
    goalDifference: 8,
    points: 63,
    qualification: "None",
    status: "Mid-table",
    form: ["D", "W", "L", "W", "D"],
    manager: "Unai Emery"
  },
  {
    position: 9,
    team: "Brighton & Hove Albion",
    played: 38,
    won: 17,
    drawn: 10,
    lost: 11,
    goalsFor: 61,
    goalsAgainst: 56,
    goalDifference: 5,
    points: 61,
    qualification: "None",
    status: "Mid-table",
    form: ["L", "W", "D", "W", "L"],
    manager: "Fabian Hürzeler"
  },
  {
    position: 10,
    team: "AFC Bournemouth",
    played: 38,
    won: 16,
    drawn: 11,
    lost: 11,
    goalsFor: 64,
    goalsAgainst: 59,
    goalDifference: 5,
    points: 59,
    qualification: "None",
    status: "Mid-table",
    form: ["W", "W", "W", "D", "W"],
    manager: "Andoni Iraola"
  },
  {
    position: 11,
    team: "Nottingham Forest",
    played: 38,
    won: 16,
    drawn: 10,
    lost: 12,
    goalsFor: 58,
    goalsAgainst: 54,
    goalDifference: 4,
    points: 58,
    qualification: "None",
    status: "Mid-table",
    form: ["W", "L", "W", "W", "D"],
    manager: "Nuno Espírito Santo"
  },
  {
    position: 12,
    team: "Fulham",
    played: 38,
    won: 15,
    drawn: 12,
    lost: 11,
    goalsFor: 55,
    goalsAgainst: 52,
    goalDifference: 3,
    points: 57,
    qualification: "None",
    status: "Mid-table",
    form: ["D", "W", "L", "D", "W"],
    manager: "Marco Silva"
  },
  {
    position: 13,
    team: "West Ham United",
    played: 38,
    won: 14,
    drawn: 12,
    lost: 12,
    goalsFor: 53,
    goalsAgainst: 58,
    goalDifference: -5,
    points: 54,
    qualification: "None",
    status: "Mid-table",
    form: ["W", "W", "D", "L", "W"],
    manager: "Graham Potter"
  },
  {
    position: 14,
    team: "Brentford",
    played: 38,
    won: 13,
    drawn: 13,
    lost: 12,
    goalsFor: 56,
    goalsAgainst: 59,
    goalDifference: -3,
    points: 52,
    qualification: "None",
    status: "Mid-table",
    form: ["D", "W", "D", "L", "D"],
    manager: "Thomas Frank"
  },
  {
    position: 15,
    team: "Crystal Palace",
    played: 38,
    won: 12,
    drawn: 12,
    lost: 14,
    goalsFor: 48,
    goalsAgainst: 58,
    goalDifference: -10,
    points: 48,
    qualification: "None",
    status: "Safe",
    form: ["L", "D", "W", "L", "D"],
    manager: "Oliver Glasner"
  },
  {
    position: 16,
    team: "Everton",
    played: 38,
    won: 11,
    drawn: 14,
    lost: 13,
    goalsFor: 45,
    goalsAgainst: 54,
    goalDifference: -9,
    points: 47,
    qualification: "None",
    status: "Safe",
    form: ["W", "D", "L", "W", "D"],
    manager: "David Moyes"
  },
  {
    position: 17,
    team: "Wolverhampton Wanderers",
    played: 38,
    won: 10,
    drawn: 13,
    lost: 15,
    goalsFor: 42,
    goalsAgainst: 61,
    goalDifference: -19,
    points: 43,
    qualification: "None",
    status: "Safe",
    form: ["L", "D", "W", "L", "D"],
    manager: "Vitor Pereira"
  },
  {
    position: 18,
    team: "Southampton",
    played: 38,
    won: 8,
    drawn: 11,
    lost: 19,
    goalsFor: 38,
    goalsAgainst: 68,
    goalDifference: -30,
    points: 35,
    qualification: "None",
    status: "Relegated",
    form: ["L", "L", "D", "L", "L"],
    manager: "Ivan Jurić"
  },
  {
    position: 19,
    team: "Leicester City",
    played: 38,
    won: 7,
    drawn: 12,
    lost: 19,
    goalsFor: 35,
    goalsAgainst: 64,
    goalDifference: -29,
    points: 33,
    qualification: "None",
    status: "Relegated",
    form: ["L", "D", "L", "L", "D"],
    manager: "Ruud van Nistelrooy"
  },
  {
    position: 20,
    team: "Ipswich Town",
    played: 38,
    won: 6,
    drawn: 14,
    lost: 18,
    goalsFor: 33,
    goalsAgainst: 71,
    goalDifference: -38,
    points: 32,
    qualification: "None",
    status: "Relegated",
    form: ["L", "D", "L", "D", "L"],
    manager: "Kieran McKenna"
  }
  ])

  const [transferNews, setTransferNews] = useState([
  {
    id: "transfer001",
    playerName: "Kylian Mbappé",
    fromClub: "Paris Saint-Germain",
    toClub: "Real Madrid",
    transferType: "Free Transfer",
    fee: "€0",
    contractLength: "5 years",
    date: "2024-06-03",
    position: "Forward",
    age: 25,
    nationality: "France",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Real Madrid complete signing of Kylian Mbappé on free transfer",
    marketValue: "€180m",
    newsContent: "Real Madrid have finally secured their dream signing as Kylian Mbappé joins Los Blancos on a free transfer after his contract with Paris Saint-Germain expired. The French superstar, who has been linked with a move to the Santiago Bernabéu for years, will earn a reported €25 million per year plus bonuses. Mbappé expressed his excitement, stating 'This is a dream come true. Real Madrid is the biggest club in the world and I'm ready to give everything for this shirt.' The 25-year-old will wear the iconic number 9 jersey and is expected to form a formidable attacking partnership with Vinícius Jr. and Jude Bellingham. PSG will receive no transfer fee but are reportedly entitled to a solidarity payment. The signing represents a major coup for Real Madrid president Florentino Pérez, who has pursued Mbappé for over three years.",
    reaction: "Fans gathered outside the Bernabéu to celebrate the signing",
    medicalStatus: "Passed medical on June 2nd",
    officialPresentation: "June 10, 2024 at Santiago Bernabéu",
    previousClubStats: "213 goals in 229 appearances for PSG"
  },
  {
    id: "transfer002",
    playerName: "Erling Haaland",
    fromClub: "Manchester City",
    toClub: "Real Madrid",
    transferType: "Transfer",
    fee: "€150m",
    contractLength: "6 years",
    date: "2024-07-15",
    position: "Striker",
    age: 24,
    nationality: "Norway",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Real Madrid break transfer record for Erling Haaland",
    marketValue: "€170m",
    newsContent: "In a shocking turn of events, Real Madrid have completed the signing of Erling Haaland from Manchester City for a record-breaking €150 million fee. The Norwegian goal machine, who scored 52 goals in his debut Premier League season, has penned a six-year deal with Los Blancos worth €30 million per year. Haaland cited his desire to win the Champions League as the primary motivation for the move, stating 'Real Madrid is the king of European football. I want to win the Champions League multiple times and this is the perfect place to do it.' Manchester City reluctantly agreed to sell after Haaland activated a release clause in his contract. The 24-year-old striker will compete with Mbappé for the number 9 position, creating one of the most formidable attacking duos in world football. Pep Guardiola expressed his disappointment but wished Haaland well, saying 'Erling gave us two incredible seasons. We understand his ambition and respect his decision.'",
    reaction: "Manchester City fans devastated by the departure of their star striker",
    medicalStatus: "Completed medical in Madrid on July 14th",
    officialPresentation: "July 18, 2024 at Santiago Bernabéu",
    previousClubStats: "90 goals in 89 appearances for Manchester City",
    releaseClause: "€150m release clause activated"
  },
  {
    id: "transfer003",
    playerName: "Victor Osimhen",
    fromClub: "Napoli",
    toClub: "Chelsea",
    transferType: "Transfer",
    fee: "€100m",
    contractLength: "5 years",
    date: "2024-08-10",
    position: "Striker",
    age: 25,
    nationality: "Nigeria",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Chelsea secure Victor Osimhen for club record fee",
    marketValue: "€110m",
    newsContent: "Chelsea have completed their marquee signing of the summer by acquiring Victor Osimhen from Napoli for a club-record €100 million fee. The Nigerian striker, who fired Napoli to their first Serie A title in 33 years, has signed a five-year contract worth €18 million per year at Stamford Bridge. Osimhen expressed his delight at joining the Blues: 'Chelsea is a massive club with incredible history and ambition. I'm excited to work with the manager and help bring trophies back to Stamford Bridge. The Premier League is the best league in the world, and I can't wait to test myself against the best defenders.' The 25-year-old's arrival solves Chelsea's long-standing striker problem and gives them a proven goalscorer who netted 31 goals in 39 appearances last season. Napoli president Aurelio De Laurentiis reluctantly agreed to the sale, stating 'Victor has been incredible for us, but we couldn't turn down this offer. We wish him all the best in England.' Chelsea fans are ecstatic about landing their top target, with many believing Osimhen can fire them back into Champions League contention.",
    reaction: "Chelsea fans celebrated outside Stamford Bridge after the announcement",
    medicalStatus: "Completed medical at Cobham Training Centre on August 9th",
    officialPresentation: "August 12, 2024 at Stamford Bridge",
    previousClubStats: "133 goals in 174 appearances for Napoli",
    jerseyNumber: "Will wear the number 9 shirt"
  },
  {
    id: "transfer004",
    playerName: "Jamal Musiala",
    fromClub: "Bayern Munich",
    toClub: "Arsenal",
    transferType: "Transfer",
    fee: "€90m",
    contractLength: "5 years",
    date: "2024-08-25",
    position: "Attacking Midfielder",
    age: 21,
    nationality: "Germany",
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Arsenal complete signing of Jamal Musiala from Bayern Munich",
    marketValue: "€100m",
    newsContent: "Arsenal have pulled off a major coup by signing Bayern Munich's creative maestro Jamal Musiala for €90 million. The 21-year-old German international has penned a five-year deal worth €16 million per year, becoming the Gunners' record signing. Musiala's decision to leave Bayern came as a surprise to many, but the young star explained his reasoning: 'Arsenal showed me a clear vision of how I fit into their project. Mikel Arteta's philosophy and the energy around the club convinced me this was the right move. I want to help Arsenal win the Premier League and Champions League.' The versatile attacker, who can play as a number 10, on either wing, or as a false 9, scored 17 goals and provided 11 assists in 45 appearances last season. Bayern Munich sporting director Max Eberl expressed disappointment: 'Jamal is a special talent and losing him is painful, but Arsenal made an offer we couldn't refuse in our current financial situation.' Arsenal manager Mikel Arteta hailed the signing as 'transformational,' believing Musiala's creativity and dribbling ability will unlock stubborn defenses.",
    reaction: "Arsenal supporters packed the Emirates Stadium for his unveiling",
    medicalStatus: "Completed medical at London Colney on August 24th",
    officialPresentation: "August 27, 2024 at Emirates Stadium",
    previousClubStats: "140 appearances, 44 goals, 32 assists for Bayern Munich",
    coachQuote: "Arteta: 'Musiala is exactly the type of player we needed to take us to the next level'"
  },
  {
    id: "transfer005",
    playerName: "Rafael Leão",
    fromClub: "AC Milan",
    toClub: "Newcastle United",
    transferType: "Transfer",
    fee: "€85m",
    contractLength: "4 years",
    date: "2024-08-30",
    position: "Left Winger",
    age: 25,
    nationality: "Portugal",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Newcastle United break transfer record for Rafael Leão",
    marketValue: "€90m",
    newsContent: "Newcastle United have smashed their transfer record by securing AC Milan winger Rafael Leão for €85 million. The Portuguese international, who was instrumental in Milan's Serie A title win in 2022, has signed a four-year contract worth €14 million per year on Tyneside. Leão's arrival represents Newcastle's ambition to establish themselves among Europe's elite following their Saudi-backed takeover. The 25-year-old speedster expressed his excitement: 'Newcastle's project is incredibly exciting. The passion of the fans and the club's ambitions in the Champions League attracted me here. I want to help bring success to St. James' Park and make the supporters proud.' Eddie Howe, Newcastle's manager, believes Leão will add a new dimension to their attack: 'Rafael is a world-class player who can change games single-handedly. His pace, skill, and ability to create chances will be vital for our European campaigns.' AC Milan were reluctant to sell their star player but needed to balance their books after recent investments. Leão scored 15 goals and registered 12 assists last season, making him one of Serie A's most dangerous attackers.",
    reaction: "Newcastle fans lined the streets of the city center to welcome their new star",
    medicalStatus: "Passed medical at Newcastle's training ground on August 29th",
    officialPresentation: "September 2, 2024 at St. James' Park",
    previousClubStats: "95 goals and 58 assists in 213 appearances for AC Milan",
    specialDetails: "Became the most expensive signing in Newcastle's history"
  },
  {
    id: "transfer006",
    playerName: "Khvicha Kvaratskhelia",
    fromClub: "Napoli",
    toClub: "Liverpool",
    transferType: "Transfer",
    fee: "€80m",
    contractLength: "5 years",
    date: "2024-07-05",
    position: "Left Winger",
    age: 23,
    nationality: "Georgia",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Liverpool sign Khvicha Kvaratskhelia in major coup",
    marketValue: "€85m",
    newsContent: "Liverpool have secured one of Europe's most exciting talents by signing Khvicha Kvaratskhelia from Napoli for €80 million. The Georgian winger, nicknamed 'Kvaradona' by Napoli fans, has agreed to a five-year contract worth €13 million per year at Anfield. The 23-year-old was a key figure in Napoli's historic Serie A triumph, dazzling fans with his pace, trickery, and eye for goal. Kvaratskhelia expressed his joy at joining the Reds: 'Liverpool is a club with incredible history and tradition. Playing at Anfield in front of the Kop is a dream for any footballer. I'm ready to give everything to help the team achieve success.' New Liverpool manager Arne Slot was instrumental in convincing the Georgian to move to Merseyside: 'Khvicha's style of play fits perfectly with our philosophy. His ability to beat defenders one-on-one and create chances will be crucial for our attacking system.' The signing addresses Liverpool's need for pace and creativity on the flanks following the departures of several key players. Napoli fans were heartbroken to lose their beloved 'Kvara,' but the club's financial situation made the sale inevitable.",
    reaction: "Liverpool supporters gathered at Anfield to welcome their new signing",
    medicalStatus: "Completed medical at AXA Training Centre on July 4th",
    officialPresentation: "July 8, 2024 at Anfield",
    previousClubStats: "26 goals and 19 assists in 78 appearances for Napoli",
    nickname: "Known as 'Kvaradona' for his mesmerizing dribbling skills"
  },
  {
    id: "transfer007",
    playerName: "Declan Rice",
    fromClub: "Arsenal",
    toClub: "Bayern Munich",
    transferType: "Transfer",
    fee: "€75m",
    contractLength: "4 years",
    date: "2024-08-15",
    position: "Defensive Midfielder",
    age: 25,
    nationality: "England",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Bayern Munich secure Declan Rice from Arsenal",
    marketValue: "€80m",
    newsContent: "Bayern Munich have strengthened their midfield by signing England captain Declan Rice from Arsenal for €75 million. The 25-year-old defensive midfielder has signed a four-year contract worth €12 million per year with the Bavarian giants. Rice's move to Munich came after Bayern's new sporting director Max Eberl identified him as the perfect replacement for the aging Joshua Kimmich in the holding midfield role. The England captain explained his decision: 'Bayern Munich is one of the biggest clubs in world football. The opportunity to work with world-class players and compete for the Champions League every year was too good to pass up. I believe this move will help me develop into an even better player.' Arsenal were reluctant to sell their captain but Bayern's offer was too substantial to refuse, especially given Arsenal's need to fund other transfers. Mikel Arteta paid tribute to Rice: 'Declan has been exceptional for us. His leadership qualities and defensive skills have been vital to our success. While we're sad to see him go, we understand his ambition to compete at the highest level in Europe.' Rice is expected to form a formidable partnership with Jamal Musiala in Bayern's midfield, bringing physicality and leadership to complement the German's creativity.",
    reaction: "Bayern Munich fans welcomed Rice as the missing piece in their midfield puzzle",
    medicalStatus: "Passed extensive medical tests in Munich on August 14th",
    officialPresentation: "August 17, 2024 at Allianz Arena",
    previousClubStats: "84 appearances, 7 goals, 8 assists for Arsenal",
    captaincy: "Expected to be considered for future Bayern Munich captaincy"
  },
  {
    id: "transfer008",
    playerName: "João Félix",
    fromClub: "Atlético Madrid",
    toClub: "Manchester United",
    transferType: "Transfer",
    fee: "€70m",
    contractLength: "5 years",
    date: "2024-08-20",
    position: "Attacking Midfielder",
    age: 24,
    nationality: "Portugal",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Manchester United complete João Félix signing",
    marketValue: "€75m",
    newsContent: "Manchester United have secured the signature of João Félix from Atlético Madrid for €70 million, ending the Portuguese star's turbulent spell in the Spanish capital. The 24-year-old attacking midfielder has signed a five-year contract worth €11 million per year at Old Trafford, reuniting with manager Ruben Amorim who previously worked with him at Benfica's youth academy. Félix expressed his relief at finally finding stability: 'Manchester United is a club where I can express my football freely. Ruben Amorim understands my game better than anyone, and I'm excited to work with him again. I want to show the world what I'm truly capable of.' The Portuguese international struggled to find consistency under Diego Simeone's defensive system at Atlético, leading to loan spells at Chelsea and Barcelona. United's new approach under Amorim, focusing on attacking football and player creativity, perfectly suits Félix's playing style. Amorim praised his former player: 'João is an incredibly talented footballer who was perhaps misunderstood in his previous environment. Here at United, we will build the team around his creativity and give him the freedom to flourish.' Atlético Madrid were happy to recoup most of their initial investment, having paid Benfica €126 million for Félix in 2019.",
    reaction: "United fans excited about Félix's creativity and flair returning to Old Trafford",
    medicalStatus: "Completed medical at Carrington Training Ground on August 19th",
    officialPresentation: "August 22, 2024 at Old Trafford",
    previousClubStats: "131 appearances, 34 goals, 18 assists for Atlético Madrid",
    reunion: "Reunites with Ruben Amorim after working together at Benfica"
  },
  {
    id: "transfer009",
    playerName: "Gavi",
    fromClub: "FC Barcelona",
    toClub: "Paris Saint-Germain",
    transferType: "Transfer",
    fee: "€65m",
    contractLength: "5 years",
    date: "2024-08-05",
    position: "Central Midfielder",
    age: 20,
    nationality: "Spain",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4be0253?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "PSG secure wonderkid Gavi from Barcelona",
    marketValue: "€70m",
    newsContent: "Paris Saint-Germain have pulled off a stunning coup by signing Barcelona wonderkid Gavi for €65 million. The 20-year-old Spanish midfielder has penned a five-year contract worth €10 million per year at the Parc des Princes, becoming PSG's statement signing following Kylian Mbappé's departure. Gavi's decision to leave his boyhood club Barcelona shocked the football world, but financial pressures at Camp Nou forced the sale. The young Spaniard explained his difficult choice: 'Leaving Barcelona was the hardest decision of my life, but I need to think about my career and development. PSG showed incredible faith in me and offered a project where I can grow as a player and leader.' Luis Enrique, PSG's manager, was instrumental in convincing Gavi to join: 'Gavi represents the future of Spanish football. His energy, pressing, and ability to drive forward from midfield is exactly what we need. He will be a cornerstone of our team for years to come.' Barcelona fans were devastated by the departure of their La Masia graduate, with many protesting outside Camp Nou. The club's financial troubles meant they couldn't match PSG's offer, despite Gavi being seen as a future captain. His departure marks another painful loss of homegrown talent for the Catalan giants.",
    reaction: "Barcelona fans organized protests against the club's board for allowing Gavi to leave",
    medicalStatus: "Passed medical in Paris on August 4th",
    officialPresentation: "August 7, 2024 at Parc des Princes",
    previousClubStats: "110 appearances, 5 goals, 14 assists for Barcelona",
    laMasia: "Product of Barcelona's famous La Masia academy"
  },
  {
    id: "transfer010",
    playerName: "Alexander Isak",
    fromClub: "Newcastle United",
    toClub: "Arsenal",
    transferType: "Transfer",
    fee: "€95m",
    contractLength: "5 years",
    date: "2024-08-28",
    position: "Striker",
    age: 25,
    nationality: "Sweden",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Arsenal secure Alexander Isak in late transfer window move",
    marketValue: "€100m",
    newsContent: "Arsenal have completed a dramatic late transfer window coup by signing Alexander Isak from Newcastle United for €95 million. The Swedish striker has signed a five-year contract worth €15 million per year, finally giving Arsenal the world-class number 9 they've been seeking. Isak's move came after intense negotiations throughout August, with Arsenal eventually meeting Newcastle's valuation. The 25-year-old expressed his excitement: 'Arsenal is a club with incredible tradition and ambition. Playing in the Champions League and competing for titles is what every footballer dreams of. I believe Arsenal is the perfect place for me to take my career to the next level.' Mikel Arteta was personally involved in convincing Isak to make the move: 'Alexander is the missing piece of our puzzle. His movement in the box, clinical finishing, and ability to link up play will make us a more complete team. He's exactly the profile of striker we've been looking for.' Newcastle were reluctant to sell their star striker but Arsenal's bid was too substantial to refuse, especially given their need to comply with Financial Fair Play regulations. Isak scored 25 goals in 38 appearances last season, establishing himself as one of the Premier League's most lethal finishers.",
    reaction: "Newcastle fans devastated to lose their star striker to a Premier League rival",
    medicalStatus: "Rushed medical completed at London Colney on August 27th",
    officialPresentation: "August 30, 2024 at Emirates Stadium",
    previousClubStats: "46 goals in 78 appearances for Newcastle United",
    deadline: "Signed just hours before the transfer window closed"
  },
  {
    id: "transfer011",
    playerName: "Pedri",
    fromClub: "FC Barcelona",
    toClub: "Manchester City",
    transferType: "Transfer",
    fee: "€85m",
    contractLength: "5 years",
    date: "2024-08-12",
    position: "Central Midfielder",
    age: 21,
    nationality: "Spain",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Manchester City complete Pedri signing from Barcelona",
    marketValue: "€90m",
    newsContent: "Manchester City have secured one of Europe's brightest midfield talents by signing Pedri from Barcelona for €85 million. The 21-year-old Spanish international has agreed to a five-year contract worth €14 million per year at the Etihad, becoming Pep Guardiola's marquee midfield signing. Pedri's departure from Barcelona comes amid the club's ongoing financial crisis, forcing them to sell another prized asset. The young midfielder expressed mixed emotions about leaving: 'Barcelona will always be in my heart, but Manchester City offered me the chance to work with Pep Guardiola, one of the greatest coaches in history. I couldn't pass up this opportunity to learn from him and compete at the highest level consistently.' Guardiola was personally involved in the negotiations, seeing Pedri as the perfect heir to David Silva's legacy: 'Pedri is a special player with incredible vision and technical ability. His understanding of space and timing reminds me of the great midfielders I've worked with. He will bring a new dimension to our play.' The signing represents another blow to Barcelona's academy system, with yet another La Masia graduate forced to leave due to financial constraints. City fans are excited about Pedri's arrival, viewing him as a long-term solution to their midfield creativity needs.",
    reaction: "City fans optimistic about Pedri filling the creative void in midfield",
    medicalStatus: "Comprehensive medical completed at City Football Academy on August 11th",
    officialPresentation: "August 14, 2024 at Etihad Stadium",
    previousClubStats: "154 appearances, 22 goals, 15 assists for Barcelona",
    guardiola: "Pep Guardiola personally convinced Pedri to join City"
  },
  {
    id: "transfer012",
    playerName: "Luka Modrić",
    fromClub: "Real Madrid",
    toClub: "Inter Miami",
    transferType: "Free Transfer",
    fee: "€0",
    contractLength: "2 years",
    date: "2024-07-01",
    position: "Central Midfielder",
    age: 38,
    nationality: "Croatia",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=300&fit=crop&crop=face",
    status: "Completed",
    announcement: "Luka Modrić joins Inter Miami after Real Madrid departure",
    marketValue: "€10m",
    newsContent: "Football legend Luka Modrić has made the surprise decision to join Inter Miami on a free transfer, ending his incredible 12-year journey with Real Madrid. The 38-year-old Croatian maestro has signed a two-year contract worth €8 million per year in Major League Soccer, reuniting with former teammates at David Beckham's franchise. Modrić explained his decision to move to MLS: 'After achieving everything possible with Real Madrid, I wanted a new challenge in a different environment. Inter Miami's project is exciting, and the opportunity to play alongside friends like Sergio Busquets and Jordi Alba made this decision easier. I still have the passion and energy to compete at the highest level.' The Ballon d'Or winner leaves Real Madrid as one of their greatest ever midfielders, having won 6 Champions League titles and 4 La Liga titles during his time at the Bernabéu. Real Madrid president Florentino Pérez paid tribute: 'Luka has been one of the most important players in our history. His elegance, leadership, and magical left foot will never be forgotten by Madridistas worldwide.' Inter Miami co-owner David Beckham expressed his delight: 'Signing Luka is a statement of our ambitions. His experience and quality will elevate not just our team, but the entire league.'",
    reaction: "Miami fans celebrated the signing of another football legend",
    medicalStatus: "Medical completed in Miami on June 30th",
    officialPresentation: "July 5, 2024 at DRV PNK Stadium",
    previousClubStats: "534 appearances, 39 goals, 85 assists for Real Madrid",
    legacy: "One of Real Madrid's greatest ever midfielders"
  }
  ]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>

        <section className='bg_section'>
          <h2>
            Champions League Final : Arsenal vs. Barcelona
          </h2>
          <p>
            The highly anticipated final is set to Sunday, June 10th. Will Aresnal Finally Win It's First Ever Champions League Or Is It Another Next Season?
          </p>

          <button>
            Read More
          </button>
        </section>

        <section className='news_section'>
          {news.slice(0, 4).map((list) => (
            <NewsCard key={list.id} pic={list.image} news_text={list.content.slice(0, 120) + '...'}/>
          ))}
        </section>

        <section className='livescore_section'>

          <h3>Live Scores</h3>

          <table border={1}>

            <thead>
              <tr>
                <th>Team</th>
                <th>Scores</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {liveScore.slice(0, 4).map((score) => (
                <tr key={score.id}>
                  <td>{score.homeTeam} - {score.awayTeam}</td>
                  <td>{score.homeScore} - {score.awayScore}</td>
                  <td>{score.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className='league_section'>

          <h3>League Table</h3>

          <table border={1}>

            <thead>
              <tr>
                <th>Position</th>
                <th>Club</th>
                <th>GD</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {leagueTable.slice(0, 4).map((league) => (
                <tr>
                  <td>{league.position}</td>
                  <td>{league.team}</td>
                  <td> + {league.goalDifference}</td>
                  <td>{league.points}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </section>

        <section className='transfer_section'>
          {transferNews.slice(0, 4).map((news) => (
            <TFNewsCard key={news.id} pic={news.image} text={news.newsContent.slice(0, 120)  + '...'}/>
          ))}
        </section>

      </main>
    </>
  )
}

export default Home