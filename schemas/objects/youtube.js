import React from 'react';
import getYoutubeID from 'get-youtube-id';

const YoutubePreview = ({ value }) => {
  const id = getYoutubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    return <div>Une url Youtube est manquante</div>;
  }

  return (
    <iframe
      titke="Youtube Preview"
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YoutubePreview,
  },
};
