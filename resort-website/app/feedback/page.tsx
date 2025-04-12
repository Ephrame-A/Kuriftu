"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stayDate: "",
    roomType: "",
    comments: "",
    recommendRating: "",
    staffRating: "",
    cleanlinessRating: "",
    valueRating: "",
    overallExperience: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feedback submitted:", formData)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f8e0c0] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <Card>
              <CardHeader className="bg-[#2A2A2A] text-white">
                <CardTitle>Share Your Experience</CardTitle>
                <CardDescription className="text-gray-300">
                  We value your feedback to improve our services
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        className="border-[#D7CCC8]"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="border-[#D7CCC8]"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stayDate">Date of Stay</Label>
                      <Input
                        id="stayDate"
                        name="stayDate"
                        type="date"
                        className="border-[#D7CCC8]"
                        value={formData.stayDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="roomType">Room Type</Label>
                      <select
                        id="roomType"
                        name="roomType"
                        className="w-full p-2 border border-[#D7CCC8] rounded-md"
                        value={formData.roomType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Room Type</option>
                        <option value="standard">Standard Room</option>
                        <option value="deluxe">Deluxe Room</option>
                        <option value="suite">Suite</option>
                        <option value="african-village">African Village</option>
                        <option value="lake-view">Lake View</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#8B4513]">Rate Your Experience</h3>

                    <div className="space-y-4">
                      <div>
                        <Label className="mb-2 block">Staff Friendliness & Service</Label>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleRatingChange(star.toString(), "staffRating")}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-8 w-8 ${
                                  Number.parseInt(formData.staffRating) >= star
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Cleanliness & Comfort</Label>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleRatingChange(star.toString(), "cleanlinessRating")}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-8 w-8 ${
                                  Number.parseInt(formData.cleanlinessRating) >= star
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Value for Money</Label>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleRatingChange(star.toString(), "valueRating")}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-8 w-8 ${
                                  Number.parseInt(formData.valueRating) >= star
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Overall Experience</Label>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleRatingChange(star.toString(), "overallExperience")}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-8 w-8 ${
                                  Number.parseInt(formData.overallExperience) >= star
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recommendRating">How likely are you to recommend us to friends and family?</Label>
                    <RadioGroup
                      value={formData.recommendRating}
                      onValueChange={(value) => handleRatingChange(value, "recommendRating")}
                      className="flex justify-between"
                    >
                      <div className="flex flex-col items-center">
                        <RadioGroupItem value="1" id="r1" className="sr-only" />
                        <label
                          htmlFor="r1"
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                            formData.recommendRating === "1" ? "bg-red-500 text-white" : "bg-gray-200"
                          }`}
                        >
                          1
                        </label>
                        <span className="text-xs mt-1">Not likely</span>
                      </div>

                      {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div key={num} className="flex flex-col items-center">
                          <RadioGroupItem value={num.toString()} id={`r${num}`} className="sr-only" />
                          <label
                            htmlFor={`r${num}`}
                            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                              formData.recommendRating === num.toString()
                                ? num < 4
                                  ? "bg-red-500 text-white"
                                  : num < 7
                                    ? "bg-yellow-500 text-white"
                                    : "bg-green-500 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {num}
                          </label>
                        </div>
                      ))}

                      <div className="flex flex-col items-center">
                        <RadioGroupItem value="10" id="r10" className="sr-only" />
                        <label
                          htmlFor="r10"
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                            formData.recommendRating === "10" ? "bg-green-500 text-white" : "bg-gray-200"
                          }`}
                        >
                          10
                        </label>
                        <span className="text-xs mt-1">Very likely</span>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Additional Comments</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      placeholder="Tell us more about your experience..."
                      className="min-h-[150px] border-[#D7CCC8]"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="contact" className="rounded" />
                    <label htmlFor="contact" className="text-sm text-[#5D4037]">
                      I would like to be contacted about my feedback
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>

                  <h2 className="text-2xl font-semibold text-[#8B4513]">Thank You for Your Feedback!</h2>
                  <p className="text-[#5D4037]">
                    We appreciate you taking the time to share your experience with us. Your feedback helps us improve
                    our services for all guests.
                  </p>

                  <div className="bg-[#EDDCBE] p-6 rounded-lg max-w-md mx-auto">
                    <h3 className="font-semibold text-[#8B4513] mb-4">Your Ratings</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[#5D4037]">Staff Friendliness:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                Number.parseInt(formData.staffRating) >= star
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#5D4037]">Cleanliness:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                Number.parseInt(formData.cleanlinessRating) >= star
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#5D4037]">Value:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                Number.parseInt(formData.valueRating) >= star
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#5D4037]">Overall:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                Number.parseInt(formData.overallExperience) >= star
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#5D4037]">
                    If you have any further questions or concerns, please don&apos;t hesitate to contact us.
                  </p>

                  <div className="flex justify-center space-x-4">
                    <Link href="/">
                      <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Return to Home</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
