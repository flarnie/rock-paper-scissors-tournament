import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header><h1>Rock Paper Scissors Tournament</h1></header>
      <SpeedInsights />
    </main>
  );
}
