/* eslint-disable array-callback-return */
const formatData = (input, propertyId) => {
  const responseData = {
    listingId: propertyId,
    photos: [],
  };

  const baseIndex = 1;

  const mapData = (queryResults) => {
    queryResults.map((item, index) => {
      const listing = {
        id: index + baseIndex,
        imageUrl: item.image_url,
        thumbnailUrl: item.thumbnail_url,
        description: item.photo_description,
        room: item.room,
      };
      responseData.photos.push(listing);
    });
  };

  mapData(input);
  return responseData;
};

module.exports = formatData;
