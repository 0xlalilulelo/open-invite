import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Check, Users, Calendar, MapPin, Star, ArrowRight, Sparkles } from "lucide-react"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add your email capture logic here
    console.log("Email submitted:", email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/15 to-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-8 hover:scale-105 transition-transform shadow-lg">
              <Sparkles className="h-4 w-4 fill-primary animate-pulse" />
              <span>Join the Waitlist for Early Access</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/60">
                Discover Events Your
                <br />
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">
                Friends Are Attending
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-16 leading-relaxed max-w-2xl mx-auto">
              Connect with <span className="font-semibold text-foreground">real events</span> in your social circle. 
              Never miss a rooftop party, tech meetup, or adventure again.
            </p>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg border-2 hover:border-primary/50 transition-colors"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-10 text-lg gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-5 w-5" />
                    You're In!
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {isSubmitted && (
              <p className="text-lg font-medium text-primary mt-6 animate-in fade-in slide-in-from-bottom-4">
                🎉 We'll send you an invite soon!
              </p>
            )}
          </div>

          {/* Dashboard Preview */}
          <div className="relative mt-32 mb-10 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-primary/40 transition-all duration-500">
              <div className="bg-gradient-to-r from-muted/80 to-muted/60 px-6 py-4 flex items-center gap-3 backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                </div>
                <span className="ml-2 text-xs font-bold text-muted-foreground">Open Invite</span>
              </div>
              <div className="p-12 bg-gradient-to-br from-muted/10 to-transparent">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div className="h-5 w-3/4 bg-primary/10 rounded-full" />
                    <div className="h-5 w-1/2 bg-primary/10 rounded-full" />
                    <div className="h-40 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10" />
                  </div>
                  <div className="space-y-5">
                    <div className="h-5 w-full bg-primary/10 rounded-full" />
                    <div className="h-5 w-5/6 bg-primary/10 rounded-full" />
                    <div className="h-40 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Everything You Need to
              <br />
              Never Miss an Event
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Built for people who actually show up
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-card to-card/95 p-8 rounded-3xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Friend-Based Discovery</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                See events your friends are attending. No algorithms, no noise—just real connections with real people.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-card to-card/95 p-8 rounded-3xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Event Map View</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Visualize all events near you on an interactive map. Filter by your friends, hosted events, or everything.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-card to-card/95 p-8 rounded-3xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Location-Based</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Find rooftop parties, tech meetups, and weekend adventures happening in your actual neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wide">
              Trusted by Early Adopters
            </p>
            
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "Finally, an event app that shows me what my actual friends are doing, 
              not what some algorithm thinks I should do."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div className="text-left">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Early Access User</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/5" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 pb-2 leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Ready to Never Miss Out Again?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16">
              Join the waitlist and get early access to OpenInvite
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-16 text-lg border-2 hover:border-primary/50 transition-colors"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-16 px-12 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
                disabled={isSubmitted}
              >
                Join Waitlist
              </Button>
            </form>

            <p className="text-lg text-muted-foreground">
              ✨ Early access users get priority and exclusive features
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">OpenInvite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 OpenInvite. Built for real connections.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
