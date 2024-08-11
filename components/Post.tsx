import Image from 'next/image'
import React from 'react'

interface User<T> {
    name: string;
    profileImage: string;
}

interface Post<T> {
    user: User<T>;
    post: string;
    time: string;
    emoji: string;
    edited: boolean;
    commentCount: number,
}

interface TableProps<T> {
    post: Post<T>;
    interactWithPost?: () => void;
}

export function Post<T>({ post, interactWithPost }: TableProps<T>) {
    return (
        <div onClick={interactWithPost} className='bg-gray-700 border px-4 py-6 my-3 border-gray-600 rounded-xl w-full flex flex-col'>
            <div className="flex pb-4 w-full justify-between items-center">
                <div className="userProfile flex">
                    <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center overflow-hidden justify-center mr-4">
                        <Image
                            src={post.user.profileImage}
                            width={"48"}
                            height={"48"}
                            alt={post.user.name}
                        />
                    </div>
                    <div className="flex-col">
                        <p className='text-gray-300'>{post.user.name}</p>
                        <div className="flex">
                            <p className='text-gray-500 text-sm mr-3'>5mins ago</p>
                            {post.edited && <p className='text-gray-500 text-sm list-item ml-3'>Edited</p>}
                        </div>
                    </div>
                </div>
                <button type='button' className='bg-gray-700 text-gray-300 mb-4 text-2xl justify-self-end mr-2'>...</button>
            </div>
            <div className="postWriteUp bg-gray-800 rounded-md w-full p-4 mb-4 placeholder:text-gray-500 text-gray-300 flex items-start justify-center">
                <div className="bg-gray-700 rounded-full min-w-12 min-h-12 flex items-center justify-center">
                    <p className='text-xl'>{post.emoji}</p>
                </div>
                <div
                    id="post"
                    className='bg-gray-800 rounded ml-8 w-full text-gray-500 focus:outline-none'>
                    <p>
                        {post.post}
                    </p>
                </div>
            </div>
            <button className='h-5 w-32 flex items-center justify-between'>
                <Image
                    src={"./commentIcon.svg"}
                    alt='Comments'
                    height={20}
                    width={20} />
                <p className='text-sm text-gray-500'>{post.commentCount} Comments</p>
            </button>
        </div>
    )
}