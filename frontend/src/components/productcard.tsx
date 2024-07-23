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
import Article from "@/lib/types"
import Link from "next/link"

interface ArticleProps {
  articleContent: string
  articleTitle: string
  authorName: string
  dateCreated: string
}

export function ArticleCard(props: ArticleProps) {
  // Function to truncate text to a specified number of words
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ")
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text
  }

  return (
    <Link
      href={{
        pathname: "/article",
        query: {
          title: props.articleTitle,
          content: props.articleContent,
          author: props.authorName,
          date: props.dateCreated,
        },
      }}
    >
      <Card className="w-[350px] h-[400px] overflow-auto bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
        <h1 className="text-2xl font-bold font-sans w-full mt-2">
          {props.articleTitle}
        </h1>
        <p className="mt-5">{truncateText(props.articleContent, 30)}</p>
        <div className="flex justify-between mt-5">
          <div>
            Author:
            <h3 className="text-lg font-bold">{props.authorName}</h3>
          </div>
          <div>
            Date:
            <h3 className="text-lg font-bold">{props.dateCreated}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}
