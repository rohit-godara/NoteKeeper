import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { userAPI } from '../utils/api'
import { DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const { user, logout, token } = useAuth()
  const [profile, setProfile] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          const response = await userAPI.getProfile()
          setProfile(response.data)
        } catch (error) {
          console.error('Error fetching profile:', error)
        }
      }
      fetchProfile()
    }
  }, [token])

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-md">
                <DocumentTextIcon className="h-5 w-5 text-white" />
              </div>
              <span>NoteKeeper</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {token ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    isActive('/dashboard') 
                      ? 'bg-blue-100 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    isActive('/profile') 
                      ? 'bg-blue-100 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  Profile
                </Link>
                <Link 
                  to="/about" 
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    isActive('/about') 
                      ? 'bg-blue-100 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  About
                </Link>
                <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={profile?.profilePhoto || user?.profilePhoto || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{profile?.name || user?.name}</div>
                      <div className="text-xs text-gray-500">{profile?._count?.notes || 0} notes</div>
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive('/about') 
                      ? 'bg-blue-100 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/login" 
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive('/login') 
                      ? 'bg-blue-100 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar