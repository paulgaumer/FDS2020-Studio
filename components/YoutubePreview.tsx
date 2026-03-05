import getYoutubeID from "get-youtube-id";

const YoutubePreview = (props: any) => {
  const urlValue = props?.url;
  const id = urlValue ? getYoutubeID(urlValue) : null;
  const url = id ? `https://www.youtube.com/embed/${id}` : undefined;
  if (!id) {
    return <div>Une url Youtube est manquante</div>;
  }
  return (
    <iframe
      title="Youtube Preview"
      width="560"
      height="315"
      src={url}
      style={{ border: 0 }}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default YoutubePreview;
