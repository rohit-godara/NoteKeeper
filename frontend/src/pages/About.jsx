import { Link } from 'react-router-dom'
import { DocumentTextIcon, UserGroupIcon, ShieldCheckIcon, CloudIcon, DevicePhoneMobileIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
              <DocumentTextIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About NoteKeeper</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, powerful, and secure note-taking application designed to help you capture, organize, and manage your ideas effortlessly.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-2xl rounded-xl border mb-12 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            NoteKeeper was created to solve the common problem of scattered thoughts and ideas. We believe that everyone deserves a clean, 
            minimal interface to capture their thoughts without the complexity of bloated applications. Our goal is to provide a seamless 
            note-taking experience that works across all your devices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <DocumentTextIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Organization</h3>
            <p className="text-gray-600">Organize your notes with categories, tags, and powerful search functionality to find what you need instantly.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-600">Your notes are protected with JWT authentication and stored securely in our encrypted database.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
              <CloudIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Sync</h3>
            <p className="text-gray-600">Access your notes from anywhere with automatic cloud synchronization across all your devices.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
              <DevicePhoneMobileIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Friendly</h3>
            <p className="text-gray-600">Responsive design that works perfectly on desktop, tablet, and mobile devices for note-taking on the go.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Search</h3>
            <p className="text-gray-600">Find your notes quickly with real-time search, filtering by categories, and sorting options.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
              <UserGroupIcon className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User Focused</h3>
            <p className="text-gray-600">Built with user experience in mind, featuring intuitive navigation and clean, distraction-free interface.</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white shadow-2xl rounded-xl border mb-12 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built With Modern Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React.js</div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">TailwindCSS</div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React Router</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Express.js</div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">JWT Auth</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Database</h3>
              <div className="space-y-2">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB</div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Prisma ORM</div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Atlas Cloud</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of users who trust NoteKeeper with their ideas and thoughts.</p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}