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
    description: 'Movie catalog web application built with React 18, TypeScript, and Vite. Integrates The Movie Database (TMDb) API to display real-time movie information, including top rated, now playing, and popular films. Implements React Router DOM for multi-page navigation, Axios for REST API consumption, skeleton loading components, and infinite scroll with load-more functionality. Features detailed movie pages with YouTube trailers and similar movie recommendations.',
    tech: ['React 18', 'TypeScript', 'Vite', 'React Router DOM', 'Axios', 'TMDb API'],
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