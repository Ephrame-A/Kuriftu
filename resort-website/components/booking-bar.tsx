"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingBar() {
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [resort, setResort] = useState("debre-zeyit")
  const [guests, setGuests] = useState("1-adult-0-children")

  const handleCheckAvailability = () => {
    console.log({
      resort,
      checkInDate,
      checkOutDate,
      guests,
    })
  }

  return (
    <div className="bg-[#E8C9A0] p-3 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="w-full justify-start text-left font-normal">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#8B4513]" />
                <div>
                  <p className="text-xs text-[#8B4513] font-medium">Resort</p>
                  <p className="text-sm text-[#8B4513]">
                    {resort === "debre-zeyit"
                      ? "Debre Zeyit"
                      : resort === "entoto"
                        ? "Entoto"
                        : resort === "bishoftu"
                          ? "Bishoftu"
                          : "Select Resort"}
                  </p>
                </div>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="p-2">
              <Select value={resort} onValueChange={setResort}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Resort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="debre-zeyit">Debre Zeyit</SelectItem>
                  <SelectItem value="entoto">Entoto</SelectItem>
                  <SelectItem value="bishoftu">Bishoftu</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="w-full justify-start text-left font-normal">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-[#8B4513]" />
                <div>
                  <p className="text-xs text-[#8B4513] font-medium">Check In</p>
                  <p className="text-sm text-[#8B4513]">
                    {checkInDate ? format(checkInDate, "dd MMM yyyy") : "Select Date"}
                  </p>
                </div>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="w-full justify-start text-left font-normal">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-[#8B4513]" />
                <div>
                  <p className="text-xs text-[#8B4513] font-medium">Check Out</p>
                  <p className="text-sm text-[#8B4513]">
                    {checkOutDate ? format(checkOutDate, "dd MMM yyyy") : "Select Date"}
                  </p>
                </div>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="w-full justify-start text-left font-normal">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#8B4513]" />
                <div>
                  <p className="text-xs text-[#8B4513] font-medium">Rooms For</p>
                  <p className="text-sm text-[#8B4513]">
                    {guests === "1-adult-0-children"
                      ? "1 Adult, 0 Children"
                      : guests === "2-adults-0-children"
                        ? "2 Adults, 0 Children"
                        : guests === "2-adults-1-child"
                          ? "2 Adults, 1 Child"
                          : guests === "2-adults-2-children"
                            ? "2 Adults, 2 Children"
                            : "Select Guests"}
                  </p>
                </div>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="p-2">
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-adult-0-children">1 Adult, 0 Children</SelectItem>
                  <SelectItem value="2-adults-0-children">2 Adults, 0 Children</SelectItem>
                  <SelectItem value="2-adults-1-child">2 Adults, 1 Child</SelectItem>
                  <SelectItem value="2-adults-2-children">2 Adults, 2 Children</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Button
        className="bg-[#8B4513] hover:bg-[#6D4C41] text-white px-6 w-full md:w-auto"
        onClick={handleCheckAvailability}
      >
        Check Availability
      </Button>
    </div>
  )
}
