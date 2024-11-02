// app/myProfile/page.js
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/Navbar";
import { useCurrentUser } from "../firebase/firebase";

// Sample posts to display when the app is loaded

// Post Component to display individual posts
const Post = ({ post, avatarUrl }) => {
  return (
    <Card className="border rounded-lg p-6 mb-4 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-2xl bg-white">
      <div className="flex items-center mb-4">
        <Avatar className="mr-4 rounded-full w-10 h-10 flex items-center justify-center">
          <AvatarImage src={avatarUrl} alt={`${post.author}'s avatar`} />
          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-lg">{post.author}</h4>
          <small className="text-gray-400 text-xs">{post.createdAt}</small>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-4">{post.content}</p>
      <div className="flex flex-wrap gap-2">
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
      <div className="aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

// Gallery Grid Component
const GalleryGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  const { currentUser, loading } = useCurrentUser();
  return (
    <div className="flex flex-col items-center mb-8 p-4 bg-blue-100 rounded shadow-lg w-[800px] mx-auto">
      <div className="relative">
        <Avatar className="h-36 w-36 rounded-full border-4 border-white shadow-lg mb-4 transition-transform duration-300 hover:scale-105 bg-blue-500">
          <AvatarImage
            referrerPolicy="no-referrer"
            src={loading ? null : currentUser.photoURL}
          />
          <AvatarFallback className="text-3xl font-bold text-white">
            AP
          </AvatarFallback>
        </Avatar>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
        {loading ? "Loading..." : currentUser.displayName}
      </h2>
      <p className="text-gray-700 text-center max-w-xs leading-relaxed">
        Passionate artist exploring modern art forms and pushing creative
        boundaries.
      </p>
    </div>
  );
};

// PostList Component to display all posts
const PostList = ({ posts }) => {
  const { currentUser, loading } = useCurrentUser();
  const avatarUrl = loading ? null : currentUser.photoURL;
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No posts available.</p>
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
  const { currentUser, loading } = useCurrentUser();
  const name = currentUser ? currentUser.displayName : "Loading...";

  const samplePosts = [
    {
      author: name,
      content:
        "Excited to share my latest artwork! Check it out in my gallery.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toLocaleString(), // 2 hours ago
      tags: ["Mural", "Downtown", "Art"],
    },
    {
      author: name,
      content: "This is a recent painting I completed for an exhibition!",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleString(), // 1 day ago
      tags: ["Exhibition", "Painting", "New"],
    },
    {
      author: name,
      content: "Experimenting with new techniques in my latest project!",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toLocaleString(), // 2 days ago
      tags: ["Experiment", "Techniques", "Project"],
    },
  ];

  // Sample gallery items
  const sampleGallery = [
    { id: 1, imageUrl: "/assets/carStock.jpg", title: "Urban Mural" },
    { id: 2, imageUrl: "/assets/bearArtPic.jpg", title: "Abstract Painting" },
    { id: 3, imageUrl: "/assets/coolArtPic.jpeg", title: "Street Art" },
  ];

  // Sort posts from most recent to least recent
  const sortedPosts = samplePosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <Navbar />
        <ProfileHeader />
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="mb-6 flex justify-center space-x-4">
            <TabsTrigger value="posts" className="text-lg">
              Posts
            </TabsTrigger>
            <TabsTrigger value="gallery" className="text-lg">
              Gallery
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <h3 className="text-3xl font-semibold mb-6 text-center">Posts</h3>
            <PostList posts={sortedPosts} />
          </TabsContent>
          <TabsContent value="gallery">
            <h3 className="text-3xl font-semibold mb-6 text-center">Gallery</h3>
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
