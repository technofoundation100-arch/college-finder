import React, { useEffect, useState } from "react";
import "../styles/College.css";

// Sample college data
const colleges = [
  {
    "name": "University Departments of Anna University, Chennai - CEG Campus, Sardar Patel Road, Guindy, Chennai 600 025",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1969,
    "courses": [
      "M.Tech",
      "B.E",
      "M.Arch",
      "BBA",
      "MCA"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "University Departments of Anna University, Chennai - ACT Campus, Sardar Patel Road, Guindy, Chennai 600 025",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1984,
    "courses": [
      "BBA",
      "M.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Information Technology",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "University Departments of Anna University, Chennai - MIT Campus, Chrompet, Tambaram Taluk, Kancheepuram District 600 044",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1993,
    "courses": [
      "MCA",
      "M.Com",
      "Ph.D",
      "B.Tech",
      "BBA",
      "M.E",
      "B.E"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Information Technology",
      "Biotechnology"
    ]
  },
  {
    "name": "Annamalai University Faculty of Engineering and Technology,Annamalai nagar,Cuddalore 608002",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 3.9,
    "established": 2001,
    "courses": [
      "Ph.D",
      "M.E",
      "M.Sc",
      "B.Com",
      "MBA",
      "BBA",
      "M.Com"
    ],
    "popularCourses": [
      "Biotechnology",
      "Environmental Engineering"
    ]
  },
  {
    "name": "University College of Engineering, Villupuram, Kakuppam, Villupuram District 605103",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.8,
    "established": 2012,
    "courses": [
      "MBA",
      "B.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Data Science",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "University College of Engineering, Tindivanam, Melpakkam, Tindivanam, Villupuram District 604001",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1956,
    "courses": [
      "B.Com",
      "MCA",
      "M.Arch",
      "B.Sc",
      "M.E",
      "BBA",
      "M.Sc",
      "MBA"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Electronics Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "University College of Engineering, Arni, Arni to Devikapuram Road, Thatchur, Arni, Thiruvannamalai District 632326",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1996,
    "courses": [
      "BBA",
      "Ph.D",
      "B.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Data Science"
    ]
  },
  {
    "name": "University College of Engineering, Kancheepuram, Ponnerikarai Campus, NH4, Chennai-Bangalore Highway, Karaipettai Village & Post, Kancheepuram District 631552",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1997,
    "courses": [
      "B.Arch",
      "M.E",
      "BBA",
      "Ph.D",
      "B.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Aalim Muhammed Salegh College of Engineering, Muthapudupet, Avadi IAF, Chennai 600055",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1957,
    "courses": [
      "M.Com",
      "B.Com",
      "M.Tech",
      "Ph.D",
      "B.Sc",
      "M.Arch",
      "M.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Jaya Engineering College, Thirunindravur, Chennai 602024",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1957,
    "courses": [
      "B.Sc",
      "M.Com",
      "M.Sc",
      "B.Com",
      "M.Arch",
      "B.E",
      "MCA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Jaya Institute of Technology, Kanchipadi Post, Thiruvallur-Tiruttani NH  Road, Thiruvallur District 631204",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.6,
    "established": 2012,
    "courses": [
      "B.Com",
      "B.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Aerospace Engineering",
      "Information Technology",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Prathyusha Engineering college, Aranvoyalkuppam, Thiruvallur District 602025",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2017,
    "courses": [
      "B.Sc",
      "B.Tech",
      "M.Arch",
      "B.Com"
    ],
    "popularCourses": [
      "Information Technology",
      "Civil Engineering"
    ]
  },
  {
    "name": "R M D Engineering College, Kavaraipettai, Gummidipoondi, Thiruvallur District 601206",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1970,
    "courses": [
      "M.Com",
      "M.Tech",
      "Ph.D",
      "B.Com",
      "B.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "R M K Engineering College, Kavaraipettai, Gummidipoondi, Thiruvallur District 601206",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1959,
    "courses": [
      "B.Tech",
      "B.Sc",
      "BBA",
      "M.Tech",
      "MCA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "S A Engineering College, Thiruverkadu, Chennai 600077",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1989,
    "courses": [
      "B.E",
      "MBA",
      "M.Arch",
      "M.Sc",
      "M.E"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Sri Ram Engineering College, Perumalpattu, Veppampattu (R S), Thiruvallur District 602 024",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 5.0,
    "established": 2006,
    "courses": [
      "B.Sc",
      "M.E",
      "B.Arch"
    ],
    "popularCourses": [
      "Biotechnology",
      "Textile Technology",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Sri Venkateswara College of Engineering and Technology, Thirupachur, Thiruvallur District 631203",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2012,
    "courses": [
      "M.Arch",
      "Ph.D",
      "MBA",
      "B.Tech",
      "B.E",
      "BBA",
      "B.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Mechanical Engineering",
      "Data Science",
      "Biomedical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Autonomous), Avadi-Alamathi Road, Chennai 600 062",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1969,
    "courses": [
      "M.Sc",
      "B.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Mechanical Engineering",
      "Artificial Intelligence",
      "Chemical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Velammal Engineering College (Autonomous), Ambattur-Redhills Road, Chennai 600066",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2004,
    "courses": [
      "M.E",
      "B.Arch",
      "M.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Sri Venkateswara Institute of Science and Technology, Kozhundalur, Thiruvallur District 631203",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1993,
    "courses": [
      "M.Sc",
      "M.Com",
      "B.Tech",
      "B.Sc",
      "M.E",
      "BBA",
      "MBA",
      "B.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Textile Technology",
      "Aerospace Engineering",
      "Environmental Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Avadi-Alamathi Road, Chennai 600 062",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2016,
    "courses": [
      "M.Arch",
      "B.Arch",
      "Ph.D",
      "B.Sc",
      "BBA",
      "M.Sc",
      "B.Tech",
      "B.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Robotics Engineering",
      "Civil Engineering",
      "Agricultural Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Gojan School of Business and Technology, Alamathi, Chennai 600062",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1980,
    "courses": [
      "Ph.D",
      "B.E",
      "B.Arch",
      "M.E",
      "MCA",
      "B.Com",
      "M.Tech",
      "MBA"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Textile Technology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "SAMS College of Engineering and Technology, Panappakkam, Chennai-Tirupathi Road, Uthukkottai Taluk, Thiruvallur District 601102",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1953,
    "courses": [
      "B.E",
      "M.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "P M R Engineering College, Adayalampattu, Maduravoyal , Vanagaram, Chennai 600095",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2014,
    "courses": [
      "B.Tech",
      "MBA",
      "M.Tech",
      "Ph.D",
      "B.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Textile Technology",
      "Information Technology"
    ]
  },
  {
    "name": "J N N Institute of Engineering, Ushaa Garden, Kannigaipair Village, Uthukottai Taluk, Thiruvallur District 601102",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1998,
    "courses": [
      "BBA",
      "M.Tech",
      "B.Com",
      "M.Sc",
      "Ph.D",
      "B.Arch",
      "B.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Biotechnology",
      "Information Technology"
    ]
  },
  {
    "name": "St. Peters College of Engineering and Technology, College Road, Avadi, Chennai 600 054",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1996,
    "courses": [
      "MCA",
      "M.E",
      "M.Sc",
      "B.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Civil Engineering",
      "Agricultural Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "R M K College of Engineering and Technology, Puduvoyal, Gummidipoondi Taluk, Thiruvallur District 601206",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 2019,
    "courses": [
      "M.Tech",
      "BBA",
      "MCA",
      "B.Tech",
      "B.Com",
      "MBA",
      "B.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Civil Engineering",
      "Environmental Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Vel Tech, Avadi-Alamathi Road, Chennai 600062",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1959,
    "courses": [
      "M.Sc",
      "M.Tech",
      "B.Sc",
      "M.Arch",
      "MBA",
      "BBA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Aerospace Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Annai Veilankannis College of Engineering, Gandhi Road, Nedungundram, Chennai 600048",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1988,
    "courses": [
      "B.Tech",
      "MBA",
      "M.Tech",
      "B.E",
      "B.Sc",
      "M.Arch",
      "B.Com",
      "M.Sc"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Mechanical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Annai Mira College of Engineering and Technology, Arcot Road, Arappakkam Village, Walaja Taulk, Vellore District 632 517",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1958,
    "courses": [
      "Ph.D",
      "M.E",
      "MBA",
      "B.E",
      "M.Com",
      "B.Arch",
      "B.Com"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Jeppiaar Institute Of Technology, Kunnam Village, Sriperumpudur Taluk, Kancheepuram District 631604",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1963,
    "courses": [
      "B.Sc",
      "M.Sc",
      "Ph.D",
      "MCA",
      "B.Arch",
      "M.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Data Science"
    ]
  },
  {
    "name": "R V S Padmavathy College of Engineering and Technology, Senthil Pakkam Village, Roshanagaram  Post, Madarapakkam Via, Gummidipoondi Taluk, Thiruvallur District 601202",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1959,
    "courses": [
      "B.Tech",
      "M.Arch",
      "M.E",
      "B.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Chemical Engineering"
    ]
  },
  {
    "name": "St. Josephs Institute of Technology, Jeppiaar Nagar, Old Mahabalipuram Road (OMR), Chennai 600119",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1968,
    "courses": [
      "B.Tech",
      "B.Arch",
      "M.Arch",
      "Ph.D",
      "M.Com",
      "B.Sc"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Textile Technology",
      "Agricultural Engineering",
      "Robotics Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Sri Jayaram Institute of Engineering and Technology, 51 N, Elavur, 58N, Natham, Gummidipoondi Taluk, Thiruvallur District 601201",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1997,
    "courses": [
      "B.Com",
      "B.Arch",
      "B.Sc",
      "Ph.D",
      "B.E",
      "M.Com"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Environmental Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Arignar Anna Institute of Science and Technology, Pennalur, Sriperumpudur, Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2012,
    "courses": [
      "M.Com",
      "M.Arch",
      "B.Sc",
      "M.E"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Artificial Intelligence",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "D M I College of Engineering, Palanchoor, Nazrethpet, Chennai 602103",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2007,
    "courses": [
      "B.Sc",
      "B.Arch",
      "B.Tech",
      "M.Arch",
      "M.Com",
      "M.Tech",
      "MBA"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Jeppiaar Maamallan Engineering College, Vadamangalam Post, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1990,
    "courses": [
      "M.Tech",
      "BBA",
      "M.E",
      "MBA",
      "M.Com",
      "M.Arch",
      "B.Sc",
      "B.E"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Agricultural Engineering",
      "Electrical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Kings Engineering College, Sriperumpudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1972,
    "courses": [
      "B.Com",
      "MBA",
      "M.E",
      "M.Arch",
      "B.Tech",
      "M.Sc",
      "B.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Electrical Engineering",
      "Aerospace Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Pallavan College of Engineering, Thimmasamudram, Kancheepuram District 631502",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1999,
    "courses": [
      "M.Arch",
      "B.Com",
      "B.Tech",
      "BBA",
      "M.E",
      "Ph.D",
      "B.E",
      "MBA"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Robotics Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Panimalar Engineering College, Nazarethpet, Poonamallee, Chennai 602103",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1967,
    "courses": [
      "B.Arch",
      "M.Com",
      "B.E",
      "MBA",
      "B.Com"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Data Science",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Rajalakshmi Engineering College (Autonomous), Thandalam, Sriperumpudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1972,
    "courses": [
      "M.Sc",
      "M.Com",
      "BBA",
      "B.Sc"
    ],
    "popularCourses": [
      "Information Technology",
      "Computer Science Engineering",
      "Agricultural Engineering",
      "Electrical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Rajiv Gandhi College of Engineering, Nemili, Sriperumpudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1997,
    "courses": [
      "B.E",
      "B.Tech",
      "M.Tech",
      "B.Com",
      "M.Arch",
      "MCA",
      "B.Arch"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Aerospace Engineering",
      "Robotics Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "S K R Engineering College, Poonamallee, Chennai 600123",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1957,
    "courses": [
      "B.Com",
      "M.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Information Technology",
      "Biotechnology",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Sakthi Mariamman Engineering College, Narayanasamy Nagar, Thandalam, Chennai 602105",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2012,
    "courses": [
      "M.E",
      "Ph.D",
      "B.Sc",
      "B.Com",
      "M.Arch",
      "M.Sc",
      "B.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Electronics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Saveetha Engineering College (Autonomous), Thandalam, Sriperumpudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1997,
    "courses": [
      "BBA",
      "B.Sc",
      "B.Com",
      "M.Arch",
      "M.Com",
      "MCA",
      "Ph.D"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Data Science",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Sree Sastha Institute of Engineering and Technology, Chembarambakkam, Chennai 600123",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1965,
    "courses": [
      "Ph.D",
      "MBA",
      "M.Tech",
      "B.E",
      "M.Sc",
      "M.Arch",
      "MCA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Data Science",
      "Electronics Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Sri Muthukumaran Institute of Technology, Near Mangadu, Chennai 600069",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1970,
    "courses": [
      "B.Sc",
      "Ph.D",
      "M.Arch",
      "MBA",
      "B.Arch",
      "B.Tech",
      "M.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Mechanical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Sri Venkateswara College of Engineering (Autonomous), Post Bag No.1, Chennai-Bengaluru High Road, Pennalur, Irungattukottai S.O., Sriperumbudur Taluk, Kancheepuram District 602117",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1959,
    "courses": [
      "M.Arch",
      "B.Sc",
      "M.Sc",
      "BBA",
      "B.Com",
      "M.E"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Data Science",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Jaya College of Engineering and Technology, Parivakkam, Poonamallee, Chennai 600056",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1970,
    "courses": [
      "M.Sc",
      "Ph.D",
      "BBA",
      "MCA",
      "M.Com",
      "B.Com",
      "M.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "P B College of Engineering, Irungkattukottai, Sriperumpudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2001,
    "courses": [
      "M.Com",
      "B.Arch",
      "M.E",
      "M.Sc",
      "M.Arch",
      "M.Tech"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Loyola Institute of Technology, Mevaloorkuppam, B Village, Palanchoor, Nazarethpet Post, Chennai 600123",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 5.0,
    "established": 1958,
    "courses": [
      "M.Arch",
      "B.Com",
      "B.Arch",
      "M.E",
      "M.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Biotechnology",
      "Data Science",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "P T Lee Chengalvaraya Naicker College of Engineering and Technology, Oovery, Veliyur Post, Kancheepuram District 631 502",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2019,
    "courses": [
      "B.E",
      "MCA",
      "M.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Biotechnology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Alpha College of Engineering, Dr. Grace George Nagar, Udayavar Koil Street, Thirumazhisai, Poonamalle, Chennai 602107",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1973,
    "courses": [
      "M.Arch",
      "B.Sc",
      "M.Com",
      "M.Sc",
      "Ph.D",
      "MBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Information Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Indira Institute of Engineering and Technology, VGR Gardens, Pandur, Thiruvallur District 631203",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2002,
    "courses": [
      "M.E",
      "B.Sc",
      "M.Arch",
      "B.Com",
      "B.E",
      "B.Tech",
      "M.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Apollo Engineering College, Mevaloorkuppam, Valarpuram Post, Sriperumpudur, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1979,
    "courses": [
      "M.E",
      "M.Arch",
      "M.Tech",
      "M.Sc",
      "B.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Panimalar Institute of Technology, Nazarethpet, Poonamallee, Chennai 602103",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.0,
    "established": 2012,
    "courses": [
      "M.Arch",
      "B.Sc",
      "MBA",
      "MCA",
      "Ph.D"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biotechnology",
      "Textile Technology",
      "Chemical Engineering"
    ]
  },
  {
    "name": "A R M College of Engineering and Technology, Sattamangalam, Maraimalainagar, Kancheepuram District 603209",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.8,
    "established": 2008,
    "courses": [
      "M.Sc",
      "B.Arch",
      "Ph.D",
      "B.Com",
      "B.Sc"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Adhi College of Engineering and Technology, Pazhayaseevaram, Madura Sankarapuram Village, Kancheepuram District 631605",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1957,
    "courses": [
      "MBA",
      "B.Tech",
      "MCA",
      "B.Com"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Electrical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Indira Gandhi College of Engineering and Technology for Women,  Chengalpattu-Kancheepuram High Road, Kancheepuram District 603101",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1987,
    "courses": [
      "M.Tech",
      "B.E",
      "B.Arch",
      "M.Arch",
      "BBA",
      "M.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Electronics Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Velammal Institute of Technology, Chennai-Kolkatta Highway, Panchetti Village, Ponneri Taluk, Thiruvallur District 601204",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1970,
    "courses": [
      "B.E",
      "B.Arch",
      "B.Com",
      "B.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "GRT Institute of Engineering and Technology, GRT Mahalakshmi Nagar, Chennai-Tirupathi Highway, Tiruttani Taluk, Thiruvallur District 631209",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1973,
    "courses": [
      "M.Sc",
      "MBA",
      "M.E"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Environmental Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "T J S Engineering College, Peruvoyal, Near Kavaraipettai, Gummidipoondi Taluk, Thiruvallur District 601206",
    "district": "Thiruvallur",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1959,
    "courses": [
      "B.Sc",
      "M.Com",
      "B.Com",
      "MBA",
      "MCA",
      "M.E",
      "B.Tech",
      "BBA"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Madha Institute of Engineering and Technology, Erandamkattalai Village, Sadhananthapuram, Thandalam Post, Chennai  602101",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1986,
    "courses": [
      "M.Arch",
      "B.E",
      "MBA",
      "M.Sc",
      "B.Tech",
      "B.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Biomedical Engineering",
      "Civil Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Mohamed Sathak A J College of Engineering, Old Mahabalipuram Road (OMR), Egattur, Kancheepuram District 603103",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1982,
    "courses": [
      "B.Tech",
      "M.Tech",
      "BBA",
      "B.Com"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Environmental Engineering",
      "Electronics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Anand Institute of Higher Technology, Old Mahabalipuram Road (OMR), Kazhipattur, Kancheepuram District  603103",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1987,
    "courses": [
      "M.Tech",
      "B.Com",
      "M.Com",
      "M.Sc",
      "B.Arch",
      "M.E",
      "BBA",
      "B.Sc"
    ],
    "popularCourses": [
      "Data Science",
      "Biotechnology",
      "Chemical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Easwari Engineering College (Autonomous), Ramapuram, Chennai 600089",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1991,
    "courses": [
      "B.Sc",
      "M.Arch",
      "B.Tech",
      "MBA",
      "M.E",
      "MCA"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Electronics Engineering",
      "Mechanical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Jeppiar Engineering College, Old Mahabalipuram Road (OMR), Chennai 600119",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2018,
    "courses": [
      "B.E",
      "B.Arch",
      "BBA",
      "M.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Robotics Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Jerusalem College of Engineering (Autonomous), Narayanapuram, Pallikaranai, Chennai 600 100",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1976,
    "courses": [
      "M.E",
      "Ph.D",
      "M.Arch",
      "MBA",
      "BBA"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Information Technology",
      "Aerospace Engineering",
      "Chemical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Meenakshi Sundararajan Engineering College, Kodambakkam, Chennai 600024",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1989,
    "courses": [
      "M.Arch",
      "M.E",
      "Ph.D",
      "B.E"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Electronics Engineering",
      "Robotics Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Misrimal Navajee Munoth Jain Engineering College, Rajiv Gandhi Salai (OMR), Thorappakkam, Chennai 600096",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1966,
    "courses": [
      "MBA",
      "B.Com",
      "M.Sc",
      "M.Arch",
      "B.Arch",
      "B.Tech",
      "BBA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Artificial Intelligence",
      "Agricultural Engineering",
      "Biomedical Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "K C G College of Technology, Karappakkam, Chennai 600096",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1970,
    "courses": [
      "B.Com",
      "Ph.D",
      "M.Arch",
      "M.Com",
      "M.Sc",
      "BBA",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Chemical Engineering",
      "Textile Technology",
      "Robotics Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "SMK  Fomra Institute of Technology,Fomra Nagar, OMR,(IT Express Highway),Kelambakkam,Chennai- 603103",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1991,
    "courses": [
      "MCA",
      "B.Com",
      "M.Sc"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Sri Sivasubramaniya Nadar College of Engineering (Autonomous), Kalavakkam, Old Mahabalipuram Road (OMR), Kancheepuram District 603110",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1998,
    "courses": [
      "M.E",
      "B.Arch",
      "B.Sc",
      "MBA",
      "MCA",
      "B.Com"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Environmental Engineering",
      "Electrical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Agni College of Technology, Old Mahabalipuram Road (OMR), Thalambur Village, Kancheepuram District 603103",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2007,
    "courses": [
      "MCA",
      "B.Sc",
      "B.Com"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Artificial Intelligence",
      "Biotechnology"
    ]
  },
  {
    "name": "St. Joseph\u00e2\\[Euro](TM)s College of Engineering, Old Mahabalipuram Road (OMR), Chennai 600 119",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.3,
    "established": 2010,
    "courses": [
      "B.Arch",
      "M.Com",
      "M.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Textile Technology"
    ]
  },
  {
    "name": "Thangavelu Engineering College, Karappakkam, Chennai 600097",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2007,
    "courses": [
      "Ph.D",
      "B.E",
      "MCA",
      "BBA",
      "B.Sc",
      "MBA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Artificial Intelligence",
      "Textile Technology"
    ]
  },
  {
    "name": "Jeppiaar SRR Engineering College, Old Mahabalipuram Road, Kancheepuram District 603103",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.1,
    "established": 2018,
    "courses": [
      "M.Arch",
      "BBA",
      "B.Sc",
      "B.Com",
      "MBA"
    ],
    "popularCourses": [
      "Information Technology",
      "Aerospace Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Central Institute of Plastics Engineering and Technology (CIPET), Guindy, Chennai 600032",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1950,
    "courses": [
      "M.Tech",
      "MCA",
      "M.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Chemical Engineering",
      "Information Technology",
      "Textile Technology"
    ]
  },
  {
    "name": "Dhanalakshmi Srinivasan College of Engineering and Technology, East Coast Road, Poonjeri, Chennai 603104",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1986,
    "courses": [
      "BBA",
      "B.Arch",
      "M.Tech",
      "MCA",
      "M.Arch",
      "B.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Data Science",
      "Civil Engineering",
      "Agricultural Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Sri Sai Ram Institute of Technology, West Tambaram, Chennai 600044",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2009,
    "courses": [
      "M.E",
      "B.Arch",
      "M.Arch"
    ],
    "popularCourses": [
      "Textile Technology",
      "Data Science",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "St. Joseph College of Engineering, Trinity Campus, Nemili, Sriperumpudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1977,
    "courses": [
      "MCA",
      "B.Sc",
      "B.Com",
      "MBA",
      "B.E",
      "M.Tech",
      "BBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Vi Institute of Technology, Sirunkundram Village & Post, Chengalput Taluk, Kancheepuram District 603108",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2006,
    "courses": [
      "B.Tech",
      "BBA",
      "M.E",
      "B.Sc",
      "M.Sc",
      "B.E",
      "B.Com",
      "M.Arch"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Environmental Engineering",
      "Computer Science Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "ARS College of Engineering, Maraimalai Nagar Post, Kancheepuram District 603209",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1984,
    "courses": [
      "B.Arch",
      "Ph.D",
      "B.Tech",
      "B.Sc",
      "M.Com",
      "B.Com"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Chennai Institute of Technology, Puduper Village, Nandambakkam Post, Kundrathur, Chennai 600069",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1987,
    "courses": [
      "M.Sc",
      "M.E",
      "M.Tech",
      "M.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Robotics Engineering",
      "Biomedical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Adhiparasakthi Engineering College, Melmaruvathur, Kancheepuram District 603319",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1991,
    "courses": [
      "B.Sc",
      "B.Arch",
      "M.Com",
      "M.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Information Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Annai Terasa College of Engineering, Thirunavalur, Villupuram District 607204",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1985,
    "courses": [
      "M.E",
      "M.Sc",
      "M.Arch",
      "Ph.D",
      "B.Arch",
      "B.Tech"
    ],
    "popularCourses": [
      "Information Technology",
      "Biotechnology",
      "Biomedical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Dhanalakshmi College of  Engineering, Manimangalam, Chennai 601301",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1970,
    "courses": [
      "B.Com",
      "M.E",
      "M.Arch",
      "Ph.D"
    ],
    "popularCourses": [
      "Data Science",
      "Electronics Engineering",
      "Environmental Engineering",
      "Biomedical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Dr. Pauls Engineering College, Pauls Nagar, Pulichapallam Village, Vanur Taluk, Villupuram District 605109",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1977,
    "courses": [
      "M.Sc",
      "M.Tech",
      "M.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "G K M College of  Engineering and Technology, Alappakkam-Mappedu Road, Chennai 600063",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2003,
    "courses": [
      "M.Sc",
      "Ph.D",
      "B.E",
      "MBA",
      "M.Arch",
      "B.Tech",
      "M.Tech"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Environmental Engineering",
      "Biotechnology",
      "Computer Science Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "I F E T College of Engineering (Autonomous), Gangarampalayam, Villupuram District 605108",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1955,
    "courses": [
      "B.Sc",
      "M.Tech",
      "M.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Biotechnology"
    ]
  },
  {
    "name": "Karpagavinayaga College of Engineering and Technology, Palayanoor Post, Maduranthagam Taluk, Kancheepuram District 603308",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2010,
    "courses": [
      "B.Arch",
      "BBA",
      "Ph.D",
      "MBA",
      "M.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Agricultural Engineering",
      "Biotechnology",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Madha Engineering College, Kundrathur, Chennai 600069",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1984,
    "courses": [
      "B.Tech",
      "M.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Biotechnology",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Mailam Engineering College, Mailam, Villupuram District 604304",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2007,
    "courses": [
      "M.Sc",
      "MBA",
      "B.Com",
      "B.Arch"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Data Science",
      "Mechanical Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Sri Venkateswaraa College Of Technology, BHB Nagar, Vadakkal Village, Pondur Post, Sriperumbudur Taluk, Kancheepuram District 602105",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1969,
    "courses": [
      "M.E",
      "B.Sc",
      "B.Com",
      "M.Com",
      "Ph.D",
      "MBA"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Biotechnology",
      "Computer Science Engineering",
      "Textile Technology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Prince Shri Venkateshwara  Padmavathy Enginering College, Ponmar, Chennai 600048",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.9,
    "established": 2005,
    "courses": [
      "M.Sc",
      "MBA",
      "Ph.D",
      "B.Tech",
      "B.Com",
      "M.Com",
      "M.Tech"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Data Science",
      "Mechanical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "T S M Jain College of Technology, Melur Village, Kallakurichi, Villupuram District 606201",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1985,
    "courses": [
      "M.Arch",
      "M.Com",
      "M.E",
      "Ph.D",
      "B.Arch",
      "B.E",
      "BBA",
      "M.Tech"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Jaya Sakthi Engineering College, Thirunindravur, Chennai 602024",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1963,
    "courses": [
      "B.Arch",
      "M.Tech",
      "B.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Robotics Engineering",
      "Biomedical Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Shri Andal Alagar College of Engineering, Mamandur, Kancheepuram District 603111",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.1,
    "established": 2017,
    "courses": [
      "BBA",
      "M.Com",
      "B.Com",
      "B.Arch",
      "M.Tech",
      "M.E",
      "M.Arch",
      "B.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Robotics Engineering",
      "Civil Engineering",
      "Information Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Sri Sairam Enginering College, West Tambaram, Chennai 600044",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.8,
    "established": 2015,
    "courses": [
      "B.Com",
      "B.Tech",
      "Ph.D",
      "B.Arch",
      "B.E",
      "M.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Tagore Engineering College, Rathnamangalam, Vandalur Post, Chennai 600048",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2012,
    "courses": [
      "M.Sc",
      "M.Com",
      "B.E",
      "M.Tech"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Biotechnology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "V R S College of Engineering and Technology, Arasur, Villupuram District 607107",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1979,
    "courses": [
      "Ph.D",
      "M.Tech",
      "MBA",
      "M.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Electronics Engineering",
      "Data Science"
    ]
  },
  {
    "name": "SRM Valliammai Engineering College (Autonomous), Kattankulathur, Chennai 603203",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1984,
    "courses": [
      "B.Com",
      "B.Sc",
      "M.E",
      "M.Tech",
      "M.Arch",
      "B.Arch",
      "B.E",
      "BBA"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Civil Engineering",
      "Environmental Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Dhaanish Ahmed College of Engineering, Padappai, Chennai 601301",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1955,
    "courses": [
      "M.Tech",
      "MCA",
      "Ph.D"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Mechanical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Sri Ramanujar Engineering College, Vandalur, Kolappakkam, Chennai 600048",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.1,
    "established": 2011,
    "courses": [
      "B.Sc",
      "M.E",
      "MCA",
      "MBA",
      "M.Arch",
      "B.Arch",
      "B.Tech",
      "Ph.D"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Information Technology"
    ]
  },
  {
    "name": "Sri Krishna Engineering College, Panappakkam, Padappai, Chennai 601301",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2002,
    "courses": [
      "MBA",
      "MCA",
      "M.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Electronics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "E S Engineering College, Chennai Trunk Road, Ayyankoilpattu, Villupuram District 605602",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1952,
    "courses": [
      "BBA",
      "B.Com",
      "M.Sc",
      "Ph.D",
      "MBA",
      "B.E"
    ],
    "popularCourses": [
      "Data Science",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Maha Bharathi Engineering College, A Vasudevanur, Chinnasalem, Kallakurichi Taluk, Villupuram District 606201",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1962,
    "courses": [
      "B.Tech",
      "B.Sc",
      "B.Arch",
      "B.Com",
      "MBA",
      "M.Arch"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "New Prince Shri Bhavani College of Engineering and Technology, Vengaivasal Main Road, Gowriwakkam, Chennai 600073",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1967,
    "courses": [
      "M.Tech",
      "M.Sc",
      "B.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Textile Technology",
      "Mechanical Engineering",
      "Artificial Intelligence",
      "Electrical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Rajalakshmi Institute of Technology, Irulapalayam, Kuthampakkam Post, Kancheepuram District 602107",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2014,
    "courses": [
      "M.E",
      "B.Tech",
      "M.Com",
      "B.Arch",
      "Ph.D",
      "M.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Surya Group of Institutions, GST Road, Vikravandi Village, Villupuram District 605652",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1964,
    "courses": [
      "B.Arch",
      "M.Com",
      "MBA",
      "M.E",
      "B.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Textile Technology"
    ]
  },
  {
    "name": "Balaji Institute of Engineering and Technology, Thandalam Village, Thiruporur, Kancheepuram District 603110",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1953,
    "courses": [
      "BBA",
      "MBA",
      "MCA",
      "M.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Civil Engineering",
      "Artificial Intelligence",
      "Biotechnology",
      "Electronics Engineering"
    ]
  },
  {
    "name": "A R Engineering College, Vadakuchipalayam, Kappiyampuliyur Post, Villupuram District 605601",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1978,
    "courses": [
      "B.E",
      "M.Com",
      "Ph.D",
      "M.E"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Artificial Intelligence",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Rrase College of Engineering, Padappai, Chennai 601301",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1994,
    "courses": [
      "B.E",
      "M.Tech",
      "B.Tech",
      "M.Com",
      "M.Sc",
      "B.Sc"
    ],
    "popularCourses": [
      "Textile Technology",
      "Biotechnology",
      "Environmental Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Sree Krishna College of Engineering, Anaicut Post, Unnai Village, Vellore District 632101",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1957,
    "courses": [
      "B.Arch",
      "B.Tech",
      "B.E",
      "MBA",
      "B.Sc",
      "Ph.D",
      "MCA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Aerospace Engineering",
      "Mechanical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "S R I College of Engineering and Technology, Birudur, Vandavasi Taluk, Thiruvannamalai District 604408",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1992,
    "courses": [
      "M.Com",
      "B.Tech",
      "BBA",
      "M.Arch",
      "MCA",
      "B.Com"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Electronics Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "A K T Memorial College of Engineering and Technology, Neelamangalam Village, Kallakurichi Post & Taluk, Villupuram District 606202",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.9,
    "established": 2013,
    "courses": [
      "B.Tech",
      "M.Sc",
      "M.E",
      "B.Arch",
      "MBA",
      "M.Com"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Robotics Engineering",
      "Chemical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Prince Dr. K Vasudevan College of Engineering and Technology, Medavakkam-Mambakkam Road, Ponmar, Chennai 600048",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1975,
    "courses": [
      "BBA",
      "B.Tech",
      "B.Sc",
      "M.E",
      "M.Com",
      "B.Arch",
      "Ph.D"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Computer Science Engineering",
      "Biotechnology",
      "Data Science",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Chendu College of Engineering & Technology, Zamin Endathur Village, Madurantakam Taluk, Kancheepuram District 603331",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2003,
    "courses": [
      "MBA",
      "B.E",
      "M.Tech",
      "B.Tech",
      "M.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Textile Technology",
      "Biotechnology"
    ]
  },
  {
    "name": "Sri Rangapoopathi College of Engineering, Alampoondi Village, Gingee, Villupuram District 604151",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1951,
    "courses": [
      "B.Com",
      "MCA",
      "B.Arch",
      "B.Sc",
      "B.E",
      "Ph.D",
      "M.E",
      "BBA"
    ],
    "popularCourses": [
      "Data Science",
      "Chemical Engineering",
      "Artificial Intelligence",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Jawahar Engineering College, Kaveri Rangan Nagar, Saligramam, Chennai 600093",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 5.0,
    "established": 1974,
    "courses": [
      "Ph.D",
      "BBA",
      "B.E",
      "M.Sc",
      "B.Tech"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Data Science",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Saraswathy College of Engineering and Technology, NH-45, Main Road, Olakkur, Tindivanam Taluk, Villupuram District 604307",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1984,
    "courses": [
      "Ph.D",
      "M.Com",
      "M.Arch",
      "B.E",
      "B.Tech",
      "M.E",
      "MCA"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Loyola-ICAM College of Engineering and Technology, Loyola College Campus, Nungambakkam, Chennai 600034",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2012,
    "courses": [
      "Ph.D",
      "B.Sc",
      "M.Com",
      "B.Tech"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Environmental Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "PERI Institute of Technology, Mannivakkam, West Tambaram, Chennai 600048",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.5,
    "established": 2009,
    "courses": [
      "M.Sc",
      "Ph.D",
      "M.Arch",
      "M.Tech",
      "M.Com",
      "B.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Agricultural Engineering",
      "Information Technology",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Adhiparasakthi College of Engineering, Kalavai, Vellore District 632506",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2007,
    "courses": [
      "MBA",
      "B.Sc",
      "MCA",
      "M.Tech",
      "Ph.D",
      "BBA",
      "B.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Mechanical Engineering",
      "Computer Science Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Arulmigu  Meenakshi Amman College of Engineering, Vadamavandal,Thiruvannamalai District 604410",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2011,
    "courses": [
      "MCA",
      "B.Arch",
      "BBA",
      "M.E",
      "B.Sc",
      "B.Tech",
      "MBA"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Chemical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Arunai Engineering College, Mathur, Thiruvannamalai District 606603",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1984,
    "courses": [
      "B.Com",
      "M.E",
      "B.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Information Technology",
      "Textile Technology",
      "Electronics Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "C Abdul Hakeem College of Engineering and Technology, Melvisharam, Vellore District 632509",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2003,
    "courses": [
      "M.Com",
      "B.Sc",
      "M.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Biomedical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "G G R College of Engineering, Pillayarkuppam, Perumugai Post, Vellore District 632009",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1995,
    "courses": [
      "MBA",
      "B.Arch",
      "B.Tech",
      "BBA",
      "M.Com",
      "B.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Computer Science Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Ganadipathy Tulsi\u00e2\\[Euro](TM)s Jain Engineering College, Kaniyambadi, Vellore District 632102",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1987,
    "courses": [
      "B.Arch",
      "Ph.D",
      "M.Tech",
      "M.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Aerospace Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Arunai College of Engineering, Mathur, Thiruvannamalai District 606603",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1989,
    "courses": [
      "M.Com",
      "Ph.D",
      "BBA",
      "B.Arch",
      "B.E",
      "B.Com",
      "MCA",
      "M.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Biomedical Engineering",
      "Biotechnology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Meenakshi College of Engineering, Vembuliamman Koil Street, K K Nagar (West), Chennai 600078",
    "district": "Chennai",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1975,
    "courses": [
      "M.Com",
      "Ph.D",
      "B.Tech",
      "M.Arch",
      "M.E",
      "M.Sc",
      "B.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Priyadarshini Engineering College, Vaniyambadi Post, Vellore District 635751",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1957,
    "courses": [
      "MCA",
      "B.Tech",
      "BBA",
      "B.Com",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "S K P Engineering College, Thiruvannamalai District 606611",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1965,
    "courses": [
      "MCA",
      "B.Sc",
      "M.Com",
      "B.Com",
      "Ph.D",
      "MBA",
      "B.Tech",
      "B.E"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Data Science",
      "Textile Technology"
    ]
  },
  {
    "name": "Sri Balaji Chockalingam Engineering College, Arni, Thiruvannamalai District 632317",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1988,
    "courses": [
      "M.Com",
      "MBA",
      "B.E",
      "M.Sc",
      "MCA",
      "M.Arch",
      "B.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Computer Science Engineering",
      "Civil Engineering",
      "Textile Technology",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Sri Nandhanam College of Engineering and Technology, Tiruppattur, Vellore District 635601",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 3.3,
    "established": 2011,
    "courses": [
      "Ph.D",
      "B.Sc",
      "B.Tech",
      "M.E"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Saraswathi Velu College of Engineering, Melvenkatapuram Village, Sholingur, Vellore District 631102",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1977,
    "courses": [
      "M.E",
      "BBA",
      "M.Sc",
      "B.Tech",
      "B.Arch",
      "M.Arch",
      "MBA",
      "M.Com"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Aerospace Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Thanthai Periyar Government Institute of Technology , Bagayam, Vellore District 632002",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.5,
    "established": 2000,
    "courses": [
      "M.Tech",
      "B.Arch",
      "M.Sc",
      "BBA",
      "M.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Computer Science Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Thirumalai Engineering College, Kilambi, Kancheepuram District 631551",
    "district": "Kancheepuram",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1963,
    "courses": [
      "B.E",
      "Ph.D",
      "B.Arch",
      "B.Tech",
      "BBA",
      "MBA",
      "M.Com"
    ],
    "popularCourses": [
      "Textile Technology",
      "Artificial Intelligence",
      "Data Science",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Thiruvalluvar College of Engineering and Technology, Vandavasi, Thiruvannamalai District 604505",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1982,
    "courses": [
      "M.E",
      "B.Com",
      "B.Sc",
      "BBA",
      "M.Tech",
      "B.Tech",
      "M.Com",
      "MCA"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Data Science",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Bharathidasan Engineering College, Nattrampalli Post, Vellore District 635854",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1961,
    "courses": [
      "B.Arch",
      "MBA",
      "MCA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Kingston Engineering College, Chithoor Main Road, Christianpet Village, Katpadi Taluk,  Vellore District 632059",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1951,
    "courses": [
      "M.Tech",
      "M.Arch",
      "Ph.D"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Artificial Intelligence",
      "Aerospace Engineering",
      "Electrical Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Sri Sapthagiri Institute of Technology, Ocheri, Arakonam Taluk, Vellore District 632531",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 3.2,
    "established": 2015,
    "courses": [
      "M.Tech",
      "MBA",
      "B.Tech",
      "M.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Biotechnology",
      "Computer Science Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Global Institute of Engineering and Technology, Bangalore-Chennai Highway, Melvisharam, Walajah Taluk, Vellore District 632506",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1953,
    "courses": [
      "M.Tech",
      "B.Sc",
      "B.E"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Mechanical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Annamalaiar College of Engineering, Modaiyur Village, Polur Taluk, Thiruvannamalai District 606902",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1994,
    "courses": [
      "B.E",
      "MBA",
      "M.Tech",
      "B.Tech"
    ],
    "popularCourses": [
      "Textile Technology",
      "Data Science",
      "Biomedical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Podhigai College of Engineering and Technology, Vinayakapuram, Adiyur Post, Tirupattur Taluk, Vellore District 635601",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1983,
    "courses": [
      "BBA",
      "B.Sc",
      "M.Sc",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Sri Krishna College of Engineering, Tiruttani High Road, Arakkonam, Vellore District 631003",
    "district": "Vellore",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1955,
    "courses": [
      "M.Sc",
      "M.Com",
      "M.E",
      "B.Com",
      "MCA"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Information Technology",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Oxford College of Engineering, Venmani Village, Karaipoondi Post, Polur Taluk, Thiruvannamalai District 606803",
    "district": "Thiruvannamalai",
    "type": "Engineering",
    "rating": 3.2,
    "established": 2020,
    "courses": [
      "B.Com",
      "B.Arch",
      "B.E",
      "M.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Biotechnology",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Idhaya Engineering College for Women, Chinnasalem, Villupuram District 606201",
    "district": "Villupuram",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1978,
    "courses": [
      "M.Sc",
      "B.Tech",
      "M.E",
      "Ph.D",
      "B.E",
      "B.Arch"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Aerospace Engineering",
      "Electrical Engineering",
      "Robotics Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Government College of Technology (Autonomous), Thadagam Road, Coimbatore District 641013",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2013,
    "courses": [
      "M.Com",
      "B.E",
      "M.Arch",
      "Ph.D",
      "BBA",
      "MBA"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1967,
    "courses": [
      "M.Tech",
      "B.Com",
      "B.Sc"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Coimbatore Institute of Technology (Autonomous), Civil Aerodrome Post, Coimbatore District 641014",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1996,
    "courses": [
      "B.Arch",
      "MBA",
      "B.Tech",
      "M.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Information Technology",
      "Artificial Intelligence",
      "Data Science"
    ]
  },
  {
    "name": "Anna University Regional Campus - Coimbatore, Maruthamalai Main Road, Navavoor Bharathiyar University Post, Somayampalayam, Coimbatore District 641046",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1976,
    "courses": [
      "MCA",
      "B.Arch",
      "BBA",
      "MBA",
      "Ph.D",
      "B.E",
      "B.Tech",
      "M.Com"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biotechnology",
      "Data Science"
    ]
  },
  {
    "name": "Sri Shanmugha College of Engineering and Technology, Morur Bit II Village, Salem District 637302",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1966,
    "courses": [
      "B.Tech",
      "Ph.D",
      "B.Com",
      "M.Com",
      "B.Arch",
      "M.Sc"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Electronics Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Muthayammal College of Engineering, Kakkaveri Post, Namakkal District 637408",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2018,
    "courses": [
      "B.Arch",
      "M.Tech",
      "B.Tech",
      "MCA",
      "BBA",
      "M.Sc",
      "M.Com"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Information Technology",
      "Aerospace Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "N S N College of Engineering and Technology, Karur-Madurai NH7, Manalmedu, Karur District 639003",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2012,
    "courses": [
      "B.Sc",
      "MCA",
      "BBA",
      "M.E",
      "M.Arch",
      "Ph.D",
      "B.E"
    ],
    "popularCourses": [
      "Data Science",
      "Electrical Engineering",
      "Civil Engineering",
      "Electronics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "K S R Institute for Engineering and Technology, Thokkavadi, Namakkal District 637215",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.2,
    "established": 2017,
    "courses": [
      "B.Com",
      "M.Tech",
      "B.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Rathinam Technical Campus, Pollachi Road, Eachanari, Coimbatore District 641021",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1971,
    "courses": [
      "B.Com",
      "M.E",
      "B.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Data Science",
      "Biomedical Engineering",
      "Textile Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Aishwarya College of Engineering and Technology, Errattaikaradu Paruvachi Post, Anthiyur (Via), Bhavani Taluk, Erode District 638312",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1971,
    "courses": [
      "B.E",
      "B.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Information Technology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Asian College of Engineering and Technology, Asian College Road, Kondayampalayam, Near Saravanampatti, Coimbatore District 641110",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.5,
    "established": 2008,
    "courses": [
      "MBA",
      "M.E",
      "B.Tech",
      "B.Arch",
      "M.Tech",
      "Ph.D",
      "MCA"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Data Science"
    ]
  },
  {
    "name": "Ganesh College of Engineering, Attur Main Road, Mettupatti, Salem District 636111",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1951,
    "courses": [
      "Ph.D",
      "M.Arch",
      "B.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Data Science",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Sri Ranganathar Institute of Engineering and Technology, Thudialur-Kovilpalay Road, Coimbatore District 641110",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1988,
    "courses": [
      "M.Sc",
      "MBA",
      "B.E",
      "MCA",
      "Ph.D",
      "B.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Indian Institute of Handloom Technology, Foulke's Compound, Thillai Nagar, Salem District 636001",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1953,
    "courses": [
      "BBA",
      "MCA",
      "B.Arch",
      "M.E",
      "M.Tech",
      "M.Sc",
      "B.Tech"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Dhirajlal Gandhi College of Technology, Sikkanampatty, (Opp. to Airport), Omalur Taluk, Salem District 636309",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1972,
    "courses": [
      "M.E",
      "B.Com",
      "M.Sc",
      "B.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Artificial Intelligence",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Shree Sathyam College of Engineering and Technology, NH-47, Manjakkalpatti, Kuppanur Post, Sankari Taluk, Salem District 637301",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1985,
    "courses": [
      "B.Com",
      "M.Sc",
      "B.Sc",
      "MBA",
      "M.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "AVS College of Technology, Attur Main Road, Near AVS College of Arts & Science, Chinnagoundapuram, Salem District 636106",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.0,
    "established": 2014,
    "courses": [
      "BBA",
      "M.Sc",
      "B.Tech",
      "M.Tech",
      "Ph.D"
    ],
    "popularCourses": [
      "Data Science",
      "Textile Technology",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Dhaanish Ahmed Institute of Technology, Pichanur Post, (Near K G Chavadi), Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2014,
    "courses": [
      "M.Tech",
      "BBA",
      "B.Arch",
      "M.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Biotechnology",
      "Electrical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Jairupaa College of Engineering, Thottiapalayam, Kathankanni Post, Kangayam, Tiruppur District 641 604",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1987,
    "courses": [
      "M.Arch",
      "M.E",
      "M.Tech",
      "B.Com",
      "BBA",
      "MCA"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Civil Engineering",
      "Data Science",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Pollachi Institute of Engineering and Technology, Main Road, Poosaripatti, Pollachi Taluk, Coimbatore District 642205",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1969,
    "courses": [
      "BBA",
      "B.Tech",
      "M.Tech",
      "B.E",
      "M.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Environmental Engineering",
      "Mechanical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Cheran College of Engineering, Karur-Coimbatore Main Road, NH-67, K.Paramathi Post, Aravakurichi Taluk, Karur District 639111",
    "district": "Karur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 2002,
    "courses": [
      "MBA",
      "Ph.D",
      "M.Arch"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Arulmurugan College of Engineering, Karvazhi Road, Thennilai Post, Karur District 639206",
    "district": "Karur",
    "type": "Engineering",
    "rating": 3.8,
    "established": 2004,
    "courses": [
      "M.E",
      "B.Tech",
      "Ph.D",
      "M.Tech",
      "BBA",
      "M.Arch",
      "B.E",
      "B.Com"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Computer Science Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "V S B College of Engineering Technical Campus, Ealur Pirivu, Solavampalayam Post, Coimbatore District 642109",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2016,
    "courses": [
      "M.Arch",
      "B.Arch",
      "B.Com",
      "MCA",
      "B.Tech"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "SCAD Institute of Technology, Anupatti, Pollachi-Palladam Highways, Palladam, Tiruppur District 641664",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2004,
    "courses": [
      "B.Arch",
      "M.E",
      "M.Com",
      "M.Sc"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Aerospace Engineering",
      "Textile Technology",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Suguna College of Engineering, Kalappatti Road, Civil Aerodrome Post, Coimbatore District 641014",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1959,
    "courses": [
      "Ph.D",
      "B.E",
      "B.Sc",
      "M.Com",
      "MCA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Robotics Engineering",
      "Information Technology",
      "Biomedical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Arjun College of Technology, Chettiyakkapalayam, Kinathukadavu, Coimbatore District 642120",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1969,
    "courses": [
      "B.Sc",
      "B.Com",
      "M.E",
      "M.Arch",
      "B.Tech",
      "B.Arch"
    ],
    "popularCourses": [
      "Information Technology",
      "Biomedical Engineering",
      "Computer Science Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Government College of Engineering, Chettikkarai Post, Dharmapuri District 635 704",
    "district": "Dharmapuri",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1960,
    "courses": [
      "MBA",
      "M.Sc",
      "B.Arch",
      "M.Com",
      "M.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electronics Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "PSG Institute of Technology and Applied Research, Avinashi Road, Neelambur, Coimbatore 641062",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2002,
    "courses": [
      "M.Com",
      "B.Com",
      "M.Arch",
      "Ph.D",
      "B.E",
      "M.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Artificial Intelligence",
      "Civil Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Adhiyamaan  College of Engineering (Autonomous), Hosur, Krishnagiri District 635109",
    "district": "Krishnagiri",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1974,
    "courses": [
      "M.Sc",
      "M.Tech",
      "BBA",
      "B.E",
      "M.Com"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Robotics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Annai Mathammal Sheela Enginereing College, Erumapatty Post, Namakkal District 637013",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1988,
    "courses": [
      "M.E",
      "B.Tech",
      "M.Com",
      "M.Tech",
      "B.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Information Technology",
      "Environmental Engineering",
      "Data Science",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Government College of Engineering (Autonomous), Bargur, Krishnagiri District 635104",
    "district": "Krishnagiri",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1984,
    "courses": [
      "M.E",
      "MBA",
      "M.Sc",
      "B.Com",
      "MCA",
      "B.Tech",
      "M.Com"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Jayam College of Engineering and Technology, Nallanur Post, Dharmapuri District 636813",
    "district": "Dharmapuri",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2000,
    "courses": [
      "M.Tech",
      "B.Arch",
      "B.Sc",
      "BBA",
      "M.Sc",
      "B.Com",
      "MBA",
      "M.Arch"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Aerospace Engineering",
      "Agricultural Engineering",
      "Mechanical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "K S Rangasamy College of Technology (Autonomous), Tiruchengode, Namakkal District 637215",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1958,
    "courses": [
      "B.Tech",
      "M.E",
      "M.Com",
      "MBA",
      "B.Com",
      "M.Tech",
      "B.Sc",
      "B.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Robotics Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "M Kumarasamy College of Engineering (Autonomous), Thalavapalayam, Karur District 639113",
    "district": "Karur",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1961,
    "courses": [
      "M.E",
      "MBA",
      "B.Com",
      "B.Arch",
      "M.Arch",
      "Ph.D",
      "B.Sc"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Mahendra Engineering College (Autonomous), Mahendhirapuri, Mallasamudram, Namakkal District 637503",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1977,
    "courses": [
      "B.Tech",
      "B.Com",
      "M.Sc",
      "B.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Muthayammal Engineering College (Autonomous), Rasipuram, Namakkal District 637408",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.3,
    "established": 2017,
    "courses": [
      "M.E",
      "Ph.D",
      "B.Com",
      "MCA",
      "M.Arch",
      "M.Tech"
    ],
    "popularCourses": [
      "Textile Technology",
      "Biotechnology",
      "Aerospace Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Paavai Engineering College (Autonomous), NH-7, Pachal Post, Namakkal District 637018",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1957,
    "courses": [
      "B.Sc",
      "M.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Computer Science Engineering",
      "Aerospace Engineering",
      "Environmental Engineering",
      "Data Science"
    ]
  },
  {
    "name": "P G P College of Engineering and Technology, Paramathi Post, Namakkal District 637207",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2010,
    "courses": [
      "B.Arch",
      "B.Tech",
      "M.Sc"
    ],
    "popularCourses": [
      "Data Science",
      "Biotechnology",
      "Electrical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "K S R College of Engineering (Autonomous), Tiruchengode, Namakkal District 637215",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1986,
    "courses": [
      "Ph.D",
      "M.Com",
      "BBA",
      "M.Sc",
      "B.Sc",
      "B.Com",
      "B.E",
      "M.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electronics Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "S S M College of Engineering, Komarapalayam, Namakkal District 638183",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.5,
    "established": 2005,
    "courses": [
      "B.Com",
      "M.Sc",
      "MBA"
    ],
    "popularCourses": [
      "Information Technology",
      "Civil Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Government College of Engineering (Autonomous), Karuppur, Salem District 636011",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1998,
    "courses": [
      "B.E",
      "MCA",
      "Ph.D",
      "M.Sc",
      "B.Sc",
      "BBA",
      "B.Tech",
      "MBA"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Chemical Engineering",
      "Data Science",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Sengunthar Engineering College (Autonomous), Tiruchengode, Namakkal District 637205",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1983,
    "courses": [
      "B.Tech",
      "BBA",
      "M.E",
      "B.Sc",
      "M.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Sona College of Technology (Autonomous), Suramangalam Post, Salem District 636005",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1994,
    "courses": [
      "MCA",
      "MBA",
      "M.Com",
      "M.Arch",
      "Ph.D",
      "M.E",
      "BBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Aerospace Engineering",
      "Artificial Intelligence",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Vivekanandha College of Engineering for Women (Autonomous), Sathinaickenpalayam, Elayampalayam Village, Kumaramangalam, Namakkal District 637205",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1996,
    "courses": [
      "M.Arch",
      "B.Sc",
      "MCA",
      "B.Arch",
      "MBA",
      "M.Com",
      "M.Sc"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Er. Perumal Manimekalai College of Engineering, Near Koneripalli, Hosur, Krishnagiri District 635117",
    "district": "Krishnagiri",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1973,
    "courses": [
      "BBA",
      "Ph.D",
      "M.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Mechanical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "V S B Engineering College, Kovai Road, Karur District 639111",
    "district": "Karur",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1998,
    "courses": [
      "M.E",
      "M.Tech",
      "B.E",
      "MBA",
      "M.Com",
      "M.Sc",
      "MCA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biomedical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Mahendra College of Engineering, Attur Road, Minnampalli, Valapady, Salem District 636106",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1964,
    "courses": [
      "MCA",
      "MBA",
      "B.E",
      "M.Com",
      "M.Sc",
      "M.E"
    ],
    "popularCourses": [
      "Information Technology",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Gnanamani College of Technology, Pachal Post, Namakkal District 637018",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1984,
    "courses": [
      "B.Sc",
      "B.Arch",
      "BBA",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Information Technology",
      "Chemical Engineering",
      "Robotics Engineering",
      "Computer Science Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "The Kavery Engineering College, M Kalipatti Post, Mecheri, Salem District 634453",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1971,
    "courses": [
      "M.Sc",
      "MBA",
      "B.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Aerospace Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Selvam College of Technology, Pappanaickenpatti Post, Namakkal District 637003",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1962,
    "courses": [
      "B.Com",
      "M.Arch",
      "B.Sc",
      "B.E",
      "MBA",
      "M.Tech",
      "B.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Biomedical Engineering",
      "Robotics Engineering",
      "Information Technology",
      "Data Science"
    ]
  },
  {
    "name": "Paavai College of Engineering, NH-7, Pachal Post, Namakkal District 637018",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1961,
    "courses": [
      "B.Sc",
      "M.Com",
      "M.Sc"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Biotechnology",
      "Computer Science Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Sengunthar College of Engineering, Tiruchengode, Namakkal District 637205",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1986,
    "courses": [
      "M.E",
      "B.Sc",
      "M.Com",
      "M.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Civil Engineering",
      "Data Science",
      "Biomedical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Chettinad College of Engineering and Technology, NH-67, Tiruchirappalli Main Road, Puliyur C F, Karur District 639114",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1984,
    "courses": [
      "MBA",
      "BBA",
      "M.Arch",
      "B.Tech",
      "MCA",
      "M.Com",
      "Ph.D",
      "B.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Biomedical Engineering",
      "Mechanical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Mahendra Institute of Technology, Mahendhirapuri, Mallasamudram,  Namakkal District 637503",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2007,
    "courses": [
      "M.Sc",
      "B.Arch",
      "M.Com",
      "M.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Environmental Engineering",
      "Data Science",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Vidyaa Vikas College of Engineering and Technology, Varahoorampatti, Tiruchengode, Namakkal District 637 214",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1997,
    "courses": [
      "M.E",
      "MBA",
      "M.Tech",
      "B.E",
      "B.Arch",
      "MCA",
      "B.Com",
      "M.Arch"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electronics Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Excel Engineering College, Pallakkapalayam, Sankari West Post, Namakkal District 637303",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1997,
    "courses": [
      "M.Arch",
      "B.Tech",
      "MBA",
      "B.Arch",
      "B.E",
      "B.Sc",
      "BBA",
      "M.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "A V S Engineering College, Military Road, Ammapet, Salem District 636003",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1951,
    "courses": [
      "Ph.D",
      "B.Tech",
      "BBA",
      "B.Arch",
      "M.Arch",
      "M.Com",
      "M.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Chemical Engineering",
      "Data Science",
      "Information Technology"
    ]
  },
  {
    "name": "Mahendra Engineering College for Women, Kumaramangalam, Namakkal District 637205",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1989,
    "courses": [
      "Ph.D",
      "BBA",
      "B.E",
      "M.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Aerospace Engineering",
      "Biomedical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Narasus Sarathy Institute of Technology, Poosaripatty Village, Omalur Taluk, Salem District 636305",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1996,
    "courses": [
      "B.E",
      "B.Com",
      "BBA",
      "M.E",
      "MBA",
      "B.Tech",
      "B.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Electronics Engineering",
      "Biomedical Engineering",
      "Data Science",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Jayalakshmi Institute of Technology, Thoppur, Dharmapuri District 635352",
    "district": "Dharmapuri",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1973,
    "courses": [
      "M.Com",
      "M.Arch",
      "B.Com",
      "B.Sc",
      "BBA",
      "B.Arch",
      "MBA",
      "M.Sc"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Robotics Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Varuvan Vadivelan Institute of Technology, Nallanahalli, Dharmapuri District 636701",
    "district": "Dharmapuri",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1999,
    "courses": [
      "B.Tech",
      "MCA",
      "BBA",
      "M.Sc",
      "M.Arch",
      "B.Com",
      "B.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Electrical Engineering"
    ]
  },
  {
    "name": "P S V College of Engineeering and Technology, Mittapalli, Balinayanapalli Post, Elathagiri, Krishnagiri District 635108",
    "district": "Krishnagiri",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1955,
    "courses": [
      "M.Tech",
      "Ph.D",
      "B.Sc",
      "M.Arch",
      "BBA",
      "M.Com"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Bharathiyar Institute of Engineering for Women, Deviayakurichi, Attur Taluk, Salem District 636112",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2010,
    "courses": [
      "M.Com",
      "B.Arch",
      "M.E",
      "B.Tech",
      "B.Sc",
      "M.Arch",
      "M.Sc",
      "MBA"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Tagore Institute of Engineering and Technology, Deviyakurichi, Attur Taluk, Salem District 636112",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.3,
    "established": 2015,
    "courses": [
      "MCA",
      "B.Sc",
      "B.E",
      "B.Com",
      "B.Tech",
      "M.Arch",
      "B.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Data Science",
      "Textile Technology",
      "Chemical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "J K K Nataraja College of Engineering and Technology, Komarapalayam Amani, Thattankuttai Panchayat, Namakkal District 638183",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1954,
    "courses": [
      "M.Com",
      "M.Tech",
      "M.Sc",
      "B.Tech"
    ],
    "popularCourses": [
      "Textile Technology",
      "Artificial Intelligence",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Annaporna Engineering College, Sankari Main Road, NH-47, Periaseeragapadi, Salem District 636308",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1970,
    "courses": [
      "M.Arch",
      "B.Com",
      "MCA",
      "B.E",
      "Ph.D",
      "M.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Civil Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Karur College of Engineering, Sanjay Nagar, Karur-Erode Main Road, Athur Post, Karur District 639002",
    "district": "Karur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1974,
    "courses": [
      "M.Sc",
      "Ph.D",
      "B.Arch",
      "BBA",
      "B.Com",
      "M.Tech",
      "B.Tech",
      "B.E"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Biotechnology"
    ]
  },
  {
    "name": "Christ the King Engineering College, Cecilia Gardens, Chikkarampalayam Village, Coimbatore District 641104",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1998,
    "courses": [
      "M.E",
      "MCA",
      "M.Sc",
      "B.Sc",
      "MBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Agricultural Engineering",
      "Electrical Engineering",
      "Aerospace Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Jai Shriram Engineering College, Dharapuram Road, Avinashi Palayam, Tiruppur District 638660",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1972,
    "courses": [
      "B.Arch",
      "BBA",
      "B.E",
      "MBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Biomedical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Al-Ameen Engineering College, Karundevan Palayam, Nanjai Uthukuli Post, Erode District 638104",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1979,
    "courses": [
      "MBA",
      "B.Arch",
      "M.Com",
      "M.E",
      "MCA",
      "B.Tech",
      "M.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Data Science"
    ]
  },
  {
    "name": "Knowledge Institute of Technology, KIOT Campus, Kakapalayam Post, Salem District 637504",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1959,
    "courses": [
      "MBA",
      "B.Tech",
      "MCA",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Data Science",
      "Biotechnology"
    ]
  },
  {
    "name": "Builders Engineering College,Erode Rode,Nathakadiyur, Kangeyam Taluk, Tiruppur District 638108",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 3.8,
    "established": 2007,
    "courses": [
      "M.Sc",
      "BBA",
      "B.Com"
    ],
    "popularCourses": [
      "Information Technology",
      "Biotechnology",
      "Agricultural Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Paavai College of Technology, NH-7, Pachal Post, Namakkal District 637018",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1989,
    "courses": [
      "M.Arch",
      "M.Com",
      "MBA",
      "MCA",
      "B.Tech",
      "M.Tech",
      "Ph.D"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Artificial Intelligence",
      "Information Technology"
    ]
  },
  {
    "name": "V S A Group of Institutions, NH-47, Uthamasola Puram Post, Salem District 636010",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1982,
    "courses": [
      "B.Sc",
      "M.Com",
      "B.Com",
      "M.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Data Science"
    ]
  },
  {
    "name": "Salem College of Engineering and Technology, Salem-Attur Main Road, NH-68, Mettupatty Perumapalayam, Salem District 636111",
    "district": "Salem",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2004,
    "courses": [
      "B.Sc",
      "B.Arch",
      "MBA",
      "B.Com"
    ],
    "popularCourses": [
      "Textile Technology",
      "Biomedical Engineering",
      "Electrical Engineering",
      "Robotics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Gnanamani College of Engineering, NH-7, A K Samuthiram, Pachal Post, Namakkal District 637018",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1995,
    "courses": [
      "B.Tech",
      "MCA",
      "M.Sc",
      "B.Com",
      "Ph.D",
      "BBA",
      "B.Sc",
      "B.Arch"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Vivekanandha College of Technology for Women, Sathinaickenpalayam, Elayampalayam Village, Kumaramangalam, Namakkal District 637205",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1965,
    "courses": [
      "M.E",
      "Ph.D",
      "M.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Data Science",
      "Chemical Engineering",
      "Robotics Engineering",
      "Mechanical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Excel College of Engineering and Technology, Pallakapalayam, Sankari West Post, Namakkal District 637303",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1992,
    "courses": [
      "M.Sc",
      "M.Arch",
      "B.E",
      "MCA",
      "M.Com"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Mahendra Institute of Engineering and Technology, Mahendrapuri, Mallasamudram, Namakkal District 637503",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1984,
    "courses": [
      "Ph.D",
      "M.Arch",
      "B.Tech",
      "B.Sc",
      "M.Tech",
      "BBA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Information Technology",
      "Agricultural Engineering",
      "Biotechnology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "The Kavery College of Engineering, M Kalipatti Post, Mecheri, Salem District 636453",
    "district": "Salem",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1995,
    "courses": [
      "M.Arch",
      "Ph.D",
      "B.Com",
      "MBA",
      "M.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Chemical Engineering",
      "Civil Engineering",
      "Robotics Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Sree Sakthi Engineering College, Bettathapuram, Bilichi Village, Karamadai, Coimbatore District 641104",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1965,
    "courses": [
      "BBA",
      "B.Tech",
      "B.E",
      "B.Com",
      "M.Sc",
      "B.Arch",
      "M.Com",
      "MCA"
    ],
    "popularCourses": [
      "Data Science",
      "Textile Technology"
    ]
  },
  {
    "name": "Ambal Professional Group of Institutions, Coimbatore to Tiruchirappalli Road, K N Puram Post, Palladam Taluk, Tiruppur District 641662",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1965,
    "courses": [
      "B.E",
      "B.Arch",
      "Ph.D",
      "MBA",
      "BBA",
      "M.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Chemical Engineering",
      "Data Science",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Shreenivasa Engineering College, B Pallipatti, Bommidi, Pappireddipatti Taluk, Dharmapuri District 635301",
    "district": "Dharmapuri",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1976,
    "courses": [
      "M.Com",
      "B.Com",
      "MBA",
      "B.E",
      "BBA",
      "M.Tech",
      "M.Arch"
    ],
    "popularCourses": [
      "Textile Technology",
      "Agricultural Engineering",
      "Robotics Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Bannari Amman Institute of Technology (Autonomous), Sathyamanagalam, Erode District  638401",
    "district": "Erode",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1997,
    "courses": [
      "B.E",
      "M.E",
      "B.Com",
      "M.Arch",
      "M.Com",
      "B.Arch"
    ],
    "popularCourses": [
      "Data Science",
      "Electrical Engineering",
      "Computer Science Engineering",
      "Aerospace Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Coimbatore Institute of Engineering and Technolgoy (Autonomous), Narasipuram Post, Coimbatore District 641109",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1962,
    "courses": [
      "B.Arch",
      "M.Tech",
      "M.E",
      "B.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Robotics Engineering",
      "Civil Engineering",
      "Information Technology",
      "Data Science"
    ]
  },
  {
    "name": "C S I College of Engineering, Ketti, The Nilgiris 643215",
    "district": "The Nilgiris",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2020,
    "courses": [
      "M.Com",
      "M.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Textile Technology",
      "Artificial Intelligence",
      "Data Science",
      "Biotechnology"
    ]
  },
  {
    "name": "Dr. Mahalingam College of  Engineering and Technology (Autonomous), Mackinaickenpatti Post, Pollachi Taluk, Coimbatore District 642003",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1982,
    "courses": [
      "M.Com",
      "M.Sc",
      "M.E",
      "B.Com",
      "B.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Biomedical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Erode Sengunthar Engineering College (Autonomous), Thudupathi Post, Erode District 638057",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1955,
    "courses": [
      "M.Arch",
      "B.Com",
      "M.Com",
      "B.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Information Technology",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Hindusthan College of Engineering and Technology (Autonomous), Othakkalmandapam Post, Coimbatore District 641032",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1966,
    "courses": [
      "MBA",
      "M.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Textile Technology",
      "Biomedical Engineering",
      "Information Technology",
      "Environmental Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Institute of Road and Transport Technology, Vasavi College Post, Erode District 638316",
    "district": "Erode",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1964,
    "courses": [
      "Ph.D",
      "MBA",
      "M.E"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Chemical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Karpagam College of Engineering (Autonomous), Othakkalmandapam, Coimbatore District 641032",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1999,
    "courses": [
      "M.Arch",
      "B.Com",
      "Ph.D",
      "B.Tech",
      "B.Sc",
      "B.Arch"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Environmental Engineering",
      "Mechanical Engineering",
      "Agricultural Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Kongu Engineering College (Autonomous), Perundurai, Erode District 638052",
    "district": "Erode",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1957,
    "courses": [
      "B.Tech",
      "MCA",
      "B.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Aerospace Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Kumaraguru College of Technology (Autonomous), Chinnavedampatti Post, Coimbatore District 641006",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1979,
    "courses": [
      "M.Com",
      "M.Tech",
      "B.E",
      "BBA",
      "B.Arch"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "M P Nachimuthu M Jagannathan Engineering College, Chennimalai, Erode District 638112",
    "district": "Erode",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1964,
    "courses": [
      "M.Tech",
      "MBA",
      "B.Com",
      "MCA",
      "B.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Robotics Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Maharaja Engineering College, Avinashi, Tiruppur District 641654",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 4.4,
    "established": 2000,
    "courses": [
      "B.E",
      "M.Com",
      "BBA",
      "MCA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Aerospace Engineering",
      "Electrical Engineering",
      "Robotics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Nandha Engineering College (Autonomous), Pitchandampalayam Post, Erode District 638052",
    "district": "Erode",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1966,
    "courses": [
      "BBA",
      "B.Sc",
      "B.Arch"
    ],
    "popularCourses": [
      "Biotechnology",
      "Civil Engineering",
      "Electronics Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Park College of Engineering and Technology, Kaniyur, Coimbatore District 641659",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1967,
    "courses": [
      "M.Arch",
      "M.Sc",
      "B.Tech",
      "B.Arch",
      "BBA",
      "MCA",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Environmental Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Sasurie College of Engineering, Vijayamangalam, Tiruppur District 638056",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1992,
    "courses": [
      "MBA",
      "B.Arch",
      "M.Com",
      "Ph.D",
      "M.E"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Aerospace Engineering",
      "Agricultural Engineering",
      "Environmental Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Sri Krishna College of Enginering and Technology (Autonomous), Kuniamuthur, Coimbatore District 641008",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1957,
    "courses": [
      "Ph.D",
      "B.Com",
      "B.E",
      "M.Tech",
      "M.E",
      "B.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Robotics Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Sri Ramakrishna Engineering College (Autonomous), Vattamalaipalayam, Coimbatore District 641022",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1979,
    "courses": [
      "BBA",
      "M.E",
      "B.E",
      "B.Sc",
      "B.Tech",
      "B.Arch",
      "M.Com",
      "M.Tech"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Textile Technology",
      "Computer Science Engineering",
      "Environmental Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Tamilnadu College of Engineering, Karumathampatti Post, Coimbatore District 641659",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1979,
    "courses": [
      "M.Arch",
      "M.Tech",
      "MCA",
      "M.Sc",
      "BBA",
      "B.E",
      "B.Tech",
      "M.E"
    ],
    "popularCourses": [
      "Data Science",
      "Civil Engineering"
    ]
  },
  {
    "name": "Sri Krishna College of Technology (Autonomous), Kovaipudur Post, Coimbatore District 641042",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.3,
    "established": 2018,
    "courses": [
      "M.Sc",
      "MBA",
      "M.E",
      "BBA"
    ],
    "popularCourses": [
      "Textile Technology",
      "Computer Science Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Velalar College of Engineering and Technology (Autonomous), Thindal Post, Erode District 638009",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1957,
    "courses": [
      "B.Arch",
      "M.Com",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Computer Science Engineering",
      "Information Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Sri Ramakrishna Institute of Technology (Autonomous), Pachapalayam, Coimbatore District 641010",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1987,
    "courses": [
      "B.Arch",
      "MBA",
      "M.Com",
      "BBA",
      "B.E",
      "M.Tech"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Information Technology",
      "Biomedical Engineering",
      "Biotechnology",
      "Environmental Engineering"
    ]
  },
  {
    "name": "SNS College of Technology (Autonomous), Kalappatti Post, Coimbatore District 641035",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1977,
    "courses": [
      "B.Com",
      "M.Com",
      "Ph.D",
      "BBA",
      "M.Sc",
      "B.E",
      "MCA"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Sri Shakthi Institute of Engineering and Technology (Autonomous), L&T Bye-Pass, Venkitapuram Post, Coimbatore District 641062",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1960,
    "courses": [
      "M.Tech",
      "M.Com",
      "B.E",
      "BBA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electrical Engineering",
      "Aerospace Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Nehru Institute of Engineering and Technology, Thirumalayampalayam Post, Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1998,
    "courses": [
      "M.Com",
      "Ph.D",
      "B.Tech",
      "B.Com",
      "BBA",
      "M.Arch"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Textile Technology",
      "Biotechnology"
    ]
  },
  {
    "name": "R V S College of Engineering and Technology, Kannampalayam, Sulur, Coimbatore District 641402",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2020,
    "courses": [
      "M.Sc",
      "Ph.D",
      "B.Sc",
      "MCA",
      "MBA",
      "BBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Robotics Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "INFO Institute of Engineering, Sarkar Samakulam, Coimbatore District 641107",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1987,
    "courses": [
      "B.Tech",
      "BBA",
      "M.Sc",
      "M.Com",
      "M.Arch",
      "M.E",
      "B.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Biomedical Engineering",
      "Chemical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Angel College of Engineering and Technology, P.K.Palayam, Ugayanur Village, Tiruppur District 641 665",
    "district": "Tiruppur",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2001,
    "courses": [
      "B.E",
      "M.E",
      "B.Com"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "SNS College of Engineering, Sathy Main Road, Kurumbapalayam Post, Coimbatore District 641107",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1952,
    "courses": [
      "BBA",
      "M.Arch",
      "MBA",
      "M.Com"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Information Technology",
      "Biotechnology"
    ]
  },
  {
    "name": "Karpagam Institute of Technology, Seerapalayam Village, L&T By pass Road, Coimbatore District 641021",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2015,
    "courses": [
      "M.E",
      "B.Tech",
      "B.E",
      "MCA",
      "M.Arch",
      "M.Com",
      "B.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Aerospace Engineering",
      "Robotics Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Dr. N G P Institute of Technology, Kalapatti Road, Coimbatore District 641035",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1966,
    "courses": [
      "M.E",
      "M.Arch",
      "BBA",
      "M.Sc",
      "B.Com",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Sri Sai Ranganathan Engineering College, Zahirnaickenpalayam Village, Viraliyur Post, Thondamuthur Via, Coimbatore District 641109",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1978,
    "courses": [
      "B.Tech",
      "M.Tech",
      "Ph.D"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Data Science",
      "Environmental Engineering",
      "Artificial Intelligence",
      "Biotechnology"
    ]
  },
  {
    "name": "Sri Eshwar College of Engineering (Autonomous), Kondampatti Post, Vadasithur (Via), Kinathukadavu, Coimbatore District 641202",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1982,
    "courses": [
      "B.E",
      "MBA",
      "M.Sc",
      "M.Tech",
      "M.Com"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Data Science",
      "Chemical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Hindustan Institute of Technology, Othakkalmandapam, Coimbatore District 641032",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1993,
    "courses": [
      "B.Com",
      "B.Tech",
      "BBA",
      "B.E"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "P A College of Engineering and Technology (Autonomous), Palladam Road, Pollachi, Coimbatore District 642002",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2017,
    "courses": [
      "M.Com",
      "BBA",
      "B.Arch",
      "M.E",
      "B.Tech",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biomedical Engineering",
      "Data Science",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Dhanalakshmi Srinivasan College of Engineering, NH47, Palakkad Main Road, Navakkarai Post, Near Nandhi Temple, Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1985,
    "courses": [
      "B.Sc",
      "M.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Adithya Institute of Technology, Kurumbapalayam Village, Coimbatore District 641107",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2003,
    "courses": [
      "M.E",
      "B.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Kathir College of Engineering, Neelambur, Avinashi Road, Coimbatore District 641062",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1990,
    "courses": [
      "M.Sc",
      "B.E",
      "B.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Data Science",
      "Electrical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Shree Venkateshwara Hi-Tech Engineering College, Othakuthirai, K Mettupalayam Post, Gobichettipalayam, Erode District 638455",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1956,
    "courses": [
      "B.Tech",
      "M.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Textile Technology",
      "Mechanical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Surya Engineering College, Mettukadai, Kathirampatti Post, Erode District 638107",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1977,
    "courses": [
      "B.E",
      "Ph.D",
      "BBA",
      "B.Arch",
      "M.E",
      "M.Arch",
      "B.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Data Science",
      "Aerospace Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "EASA College of Engineering and Technology, NH-47, Coimbatore-Palakkad Main Road, Navakarai Post, Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1972,
    "courses": [
      "B.E",
      "M.Tech",
      "Ph.D",
      "M.E",
      "B.Arch"
    ],
    "popularCourses": [
      "Biotechnology",
      "Data Science",
      "Artificial Intelligence",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "KIT-Kalaignar Karunanidhi Institute of Technology (Autonomous), Kannampalayam, Coimbatore District 641402",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2016,
    "courses": [
      "Ph.D",
      "M.Com",
      "B.Com",
      "B.Arch"
    ],
    "popularCourses": [
      "Information Technology",
      "Civil Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "KGISL Institute of Technology, KGISL Campus, Thudiyalur Road, Saravanampatti, Coimbatore District 641035",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1959,
    "courses": [
      "M.Sc",
      "B.Arch",
      "B.E",
      "MBA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Chemical Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Nandha College of Technology, Pitchandampalayam Post, Erode District 638052",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1981,
    "courses": [
      "M.Tech",
      "M.Com",
      "BBA",
      "M.E",
      "B.Tech",
      "MCA",
      "B.Sc"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "P P G Institute of Technology, Vilankurichi Village, Coimbatore District 641035",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1956,
    "courses": [
      "B.E",
      "MCA",
      "B.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Nehru Institute of Technology, Thirumalayampalayam Post, Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.2,
    "established": 2018,
    "courses": [
      "M.Arch",
      "BBA",
      "M.Sc",
      "MBA",
      "Ph.D"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Data Science",
      "Biotechnology"
    ]
  },
  {
    "name": "J K K Muniraja College of Technology, T N Palayam, Gobi Taluk, Erode District 638506",
    "district": "Erode",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1970,
    "courses": [
      "M.E",
      "M.Com",
      "MBA",
      "M.Tech",
      "B.E",
      "BBA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "United Institute of Technology, Gadalore Village, Perianaickenpalayam, Coimbatore District 641020",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1990,
    "courses": [
      "MBA",
      "BBA",
      "M.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Aerospace Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Jansons Institute of Technology, Karumathampatty, Somaur, Coimbatore District 641659",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1977,
    "courses": [
      "MCA",
      "MBA",
      "B.Sc",
      "B.Tech",
      "M.Sc",
      "B.Com",
      "B.E",
      "B.Arch"
    ],
    "popularCourses": [
      "Information Technology",
      "Textile Technology",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Akshaya College of Engineering and Technology, Kinathukadavu, Coimbatore District 642109",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1952,
    "courses": [
      "Ph.D",
      "M.Arch",
      "M.Sc",
      "MBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Aerospace Engineering",
      "Chemical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "K P R Institute of Engineering and Technology, Kollupalayam Village, Arasur Panchayat, Coimbatore District 641407",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1973,
    "courses": [
      "B.Com",
      "M.E",
      "M.Tech",
      "MCA",
      "B.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Textile Technology",
      "Civil Engineering"
    ]
  },
  {
    "name": "Sriguru Institute of Technology, Varathaiyanagar Palayam, Kondayampalayam Post, Coimbatore District 641110",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1995,
    "courses": [
      "B.Com",
      "Ph.D",
      "M.Tech",
      "B.Arch",
      "B.Sc",
      "BBA",
      "M.Com"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Information Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "SRG Engineering College, Aniyapuram Post, Namakkal District 637017",
    "district": "Namakkal",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1995,
    "courses": [
      "M.Sc",
      "BBA",
      "M.Tech",
      "B.E"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Mechanical Engineering",
      "Aerospace Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Park College of Technology, Prema Ravi Nagar, Karumathampatty, Coimbatore District 641059",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1964,
    "courses": [
      "BBA",
      "M.Tech",
      "MCA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "J C T College of Engineering and Technology, Pichanur, Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1978,
    "courses": [
      "B.Tech",
      "B.Com",
      "Ph.D",
      "BBA",
      "MCA",
      "B.E",
      "MBA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "C M S College of Engineering and Technology, Appachigoundenpathy, Kumittipatti, Coimbatore District 641105",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2004,
    "courses": [
      "B.Sc",
      "B.Com",
      "M.Arch",
      "BBA",
      "MBA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Textile Technology",
      "Environmental Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "R V S Technical Campus-Coimbatore, Kumaran Kottam Campus,  Kannampalayam, Sulur, Coimbatore District 641 402",
    "district": "Coimbatore",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2002,
    "courses": [
      "M.Sc",
      "B.Arch",
      "MBA",
      "B.E",
      "Ph.D",
      "B.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Textile Technology",
      "Artificial Intelligence",
      "Biotechnology"
    ]
  },
  {
    "name": "University College of Engineering,BIT Campus,Anna university ,Tiruchirappalli District 620024",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1966,
    "courses": [
      "B.Sc",
      "M.Com",
      "MBA",
      "M.Arch",
      "MCA",
      "M.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electrical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "University College of Engineering, Ariyalur, Kathankudikadu Village, Thelur Post, Ariyalur District 621704",
    "district": "Ariyalur",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1953,
    "courses": [
      "B.Arch",
      "B.Com",
      "B.E"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Agricultural Engineering",
      "Robotics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "University College of Engineering, Thirukkuvalai, Nagapattinam District 610204",
    "district": "Nagapattinam",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2002,
    "courses": [
      "MCA",
      "M.Arch",
      "M.E",
      "M.Com",
      "BBA",
      "B.Com",
      "B.E"
    ],
    "popularCourses": [
      "Textile Technology",
      "Civil Engineering",
      "Chemical Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "University College of Engineering, Panruti, Chennai-Kumbakonam Highway, Panikkankuppam, Panruti, Cuddalore District 607106",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2011,
    "courses": [
      "M.E",
      "M.Arch",
      "MBA",
      "BBA",
      "MCA",
      "B.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Data Science",
      "Information Technology"
    ]
  },
  {
    "name": "University College of Engineering, Pattukkottai, ECR Road, Rajamadam, Pattukkottai Taluk, Thanjavur District 614701",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1963,
    "courses": [
      "BBA",
      "Ph.D",
      "B.Arch",
      "B.Sc",
      "B.Com",
      "MCA",
      "B.E",
      "M.Tech"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Textile Technology",
      "Biotechnology",
      "Aerospace Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Krishnaswamy Collge of Engineering and Technology, S Kumarapuram, Cuddalore District 607109",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1952,
    "courses": [
      "MCA",
      "M.Com",
      "MBA",
      "B.Sc",
      "B.E",
      "BBA"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "C K College of Engineering and Technology, Chellangkuppam, Cuddalore District 607003",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1984,
    "courses": [
      "BBA",
      "Ph.D",
      "M.Arch",
      "M.Sc",
      "B.Sc",
      "M.E",
      "B.Com"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Biotechnology",
      "Computer Science Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Sri Ramakrishna College of Engineering, Sri Saradha Nagar, NH-45, Perambalur District  621113",
    "district": "Perambalur",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1996,
    "courses": [
      "M.Arch",
      "B.Arch",
      "B.E",
      "MCA",
      "M.Sc",
      "Ph.D",
      "MBA"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "K S K College of Engineering and Technology, Thanjavur Main Road, Darasuram, Kumbakonam, Thanjavur District 612702",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1999,
    "courses": [
      "Ph.D",
      "B.Arch",
      "M.Arch",
      "B.Com",
      "M.Tech"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Mechanical Engineering",
      "Agricultural Engineering",
      "Computer Science Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Dhanalakshmi Srinivasan College of Engineering, Thuraiyur Road, Perambalur District 621212",
    "district": "Perambalur",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1976,
    "courses": [
      "B.E",
      "M.Sc",
      "M.Tech",
      "Ph.D",
      "BBA",
      "B.Sc",
      "MCA",
      "B.Arch"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Data Science",
      "Environmental Engineering",
      "Biotechnology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Dhanalakshmi Srinivasan Institute of Research and Technology, NH-45, Tiruchirappalli\u00e2\\[Euro]\\[OpenCurlyDoubleQuote]Chennai Main Road, Siruvachur, Perambalur District 621113",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1983,
    "courses": [
      "M.Arch",
      "MCA",
      "B.Com",
      "M.Com",
      "M.Sc",
      "BBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Computer Science Engineering",
      "Robotics Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Dhanalakshmi Srinivasan Institute of Technology,  Samayapuram, Chennai-Tiruchirappalli Main Road, Tiruchirappalli District 621112",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1975,
    "courses": [
      "MBA",
      "B.Tech",
      "B.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Aerospace Engineering",
      "Chemical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Sureya College of Engineering, Konalai, Tiruchirappalli District 621132",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1992,
    "courses": [
      "M.Com",
      "B.E",
      "MBA",
      "B.Com"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Data Science",
      "Textile Technology",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Arifa Institute of Techonology, Esanoor, Keelaiyur Post, Thirukkuvalai Taluk, Nagapattinam District 611103",
    "district": "Nagapattinam",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1977,
    "courses": [
      "B.Com",
      "M.E",
      "M.Arch",
      "B.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Aerospace Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Ariyalur Engineering College, NH-227, Tiruchirappalli-Chithambaram NH, Karuppur-Senapathy Post, Ariyalur District 621707",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1980,
    "courses": [
      "B.Sc",
      "M.Sc",
      "B.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Government College of Engineering, Gandarvakottai Road, Sengipatti, Thanjavur District 613402",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.4,
    "established": 2004,
    "courses": [
      "B.Sc",
      "Ph.D",
      "B.E",
      "M.Arch",
      "BBA",
      "M.Tech"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Biomedical Engineering",
      "Artificial Intelligence",
      "Textile Technology",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Government College of Engineering, Srirangam, Sethurappatti,  Tiruchirappalli District 620 012",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1961,
    "courses": [
      "B.E",
      "M.Com",
      "B.Arch",
      "B.Tech",
      "M.Arch",
      "Ph.D"
    ],
    "popularCourses": [
      "Information Technology",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Nelliandavar Institute of Technology, Nerunjikorai Village, Pudhupalayam, Ariyalur Taluk, Ariyalur District 621704",
    "district": "Ariyalur",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1996,
    "courses": [
      "B.Sc",
      "M.Sc",
      "M.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "K Ramakrishnan College of Technology, Kariyamanickam Road, Samayapuram, Manachanallur Taluk, Tiruchirappalli District 621112",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2011,
    "courses": [
      "M.Sc",
      "M.Tech",
      "B.E",
      "Ph.D",
      "M.E",
      "BBA",
      "M.Arch",
      "B.Com"
    ],
    "popularCourses": [
      "Data Science",
      "Biotechnology",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Sir Issac Newton College of Engineering and Technology, Anthanapeetai Post, Papakoil, Nagapattinam District 611102",
    "district": "Nagapattinam",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1958,
    "courses": [
      "B.E",
      "B.Arch",
      "M.Tech",
      "BBA",
      "B.Sc",
      "MCA",
      "Ph.D"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Artificial Intelligence",
      "Electrical Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Star Lion College of Engineering & Technology, Manankorai Main Road, Manankorai Village, Thanjavur District 614206",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1962,
    "courses": [
      "MBA",
      "MCA",
      "M.E",
      "BBA",
      "B.E"
    ],
    "popularCourses": [
      "Information Technology",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "OASYS Institute of Technology , Pulivalam Village, Musiri Taluk, Tiruchirappalli District 626001",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2013,
    "courses": [
      "B.Arch",
      "M.Sc",
      "M.Tech",
      "M.Arch"
    ],
    "popularCourses": [
      "Information Technology",
      "Electronics Engineering",
      "Robotics Engineering",
      "Computer Science Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "M.A.M. School of Engineering, Siruganur, Tiruchirappalli District 621105",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1957,
    "courses": [
      "M.Sc",
      "B.Tech",
      "M.Com",
      "M.E",
      "MCA"
    ],
    "popularCourses": [
      "Textile Technology",
      "Data Science",
      "Environmental Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "SRM TRP Engineering College, Irungalur, Manachanallur Taluk, Tiruchirappalli District 621105",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1973,
    "courses": [
      "B.E",
      "B.Tech",
      "MCA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Robotics Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "A V C College of Engineering, Mannampandal Post, Mayiladuthurai, Nagapattinam District 609305",
    "district": "Nagapattinam",
    "type": "Engineering",
    "rating": 5.0,
    "established": 1977,
    "courses": [
      "B.E",
      "MBA",
      "M.Com",
      "B.Tech",
      "B.Com",
      "M.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Shri Angalamman College of Engineering and Technology  Siruganoor, Tiruchirappalli District 621105",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2000,
    "courses": [
      "B.Arch",
      "Ph.D",
      "MCA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Artificial Intelligence",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Anjalai Ammal-Mahalingam Engineering College, Kovilvenni, Thiruvarur District 614403",
    "district": "Thiruvarur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1973,
    "courses": [
      "B.E",
      "B.Sc",
      "B.Arch",
      "MCA",
      "MBA"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Aerospace Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Arasu Engineering  College, Chennai Main Road, Kumbakonam, Thanjavur District 612501",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 3.2,
    "established": 2018,
    "courses": [
      "B.Com",
      "M.Tech",
      "M.Com",
      "B.Tech",
      "M.Sc",
      "MBA",
      "B.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Agricultural Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Dhanalakshmi Srinivasan  Engineering College, Thuraiyur Road, Perambalur District 621212",
    "district": "Perambalur",
    "type": "Engineering",
    "rating": 4.2,
    "established": 2016,
    "courses": [
      "M.Com",
      "B.Com",
      "B.E",
      "M.E"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Chemical Engineering",
      "Civil Engineering",
      "Information Technology",
      "Environmental Engineering"
    ]
  },
  {
    "name": "E G S Pillay  Engineering College (Autonomous), Nagapattinam District 611002",
    "district": "Nagapattinam",
    "type": "Engineering",
    "rating": 3.5,
    "established": 2012,
    "courses": [
      "B.E",
      "B.Com",
      "M.Com",
      "M.Arch",
      "B.Tech",
      "M.Tech",
      "M.Sc",
      "MBA"
    ],
    "popularCourses": [
      "Information Technology",
      "Biomedical Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "J J College of Engineering and Technology, Poolankulathupatti Post, Tiruchirappalli District 620009",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1961,
    "courses": [
      "MBA",
      "B.Com",
      "BBA",
      "M.Arch",
      "M.E",
      "MCA",
      "B.Sc",
      "M.Sc"
    ],
    "popularCourses": [
      "Information Technology",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Jayaram College of Engineering and Technology , Pagalavadi Post, Tiruchirappalli District 621014",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1951,
    "courses": [
      "MBA",
      "B.Tech",
      "B.Arch",
      "B.E",
      "BBA"
    ],
    "popularCourses": [
      "Biotechnology",
      "Textile Technology",
      "Computer Science Engineering",
      "Biomedical Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Kurinji College of Engineering and Technology, Manapparai, Tiruchirappalli District 621307",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1980,
    "courses": [
      "B.Arch",
      "MCA",
      "BBA",
      "B.E",
      "M.Sc",
      "B.Tech"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Information Technology",
      "Electrical Engineering"
    ]
  },
  {
    "name": "M.A.M. College of Engineering, Siruganur, Tiruchirappalli District 621105",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.3,
    "established": 2006,
    "courses": [
      "B.Arch",
      "M.Arch",
      "Ph.D",
      "B.Com"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Electrical Engineering",
      "Aerospace Engineering",
      "Biotechnology",
      "Civil Engineering"
    ]
  },
  {
    "name": "M I E T Engineering College, Tiruchirappalli-Pudukkottai Road, Tiruchirappalli District 620007",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1959,
    "courses": [
      "Ph.D",
      "MBA",
      "B.Com"
    ],
    "popularCourses": [
      "Textile Technology",
      "Civil Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Mookambigai College of Engineering, Keeranur, Pudukkottai District 622502",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1974,
    "courses": [
      "MBA",
      "M.Tech",
      "Ph.D",
      "M.E",
      "B.Sc",
      "B.Arch"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Chemical Engineering",
      "Agricultural Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Oxford Engineering College, Pirattiyur(W), Tiruchirappalli District 620009",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1974,
    "courses": [
      "M.E",
      "M.Com",
      "B.Arch",
      "M.Arch",
      "M.Sc",
      "B.Com"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Computer Science Engineering",
      "Biomedical Engineering",
      "Civil Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "P R Engineering College, Vallam, Thanjavur District 613403",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1982,
    "courses": [
      "B.Tech",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Biotechnology",
      "Biomedical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Pavendhar Bharathidasan College of Engineering and Technology, Pudukkottai Main Road, Tiruchirappalli District 620024",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1969,
    "courses": [
      "M.Tech",
      "B.Com",
      "M.Sc",
      "B.Tech",
      "Ph.D"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Roever Engineering College, Elambalur, Perambalur District 621212",
    "district": "Perambalur",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1997,
    "courses": [
      "M.Sc",
      "B.Com",
      "BBA",
      "B.Tech",
      "M.Arch",
      "MCA",
      "B.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Environmental Engineering",
      "Biomedical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Saranathan College of  Engineering, Panjappur, Tiruchirappalli District  620012",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1955,
    "courses": [
      "M.Com",
      "M.Tech",
      "M.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electronics Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Tiruchirappalli Engineering College, Konalai, Tiruchirappalli District 621132",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2019,
    "courses": [
      "MBA",
      "Ph.D",
      "M.Sc",
      "B.Com",
      "M.Tech"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "A R J College of Engineering and Technology, Mannargudi Taluk, Thiruvarur District 614001",
    "district": "Thiruvarur",
    "type": "Engineering",
    "rating": 3.6,
    "established": 2011,
    "courses": [
      "B.E",
      "B.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Dr. Navalar Nedunchezhian College of Engineering, Tholudur, Cuddalore District 606303",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1950,
    "courses": [
      "B.Arch",
      "BBA",
      "M.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Srinivasan Engineering College, Thuraiyur Road, Perambalur District 621212",
    "district": "Perambalur",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1954,
    "courses": [
      "B.Tech",
      "M.Tech",
      "M.Arch",
      "BBA",
      "M.E",
      "MBA",
      "M.Com"
    ],
    "popularCourses": [
      "Data Science",
      "Textile Technology",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "St. Josephs College Of Engineering And Technology, Elupatti Village, Rawaspatti Post, Thanjavur District 613403",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1955,
    "courses": [
      "MBA",
      "B.Tech",
      "M.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Electrical Engineering",
      "Artificial Intelligence",
      "Electronics Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Kongunadu College of Engineering and Technology, Tholurpatti, Thottiyam, Tiruchirappalli District 621215",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2005,
    "courses": [
      "M.Tech",
      "M.E",
      "MCA",
      "B.E",
      "B.Sc"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Aerospace Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "M.A.M. College of Engineering and Technology, Tiruchirappalli-Chennai Trunk Road, Siruganur, Tiruchirappalli District 621105",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1996,
    "courses": [
      "M.E",
      "M.Com",
      "B.Arch",
      "Ph.D",
      "B.E"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Information Technology",
      "Electronics Engineering"
    ]
  },
  {
    "name": "K Ramakrishnan College of Engineering, Kariyamanickam Road, Samayapuram, Manachanallur Taluk, Tiruchirappalli District 621112",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1984,
    "courses": [
      "B.E",
      "B.Tech",
      "MCA",
      "M.Arch",
      "Ph.D",
      "M.Com",
      "M.Tech",
      "BBA"
    ],
    "popularCourses": [
      "Information Technology",
      "Biotechnology"
    ]
  },
  {
    "name": "Indra Ganesan College of Engineering, Madurai Main Road, Manikandam, Tiruchirappalli District 620012",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1957,
    "courses": [
      "M.E",
      "MCA",
      "B.Arch"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Parisutham Institute of Technology and Science, Ring Road, Nanjikottai, Thanjavur District 613006",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1978,
    "courses": [
      "B.Tech",
      "M.Tech",
      "M.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Environmental Engineering",
      "Aerospace Engineering",
      "Textile Technology",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "C.A.R.E Group of Institutions, Thayanoor Village, Thayanoor Village, Kuttappatti, Srirangam Taluk, Tiruchirappalli District 620009",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2010,
    "courses": [
      "B.Arch",
      "Ph.D",
      "M.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "M R K Institute of Technology, Nattarmangalam Village, Kattumannarkoil, Cuddalore District 608306",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1952,
    "courses": [
      "B.E",
      "B.Com",
      "MCA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Shivani Engineering College, Ammapettai, Srirangam, Tiruchirappalli District 620009",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.2,
    "established": 2005,
    "courses": [
      "M.Sc",
      "M.E",
      "M.Arch",
      "Ph.D",
      "MCA",
      "BBA",
      "M.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Information Technology",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Imayam College of Engineering, Kannanur, Thuraiyur, Tiruchirappalli District 621206",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1977,
    "courses": [
      "MCA",
      "B.Sc",
      "M.Sc"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Mother Terasa College of Engineering and Technology, Mettusalai Post and Taluk, Pudukkottai District 622102",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1952,
    "courses": [
      "B.E",
      "M.Tech",
      "B.Sc",
      "BBA",
      "Ph.D"
    ],
    "popularCourses": [
      "Information Technology",
      "Chemical Engineering",
      "Computer Science Engineering",
      "Robotics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Roever College of Engineering and Technology, Elambalur, Perambalur District 621212",
    "district": "Perambalur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1965,
    "courses": [
      "MBA",
      "B.E",
      "MCA",
      "B.Sc",
      "BBA",
      "M.Arch",
      "B.Com",
      "B.Tech"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Environmental Engineering",
      "Textile Technology",
      "Data Science"
    ]
  },
  {
    "name": "Vandayar Engineering College, Pulavarnatham Post, Mariamman Koil (Via), Thanjavur District 613001",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 3.1,
    "established": 2010,
    "courses": [
      "B.Arch",
      "B.E",
      "M.Arch"
    ],
    "popularCourses": [
      "Data Science",
      "Chemical Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Annai College of Engineering and Technology, Kovilacheri, Kumbakonam, Thanjavur District 612503",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1970,
    "courses": [
      "B.Com",
      "B.Tech",
      "M.Tech",
      "M.Com",
      "BBA",
      "Ph.D",
      "M.Sc"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Aerospace Engineering",
      "Environmental Engineering",
      "Artificial Intelligence",
      "Data Science"
    ]
  },
  {
    "name": "Vetri Vinayaha College of Engineering and Technology, Namakkal-Tiruchirappalli Main Road, Tholurpatti Village, Thottiam, Tiruchirappalli District 621215",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1977,
    "courses": [
      "BBA",
      "M.E",
      "Ph.D",
      "B.E",
      "M.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Biotechnology",
      "Civil Engineering"
    ]
  },
  {
    "name": "Sri Bharathi Engineering College for Women, Kaikkuruchi Village, Alangudi Taluk, Pudukkottai District 622303",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1971,
    "courses": [
      "BBA",
      "MBA",
      "M.Tech",
      "M.Arch",
      "B.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Mahath Amma Institute of Engineering and Technology (MIET), Ariyur, Annavasal Road, Illupur Taluk, Pudukkottai District 622101",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1986,
    "courses": [
      "M.Com",
      "BBA",
      "M.E",
      "MBA",
      "Ph.D",
      "B.E",
      "M.Sc",
      "B.Arch"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "As-Salam College of Engineering and Technology, Thirumangalakudi, Aduthurai, Thiruvidaimaruthur, Thanjavur District 612102",
    "district": "Thanjavur",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1951,
    "courses": [
      "B.Sc",
      "B.E",
      "B.Tech",
      "Ph.D",
      "M.Tech",
      "M.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Meenakshi Ramaswamy Engineering College, Tiruchirappalli Main Road,  Thathanur, Udayarpalayam, Ariyalur District 621804",
    "district": "Tiruchirappalli",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1997,
    "courses": [
      "M.Com",
      "B.Tech",
      "M.Sc",
      "B.Com",
      "B.E"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Electrical Engineering",
      "Agricultural Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Sembodai Rukmani Varatharajan Engineering College, Sembodai Village, Vedaraniam, Nagapattinam District 614820",
    "district": "Nagapattinam",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1952,
    "courses": [
      "B.Arch",
      "MBA",
      "M.Com"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Chemical Engineering",
      "Biotechnology",
      "Computer Science Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "St. Annes College of Engineering and Technology, Anguchettypalayam, Siruvathur Post, Panruti, Cuddalore District 607110",
    "district": "Cuddalore",
    "type": "Engineering",
    "rating": 4.3,
    "established": 2019,
    "courses": [
      "B.Com",
      "B.Tech",
      "M.Com",
      "B.E"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Chemical Engineering",
      "Biotechnology",
      "Agricultural Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Kings College of Engineering, Punalkulam, Pudukkottai District 613303",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1968,
    "courses": [
      "B.Com",
      "M.E",
      "M.Arch",
      "MCA",
      "M.Tech",
      "MBA",
      "B.Arch"
    ],
    "popularCourses": [
      "Data Science",
      "Textile Technology",
      "Agricultural Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Mount Zion College of Engineering and Technology, Pilivalam Post, Pudukkottai District 622507",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.5,
    "established": 2006,
    "courses": [
      "Ph.D",
      "B.Com",
      "MCA",
      "BBA",
      "B.Arch",
      "M.E",
      "B.Tech",
      "M.Tech"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Electronics Engineering",
      "Agricultural Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Shanmuganathan Engineering College, Pillivalam Post, Pudukkottai District 622507",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1971,
    "courses": [
      "B.E",
      "B.Arch",
      "M.Arch",
      "MCA",
      "B.Com",
      "Ph.D"
    ],
    "popularCourses": [
      "Biotechnology",
      "Biomedical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Sudharsan Engineering College, Sathiyamangalam Post, Pudukkottai District 622501",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 3.9,
    "established": 2008,
    "courses": [
      "M.Com",
      "Ph.D",
      "B.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Information Technology",
      "Environmental Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "M N S K College of Engineering, Vallathirakkottai Post, Pudukkottai District 622305",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1964,
    "courses": [
      "BBA",
      "B.Com",
      "M.E",
      "B.Sc",
      "MBA",
      "M.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Agricultural Engineering",
      "Computer Science Engineering",
      "Information Technology",
      "Chemical Engineering"
    ]
  },
  {
    "name": "M A R College of Engineering and Technology, Boothakudi, Rasanaickenpatty Post, Illuppur Taluk, Pudukkottai District 621316",
    "district": "Pudukkottai",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1967,
    "courses": [
      "B.E",
      "M.Arch",
      "B.Sc",
      "M.E",
      "M.Tech"
    ],
    "popularCourses": [
      "Agricultural Engineering",
      "Electronics Engineering",
      "Biomedical Engineering",
      "Textile Technology",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Anna University Regional Campus - Tirunelveli, Trivandrum Road, Palayamkottai, Tirunelveli District 627007",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1998,
    "courses": [
      "B.E",
      "MBA",
      "MCA",
      "M.Arch",
      "B.Sc",
      "M.Com"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "University College of Engineering, Nagercoil, Nagercoil Industrial Estate, Konam, Kanyakumari District 629004",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1998,
    "courses": [
      "B.E",
      "Ph.D",
      "M.E",
      "M.Arch",
      "B.Sc",
      "B.Com"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "University V.O.C. College of Engineering, Thoothukudi, Near V.O.C. College, Millerpuram, Thoothukudi District 628008",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1984,
    "courses": [
      "MCA",
      "B.Tech",
      "B.E"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Textile Technology",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Thamirabharani Engineering College, Chathirampudukulam Village, Thatchanallur, Tirunelveli District 625358",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1951,
    "courses": [
      "MBA",
      "M.Arch",
      "M.Com",
      "M.Tech",
      "M.E",
      "B.Tech",
      "B.Arch"
    ],
    "popularCourses": [
      "Biotechnology",
      "Robotics Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Rohini College of Engineering & Technology, Anjugramam-Kanyakumari Main Road, Palkulam, Variyoor Post, Kanyakumari District 629401",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1968,
    "courses": [
      "B.Arch",
      "B.E",
      "B.Com",
      "M.Tech",
      "M.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Textile Technology",
      "Electronics Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Stella Marys College of Engineering, Arunthengan Vilai, Azhikal Post, Kanyakumari District 629202",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.1,
    "established": 2008,
    "courses": [
      "M.E",
      "M.Sc",
      "MCA",
      "B.E",
      "B.Arch",
      "B.Tech",
      "Ph.D",
      "B.Sc"
    ],
    "popularCourses": [
      "Information Technology",
      "Data Science",
      "Aerospace Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Universal College of Engineering and Technology, Anbagam Campus, Radhapuram Road, Vallioor, Tirunelveli District 627117",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1974,
    "courses": [
      "B.Tech",
      "MBA",
      "M.Com",
      "B.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Environmental Engineering",
      "Artificial Intelligence",
      "Civil Engineering"
    ]
  },
  {
    "name": "Renganayagi Varatharaj College of Engineering, Salvarpatti, Sivakasi, Virudhunagar District 626128",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1962,
    "courses": [
      "M.Arch",
      "M.Sc",
      "B.Sc",
      "M.Tech",
      "M.E",
      "M.Com"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Information Technology"
    ]
  },
  {
    "name": "Lourdes Mount College of Engineering and Technology, Marthandam-Karungal Road, Chundavilai, Mullanganavilai, Nattalam Post, Kanyakumari District 629195",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.3,
    "established": 2011,
    "courses": [
      "M.Arch",
      "B.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Civil Engineering",
      "Data Science"
    ]
  },
  {
    "name": "Ramco Institute of Technology, North venganallur Village, Krishnapuram Panchayat, Rajapalayam, Virudhunagar District 626117",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 3.7,
    "established": 2008,
    "courses": [
      "Ph.D",
      "M.E",
      "B.Sc",
      "MCA",
      "MBA",
      "M.Tech"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Electronics Engineering",
      "Robotics Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "AAA College of Engineering and Technology, Kamarajar Educational Road, Amathur Village, Sivakasi, Virudhunagar District 626005",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1976,
    "courses": [
      "BBA",
      "B.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Information Technology",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Good Shepherd College of Engineering and Technology, Maruthamparai, Kanyakumari District 629101",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1978,
    "courses": [
      "M.Arch",
      "BBA",
      "Ph.D",
      "M.Sc",
      "MBA",
      "B.Tech",
      "MCA",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Chemical Engineering",
      "Agricultural Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "V V College of Engineering, Arasoor Village, Idaichivilai Post, Santhakulam Taluk, Thoothukudi District 628656",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1990,
    "courses": [
      "B.Com",
      "B.Tech",
      "M.Sc",
      "B.E",
      "M.Tech",
      "M.Com",
      "B.Sc",
      "MCA"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Sethu Institute of Technology (Autonomous), Kariapatti Post, Virudhunagar District 626106",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1998,
    "courses": [
      "B.Arch",
      "Ph.D",
      "B.Com",
      "B.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Electronics Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Maria College of Engineering and Technology, Attoor Puliyamoodu Junction, Thiruvattar Post, Kanyakumari District 629177",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1958,
    "courses": [
      "MCA",
      "B.Tech",
      "B.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Data Science",
      "Electrical Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "MAR Ephraem College of Engineering & Technology, Malankara Hills, Elavuvillai, Marthandam, Kanyakumari District 629171",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1998,
    "courses": [
      "M.Arch",
      "B.Arch",
      "B.Sc",
      "B.Tech"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "M E T Engineering College, Mogals Garden, Thovalai Village, Aralvaimozhi Town Panchayat, Thovalai, Kanyakumari District 629304",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1988,
    "courses": [
      "B.Sc",
      "M.Sc",
      "BBA"
    ],
    "popularCourses": [
      "Data Science",
      "Textile Technology",
      "Robotics Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Chandy College of Engineering, Chandy Nagar, Mullakkadu, Thoothukudi District 628005",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2001,
    "courses": [
      "BBA",
      "M.Tech",
      "B.Tech",
      "M.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Data Science",
      "Artificial Intelligence",
      "Civil Engineering"
    ]
  },
  {
    "name": "St. Mother Theresa Engineering College, Vagaikulam, Thoothukudi District 628102",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 4.3,
    "established": 2011,
    "courses": [
      "M.Com",
      "B.Arch",
      "B.Tech",
      "M.Tech",
      "M.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Computer Science Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Holy Cross Engineering College, Vagaikulam, Sri Mulakarai, Srivaikuntam,  Thoothukudi District 628851",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1953,
    "courses": [
      "Ph.D",
      "B.E",
      "B.Tech",
      "MBA",
      "MCA",
      "M.Tech",
      "M.Arch",
      "M.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Robotics Engineering",
      "Artificial Intelligence",
      "Data Science",
      "Information Technology"
    ]
  },
  {
    "name": "Sivaji College of Engineering and Technology, Manivilla Palulai Panchayat, Vilavancode, Kanyakumari District 629170",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.3,
    "established": 2018,
    "courses": [
      "MCA",
      "M.Sc",
      "M.Arch",
      "Ph.D"
    ],
    "popularCourses": [
      "Biotechnology",
      "Electrical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Unnamalai Institute of Technology, Ayyaneri, Kovilpatti, Thoothukudi District 628502",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 3.2,
    "established": 2019,
    "courses": [
      "B.Com",
      "M.Tech",
      "B.Tech",
      "M.Sc",
      "B.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Robotics Engineering",
      "Data Science",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Satyam College of Engineering & Technology, Kannappannallur, Aralvaimozhi, Kanyakumari District 629301",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 5.0,
    "established": 1982,
    "courses": [
      "Ph.D",
      "B.E",
      "B.Tech",
      "M.Arch",
      "MCA",
      "M.Com",
      "B.Arch"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Environmental Engineering",
      "Computer Science Engineering",
      "Civil Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Arunachala College of Engineering for Women, Thanka Gardens, Manavilai, Vellichanthai, Nagercoil, Kanyakumari District 629203",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2007,
    "courses": [
      "M.Arch",
      "B.Sc",
      "M.Com",
      "B.E",
      "MBA",
      "B.Arch",
      "B.Tech"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Textile Technology",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Vins Christian Womens College of Engineering, Chunkankadai Post, Nagercoil, Kanyakumari District 629807",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1996,
    "courses": [
      "B.Com",
      "M.Arch",
      "B.E",
      "BBA",
      "M.Com",
      "B.Arch",
      "M.Sc",
      "M.Tech"
    ],
    "popularCourses": [
      "Data Science",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "D M I Engineering College, Aralvaimozhi Village, Thovalai, Kanyakumari District 629301",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2015,
    "courses": [
      "M.Tech",
      "MBA",
      "BBA",
      "MCA",
      "B.Com",
      "B.Arch",
      "B.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Textile Technology",
      "Electrical Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Rajas International Institute of Technology for Women, Ozhuginasery, Nagercoil, Kanyakumari District 629001",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1955,
    "courses": [
      "Ph.D",
      "BBA",
      "MCA",
      "B.Tech",
      "M.Arch",
      "M.Sc",
      "M.Tech",
      "M.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Textile Technology",
      "Computer Science Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "P S N Institute of Technology & Science, Melathediyoor, Tirunelveli District 627152",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1977,
    "courses": [
      "M.Sc",
      "BBA",
      "B.Arch",
      "M.Com",
      "M.Arch",
      "B.Sc",
      "B.Com",
      "B.Tech"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Artificial Intelligence",
      "Data Science"
    ]
  },
  {
    "name": "C S I Institute of Technology, Thovalai, Kanyakumari District 629302",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.2,
    "established": 2015,
    "courses": [
      "MBA",
      "M.E",
      "MCA",
      "B.Com",
      "M.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Mechanical Engineering",
      "Textile Technology",
      "Electrical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "CAPE Institute of Technology, Levingipuram, Tirunelveli District 627114",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1989,
    "courses": [
      "Ph.D",
      "M.Com",
      "M.Arch",
      "B.Tech",
      "BBA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Agricultural Engineering",
      "Artificial Intelligence",
      "Aerospace Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Dr. Sivanthi Aditanar College of Engineering, Tiruchendur, Thoothukudi District 628215",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2012,
    "courses": [
      "M.Sc",
      "MBA",
      "B.Arch"
    ],
    "popularCourses": [
      "Biotechnology",
      "Computer Science Engineering",
      "Agricultural Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Francis Xavier Engineering College, Vannarpettai, Tirunelveli District 627003",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1964,
    "courses": [
      "B.E",
      "MCA",
      "MBA"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Jayaraj Annapackiam CSI College of Engineering, Nazareth, Thoothukudi District 628617",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1999,
    "courses": [
      "M.Com",
      "BBA",
      "Ph.D"
    ],
    "popularCourses": [
      "Data Science",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Kamaraj College of Engineering and Technology, Virudhunagar District 626001",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2001,
    "courses": [
      "B.Arch",
      "B.Tech",
      "M.Com",
      "MBA",
      "B.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Data Science",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Mepco Schlenk Engineering College (Autonomous), Sivakasi, Virudhunagar District 626005",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1972,
    "courses": [
      "MCA",
      "B.Tech",
      "B.Arch",
      "M.E",
      "M.Tech",
      "B.E",
      "M.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Information Technology",
      "Environmental Engineering",
      "Electronics Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "National College of Engineering, Maruthakulam Post, Tirunelveli District 627151",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1980,
    "courses": [
      "M.Com",
      "MCA",
      "BBA",
      "M.E",
      "B.Arch",
      "M.Sc",
      "B.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Environmental Engineering",
      "Data Science",
      "Textile Technology"
    ]
  },
  {
    "name": "National  Engineering College (Autonomous), Kovilpatti, Thoothukudi District 628503",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1972,
    "courses": [
      "M.E",
      "BBA",
      "Ph.D",
      "MCA",
      "B.Sc",
      "B.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Information Technology",
      "Computer Science Engineering",
      "Electrical Engineering",
      "Textile Technology",
      "Electronics Engineering"
    ]
  },
  {
    "name": "P S N College of Engineering and Technology (Autonomous), Melathediyoor, Tirunelveli District 627152",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1974,
    "courses": [
      "B.Tech",
      "M.Sc",
      "B.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Computer Science Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "P S R  Engineering College (Autonomous), Appayanaickenpatti, Sevalpatti, Virudhunagar District 626140",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1978,
    "courses": [
      "M.Com",
      "B.Com",
      "MCA",
      "B.Sc",
      "MBA",
      "Ph.D",
      "BBA",
      "B.Tech"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Electrical Engineering",
      "Biotechnology",
      "Environmental Engineering"
    ]
  },
  {
    "name": "PET Engineering College, Vallioor Post, Tirunelveli District 627117",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1966,
    "courses": [
      "M.Tech",
      "M.Sc",
      "B.Arch",
      "MBA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Aerospace Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "S Veerasamy Chettiar College of  Engineering and Technology, Puliangudi Post, Tirunelveli District 627855",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.1,
    "established": 2000,
    "courses": [
      "Ph.D",
      "M.Arch",
      "MCA",
      "B.Sc"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Civil Engineering",
      "Information Technology",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Sardar Raja College of Engineering, Alangulam, Tirunelveli District 627808",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.8,
    "established": 2006,
    "courses": [
      "M.E",
      "BBA",
      "B.Tech",
      "M.Arch",
      "B.Arch",
      "M.Com",
      "MBA"
    ],
    "popularCourses": [
      "Biotechnology",
      "Data Science"
    ]
  },
  {
    "name": "SCAD College of Engineering and Technology, Cheranmahadevi, Tirunelveli District 627414",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.6,
    "established": 1957,
    "courses": [
      "MBA",
      "B.Tech",
      "B.Arch",
      "MCA",
      "M.Tech",
      "M.Sc",
      "B.Sc",
      "Ph.D"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "Sree Sowdambiga  College of Engineering, Aruppukkottai Taluk, Virudhunagar District 626134",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 3.3,
    "established": 1984,
    "courses": [
      "Ph.D",
      "M.E",
      "M.Sc"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Artificial Intelligence",
      "Biomedical Engineering",
      "Robotics Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "St. Xavier Catholic College of Engineering, Chunkankadai, Nagercoil, Kanyakumari District 629807",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1968,
    "courses": [
      "B.E",
      "B.Tech",
      "B.Arch",
      "M.Tech",
      "MCA",
      "Ph.D",
      "M.Com",
      "BBA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Chemical Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Amrita College of Engineering and Technology, Erachakulam Post, Kanyakumari District 629902",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1959,
    "courses": [
      "M.Com",
      "B.Sc",
      "M.E",
      "Ph.D",
      "MCA"
    ],
    "popularCourses": [
      "Data Science",
      "Artificial Intelligence",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Rajas Engineering College , Vadakkangulam, Tirunelveli District 627116",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2001,
    "courses": [
      "BBA",
      "Ph.D",
      "B.Arch",
      "MCA",
      "B.Com"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Government College of Engineering, Tirunelveli District 627007",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1981,
    "courses": [
      "B.Arch",
      "BBA",
      "B.Com",
      "MCA",
      "B.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Data Science",
      "Biotechnology"
    ]
  },
  {
    "name": "Dr. G U Pope College of Engineering, Sawyerpuram, Thoothukudi District  628251",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1951,
    "courses": [
      "M.Sc",
      "B.Sc",
      "B.Com",
      "B.Arch",
      "M.E",
      "MCA",
      "Ph.D"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Data Science",
      "Computer Science Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Infant Jesus College of Engineering, Thoothukudi Highway (NH7/A), Thoothukudi District 628851",
    "district": "Thoothukudi",
    "type": "Engineering",
    "rating": 5.0,
    "established": 2002,
    "courses": [
      "B.Arch",
      "M.Sc",
      "M.Arch",
      "B.E",
      "B.Tech",
      "B.Com",
      "MCA",
      "MBA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Electrical Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Narayanaguru College of Engineering, Manjalumoodu, Kanyakumari District 629151",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2007,
    "courses": [
      "Ph.D",
      "B.Tech",
      "B.Sc"
    ],
    "popularCourses": [
      "Textile Technology",
      "Environmental Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Udaya School of Engineering, Ammandivilai Post, Kanyakumari District 629204",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1999,
    "courses": [
      "M.Sc",
      "M.E",
      "MCA",
      "M.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Textile Technology",
      "Civil Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "V P Muthaiah Pillai Meenakshi Ammal Engineering College for Women, Srivilliputhur Taluk, Virudhunagar District 626190",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 3.5,
    "established": 2020,
    "courses": [
      "Ph.D",
      "M.Sc",
      "B.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Einstein College of Engineering, Seethaparpanallur, Tirunelveli District 627012",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1983,
    "courses": [
      "B.Arch",
      "B.Tech",
      "M.Arch",
      "M.Tech",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Agricultural Engineering",
      "Computer Science Engineering",
      "Biotechnology",
      "Information Technology"
    ]
  },
  {
    "name": "Ponjesly College of  Engineering, Vettornimadam Post, Nagercoil, Kanyakumari District 629003",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1979,
    "courses": [
      "M.Tech",
      "Ph.D",
      "B.Arch",
      "M.Com",
      "MCA",
      "M.Arch"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Biomedical Engineering",
      "Civil Engineering"
    ]
  },
  {
    "name": "Vins Christian College of Engineering, Chunkankadai Post, Nagercoil, Kanyakumari District  629807",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1973,
    "courses": [
      "B.Com",
      "Ph.D",
      "B.Tech",
      "B.E",
      "B.Arch"
    ],
    "popularCourses": [
      "Data Science",
      "Information Technology",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Lord Jegannath College of Engineering and Technology, Kumarapuram, Thoppur Post, Kanyakumari District 629402",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 3.0,
    "established": 1975,
    "courses": [
      "B.E",
      "M.E",
      "MBA",
      "M.Tech"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Marthandam College of Engineering & Technology, Kuttakuzhi, Veeyanoor Post, Kanyakumari District 629177",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1989,
    "courses": [
      "B.Com",
      "Ph.D",
      "M.Tech",
      "B.Tech",
      "M.E"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Biomedical Engineering",
      "Electrical Engineering",
      "Environmental Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "P S N Engineering College, Melathediyoor, Tirunelveli District 627152",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1982,
    "courses": [
      "B.Tech",
      "MBA",
      "M.Com",
      "BBA",
      "B.E",
      "M.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Textile Technology",
      "Civil Engineering",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Bethlahem Institute of Engineering, Karungal, Kanyakumari District 629157",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.9,
    "established": 2011,
    "courses": [
      "B.Arch",
      "M.E",
      "M.Tech",
      "M.Com"
    ],
    "popularCourses": [
      "Computer Science Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Loyola Institute of Technology and Science, Loyola Nagar,  P B No.2, Thovalai, Kanyakumari District 629302",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2008,
    "courses": [
      "M.Tech",
      "B.Com",
      "M.E",
      "BBA",
      "Ph.D"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Information Technology",
      "Biomedical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "J P College of Engineering, College Road, Ayakudy, Tenkasi Taluk, Tirunelveli District 627852",
    "district": "Tirunelveli",
    "type": "Engineering",
    "rating": 4.7,
    "established": 2020,
    "courses": [
      "B.Com",
      "BBA",
      "B.E",
      "M.Tech",
      "B.Arch",
      "MCA"
    ],
    "popularCourses": [
      "Textile Technology",
      "Chemical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "P S R Rengasamy College of Engineering for Women, Appayanaickenpatti, Sevalpatti, Virudhunagar District 626140",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1970,
    "courses": [
      "MBA",
      "B.Arch",
      "M.Com",
      "M.E",
      "M.Sc",
      "B.Com"
    ],
    "popularCourses": [
      "Textile Technology",
      "Artificial Intelligence",
      "Biotechnology",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Sri Vidhya College of Engineering and Technology, Sivakasi Main Road, P Kumaralinapuram, Virudhunagar District 626005",
    "district": "Virudhunagar",
    "type": "Engineering",
    "rating": 4.5,
    "established": 2014,
    "courses": [
      "M.Tech",
      "B.Sc",
      "BBA",
      "B.Arch",
      "B.E",
      "Ph.D",
      "MBA"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Chemical Engineering",
      "Robotics Engineering"
    ]
  },
  {
    "name": "Annai Vailankanni College of Engineering, Pothaiyadi Salai, Pottalkulam, Azhagappapuram, Kanyakumari District 629401",
    "district": "Kanyakumari",
    "type": "Engineering",
    "rating": 4.3,
    "established": 1958,
    "courses": [
      "Ph.D",
      "B.Sc",
      "M.Com"
    ],
    "popularCourses": [
      "Information Technology",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Thiagarajar College of Engineering (Autonomous), Tirupparankundram, Madurai District 625015",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.2,
    "established": 1988,
    "courses": [
      "B.Sc",
      "B.Tech",
      "BBA",
      "MCA",
      "M.Arch",
      "Ph.D",
      "M.Tech",
      "MBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Robotics Engineering",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Government College of Engineering,  Melachokkanathapuram, Bodinayakkanur,\u00e2\\[Euro]\\:2030Theni District 625 582",
    "district": "Theni",
    "type": "Engineering",
    "rating": 4.5,
    "established": 1976,
    "courses": [
      "B.E",
      "MBA",
      "M.Sc",
      "M.E"
    ],
    "popularCourses": [
      "Biotechnology",
      "Chemical Engineering",
      "Robotics Engineering",
      "Mechanical Engineering",
      "Environmental Engineering"
    ]
  },
  {
    "name": "Anna University Regional Campus - Madurai, Kanyakumari National Highway, Keelakuilkudi, Madurai District 625019",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1993,
    "courses": [
      "M.E",
      "Ph.D",
      "M.Arch",
      "M.Tech",
      "MCA",
      "B.E",
      "MBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Aerospace Engineering",
      "Agricultural Engineering",
      "Electrical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Central Electrochemical Research Institute, (CECRI), Karaikudi, Sivagangai District 630006",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2011,
    "courses": [
      "B.Arch",
      "M.Arch",
      "B.Sc"
    ],
    "popularCourses": [
      "Data Science",
      "Civil Engineering"
    ]
  },
  {
    "name": "University College of Engineering, Ramanathapuram, Pullangudi, Ramanathapuram District 623513",
    "district": "Ramanathapuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1980,
    "courses": [
      "MCA",
      "M.Com",
      "B.Sc",
      "M.Tech",
      "B.Arch"
    ],
    "popularCourses": [
      "Biotechnology",
      "Chemical Engineering",
      "Data Science"
    ]
  },
  {
    "name": "University College of Engineering, Dindigul, Mangarai Pirivu, Reddiyarchathiram, Dindigul District 624622",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 4.5,
    "established": 2017,
    "courses": [
      "Ph.D",
      "M.Com",
      "B.Sc",
      "M.Sc",
      "M.Tech",
      "B.Com",
      "B.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Textile Technology",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Sree Raaja Raajan College of Engineering & Technology, Amaravathi Village, Amaravathi Pudur Post, Karaikudi, Sivagangai District 630301",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1982,
    "courses": [
      "M.Sc",
      "B.E",
      "MBA",
      "B.Tech",
      "B.Com"
    ],
    "popularCourses": [
      "Data Science",
      "Information Technology",
      "Biomedical Engineering"
    ]
  },
  {
    "name": "SSM Institute of Engineering and Technology, Kuttathupatti Village, Sindalaigundu Post, Dindigul District 624002",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1999,
    "courses": [
      "M.Com",
      "MBA",
      "M.Tech",
      "M.E",
      "Ph.D",
      "B.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Electronics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Vaigai College of Engineering, Therkutheru, Melur Taluk, Madurai District 625122",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.8,
    "established": 1997,
    "courses": [
      "B.Tech",
      "B.Com",
      "M.Sc",
      "BBA",
      "M.Com",
      "M.Tech",
      "M.E",
      "M.Arch"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Data Science",
      "Biomedical Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Karaikudi Institute of Technology, KIT & KIM Technical Campus, Keeranipatti, Thalakkuvur, Karaikudi, Sivagangai District 630307",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 4.0,
    "established": 1960,
    "courses": [
      "B.Com",
      "MCA",
      "MBA",
      "B.Tech",
      "M.Tech"
    ],
    "popularCourses": [
      "Information Technology",
      "Agricultural Engineering",
      "Aerospace Engineering",
      "Artificial Intelligence",
      "Chemical Engineering"
    ]
  },
  {
    "name": "Mangayarkarasi College of Engineering, First Street, Mangayarkarasi Nagar, Paravai, Madurai District 625402",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.1,
    "established": 1952,
    "courses": [
      "MBA",
      "B.Sc",
      "M.Arch",
      "M.Sc",
      "Ph.D",
      "M.E"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Textile Technology",
      "Biotechnology",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Christian College of Engineering and Technology, Oddanchatram, Dindigul District 624619",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1976,
    "courses": [
      "M.Arch",
      "MCA",
      "M.Sc",
      "Ph.D",
      "MBA",
      "B.Com"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Electrical Engineering"
    ]
  },
  {
    "name": "Sri Subramanya College of Engineering and Technology, Sukkamanaickanpatti, Palani, Dindigul District 624615",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1984,
    "courses": [
      "MCA",
      "M.Sc",
      "B.Sc",
      "M.E",
      "M.Tech",
      "B.Tech"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Electronics Engineering",
      "Aerospace Engineering",
      "Robotics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "N P R College of Engineering and Technology, Natham, Dindigul District 624003",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1994,
    "courses": [
      "M.E",
      "M.Com",
      "B.Sc",
      "Ph.D",
      "M.Arch"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Madurai Institute of Engineering & Technology, Pottapalayam Village, Manamadurai Taluk, Sivagangai District 630611",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 4.4,
    "established": 2010,
    "courses": [
      "M.Sc",
      "MBA",
      "B.Sc",
      "MCA",
      "B.Tech"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Environmental Engineering",
      "Mechanical Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "Veerammal Engineering College, K Singarakottai, Dindigul District 624708",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1979,
    "courses": [
      "M.Sc",
      "B.Sc",
      "Ph.D",
      "B.Com",
      "B.Arch",
      "BBA",
      "MBA",
      "B.E"
    ],
    "popularCourses": [
      "Information Technology",
      "Agricultural Engineering",
      "Environmental Engineering",
      "Textile Technology"
    ]
  },
  {
    "name": "R V S Educational Trust\u00e2\\[Euro](TM)s Groups of Institutions (Integrated Campus), N Paraipatti Post, Vedasandur Taluk, Dindigul District 624005",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 3.4,
    "established": 2020,
    "courses": [
      "M.Com",
      "M.E",
      "M.Arch",
      "MBA",
      "B.Tech",
      "B.E",
      "BBA",
      "M.Sc"
    ],
    "popularCourses": [
      "Biotechnology",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Nadar Saraswathi College of Engineering and Technology, Vadupudupatti, Annanji Post, Theni District 625531",
    "district": "Theni",
    "type": "Engineering",
    "rating": 4.6,
    "established": 2012,
    "courses": [
      "M.Tech",
      "Ph.D",
      "BBA"
    ],
    "popularCourses": [
      "Textile Technology",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Alagappa Chettair Government College of Engineering and Technology (Autonomous), Karaikudi, Sivagangai District 630004",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 3.5,
    "established": 2019,
    "courses": [
      "MBA",
      "M.Sc",
      "B.Com",
      "M.Arch",
      "M.Com",
      "MCA",
      "Ph.D",
      "M.Tech"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Bharath Niketan Engineering College, Thimmarasanaickanoor, Aundipatti, Theni District 625536",
    "district": "Theni",
    "type": "Engineering",
    "rating": 4.4,
    "established": 1996,
    "courses": [
      "B.Sc",
      "M.Tech",
      "M.Com",
      "B.Com",
      "MBA",
      "B.Arch",
      "B.E"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "K L N College of Information Technology, Pottapalayam, Sivagangai District  630611",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 3.7,
    "established": 1976,
    "courses": [
      "BBA",
      "MCA",
      "B.E",
      "M.Sc",
      "M.Com",
      "M.E"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Robotics Engineering",
      "Chemical Engineering",
      "Electrical Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "K L N College of Engineering, Pottapalayam, Sivagangai District 630611",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1963,
    "courses": [
      "MBA",
      "B.E",
      "M.Sc",
      "B.Com",
      "M.Tech",
      "B.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Robotics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Mohamed Sathak Engineering College, Kilakarai, Ramanathapuram District 623806",
    "district": "Ramanathapuram",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1995,
    "courses": [
      "B.E",
      "B.Sc",
      "M.E",
      "M.Arch",
      "B.Arch"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biotechnology",
      "Chemical Engineering",
      "Electronics Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "P S N A Colllege of Engineering and Technology, Dindigul District 624622",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 3.4,
    "established": 1952,
    "courses": [
      "B.E",
      "M.Tech",
      "B.Arch",
      "M.Sc",
      "B.Tech",
      "M.Com",
      "BBA",
      "B.Sc"
    ],
    "popularCourses": [
      "Biomedical Engineering",
      "Computer Science Engineering",
      "Textile Technology",
      "Artificial Intelligence",
      "Electrical Engineering"
    ]
  },
  {
    "name": "P T R College of Engineering and Technology, Austinpatty Post, Madurai District 625008",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 4.9,
    "established": 1957,
    "courses": [
      "B.Sc",
      "B.Com",
      "Ph.D",
      "M.Sc",
      "B.E",
      "B.Tech"
    ],
    "popularCourses": [
      "Electrical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Pandian Saraswathi Yadav Engineering College, Thirumansolai Post, Sivagangai District 630 561",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 3.9,
    "established": 1966,
    "courses": [
      "M.Arch",
      "M.E",
      "M.Com"
    ],
    "popularCourses": [
      "Information Technology",
      "Aerospace Engineering",
      "Artificial Intelligence"
    ]
  },
  {
    "name": "Ratnavel Subramaniam College of Engineering and Technology, N Paraipatti Post, Dindigul District 624005",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 4.1,
    "established": 1965,
    "courses": [
      "M.E",
      "BBA",
      "Ph.D",
      "M.Tech",
      "M.Sc"
    ],
    "popularCourses": [
      "Robotics Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "SOLAIMALAI COLLEGE OF ENGINEERIG, Veerapanjan, Madurai District 625020",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.6,
    "established": 1965,
    "courses": [
      "BBA",
      "B.Com",
      "M.Arch"
    ],
    "popularCourses": [
      "Textile Technology",
      "Computer Science Engineering",
      "Information Technology",
      "Electronics Engineering",
      "Chemical Engineering"
    ]
  },
  {
    "name": "SACS-M A V M M Engineering College, Kidaripatty Post, Madurai District 625001",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.5,
    "established": 2007,
    "courses": [
      "MBA",
      "Ph.D",
      "M.Sc",
      "B.Sc",
      "B.Com",
      "M.Com",
      "B.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Data Science",
      "Artificial Intelligence",
      "Robotics Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "St. Michael College of Engineering and Technology, Kalayarkoil, Sivagangai District 630551",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1969,
    "courses": [
      "M.Sc",
      "M.E",
      "B.Sc",
      "M.Com",
      "MCA",
      "MBA"
    ],
    "popularCourses": [
      "Environmental Engineering",
      "Biomedical Engineering",
      "Mechanical Engineering"
    ]
  },
  {
    "name": "Syed Ammal Engineering College, Achunthanvayal Post, Ramanathapuram District-623502",
    "district": "Ramanathapuram",
    "type": "Engineering",
    "rating": 4.5,
    "established": 2000,
    "courses": [
      "B.Arch",
      "M.E",
      "M.Sc",
      "B.Com"
    ],
    "popularCourses": [
      "Chemical Engineering",
      "Computer Science Engineering",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Vickram College of Engineering, Enathi Post, Sivagangai District 630561",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1977,
    "courses": [
      "MBA",
      "M.Sc",
      "M.Arch",
      "M.Com",
      "B.E"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Computer Science Engineering",
      "Biotechnology",
      "Data Science",
      "Electronics Engineering"
    ]
  },
  {
    "name": "Ganapathy Chettiar College of Engineering and Technology, Melakavanur Post, Paramakudi, Ramanathapuram District 623706",
    "district": "Ramanathapuram",
    "type": "Engineering",
    "rating": 4.0,
    "established": 2012,
    "courses": [
      "B.Sc",
      "B.Arch",
      "M.E",
      "MCA",
      "M.Sc",
      "MBA",
      "BBA"
    ],
    "popularCourses": [
      "Aerospace Engineering",
      "Civil Engineering",
      "Robotics Engineering",
      "Chemical Engineering",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "SBM College of Engineering and Technology, Thamaraipady, T N Paraipatti Pirivu, Dindigul District 624005",
    "district": "Dindigul",
    "type": "Engineering",
    "rating": 5.0,
    "established": 1984,
    "courses": [
      "M.Tech",
      "M.E",
      "B.Sc",
      "Ph.D",
      "M.Sc",
      "MCA",
      "M.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Information Technology"
    ]
  },
  {
    "name": "Fatima Michael College of Engineering & Technology, Sengottai Village, Sivagangai Main Road, Madurai District 625020",
    "district": "Sivaganga",
    "type": "Engineering",
    "rating": 4.8,
    "established": 1961,
    "courses": [
      "BBA",
      "B.Com",
      "B.Sc",
      "MBA",
      "Ph.D",
      "M.Tech",
      "M.Com",
      "M.Sc"
    ],
    "popularCourses": [
      "Artificial Intelligence",
      "Information Technology",
      "Data Science",
      "Agricultural Engineering"
    ]
  },
  {
    "name": "Ultra College of Engineering & Technology , Kodikulam, 1 Bit Village, Madurai-Chennai Highway, Madurai District 625104",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 4.7,
    "established": 1988,
    "courses": [
      "MCA",
      "M.E",
      "M.Com",
      "MBA",
      "M.Arch",
      "BBA"
    ],
    "popularCourses": [
      "Electronics Engineering",
      "Robotics Engineering",
      "Aerospace Engineering"
    ]
  },
  {
    "name": "Velammal College of Engineering and Technology, Madurai - Rameshwaram High Road, Viraganoor, Madurai District 625009",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 4.2,
    "established": 1975,
    "courses": [
      "M.Com",
      "Ph.D",
      "B.Tech",
      "M.Sc",
      "M.Arch"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Data Science",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Biotechnology"
    ]
  },
  {
    "name": "Theni Kammavar Sangam College of Technology, Theni Main Road, Koduvillarpatti Post, Theni District 625534",
    "district": "Theni",
    "type": "Engineering",
    "rating": 3.0,
    "established": 2019,
    "courses": [
      "B.Com",
      "B.E",
      "M.Com",
      "MCA",
      "M.Tech",
      "M.Arch"
    ],
    "popularCourses": [
      "Information Technology",
      "Artificial Intelligence",
      "Aerospace Engineering",
      "Textile Technology",
      "Computer Science Engineering"
    ]
  },
  {
    "name": "Latha Mathavan Engineering College, Kidaripatti Post, Alagarkoil (Via), Melur Taluk, Madurai District 625301",
    "district": "Madurai",
    "type": "Engineering",
    "rating": 3.5,
    "established": 1968,
    "courses": [
      "B.Com",
      "M.Sc",
      "M.E",
      "M.Arch",
      "M.Com"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Biotechnology"
    ]
  }
];

// Districts of Tamil Nadu
const districts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kancheepuram",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const College: React.FC = () => {
  const [filteredColleges, setFilteredColleges] = useState(
    colleges.slice(0, 10)
  );
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsHeading, setResultsHeading] = useState(
    "Top 10 Colleges in Tamil Nadu"
  );
  const [showAllColleges, setShowAllColleges] = useState(false);

  useEffect(() => {
    document.title = "College Studies - College Finder";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue("collegeCount", 0, 500, 2000);
            animateValue("courseCount", 0, 100, 1500);
            animateValue("studentCount", 0, 10, 2500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroStats = document.querySelector(".hero-stats");
    if (heroStats) {
      observer.observe(heroStats);
    }

    return () => {
      if (heroStats) {
        observer.unobserve(heroStats);
      }
    };
  }, []);

  const animateValue = (
    id: string,
    start: number,
    end: number,
    duration: number
  ) => {
    const obj = document.getElementById(id);
    if (!obj) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      if (obj) {
        obj.innerHTML = value + (id === "studentCount" ? "K+" : "+");
        if (progress < 1) {
          obj.classList.add("counting-animation");
        } else {
          setTimeout(() => {
            obj.classList.remove("counting-animation");
          }, 500);
        }
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const displayTopColleges = () => {
    const top10 = [...colleges]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);
    setFilteredColleges(top10);
    setResultsHeading("Top 10 Colleges in Tamil Nadu");
    setShowAllColleges(false);
  };

  const searchColleges = () => {
    let results = colleges;

    if (selectedDistrict) {
      results = results.filter(
        (college) => college.district === selectedDistrict
      );
    }

    if (selectedType) {
      results = results.filter((college) => college.type === selectedType);
    }

    if (searchTerm) {
      results = results.filter(
        (college) =>
          college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          college.courses.some((course) =>
            course.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredColleges(results);
    setShowAllColleges(true);

    let heading = "Search Results";
    if (selectedDistrict || selectedType || searchTerm) {
      heading += " for";
      if (selectedDistrict) heading += ` District: ${selectedDistrict}`;
      if (selectedType) heading += ` Type: ${selectedType}`;
      if (searchTerm) heading += ` Search: "${searchTerm}"`;
    } else {
      heading = "All Colleges in Tamil Nadu";
    }

    setResultsHeading(heading);
  };

  const loadMoreColleges = () => {
    setFilteredColleges(colleges);
    setResultsHeading("All Colleges in Tamil Nadu");
    setShowAllColleges(true);
  };

  return (
    <>
      <section id="home" className="college-hero">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInDown text-4xl font-inter font-semibold text-primary-900 tracking-wide">
            Find Your Perfect College
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Discover opportunities that shape your future
          </p>
          <div className="hero-stats animate__animated animate__fadeIn animate__delay-2s">
            <div className="stat-item">
              <span className="stat-number" id="collegeCount">
                0+
              </span>
              <span className="stat-label">Colleges</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" id="courseCount">
                0+
              </span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" id="studentCount">
                0K+
              </span>
              <span className="stat-label">Students</span>
            </div>
          </div>
          <a
            href="#searchResults"
            className="cta-button animate__animated animate__fadeInUp animate__delay-3s pulse-animation"
          >
            Explore Colleges
          </a>
        </div>
      </section>
      <br />

      <div className="search-container" data-aos="fade-up">
        <div className="text-center">
          <h2 className="animate__animated animate__fadeIn text-center text-4xl my-5">
            College Search
          </h2>
        </div>
        <div className="search-grid">
          <div className="search-group">
            <label htmlFor="districtSelect">Select District</label>
            <select
              id="districtSelect"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">All Districts</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <label htmlFor="collegeTypeSelect">Select College Type</label>
            <select
              id="collegeTypeSelect"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Engineering">Engineering</option>
              <option value="Arts and Science">Arts & Science</option>
              <option value="Medical">Medical</option>
              <option value="Polytechnic">Polytechnic</option>
            </select>
          </div>
        </div>
        <div className="search-group">
          <label htmlFor="collegeSearch">Search College Name</label>
          <input
            type="text"
            id="collegeSearch"
            placeholder="Enter college name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchColleges();
              }
            }}
          />
        </div>
        <div className="button-group">
          <button className="search-btn" onClick={searchColleges}>
            Search Colleges
          </button>
          <button className="show-top-btn" onClick={displayTopColleges}>
            Show Top Colleges
          </button>
        </div>
      </div>

      <h2 className="results-heading" id="searchResults">
        {resultsHeading}
      </h2>
      <div className="colleges-grid">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <div
              className="college-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="college-image-container">
                <span className="type-badge">{college.type}</span>
                {college.rating >= 4.5 && (
                  <span className="rating-badge">Top Rated</span>
                )}
              </div><br />
              <div className="college-content">
                <div className="college-header">
                  <div>
                    <h3>{college.name}</h3>
                    <p className="college-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {college.district}
                      </span>
                      <span>
                        <i className="fas fa-star"></i> {college.rating}/5
                      </span>
                      <span>
                        <i className="fas fa-calendar-alt"></i> Est.{" "}
                        {college.established}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="college-details">
                  <h4>
                    Popular Courses:{" "}
                    <span>{college.popularCourses.join(", ")}</span>
                  </h4>
                  <p>Available Courses:</p>
                  <div className="course-tags">
                    {college.courses.map((course, idx) => (
                      <span key={idx} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="college-actions flex gap-4">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/916380539537?text=Hi%2C%20I%20am%20interested%20in%20college%20admission%20guidance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="view-details-btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                      View Details for contact
                    </button>
                  </a>

                  {/* Call Button */}
                  <a href="tel:6380539537">
                    <button className="call-now-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
              <br />
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-university"></i>
            <h3>No colleges found matching your criteria</h3>
            <p>Try adjusting your search filters</p>
          </div>
        )}
      </div>
      <br />

      {!showAllColleges && filteredColleges.length > 0 && (
        <div className="text-center mt-4">
          <button className="load-more-btn" onClick={loadMoreColleges}>
            Show All Colleges
          </button>
          <br />
        </div>
      )}

      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 animate__animated animate__fadeIn text-center text-4xl my-5">
            Popular Courses in Tamil Nadu
          </h2>
        </div>
        <div className="courses-grid">
          <div className="course-card" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Computer Science"
            />
            <div className="course-content">
              <h3>Computer Science</h3>
              <p>B.E/B.Tech in Computer Science and Engineering</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Medical"
            />
            <div className="course-content">
              <h3>MBBS</h3>
              <p>Bachelor of Medicine and Bachelor of Surgery</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Mathematics"
            />
            <div className="course-content">
              <h3>B.Sc Mathematics</h3>
              <p>Bachelor of Science in Mathematics</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="250">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Electrical Engineering"
            />
            <div className="course-content">
              <h3>Electrical Engineering</h3>
              <p>B.E/B.Tech in Electrical and Electronics Engineering</p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default College;