"use client";
import { useState } from "react";
import {
  CollectionForm,
  CollectionFormProps,
} from "../../../../components/CollectionForm";
import NavBar from "../../../../components/NavBar";

export default function CollectionCreate() {
  const handleFormSubmit: CollectionFormProps["handleFormSubmit"] = (data) => {
    fetch("/api/collection?method=POST", {
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
          <h1 className="font-bold text-3xl mb-4">Add New Collection</h1>
          <CollectionForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}
