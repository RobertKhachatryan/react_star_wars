import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UIButton from "@ui/UIButton";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleNext = () => getResource(nextPage);
  const handlePrevious = () => getResource(prevPage);

  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UIButton
          text="Previous"
          onClick={handlePrevious}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UIButton text="Next" onClick={handleNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
