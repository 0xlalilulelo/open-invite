export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  coordinates: {
    lat: number
    lng: number
  }
  category: "party" | "meetup" | "concert" | "sports" | "other"
  host: {
    name: string
    avatar: string
  }
  attendees: Array<{
    name: string
    avatar: string
  }>
  imageUrl?: string
  isHostedByUser?: boolean
  isAttendedByUser?: boolean
  isHostedByFriend?: boolean
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Summer Rooftop Party",
    description:
      "Join us for an amazing summer rooftop party with great music, food, and vibes! Bring your friends and enjoy the sunset.",
    date: "Saturday, June 15, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "The Rooftop Bar, 123 Main St, Downtown",
    coordinates: { lat: 40.7589, lng: -73.9851 },
    category: "party",
    host: {
      name: "Sarah Johnson",
      avatar: "/diverse-woman-portrait.png",
    },
    attendees: [
      { name: "Mike Chen", avatar: "/man.jpg" },
      { name: "Emma Wilson", avatar: "/diverse-woman-portrait.png" },
      { name: "James Brown", avatar: "/man.jpg" },
      { name: "Lisa Anderson", avatar: "/diverse-woman-portrait.png" },
      { name: "David Lee", avatar: "/man.jpg" },
    ],
    isHostedByFriend: true,
    isAttendedByUser: true,
  },
  {
    id: "2",
    title: "Tech Meetup: AI & Machine Learning",
    description:
      "Monthly tech meetup discussing the latest trends in AI and machine learning. Network with fellow developers and learn from industry experts.",
    date: "Wednesday, June 12, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "Tech Hub Co-working Space, 456 Innovation Ave",
    coordinates: { lat: 40.7489, lng: -73.968 },
    category: "meetup",
    host: {
      name: "Alex Martinez",
      avatar: "/man.jpg",
    },
    attendees: [
      { name: "Rachel Green", avatar: "/diverse-woman-portrait.png" },
      { name: "Tom Harris", avatar: "/man.jpg" },
      { name: "Nina Patel", avatar: "/diverse-woman-portrait.png" },
    ],
    isHostedByUser: true,
  },
  {
    id: "3",
    title: "Beach Volleyball Tournament",
    description:
      "Friendly beach volleyball tournament followed by a BBQ. All skill levels welcome! Teams will be formed on the day.",
    date: "Sunday, June 16, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Sunset Beach, North Shore",
    coordinates: { lat: 40.7689, lng: -73.992 },
    category: "sports",
    host: {
      name: "Chris Taylor",
      avatar: "/man.jpg",
    },
    attendees: [
      { name: "Sophie Turner", avatar: "/diverse-woman-portrait.png" },
      { name: "Jake Morrison", avatar: "/man.jpg" },
      { name: "Maya Rodriguez", avatar: "/diverse-woman-portrait.png" },
      { name: "Ben Carter", avatar: "/man.jpg" },
      { name: "Olivia White", avatar: "/diverse-woman-portrait.png" },
      { name: "Ryan Scott", avatar: "/man.jpg" },
      { name: "Zoe Kim", avatar: "/diverse-woman-portrait.png" },
    ],
    isAttendedByUser: true,
  },
  {
    id: "4",
    title: "Indie Band Live Concert",
    description:
      "Experience an unforgettable night with local indie bands. Great music, drinks, and atmosphere guaranteed!",
    date: "Friday, June 14, 2024",
    time: "8:00 PM - 12:00 AM",
    location: "The Underground Venue, 789 Music Lane",
    coordinates: { lat: 40.7389, lng: -73.978 },
    category: "concert",
    host: {
      name: "Music Collective",
      avatar: "/diverse-group-making-music.png",
    },
    attendees: [
      { name: "Hannah Lee", avatar: "/diverse-woman-portrait.png" },
      { name: "Marcus Johnson", avatar: "/man.jpg" },
    ],
    isHostedByFriend: true,
  },
]
