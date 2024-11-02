// app/myProfile/page.js
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample posts to display when the app is loaded
const samplePosts = [
  {
    author: "Artist Profile",
    content: "Excited to share my latest artwork! Check it out in my gallery.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toLocaleString(), // 2 hours ago
  },
  {
    author: "Artist Profile",
    content: "This is a recent painting I completed for an exhibition!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleString(), // 1 day ago
  },
  {
    author: "Artist Profile",
    content: "Experimenting with new techniques in my latest project!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toLocaleString(), // 2 days ago
  },
];

// Sort posts from most recent to least recent
const sortedPosts = samplePosts.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

// Post Component to display individual posts
const Post = ({ post }) => {
  return (
    <Card className="border rounded p-4 mb-2 shadow">
      <div className="flex items-center mb-2">
        <Avatar className="mr-2">
          <span className="font-bold">{post.author.charAt(0)}</span>
        </Avatar>
        <h4 className="font-bold">{post.author}</h4>
      </div>
      <p>{post.content}</p>
      <small className="text-gray-500">{post.createdAt}</small>
    </Card>
  );
};

// Profile Component to display profile picture and bio
const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <Avatar className="h-32 w-32 mb-4">
        <AvatarImage src="/public/assets/stock1.jpeg" />{" "}
        {/* Replace with actual image */}
        {/* <AvatarFallback>AP</AvatarFallback> */}
      </Avatar>
      <h2 className="text-2xl font-bold">Artist Profile</h2>
      <p className="text-gray-600">
        Passionate artist exploring modern art forms.
      </p>
    </div>
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

// Main MyProfile Component
const MyProfile = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <ProfileHeader />
      <h3 className="text-xl font-semibold mb-4 text-center">My Posts</h3>
      <PostList posts={sortedPosts} />
    </div>
  );
};

// Export the MyProfile component as the default export
const Page = () => {
  return <MyProfile />;
};

export default Page;
