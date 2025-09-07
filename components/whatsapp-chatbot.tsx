"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import Image from "next/image"

interface ChatMessage {
  id: number
  text: string
  textFr: string
  isBot: boolean
  timestamp: Date
  action?: () => void
  actionText?: string
  actionTextFr?: string
}

const initialMessages: Omit<ChatMessage, 'id' | 'timestamp'>[] = [
  {
    text: "Hello! 👋 I'm Prince Kumar's assistant. What can I help you with today?",
    textFr: "Bonjour ! 👋 Je suis l'assistant de Prince Kumar. Comment puis-je vous aider aujourd'hui ?",
    isBot: true
  }
]

const quickReplies = [
  {
    text: "Book a tour",
    textFr: "Réserver un circuit",
    response: "Great! I'd be happy to help you book a tour. Let me connect you with Prince Kumar on WhatsApp for personalized assistance.",
    responseFr: "Parfait ! Je serais ravi de vous aider à réserver un circuit. Permettez-moi de vous connecter avec Prince Kumar sur WhatsApp pour une assistance personnalisée.",
    whatsappMessage: "Hello Prince Kumar! I'm interested in booking a tour to India. Could you please help me with more information?"
  },
  {
    text: "Custom itinerary",
    textFr: "Itinéraire personnalisé",
    response: "I'll help you create a custom itinerary! Let me connect you with Prince Kumar who will design the perfect trip for you.",
    responseFr: "Je vais vous aider à créer un itinéraire personnalisé ! Permettez-moi de vous connecter avec Prince Kumar qui concevra le voyage parfait pour vous.",
    whatsappMessage: "Hi Prince Kumar! I would like to discuss a custom itinerary for my trip to India. Can we chat about my preferences?"
  },
  {
    text: "Travel advice",
    textFr: "Conseils de voyage",
    response: "I can help with travel advice! Prince Kumar is the best person to give you authentic insights about traveling in India.",
    responseFr: "Je peux vous aider avec des conseils de voyage ! Prince Kumar est la meilleure personne pour vous donner des conseils authentiques sur les voyages en Inde.",
    whatsappMessage: "Hello Prince Kumar! I need some travel advice for my upcoming trip to India. Could you help me with some tips?"
  },
  {
    text: "Visa assistance",
    textFr: "Aide visa",
    response: "I can guide you with visa requirements! Let me connect you with Prince Kumar for detailed visa assistance.",
    responseFr: "Je peux vous guider avec les exigences de visa ! Permettez-moi de vous connecter avec Prince Kumar pour une assistance visa détaillée.",
    whatsappMessage: "Hi Prince Kumar! I need help with visa requirements for traveling to India. Can you assist me?"
  }
]

export default function WhatsAppChatbot() {
  const { language } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [hasShownInitialMessage, setHasShownInitialMessage] = useState(false)

  // Show initial popup after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownInitialMessage) {
        setHasShownInitialMessage(true)
        // Auto-open for a moment to show the chat is available
        setIsOpen(true)
        setTimeout(() => setIsOpen(false), 3000)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [hasShownInitialMessage])

  // Initialize messages when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMsg: ChatMessage = {
        id: Date.now(),
        ...initialMessages[0],
        timestamp: new Date()
      }
      setMessages([initialMsg])
    }
  }, [isOpen, messages.length])

  const handleQuickReply = (reply: typeof quickReplies[0]) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: reply.text,
      textFr: reply.textFr,
      isBot: false,
      timestamp: new Date()
    }

    // Add bot response with WhatsApp action
    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      text: reply.response,
      textFr: reply.responseFr,
      isBot: true,
      timestamp: new Date(),
      action: () => openWhatsApp(reply.whatsappMessage),
      actionText: "Chat on WhatsApp",
      actionTextFr: "Discuter sur WhatsApp"
    }

    setMessages(prev => [...prev, userMessage, botMessage])
  }

  const openWhatsApp = (message?: string) => {
    const phoneNumber = "+917870524178" // Prince Kumar's WhatsApp number
    const encodedMessage = encodeURIComponent(
      message || "Hello Prince Kumar! I found you through your website and I'm interested in traveling to India. Can you help me plan my trip?"
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Notification Badge (show only once) */}
        {hasShownInitialMessage && (
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            1
          </div>
        )}
        
        {/* Chat Button */}
        <Button
          onClick={toggleChat}
          size="lg"
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-2xl border-2 border-green-100">
        {/* Header */}
        <CardHeader className="bg-green-500 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-300 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Prince Kumar</CardTitle>
                <CardDescription className="text-green-100 text-xs">
                  {language === 'fr' ? 'Assistant de voyage' : 'Travel Assistant'}
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="p-0 h-64 overflow-y-auto bg-gray-50">
          <div className="p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm border'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    <p>{language === 'fr' ? message.textFr : message.text}</p>
                    {message.action && (
                      <Button
                        onClick={message.action}
                        size="sm"
                        className="mt-2 bg-green-500 hover:bg-green-600 text-white text-xs"
                      >
                        <MessageCircle className="mr-1 h-3 w-3" />
                        {language === 'fr' ? message.actionTextFr : message.actionText}
                      </Button>
                    )}
                  </div>
                </div>
                <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Quick Replies / Footer */}
        <div className="p-3 border-t bg-white rounded-b-lg">
          {messages.length <= 1 ? (
            // Show quick replies initially
            <div className="space-y-2">
              <p className="text-xs text-gray-600 mb-2">
                {language === 'fr' ? 'Choisissez une option:' : 'Choose an option:'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs h-8 bg-transparent hover:bg-green-50 hover:text-green-700 border-green-200"
                  >
                    {language === 'fr' ? reply.textFr : reply.text}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            // Show direct WhatsApp button after interaction
            <div className="flex gap-2">
              <Button
                onClick={() => openWhatsApp()}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm"
                size="sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Continuer sur WhatsApp' : 'Continue on WhatsApp'}
              </Button>
              <Button
                onClick={() => openWhatsApp("Hello Prince Kumar! I'd like to call you to discuss my travel plans. When is a good time?")}
                variant="outline"
                size="sm"
                className="bg-transparent hover:bg-gray-50"
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}