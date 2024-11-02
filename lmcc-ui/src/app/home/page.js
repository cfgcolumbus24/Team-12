"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Navbar from "@/components/ui/Navbar";
import Lightbox from "@/components/ui/lightbox_start";

const hottestEvents = [
  {
    title: "Music Festival",
    date: "Nov 2, 2024",
    time: "5 PM",
    location: "Central Park",
  },
  { title: "Live Jazz Night", date: "Nov 5, 2024", time: "8 PM", location: "Blue Note" },
  {
    title: "Sculpture Exhibition",
    date: "Nov 7, 2024",
    time: "5 PM",
    location: "Bronx Museum",
  },
];

const samplePosts = [];

const getRandomColor = (index) => {
  const colors = ["#ff7f50", "#6495ed", "#ff69b4", "#ffa500", "#6a5acd"];
  return colors[index % colors.length];
};

const fetchTagsForContent = async (content) => {
  const baseUrl = "http://127.0.0.1:5000";
  try {
    const response = await fetch(`${baseUrl}/getAI`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    if (data.code === "SUCCESS") {
      return data.message;
    }
    return ["General"];
  } catch (error) {
    console.error("Failed to fetch tags:", error);
    return ["General"];
  }
};

const Post = ({ post }) => {
  return (
    <Card className="border rounded-lg p-4 mb-2 shadow-md max-w-md mx-auto">
      <div className="flex items-center mb-2">
        <Avatar className="mr-2 rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
          <span className="font-semibold text-sm">{post.author.charAt(0)}</span>
        </Avatar>
        <h4 className="font-semibold text-md">{post.author}</h4>
      </div>
      <p className="text-gray-700 text-sm mb-2">{post.content}</p>
      <small className="text-gray-400 text-xs">{post.createdAt}</small>

      <div className="flex flex-wrap gap-2 mt-3">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-semibold py-1 px-3 rounded-full"
            style={{
              backgroundColor: getRandomColor(index),
              color: "white",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
};

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <></>
      ) : (
        posts.map((post, index) => <Post key={index} post={post} />)
      )}
    </div>
  );
};

const EventsWidget = ({ events }) => {
  return (
    <div
      className="p-10 max-w-xs border rounded-xl shadow-md bg-gray-100"
      style={{ maxHeight: "580px", marginTop: "90px" }}
    >
      <h3 className="text-lg font-semibold mb-4 text-center">
        Hottest Events This Week
      </h3>
      <ul className="space-y-3">
        {events.map((event, index) => (
          <li
            key={index}
            className="flex flex-col p-3 bg-white rounded-lg shadow-sm"
          >
            <h4 className="text-md font-bold">{event.title}</h4>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-sm text-gray-500">{event.time}</p>
            <p className="text-sm text-gray-400">{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// PostForm Component
const PostForm = ({ onPostCreate }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      await onPostCreate(content);
      setContent("");
    }
  };

  return (
    <div className="mb-4 p-3 max-w-md mx-auto border rounded-xl shadow-md bg-white text-black">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <Avatar className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="font-bold text-white">A</span>
        </Avatar>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Engage with your community."
          className="flex-grow p-2 rounded-full border border-black bg-white text-sm placeholder-black focus:outline-none"
        />
      </form>
      <div className="flex items-center justify-between mt-3 px-2">
        <button
          type="button"
          className="text-black hover:text-blue-500 cursor-pointer"
        >
          📷 Media
        </button>
        <button
          type="button"
          className="text-black hover:text-blue-500 cursor-pointer"
        >
          📅 Event
        </button>
        <button
          type="button"
          className="text-black hover:text-blue-500 cursor-pointer"
        >
          📝 Write article
        </button>
      </div>
    </div>
  );
};

const Newsfeed = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePostCreate = async (content) => {
    const tags = await fetchTagsForContent(content);
    const newPost = {
      author: "Artist Name",
      content,
      createdAt: new Date().toLocaleString(),
      tags,
    };
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    setIsLightboxOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-8">

          <Navbar />
          <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800">Artist Newsfeed
          </h1>
       
          <p className="text-gray-500 mt-3 text-lg">
                          See what artists have been up to!
            </p>
          </div>
          <div className="flex flex-grow space-x-6">
            <div className="flex-grow">
              <PostForm onPostCreate={handlePostCreate} />
              <PostList posts={posts} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 w-1/3">
              <EventsWidget events={hottestEvents} />
            </div>
          </div>
        </div>
        {isLightboxOpen && (
          <Lightbox
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
            content={<h1 className="text-2xl font-bold text-center">Welcome! Check Out What's Coming Soon:</h1>}
            name="Music Festival"
            location="Central Park"
            time="5 PM on November 2, 2024"
            picture="https://wallpapercave.com/wp/wp9977857.jpg"
            host="Music Enthusiasts"
          />
        )}
      </div>
  );
};

const Page = () => {
  return <Newsfeed />;
};

export default Page;
