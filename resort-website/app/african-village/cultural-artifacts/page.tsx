"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Camera,
  Upload,
  Search,
  Award,
  ThumbsUp,
  MessageSquare,
  Gift,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CulturalArtifactsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [showScanResult, setShowScanResult] = useState(false)
  const [uploadFormData, setUploadFormData] = useState({
    title: "",
    description: "",
    country: "",
    category: "",
    story: "",
  })

  // Mock data for artifacts
  const artifacts: Artifact[] = [
    {
      id: 1,
      title: "Ethiopian Coffee Ceremony Set",
      description:
        "Traditional coffee ceremony set including jebena (clay pot), rekebot (wooden tray), and small cups.",
      image: "/placeholder.svg?height=300&width=300",
      country: "Ethiopia",
      contributor: "Abebe Bikila",
      contributorImage: "/placeholder.svg?height=50&width=50",
      points: 120,
      likes: 45,
      comments: 12,
      category: "Household",
      story:
        "The Ethiopian coffee ceremony is a traditional way of preparing and serving coffee in Ethiopia. It's a significant cultural ritual that can take several hours and typically involves processing the raw beans into a cup of coffee. This set was donated by a local artisan from Addis Ababa.",
      dateAdded: "2023-10-15",
    },
    {
      id: 2,
      title: "Maasai Shield",
      description: "Hand-crafted traditional Maasai warrior shield with intricate beadwork and designs.",
      image: "/placeholder.svg?height=300&width=300",
      country: "Kenya",
      contributor: "Kipchoge Keino",
      contributorImage: "/placeholder.svg?height=50&width=50",
      points: 85,
      likes: 32,
      comments: 8,
      category: "Weaponry",
      story:
        "Maasai shields are traditionally made from buffalo hide and are used by warriors for protection. The designs and colors on the shield represent different meanings and status within the community. This shield was crafted by a Maasai elder from the Rift Valley region.",
      dateAdded: "2023-09-22",
    },
    {
      id: 3,
      title: "Kente Cloth",
      description: "Handwoven Kente cloth from Ghana with vibrant colors and geometric patterns.",
      image: "/placeholder.svg?height=300&width=300",
      country: "Ghana",
      contributor: "Kofi Annan",
      contributorImage: "/placeholder.svg?height=50&width=50",
      points: 110,
      likes: 56,
      comments: 15,
      category: "Textiles",
      story:
        "Kente cloth originated with the Ashanti people of Ghana. Each pattern and color has specific meanings, and the cloth is worn during important ceremonies and celebrations. This piece was woven by master weavers from the Bonwire village, known for producing the finest Kente.",
      dateAdded: "2023-11-05",
    },
    {
      id: 4,
      title: "Djembe Drum",
      description: "Traditional West African drum carved from a single piece of wood with a goatskin drumhead.",
      image: "/placeholder.svg?height=300&width=300",
      country: "Senegal",
      contributor: "Youssou N'Dour",
      contributorImage: "/placeholder.svg?height=50&width=50",
      points: 95,
      likes: 41,
      comments: 9,
      category: "Musical Instruments",
      story:
        "The Djembe is a rope-tuned skin-covered goblet drum played with bare hands. It originated in West Africa and is an important instrument in many cultural ceremonies and celebrations. This drum was crafted by a master drum maker from Dakar.",
      dateAdded: "2023-08-30",
    },
    {
      id: 5,
      title: "Zulu Beer Pot",
      description: "Traditional clay pot used for brewing and serving Zulu beer during ceremonies.",
      image: "/placeholder.svg?height=300&width=300",
      country: "South Africa",
      contributor: "Miriam Makeba",
      contributorImage: "/placeholder.svg?height=50&width=50",
      points: 75,
      likes: 28,
      comments: 6,
      category: "Pottery",
      story:
        "Zulu beer pots, known as 'ukhamba', are traditionally used for brewing and serving sorghum beer during important ceremonies like weddings and coming-of-age rituals. This pot features traditional geometric patterns that symbolize the connection between the living and ancestral worlds.",
      dateAdded: "2023-10-02",
    },
    {
      id: 6,
      title: "Moroccan Lantern",
      description: "Intricate metal lantern with colorful glass panels in traditional Moroccan design.",
      image: "/placeholder.svg?height=300&width=300",
      country: "Morocco",
      contributor: "Hassan El Glaoui",
      contributorImage: "/placeholder.svg?height=50&width=50",
      points: 90,
      likes: 38,
      comments: 11,
      category: "Lighting",
      story:
        "Moroccan lanterns are known for their intricate metalwork and colorful glass panels. They create beautiful light patterns when lit and are a staple in Moroccan architecture and interior design. This lantern was handcrafted by artisans in Marrakech's medina.",
      dateAdded: "2023-09-15",
    },
  ]

  // Mock data for leaderboard
  const leaderboard = [
    { name: "Abebe Bikila", country: "Ethiopia", points: 450, image: "/placeholder.svg?height=50&width=50" },
    { name: "Miriam Makeba", country: "South Africa", points: 380, image: "/placeholder.svg?height=50&width=50" },
    { name: "Kofi Annan", country: "Ghana", points: 350, image: "/placeholder.svg?height=50&width=50" },
    { name: "Wangari Maathai", country: "Kenya", points: 320, image: "/placeholder.svg?height=50&width=50" },
    { name: "Youssou N'Dour", country: "Senegal", points: 290, image: "/placeholder.svg?height=50&width=50" },
  ]

  // Mock data for rewards
  const rewards = [
    { name: "Room Upgrade", points: 200, icon: <Star className="h-6 w-6" /> },
    { name: "15% Spa Discount", points: 150, icon: <Gift className="h-6 w-6" /> },
    { name: "Featured on Social Media", points: 300, icon: <Users className="h-6 w-6" /> },
    { name: "Free Dinner for Two", points: 250, icon: <Award className="h-6 w-6" /> },
  ]

  // Filter artifacts based on search query
  const filteredArtifacts = artifacts.filter(
    (artifact) =>
      artifact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artifact.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artifact.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle artifact click
  const handleArtifactClick = (artifact: Artifact) => {
    setSelectedArtifact(artifact)
  }

  // Handle scan button click
  const handleScanClick = () => {
    setIsScanning(true)
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setShowScanResult(true)
    }, 3000)
  }

  // Handle upload form change
  const handleUploadFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUploadFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setUploadFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle upload form submit
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Upload form submitted:", uploadFormData)
    // Reset form
    setUploadFormData({
      title: "",
      description: "",
      country: "",
      category: "",
      story: "",
    })
    // Show success message or redirect
    alert("Thank you for your contribution! Your artifact will be reviewed and added to our collection.")
  }

  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Cultural Artifacts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-3xl">
              African Village Cultural Artifacts
            </h1>
            <p className="text-xl text-white text-center mt-4 max-w-2xl px-4">
              Discover, scan, and contribute to our collection of authentic African cultural artifacts
            </p>
          </div>
        </div>
      </section>

      {/* AR Scanner Button */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-6 -mt-16 relative z-10 shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#8B4513]">Scan Cultural Artifacts</h2>
            <p className="text-[#5D4037] mt-2">
              Use our AR scanner to discover the stories behind the artifacts in your room
            </p>
          </div>
          <Button
            className="bg-[#8B4513] hover:bg-[#6D4C41] text-white flex items-center gap-2"
            onClick={handleScanClick}
            disabled={isScanning}
          >
            {isScanning ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                Scanning...
              </>
            ) : (
              <>
                <Camera className="h-5 w-5" />
                Scan Artifact
              </>
            )}
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Artifacts */}
          <div className="md:w-2/3">
            <Tabs defaultValue="gallery" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList className="bg-[#E8C9A0]">
                  <TabsTrigger value="gallery" className="data-[state=active]:bg-white">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="upload" className="data-[state=active]:bg-white">
                    Upload Artifact
                  </TabsTrigger>
                  <TabsTrigger value="my-contributions" className="data-[state=active]:bg-white">
                    My Contributions
                  </TabsTrigger>
                </TabsList>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search artifacts..."
                    className="pl-9 bg-white border-[#D7CCC8] w-full md:w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="gallery" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArtifacts.map((artifact) => (
                    <div
                      key={artifact.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => handleArtifactClick(artifact)}
                    >
                      <div className="relative h-[200px]">
                        <Image
                          src={artifact.image || "/placeholder.svg"}
                          alt={artifact.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-[#8B4513]">{artifact.country}</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-[#8B4513] text-lg">{artifact.title}</h3>
                        <p className="text-[#5D4037] text-sm mt-1 line-clamp-2">{artifact.description}</p>
                        <div className="flex items-center mt-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image
                              src={artifact.contributorImage || "/placeholder.svg"}
                              alt={artifact.contributor}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs text-[#5D4037]">Added by {artifact.contributor}</span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center">
                              <ThumbsUp className="h-4 w-4 text-[#8B4513] mr-1" />
                              <span className="text-xs text-[#5D4037]">{artifact.likes}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-4 w-4 text-[#8B4513] mr-1" />
                              <span className="text-xs text-[#5D4037]">{artifact.comments}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-[#8B4513] mr-1" />
                            <span className="text-xs font-semibold text-[#8B4513]">{artifact.points} pts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredArtifacts.length === 0 && (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <p className="text-[#5D4037]">No artifacts found matching your search.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="upload" className="mt-0">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Upload a Cultural Artifact</h3>
                  <p className="text-[#5D4037] mb-6">
                    Share your cultural heritage by uploading artifacts to our collection. Earn points and unlock
                    rewards for your contributions!
                  </p>

                  <form onSubmit={handleUploadSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Artifact Title</Label>
                        <Input
                          id="title"
                          name="title"
                          value={uploadFormData.title}
                          onChange={handleUploadFormChange}
                          className="border-[#D7CCC8]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country of Origin</Label>
                        <Select
                          value={uploadFormData.country}
                          onValueChange={(value) => handleSelectChange("country", value)}
                        >
                          <SelectTrigger id="country" className="border-[#D7CCC8]">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ethiopia">Ethiopia</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="south-africa">South Africa</SelectItem>
                            <SelectItem value="morocco">Morocco</SelectItem>
                            <SelectItem value="egypt">Egypt</SelectItem>
                            <SelectItem value="senegal">Senegal</SelectItem>
                            <SelectItem value="tanzania">Tanzania</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={uploadFormData.category}
                          onValueChange={(value) => handleSelectChange("category", value)}
                        >
                          <SelectTrigger id="category" className="border-[#D7CCC8]">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="textiles">Textiles & Clothing</SelectItem>
                            <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                            <SelectItem value="jewelry">Jewelry</SelectItem>
                            <SelectItem value="musical">Musical Instruments</SelectItem>
                            <SelectItem value="weapons">Weapons & Tools</SelectItem>
                            <SelectItem value="masks">Masks & Sculptures</SelectItem>
                            <SelectItem value="household">Household Items</SelectItem>
                            <SelectItem value="art">Art & Paintings</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="artifact-image">Upload Image</Label>
                        <div className="border border-dashed border-[#D7CCC8] rounded-md p-4 text-center">
                          <Upload className="h-8 w-8 text-[#8B4513] mx-auto mb-2" />
                          <p className="text-sm text-[#5D4037]">Drag & drop or click to upload</p>
                          <input type="file" className="hidden" id="artifact-image" accept="image/*" />
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-2 border-[#8B4513] text-[#8B4513]"
                            onClick={() => document.getElementById("artifact-image")?.click()}
                          >
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Brief Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={uploadFormData.description}
                        onChange={handleUploadFormChange}
                        className="border-[#D7CCC8]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="story">Cultural Significance & Story</Label>
                      <Textarea
                        id="story"
                        name="story"
                        value={uploadFormData.story}
                        onChange={handleUploadFormChange}
                        className="border-[#D7CCC8] min-h-[150px]"
                        placeholder="Share the history, meaning, and cultural significance of this artifact..."
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" required />
                      <label htmlFor="terms" className="text-sm text-[#5D4037]">
                        I confirm this is an authentic cultural artifact and I have permission to share it
                      </label>
                    </div>

                    <Button type="submit" className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">
                      Submit Artifact
                    </Button>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="my-contributions" className="mt-0">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#8B4513]">My Contributions</h3>
                      <p className="text-[#5D4037]">Track your cultural contributions and earned points</p>
                    </div>
                    <div className="bg-[#EDDCBE] px-4 py-2 rounded-lg">
                      <p className="text-sm text-[#5D4037]">Your Total Points</p>
                      <p className="text-2xl font-bold text-[#8B4513]">320</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Sample contributed artifacts */}
                    {[artifacts[0], artifacts[2]].map((artifact) => (
                      <div
                        key={artifact.id}
                        className="border border-[#D7CCC8] rounded-lg p-4 flex flex-col md:flex-row gap-4"
                      >
                        <div className="relative w-full md:w-32 h-32">
                          <Image
                            src={artifact.image || "/placeholder.svg"}
                            alt={artifact.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <h4 className="font-semibold text-[#8B4513]">{artifact.title}</h4>
                              <p className="text-sm text-[#5D4037] mt-1">{artifact.description}</p>
                              <div className="flex items-center mt-2">
                                <Badge className="bg-[#8B4513] mr-2">{artifact.country}</Badge>
                                <Badge variant="outline" className="border-[#8B4513] text-[#8B4513]">
                                  {artifact.category}
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 text-right">
                              <div className="flex items-center justify-end">
                                <Award className="h-5 w-5 text-[#8B4513] mr-1" />
                                <span className="font-semibold text-[#8B4513]">{artifact.points} points</span>
                              </div>
                              <p className="text-xs text-[#5D4037] mt-1">Added on {artifact.dateAdded}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center">
                              <ThumbsUp className="h-4 w-4 text-[#8B4513] mr-1" />
                              <span className="text-xs text-[#5D4037]">{artifact.likes} likes</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-4 w-4 text-[#8B4513] mr-1" />
                              <span className="text-xs text-[#5D4037]">{artifact.comments} comments</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-[#8B4513] hover:bg-[#EDDCBE] p-0 h-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold text-[#8B4513] mb-4">Your Progress</h4>
                    <div className="space-y-6">
                      {rewards.map((reward, index) => (
                        <div key={index} className="bg-[#EDDCBE] rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              {reward.icon}
                              <span className="ml-2 font-medium text-[#8B4513]">{reward.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-[#8B4513]">{reward.points} points needed</span>
                          </div>
                          <div className="relative pt-1">
                            <Progress value={(320 / reward.points) * 100} className="h-2 bg-white" />
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-[#5D4037]">Your points: 320</span>
                              <span className="text-xs text-[#5D4037]">
                                {320 >= reward.points ? "Unlocked!" : `${reward.points - 320} more points needed`}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Leaderboard & Rewards */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Contributor Leaderboard</h3>
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-white rounded-full bg-[#8B4513] mr-3">
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={user.image || "/placeholder.svg"}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#5D4037]">{user.name}</p>
                      <p className="text-xs text-[#5D4037]">{user.country}</p>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-[#8B4513] mr-1" />
                      <span className="font-semibold text-[#8B4513]">{user.points}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/rewards">
                <Button variant="outline" className="w-full mt-4 border-[#8B4513] text-[#8B4513]">
                  View Full Leaderboard
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Rewards & Perks</h3>
              <p className="text-[#5D4037] mb-4">
                Earn points by contributing artifacts, receiving likes, and engaging with the community to unlock these
                exclusive rewards.
              </p>
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div key={index} className="flex items-center p-3 border border-[#D7CCC8] rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[#EDDCBE] flex items-center justify-center mr-3">
                      {reward.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#8B4513]">{reward.name}</p>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-[#8B4513] mr-1" />
                        <span className="text-sm text-[#5D4037]">{reward.points} points</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-[#8B4513] hover:bg-[#6D4C41] text-white">
                Redeem Available Rewards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artifact Detail Dialog */}
      {selectedArtifact && (
        <Dialog open={!!selectedArtifact} onOpenChange={() => setSelectedArtifact(null)}>
          <DialogContent className="bg-[#f8e0c0] sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-[#8B4513]">{selectedArtifact.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={selectedArtifact.image || "/placeholder.svg"}
                  alt={selectedArtifact.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center mb-4">
                <Badge className="bg-[#8B4513] mr-2">{selectedArtifact.country}</Badge>
                <Badge variant="outline" className="border-[#8B4513] text-[#8B4513]">
                  {selectedArtifact.category}
                </Badge>
              </div>
              <p className="text-[#5D4037] mb-4">{selectedArtifact.description}</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-[#8B4513] mb-2">Cultural Significance</h4>
                <p className="text-[#5D4037]">{selectedArtifact.story}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                    <Image
                      src={selectedArtifact.contributorImage || "/placeholder.svg"}
                      alt={selectedArtifact.contributor}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5D4037]">Contributed by</p>
                    <p className="text-sm text-[#8B4513]">{selectedArtifact.contributor}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-[#8B4513] mr-1" />
                  <span className="font-semibold text-[#8B4513]">{selectedArtifact.points} points</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-4">
                  <Button variant="outline" className="border-[#8B4513] text-[#8B4513] flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    Like ({selectedArtifact.likes})
                  </Button>
                  <Button variant="outline" className="border-[#8B4513] text-[#8B4513] flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    Comment ({selectedArtifact.comments})
                  </Button>
                </div>
                <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">View in AR</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* AR Scan Result Dialog */}
      <Dialog open={showScanResult} onOpenChange={setShowScanResult}>
        <DialogContent className="bg-[#f8e0c0] sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-[#8B4513]">Artifact Detected!</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=300&width=600" alt="Scanned Artifact" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-lg max-w-xs text-center">
                  <h3 className="font-semibold text-[#8B4513]">Ethiopian Coffee Ceremony Set</h3>
                  <p className="text-xs text-[#5D4037] mt-1">Tap for more information</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-[#8B4513] mb-2">Ethiopian Coffee Ceremony Set</h4>
              <p className="text-[#5D4037] mb-2">
                Traditional coffee ceremony set including jebena (clay pot), rekebot (wooden tray), and small cups.
              </p>
              <p className="text-sm text-[#5D4037]">
                The Ethiopian coffee ceremony is a traditional way of preparing and serving coffee in Ethiopia. It's a
                significant cultural ritual that can take several hours.
              </p>
            </div>
            <div className="flex justify-between">
              <Button
                variant="outline"
                className="border-[#8B4513] text-[#8B4513]"
                onClick={() => setShowScanResult(false)}
              >
                Close
              </Button>
              <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">View Full Details</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
                  <Link href="/african-village" className="hover:underline">
                    African Village
                  </Link>
                </li>
                <li>
                  <Link href="/african-village/cultural-artifacts" className="hover:underline">
                    Cultural Artifacts
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="hover:underline">
                    Rooms & Pricing
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

// Type definitions
interface Artifact {
  id: number
  title: string
  description: string
  image: string
  country: string
  contributor: string
  contributorImage: string
  points: number
  likes: number
  comments: number
  category: string
  story: string
  dateAdded: string
}
