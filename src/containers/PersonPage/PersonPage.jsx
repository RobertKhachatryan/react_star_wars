import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { getPeopleImage } from "@services/getPeopleData";
//COMPONENTS
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonImage from "@components/PersonPage/PersonImage";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
//
import styles from "./PersonPage.module.css";

const PersonPage = () => {
  //STATES
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
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
        setPersonPhoto(getPeopleImage(id));
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImage personPhoto={personPhoto} personName={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
        </div>
      </div>
    </>
  );
};

export default PersonPage;
