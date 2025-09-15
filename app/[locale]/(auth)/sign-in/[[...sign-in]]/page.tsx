"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "@/lib/auth";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const next = params.get("next") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message || "Failed to sign in");
        return;
      }
      // Hard navigate so middleware/SSR sees updated cookies immediately
      window.location.href = next;
    } catch (err: any) {
      setError(String(err?.message || err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex justify-center items-center py-20">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md border rounded-md p-6 bg-white shadow-sm space-y-4"
      >
        <h1 className="text-xl font-semibold">Sign in</h1>
        {error ? (
          <div className="text-sm text-red-600" role="alert">
            {error}
          </div>
        ) : null}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 outline-none focus:ring"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 outline-none focus:ring"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full h-10 rounded bg-black text-white disabled:opacity-60"
        >
          {submitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Orion - Login page",
  description:
    "A Ecommerce app. We are selling clothing, shoes for mens womens and kids",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
