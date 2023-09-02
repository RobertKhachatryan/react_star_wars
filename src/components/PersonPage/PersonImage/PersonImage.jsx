import PropTypes from "prop-types";
import styles from "./PersonImage.module.css";

const PersonImage = ({ personPhoto, personName }) => {
  return (
    <div>
      <img src={personPhoto} alt={personName} />;
    </div>
  );
};

PersonImage.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonImage;
