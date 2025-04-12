import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingBar } from "@/components/booking-bar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[500px]">
          <Image
            src="photo_2025-04-10_16-17-44.jpg"
            alt="Kuriftu Resort & Spa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-3xl">
              Enjoy the Luxurious Stay at the
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mt-2">KURIFTU RESORT & SPA</h2>
          </div>
        </div>

        {/* Booking Bar */}
        <div className="relative mx-auto px-4 -mt-8 md:-mt-16 z-10 max-w-5xl">
          <BookingBar />
        </div>
      </section>

      {/* Our Resorts Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 mt-4 md:mt-8">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-10">Our Resorts</h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="African Village"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-3/5 mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold text-[#8B4513] mb-4">African Village</h3>
            <p className="text-[#5D4037] mb-6">
              With our devotion to connecting the African nation through unique experiments in the hospitality industry,
              the Kuriftu brand is proud to present Kuriftu Resort & Spa Africa Village. This project highlights 54
              villas that showcase the individual beauty of each African country ranging from food, art, books, cultural
              artifacts, fabrics, flags, and so much more!
            </p>
            <Button className="bg-[#E8C9A0] hover:bg-[#D7B88F] text-[#8B4513] border border-[#8B4513] rounded-full px-6">
              Explore More
            </Button>
          </div>
        </div>
      </section>

      {/* African Village Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="African Village"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">African Village</h2>
            <p className="text-[#5D4037] mb-4">
              Experience the authentic charm of our African Village, designed to immerse you in the rich cultural
              heritage of Africa. Our village features traditional architecture, handcrafted furnishings, and a serene
              atmosphere that connects you with nature. Each hut is uniquely designed to provide modern comfort while
              honoring traditional African aesthetics.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Lake View Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">Lake View</h2>
            <p className="text-[#5D4037] mb-4">
              Our Lake View accommodations offer breathtaking panoramic views of the pristine waters. Wake up to the
              gentle sounds of nature and enjoy your morning coffee while watching the sunrise over the tranquil lake.
              These rooms feature floor-to-ceiling windows, private balconies, and luxurious amenities for an
              unforgettable stay.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Explore</Button>
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Lake View"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Suites Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Suites"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">Suites</h2>
            <p className="text-[#5D4037] mb-4">
              Indulge in luxury with our premium suites, designed for those who seek the ultimate comfort and elegance.
              Each suite features spacious living areas, premium furnishings, and exclusive amenities. Enjoy
              personalized service, private dining options, and spectacular views from your own sanctuary.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">View Suites</Button>
          </div>
        </div>
      </section>

      {/* Serenity Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">Serenity</h2>
            <p className="text-[#5D4037] mb-4">
              Find your inner peace at our Serenity spa and wellness center. Surrounded by lush gardens and natural
              beauty, our wellness facilities offer a range of treatments designed to rejuvenate your body and mind.
              From traditional massages to modern therapies, our expert staff ensures a blissful experience.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book Spa</Button>
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Serenity"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Popular Activities */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">Popular Activities</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {["Hiking", "Swimming", "Fishing", "Boating", "Spa", "Dining"].map((activity, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D7CCC8] rounded-full flex items-center justify-center mb-1 md:mb-2 mx-auto">
                <span className="text-[#8B4513]">{activity[0]}</span>
              </div>
              <span className="text-[#5D4037] text-xs md:text-sm text-center">{activity}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-4">
          <Link href="/dining-services">
            <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">View Dining & Services</Button>
          </Link>
          <Link href="/rewards">
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
              Explore Rewards
            </Button>
          </Link>
        </div>
      </section>

      {/* People Love Us */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-8 text-center">People Love Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#EDDCBE] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D7CCC8] rounded-full mr-4"></div>
                <div>
                  <h3 className="font-medium text-[#5D4037]">Guest Name</h3>
                  <p className="text-sm text-[#8D6E63]">Location</p>
                </div>
              </div>
              <p className="text-[#5D4037]">
                "Amazing experience at Kuriftu Resort. The African Village accommodation was authentic and
                comfortable. Will definitely return!"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="w-full h-[300px] bg-gray-200 rounded-lg mb-6">
          {/* Map placeholder */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">Interactive Map</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-8">
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
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Accommodations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Dining
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
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
