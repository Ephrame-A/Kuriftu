import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"

export default function LakeTanaPage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Lake Tana" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mt-4">Kuriftu Resort & Spa - Lake Tana</h1>
          <p className="text-[#5D4037] mt-2">
            Experience the beauty of Ethiopia's largest lake with luxury accommodations
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#EDDCBE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">About Lake Tana Resort</h2>
          <p className="text-[#5D4037] mb-6">
            Nestled on the shores of Ethiopia's largest lake, Kuriftu Resort & Spa Lake Tana offers a unique blend of
            natural beauty and luxury. The resort features stunning views of the lake and surrounding landscapes,
            creating a peaceful retreat for our guests.
          </p>
          <p className="text-[#5D4037] mb-6">
            Lake Tana is home to numerous islands with ancient monasteries and churches, some dating back to the 14th
            century. Our resort provides the perfect base to explore these historical treasures while enjoying modern
            amenities and exceptional service.
          </p>
          <div className="flex justify-center">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Our Accommodations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Lakefront Room" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Lakefront Room</h3>
              <p className="text-[#5D4037] mb-4">
                Our lakefront rooms offer unobstructed views of Lake Tana. Each room features a private balcony,
                king-sized bed, and luxury bathroom with rainfall shower.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$180 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image
                src="/placeholder.svg?height=250&width=500"
                alt="Garden View Suite"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Garden View Suite</h3>
              <p className="text-[#5D4037] mb-4">
                Surrounded by lush tropical gardens, these spacious suites offer a tranquil retreat with a separate
                living area, king-sized bed, and a private patio.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$220 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Family Suite" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Family Suite</h3>
              <p className="text-[#5D4037] mb-4">
                Perfect for families, these suites feature two bedrooms, a spacious living area, and a large balcony
                overlooking the lake. Includes special amenities for children.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$320 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image
                src="/placeholder.svg?height=250&width=500"
                alt="Presidential Suite"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Presidential Suite</h3>
              <p className="text-[#5D4037] mb-4">
                Our most luxurious accommodation, the Presidential Suite offers panoramic lake views, a private infinity
                plunge pool, spacious living areas, and personalized butler service.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$450 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Lake Tana Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Island Monastery Tours</h3>
            <p className="text-[#5D4037] mb-4">
              Explore the ancient monasteries on Lake Tana's islands, some dating back to the 14th century. Our guided
              tours provide insights into Ethiopia's religious history and art.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Boat Excursions</h3>
            <p className="text-[#5D4037] mb-4">
              Enjoy private or group boat trips on Lake Tana. Spot hippos, various bird species, and experience stunning
              sunsets over Africa's third-largest lake.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Blue Nile Falls Visit</h3>
            <p className="text-[#5D4037] mb-4">
              Take a day trip to the magnificent Blue Nile Falls, known locally as Tis Abay or "smoking water."
              Experience one of Ethiopia's most spectacular natural wonders.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
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
                  <span>Lake Tana Shore, Bahir Dar, Ethiopia</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+251 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>laketana@kuriftu.com</span>
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
                  <Link href="/lake-tana" className="hover:underline">
                    Lake Tana
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
