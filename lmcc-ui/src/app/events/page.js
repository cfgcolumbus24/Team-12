import EventsCard from "@/components/EventsCard";

export default function Events() {
  const events = [
    {
      title: "Music Festival",
      description: "Join us for an amazing music festival!",
      date: "Nov 10, 2024",
    },
    {
      title: "Art Workshop",
      description: "Learn the basics of painting.",
      date: "Nov 12, 2024",
    },
    {
      title: "Tech Conference",
      description: "Explore the latest in tech.",
      date: "Nov 15, 2024",
    },
    {
      title: "Food Expo",
      description: "Taste a variety of cuisines.",
      date: "Nov 20, 2024",
    },
    {
      title: "Charity Run",
      description: "Run for a cause.",
      date: "Nov 25, 2024",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map((event, index) => (
        <EventsCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
        />
      ))}
    </div>
  );
}
