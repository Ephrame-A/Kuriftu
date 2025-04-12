import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"

export default function BishoftuPage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Kuriftu Resort Bishoftu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mt-4">Kuriftu Resort & Spa - Bishoftu</h1>
          <p className="text-[#5D4037] mt-2">Experience luxury by the crater lakes of Bishoftu</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#EDDCBE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">About Bishoftu Resort</h2>
          <p className="text-[#5D4037] mb-6">
            Located just 47 km southeast of Addis Ababa, Kuriftu Resort & Spa Bishoftu offers a serene escape on the
            shores of Lake Bishoftu. Our resort combines traditional Ethiopian architecture with modern luxury,
            providing guests with a unique and comfortable experience surrounded by natural beauty.
          </p>
          <p className="text-[#5D4037] mb-6">
            The resort features spacious rooms with lake views, a world-class spa offering traditional and modern
            treatments, multiple dining options serving Ethiopian and international cuisine, and a range of activities
            to enjoy the stunning natural surroundings.
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
              <Image src="/placeholder.svg?height=250&width=500" alt="Lake View Room" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Lake View Room</h3>
              <p className="text-[#5D4037] mb-4">
                Our lake view rooms offer stunning panoramic views of Lake Bishoftu. Each room features a private
                balcony, king-sized bed, and luxury bathroom with premium amenities.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$180 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Executive Suite" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Executive Suite</h3>
              <p className="text-[#5D4037] mb-4">
                Our spacious executive suites offer separate living and sleeping areas, a private terrace with lake
                views, and premium furnishings for the ultimate comfort and luxury.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$250 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Family Villa" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Family Villa</h3>
              <p className="text-[#5D4037] mb-4">
                Perfect for families, our villas feature two bedrooms, a spacious living area, and a private garden with
                lake access. Includes special amenities for children.
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
                Our most luxurious accommodation featuring a private infinity pool, spacious terrace, premium
                furnishings, and personalized butler service for an unforgettable stay.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$450 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
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
                  src="/placeholder.svg?height=400&width=600&text=Map+of+Kuriftu+Resort+Bishoftu"
                  alt="Map of Kuriftu Resort Bishoftu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Kuriftu+Resort+and+Spa+Bishoftu"
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
                Kuriftu Resort & Spa Bishoftu is located 47 km southeast of Addis Ababa, on the shores of Lake Bishoftu
                (also known as Lake Babogaya).
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#8B4513]">Address:</h4>
                  <p className="text-[#5D4037]">Bishoftu (Debre Zeit), Oromia Region, Ethiopia</p>
                </div>

                <div>
                  <h4 className="font-medium text-[#8B4513]">From Addis Ababa:</h4>
                  <ul className="list-disc pl-5 text-[#5D4037] space-y-1">
                    <li>Take the Addis Ababa-Adama Expressway southeast</li>
                    <li>Exit at Bishoftu/Debre Zeit</li>
                    <li>Follow signs to Kuriftu Resort & Spa (approximately 10 minutes from the exit)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-[#8B4513]">From Bole International Airport:</h4>
                  <p className="text-[#5D4037]">
                    The resort is approximately 1 hour drive (47 km) from Bole International Airport. Airport transfers
                    can be arranged through the resort.
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

      {/* Activities Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Resort Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Water Activities</h3>
            <p className="text-[#5D4037] mb-4">
              Enjoy the crystal-clear waters of Lake Bishoftu with kayaking, paddleboarding, and swimming. Our
              experienced staff can provide equipment and guidance for all skill levels.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Spa & Wellness</h3>
            <p className="text-[#5D4037] mb-4">
              Rejuvenate your body and mind at our world-class spa offering traditional Ethiopian treatments and modern
              therapies. Enjoy our steam room, sauna, and relaxation areas.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              View Spa Menu
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Local Excursions</h3>
            <p className="text-[#5D4037] mb-4">
              Explore the natural beauty and culture of Bishoftu with guided tours of the crater lakes, local markets,
              and nearby attractions. Bird watching tours are especially popular.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Book Excursion
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
                  <span>Bishoftu, Oromia Region, Ethiopia</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+251 116 672 596</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>bishoftu@kuriftu.com</span>
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
                  <Link href="/bishoftu" className="hover:underline">
                    Bishoftu
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
