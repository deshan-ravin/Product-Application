import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image" // Import the 'Image' component

export function ProductCard() {

  return (
    <Link
      href={{
        pathname: "/article"
      }}
    >
      <Card className="w-[350px] h-[400px] overflow-auto bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div>
        <Image src="/next.svg" alt="Logo" width={200} height={200} />
        </div>
      </Card>
    </Link>
  )
}
