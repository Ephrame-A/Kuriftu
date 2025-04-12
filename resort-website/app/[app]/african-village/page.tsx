import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"

export default function AfricanVillagePage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="African Village"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mt-4">Kuriftu Resort & Spa - African Village</h1>
          <p className="text-[#5D4037] mt-2">Experience authentic African living with modern comforts</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#EDDCBE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">About African Village</h2>
          <p className="text-[#5D4037] mb-6">
            Our African Village is designed to provide an immersive cultural experience while ensuring modern comfort.
            Each hut is carefully crafted using traditional techniques and materials, featuring thatched roofs, natural
            wood elements, and authentic décor that celebrates African heritage.
          </p>
          <p className="text-[#5D4037] mb-6">
            Despite their traditional appearance, our huts are equipped with all modern amenities including air
            conditioning, luxury bedding, private bathrooms with hot water, and high-speed Wi-Fi. The village is set in
            a lush landscape with indigenous plants, creating a peaceful sanctuary for our guests.
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
              <Image src="/placeholder.svg?height=250&width=500" alt="Standard Hut" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Standard Hut</h3>
              <p className="text-[#5D4037] mb-4">
                Our standard huts offer comfortable accommodation for up to 2 guests. Each hut features a queen-sized
                bed, private bathroom, and a small patio overlooking the village grounds.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$150 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Deluxe Hut" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Deluxe Hut</h3>
              <p className="text-[#5D4037] mb-4">
                Our deluxe huts provide a more spacious experience with a king-sized bed, expanded bathroom with soaking
                tub, and a private deck with seating area and panoramic views of the surroundings.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$250 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Family Hut" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Family Hut</h3>
              <p className="text-[#5D4037] mb-4">
                Perfect for families, these huts feature a master bedroom with a king-sized bed and a second bedroom
                with two twin beds. Includes a shared living area, expanded bathroom, and a large private patio.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$350 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Chief's Hut" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Chief's Hut</h3>
              <p className="text-[#5D4037] mb-4">
                Our premium accommodation, the Chief's Hut offers the ultimate luxury experience with a spacious layout,
                premium furnishings, private plunge pool, and dedicated concierge service.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$500 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Village Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Cultural Performances</h3>
            <p className="text-[#5D4037] mb-4">
              Experience authentic African music, dance, and storytelling performed by local artists. Our evening
              performances showcase the rich cultural heritage of different African regions.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Craft Workshops</h3>
            <p className="text-[#5D4037] mb-4">
              Join our skilled artisans for hands-on workshops in traditional crafts such as basket weaving, beadwork,
              and pottery. Create your own souvenir to take home.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Culinary Experiences</h3>
            <p className="text-[#5D4037] mb-4">
              Discover the flavors of Africa with cooking classes featuring traditional recipes and ingredients. Learn
              to prepare authentic dishes under the guidance of our expert chefs.
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
              <h3 className="text-xl font-semibold mb-4">Kuriftu Resort</h3>
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
                  <Link href="/african-village" className="hover:underline">
                    African Village
                  </Link>
                </li>
                <li>
                  <Link href="/lake-view" className="hover:underline">
                    Lake View
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
            <p>&copy; {new Date().getFullYear()} Kuriftu Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
