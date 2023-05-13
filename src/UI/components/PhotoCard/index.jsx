import PropTypes from "prop-types";

const PhotoCard = ({ alt = "", className = "", source = "" }) => (
  <img src={source} alt={alt} className={`${className} rounded-3xl`} />
);

PhotoCard.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default PhotoCard;
