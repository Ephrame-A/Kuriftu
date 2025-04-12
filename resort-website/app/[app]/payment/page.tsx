"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CreditCard, Calendar, Lock, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-[#f8e0c0] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {!isComplete ? (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>Complete your payment securely</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-[#8B4513]">Payment Method</h3>

                        <RadioGroup defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex-1">
                              Credit/Debit Card
                            </Label>
                            <div className="flex space-x-1">
                              <div className="w-10 h-6 bg-gray-200 rounded"></div>
                              <div className="w-10 h-6 bg-gray-200 rounded"></div>
                              <div className="w-10 h-6 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex-1">
                              PayPal
                            </Label>
                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                          </div>
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="bank" id="bank" />
                            <Label htmlFor="bank" className="flex-1">
                              Bank Transfer
                            </Label>
                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" className="border-[#D7CCC8]" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <div className="relative">
                              <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input
                                id="cardNumber"
                                className="pl-10 border-[#D7CCC8]"
                                placeholder="XXXX XXXX XXXX XXXX"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                  id="expiryDate"
                                  className="pl-10 border-[#D7CCC8]"
                                  placeholder="MM/YY"
                                  required
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input id="cvv" className="pl-10 border-[#D7CCC8]" placeholder="XXX" required />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "paypal" && (
                        <div className="space-y-4">
                          <p className="text-[#5D4037]">
                            You will be redirected to PayPal to complete your payment securely.
                          </p>
                        </div>
                      )}

                      {paymentMethod === "bank" && (
                        <div className="space-y-4">
                          <div className="bg-[#EDDCBE] p-4 rounded-lg">
                            <h4 className="font-semibold text-[#8B4513] mb-2">Bank Transfer Details</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-[#5D4037]">Bank Name:</span>
                                <span className="font-medium text-[#5D4037]">Kuriftu Bank</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#5D4037]">Account Name:</span>
                                <span className="font-medium text-[#5D4037]">Kuriftu Resort & Spa</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#5D4037]">Account Number:</span>
                                <span className="font-medium text-[#5D4037]">1234567890</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#5D4037]">SWIFT Code:</span>
                                <span className="font-medium text-[#5D4037]">KURFETH123</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-[#5D4037]">
                            Please include your booking reference in the transfer description.
                          </p>
                        </div>
                      )}

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="saveCard" className="rounded" />
                        <label htmlFor="saveCard" className="text-sm text-[#5D4037]">
                          Save this payment method for future bookings
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="rounded" required />
                        <label htmlFor="terms" className="text-sm text-[#5D4037]">
                          I agree to the{" "}
                          <Link href="/terms" className="text-[#8B4513] hover:underline">
                            terms and conditions
                          </Link>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Pay Now"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Room:</span>
                          <span className="font-medium text-[#5D4037]">Deluxe Room</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Dates:</span>
                          <span className="font-medium text-[#5D4037]">May 15 - 20, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Nights:</span>
                          <span className="font-medium text-[#5D4037]">5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Guests:</span>
                          <span className="font-medium text-[#5D4037]">2 Adults, 1 Child</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Room Rate:</span>
                          <span className="font-medium text-[#5D4037]">$250 x 5 nights</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Room Total:</span>
                          <span className="font-medium text-[#5D4037]">$1,250</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5D4037]">Taxes & Fees:</span>
                          <span className="font-medium text-[#5D4037]">$125</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex justify-between">
                        <span className="font-semibold text-[#8B4513]">Total:</span>
                        <span className="font-semibold text-[#8B4513]">$1,375</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>

                  <h2 className="text-2xl font-semibold text-[#8B4513]">Payment Successful!</h2>
                  <p className="text-[#5D4037]">Your payment has been processed successfully.</p>

                  <div className="bg-[#EDDCBE] p-6 rounded-lg max-w-md mx-auto">
                    <h3 className="font-semibold text-[#8B4513] mb-4">Payment Details</h3>
                    <div className="space-y-3 text-left">
                      <div>
                        <span className="text-sm text-[#5D4037]">Transaction ID:</span>
                        <p className="font-medium text-[#8B4513]">TXN-987654321</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Amount Paid:</span>
                        <p className="font-medium text-[#8B4513]">$1,375.00</p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Payment Method:</span>
                        <p className="font-medium text-[#8B4513]">
                          {paymentMethod === "card"
                            ? "Credit Card"
                            : paymentMethod === "paypal"
                              ? "PayPal"
                              : "Bank Transfer"}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-[#5D4037]">Date:</span>
                        <p className="font-medium text-[#8B4513]">{new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#5D4037]">A receipt has been sent to your email address.</p>

                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
                      View Receipt
                    </Button>
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
