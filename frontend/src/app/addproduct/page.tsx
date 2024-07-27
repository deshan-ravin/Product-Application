"use client";

import React, { useState } from "react";
import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import { storage, db } from '../../config/firebase'; // Import Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import storage functions
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

export default function AddProduct() {
  const [products, setProducts] = useState([
    {
      name: "product 1",
      type: "type1",
      description: "this is the description",
      price: 20,
      image: "image1"
    }
  ]);

  const [newProduct, setNewProduct] = useState<{
    name: string;
    type: string;
    description: string;
    price: number;
    image: File | null; // Set the type to File | null
  }>({
    name: "",
    type: "",
    description: "",
    price: 0,
    image: null // Set to null initially
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewProduct({
      ...newProduct,
      image: file
    });
  };

  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let uploadedImageURL = '';

      if (newProduct.image) {
        const storageRef = ref(storage, `images/${newProduct.image.name}`);
        const snapshot = await uploadBytes(storageRef, newProduct.image);
        uploadedImageURL = await getDownloadURL(snapshot.ref);
      }

      const productData = {
        ...newProduct,
        price: Number(newProduct.price),
        image: uploadedImageURL,
      };

      await addDoc(collection(db, "products"), productData);

      setProducts([...products, productData]);
      setNewProduct({ name: "", type: "", description: "", price: 0, image: null });
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-left flex mt-10 mb-4 text-cyan-600">
          Deshan 👦
        </h1>
      </div>

      <Card className="w-full max-w-3xl p-4 mt-8">
        <CardHeader>
          <CardTitle>Add Your New Product 🎒</CardTitle>
          <CardDescription className="text-cyan-500">
            PRODUCT DASHBOARD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={addProduct}>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" type="text" className="w-full" value={newProduct.name} onChange={handleInputChange} />
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="type">Product Type</Label>
              <Input id="type" name="type" type="text" className="w-full" value={newProduct.type} onChange={handleInputChange} />
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" className="h-60 w-full" value={newProduct.description} onChange={handleInputChange} />
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="price">Price - [$]</Label>
              <Input id="price" name="price" type="number" className="w-full" value={newProduct.price} onChange={handleInputChange} />
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="file">Upload Image</Label>
              <Input id="file" name="file" type="file" className="w-full" onChange={handleFileChange} />
            </div>
            <div className="p-4 flex justify-between">
              <a href="/allproducts">
                <button type="button" className="px-6 py-3 text-lg font-medium text-cyan-800 bg-white rounded-md hover:bg-zinc-400 hover:text-cyan-700 transition duration-300">
                  Cancel
                </button>
              </a>
              <button type="submit" className="px-6 py-3 text-lg font-medium text-white bg-cyan-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
                Add
              </button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Footer />
    </main>
  );
}
