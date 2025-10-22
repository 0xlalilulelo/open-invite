import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import { Link } from "react-router-dom"

// Mock user data
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  avatar: "/placeholder.svg?key=ik78o",
  eventsHosted: 3,
  eventsAttending: 5,
}

const mockHostedEvents = [
  {
    id: "1",
    title: "Summer Rooftop Party",
    date: "Saturday, June 15, 2024",
    location: "The Rooftop Bar, 123 Main St",
    attendees: 5,
  },
]

const mockAttendingEvents = [
  {
    id: "2",
    title: "Tech Meetup: AI & Machine Learning",
    date: "Wednesday, June 12, 2024",
    location: "Tech Hub Co-working Space",
    attendees: 3,
  },
  {
    id: "3",
    title: "Beach Volleyball Tournament",
    date: "Sunday, June 16, 2024",
    location: "Sunset Beach, North Shore",
    attendees: 7,
  },
]

export default function ProfilePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={mockUser.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">{mockUser.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{mockUser.name}</h1>
                  <p className="text-muted-foreground mb-4">{mockUser.email}</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-2xl font-bold">{mockUser.eventsHosted}</p>
                      <p className="text-sm text-muted-foreground">Events Hosted</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{mockUser.eventsAttending}</p>
                      <p className="text-sm text-muted-foreground">Events Attending</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          {/* Hosted Events */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Events You're Hosting</h2>
              <Link to="/create">
                <Button>Create Event</Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockHostedEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Link to={`/events/${event.id}`}>
                          <CardTitle className="hover:text-primary transition-colors">{event.title}</CardTitle>
                        </Link>
                        <CardDescription className="mt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Attending Events */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Events You're Attending</h2>
            <div className="space-y-4">
              {mockAttendingEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Link to={`/events/${event.id}`}>
                          <CardTitle className="hover:text-primary transition-colors">{event.title}</CardTitle>
                        </Link>
                        <CardDescription className="mt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
