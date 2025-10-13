import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Map } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Calendar className="h-6 w-6 text-primary" />
          <span>OpenInvite</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link href="/map">
            <Button variant="ghost">
              <Map className="h-4 w-4 mr-2" />
              Map
            </Button>
          </Link>
          <Link href="/my-events">
            <Button variant="ghost">My Events</Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
