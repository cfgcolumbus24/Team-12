// app/newsFeed/page.js
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Navbar from "@/components/ui/Navbar";

// Sample posts to display when the app is loaded
const samplePosts = [
  {
    author: "Artist One",
    content: "Excited to share my latest artwork! Check it out in my gallery.",
    createdAt: new Date().toLocaleString(),
  },
  {
    author: "Artist Two",
    content:
      "Just finished a new mural in downtown! Can’t wait for you all to see it!",
    createdAt: new Date().toLocaleString(),
  },
  {
    author: "Artist Three",
    content:
      "I will be live streaming my painting session this weekend! Join me!",
    createdAt: new Date().toLocaleString(),
  },
];

// Post Component to display individual posts
const Post = ({ post }) => {
  return (
    <Card className="border rounded p-4 mb-2 shadow">
      <div className="flex items-center mb-2">
        <Avatar className="mr-2">
          <span className="font-bold">{post.author.charAt(0)}</span>{" "}
          {/* Just a placeholder for the avatar */}
        </Avatar>
        <h4 className="font-bold">{post.author}</h4>
      </div>
      <p>{post.content}</p>
      <small className="text-gray-500">{post.createdAt}</small>
    </Card>
  );
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
    <form onSubmit={handleSubmit} className="mb-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        className="w-full mb-2"
      />
      <Button type="submit" className="w-full">
        Post
      </Button>
    </form>
  );
};

// Main Newsfeed Component
const Newsfeed = () => {
  const [posts, setPosts] = useState(samplePosts); // Initialize with sample posts

  const handlePostCreate = (content) => {
    const newPost = {
      author: "Artist Name", // Replace this with the actual artist's name
      content,
      createdAt: new Date().toLocaleString(), // Current date/time
    };
    setPosts([newPost, ...posts]); // Add new post at the beginning of the list
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <Navbar></Navbar>
      </div>
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
