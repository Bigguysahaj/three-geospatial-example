import GeospatialMap from "@/components/3DTilesRenderer"
import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main style={{ width: '100%', height: '100vh' }}>
      <GeospatialMap city="london" />
      
      {/* Or with custom overrides */}
      {/* <GeospatialMap city="tokyo" distance={2000} coverage={0.5} /> */}
    </main>
  )
}
