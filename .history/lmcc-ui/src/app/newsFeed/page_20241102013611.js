// app/newsFeed/page.js
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Navbar from "@/components/ui/Navbar";

const hottestEvents = [
  {
    title: "Art & Wine Festival",
    date: "Nov 3, 2024",
    location: "Downtown Athens",
  },
  { title: "Live Jazz Night", date: "Nov 4, 2024", location: "Blue Note Cafe" },
  {
    title: "Sculpture Exhibition",
    date: "Nov 5, 2024",
    location: "City Art Museum",
  },
  {
    title: "Photography Workshop",
    date: "Nov 6, 2024",
    location: "Artist's Hub",
  },
  { title: "Charity Art Auction", date: "Nov 7, 2024", location: "Grand Hall" },
];

// Sample posts to display when the app is loaded
const samplePosts = [
  {
    author: "Artist One",
    content: "Excited to share my latest artwork! Check it out in my gallery.",
    createdAt: new Date().toLocaleString(),
    tags: ["Art", "Gallery"],
  },
  {
    author: "Artist Two",
    content:
      "Just finished a new mural in downtown! Can’t wait for you all to see it!",
    createdAt: new Date().toLocaleString(),
    tags: ["Mural", "Downtown", "Art"],
  },
  {
    author: "Artist Three",
    content:
      "I will be live streaming my painting session this weekend! Join me!",
    createdAt: new Date().toLocaleString(),
    tags: ["Live Stream", "Painting", "Event"],
  },
  {
    author: "Artist Four",
    content: "Looking to connect with any Alumni who play guitar!",
    createdAt: new Date().toLocaleString(),
    tags: ["Networking", "Alumni", "Music"],
  },
];

// Post Component to display individual posts
const Post = ({ post }) => {
  return (
    <Card className="border rounded-lg p-4 mb-2 shadow-md max-w-md mx-auto">
      <div className="flex items-center mb-2">
        <Avatar className="mr-2">
          <span className="font-bold">{post.author.charAt(0)}</span>{" "}
          {/* Just a placeholder for the avatar */}
        </Avatar>
        <h4 className="font-semibold text-md">{post.author}</h4>
      </div>
      <p className="text-gray-700 text-sm mb-2">{post.content}</p>
      <small className="text-gray-400 text-xs">{post.createdAt}</small>

      {/* Tags Section */}
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

// Utility function to get random colors for tags
const getRandomColor = (index) => {
  const colors = ["#ff7f50", "#6495ed", "#ff69b4", "#ffa500", "#6a5acd"];
  return colors[index % colors.length];
};

// PostList Component to display all posts
const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
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
            <p className="text-sm text-gray-400">{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// PostForm Component to create new posts
const PostForm = ({ onPostCreate }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onPostCreate(content);
      setContent("");
    }
  };

  return (
    <div className="mb-4 p-3 max-w-md mx-auto border rounded-xl shadow-md bg-white text-black">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <Avatar className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="font-bold text-white">A</span>{" "}
          {/* Placeholder avatar */}
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
          className="flex items-center space-x-1 text-black hover:text-blue-500 cursor-pointer"
        >
          <span className="text-blue-400">📷</span>
          <span className="text-sm">Media</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 text-black hover:text-blue-500 cursor-pointer"
        >
          <span className="text-yellow-400">📅</span>
          <span className="text-sm">Event</span>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 text-black hover:text-blue-500 cursor-pointer"
        >
          <span className="text-red-400">📝</span>
          <span className="text-sm">Write article</span>
        </button>
      </div>
    </div>
  );
};

// Main Newsfeed Component
// Main Newsfeed Component
const Newsfeed = () => {
  const [posts, setPosts] = useState(samplePosts);

  const handlePostCreate = (content) => {
    const newPost = {
      author: "Artist Name",
      content,
      createdAt: new Date().toLocaleString(),
      tags: ["New Post", "Community"], // Default tags for new posts
    };
    setPosts([newPost, ...posts]);
  };

  // User profile data

  return (
    <div className="max-w-lg mx-auto p-4">
      <Navbar></Navbar>
      <h2 className="text-2xl font-bold mb-4">Artist Newsfeed</h2>
      <PostForm onPostCreate={handlePostCreate} />
      <PostList posts={posts} />
    </div>
  );
};

// Export the Newsfeed component as the default export
const Page = () => {
  return <Newsfeed />;
};

export default Page;
