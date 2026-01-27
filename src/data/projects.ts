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
    title: 'Movie Web App',
    status: 'progress' as const,
    description: 'Responsive movie discovery web. Features dynamic data fetching to explore movie categories, real-time details, and full-screen trailers.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Jotai', 'date-fns'],
    features: [
      'Dynamic data fetching for movie categories',
      'Real-time movie details and information',
      'Full-screen trailer viewing experience',
      'Efficient data caching with React Query',
      'Global state management with Jotai'
    ],
    github: 'https://github.com/EdgarGT041/Movie-Web-App',
    image: '../images/movie-web-app.png'
  }
];

export type Project = typeof projects[0];