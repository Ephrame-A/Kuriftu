"use client"
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Kuri, your virtual assistant. How can I help you with your stay at Kuriftu Resort & Spa?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    setConversation([...conversation, userMessage]);
    setMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/ask/chatbot/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const aiResponse = data.response;

      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setIsTyping(false);
    }

    setIsTyping(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#8B4513] hover:bg-[#6D4C41] text-white shadow-lg z-50 flex items-center justify-center"
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col h-[600px] max-h-[90vh]">
            {/* Header */}
            <div className="bg-[#8B4513] text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 bg-[#E8C9A0] text-[#8B4513] mr-3">
                  <Sparkles className="h-6 w-6" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">Kuri AI Assistant</h3>
                  <p className="text-xs opacity-80">Here to help with your stay</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-[#6D4C41] rounded-full h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#f8f8f8]">
              {conversation.map((msg, index) => (
                <div key={index} className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.role === "user"
                        ? "bg-[#E8C9A0] text-[#5D4037] rounded-tr-none"
                        : "bg-white border border-gray-200 text-[#5D4037] rounded-tl-none shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <div className={`text-xs mt-1 opacity-60 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                    {msg.role === "assistant" && (
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title="Helpful"
                        >
                          <ThumbsUp className="h-3 w-3 text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title="Not helpful"
                        >
                          <ThumbsDown className="h-3 w-3 text-gray-500" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200 text-[#5D4037] rounded-tl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex items-end gap-2">
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[60px] resize-none border-[#D7CCC8] focus-visible:ring-[#8B4513]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <Button
                  type="submit"
                  className="bg-[#8B4513] hover:bg-[#6D4C41] text-white h-10 w-10 rounded-full p-0 flex items-center justify-center"
                  disabled={!message.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Kuriftu AI • Responses are AI-generated
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
