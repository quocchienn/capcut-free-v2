import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.UPSTASH_KV_KV_REST_API_URL,
  token: process.env.UPSTASH_KV_KV_REST_API_TOKEN,
})

export async function POST(request: Request) {
  try {
    const today = new Date().toISOString().split("T")[0]
    const visitorKey = `visitors:${today}`
    const totalKey = "visitors:total"

    // Increment total visits
    const totalVisits = await redis.incr(totalKey)

    // Increment today's unique visitors
    const uniqueVisitors = await redis.incr(visitorKey)

    // Set expiry for daily key (24 hours)
    await redis.expire(visitorKey, 86400)

    return Response.json({
      totalVisits,
      uniqueVisitors,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Visitor tracking error:", error)
    return Response.json({ error: "Failed to track visitor" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0]
    const visitorKey = `visitors:${today}`
    const totalKey = "visitors:total"

    const totalVisits = await redis.get<number>(totalKey)
    const uniqueVisitors = await redis.get<number>(visitorKey)

    return Response.json({
      totalVisits: totalVisits || 0,
      uniqueVisitors: uniqueVisitors || 0,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Failed to fetch stats:", error)
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
