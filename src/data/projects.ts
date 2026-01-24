export const projects = [
  {
    title: 'Weather App',
    status: 'live' as const,
    description: 'Modern weather forecast application with real-time data and geolocation support.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Jotai'],
    features: [
      'Real-time weather data from OpenWeatherMap API',
      'Advanced data caching with React Query',
      'Global state management with Jotai',
      'Responsive design with Tailwind CSS'
    ],
    demo: 'https://weather-app-bre8.vercel.app',
    github: 'https://github.com/EdgarGT041/Weather-App',
    image: '../images/weather-app.png'
  },
  {
    title: 'HR Management System',
    status: 'progress' as const,
    description: 'Full-stack employee management platform with robust backend architecture.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'Bootstrap'],
    features: [
      'RESTful API with Spring Boot',
      'Complex data persistence with JPA and Hibernate',
      'Asynchronous CRUD operations with Axios',
      'Responsive UI with Bootstrap and React Router'
    ],
    github: '#',
    image: '/images/hr-system.png'
  }
];

export type Project = typeof projects[0];