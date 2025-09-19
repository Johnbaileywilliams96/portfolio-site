import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function GearSpot() {
  return (
    <>
      <Head>
        <title>GearSpot - Social Platform for Musicians | John Williams</title>
        <meta name="description" content="A social platform for musicians to showcase and discover musical gear" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              GearSpot
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A social platform for musicians to showcase, discover, and connect over their musical gear
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                  GearSpot is a social platform designed specifically for musicians and gear enthusiasts. 
                  Users can showcase their newly acquired equipment, discover trending gear, and connect 
                  with other musicians who share similar interests.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether it&apos;s a vintage guitar, cutting-edge synthesizer, or professional recording equipment, 
                  GearSpot is the place to share your passion for musical instruments and technology.
                </p>
                
                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Django', 'Python', 'PostgreSQL', 'CSS3', 'JavaScript', 'Django REST Framework'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <video 
                src="/images/gearspot/demo.mp4" 
                width={400} 
                height={250} 
                className="rounded-lg shadow-md"
                controls
                preload="metadata"
                >
  Your browser does not support the video tag.
</video>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Feed</h3>
                <p className="text-gray-600">Browse and interact with posts from musicians showcasing their latest gear acquisitions.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gear Showcase</h3>
                <p className="text-gray-600">Upload photos and details of your musical equipment with descriptions and specifications.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Profiles</h3>
                <p className="text-gray-600">Create personalized profiles showcasing your gear collection and musical interests.</p>
              </div>
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <Image 
                src="/images/gearspot/profile.png" 
                alt="GearSpot Profile" 
                width={400} 
                height={250} 
                className="rounded-lg shadow-md"
                />
              </div>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <Image 
                src="/images/gearspot/create.png" 
                alt="GearSpot Create Post" 
                width={400} 
                height={250} 
                className="rounded-lg shadow-md"
                />
              </div>
        
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
              <Image 
                src="/images/gearspot/homepage.png" 
                alt="GearSpot Homepage" 
                width={400} 
                height={250} 
                className="rounded-lg shadow-md"
                />
              
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Challenges & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Image Upload & Storage</h3>
                <p className="text-gray-600 mb-4">
                  Implemented efficient image upload functionality with Django&apos;s file handling system, 
                  ensuring proper validation and storage of user-generated gear photos.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Built secure user authentication system allowing musicians to create accounts, 
                  login, and manage their personal gear collections.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/Johnbaileywilliams96/Gear_client"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                View Code on GitHub
              </a>
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