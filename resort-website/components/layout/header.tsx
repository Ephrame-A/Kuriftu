import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="bg-[#2A2A2A] text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt="Kuriftu Logo" fill className="object-cover" />
            </div>
            <span className="text-lg md:text-xl font-bold uppercase">Kuriftu</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#E8C9A0] transition-colors">
              Home
            </Link>
            <Link href="/rooms" className="hover:text-[#E8C9A0] transition-colors">
              Rooms
            </Link>
            <div className="relative group">
              <button className="hover:text-[#E8C9A0] transition-colors flex items-center">
                Destinations <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                <Link href="/african-village" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  African Village
                </Link>
                <Link
                  href="/african-village/cultural-artifacts"
                  className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0] pl-6 text-sm"
                >
                  Cultural Artifacts
                </Link>
                <Link href="/lake-tana" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  Lake Tana
                </Link>
                <Link href="/entoto" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  Entoto
                </Link>
                <Link href="/bishoftu" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  Bishoftu
                </Link>
                <Link href="/awash" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  Awash
                </Link>
              </div>
            </div>
            <Link href="/dining-services" className="hover:text-[#E8C9A0] transition-colors">
              Dining & Services
            </Link>
            <div className="relative group">
              <button className="hover:text-[#E8C9A0] transition-colors flex items-center">
                Guest Experience <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                <Link href="/guest-feedback" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  Share Feedback
                </Link>
                <Link href="/rewards" className="block px-4 py-2 text-[#8B4513] hover:bg-[#E8C9A0]">
                  Rewards & Leaderboard
                </Link>
              </div>
            </div>
            <Link href="/events-celebrations" className="hover:text-[#E8C9A0] transition-colors">
              Events & Celebrations
            </Link>
            <Link href="/contact" className="hover:text-[#E8C9A0] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/booking">
              <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full px-6">Book Now</Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#f8e0c0]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-[#8B4513] hover:text-[#6D4C41] transition-colors text-lg">
                  Home
                </Link>
                <Link href="/rooms" className="text-[#8B4513] hover:text-[#6D4C41] transition-colors text-lg">
                  Rooms
                </Link>
                <div className="py-1">
                  <p className="text-[#8B4513] text-lg mb-2">Destinations</p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/african-village"
                      className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors"
                    >
                      African Village
                    </Link>
                    <Link
                      href="/african-village/cultural-artifacts"
                      className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors text-sm"
                    >
                      Cultural Artifacts
                    </Link>
                    <Link href="/lake-tana" className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors">
                      Lake Tana
                    </Link>
                    <Link href="/entoto" className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors">
                      Entoto
                    </Link>
                    <Link href="/bishoftu" className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors">
                      Bishoftu
                    </Link>
                    <Link href="/awash" className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors">
                      Awash
                    </Link>
                  </div>
                </div>
                <Link href="/dining-services" className="text-[#8B4513] hover:text-[#6D4C41] transition-colors text-lg">
                  Dining & Services
                </Link>
                <div className="py-1">
                  <p className="text-[#8B4513] text-lg mb-2">Guest Experience</p>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/guest-feedback"
                      className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors"
                    >
                      Share Feedback
                    </Link>
                    <Link href="/rewards" className="block text-[#8B4513] hover:text-[#6D4C41] transition-colors">
                      Rewards & Leaderboard
                    </Link>
                  </div>
                </div>
                <Link
                  href="/events-celebrations"
                  className="text-[#8B4513] hover:text-[#6D4C41] transition-colors text-lg"
                >
                  Events & Celebrations
                </Link>
                <Link href="/contact" className="text-[#8B4513] hover:text-[#6D4C41] transition-colors text-lg">
                  Contact
                </Link>
                <Link href="/booking">
                  <div className="pt-4">
                    <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-full">Book Now</Button>
                  </div>
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
