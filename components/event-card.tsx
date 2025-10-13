import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/mock-data"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const attendeeCount = event.attendees.length
  const displayedAttendees = event.attendees.slice(0, 3)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Link href={`/events/${event.id}`}>
              <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors text-balance">
                {event.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src={event.host.avatar || "/placeholder.svg"} />
                <AvatarFallback>{event.host.name[0]}</AvatarFallback>
              </Avatar>
              <span>
                Hosted by <span className="font-medium text-foreground">{event.host.name}</span>
              </span>
            </div>
          </div>
          <Badge variant={event.category === "party" ? "default" : "secondary"} className="capitalize">
            {event.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{event.description}</p>

        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <div className="flex items-center gap-1">
            {displayedAttendees.map((attendee, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-background -ml-2 first:ml-0">
                <AvatarImage src={attendee.avatar || "/placeholder.svg"} />
                <AvatarFallback>{attendee.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {attendeeCount} {attendeeCount === 1 ? "person" : "people"} attending
          </span>
        </div>
      </CardContent>

      <CardFooter className="gap-3">
        <Button className="flex-1" size="lg">
          Join Event
        </Button>
        <Link href={`/events/${event.id}`} className="flex-1">
          <Button variant="outline" size="lg" className="w-full bg-transparent">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
