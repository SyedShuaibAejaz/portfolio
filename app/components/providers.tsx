// app/providers.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps as NextThemesProviderProps } from "next-themes";
import type { ReactNode } from "react";

// 1. Create a new type that combines the library's props with the 'children' prop.
type ProvidersProps = NextThemesProviderProps & {
  children: ReactNode;
};

// 2. Use this new, correct type for your component's props.
export function Providers({ children, ...props }: ProvidersProps) {
  // 3. Destructure `children` and pass it inside the provider.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
