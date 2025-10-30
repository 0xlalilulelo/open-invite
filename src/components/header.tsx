import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Calendar, User, Map } from "lucide-react"

export function Header() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Calendar className="h-6 w-6 text-primary" />
          <span>OpenInvite</span>
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/home">
            <Button variant={isActive("/home") ? "default" : "ghost"}>Events</Button>
          </Link>
          <Link to="/map">
            <Button variant={isActive("/map") ? "default" : "ghost"}>
              <Map className="h-4 w-4 mr-2" />
              Map
            </Button>
          </Link>
          <Link to="/my-events">
            <Button variant={isActive("/my-events") ? "default" : "ghost"}>My Events</Button>
          </Link>
          <Link to="/profile">
            <Button variant={isActive("/profile") ? "default" : "ghost"} size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
