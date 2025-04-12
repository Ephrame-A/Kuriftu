import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"

export default function EntotoPage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Entoto Mountain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mt-4">Kuriftu Resort & Spa - Entoto</h1>
          <p className="text-[#5D4037] mt-2">Luxury mountain retreat with breathtaking views of Addis Ababa</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#EDDCBE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">About Entoto Resort</h2>
          <p className="text-[#5D4037] mb-6">
            Perched on the Entoto Mountains at an altitude of 3,200 meters, Kuriftu Resort & Spa Entoto offers a unique
            mountain retreat experience with panoramic views of Addis Ababa. The crisp mountain air and eucalyptus
            forests create a refreshing escape from the city below.
          </p>
          <p className="text-[#5D4037] mb-6">
            Our Entoto property combines traditional Ethiopian highland architecture with modern luxury. The resort is
            located near the historic Entoto Maryam Church and the former palace of Emperor Menelik II, offering both
            cultural experiences and natural beauty.
          </p>
          <div className="flex justify-center">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Find Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] relative">
                {/* Static Map Image */}
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Map+of+Kuriftu+Resort+Entoto"
                  alt="Map of Kuriftu Resort Entoto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Kuriftu+Entoto+Resort+and+Spa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8B4513] text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Location & Directions</h3>
              <p className="text-[#5D4037] mb-4">
                Kuriftu Resort & Spa Entoto is located in the Entoto Mountains, north of Addis Ababa, offering
                breathtaking panoramic views of the city below.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#8B4513]">Address:</h4>
                  <p className="text-[#5D4037]">Entoto Mountain, Addis Ababa, Ethiopia</p>
                </div>

                <div>
                  <h4 className="font-medium text-[#8B4513]">From Addis Ababa City Center:</h4>
                  <ul className="list-disc pl-5 text-[#5D4037] space-y-1">
                    <li>Head north on Entoto Road</li>
                    <li>Continue uphill through the eucalyptus forests</li>
                    <li>Follow signs to Kuriftu Resort & Spa Entoto</li>
                    <li>Approximately 30 minutes drive from the city center</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-[#8B4513]">From Bole International Airport:</h4>
                  <p className="text-[#5D4037]">
                    The resort is approximately 1 hour drive from Bole International Airport. Airport transfers can be
                    arranged through the resort.
                  </p>
                </div>

                <div className="pt-2">
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Request Airport Transfer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Our Accommodations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image
                src="/placeholder.svg?height=250&width=500"
                alt="Mountain View Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Mountain View Room</h3>
              <p className="text-[#5D4037] mb-4">
                These cozy rooms offer stunning views of the surrounding mountains. Each room features a fireplace,
                king-sized bed, and a private balcony perfect for enjoying the cool mountain air.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$200 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="City View Suite" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">City View Suite</h3>
              <p className="text-[#5D4037] mb-4">
                Enjoy panoramic views of Addis Ababa from these luxurious suites. Features include a separate living
                area, premium furnishings, and a private terrace with outdoor seating.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$280 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Forest Cabin" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Forest Cabin</h3>
              <p className="text-[#5D4037] mb-4">
                Nestled among eucalyptus trees, our private cabins offer a secluded retreat with a rustic luxury feel.
                Each cabin includes a kitchenette, living area, and outdoor hot tub.
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
                alt="Royal Highland Villa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Royal Highland Villa</h3>
              <p className="text-[#5D4037] mb-4">
                Our premium accommodation, inspired by Emperor Menelik's palace, offers the ultimate luxury experience
                with multiple bedrooms, a private garden, and dedicated butler service.
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
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Entoto Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Historical Tours</h3>
            <p className="text-[#5D4037] mb-4">
              Explore the historical sites of Entoto, including Emperor Menelik II's palace, Entoto Maryam Church, and
              the museum. Our knowledgeable guides provide insights into Ethiopia's rich history.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Mountain Hiking</h3>
            <p className="text-[#5D4037] mb-4">
              Discover the natural beauty of the Entoto Mountains with guided hiking trails suitable for all fitness
              levels. Enjoy breathtaking views and the chance to spot local wildlife.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Mountain Biking</h3>
            <p className="text-[#5D4037] mb-4">
              Experience the thrill of mountain biking on Entoto's scenic trails. We provide quality bikes and safety
              equipment for both beginners and experienced riders.
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
                  <span>Entoto Mountain, Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+251 987 654 321</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>entoto@kuriftu.com</span>
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
                  <Link href="/entoto" className="hover:underline">
                    Entoto
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
