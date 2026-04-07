"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, FileText, ChevronDown, ChevronUp } from "lucide-react"
import { VideoContent } from "@/types/sections"

interface VideoPlayerProps {
  video: VideoContent
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`

  return (
    <Card className="border-l-4 border-l-red-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-700">
          <Play className="h-6 w-6" />
          {video.title}
        </CardTitle>
        {video.description && (
          <p className="text-sm text-muted-foreground">{video.description}</p>
        )}
        {video.duration && (
          <p className="text-xs text-muted-foreground">Duration: {video.duration}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div>
          <Button
            variant="outline"
            onClick={() => setTranscriptOpen(!transcriptOpen)}
            className="w-full flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Video Transcript
            </span>
            {transcriptOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
          {transcriptOpen && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border max-h-64 overflow-y-auto">
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-sm font-sans leading-relaxed">
                  {video.transcript}
                </pre>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
