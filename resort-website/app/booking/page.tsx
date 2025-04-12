"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState("")

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId)
    setStep(2)
  }

  const handleContinue = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  // Mock room data
  const rooms = [
    {
      id: "standard",
      name: "Standard Room",
      description: "Comfortable room with all basic amenities",
      price: 150,
      capacity: "2 Adults",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Spacious room with premium furnishings and lake view",
      price: 250,
      capacity: "2 Adults, 1 Child",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "suite",
      name: "Executive Suite",
      description: "Luxury suite with separate living area and private balcony",
      price: 350,
      capacity: "2 Adults, 2 Children",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f8e0c0] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
            <div className="bg-[#2A2A2A] p-6">
              <h1 className="text-2xl font-bold text-white text-center">Book Your Stay</h1>

              <div className="flex justify-between items-center mt-8">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-[#8B4513] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    1
                  </div>
                  <span className={`text-xs mt-2 ${step >= 1 ? "text-white" : "text-gray-400"}`}>Select Room</span>
                </div>

                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-[#8B4513]" : "bg-gray-300"}`}></div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-[#8B4513] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    2
                  </div>
                  <span className={`text-xs mt-2 ${step >= 2 ? "text-white" : "text-gray-400"}`}>Guest Details</span>
                </div>

                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-[#8B4513]" : "bg-gray-300"}`}></div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 3 ? "bg-[#8B4513] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    3
                  </div>
                  <span className={`text-xs mt-2 ${step >= 3 ? "text-white" : "text-gray-400"}`}>Payment</span>
                </div>

                <div className={`flex-1 h-1 mx-2 ${step >= 4 ? "bg-[#8B4513]" : "bg-gray-300"}`}></div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 4 ? "bg-[#8B4513] text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    4
                  </div>
                  <span className={`text-xs mt-2 ${step >= 4 ? "text-white" : "text-gray-400"}`}>Confirmation</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="bg-[#EDDCBE] p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="font-semibold text-[#8B4513]">Kuriftu Resort & Spa - Debre Zeyit</h2>
                        <div className="flex items-center mt-1 text-sm text-[#5D4037]">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>May 15, 2024 - May 20, 2024</span>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-[#5D4037]">
                          <User className="h-4 w-4 mr-1" />
                          <span>2 Adults, 1 Child</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-[#8B4513] text-[#8B4513]">
                        Modify
                      </Button>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-[#8B4513]">Select a Room</h2>

                  <div className="space-y-4">
                    {rooms.map((room) => (
                      <div
                        key={room.id}
                        className={`border rounded-lg overflow-hidden ${
                          selectedRoom === room.id ? "border-[#8B4513] bg-[#EDDCBE]" : "border-gray-200"
                        }`}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <Image
                              src={room.image || "/placeholder.svg"}
                              alt={room.name}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 md:w-2/3">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <h3 className="font-semibold text-[#8B4513]">{room.name}</h3>
                                <p className="text-sm text-[#5D4037] mt-1">{room.description}</p>
                                <div className="flex items-center mt-2 text-sm text-[#5D4037]">
                                  <User className="h-4 w-4 mr-1" />
                                  <span>{room.capacity}</span>
                                </div>
                                <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                                  {["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom"].map(
                                    (feature, index) => (
                                      <li key={index} className="flex items-center text-xs text-[#5D4037]">
                                        <Check className="h-3 w-3 mr-1 text-green-600" />
                                        {feature}
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                              <div className="text-right mt-4 md:mt-0">
                                <div className="text-lg font-bold text-[#8B4513]">${room.price}</div>
                                <p className="text-xs text-[#5D4037]">per night</p>
                                <Button
                                  className="mt-2 bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                                  onClick={() => handleRoomSelect(room.id)}
                                >
                                  Select
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-[#8B4513]">Guest Details</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" className="border-[#D7CCC8]" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" className="border-[#D7CCC8]" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" className="border-[#D7CCC8]" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" className="border-[#D7CCC8]" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <textarea
                        id="specialRequests"
                        className="w-full p-2 border border-[#D7CCC8] rounded-md"
                        rows={4}
                      ></textarea>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                        onClick={handleContinue}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-[#8B4513]">Payment</h2>

                  <div className="bg-[#EDDCBE] p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-[#8B4513] mb-2">Booking Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#5D4037]">Room:</span>
                        <span className="font-medium text-[#5D4037]">
                          {rooms.find((r) => r.id === selectedRoom)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5D4037]">Dates:</span>
                        <span className="font-medium text-[#5D4037]">May 15 - 20, 2024 (5 nights)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5D4037]">Guests:</span>
                        <span className="font-medium text-[#5D4037]">2 Adults, 1 Child</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between">
                        <span className="text-[#5D4037]">Room Rate:</span>
                        <span className="font-medium text-[#5D4037]">
                          ${rooms.find((r) => r.id === selectedRoom)?.price} x 5 nights
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#5D4037]">Taxes & Fees:</span>
                        <span className="font-medium text-[#5D4037]">$125</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between">
                        <span className="font-semibold text-[#8B4513]">Total:</span>
                        <span className="font-semibold text-[#8B4513]">
                          ${(rooms.find((r) => r.id === selectedRoom)?.price || 0) * 5 + 125}
                        </span>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-[#8B4513]">Payment Method</h3>

                      <RadioGroup defaultValue="card">
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1">
                            Credit/Debit Card
                          </Label>
                          <div className="flex space-x-1">
                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex-1">
                            PayPal
                          </Label>
                          <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-[#8B4513]">Card Details</h3>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" className="border-[#D7CCC8]" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          className="border-[#D7CCC8]"
                          placeholder="XXXX XXXX XXXX XXXX"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" className="border-[#D7CCC8]" placeholder="MM/YY" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" className="border-[#D7CCC8]" placeholder="XXX" required />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" required />
                      <label htmlFor="terms" className="text-sm text-[#5D4037]">
                        I agree to the{" "}
                        <Link href="/terms" className="text-[#8B4513] hover:underline">
                          terms and conditions
                        </Link>
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                        onClick={handleContinue}
                      >
                        Complete Booking
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>

                  <h2 className="text-2xl font-semibold text-[#8B4513]">Booking Confirmed!</h2>
                  <p className="text-[#5D4037]">Your booking has been successfully completed.</p>

                  <div className="bg-[#EDDCBE] p-6 rounded-lg max-w-md mx-auto">
                    <h3 className="font-semibold text-[#8B4513] mb-4">Booking Details</h3>
                    <div className="space-y-3 text-left">
                      <div>
                        <span className="text-sm text-[#5D4037]">Booking Reference:</span>
                        <p className="font-medium text-[#8B4513]">KFT-12345678</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Resort:</span>
                        <p className="font-medium text-[#8B4513]">Kuriftu Resort & Spa - Debre Zeyit</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Room:</span>
                        <p className="font-medium text-[#8B4513]">{rooms.find((r) => r.id === selectedRoom)?.name}</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Check-in:</span>
                        <p className="font-medium text-[#8B4513]">May 15, 2024</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Check-out:</span>
                        <p className="font-medium text-[#8B4513]">May 20, 2024</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Guests:</span>
                        <p className="font-medium text-[#8B4513]">2 Adults, 1 Child</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Total Amount:</span>
                        <p className="font-medium text-[#8B4513]">
                          ${(rooms.find((r) => r.id === selectedRoom)?.price || 0) * 5 + 125}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#5D4037]">A confirmation email has been sent to your email address.</p>

                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                      View Booking
                    </Button>
                    <Link href="/">
                      <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Return to Home</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
