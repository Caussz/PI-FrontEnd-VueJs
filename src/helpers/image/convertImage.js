function convertImage(photo) {
    if (photo instanceof Blob) {
        const blobUrl = URL.createObjectURL(photo);
        return blobUrl;
      } else if (typeof photo === 'string' && photo.startsWith('data:image')) {
        return photo;
      } else {
        return 'https://i.ibb.co/4ty80mN/image.png'
      }
}

export default convertImage