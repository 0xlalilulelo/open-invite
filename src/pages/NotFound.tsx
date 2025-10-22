import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8">Sorry, we couldn't find the event you're looking for.</p>
        <Link to="/">
          <Button size="lg">Back to Events</Button>
        </Link>
      </main>
    </div>
  )
}
