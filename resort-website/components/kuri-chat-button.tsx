"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function KuriChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle chat submission
    console.log("Chat message:", message)
    setMessage("")
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#8B4513] hover:bg-[#6D4C41] text-white shadow-lg z-50 flex items-center justify-center"
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Open Kuri Chat</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#f8e0c0] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#8B4513]">Kuri Chat</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white rounded-lg p-4 h-64 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <div className="bg-[#E8C9A0] p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                  <p className="text-[#5D4037]">Hello! Welcome to Kuriftu Resort & Spa. How can I assist you today?</p>
                </div>
                {/* Chat messages would appear here */}
              </div>
            </div>
            <div className="flex space-x-2">
              <Textarea
                placeholder="Type your message..."
                className="min-h-[80px] bg-white border-[#D7CCC8]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit" className="bg-[#8B4513] hover:bg-[#6D4C41] text-white self-end">
                Send
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
