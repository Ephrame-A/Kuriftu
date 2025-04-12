import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"

export default function AwashPage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Awash National Park"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mt-4">Kuriftu Resort & Spa - Awash</h1>
          <p className="text-[#5D4037] mt-2">Safari luxury in the heart of Awash National Park</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#EDDCBE] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">About Awash Resort</h2>
          <p className="text-[#5D4037] mb-6">
            Located on the edge of the magnificent Awash National Park, Kuriftu Resort & Spa Awash offers a unique
            safari experience combined with luxury accommodations. The resort is designed to blend harmoniously with the
            natural surroundings, offering an authentic safari experience without compromising on comfort.
          </p>
          <p className="text-[#5D4037] mb-6">
            Awash National Park is known for its diverse wildlife including oryx, gazelles, kudus, and over 460 species
            of birds. The park also features the stunning Awash Falls and hot springs. Our resort provides guided safari
            tours, bird watching expeditions, and cultural visits to local communities.
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
              <Image src="/placeholder.svg?height=250&width=500" alt="Safari Tent" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Luxury Safari Tent</h3>
              <p className="text-[#5D4037] mb-4">
                Experience glamping at its finest with our luxury safari tents. Each tent features a comfortable
                king-sized bed, en-suite bathroom with hot water, and a private deck overlooking the savanna.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$220 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Savanna Bungalow" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Savanna Bungalow</h3>
              <p className="text-[#5D4037] mb-4">
                Our thatched-roof bungalows offer a more substantial accommodation option with a bedroom, living area,
                and a spacious veranda perfect for wildlife viewing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$280 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Family Lodge" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Family Lodge</h3>
              <p className="text-[#5D4037] mb-4">
                Perfect for families, these lodges feature two bedrooms, a common living area, and a private garden.
                Special amenities for children and family safari activities are included.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$350 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=500" alt="Riverside Villa" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">Riverside Villa</h3>
              <p className="text-[#5D4037] mb-4">
                Our premium accommodation, situated along the Awash River, offers unparalleled luxury with a private
                plunge pool, outdoor shower, spacious living areas, and dedicated safari guide.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#8B4513]">$480 / night</span>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Awash Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Game Drives</h3>
            <p className="text-[#5D4037] mb-4">
              Experience thrilling game drives in open safari vehicles with our expert guides. Spot wildlife including
              oryx, gazelles, kudus, warthogs, and various predators in their natural habitat.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Bird Watching</h3>
            <p className="text-[#5D4037] mb-4">
              With over 460 bird species, Awash is a bird watcher's paradise. Our specialized bird watching tours are
              led by ornithologists who help you spot and identify the diverse avian life.
            </p>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-[#EDDCBE] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#8B4513] mb-3">Cultural Visits</h3>
            <p className="text-[#5D4037] mb-4">
              Engage with the local Afar and Kereyu communities to learn about their traditional way of life, customs,
              and crafts. These authentic cultural exchanges provide valuable insights into Ethiopian heritage.
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
                  <span>Awash National Park, Afar Region, Ethiopia</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+251 456 789 123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>awash@kuriftu.com</span>
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
                  <Link href="/awash" className="hover:underline">
                    Awash
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
