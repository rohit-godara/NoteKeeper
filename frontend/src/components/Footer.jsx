import { DocumentTextIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <DocumentTextIcon className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">NoteKeeper</span>
            </div>
            <p className="text-gray-400 mb-4">
              A simple, clean, and efficient way to organize your thoughts, ideas, and notes. 
              Access your notes from anywhere, anytime.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Create & Edit Notes</li>
              <li>Search & Filter</li>
              <li>Categories & Tags</li>
              <li>Cloud Sync</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NoteKeeper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer