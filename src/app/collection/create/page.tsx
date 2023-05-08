"use client";
import { useState } from "react";
import {
  CollectionForm,
  CollectionFormProps,
} from "../../../../components/CollectionForm";
import NavBar from "../../../../components/NavBar";
import { useRouter } from "next/navigation";

export default function CollectionCreate() {
  const router = useRouter();
  console.log(router);

  const handleFormSubmit: CollectionFormProps["handleFormSubmit"] = (data) => {
    fetch("/api/collection?method=POST", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/collection");
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="w-1/2 h-3/4">
          <h1 className="font-bold text-3xl mb-7">Add New Collection</h1>
          <CollectionForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}
