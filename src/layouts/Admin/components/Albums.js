import React from 'react';

import Album from './Album';

const Albums = (
  {
    allAlbums,
    onDelete,
    onUpdate,
    onUpload,
    onCreateImage,
    onDeleteImage,
    onUpdateImage,
  },
) => {
  if (allAlbums) {
    return (
      <div>
        {allAlbums.map(album => (
          <Album
            onDelete={onDelete}
            onUpdate={onUpdate}
            onUpload={onUpload}
            onCreateImage={onCreateImage}
            onDeleteImage={onDeleteImage}
            onUpdateImage={onUpdateImage}
            album={album}
            key={album.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>Cargando</div>;
  }
};

export default Albums;
