import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface EventsCardProps {
  title: string
  image: string
  date: string
  category: string
  description?: string
}

export function EventsCard({ title, image, date, category, description }: EventsCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/events/${title}`} className="block">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">{date}</span>
            <span className="text-sm text-[#2F557F]">{category}</span>
          </div>
          {/* ✅ FIXED: Not a <Link> anymore */}
          <p className="font-bold hover:text-[#2F557F] transition-colors">{title}</p>
          {description && <p className="text-gray-600 text-sm mt-2">{description}</p>}
        </CardContent>
      </Link>
    </Card>
  );
}



