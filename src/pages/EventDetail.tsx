import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Separator } from "../components/ui/separator"
import { Calendar, MapPin, Users, Clock, Share2, ArrowLeft } from "lucide-react"
import { Link, useParams, Navigate } from "react-router-dom"
import { mockEvents, Event } from "../lib/mock-data"

export default function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const event = mockEvents.find((e) => e.id === id)

  if (!event) {
    return <Navigate to="/not-found" replace />
  }

  return <EventDetailContent event={event} />
}

function EventDetailContent({ event }: { event: Event }) {
  return (
    <div className="bg-background">

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </Link>

        <div className="space-y-6">
          {/* Event Header */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-balance mb-3">{event.title}</h1>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={event.host.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{event.host.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-muted-foreground">Hosted by</p>
                    <p className="font-semibold">{event.host.name}</p>
                  </div>
                </div>
              </div>
              <Badge
                variant={event.category === "party" ? "default" : "secondary"}
                className="capitalize text-base px-4 py-2"
              >
                {event.category}
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Event Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">About this event</h2>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Attendees</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">{event.attendees.length} attending</span>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {event.attendees.map((attendee, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={attendee.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{attendee.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{attendee.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Actions */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="pt-6 space-y-4">
                  <Button size="lg" className="w-full">
                    Join Event
                  </Button>
                  <Button variant="outline" size="lg" className="w-full gap-2 bg-transparent">
                    <Share2 className="h-4 w-4" />
                    Share Event
                  </Button>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium capitalize">{event.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Attendees</span>
                      <span className="font-medium">{event.attendees.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}