import React from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsapAnimation from "../utils/gsapAnimation";
import SingleSection from "../components/SingleSection";

const Sections = ({
  pageUrl,
  url,
  gitUrl,
  name,
  id,
  background_images,
  shortDsc,
  tags,
}) => {
  const section = useRef([]);

  const addToRef = (el) => {
    if (el && !section.current.includes(el)) {
      section.current.push(el);
    }
  };

  useEffect(() => {
    if (background_images) {
      gsapAnimation(section);
    }
  });

  // template
  return (
    <Container className='App' ref={addToRef}>
      {background_images.map((el, index) => {
        if (index !== 0) {
          return (
            <img
              key={index}
              id={`img${index}`}
              src={el}
              alt=''
              className={`parallax foreground-1 img${index}`}
            />
          );
        } else {
          return (
            <img key={index} src={el} alt='' className='parallax foreground' />
          );
        }
      })}
      <SingleSection
        id={id}
        name={name}
        url={url}
        shortDsc={shortDsc}
        tags={tags}
        gitUrl={gitUrl}
        pageUrl={pageUrl}
      />
    </Container>
  );
};

export default Sections;

// styles
const Container = styled.div`
  text-align: center;
  position: relative;
  padding: 1rem;

  /* bg and foreground */
  .parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
    @media screen and (max-width: 965px) {
      object-fit: cover;
    }
  }
`;
