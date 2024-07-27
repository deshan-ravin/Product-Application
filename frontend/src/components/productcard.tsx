import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image"; // Import the 'Image' component

interface ProductProps {
  name: string;
  description: string;
  price: number;
  type: string;
  image: string;
}

export function ProductCard(props: ProductProps) {

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

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
          {/* Use the image prop for the Image component */}
          <Image
            src={props.image}
            alt={props.name}
            width={400}
            height={200}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-2xl font-bold font-sans w-full mt-2">
          {props.name}
        </h1>
        <p className="mt-5">{truncateText(props.description, 15)}</p>
        <div className="flex justify-between mt-5">
          <div>
            Price:
            <h3 className="text-lg font-bold">${props.price}</h3>
          </div>
          <div>
            Type:
            <h3 className="text-lg font-bold">{props.type}</h3>
          </div>
        </div>
      </Card>
    </Link>
  );
}
