"use client"
import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ArticlePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [userName, setUserName] = useState("Deshan");

  useEffect (() => {
    const url = new URL (window.location.href);
    const name = url.searchParams.get("name");
    const description = url.searchParams.get("description");
    const price = url.searchParams.get("price");
    const type = url.searchParams.get("type");
    const image = url.searchParams.get("image");

    if (name && description && price && type && image) {
      setName(name);
      setDescription(description);
      setPrice(parseInt(price));
      setType(type);
      setImage(image);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-left flex mt-10 mb-4 text-cyan-600">
          {userName}
        </h1>
      </div>


      <Card className="w-full max-w-3xl p-4 mt-8"> 
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{price}</CardTitle>
            <CardDescription className="text-gray-500">{type}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-black">{name}</h2>
          </div>
          <div>
            <p className="text-lg text-black">
              {description.split("\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </CardContent>
      </Card>

      <Footer/>
    </main>
  );
}
