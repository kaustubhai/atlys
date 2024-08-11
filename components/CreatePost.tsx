import React from 'react'

interface CreatePostProps {
    createPost?: () => void;
}

const CreatePost = ({ createPost }: CreatePostProps) => {
    return (
        <div onClick={createPost} className='bg-gray-700 border px-4 my-3 py-6 border-gray-600 rounded-xl w-full flex flex-col'>
            <h1 className='text-lg mb-3 text-gray-300'>Create Post</h1>
            <div className="postWriteUp bg-gray-800 rounded-md w-full p-4 mb-4 placeholder:text-gray-500 text-gray-300 flex items-center justify-center">
                <div className="bg-gray-700 rounded-full min-w-12 min-h-12 flex items-center justify-center">
                    <p className='text-xl'>💬</p>
                </div>
                <textarea
                    name="createPost"
                    id="createPost"
                    placeholder='How are you feeling today?'
                    className='bg-gray-800 rounded ml-8 w-full placeholder:text-gray-500 text-justify h-6 text-gray-300 focus:outline-none'>
                </textarea>
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 transition-all text-white w-28 h-11 rounded self-end'>Post</button>
        </div>
    )
}

export default CreatePost