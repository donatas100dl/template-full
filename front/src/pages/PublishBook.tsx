import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookIcon, UploadIcon, CheckIcon } from 'lucide-react';
const PublishBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    coverImage: null,
    manuscript: null
  });
  const [coverPreview, setCoverPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Thriller', 'Romance', 'Historical Fiction', 'Biography', 'Self-Help', 'Business', 'Science', 'Poetry'];
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleFileChange = e => {
    const {
      name,
      files
    } = e.target;
    if (name === 'coverImage' && files[0]) {
      setCoverPreview(URL.createObjectURL(files[0]));
    }
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          title: '',
          author: '',
          genre: '',
          description: '',
          coverImage: null,
          manuscript: null
        });
        setCoverPreview(null);
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <div className="bg-indigo-600 py-6 px-8 text-white">
            <div className="flex items-center space-x-3">
              <BookIcon className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Publish Your Book</h1>
            </div>
            <p className="mt-1 text-indigo-100">
              Share your story with readers around the world
            </p>
          </div>
          {isSubmitted ? <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Submission Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Your book has been submitted for review. We'll notify you once
                it's approved.
              </p>
              <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300" onClick={() => setIsSubmitted(false)}>
                Submit Another Book
              </button>
            </div> : <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Book Title *
                  </label>
                  <input type="text" id="title" name="title" required value={formData.title} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" placeholder="Enter the title of your book" />
                </div>
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                    Author Name *
                  </label>
                  <input type="text" id="author" name="author" required value={formData.author} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" placeholder="Your name or pen name" />
                </div>
                <div>
                  <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                    Genre *
                  </label>
                  <select id="genre" name="genre" required value={formData.genre} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300">
                    <option value="">Select a genre</option>
                    {genres.map(genre => <option key={genre} value={genre}>
                        {genre}
                      </option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Book Description *
                  </label>
                  <textarea id="description" name="description" required value={formData.description} onChange={handleChange} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" placeholder="Write a compelling description of your book" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Image *
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-32 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                        {coverPreview ? <img src={coverPreview} alt="Cover preview" className="w-full h-full object-cover" /> : <BookIcon className="h-8 w-8 text-gray-400" />}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <label className="cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 inline-flex items-center">
                        <UploadIcon className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">
                          Upload Cover
                        </span>
                        <input type="file" name="coverImage" accept="image/*" onChange={handleFileChange} className="hidden" required />
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        JPG, PNG or GIF. Max 2MB.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Manuscript File *
                  </label>
                  <label className="cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 inline-flex items-center">
                    <UploadIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {formData.manuscript ? formData.manuscript.name : 'Upload Manuscript'}
                    </span>
                    <input type="file" name="manuscript" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" required />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">
                    PDF, DOC, or DOCX. Max 10MB.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="terms" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I confirm that this is my original work and I have the
                    rights to publish it
                  </label>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Publishing...
                    </> : 'Publish Book'}
                </button>
              </div>
            </form>}
        </motion.div>
      </div>
    </div>;
};
export default PublishBook;