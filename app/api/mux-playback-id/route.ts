import { type NextRequest, NextResponse } from "next/server"
import Mux from "@mux/mux-node"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const assetId = searchParams.get("assetId")

  if (!assetId) {
    return NextResponse.json({ error: "Asset ID is required" }, { status: 400 })
  }

  // Check if Mux credentials are available
  const tokenId = process.env.MUX_TOKEN_ID
  const tokenSecret = process.env.MUX_TOKEN_SECRET

  if (!tokenId || !tokenSecret) {
    return NextResponse.json(
      {
        error: "Mux credentials not configured. Please set MUX_TOKEN_ID and MUX_TOKEN_SECRET environment variables.",
      },
      { status: 500 },
    )
  }

  try {
    const client = new Mux({
      tokenId,
      tokenSecret,
    })

    const asset = await client.video.assets.retrieve(assetId)
    const playbackId = asset.playback_ids?.[0]?.id

    if (!playbackId) {
      return NextResponse.json(
        {
          error: "No playback ID found for this asset",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({ playbackId })
  } catch (error) {
    console.error("Error fetching Mux asset:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch asset from Mux",
      },
      { status: 500 },
    )
  }
}
