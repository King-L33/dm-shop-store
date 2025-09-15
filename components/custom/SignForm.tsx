"use client";

import React from "react";
import Link from "next/link";

export default function SignForm() {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/sign-in"
        className="inline-flex h-10 items-center rounded bg-black px-4 text-white hover:opacity-90"
      >
        Sign in
      </Link>
    </div>
  );
}
