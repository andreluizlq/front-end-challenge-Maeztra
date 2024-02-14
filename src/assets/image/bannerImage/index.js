import banner from "./bannerImage.png";
import bannerImageMobile from "./bannerImageMobile.jpeg";

const bannerImage = ({ style, width, height, mobile }) => {
    return <img src={mobile ? bannerImageMobile : banner} alt="imagePNG" style={{ width: width, height: height, objectFit: 'cover', ...style }} />;
};

export default bannerImage;