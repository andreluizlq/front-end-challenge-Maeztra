const ImageTemplate = ({ style, width, height, image }) => {
    return <img src={image} alt="imagePNG" style={{ pointerEvents: 'none', width: width, height: height, ...style }} />;
};

export default ImageTemplate;