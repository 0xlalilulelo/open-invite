"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { mockEvents } from "@/lib/mock-data"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function MapPage() {
  const [map, setMap] = useState<any>(null)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((leaflet) => {
      setL(leaflet)

      // Initialize map
      const mapInstance = leaflet.map("map").setView([40.7589, -73.9851], 13)

      // Add tile layer
      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(mapInstance)

      setMap(mapInstance)

      // Custom icon styles
      const createCustomIcon = (color: string) => {
        return leaflet.divIcon({
          className: "custom-marker",
          html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
        })
      }

      // Add markers for each event
      mockEvents.forEach((event) => {
        let markerColor = "#64748b" // default gray
        let eventType = "Friend's Event"

        if (event.isHostedByUser) {
          markerColor = "#3b82f6" // blue for user's hosted events
          eventType = "Hosting"
        } else if (event.isAttendedByUser) {
          markerColor = "#10b981" // green for attending
          eventType = "Attending"
        } else if (event.isHostedByFriend) {
          markerColor = "#ff6b6b" // coral for friend's events
          eventType = "Friend's Event"
        }

        const marker = leaflet
          .marker([event.coordinates.lat, event.coordinates.lng], {
            icon: createCustomIcon(markerColor),
          })
          .addTo(mapInstance)

        // Add popup with event details
        marker.bindPopup(`
          <div style="min-width: 200px;">
            <h3 style="font-weight: bold; margin-bottom: 8px; font-size: 14px;">${event.title}</h3>
            <p style="font-size: 12px; color: #64748b; margin-bottom: 4px;">${event.date}</p>
            <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">${event.location}</p>
            <span style="display: inline-block; padding: 2px 8px; background-color: ${markerColor}; color: white; border-radius: 4px; font-size: 11px; font-weight: 500;">${eventType}</span>
            <br/>
            <a href="/events/${event.id}" style="display: inline-block; margin-top: 8px; color: ${markerColor}; font-size: 12px; font-weight: 500;">View Details →</a>
          </div>
        `)
      })

      return () => {
        mapInstance.remove()
      }
    })
  }, [])

  const hostedEvents = mockEvents.filter((e) => e.isHostedByUser)
  const attendingEvents = mockEvents.filter((e) => e.isAttendedByUser)
  const friendEvents = mockEvents.filter((e) => e.isHostedByFriend)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Event Map</h1>
          <p className="text-muted-foreground">Explore events on the map based on your connections</p>
        </div>

        {/* Legend */}
        <Card className="p-4 mb-6">
          <h2 className="font-semibold mb-3">Legend</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
              <span className="text-sm">Hosting ({hostedEvents.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#10b981]"></div>
              <span className="text-sm">Attending ({attendingEvents.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#ff6b6b]"></div>
              <span className="text-sm">Friend's Events ({friendEvents.length})</span>
            </div>
          </div>
        </Card>

        {/* Map Container */}
        <div className="relative z-0">
          <div id="map" className="w-full h-[600px] rounded-lg border shadow-sm"></div>
        </div>

        {/* Event Lists */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Hosting */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
              Hosting
            </h3>
            <div className="space-y-2">
              {hostedEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="block p-2 hover:bg-accent rounded-md transition-colors"
                >
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </Link>
              ))}
              {hostedEvents.length === 0 && <p className="text-sm text-muted-foreground">No events hosted</p>}
            </div>
          </Card>

          {/* Attending */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              Attending
            </h3>
            <div className="space-y-2">
              {attendingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="block p-2 hover:bg-accent rounded-md transition-colors"
                >
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </Link>
              ))}
              {attendingEvents.length === 0 && <p className="text-sm text-muted-foreground">No events attending</p>}
            </div>
          </Card>

          {/* Friend's Events */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
              Friend's Events
            </h3>
            <div className="space-y-2">
              {friendEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="block p-2 hover:bg-accent rounded-md transition-colors"
                >
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </Link>
              ))}
              {friendEvents.length === 0 && <p className="text-sm text-muted-foreground">No friend events</p>}
            </div>
          </Card>
        </div>
      </main>

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
    </div>
  )
}
