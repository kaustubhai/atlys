import CreatePost from "@/components/CreatePost";
import { Post } from "@/components/Post";

export default function Home() {

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
    <main className="bg-gray-800 text-white min-h-screen w-full flex flex-col justify-center items-center">
      <div className="wall w-[50%] mx-auto my-20">
        <div className="greeting max-w-xl mb-8">
          <h1 className="text-2xl my-4 text-gray-400">Hello Jane</h1>
          <p className="text-gray-500 font-light">How are you doing today? Would you like to share something with the community 🤗</p>
        </div>
        <CreatePost />
        {
          posts.map((post, index) => (
            <Post key={index} post={post} />
          ))
        }
        {/* <Post />
        <Post /> */}
      </div>
    </main>
  );
}
