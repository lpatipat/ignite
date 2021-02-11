//Media Resize

export const smallImage = (imagePath, size) => {
  //check if imagePath input is available from the data fetched...
  //BEFORE executing rest of the function with an if condition!
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return image;
  }
  return imagePath;
};
