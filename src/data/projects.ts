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
    description: 'Movie catalog web application. Display real time movie information, including top rated, now playing, and popular films.',
    tech: ['React ', 'TypeScript', 'Vite', 'React Router DOM', 'React-youtube', 'React-icons'],
    features: [
      'Real-time movie information from TMDb API',
      'Multi-page navigation with React Router DOM',
      'Skeleton loading components for better UX',
      'Infinite scroll with load-more functionality',
      'Detailed movie pages with YouTube trailers',
      'Similar movie recommendations'
    ],
    github: 'https://github.com/EdgarGT041/Movie-Web-App',
    image: '../images/movie-web-app.png'
  }
];

export type Project = typeof projects[0];