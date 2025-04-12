import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Utensils, SpadeIcon as Spa, Mountain, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DiningServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Dining & Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Dining & Services</h1>
              <p className="text-xl text-white max-w-2xl mx-auto px-4">
                Experience exceptional dining and premium services at Kuriftu Resort & Spa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="dining" className="w-full">
          <TabsList className="bg-[#E8C9A0] w-full flex justify-between mb-8 overflow-x-auto">
            <TabsTrigger value="dining" className="data-[state=active]:bg-white">
              Dining
            </TabsTrigger>
            <TabsTrigger value="spa" className="data-[state=active]:bg-white">
              Spa & Wellness
            </TabsTrigger>
            <TabsTrigger value="adventure" className="data-[state=active]:bg-white">
              Adventure
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-white">
              Events
            </TabsTrigger>
            <TabsTrigger value="amenities" className="data-[state=active]:bg-white">
              Amenities
            </TabsTrigger>
          </TabsList>

          {/* Dining Tab */}
          <TabsContent value="dining" className="mt-0">
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="rounded-full bg-[#EDDCBE] p-8 inline-flex items-center justify-center">
                    <Utensils className="h-16 w-16 text-[#8B4513]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Exquisite Dining Experiences</h2>
                  <p className="text-[#5D4037] mb-6">
                    Indulge in a culinary journey at Kuriftu Resort & Spa, where our restaurants offer a blend of
                    authentic Ethiopian cuisine and international favorites. Our chefs use locally-sourced, fresh
                    ingredients to create memorable dining experiences in stunning settings.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <TableReservationDialog />
                    <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                      View Menus
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Lakeside Restaurant",
                    description:
                      "Enjoy panoramic lake views while savoring our signature dishes. Perfect for romantic dinners and special occasions.",
                    image: "/placeholder.svg?height=250&width=400",
                    hours: "7:00 AM - 10:00 PM",
                    cuisine: "Ethiopian & International",
                  },
                  {
                    name: "African Terrace",
                    description:
                      "An open-air dining experience featuring authentic African cuisine prepared using traditional methods and local spices.",
                    image: "/placeholder.svg?height=250&width=400",
                    hours: "12:00 PM - 10:00 PM",
                    cuisine: "Pan-African",
                  },
                  {
                    name: "Sunset Lounge & Bar",
                    description:
                      "Unwind with handcrafted cocktails, fine wines, and light bites while watching the sun set over the horizon.",
                    image: "/placeholder.svg?height=250&width=400",
                    hours: "4:00 PM - 12:00 AM",
                    cuisine: "Tapas & Drinks",
                  },
                ].map((restaurant, index) => (
                  <div key={index} className="bg-[#EDDCBE] rounded-lg overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{restaurant.name}</h3>
                      <p className="text-[#5D4037] mb-4">{restaurant.description}</p>
                      <div className="flex items-center text-[#5D4037] mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center text-[#5D4037] mb-4">
                        <Utensils className="h-4 w-4 mr-2" />
                        <span>{restaurant.cuisine}</span>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                          View Menu
                        </Button>
                        <TableReservationDialog />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EDDCBE] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Special Dining Experiences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Private Beach Dinner",
                    description:
                      "A romantic dinner for two set up on a private beach with personalized menu and dedicated service.",
                    image: "/placeholder.svg?height=200&width=300",
                    price: "From $150 per couple",
                  },
                  {
                    name: "Ethiopian Coffee Ceremony",
                    description:
                      "Experience the traditional Ethiopian coffee ceremony with freshly roasted beans and cultural insights.",
                    image: "/placeholder.svg?height=200&width=300",
                    price: "From $45 per person",
                  },
                ].map((experience, index) => (
                  <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                    <div className="md:w-1/3 relative h-[150px] md:h-auto">
                      <Image
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-4">
                      <h4 className="font-semibold text-[#8B4513] mb-2">{experience.name}</h4>
                      <p className="text-[#5D4037] text-sm mb-3">{experience.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#8B4513] font-medium">{experience.price}</span>
                        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Experience</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Spa Tab */}
          <TabsContent value="spa" className="mt-0">
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="rounded-full bg-[#EDDCBE] p-8 inline-flex items-center justify-center">
                    <Spa className="h-16 w-16 text-[#8B4513]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Spa & Wellness</h2>
                  <p className="text-[#5D4037] mb-6">
                    Rejuvenate your body and mind at our luxurious spa, where ancient Ethiopian healing traditions meet
                    modern wellness techniques. Our skilled therapists offer a range of treatments designed to promote
                    relaxation, balance, and overall well-being.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book a Treatment</Button>
                    <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                      View Spa Menu
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Signature Treatments",
                    description:
                      "Our exclusive treatments combine Ethiopian herbs and oils with specialized techniques for ultimate relaxation.",
                    image: "/placeholder.svg?height=250&width=400",
                  },
                  {
                    name: "Couples Experiences",
                    description:
                      "Share a relaxing experience with your partner in our private couples suite with dual treatment beds and a jacuzzi.",
                    image: "/placeholder.svg?height=250&width=400",
                  },
                  {
                    name: "Wellness Programs",
                    description:
                      "Multi-day programs designed to detoxify, rejuvenate, and restore balance through treatments, yoga, and nutrition.",
                    image: "/placeholder.svg?height=250&width=400",
                  },
                ].map((category, index) => (
                  <div key={index} className="bg-[#EDDCBE] rounded-lg overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{category.name}</h3>
                      <p className="text-[#5D4037] mb-4">{category.description}</p>
                      <Button className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">Explore</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EDDCBE] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Featured Treatments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Ethiopian Coffee Scrub",
                    description:
                      "A revitalizing body treatment using freshly ground Ethiopian coffee to exfoliate and rejuvenate the skin.",
                    duration: "60 minutes",
                    price: "$85",
                  },
                  {
                    name: "Honey & Herb Facial",
                    description:
                      "A nourishing facial using local honey and herbs to cleanse, hydrate, and restore natural radiance.",
                    duration: "75 minutes",
                    price: "$95",
                  },
                  {
                    name: "Hot Stone Massage",
                    description:
                      "Smooth, heated stones are placed on key points of the body to melt away tension and promote deep relaxation.",
                    duration: "90 minutes",
                    price: "$120",
                  },
                  {
                    name: "Detox Body Wrap",
                    description:
                      "A purifying treatment using mineral-rich clay to draw out impurities and leave skin soft and renewed.",
                    duration: "60 minutes",
                    price: "$90",
                  },
                ].map((treatment, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-[#8B4513] mb-2">{treatment.name}</h4>
                    <p className="text-[#5D4037] text-sm mb-3">{treatment.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[#5D4037] text-sm">{treatment.duration}</span>
                        <span className="text-[#8B4513] font-medium block">{treatment.price}</span>
                      </div>
                      <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Adventure Tab */}
          <TabsContent value="adventure" className="mt-0">
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="rounded-full bg-[#EDDCBE] p-8 inline-flex items-center justify-center">
                    <Mountain className="h-16 w-16 text-[#8B4513]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Adventure & Activities</h2>
                  <p className="text-[#5D4037] mb-6">
                    Discover the natural beauty and cultural richness of Ethiopia through our curated adventure
                    activities. From hiking in the mountains to exploring historical sites, our experienced guides will
                    ensure an unforgettable experience.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book an Adventure</Button>
                    <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                      View Activity Calendar
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Lake Excursions",
                    description:
                      "Explore the serene waters of the lake with guided boat tours, fishing trips, and sunset cruises.",
                    image: "/placeholder.svg?height=250&width=400",
                    difficulty: "Easy",
                    duration: "2-4 hours",
                  },
                  {
                    name: "Cultural Tours",
                    description:
                      "Visit local villages, markets, and historical sites to experience authentic Ethiopian culture and traditions.",
                    image: "/placeholder.svg?height=250&width=400",
                    difficulty: "Easy",
                    duration: "Half day to full day",
                  },
                  {
                    name: "Mountain Hiking",
                    description:
                      "Trek through scenic mountain trails with breathtaking views, guided by our experienced local experts.",
                    image: "/placeholder.svg?height=250&width=400",
                    difficulty: "Moderate to Challenging",
                    duration: "4-8 hours",
                  },
                  {
                    name: "Bird Watching",
                    description:
                      "Ethiopia is home to over 860 bird species. Join our ornithologist for guided bird watching expeditions.",
                    image: "/placeholder.svg?height=250&width=400",
                    difficulty: "Easy",
                    duration: "2-3 hours",
                  },
                  {
                    name: "Coffee Farm Tour",
                    description:
                      "Visit a local coffee farm to learn about Ethiopia's famous coffee production from bean to cup.",
                    image: "/placeholder.svg?height=250&width=400",
                    difficulty: "Easy",
                    duration: "Half day",
                  },
                  {
                    name: "Wildlife Safari",
                    description:
                      "Explore nearby national parks and reserves to spot Ethiopia's diverse wildlife in their natural habitat.",
                    image: "/placeholder.svg?height=250&width=400",
                    difficulty: "Easy to Moderate",
                    duration: "Full day",
                  },
                ].map((activity, index) => (
                  <div key={index} className="bg-[#EDDCBE] rounded-lg overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#8B4513] mb-2">{activity.name}</h3>
                      <p className="text-[#5D4037] mb-4">{activity.description}</p>
                      <div className="flex justify-between text-[#5D4037] mb-4">
                        <div>
                          <span className="font-medium">Difficulty:</span> {activity.difficulty}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span> {activity.duration}
                        </div>
                      </div>
                      <Button className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Activity</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="mt-0">
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="rounded-full bg-[#EDDCBE] p-8 inline-flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-[#8B4513]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Events & Entertainment</h2>
                  <p className="text-[#5D4037] mb-6">
                    Enhance your stay with our diverse range of events and entertainment options. From traditional
                    Ethiopian music and dance performances to themed dinner nights, there's always something exciting
                    happening at Kuriftu Resort & Spa.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">View Event Calendar</Button>
                    <Link href="/events-celebrations">
                      <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                        Host an Event
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Ethiopian Cultural Night",
                    description:
                      "Experience traditional Ethiopian music, dance, and cuisine in an enchanting evening celebration.",
                    date: "Every Saturday",
                    time: "7:00 PM - 10:00 PM",
                    location: "Lakeside Restaurant",
                    price: "$45 per person",
                  },
                  {
                    name: "Jazz by the Lake",
                    description:
                      "Enjoy smooth jazz melodies performed by local musicians while sipping cocktails with a lake view.",
                    date: "Every Friday",
                    time: "8:00 PM - 11:00 PM",
                    location: "Sunset Lounge",
                    price: "Free for resort guests",
                  },
                  {
                    name: "Full Moon Dinner",
                    description:
                      "A special dining experience under the full moon with a curated menu and ambient lighting.",
                    date: "May 15, 2024",
                    time: "7:30 PM - 10:30 PM",
                    location: "Beach Pavilion",
                    price: "$75 per person",
                  },
                ].map((event, index) => (
                  <div key={index} className="bg-[#EDDCBE] p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h4 className="font-semibold text-[#8B4513] text-lg mb-2">{event.name}</h4>
                        <p className="text-[#5D4037] mb-3">{event.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-[#5D4037]">
                          <div>
                            <span className="font-medium">Date:</span> {event.date}
                          </div>
                          <div>
                            <span className="font-medium">Time:</span> {event.time}
                          </div>
                          <div>
                            <span className="font-medium">Location:</span> {event.location}
                          </div>
                          <div>
                            <span className="font-medium">Price:</span> {event.price}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex md:flex-col justify-end gap-4">
                        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Reserve</Button>
                        <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Amenities Tab */}
          <TabsContent value="amenities" className="mt-0">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-6">Resort Amenities</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Included with Your Stay</h3>
                  <ul className="space-y-3">
                    {[
                      "High-speed Wi-Fi throughout the resort",
                      "Access to swimming pools and beach areas",
                      "Fitness center with modern equipment",
                      "Daily housekeeping service",
                      "Welcome drink upon arrival",
                      "Bottled water replenished daily",
                      "Morning coffee and tea service",
                      "Access to garden and lounge areas",
                      "Parking for resort guests",
                    ].map((amenity, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#8B4513] flex items-center justify-center text-white mr-2 mt-0.5">
                          ✓
                        </div>
                        <span className="text-[#5D4037]">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Premium Services</h3>
                  <ul className="space-y-3">
                    {[
                      "Airport transfers and transportation",
                      "24-hour room service",
                      "Laundry and dry cleaning",
                      "Childcare and babysitting",
                      "Private dining experiences",
                      "Personal butler service",
                      "Guided tours and excursions",
                      "Equipment rental (boats, fishing gear, etc.)",
                      "Business center and meeting facilities",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#EDDCBE] flex items-center justify-center text-[#8B4513] mr-2 mt-0.5">
                          +
                        </div>
                        <span className="text-[#5D4037]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#EDDCBE] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Special Requests</h3>
                <p className="text-[#5D4037] mb-4">
                  Our team is dedicated to making your stay exceptional. If you have any special requests or require
                  assistance with arrangements not listed here, please don't hesitate to contact us.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Contact Concierge</Button>
                  <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                    View Resort Map
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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
                  <span>123 Resort Avenue, Lake District</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 234 567 8900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@kuriftu.com</span>
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
                  <Link href="/dining-services" className="hover:underline">
                    Dining & Services
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
              <p className="mb-4">Subscribe to our newsletter for special deals and updates</p>
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

function TableReservationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Reserve a Table</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#f8e0c0] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#8B4513]">Table Reservation</DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="restaurant">Restaurant</Label>
            <Select>
              <SelectTrigger id="restaurant" className="bg-white border-[#D7CCC8]">
                <SelectValue placeholder="Select Restaurant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lakeside">Lakeside Restaurant</SelectItem>
                <SelectItem value="african">African Terrace</SelectItem>
                <SelectItem value="sunset">Sunset Lounge & Bar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              className="bg-white border-[#D7CCC8]"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Select>
              <SelectTrigger id="time" className="bg-white border-[#D7CCC8]">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 16 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 11
                  const minute = i % 2 === 0 ? "00" : "30"
                  const period = hour >= 12 ? "PM" : "AM"
                  const displayHour = hour > 12 ? hour - 12 : hour
                  return `${displayHour}:${minute} ${period}`
                }).map((time) => (
                  <SelectItem key={time} value={time.toLowerCase().replace(/\s/g, "")}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select>
              <SelectTrigger id="guests" className="bg-white border-[#D7CCC8]">
                <SelectValue placeholder="Select Number of Guests" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </SelectItem>
                ))}
                <SelectItem value="more">More than 10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="special-requests">Special Requests</Label>
            <Input
              id="special-requests"
              className="bg-white border-[#D7CCC8]"
              placeholder="Any dietary requirements or special occasions?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input id="contact" type="tel" className="bg-white border-[#D7CCC8]" required />
          </div>

          <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
            Confirm Reservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
