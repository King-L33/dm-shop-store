"use client";

import * as React from "react";

interface ClerkProviderProps {
    children: React.ReactNode;
  }

function ClerkProvider({ children }:ClerkProviderProps ) {
  return (
    <>
      {children}
    </>
  );
}

export default ClerkProvider;
