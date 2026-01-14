import { ref, onMounted } from "vue"

const channelID = "UCWCgjck7Tr8avF--km63lbw"
const apiKey = import.meta.env.VITE_YOUTUBE
const maxResults = 4
const maxLength = 120

export interface Video {
    title: string
    thumbnail: string
    duration: string
    viewCount: string
    id: string
}

const parseDuration = (iso = "") => {
    const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
    if (!m) return 0

    const [, h = "0", mnt = "0", s = "0"] = m
    return +h * 3600 + +mnt * 60 + +s
}

const formatDuration = (s: number) =>
    s >= 3600
        ? `${Math.floor(s / 3600)}:${Math.floor((s % 3600) / 60)
            .toString()
            .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`
        : `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`

const formatViews = (v: string) => {
    const n = +v
    return n >= 1e6 ? `${(n / 1e6).toFixed(1)}M views`
        : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K views`
            : `${n} views`
}

const get = (url: string) => fetch(url).then(r => r.json())

export function useYouTube() {
    const videos = ref<Video[]>([])
    const error = ref<string | null>(null)

    const fetchVideos = async () => {
        try {
            const channel = await get(
                `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelID}&key=${apiKey}`
            )

            const uploads = channel.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
            if (!uploads) throw new Error("No channel data")

            const playlist = await get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploads}&maxResults=50&key=${apiKey}`
            )

            const ids = playlist.items
                ?.map((i: any) => i.snippet.resourceId.videoId)
                .join(",")

            if (!ids) return

            const data = await get(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${apiKey}`
            )

            videos.value = data.items
                .filter((v: any) => parseDuration(v.contentDetails.duration) > maxLength)
                .slice(0, maxResults)
                .map((v: any) => ({
                    id: v.id,
                    title: v.snippet.title,
                    thumbnail:
                        v.snippet.thumbnails.high?.url ||
                        v.snippet.thumbnails.medium?.url,
                    duration: formatDuration(parseDuration(v.contentDetails.duration)),
                    viewCount: formatViews(v.statistics.viewCount),
                }))
        } catch (e) {
            error.value = e instanceof Error ? e.message : "Failed to load videos"
        }
    }

    onMounted(fetchVideos)

    return { videos, error }
}