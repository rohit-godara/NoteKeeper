import { useState, useEffect } from 'react'
import { useAuth } from '../utils/AuthContext'
import { notesAPI } from '../utils/api'
import NoteCard from '../components/NoteCard'
import NoteModal from '../components/NoteModal'
import { DocumentTextIcon, ChartBarIcon, ClockIcon, UserIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sortBy: 'createdAt',
    order: 'desc'
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  })

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      }
      const response = await notesAPI.getNotes(params)
      setNotes(response.data.notes)
      setPagination(response.data.pagination)
    } catch (error) {
      console.error('Error fetching notes:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [filters, pagination.page])

  const handleCreateNote = async (noteData) => {
    try {
      await notesAPI.createNote(noteData)
      fetchNotes()
    } catch (error) {
      console.error('Error creating note:', error)
    }
  }

  const handleUpdateNote = async (noteData) => {
    try {
      await notesAPI.updateNote(editingNote.id, noteData)
      setEditingNote(null)
      fetchNotes()
    } catch (error) {
      console.error('Error updating note:', error)
    }
  }

  const handleDeleteNote = async (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await notesAPI.deleteNote(noteId)
        fetchNotes()
      } catch (error) {
        console.error('Error deleting note:', error)
      }
    }
  }

  const handleEdit = (note) => {
    setEditingNote(note)
    setIsModalOpen(true)
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 relative">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-lg text-gray-600">Manage your notes and boost your productivity</p>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-center">
                <DocumentTextIcon className="h-10 w-10 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total Notes</p>
                  <p className="text-2xl font-bold text-gray-900">{pagination.total}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-center">
                <ChartBarIcon className="h-10 w-10 text-green-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-2xl font-bold text-gray-900">{new Set(notes.map(n => n.category).filter(Boolean)).size}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-center">
                <ClockIcon className="h-10 w-10 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Recent (7 days)</p>
                  <p className="text-2xl font-bold text-gray-900">{notes.filter(n => new Date(n.createdAt) > new Date(Date.now() - 7*24*60*60*1000)).length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-center">
                <UserIcon className="h-10 w-10 text-orange-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Active Since</p>
                  <p className="text-lg font-semibold text-gray-900">Today</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">My Notes</h2>
                <p className="text-gray-600 mt-1">Organize your thoughts and ideas efficiently</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Create Note</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filter & Search</h3>
              <div className="text-sm text-gray-500">{pagination.total} total notes</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  placeholder="Filter by category..."
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="createdAt">Date Created</option>
                  <option value="title">Title</option>
                  <option value="updatedAt">Last Updated</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <select
                  value={filters.order}
                  onChange={(e) => handleFilterChange('order', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="desc">Newest First</option>
                  <option value="asc">Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notes Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : notes.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-lg border">
              <DocumentTextIcon className="h-20 w-20 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No notes yet</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Start capturing your thoughts and ideas with your first note</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Create your first note
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {notes.map((note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    onEdit={handleEdit}
                    onDelete={handleDeleteNote}
                  />
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
                  <div className="text-sm text-gray-700">
                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} notes
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                      disabled={pagination.page === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      ← Previous
                    </button>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
                      {pagination.page} of {pagination.pages}
                    </span>
                    <button
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                      disabled={pagination.page === pagination.pages}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingNote(null)
        }}
        onSave={editingNote ? handleUpdateNote : handleCreateNote}
        note={editingNote}
      />
    </div>
  )
}