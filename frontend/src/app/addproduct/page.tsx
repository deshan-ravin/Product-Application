"use client";

import React, { useState } from "react";
import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";

export default function AddProduct() {

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
          <form  className="grid gap-6">
            <div className="grid gap-3 font-bold">
              <Label htmlFor="title">Product Name</Label>
              <Input
                id="name"
                type="text"
                className="w-full"/>
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="title">Product Type</Label>
              <Input
                id="type"
                type="text"
                className="w-full"/>
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="content">Description</Label>
              <Textarea
                id="description"
                className="h-60 w-full"/>
            </div>
            <div className="grid gap-3 font-bold">
              <Label htmlFor="author">Price - [$]</Label>
              <Input
                id="author"
                type="text"
                className="w-full" />
            </div>
          </form>
        </CardContent>

        <div className="p-4 flex justify-between">
          <a href="/user">
            <button className="px-6 py-3 text-lg font-medium text-cyan-800 bg-white rounded-md hover:bg-zinc-400 hover:text-cyan-700 transition duration-300">
              Cancel
            </button>
          </a>
          
          <button
            type="submit"
            className="px-6 py-3 text-lg font-medium text-white bg-cyan-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300" >
            Add
          </button>
        </div>
      </Card>
      
      <Footer/>
    </main>
  );
}
