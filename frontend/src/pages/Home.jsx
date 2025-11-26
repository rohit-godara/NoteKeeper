import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { DocumentTextIcon, MagnifyingGlassIcon, CloudIcon, CheckIcon, StarIcon, ShieldCheckIcon, DevicePhoneMobileIcon, BoltIcon, UsersIcon, ChartBarIcon, GlobeAltIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const { token } = useAuth()

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col justify-center min-h-screen py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">NoteKeeper</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                The ultimate note-taking platform for modern professionals. Capture ideas, organize thoughts, and boost productivity with our intelligent note management system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                {token ? (
                  <Link
                    to="/dashboard"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      to="/login"
                      className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl"
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </div>

              <div className="text-center mb-12">
                <p className="text-gray-600 mb-3">Trusted by 10,000+ users worldwide</p>
                <div className="flex justify-center items-center space-x-6 opacity-60">
                  <div className="text-lg font-bold">Google</div>
                  <div className="text-lg font-bold">Microsoft</div>
                  <div className="text-lg font-bold">Apple</div>
                  <div className="text-lg font-bold">Amazon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Every Need</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything you need to capture, organize, and access your notes efficiently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <DocumentTextIcon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Rich Text Editor</h3>
              <p className="text-gray-600">Create beautiful notes with formatting, lists, and multimedia support for enhanced productivity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <MagnifyingGlassIcon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
              <p className="text-gray-600">Find any note instantly with AI-powered search across titles, content, and tags.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <CloudIcon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Cloud Sync</h3>
              <p className="text-gray-600">Access your notes from any device with real-time synchronization and offline support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-lg">Notes Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NoteKeeper?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Built for modern productivity with enterprise-grade security and reliability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <CheckIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Simple & Intuitive</h3>
              <p className="text-gray-600 text-sm">Clean interface designed for focus and productivity without distractions.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <StarIcon className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Smart Organization</h3>
              <p className="text-gray-600 text-sm">AI-powered categorization and tagging for effortless note management.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <ShieldCheckIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-sm">End-to-end encryption with SOC 2 compliance for maximum data protection.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <DevicePhoneMobileIcon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Cross-Platform</h3>
              <p className="text-gray-600 text-sm">Native apps for iOS, Android, Windows, Mac, and web browsers.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <BoltIcon className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">Optimized performance with instant search and real-time collaboration.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <UsersIcon className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Share notes and collaborate with team members in real-time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Join thousands of satisfied users who trust NoteKeeper</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-3 text-sm">"NoteKeeper has revolutionized how I organize my thoughts. The search feature is incredible!"</p>
              <div className="font-semibold text-sm">Sarah Johnson</div>
              <div className="text-gray-500 text-xs">Product Manager</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Mike Chen" className="w-12 h-12 rounded-full mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-3 text-sm">"Perfect for team collaboration. We use it for all our project documentation."</p>
              <div className="font-semibold text-sm">Mike Chen</div>
              <div className="text-gray-500 text-xs">Engineering Lead</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Emily Davis" className="w-12 h-12 rounded-full mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-3 text-sm">"Clean, fast, and reliable. Everything I need in a note-taking app."</p>
              <div className="font-semibold text-sm">Emily Davis</div>
              <div className="text-gray-500 text-xs">Content Creator</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-6">Join thousands of users who have transformed their productivity with NoteKeeper.</p>
          
          {!token && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}