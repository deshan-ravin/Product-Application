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

interface ProductProps {
  name: string;
  description: string;
  price: number;
  type: string;
  image: string;
}


export function ProductCard(props: ProductProps) {

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ")
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text
  }

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Link
      href={{
        pathname: "/product",
        query: {
          name: props.name,
          description: props.description,
          price: props.price,
          type: props.type,
          image: props.image,
        },
      }}
    >
      <Card className="w-[350px] h-[450px] overflow-auto shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div>
        <Image src="/sunglass.jpg" alt="Logo" width={400} height={40} className="rounded-lg" />
        </div>
        <h1 className="text-2xl font-bold font-sans w-full mt-2">
          {props.name}
        </h1>
        <p className="mt-5">{truncateText(description, 15)}
        </p>
        <div className="flex justify-between mt-5">
          <div>
            Price:
            <h3 className="text-lg font-bold">${props.price}</h3>
          </div>
          <div>
            Type:
            <h3 className="text-lg font-bold">{props.type} </h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}
