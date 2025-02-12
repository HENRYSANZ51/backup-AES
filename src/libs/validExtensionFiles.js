const validExtensionImage = (imageurl) => {
  const validExtension = ["jpg", "png", "gif"];
  const extension = imageurl.split(".").pop().toLowerCase();
  console.log(extension);
  return validExtension.includes(extension);
};

const validExtensionFile = (file) => {
  console.log(file);
  const extension = file.split(".").pop().toLowerCase();

  return extension === "pdf" ? true : false;
};

module.exports = {
  validExtensionImage,
  validExtensionFile,
};
