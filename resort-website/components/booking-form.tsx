"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function BookingForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [resort, setResort] = useState("")
  const [room, setRoom] = useState("")
  const [guests, setGuests] = useState("1 Adult, 0 Children")
  const [rooms, setRooms] = useState([])

  // Fetch available rooms when resort changes
  useEffect(() => {
    if (resort) {
      fetch(`http://127.0.0.1:8000/booking/rooms/?resort=${resort}`)
        .then(response => response.json())
        .then(data => setRooms(data))
        .catch(error => console.error('Error fetching rooms:', error))
    }
  }, [resort])

  // Helper to extract numeric guest count from guest string.
  // Here we assume the guest string is formatted as "1 Adult, 0 Children"
  // This example only parses the first number (representing adults).
  const getGuestCount = (guestStr: string) => {
    const num = parseInt(guestStr.split(" ")[0])
    return isNaN(num) ? 1 : num
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const bookingData = {
      room: room,  // Room ID as a string
      check_in: checkInDate?.toISOString().split("T")[0],
      check_out: checkOutDate?.toISOString().split("T")[0],
      guests: getGuestCount(guests),
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/booking/booking_form/", {  // Updated endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || "Something went wrong")
      }

      const data = await response.json()
      console.log("Booking successful:", data)
      setIsOpen(false)
    } catch (error) {
      console.error("Booking error:", error)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book a Room</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#f8e0c0] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#8B4513]">Book a Room</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resort">Resort</Label>
            <Select value={resort} onValueChange={setResort} required>
              <SelectTrigger id="resort" className="bg-white border-[#D7CCC8]">
                <SelectValue placeholder="Select Resort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="african-village">African Village</SelectItem>
                <SelectItem value="lake-view">Lake View</SelectItem>
                <SelectItem value="zen-villa">Zen Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="check-in">Check In</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-in"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border-[#D7CCC8]",
                    !checkInDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="check-out">Check Out</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-out"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border-[#D7CCC8]",
                    !checkOutDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? format(checkOutDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="room">Room</Label>
            <Select value={room} onValueChange={setRoom} required>
              <SelectTrigger id="room" className="bg-white border-[#D7CCC8]">
                <SelectValue placeholder="Select Room" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((roomItem: any) => (
                  <SelectItem key={roomItem.id} value={roomItem.id.toString()}>
                    {roomItem.name} - ${roomItem.price_per_night}/night
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Rooms For</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger id="guests" className="bg-white border-[#D7CCC8]">
                <SelectValue placeholder="Select Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 Adult, 0 Children">1 Adult, 0 Children</SelectItem>
                <SelectItem value="2 Adults, 0 Children">2 Adults, 0 Children</SelectItem>
                <SelectItem value="2 Adults, 1 Child">2 Adults, 1 Child</SelectItem>
                <SelectItem value="2 Adults, 2 Children">2 Adults, 2 Children</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
            Check Availability
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
