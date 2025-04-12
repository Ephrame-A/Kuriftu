"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Award, Star, Gift, Users, Check, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(320)

  // Mock data for leaderboard
  const leaderboard = [
    {
      country: "Ethiopia",
      flag: "/placeholder.svg?height=30&width=50",
      points: 2450,
      contributors: 32,
      topContributor: {
        name: "Abebe Bikila",
        image: "/placeholder.svg?height=40&width=40",
        points: 450,
      },
    },
    {
      country: "Kenya",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1980,
      contributors: 28,
      topContributor: {
        name: "Wangari Maathai",
        image: "/placeholder.svg?height=40&width=40",
        points: 320,
      },
    },
    {
      country: "Ghana",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1750,
      contributors: 25,
      topContributor: {
        name: "Kofi Annan",
        image: "/placeholder.svg?height=40&width=40",
        points: 350,
      },
    },
    {
      country: "South Africa",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1620,
      contributors: 22,
      topContributor: {
        name: "Miriam Makeba",
        image: "/placeholder.svg?height=40&width=40",
        points: 380,
      },
    },
    {
      country: "Nigeria",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1480,
      contributors: 20,
      topContributor: {
        name: "Chimamanda Adichie",
        image: "/placeholder.svg?height=40&width=40",
        points: 290,
      },
    },
    {
      country: "Senegal",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1350,
      contributors: 18,
      topContributor: {
        name: "Youssou N'Dour",
        image: "/placeholder.svg?height=40&width=40",
        points: 290,
      },
    },
    {
      country: "Morocco",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1240,
      contributors: 16,
      topContributor: {
        name: "Hassan El Glaoui",
        image: "/placeholder.svg?height=40&width=40",
        points: 270,
      },
    },
    {
      country: "Egypt",
      flag: "/placeholder.svg?height=30&width=50",
      points: 1120,
      contributors: 15,
      topContributor: {
        name: "Naguib Mahfouz",
        image: "/placeholder.svg?height=40&width=40",
        points: 260,
      },
    },
  ]

  // Mock data for rewards
  const rewards = [
    {
      name: "Room Upgrade",
      description: "Upgrade to the next room category during your stay",
      points: 200,
      icon: <Star className="h-6 w-6" />,
      available: true,
    },
    {
      name: "15% Spa Discount",
      description: "Enjoy 15% off any spa treatment of your choice",
      points: 150,
      icon: <Gift className="h-6 w-6" />,
      available: true,
    },
    {
      name: "Featured on Social Media",
      description: "Get featured on our official social media channels",
      points: 300,
      icon: <Users className="h-6 w-6" />,
      available: true,
    },
    {
      name: "Free Dinner for Two",
      description: "Complimentary dinner for two at any of our restaurants",
      points: 250,
      icon: <Award className="h-6 w-6" />,
      available: true,
    },
    {
      name: "Late Checkout",
      description: "Extend your checkout time until 4:00 PM",
      points: 100,
      icon: <Clock className="h-6 w-6" />,
      available: true,
    },
    {
      name: "Cultural Tour",
      description: "Free guided cultural tour of local attractions",
      points: 180,
      icon: <Map className="h-6 w-6" />,
      available: true,
    },
  ]

  // Mock data for user's activity history
  const activityHistory = [
    {
      type: "Contribution",
      description: "Uploaded Ethiopian Coffee Ceremony Set",
      points: 120,
      date: "2023-12-15",
    },
    {
      type: "Feedback",
      description: "Submitted feedback for your stay",
      points: 50,
      date: "2023-12-10",
    },
    {
      type: "Booking",
      description: "Booked 3-night stay in African Village",
      points: 150,
      date: "2023-11-28",
    },
    {
      type: "Redemption",
      description: "Redeemed 15% Spa Discount",
      points: -150,
      date: "2023-11-05",
    },
  ]

  // Ways to earn points
  const earningOpportunities = [
    {
      title: "Book Direct",
      description: "Earn 50 points for every night booked directly through our website",
      icon: <Calendar className="h-6 w-6 text-[#8B4513]" />,
      action: "Book Now",
      link: "/booking",
    },
    {
      title: "Share Feedback",
      description: "Earn up to 50 points by sharing your experience after your stay",
      icon: <MessageSquare className="h-6 w-6 text-[#8B4513]" />,
      action: "Give Feedback",
      link: "/guest-feedback",
    },
    {
      title: "Upload Cultural Artifacts",
      description: "Earn 100+ points by contributing to our cultural artifacts collection",
      icon: <Upload className="h-6 w-6 text-[#8B4513]" />,
      action: "Upload Artifacts",
      link: "/african-village/cultural-artifacts",
    },
    {
      title: "Refer Friends",
      description: "Earn 200 points when friends book using your referral code",
      icon: <UserPlus className="h-6 w-6 text-[#8B4513]" />,
      action: "Refer Now",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[300px]">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Rewards & Leaderboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Rewards & Leaderboard</h1>
          </div>
        </div>
      </section>

      {/* User Points Summary */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#EDDCBE] rounded-full flex items-center justify-center mr-4">
                <Award className="h-8 w-8 text-[#8B4513]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#8B4513]">{userPoints} Points</h2>
                <p className="text-[#5D4037]">Your current reward balance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <RedeemPointsDialog rewards={rewards} userPoints={userPoints} />
              <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                View History
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="bg-[#E8C9A0] w-full flex justify-between mb-8 overflow-x-auto">
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-white">
              Country Leaderboard
            </TabsTrigger>
            <TabsTrigger value="my-rewards" className="data-[state=active]:bg-white">
              My Rewards
            </TabsTrigger>
            <TabsTrigger value="earn" className="data-[state=active]:bg-white">
              Ways to Earn
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-white">
              Activity History
            </TabsTrigger>
          </TabsList>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="mt-0">
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B4513]">Cultural Contributions Leaderboard</h2>
                  <p className="text-[#5D4037]">
                    Countries ranked by cultural artifacts and contributions from our guests
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                    View All Countries
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#EDDCBE]">
                      <th className="text-left py-3 px-4 text-[#8B4513]">Rank</th>
                      <th className="text-left py-3 px-4 text-[#8B4513]">Country</th>
                      <th className="text-left py-3 px-4 text-[#8B4513]">Points</th>
                      <th className="text-left py-3 px-4 text-[#8B4513]">Contributors</th>
                      <th className="text-left py-3 px-4 text-[#8B4513]">Top Contributor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((country, index) => (
                      <tr key={index} className="border-b border-[#EDDCBE] hover:bg-[#EDDCBE]/20">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            {index < 3 ? (
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                                  index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                                }`}
                              >
                                {index + 1}
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-[#EDDCBE] flex items-center justify-center text-[#8B4513]">
                                {index + 1}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-6 mr-2 relative overflow-hidden">
                              <Image
                                src={country.flag || "/placeholder.svg"}
                                alt={country.country}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-[#5D4037]">{country.country}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-[#8B4513] mr-1" />
                            <span className="font-medium text-[#8B4513]">{country.points.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-[#8B4513] mr-1" />
                            <span className="text-[#5D4037]">{country.contributors}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                              <Image
                                src={country.topContributor.image || "/placeholder.svg"}
                                alt={country.topContributor.name}
                                width={32}
                                height={32}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#5D4037]">{country.topContributor.name}</p>
                              <p className="text-xs text-[#8B4513]">{country.topContributor.points} pts</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-[#EDDCBE] p-4 rounded-lg">
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-[#8B4513] mr-2 flex-shrink-0" />
                  <p className="text-sm text-[#5D4037]">
                    The leaderboard is updated daily. Contribute cultural artifacts from your country to help it climb
                    the rankings!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* My Rewards Tab */}
          <TabsContent value="my-rewards" className="mt-0">
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B4513]">My Rewards</h2>
                  <p className="text-[#5D4037]">Redeem your points for exclusive benefits and experiences</p>
                </div>
                <div className="mt-2 md:mt-0 bg-[#EDDCBE] px-4 py-2 rounded-lg">
                  <p className="text-sm text-[#5D4037]">Your Points</p>
                  <p className="text-2xl font-bold text-[#8B4513]">{userPoints}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((reward, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#EDDCBE] flex items-center justify-center">
                            {reward.icon}
                          </div>
                          <Badge className={userPoints >= reward.points ? "bg-green-500" : "bg-gray-400"}>
                            {userPoints >= reward.points
                              ? "Available"
                              : `${reward.points - userPoints} more points needed`}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-[#8B4513] mb-2">{reward.name}</h3>
                        <p className="text-sm text-[#5D4037] mb-4">{reward.description}</p>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#5D4037]">Required Points:</span>
                            <span className="font-medium text-[#8B4513]">{reward.points}</span>
                          </div>
                          <Progress
                            value={(userPoints / reward.points) * 100 > 100 ? 100 : (userPoints / reward.points) * 100}
                            className="h-2 bg-gray-100"
                          />
                        </div>
                      </div>
                      <div className="border-t border-gray-100 p-4">
                        <Button
                          className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                          disabled={userPoints < reward.points}
                        >
                          Redeem Reward
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Ways to Earn Tab */}
          <TabsContent value="earn" className="mt-0">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#8B4513]">Ways to Earn Points</h2>
                <p className="text-[#5D4037]">Discover all the ways you can earn reward points during your stay</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {earningOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-[#EDDCBE] rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 flex-shrink-0">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#8B4513] mb-2">{opportunity.title}</h3>
                        <p className="text-sm text-[#5D4037] mb-4">{opportunity.description}</p>
                        <Link href={opportunity.link}>
                          <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">{opportunity.action}</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#8B4513] mb-4">Point Earning Guide</h3>
                <div className="bg-[#EDDCBE] rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-[#8B4513] mb-3">Booking & Stays</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-[#5D4037]">
                              Book direct: <span className="font-medium">50 points</span> per night
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-[#5D4037]">
                              Extended stay (5+ nights): <span className="font-medium">Bonus 100 points</span>
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-[#5D4037]">
                              Book special packages: <span className="font-medium">Extra 50-200 points</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#8B4513] mb-3">Engagement & Contributions</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-[#5D4037]">
                              Submit feedback: <span className="font-medium">20-50 points</span>
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-[#5D4037]">
                              Upload cultural artifacts: <span className="font-medium">100-200 points</span> per
                              approved item
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="text-[#5D4037]">
                              Refer a friend: <span className="font-medium">200 points</span> when they book
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-[#8B4513] mb-3">On-Property Activities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <p className="text-[#5D4037]">
                            Dining at our restaurants: <span className="font-medium">1 point per $1 spent</span>
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <p className="text-[#5D4037]">
                            Spa treatments: <span className="font-medium">2 points per $1 spent</span>
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <p className="text-[#5D4037]">
                            Participate in cultural activities: <span className="font-medium">25-50 points</span> per
                            activity
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Activity History Tab */}
          <TabsContent value="history" className="mt-0">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#8B4513]">Activity History</h2>
                <p className="text-[#5D4037]">Track your point earning and redemption history</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#EDDCBE]">
                      <th className="text-left py-3 px-4 text-[#8B4513]">Date</th>
                      <th className="text-left py-3 px-4 text-[#8B4513]">Activity</th>
                      <th className="text-left py-3 px-4 text-[#8B4513]">Description</th>
                      <th className="text-right py-3 px-4 text-[#8B4513]">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityHistory.map((activity, index) => (
                      <tr key={index} className="border-b border-[#EDDCBE] hover:bg-[#EDDCBE]/20">
                        <td className="py-4 px-4 text-[#5D4037]">{new Date(activity.date).toLocaleDateString()}</td>
                        <td className="py-4 px-4">
                          <Badge
                            className={
                              activity.type === "Contribution"
                                ? "bg-blue-500"
                                : activity.type === "Feedback"
                                  ? "bg-green-500"
                                  : activity.type === "Booking"
                                    ? "bg-purple-500"
                                    : "bg-orange-500"
                            }
                          >
                            {activity.type}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-[#5D4037]">{activity.description}</td>
                        <td
                          className={`py-4 px-4 text-right font-medium ${
                            activity.points > 0 ? "text-green-600" : "text-orange-600"
                          }`}
                        >
                          {activity.points > 0 ? `+${activity.points}` : activity.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                  Download History
                </Button>
                <div className="flex items-center">
                  <span className="text-[#5D4037] mr-2">Lifetime Points Earned:</span>
                  <span className="font-bold text-[#8B4513]">620</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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
                  <Link href="/rewards" className="hover:underline">
                    Rewards Program
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

function RedeemPointsDialog({ rewards, userPoints }: { rewards: any[]; userPoints: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Redeem Points</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#f8e0c0] sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#8B4513]">Redeem Your Points</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="bg-white p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-[#5D4037]">Your Current Balance</p>
              <p className="text-2xl font-bold text-[#8B4513]">{userPoints} Points</p>
            </div>
            <Award className="h-10 w-10 text-[#8B4513]" />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-[#8B4513]">Available Rewards</h3>
            {rewards
              .filter((reward) => userPoints >= reward.points)
              .map((reward, index) => (
                <div key={index} className="bg-white p-4 rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#EDDCBE] flex items-center justify-center mr-3">
                      {reward.icon}
                    </div>
                    <div>
                      <p className="font-medium text-[#8B4513]">{reward.name}</p>
                      <p className="text-sm text-[#5D4037]">{reward.points} points</p>
                    </div>
                  </div>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Redeem</Button>
                </div>
              ))}

            {rewards.filter((reward) => userPoints >= reward.points).length === 0 && (
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-[#5D4037]">You don't have enough points for any rewards yet.</p>
                <p className="text-sm text-[#5D4037] mt-2">Keep earning points to unlock exciting rewards!</p>
              </div>
            )}
          </div>

          <div className="bg-[#EDDCBE] p-4 rounded-lg">
            <div className="flex items-center">
              <Info className="h-5 w-5 text-[#8B4513] mr-2 flex-shrink-0" />
              <p className="text-sm text-[#5D4037]">
                Points can be redeemed during your stay or for your next visit. Some rewards may require advance notice.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Missing component imports
function Calendar(props: any) {
  return <div {...props} />
}

function Clock(props: any) {
  return <div {...props} />
}

function Map(props: any) {
  return <div {...props} />
}

function MessageSquare(props: any) {
  return <div {...props} />
}

function Upload(props: any) {
  return <div {...props} />
}

function UserPlus(props: any) {
  return <div {...props} />
}
