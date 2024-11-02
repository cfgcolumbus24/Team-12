// app/myProfile/page.js
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/Navbar";

// Sample posts to display when the app is loaded
const samplePosts = [
  {
    author: "Maria Doe",
    content: "Excited to share my latest artwork! Check it out in my gallery.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toLocaleString(), // 2 hours ago
    tags: ["Mural", "Downtown", "Art"],
  },
  {
    author: "Maria Doe",
    content: "This is a recent painting I completed for an exhibition!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleString(), // 1 day ago
    tags: ["Mural", "Downtown", "Art"],
  },
  {
    author: "Maria Doe",
    content: "Experimenting with new techniques in my latest project!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toLocaleString(), // 2 days ago
    tags: ["Mural", "Downtown", "Art"],
  },
];

// Sample gallery items
const sampleGallery = [
  {
    id: 1,
    imageUrl: "/assets/carStock.jpg",
    title: "Urban Mural",
    // likes: 124,
    // comments: 15,
  },
  {
    id: 2,
    imageUrl: "/assets/bearArtPic.jpg",
    title: "Abstract Painting",
    // likes: 89,
    // comments: 8,
  },
  {
    id: 3,
    imageUrl: "/assets/coolArtPic.jpeg",
    title: "Street Art",
    // likes: 256,
    // comments: 24,
  },
];

// Sort posts from most recent to least recent
const sortedPosts = samplePosts.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);

// Post Component to display individual posts
const Post = ({ post, avatarUrl }) => {
  return (
    <Card className="border rounded-lg p-4 mb-2 shadow-md max-w-md mx-auto">
      <div className="flex items-center mb-2">
        <Avatar className="mr-2 rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
          <AvatarImage src={avatarUrl} alt={`${post.author}'s avatar`} />
          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
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

// Gallery Item Component
const GalleryItem = ({ item }) => {
  return (
    <div className="relative group">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 text-white">
          <div className="flex items-center">
            {/* <span className="text-lg">❤️</span>
            <span className="ml-2">{item.likes}</span> */}
          </div>
          <div className="flex items-center">
            {/* <span className="text-lg">💬</span>
            <span className="ml-2">{item.comments}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery Grid Component
const GalleryGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

// Utility function to get random colors for tags
const getRandomColor = (index) => {
  const colors = ["#ff7f50", "#6495ed", "#ff69b4", "#ffa500", "#6a5acd"];
  return colors[index % colors.length];
};

// Profile Component to display profile picture and bio
const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <Avatar className="h-32 w-32 mb-4">
        <AvatarImage src="/assets/stock1.jpeg" />
        <AvatarFallback>AP</AvatarFallback>
      </Avatar>
      <h2 className="text-2xl font-bold">Maria Doe</h2>
      <p className="text-gray-600">
        Passionate artist exploring modern art forms.
      </p>
    </div>
  );
};

// PostList Component to display all posts
const PostList = ({ posts }) => {
  const avatarUrl = "/assets/stock1.jpeg";

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post, index) => (
          <Post key={index} post={post} avatarUrl={avatarUrl} />
        ))
      )}
    </div>
  );
};

// Main MyProfile Component
const MyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />
        <ProfileHeader />
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <h3 className="text-3xl font-semibold mb-4 text-center">Posts</h3>

            <PostList posts={sortedPosts} />
          </TabsContent>
          <TabsContent value="gallery">
            <h3 className="text-3xl font-semibold mb-4 text-center">Gallery</h3>

            <GalleryGrid items={sampleGallery} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Export the MyProfile component as the default export
const Page = () => {
  return <MyProfile />;
};

export default Page;
