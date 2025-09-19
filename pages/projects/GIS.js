import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function GIS() {
  return (
    <>
      <Head>
        <title>Park Accessibility and Hydration Infrastructure Analysis | John Williams</title>
        <meta name="description" content="GIS analysis of park accessibility and hydration infrastructure at Bicentennial Capitol Mall State Park in Nashville, TN" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Park Accessibility and Hydration Infrastructure Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Spatial analysis of tree coverage relative to hydration stations at Bicentennial Capitol Mall State Park, Nashville, TN
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                  This GIS analysis examines the spatial relationship between tree coverage and hydration 
                  infrastructure at Bicentennial Capitol Mall State Park in Nashville, Tennessee. The study 
                  identifies areas within a quarter-mile radius of hydration stations to assess park accessibility 
                  and infrastructure coverage.
                </p>
                <p className="text-gray-700 mb-6">
                  Using spatial analysis techniques including buffer analysis and vector overlay operations, 
                  this project demonstrates the application of GIS methodology to urban park planning and 
                  environmental equity assessment.
                </p>
                
                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {['ArcGIS Pro', 'Buffer Analysis', 'Vector Data Analysis', 'Raster Data Processing', 'Spatial Analysis', 'Cartographic Design', 'Nashville Census Data'].map((tech) => (
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
              
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <Image src="/images/GIS/main-map.png" alt="Park Accessibility Analysis Map" width={500} height={300} className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">GIS Methodology</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Acquisition</h3>
                <p className="text-gray-600">Acquired shapefiles from Nashville Census including park boundaries, hydration stations, and infrastructure data.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4m0 0V1m0 2h4m0 0V1m0 2h4a1 1 0 011 1v4M3 5v10a2 2 0 002 2h3m3 0h3a2 2 0 002-2V5M3 5a2 2 0 012-2h3m0 0h3m0 0h3a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Buffer Analysis</h3>
                <p className="text-gray-600">Created quarter-mile (0.25 mile) buffers around hydration stations to analyze service coverage areas.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vector Data</h3>
                <p className="text-gray-600">Processed vector data for roads, park trails, bikeways, and greenway infrastructure mapping.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Raster Analysis</h3>
                <p className="text-gray-600">Analyzed raster data for tree coverage patterns and identified underserved areas lacking vegetation.</p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Findings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hydration Station Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Buffer analysis revealed coverage areas around existing hydration stations, identifying 
                  both well-served zones and potential gaps in park infrastructure accessibility.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tree Coverage Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Raster analysis of tree coverage data showed varying levels of vegetation density 
                  across the park, with implications for visitor comfort and environmental equity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Underserved Areas</h3>
                <p className="text-gray-600 mb-4">
                  Spatial overlay analysis identified areas with limited tree coverage relative to 
                  hydration infrastructure, highlighting potential areas for park improvement.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Integration</h3>
                <p className="text-gray-600 mb-4">
                  Vector analysis of trails, bikeways, and park amenities provided comprehensive 
                  understanding of how hydration and shade infrastructure serve park visitors.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Demonstrated */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">GIS Skills Demonstrated</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Spatial Analysis</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Buffer analysis and proximity modeling</li>
                  <li>• Vector overlay operations</li>
                  <li>• Raster data processing and analysis</li>
                  <li>• Multi-layer spatial queries</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Shapefile acquisition and processing</li>
                  <li>• Census data integration</li>
                  <li>• Coordinate system management</li>
                  <li>• Data quality assessment and cleaning</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cartographic Design</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Professional map layout and design</li>
                  <li>• Legend and symbology creation</li>
                  <li>• Scale and projection considerations</li>
                  <li>• Visual hierarchy and clarity</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Links */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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