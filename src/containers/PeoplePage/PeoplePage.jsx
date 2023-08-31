import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

// COMPONENTS
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import ErrorMessage from "@components/ErrorMessage";

import styles from "./PeoplePage.module.css";

export const PeoplePage = () => {
  //States --
  const [people, setPeople] = useState(null);

  //States --
  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        console.log(img);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      //   setErrorApi(false);
    } else {
      //   setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <p>Navigation</p>
      {people ? <PeopleList people={people} /> : <ErrorMessage />}
    </>
  );
};

export default PeoplePage;
