"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch("http://127.0.0.1:8000/booking/rooms/");
        const data = await response.json();
        console.log(data);
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }
    fetchRooms();
  }, []);

  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Kuriftu Resort Rooms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              Experience the Serenity of our Luxury Rooms
            </h1>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.id} className="bg-[#EDDCBE] rounded-lg overflow-hidden">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#8B4513]">{room.name}</h2>
                      <p className="text-[#5D4037] mt-1">{room.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#8B4513]">
                        ${room.price_per_night}
                      </div>
                      <p className="text-sm text-[#5D4037]">per night</p>
                    </div>
                  </div>

                  <Separator className="my-4 bg-[#D7CCC8]" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-[#8B4513] mb-2">Room Features</h3>
                      <ul className="space-y-2">
                        {room.features &&
                          room.features.map((feature) => (
                            <li key={feature.id} className="flex items-center text-[#5D4037]">
                              <Check className="w-4 h-4 mr-2 text-green-600" />
                              {feature.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-[#8B4513] mb-2">Room Details</h3>
                        <p className="text-[#5D4037] mb-4">
                          {/* You can add more details here if needed */}
                          Enjoy a comfortable stay with premium amenities and stunning views.
                        </p>
                      </div>
                      <Link href={`/booking?roomId=${room.id}`}>
                        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white self-end">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Loading rooms...</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hyge Royal Resort</h3>
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
                  <span>info@hygeroyal.com</span>
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
              <p className="mb-4">
                Subscribe to our newsletter for special deals and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full text-black"
                />
                <Button className="bg-[#6D4C41] hover:bg-[#5D4037] rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#A1887F] mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Hyge Royal Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
