import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { EventCard } from "../components/event-card"
import { mockEvents } from "../lib/mock-data"

export default function MyEventsPage() {
  // Mock: filter events for demonstration
  const attendingEvents = mockEvents.slice(1, 4)
  const hostedEvents = mockEvents.slice(0, 1)

  return (
    <div className="bg-background">

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-balance mb-8">My Events</h1>

        <Tabs defaultValue="attending" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="attending">Attending ({attendingEvents.length})</TabsTrigger>
            <TabsTrigger value="hosting">Hosting ({hostedEvents.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="attending" className="mt-6 space-y-6">
            {attendingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </TabsContent>

          <TabsContent value="hosting" className="mt-6 space-y-6">
            {hostedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
