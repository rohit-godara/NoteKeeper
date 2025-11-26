import { useState, useEffect } from 'react'
import { DocumentTextIcon, TagIcon, PencilIcon, BriefcaseIcon, UserIcon, LightBulbIcon, RocketLaunchIcon, UsersIcon, MagnifyingGlassIcon, BookOpenIcon, FlagIcon } from '@heroicons/react/24/outline'

const NoteModal = ({ isOpen, onClose, onSave, note = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  })

  const categories = [
    { value: '', label: 'Select a category...', icon: null },
    { value: 'work', label: 'Work', icon: BriefcaseIcon },
    { value: 'personal', label: 'Personal', icon: UserIcon },
    { value: 'ideas', label: 'Ideas', icon: LightBulbIcon },
    { value: 'projects', label: 'Projects', icon: RocketLaunchIcon },
    { value: 'meetings', label: 'Meetings', icon: UsersIcon },
    { value: 'research', label: 'Research', icon: MagnifyingGlassIcon },
    { value: 'learning', label: 'Learning', icon: BookOpenIcon },
    { value: 'goals', label: 'Goals', icon: FlagIcon }
  ]

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title || '',
        content: note.content || '',
        category: note.category || ''
      })
    } else {
      setFormData({ title: '', content: '', category: '' })
    }
  }, [note, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.content.trim() || !formData.category.trim()) return
    onSave(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              {note ? <PencilIcon className="h-6 w-6 text-blue-600" /> : <DocumentTextIcon className="h-6 w-6 text-blue-600" />}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {note ? 'Edit Note' : 'Create New Note'}
              </h2>
              <p className="text-gray-600">Capture your thoughts and organize them efficiently</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <DocumentTextIcon className="h-4 w-4 mr-2" />
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg"
                placeholder="Enter a descriptive title for your note..."
                required
              />
            </div>
            
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <TagIcon className="h-4 w-4 mr-2" />
                Category *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {categories.slice(1).map((cat) => {
                  const IconComponent = cat.icon
                  return (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat.value })}
                      className={`p-3 border rounded-lg flex flex-col items-center space-y-2 transition-all ${
                        formData.category === cat.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                      <span className="text-sm font-medium">{cat.label}</span>
                    </button>
                  )
                })}
              </div>
              {formData.category && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, category: '' })}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear selection
                </button>
              )}
              <p className="text-xs text-gray-500 mt-2">Please select a category to organize your note</p>
            </div>
            
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <PencilIcon className="h-4 w-4 mr-2" />
                Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="8"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg resize-none"
                placeholder="Write your note content here... You can include ideas, tasks, reminders, or any thoughts you want to capture."
                required
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">Express your thoughts freely</p>
                <p className="text-xs text-gray-400">{formData.content.length} characters</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                {note ? '✓ Update Note' : '+ Create Note'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NoteModal