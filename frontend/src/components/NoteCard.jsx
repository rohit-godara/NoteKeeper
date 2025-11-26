import { useState } from 'react'

const NoteCard = ({ note, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const truncateContent = (content, maxLength = 100) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{note.title}</h3>
        <div className="flex space-x-2 ml-2">
          <button
            onClick={() => onEdit(note)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      
      {note.category && (
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
          {note.category}
        </span>
      )}
      
      <p className="text-gray-600 mb-3">
        {isExpanded ? note.content : truncateContent(note.content)}
        {note.content.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 ml-2 text-sm"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </p>
      
      <div className="text-xs text-gray-500">
        Created: {formatDate(note.createdAt)}
        {note.updatedAt !== note.createdAt && (
          <span className="ml-2">• Updated: {formatDate(note.updatedAt)}</span>
        )}
      </div>
    </div>
  )
}

export default NoteCard