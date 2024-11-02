import ForumButton from '@/components/ForumButton';
import EventsCard from "@/components/EventsCard";
import Navbar from '@/components/ui/Navbar';
import SearchBar from '@/components/searchBar';
import { Search } from 'lucide-react';
  
export default function Events() {
  const events = [
    {
      title: "Music Festival",
      description: "Join us for an amazing music festival!",
      date: "Nov 10, 2024",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Art Workshop",
      description: "Learn the basics of painting.",
      date: "Nov 12, 2024",
      image: "http://janislander.com/wp-content/uploads/2013/10/IMG_0001.jpg"
    },
    {
      title: "Tech Conference",
      description: "Explore the latest in tech.",
      date: "Nov 15, 2024",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETLqARFPDW4FVlpHvMJKZnpe2d5i3Mb8jaw&s"
    },
    {
      title: "Food Expo",
      description: "Taste a variety of cuisines.",
      date: "Nov 20, 2024",
      image: "https://i.pinimg.com/originals/cc/c5/37/ccc5372e0b0539737d34c00f08d049d2.jpg"
    },
    {
      title: "Charity Run",
      description: "Run for a cause.",
      date: "Nov 25, 2024",
      image: "https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-groceries-food-market-png-image_11667493.png"
    },
  ];

  return (
<div className="min-h-screen bg-gray-50 py-8 px-4">
<div className="max-w-4xl mx-auto">
    <Navbar />
    <SearchBar />
    <ForumButton />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

      {events.map((event, index) => (
        <EventsCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image ? event.image : "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"}
        />
      ))}
    </div>

  </div>
</div>
  );
}
