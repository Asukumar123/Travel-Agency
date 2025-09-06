import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { testimonialsData } from "@/data/testimonials"

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">游客评价</h2>
        <p className="mt-4 max-w-[85%] text-muted-foreground">听听其他旅行者分享他们在中国的难忘经历</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{testimonial.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
