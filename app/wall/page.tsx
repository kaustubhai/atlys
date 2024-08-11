'use client'

import React, { useState } from 'react'
import CreatePost from "@/components/CreatePost";
import { Post } from "@/components/Post";
import { Modal } from 'react-responsive-modal';
import Signup from '@/components/Signup';
import closeIcon from '@/public/closeButton.svg';
import CustomCloseIcon from '@/components/CloseIcon';

export default function Wall() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const posts = [
        {
            user: {
                name: "Theresa Webb",
                profileImage: "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?q=80&w=48&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            time: "",
            emoji: "👋",
            edited: false,
            commentCount: 24
        },
        {
            user: {
                name: "Marvin McKinney",
                profileImage: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=48&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            time: "",
            emoji: "😞",
            edited: true,
            commentCount: 12
        },
    ]

    return (
        <div className="wall w-[50%] min-w-96 mx-auto my-10 md:my-20">
            <Modal
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
                closeIcon={<CustomCloseIcon />}
                open={open}
                onClose={onCloseModal}
                center>
                <Signup />
            </Modal>
            <div className="greeting max-w-xl mb-8">
                <h1 className="text-3xl my-4 text-gray-300 font-medium leading-6">Hello Jane</h1>
                <p className="text-gray-500 font-normal">How are you doing today? Would you like to share something with the community 🤗</p>
            </div>
            <CreatePost createPost={onOpenModal} />
            {
                posts.map((post, index) => (
                    <Post key={index} post={post} interactWithPost={onOpenModal} />
                ))
            }
        </div>
    );
}
