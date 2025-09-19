import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>John Williams - Software Developer Portfolio</title>
        <meta name="description" content="Full-stack software developer with expertise in React, Django, and modern web technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Hero Section */}
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <div className="mb-8">
              <h1 
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 tracking-widest drop-shadow-2xl mb-6"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
                  letterSpacing: '0.1em'
                }}
              >
                John Williams
              </h1>
              
              {/* Subtitle */}
              <div className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
                <span className="text-blue-400">Software Developer</span> 
                <span className="mx-3 text-gray-500">•</span> 
                <span className="text-purple-400">Music Producer</span>
                <span className="mx-3 text-gray-500">•</span> 
                <span className="text-green-400">Creative Technologist</span>
              </div>
            </div>

            {/* Bio Section */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-8 px-4">
                I bring a unique blend of <span className="text-blue-400 font-semibold">creative problem-solving</span> and 
                <span className="text-purple-400 font-semibold"> technical aptitude</span> developed through my background in audio engineering. 
                Prior to my transition into software development, I worked at a leading production company, where I discovered my 
                <span className="text-green-400 font-semibold"> passion for technology</span> and its transformative potential.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/projects/gearspot"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
                >
                  View My Projects
                </Link>
              </div>
            </div>

            {/* Tech Stack Icons/Tags */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'JavaScript', 'Python', 'Django', 'SQL', 'HTML/CSS', 'Git'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Music Link */}
            <div className="mt-8">
              <Link 
                href="https://open.spotify.com/artist/7z529bqQyJFGNNEkgvu3b1?si=Xo7UBhQ-S6eRPIamJdiTNQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.42.179-.78.54-.84 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen to my music as Soul Saturation
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </>
  );
}