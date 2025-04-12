"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Mail, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log("Signup with:", formData)
  }

  const handleGoogleSignup = () => {
    // Handle Google signup
    console.log("Signup with Google")
  }

  return (
    <main className="min-h-screen bg-[#f8e0c0] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-32 bg-[#2A2A2A]">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl font-bold text-white">Create an Account</h1>
            </div>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="pl-10 border-[#D7CCC8]"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="pl-10 border-[#D7CCC8]"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 border-[#D7CCC8]"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 border-[#D7CCC8]"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 border-[#D7CCC8]"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={formData.agreeTerms} onCheckedChange={handleCheckboxChange} required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#8B4513] hover:underline">
                    terms and conditions
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                disabled={!formData.agreeTerms}
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-[#D7CCC8]"
                  onClick={handleGoogleSignup}
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Sign up with Google
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-500">Already have an account?</span>{" "}
              <Link href="/auth/login" className="text-[#8B4513] hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
