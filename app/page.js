"use client"
import { HomeSection } from "@/components/HomeSection";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import en from "@shopify/polaris/locales/en.json";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
const queryClient = new QueryClient()

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider i18n={en}>
        <main className="">
          
          <HomeSection/>
        </main>
      </AppProvider>
    </QueryClientProvider>

  )
}
