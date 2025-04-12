"use client"



import { useState } from "react"
import Image from "next/image"
import { User, Mail, Phone, MapPin, Calendar, Edit, Camera, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, Anytown, USA",
    birthdate: "1990-01-01",
  })

  const [formData, setFormData] = useState({ ...userData })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({ ...formData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({ ...userData })
    setIsEditing(false)
  }

  // Mock booking history
  const bookings = [
    {
      id: "B12345",
      resort: "Kuriftu Resort & Spa - Debre Zeyit",
      checkIn: "2023-12-15",
      checkOut: "2023-12-18",
      status: "Completed",
      amount: "$750",
    },
    {
      id: "B12346",
      resort: "Kuriftu Resort & Spa - African Village",
      checkIn: "2024-05-20",
      checkOut: "2024-05-25",
      status: "Upcoming",
      amount: "$1,250",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f8e0c0] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
            <div className="relative h-40 bg-[#2A2A2A]">
              <div className="absolute -bottom-16 left-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-[#E8C9A0]">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Profile"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-[#8B4513] text-white p-2 rounded-full">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Button variant="ghost" className="text-white">
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>

            <div className="pt-20 pb-6 px-8">
              <h1 className="text-2xl font-bold text-[#8B4513]">
                {userData.firstName} {userData.lastName}
              </h1>
              <p className="text-[#5D4037]">{userData.email}</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-[#E8C9A0] p-1">
              <TabsTrigger value="profile" className="data-[state=active]:bg-white">
                Profile
              </TabsTrigger>
              <TabsTrigger value="bookings" className="data-[state=active]:bg-white">
                Bookings
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-white">
                Preferences
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Manage your personal details</CardDescription>
                    </div>
                    {!isEditing && (
                      <Button
                        variant="outline"
                        className="border-[#8B4513] text-[#8B4513]"
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border-[#D7CCC8]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border-[#D7CCC8]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-[#D7CCC8]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-[#D7CCC8]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border-[#D7CCC8]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Birthdate</Label>
                          <Input
                            id="birthdate"
                            name="birthdate"
                            type="date"
                            value={formData.birthdate}
                            onChange={handleChange}
                            className="border-[#D7CCC8]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end space-x-4">
                        <Button type="button" variant="outline" onClick={handleCancel}>
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-[#8B4513] mr-2" />
                            <span className="text-sm font-medium text-gray-500">Full Name</span>
                          </div>
                          <p className="mt-1">
                            {userData.firstName} {userData.lastName}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-[#8B4513] mr-2" />
                            <span className="text-sm font-medium text-gray-500">Email</span>
                          </div>
                          <p className="mt-1">{userData.email}</p>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-[#8B4513] mr-2" />
                            <span className="text-sm font-medium text-gray-500">Phone</span>
                          </div>
                          <p className="mt-1">{userData.phone}</p>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-[#8B4513] mr-2" />
                            <span className="text-sm font-medium text-gray-500">Address</span>
                          </div>
                          <p className="mt-1">{userData.address}</p>
                        </div>

                        <div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-[#8B4513] mr-2" />
                            <span className="text-sm font-medium text-gray-500">Birthdate</span>
                          </div>
                          <p className="mt-1">{new Date(userData.birthdate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Booking History</CardTitle>
                  <CardDescription>View your past and upcoming bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {bookings.map((booking, index) => (
                      <div key={booking.id} className="bg-[#EDDCBE] rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-[#8B4513]">{booking.resort}</h3>
                            <div className="flex items-center mt-1 text-sm text-[#5D4037]">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>
                                {new Date(booking.checkIn).toLocaleDateString()} -{" "}
                                {new Date(booking.checkOut).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="mt-2">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  booking.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {booking.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-[#8B4513]">{booking.amount}</div>
                            <p className="text-xs text-[#5D4037]">Booking ID: {booking.id}</p>
                            <Button variant="outline" size="sm" className="mt-2 border-[#8B4513] text-[#8B4513]">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Book a New Stay</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#8B4513] mb-3">Communication Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="email-notifications" className="text-sm">
                            Email Notifications
                          </label>
                          <input type="checkbox" id="email-notifications" className="toggle" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="sms-notifications" className="text-sm">
                            SMS Notifications
                          </label>
                          <input type="checkbox" id="sms-notifications" className="toggle" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="marketing-emails" className="text-sm">
                            Marketing Emails
                          </label>
                          <input type="checkbox" id="marketing-emails" className="toggle" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold text-[#8B4513] mb-3">Stay Preferences</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferred-location">Preferred Location</Label>
                          <select
                            id="preferred-location"
                            className="w-full p-2 border border-[#D7CCC8] rounded-md"
                            defaultValue="debre-zeyit"
                          >
                            <option value="debre-zeyit">Debre Zeyit</option>
                            <option value="entoto">Entoto</option>
                            <option value="bishoftu">Bishoftu</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="room-preference">Room Preference</Label>
                          <select
                            id="room-preference"
                            className="w-full p-2 border border-[#D7CCC8] rounded-md"
                            defaultValue="lake-view"
                          >
                            <option value="lake-view">Lake View</option>
                            <option value="african-village">African Village</option>
                            <option value="suite">Suite</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
