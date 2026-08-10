import type { TeamVideo } from '../data/videos';
import './VideoGrid.css';

interface VideoGridProps {
  videos: TeamVideo[];
  emptyLabel: string;
}

export function VideoGrid({ videos, emptyLabel }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="video-grid-empty panel">
        <p>{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.youtubeId} className="video-grid-item panel">
          <div className="video-grid-frame">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="video-grid-title">{video.title}</p>
        </div>
      ))}
    </div>
  );
}
