"use client";
import { useState } from "react";
import {
  CollectionForm,
  CollectionFormProps,
} from "../../../../components/CollectionForm";

export default function CollectionCreate() {
  const handleFormSubmit: CollectionFormProps["handleFormSubmit"] = (data) => {
    fetch("/api/collection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <h1>Collection Create Form</h1>
      <CollectionForm handleFormSubmit={handleFormSubmit} />
    </>
  );
}
