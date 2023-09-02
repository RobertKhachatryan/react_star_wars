import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
//
import styles from "./PersonPage.module.css";

const PersonPage = () => {
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      console.log(res);
    })();
  }, []);

  return <h1>Person Page</h1>;
};

export default PersonPage;
