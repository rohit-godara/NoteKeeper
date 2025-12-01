import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { userAPI } from '../utils/api'
import { UserIcon, EnvelopeIcon, DocumentTextIcon, CalendarIcon, PencilIcon, CheckIcon, XMarkIcon, CameraIcon } from '@heroicons/react/24/outline'

export default function Profile() {
  const { user, login } = useAuth()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState('')
  const [saving, setSaving] = useState(false)
  const [uploadingPhoto, setUploadingPhoto] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await userAPI.getProfile()
        setProfile(response.data)
        setEditName(response.data.name)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  const handleEdit = () => {
    setEditName(profile?.name || user?.name)
    setEditing(true)
  }

  const handleCancel = () => {
    setEditName(profile?.name || user?.name)
    setEditing(false)
  }

  const handleSave = async () => {
    if (!editName.trim()) return
    
    setSaving(true)
    try {
      const response = await userAPI.updateProfile({ name: editName.trim() })
      setProfile(response.data)
      login(localStorage.getItem('token'), { ...user, name: response.data.name })
      setEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setSaving(false)
    }
  }

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    setUploadingPhoto(true)
    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const base64 = e.target.result
        const response = await userAPI.updateProfile({ 
          name: profile?.name || user?.name,
          profilePhoto: base64 
        })
        setProfile(response.data)
        login(localStorage.getItem('token'), { ...user, profilePhoto: response.data.profilePhoto })
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error uploading photo:', error)
    } finally {
      setUploadingPhoto(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading profile...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      <main className="max-w-4xl mx-auto py-8 sm:px-6 lg:px-8 relative">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-2xl rounded-xl border">
            <div className="px-8 py-10">
              <div className="flex items-center mb-8">
                <div className="relative mr-6">
                  {profile?.profilePhoto || user?.profilePhoto ? (
                    <img 
                      src={profile?.profilePhoto || user?.profilePhoto} 
                      alt="Profile" 
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-blue-200 flex items-center justify-center">
                      <UserIcon className="h-12 w-12 text-gray-500" />
                    </div>
                  )}
                  <label className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer transition-colors">
                    <CameraIcon className="h-4 w-4 text-white" />
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handlePhotoUpload}
                      className="hidden"
                      disabled={uploadingPhoto}
                    />
                  </label>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
                  <p className="text-gray-600 mt-1">Manage your account information and preferences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Info */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                          <UserIcon className="h-4 w-4 mr-2" />
                          Full Name
                        </label>
                        {editing ? (
                          <div className="flex space-x-3">
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                              placeholder="Enter your full name"
                            />
                            <button
                              onClick={handleSave}
                              disabled={saving}
                              className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg disabled:opacity-50 transition-colors flex items-center space-x-2"
                            >
                              <CheckIcon className="h-4 w-4" />
                              <span>{saving ? 'Saving...' : 'Save'}</span>
                            </button>
                            <button
                              onClick={handleCancel}
                              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center space-x-2"
                            >
                              <XMarkIcon className="h-4 w-4" />
                              <span>Cancel</span>
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center px-4 py-3 border border-gray-300 rounded-lg bg-white">
                            <span className="text-gray-900 font-medium">{profile?.name || user?.name}</span>
                            <button
                              onClick={handleEdit}
                              className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 transition-colors"
                            >
                              <PencilIcon className="h-4 w-4" />
                              <span>Edit</span>
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                          <EnvelopeIcon className="h-4 w-4 mr-2" />
                          Email Address
                        </label>
                        <div className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-100">
                          <span className="text-gray-700">{profile?.email || user?.email}</span>
                          <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Preferences</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                          <DocumentTextIcon className="h-4 w-4 mr-2" />
                          Default Note Category
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                          <option>Personal</option>
                          <option>Work</option>
                          <option>Ideas</option>
                          <option>Important</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          Date Format
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                          <option>MM/DD/YYYY</option>
                          <option>DD/MM/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                    <div className="relative inline-block">
                      {profile?.profilePhoto || user?.profilePhoto ? (
                        <img 
                          src={profile?.profilePhoto || user?.profilePhoto} 
                          alt="Profile" 
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-blue-200 flex items-center justify-center mx-auto mb-4">
                          <UserIcon className="h-14 w-14 text-gray-500" />
                        </div>
                      )}
                      <label className="absolute bottom-3 right-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full cursor-pointer transition-colors">
                        <CameraIcon className="h-3 w-3 text-white" />
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handlePhotoUpload}
                          className="hidden"
                          disabled={uploadingPhoto}
                        />
                      </label>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{profile?.name || user?.name}</h3>
                    <p className="text-gray-600 text-sm">{profile?.email || user?.email}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                          <span className="text-gray-700">Total Notes</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{profile?._count?.notes || 0}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CalendarIcon className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">Member Since</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {profile?.createdAt ? formatDate(profile.createdAt) : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Link
                        to="/dashboard"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <DocumentTextIcon className="h-4 w-4" />
                        <span>View Dashboard</span>
                      </Link>
                      {!editing && (
                        <button
                          onClick={handleEdit}
                          className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                        >
                          <PencilIcon className="h-4 w-4" />
                          <span>Edit Profile</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}