import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkoutApp() {
  return (
    <>
      <Head>
        <title>Workout Log Application - Fitness Tracking Platform | John Williams</title>
        <meta name="description" content="A comprehensive fitness tracking application with social features and workout logging" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Workout Log Application
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive fitness tracking platform with social features for sharing workouts and connecting with other fitness enthusiasts
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                  The Workout Log Application is a full-stack fitness tracking platform that allows users to 
                  log their workouts, track progress over time, and engage with a community of fitness enthusiasts 
                  through social features like likes and comments.
                </p>
                <p className="text-gray-700 mb-6">
                  Built as my capstone project, this application demonstrates comprehensive CRUD functionality, 
                  user authentication, and modern responsive design principles. Users can create detailed workout 
                  entries, view their fitness journey, and motivate others in the community.
                </p>
                
                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript (ES6+)', 'CSS3', 'HTML5', 'JSON Server', 'Local Storage', 'Responsive Design'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Fixed video element with proper attributes */}
                <video 
                  src="/images/workout/vid.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workout Tracking</h3>
                <p className="text-gray-600">Log detailed workouts with exercises, sets, reps, and weights. Track progress over time with comprehensive data.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Features</h3>
                <p className="text-gray-600">Like and comment on other users workouts. Build a supportive fitness community through social interaction.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Authentication</h3>
                <p className="text-gray-600">Secure user registration and login system with personalized workout tracking and profile management.</p>
              </div>
            </div>
          </div>

          {/* Screenshots Gallery */}
          {/* Screenshots Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Fixed containers with consistent sizing */}
              <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/images/workout/community.png" 
                  alt="Community Feed" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/images/workout/login.png" 
                  alt="Login Screen" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/images/workout/profile.png" 
                  alt="User Profile" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/images/workout/progress.png" 
                  alt="Progress Tracking" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/images/workout/main.png" 
                  alt="Main Dashboard" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src="/images/workout/sets.png" 
                  alt="Exercise Sets" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Challenges & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">State Management</h3>
                <p className="text-gray-600 mb-4">
                  Implemented comprehensive state management for workout data, user interactions, and social features 
                  using React hooks and context to ensure smooth user experience across components.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Component Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Built reusable, maintainable components following React best practices with clear separation 
                  of concerns and proper data flow between parent and child components.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Persistence</h3>
                <p className="text-gray-600 mb-4">
                  Integrated with JSON Server for API simulation and local storage for user preferences, 
                  ensuring data persistence and smooth offline experience capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsive Design</h3>
                <p className="text-gray-600 mb-4">
                  Developed mobile-first responsive design using modern CSS techniques and Flexbox/Grid 
                  to ensure optimal user experience across all device sizes and screen orientations.
                </p>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Capstone project demonstrating full-stack development skills</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Complete CRUD functionality with user authentication</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Social features including likes and comments system</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Responsive design optimized for all devices</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com/Johnbaileywilliams96/workout-capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                View Code on GitHub
              </Link>
              <Link 
                href="/"
                className="px-8 py-3 border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}