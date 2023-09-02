import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
//
import styles from "./PersonPage.module.css";

const PersonPage = () => {
  //STATES
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  //STATES
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
      }
    })();
  }, []);
  console.log(personInfo);
  return (
    <>
      <h1>{personName}</h1>
      {personInfo && (
        <ul>
          {personInfo.map(({ title, data }) => {
            return (
              data && (
                <li key={title}>
                  <span>
                    {title}: {data}
                  </span>
                </li>
              )
            );
          })}
        </ul>
      )}
    </>
  );
};

export default PersonPage;
