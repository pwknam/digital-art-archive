"use client";
import { useState } from "react";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import NavBar from "../../../../components/NavBar";
import { useRouter } from "next/navigation";

export default async function ArtworkCreate() {
  const router = useRouter();
  const handleFormSubmit: ArtworkFormProps["handleFormSubmit"] = async (
    data
  ) => {
    const inputData = await fetch("/api/artwork", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (inputData.status != 200) {
      console.log(await inputData.json());
    } else {
      router.push("/artwork");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="w-1/2 h-3/4">
          <h1 className="font-bold text-3xl mb-7">Add New Artwork</h1>
          <ArtworkForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}
