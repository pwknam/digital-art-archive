"use client";
import { useState } from "react";
import {
  ArtworkForm,
  ArtworkFormProps,
} from "../../../../components/ArtworkForm";

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
      <h1>Artwork Create Form</h1>
      <ArtworkForm handleFormSubmit={handleFormSubmit} />
    </>
  );
}
