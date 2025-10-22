import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { Header } from "./header"
import { Home, User, Map, Calendar } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <Header />
      
      <main className="pb-16 md:pb-0">
        {children}
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t md:hidden z-50">
        <div className="grid grid-cols-4 h-16">
          <Link to="/" className="flex flex-col items-center justify-center space-y-1">
            <Home className={`h-5 w-5 ${isActive("/") ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>Events</span>
          </Link>
          <Link to="/map" className="flex flex-col items-center justify-center space-y-1">
            <Map className={`h-5 w-5 ${isActive("/map") ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs ${isActive("/map") ? "text-primary" : "text-muted-foreground"}`}>Map</span>
          </Link>
          <Link to="/my-events" className="flex flex-col items-center justify-center space-y-1">
            <Calendar className={`h-5 w-5 ${isActive("/my-events") ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs ${isActive("/my-events") ? "text-primary" : "text-muted-foreground"}`}>My Events</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center justify-center space-y-1">
            <User className={`h-5 w-5 ${isActive("/profile") ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-xs ${isActive("/profile") ? "text-primary" : "text-muted-foreground"}`}>Profile</span>
          </Link>
        </div>
      </nav>
    </>
  )
}