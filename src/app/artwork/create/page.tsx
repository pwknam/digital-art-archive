"use client";
import { useState } from "react";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";
import NavBar from "../../../../components/NavBar";

export default function ArtworkCreate() {
  const handleFormSubmit: ArtworkFormProps["handleFormSubmit"] = (data) => {
    fetch("/api/artwork", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="w-1/2 h-3/4">
          <h1 className="font-bold text-3xl mb-4">Add New Artwork</h1>
          <ArtworkForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}
