import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useQueryParams } from "@hooks/useQueryParams";
import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import { changeHTTP } from "@utils/network";
// COMPONENTS
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import ErrorMessage from "@components/ErrorMessage";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
//
import styles from "./PeoplePage.module.css";

export const PeoplePage = () => {
  //States --
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  //States --

  const query = useQueryParams();
  // page from prototype : method GET
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
    } else {
      //   setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people ? <PeopleList people={people} /> : <ErrorMessage />}
    </>
  );
};

export default PeoplePage;
