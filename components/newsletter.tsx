"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理订阅逻辑
    console.log("订阅邮箱:", email)
    setEmail("")
    alert("感谢您的订阅！")
  }

  return (
    <section className="bg-rose-600 py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">订阅我们的旅游资讯</h2>
          <p className="mt-4 max-w-[85%]">获取最新的旅游优惠、目的地指南和旅行灵感</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 flex justify-center">
          <div className="flex w-full max-w-md flex-col sm:flex-row items-center justify-center gap-2">
            <input
              type="email"
              placeholder="您的电子邮箱"
              className="h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full sm:w-auto bg-white text-rose-600 hover:bg-white/90">
              订阅
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
