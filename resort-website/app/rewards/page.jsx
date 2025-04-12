"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Star,
  Gift,
  Check,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Upload,
  UserPlus,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(320)
  const [currentTier, setCurrentTier] = useState("Silver")
  const [animateProgress, setAnimateProgress] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimateProgress(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Loyalty tiers data
  const loyaltyTiers = [
    {
      name: "Silver",
      icon: <Award className="h-10 w-10 text-gray-400" />,
      requiredPoints: 0,
      color: "from-gray-300 to-gray-400",
      borderColor: "border-gray-400",
      benefits: [
        "10% discount on dining",
        "Welcome drink on arrival",
        "Early check-in (subject to availability)",
        "Kuriftu newsletter subscription",
      ],
    },
    {
      name: "Gold",
      icon: <Award className="h-10 w-10 text-amber-500" />,
      requiredPoints: 500,
      color: "from-amber-300 to-amber-500",
      borderColor: "border-amber-500",
      benefits: [
        "15% discount on dining",
        "15% discount on spa treatments",
        "Room upgrade (subject to availability)",
        "Late checkout until 2 PM",
        "Complimentary fruit basket",
      ],
    },
    {
      name: "Platinum",
      icon: <Award className="h-10 w-10 text-slate-600" />,
      requiredPoints: 1500,
      color: "from-slate-400 to-slate-600",
      borderColor: "border-slate-600",
      benefits: [
        "20% discount on dining",
        "20% discount on spa treatments",
        "Guaranteed room upgrade",
        "Late checkout until 4 PM",
        "Complimentary bottle of wine",
        "Free airport transfer (one-way)",
      ],
    },
    {
      name: "Diamond",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
      requiredPoints: 3000,
      color: "from-cyan-300 to-cyan-500",
      borderColor: "border-cyan-500",
      benefits: [
        "25% discount on all services",
        "Guaranteed suite upgrade",
        "Flexible check-in/check-out times",
        "Complimentary dinner for two",
        "Free airport transfers (round-trip)",
        "Personal concierge service",
        "Exclusive access to Diamond events",
      ],
    },
  ]

  // Ways to earn points
  const earningOpportunities = [
    {
      title: "Book Direct",
      description: "Earn 50 points for every night booked directly through our website",
      icon: <Calendar className="h-10 w-10 text-[#5D4037]" />,
      action: "Book Now",
      link: "/booking",
      points: 50,
      pointsText: "per night",
    },
    {
      title: "Dining Experience",
      description: "Earn points for every meal at our restaurants",
      icon: <Gift className="h-10 w-10 text-[#5D4037]" />,
      action: "View Restaurants",
      link: "/dining-services",
      points: 10,
      pointsText: "per $50 spent",
    },
    {
      title: "Spa & Wellness",
      description: "Pamper yourself and earn points with our spa treatments",
      icon: <Star className="h-10 w-10 text-[#5D4037]" />,
      action: "Book Spa",
      link: "/dining-services",
      points: 15,
      pointsText: "per $50 spent",
    },
    {
      title: "Share Feedback",
      description: "Earn points by sharing your experience after your stay",
      icon: <MessageSquare className="h-10 w-10 text-[#5D4037]" />,
      action: "Give Feedback",
      link: "/guest-feedback",
      points: 50,
      pointsText: "per review",
    },
    {
      title: "Cultural Contributions",
      description: "Earn points by contributing to our cultural artifacts collection",
      icon: <Upload className="h-10 w-10 text-[#5D4037]" />,
      action: "Upload Artifacts",
      link: "/african-village/cultural-artifacts",
      points: 100,
      pointsText: "per artifact",
    },
    {
      title: "Refer Friends",
      description: "Earn points when friends book using your referral code",
      icon: <UserPlus className="h-10 w-10 text-[#5D4037]" />,
      action: "Refer Now",
      link: "/profile/refer",
      points: 200,
      pointsText: "per referral",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Abebe Bikila",
      tier: "Platinum",
      image: "profile1.png",
      quote:
        "The Kuriftu loyalty program has transformed my stays into unforgettable experiences. The Platinum benefits are truly exceptional!",
    },
    {
      name: "Wangari Maathai",
      tier: "Diamond",
      image: "profile2.jpeg",
      quote:
        "As a Diamond member, I feel like royalty every time I visit. The personalized service and exclusive benefits are unmatched.",
    },
    {
      name: "Kofi Annan",
      tier: "Gold",
      image: "profile4.jpeg",
      quote:
        "The Gold tier benefits have made my business trips so much more comfortable. I especially appreciate the room upgrades.",
    },
  ]

  // Calculate current tier and progress
  const getCurrentTierInfo = () => {
    let currentTierIndex = 0
    let nextTierIndex = 1
    let progress = 0

    for (let i = loyaltyTiers.length - 1; i >= 0; i--) {
      if (userPoints >= loyaltyTiers[i].requiredPoints) {
        currentTierIndex = i
        nextTierIndex = i < loyaltyTiers.length - 1 ? i + 1 : i
        break
      }
    }

    const currentTierPoints = loyaltyTiers[currentTierIndex].requiredPoints
    const nextTierPoints = loyaltyTiers[nextTierIndex].requiredPoints

    if (currentTierIndex === nextTierIndex) {
      progress = 100
    } else {
      progress = ((userPoints - currentTierPoints) / (nextTierPoints - currentTierPoints)) * 100
    }

    return {
      currentTier: loyaltyTiers[currentTierIndex],
      nextTier: loyaltyTiers[nextTierIndex],
      progress: progress,
      pointsToNextTier: nextTierPoints - userPoints > 0 ? nextTierPoints - userPoints : 0,
    }
  }

  const tierInfo = getCurrentTierInfo()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8e0c0] to-[#e6d2b5]">
      {/* Hero Section with African luxury background */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px] overflow-hidden">
          <Image
            src="photo_2025-04-10_16-17-50.jpg"
            alt="Kuriftu Loyalty Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 font-serif">
              Kuriftu Loyalty Program
            </h1>
            <p className="text-xl text-white/90 text-center max-w-2xl px-4">
              Experience exclusive benefits and rewards as you journey through our African paradise
            </p>
          </div>
        </div>
      </section>

      {/* User Points Summary */}
      <section className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#8B4513]/20 bg-[url('/placeholder.svg?height=200&width=1200')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-white/95">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8B4513]/20 to-[#8B4513]/40 rounded-full flex items-center justify-center mr-4 border-2 border-[#8B4513]/30">
                <Award className="h-10 w-10 text-[#8B4513]" />
              </div>
              <div>
                <div className="flex items-center">
                  <h2 className="text-3xl font-bold text-[#8B4513]">{userPoints} Points</h2>
                  <Badge className="ml-3 bg-gradient-to-r from-[#8B4513] to-[#5D4037]">
                    {tierInfo.currentTier.name} Member
                  </Badge>
                </div>
                <p className="text-[#5D4037] mt-1">Your current reward balance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-[#8B4513] to-[#5D4037] hover:from-[#5D4037] hover:to-[#8B4513] text-white border-none">
                Redeem Points
              </Button>
              <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                View History
              </Button>
            </div>
          </div>

          {/* Progress to next tier */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#5D4037]">{tierInfo.currentTier.name} Member</span>
              <span className="text-[#5D4037]">
                {tierInfo.pointsToNextTier > 0
                  ? `${tierInfo.pointsToNextTier} points to ${tierInfo.nextTier.name}`
                  : `Highest tier achieved`}
              </span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Loyalty Tiers Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4 font-serif">Loyalty Tiers & Benefits</h2>
          <p className="text-[#8B4513] max-w-2xl mx-auto">
            Discover the exclusive benefits of each loyalty tier and elevate your Kuriftu experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loyaltyTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                currentTier === tier.name ? "ring-4 ring-[#8B4513]/50" : ""
              }`}
            >
              <div className={`bg-gradient-to-br ${tier.color} p-6 text-center`}>
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-3">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-white/80 text-sm">
                  {tier.requiredPoints > 0 ? `${tier.requiredPoints}+ points` : "Entry Level"}
                </p>
              </div>
              <div className={`bg-white p-6 border-2 ${tier.borderColor} border-t-0 rounded-b-2xl`}>
                <h4 className="font-semibold text-[#5D4037] mb-3">Member Benefits:</h4>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5D4037] text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {currentTier === tier.name && (
                  <div className="mt-4 bg-[#EDDCBE]/50 p-2 rounded-lg text-center">
                    <p className="text-sm text-[#8B4513] font-medium">Your Current Tier</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards Tracker Component */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center bg-no-repeat opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4 font-serif">Earn Rewards</h2>
            <p className="text-[#8B4513] max-w-2xl mx-auto">
              Discover all the ways you can earn points during your Kuriftu journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {earningOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#8B4513]/10 transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EDDCBE] to-[#D7B377] flex items-center justify-center mr-4">
                      {opportunity.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#5D4037]">{opportunity.title}</h3>
                      <div className="flex items-center mt-1">
                        <Award className="h-4 w-4 text-[#8B4513] mr-1" />
                        <span className="text-[#8B4513] font-medium">
                          {opportunity.points} points {opportunity.pointsText}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#5D4037] mb-6">{opportunity.description}</p>
                  <Link href={opportunity.link}>
                    <Button className="w-full bg-gradient-to-r from-[#8B4513] to-[#5D4037] hover:from-[#5D4037] hover:to-[#8B4513] text-white">
                      {opportunity.action}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#5D4037] to-[#8B4513]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Join Kuriftu Loyalty Club Today</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Start your journey to exclusive rewards and unforgettable experiences at Kuriftu Resort & Spa
          </p>
          <Button className="bg-white text-[#8B4513] hover:bg-[#EDDCBE] text-lg px-8 py-6 h-auto">
            <Link href='/'>Start Earning Rewards</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#EDDCBE]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4 font-serif">What Our Members Say</h2>
            <p className="text-[#8B4513] max-w-2xl mx-auto">
              Hear from our loyal members about their Kuriftu loyalty experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-[#8B4513]/10 relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      testimonial.tier === "Diamond"
                        ? "bg-cyan-500"
                        : testimonial.tier === "Platinum"
                          ? "bg-slate-600"
                          : testimonial.tier === "Gold"
                            ? "bg-amber-500"
                            : "bg-gray-400"
                    }`}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#5D4037]">{testimonial.name}</h3>
                    <p className="text-[#8B4513]">{testimonial.tier} Member</p>
                  </div>
                </div>
                <p className="text-[#5D4037] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-[#8B4513] max-w-2xl mx-auto">
              Everything you need to know about the Kuriftu Loyalty Program
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[#EDDCBE]/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#5D4037] mb-2">How do I join the Kuriftu Loyalty Program?</h3>
                <p className="text-[#8B4513]">
                  Joining is simple! Create an account on our website or sign up during your stay at any Kuriftu Resort
                  & Spa location. Membership is complimentary.
                </p>
              </div>
              <div className="bg-[#EDDCBE]/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#5D4037] mb-2">How long are my points valid?</h3>
                <p className="text-[#8B4513]">
                  Your points are valid for 24 months from the date they were earned. Points will expire if your account
                  has no activity for 24 consecutive months.
                </p>
              </div>
              <div className="bg-[#EDDCBE]/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#5D4037] mb-2">Can I transfer my points to someone else?</h3>
                <p className="text-[#8B4513]">
                  Points are non-transferable and can only be redeemed by the member who earned them. However, you can
                  use your points to book experiences for friends and family.
                </p>
              </div>
              <div className="bg-[#EDDCBE]/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#5D4037] mb-2">How do I redeem my points?</h3>
                <p className="text-[#8B4513]">
                  You can redeem your points during your stay at any Kuriftu Resort & Spa location, or through your
                  online account. Simply inform our staff that you wish to use your points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5D4037] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
            <h3 className="text-xl font-semibold mb-4">Kuriftu Resort and Spa</h3>
              <address className="not-italic">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Resort Avenue, Lake District</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Water Park
                  +251933817881</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kuriftu@entotokuriftu.com</span>
                </div>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Quick Links</h3>
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
                  <Link href="/rewards" className="hover:underline">
                    Loyalty Program
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
              <h3 className="text-xl font-semibold mb-4 font-serif">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for special deals and updates</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full text-black" />
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#8B4513] mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Kuriftu Resort & Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
