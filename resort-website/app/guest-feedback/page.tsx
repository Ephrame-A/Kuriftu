"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function GuestFeedbackPage() {
  const [step, setStep] = useState<"form" | "thanks">("form")
  const [sentiment, setSentiment] = useState<string | null>(null)
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [roomNumber, setRoomNumber] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [pointsEarned, setPointsEarned] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate AI response based on sentiment
    let response = ""
    let points = 0

    if (sentiment === "veryhappy") {
      response =
        "We're thrilled to hear you had such a wonderful experience at Kuriftu Resort & Spa! Your positive feedback means the world to us, and we're especially glad you enjoyed your stay. We've shared your comments with our team who are equally delighted. We look forward to welcoming you back soon for another memorable experience."
      points = 50
    } else if (sentiment === "happy") {
      response =
        "Thank you for your positive feedback! We're happy to hear you enjoyed your stay with us at Kuriftu Resort & Spa. Your comments help us continue providing great experiences for all our guests. We've noted your feedback and look forward to making your next stay even better."
      points = 40
    } else if (sentiment === "neutral") {
      response =
        "Thank you for taking the time to share your feedback. We appreciate your balanced perspective on your experience at Kuriftu Resort & Spa. We're constantly working to improve, and your insights will help us enhance our services. If you have any specific suggestions, we'd love to hear more details."
      points = 30
    } else if (sentiment === "unhappy") {
      response =
        "We sincerely apologize that your experience didn't meet expectations. Your feedback is invaluable as we strive to improve. A member of our management team will review your comments and may reach out to discuss further. We're committed to addressing the issues you've highlighted and hope to have the opportunity to provide you with a better experience in the future."
      points = 25
    } else if (sentiment === "veryunhappy") {
      response =
        "We're truly sorry to hear about your disappointing experience. Please accept our sincere apologies. Your feedback is taken very seriously, and our management team will be reviewing your comments immediately. We would appreciate the opportunity to make things right. A member of our team will contact you directly to address your concerns and find a resolution."
      points = 20
    }

    setAiResponse(response)
    setPointsEarned(points)
    setStep("thanks")
  }

  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[300px]">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Guest Feedback"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Share Your Experience</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {step === "form" ? (
            <div>
              <div className="bg-[#8B4513] p-6 text-white">
                <h2 className="text-2xl font-semibold">We Value Your Feedback</h2>
                <p className="mt-2 opacity-90">
                  Your thoughts help us improve and create better experiences for all our guests
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#8B4513]">How was your overall experience?</h3>
                  <RadioGroup
                    value={sentiment || ""}
                    onValueChange={setSentiment}
                    className="flex justify-between"
                    required
                  >
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="veryunhappy" id="veryunhappy" className="sr-only" />
                      <Label htmlFor="veryunhappy" className="cursor-pointer flex flex-col items-center space-y-2">
                        <div
                          className={`h-16 w-16 rounded-full flex items-center justify-center text-4xl transition-colors ${
                            sentiment === "veryunhappy"
                              ? "bg-red-100 text-red-500 ring-2 ring-red-500"
                              : "bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-400"
                          }`}
                        >
                          😠
                        </div>
                        <span className="text-xs text-[#5D4037]">Very Unhappy</span>
                      </Label>
                    </div>

                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="unhappy" id="unhappy" className="sr-only" />
                      <Label htmlFor="unhappy" className="cursor-pointer flex flex-col items-center space-y-2">
                        <div
                          className={`h-16 w-16 rounded-full flex items-center justify-center text-4xl transition-colors ${
                            sentiment === "unhappy"
                              ? "bg-orange-100 text-orange-500 ring-2 ring-orange-500"
                              : "bg-gray-100 text-gray-400 hover:bg-orange-50 hover:text-orange-400"
                          }`}
                        >
                          🙁
                        </div>
                        <span className="text-xs text-[#5D4037]">Unhappy</span>
                      </Label>
                    </div>

                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="neutral" id="neutral" className="sr-only" />
                      <Label htmlFor="neutral" className="cursor-pointer flex flex-col items-center space-y-2">
                        <div
                          className={`h-16 w-16 rounded-full flex items-center justify-center text-4xl transition-colors ${
                            sentiment === "neutral"
                              ? "bg-yellow-100 text-yellow-500 ring-2 ring-yellow-500"
                              : "bg-gray-100 text-gray-400 hover:bg-yellow-50 hover:text-yellow-400"
                          }`}
                        >
                          😐
                        </div>
                        <span className="text-xs text-[#5D4037]">Neutral</span>
                      </Label>
                    </div>

                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="happy" id="happy" className="sr-only" />
                      <Label htmlFor="happy" className="cursor-pointer flex flex-col items-center space-y-2">
                        <div
                          className={`h-16 w-16 rounded-full flex items-center justify-center text-4xl transition-colors ${
                            sentiment === "happy"
                              ? "bg-green-100 text-green-500 ring-2 ring-green-500"
                              : "bg-gray-100 text-gray-400 hover:bg-green-50 hover:text-green-400"
                          }`}
                        >
                          🙂
                        </div>
                        <span className="text-xs text-[#5D4037]">Happy</span>
                      </Label>
                    </div>

                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="veryhappy" id="veryhappy" className="sr-only" />
                      <Label htmlFor="veryhappy" className="cursor-pointer flex flex-col items-center space-y-2">
                        <div
                          className={`h-16 w-16 rounded-full flex items-center justify-center text-4xl transition-colors ${
                            sentiment === "veryhappy"
                              ? "bg-emerald-100 text-emerald-500 ring-2 ring-emerald-500"
                              : "bg-gray-100 text-gray-400 hover:bg-emerald-50 hover:text-emerald-400"
                          }`}
                        >
                          😄
                        </div>
                        <span className="text-xs text-[#5D4037]">Very Happy</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-lg font-medium text-[#8B4513]">
                    Tell us more about your experience
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder="What did you enjoy? What could we improve? Any specific feedback about our services, staff, or facilities?"
                    className="min-h-[150px] border-[#D7CCC8]"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#5D4037]">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      className="border-[#D7CCC8]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#5D4037]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="border-[#D7CCC8]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roomNumber" className="text-[#5D4037]">
                    Room Number (optional)
                  </Label>
                  <Input
                    id="roomNumber"
                    className="border-[#D7CCC8]"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                  />
                </div>

                <div className="bg-[#EDDCBE] p-4 rounded-lg">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-[#8B4513] mr-2" />
                    <p className="text-sm text-[#5D4037]">
                      <span className="font-medium">Earn Reward Points:</span> Share your feedback and earn up to 50
                      points towards your next stay or spa treatment!
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
                  Submit Feedback
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="bg-[#8B4513] p-6 text-white">
                <h2 className="text-2xl font-semibold">Thank You for Your Feedback!</h2>
                <p className="mt-2 opacity-90">
                  Your insights help us improve and create better experiences for all our guests
                </p>
              </div>

              <div className="p-6 space-y-8">
                <div className="bg-[#EDDCBE] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-[#8B4513]">Points Earned</h3>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-[#8B4513] mr-1" />
                      <span className="font-bold text-[#8B4513]">{pointsEarned} points</span>
                    </div>
                  </div>
                  <Progress value={pointsEarned * 2} className="h-2 bg-white" />
                  <p className="text-sm text-[#5D4037] mt-2">
                    These points have been added to your account and can be used for room upgrades, spa treatments, or
                    dining credits.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#8B4513]">Our Response</h3>
                  <div className="bg-white border border-[#D7CCC8] rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <div className="bg-[#8B4513] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                        <span className="font-semibold">KR</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#8B4513]">Kuriftu Resort & Spa Team</p>
                        <p className="text-xs text-[#5D4037]">Just now</p>
                      </div>
                    </div>
                    <p className="text-[#5D4037]">{aiResponse}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#8B4513]">What's Next?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#EDDCBE] p-4 rounded-lg">
                      <h4 className="font-medium text-[#8B4513] mb-2">Check Your Rewards</h4>
                      <p className="text-sm text-[#5D4037] mb-3">
                        View your current points balance and available rewards in your account.
                      </p>
                      <Link href="/rewards">
                        <Button variant="outline" className="w-full border-[#8B4513] text-[#8B4513]">
                          View Rewards
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-[#EDDCBE] p-4 rounded-lg">
                      <h4 className="font-medium text-[#8B4513] mb-2">Share Cultural Artifacts</h4>
                      <p className="text-sm text-[#5D4037] mb-3">
                        Contribute to our cultural collection and earn additional reward points.
                      </p>
                      <Link href="/african-village/cultural-artifacts">
                        <Button variant="outline" className="w-full border-[#8B4513] text-[#8B4513]">
                          Explore Artifacts
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link href="/">
                    <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                      Return to Home
                    </Button>
                  </Link>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white" onClick={() => setStep("form")}>
                    Submit Another Feedback
                  </Button>
                </div>
              </div>
            </div>
          )}
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
                  <Link href="/rooms" className="hover:underline">
                    Rooms & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/dining-services" className="hover:underline">
                    Dining & Services
                  </Link>
                </li>
                <li>
                  <Link href="/guest-feedback" className="hover:underline">
                    Guest Feedback
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
