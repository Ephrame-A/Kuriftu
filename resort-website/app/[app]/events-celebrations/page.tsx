"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Calendar, Users, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsCelebrationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Event inquiry submitted:", formData)
    // Handle form submission
    alert("Thank you for your inquiry. Our events team will contact you shortly.")
  }

  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[500px]">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Events and Celebrations at Kuriftu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-3xl">Events & Celebrations</h1>
            <p className="text-xl text-white text-center mt-4 max-w-2xl px-4">
              Create unforgettable memories in our stunning venues
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-6">Your Perfect Event Destination</h2>
          <p className="text-[#5D4037] mb-8">
            At Kuriftu Resort & Spa, we specialize in creating extraordinary events in breathtaking settings. From
            intimate weddings to large corporate gatherings, our dedicated team ensures every detail is perfect. With
            multiple venues across our properties, exceptional catering, and comprehensive event services, we transform
            your vision into an unforgettable experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Request a Proposal</Button>
              </DialogTrigger>
              <DialogContent className="bg-[#f8e0c0] sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle className="text-[#8B4513]">Event Inquiry</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white border-[#D7CCC8]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white border-[#D7CCC8]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white border-[#D7CCC8]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => handleSelectChange("eventType", value)}
                      >
                        <SelectTrigger id="eventType" className="bg-white border-[#D7CCC8]">
                          <SelectValue placeholder="Select Event Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="birthday">Birthday/Anniversary</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="retreat">Retreat</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Number of Guests</Label>
                      <Select
                        value={formData.guestCount}
                        onValueChange={(value) => handleSelectChange("guestCount", value)}
                      >
                        <SelectTrigger id="guestCount" className="bg-white border-[#D7CCC8]">
                          <SelectValue placeholder="Select Guest Count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-200">101-200</SelectItem>
                          <SelectItem value="201-300">201-300</SelectItem>
                          <SelectItem value="300+">300+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Preferred Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="bg-white border-[#D7CCC8]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white border-[#D7CCC8] min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
                    Submit Inquiry
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="bg-[#EDDCBE] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-10 text-center">Celebrate Every Occasion</h2>

          <Tabs defaultValue="weddings" className="max-w-4xl mx-auto">
            <TabsList className="bg-[#E8C9A0] w-full flex justify-between mb-8 overflow-x-auto">
              <TabsTrigger value="weddings" className="data-[state=active]:bg-white">
                Weddings
              </TabsTrigger>
              <TabsTrigger value="corporate" className="data-[state=active]:bg-white">
                Corporate
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-white">
                Social Events
              </TabsTrigger>
              <TabsTrigger value="conferences" className="data-[state=active]:bg-white">
                Conferences
              </TabsTrigger>
              <TabsTrigger value="retreats" className="data-[state=active]:bg-white">
                Retreats
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weddings" className="bg-white rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">Dream Weddings</h3>
                  <p className="text-[#5D4037] mb-4">
                    Exchange vows in a breathtaking setting that reflects your unique love story. From intimate
                    ceremonies to grand celebrations, our wedding venues offer the perfect backdrop for your special
                    day.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Lakeside ceremonies with stunning views</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Elegant ballrooms for receptions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Dedicated wedding planner</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Customizable catering menus</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Special accommodation rates for guests</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Wedding Packages</Button>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Kuriftu Wedding Venue"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="bg-white rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">Corporate Events</h3>
                  <p className="text-[#5D4037] mb-4">
                    Elevate your business events in our professional yet inspiring settings. From board meetings to
                    team-building retreats, we provide the perfect environment for productivity and connection.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Fully equipped meeting rooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">High-speed Wi-Fi and AV equipment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Customized team-building activities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Executive catering options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Dedicated event coordinator</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Corporate Packages</Button>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Kuriftu Corporate Event Space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social" className="bg-white rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">Social Celebrations</h3>
                  <p className="text-[#5D4037] mb-4">
                    Mark life's special moments in extraordinary settings. From milestone birthdays to anniversary
                    celebrations, our venues provide the perfect backdrop for your memorable occasions.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Versatile event spaces for any size gathering</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Themed decoration options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Custom cake and dessert services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Entertainment coordination</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Photography services</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Celebration Packages</Button>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Kuriftu Social Event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="conferences" className="bg-white rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">Conferences & Meetings</h3>
                  <p className="text-[#5D4037] mb-4">
                    Host successful conferences in our purpose-built facilities. With state-of-the-art technology,
                    flexible spaces, and comprehensive support, we ensure your event runs smoothly from start to finish.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Conference halls for up to 500 attendees</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Breakout rooms for smaller sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Advanced audiovisual equipment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Registration and exhibition areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">On-site technical support</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Conference Packages</Button>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Kuriftu Conference Hall"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retreats" className="bg-white rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">Wellness & Corporate Retreats</h3>
                  <p className="text-[#5D4037] mb-4">
                    Rejuvenate and reconnect in our serene settings. Our retreat packages combine comfortable
                    accommodations, wellness activities, and productive meeting spaces for a balanced experience.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">All-inclusive retreat packages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Yoga and meditation sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Team-building activities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Healthy dining options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-[#5D4037]">Spa treatments and wellness programs</span>
                    </li>
                  </ul>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Retreat Packages</Button>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Kuriftu Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Venues Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-10 text-center">Our Stunning Venues</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Lakeside Pavilion",
              capacity: "Up to 200 guests",
              description: "An elegant open-air venue with panoramic lake views, perfect for weddings and receptions.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              name: "Grand Ballroom",
              capacity: "Up to 500 guests",
              description: "Our largest indoor venue featuring crystal chandeliers and a spacious dance floor.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              name: "Garden Terrace",
              capacity: "Up to 150 guests",
              description: "A charming outdoor space surrounded by lush gardens and twinkling lights.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              name: "Executive Boardroom",
              capacity: "Up to 20 guests",
              description: "A sophisticated setting for high-level meetings with state-of-the-art technology.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              name: "Conference Center",
              capacity: "Up to 300 guests",
              description: "A versatile space that can be configured for conferences, exhibitions, and large meetings.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              name: "Sunset Deck",
              capacity: "Up to 100 guests",
              description: "An intimate venue offering breathtaking views of the sunset over the landscape.",
              image: "/placeholder.svg?height=300&width=400",
            },
          ].map((venue, index) => (
            <Card key={index} className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image src={venue.image || "/placeholder.svg"} alt={venue.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{venue.name}</h3>
                <div className="flex items-center text-[#5D4037] mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{venue.capacity}</span>
                </div>
                <p className="text-[#5D4037] mb-4">{venue.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#EDDCBE] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-10 text-center">Comprehensive Event Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Event Planning",
                description: "Our experienced event planners will guide you through every step of the process.",
                icon: <Calendar className="h-10 w-10 text-[#8B4513]" />,
              },
              {
                title: "Catering",
                description: "Exquisite menus featuring local and international cuisine prepared by our master chefs.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#8B4513]"
                  >
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                    <line x1="6" x2="18" y1="17" y2="17"></line>
                  </svg>
                ),
              },
              {
                title: "Decoration",
                description: "Custom décor and floral arrangements to match your event theme and vision.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#8B4513]"
                  >
                    <path d="M12 2v8"></path>
                    <path d="M8 10V7"></path>
                    <path d="M16 10V7"></path>
                    <path d="M6 18h12"></path>
                    <path d="M18 15c0 1.5-1 2-2 2h-8c-1 0-2-.5-2-2v-3h12v3Z"></path>
                    <path d="M12 18v4"></path>
                  </svg>
                ),
              },
              {
                title: "Entertainment",
                description: "From DJs to live bands, we can arrange entertainment to suit your event.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#8B4513]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 19a7 7 0 1 0 0-14"></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{service.title}</h3>
                <p className="text-[#5D4037]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-10 text-center">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Sarah & Michael",
              event: "Wedding",
              quote:
                "Our wedding at Kuriftu was absolutely magical. The lakeside venue was breathtaking, and the staff went above and beyond to make our day perfect.",
              image: "/placeholder.svg?height=80&width=80",
            },
            {
              name: "Abebe Techane",
              event: "Corporate Conference",
              quote:
                "We hosted our annual conference at Kuriftu and were impressed by the professional service and attention to detail. The facilities were excellent.",
              image: "/placeholder.svg?height=80&width=80",
            },
            {
              name: "Tigist Haile",
              event: "50th Birthday Celebration",
              quote:
                "My milestone birthday celebration was everything I dreamed of. The venue was beautiful, the food was exceptional, and my guests are still talking about it!",
              image: "/placeholder.svg?height=80&width=80",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#8B4513]">{testimonial.name}</h3>
                  <p className="text-sm text-[#5D4037]">{testimonial.event}</p>
                </div>
              </div>
              <p className="text-[#5D4037] italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#EDDCBE] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-10 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How far in advance should I book my event?",
                answer:
                  "We recommend booking at least 6-12 months in advance for weddings and large events, and 3-6 months for smaller functions. However, we can sometimes accommodate last-minute bookings depending on availability.",
              },
              {
                question: "Can you accommodate special dietary requirements?",
                answer:
                  "Yes, our culinary team can accommodate various dietary needs including vegetarian, vegan, gluten-free, and religious dietary restrictions. Please inform us of any special requirements during the planning process.",
              },
              {
                question: "Is there a minimum guest count for events?",
                answer:
                  "Minimum guest counts vary by venue and event type. Our smaller venues can accommodate intimate gatherings of 20 guests, while our larger spaces require minimum numbers. Please contact our events team for specific requirements.",
              },
              {
                question: "Do you offer accommodation for event guests?",
                answer:
                  "Yes, we offer special accommodation rates for event guests. Depending on the size of your event, we can also arrange room blocks to ensure your guests can stay on-site.",
              },
              {
                question: "Can we bring our own vendors?",
                answer:
                  "While we have a list of preferred vendors who are familiar with our venues, we are flexible and allow outside vendors. All external vendors must be approved by our events team and provide proof of insurance.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#8B4513] mb-2">{faq.question}</h3>
                <p className="text-[#5D4037]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#5D4037] mb-4">Have more questions? Contact our events team directly.</p>
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Contact Events Team</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#8B4513] text-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let our experienced team help you create an unforgettable experience. Contact us today to start planning
            your perfect event at Kuriftu Resort & Spa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#8B4513] hover:bg-[#E8C9A0]">Request a Proposal</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kuriftu Resort & Spa</h3>
              <address className="not-italic">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Multiple locations across Ethiopia</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+251 116 672 596</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>events@kuriftu.com</span>
                </div>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/events-celebrations" className="hover:underline">
                    Events & Celebrations
                  </Link>
                </li>
                <li>
                  <Link href="/african-village" className="hover:underline">
                    African Village
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="hover:underline">
                    Rooms & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for special event packages and updates</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full text-black" />
                <Button className="bg-[#6D4C41] hover:bg-[#5D4037] rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#A1887F] mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Kuriftu Resort & Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
