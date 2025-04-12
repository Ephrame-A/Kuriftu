"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function KuriChatForm() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle chat submission
    console.log("Chat message:", message)
    setMessage("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Kuri Chat</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#f8e0c0] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#8B4513]">Kuri Chat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="What can I help you?"
            className="min-h-[100px] bg-white border-[#D7CCC8]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
            Ask
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form data:", formData)
    // Reset form
    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      message: "",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#f8e0c0] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#8B4513]">Connect With Us!</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border-[#D7CCC8]"
              required
            />
          </div>
          <div>
            <Input
              placeholder="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="bg-white border-[#D7CCC8]"
              required
            />
          </div>
          <div>
            <Input
              placeholder="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-[#D7CCC8]"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[100px] bg-white border-[#D7CCC8]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
