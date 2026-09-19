export default function YouTubeEmbed({ videoId, orientation = 'horizontal' }) {
  if (!videoId) return null;

  return (
    <div className={`youtube-embed-wrap orientation-${orientation}`}>
      <iframe
        className="youtube-embed"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}