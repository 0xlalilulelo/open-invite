import { EventCard } from "../components/event-card"
import { mockEvents } from "../lib/mock-data"
import { Button } from "../components/ui/button"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="bg-background">

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance mb-2">Upcoming Events</h1>
            <p className="text-muted-foreground text-lg">Discover events your friends are attending</p>
          </div>
          <Link to="/create">
            <Button size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Create Event
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  )
}
