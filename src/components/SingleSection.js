import React from "react";
import styled from "styled-components";
const SingleSection = ({ id, name, url, shortDsc, tags, gitUrl, pageUrl }) => {
  console.log(url);
  return (
    <Wrapper className='main-container' key={id}>
      <h2 className='title'>{name}</h2>
      <div className='section-left'>
        <img className='img' src={url} alt='' />
        <div className='project-destails'>
          <div className='project-descriptions'>
            <h2 className='dsc-title'>About</h2>
            <p className='dsc'>{shortDsc}</p>
          </div>
          <div className='tags '>
            {tags.map((tag) => {
              return (
                <p className='btn' key={tag}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className='links'>
        <a
          className='link btn source'
          target='_blank'
          rel='noopener noreferrer'
          href={gitUrl}
        ></a>
        <a
          className='link btn visit'
          target='_blank'
          rel='noopener noreferrer'
          href={pageUrl}
        ></a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  /* .main-container { */
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  /* } */
  .title {
    font-size: 1.7rem;
    color: #000;
    letter-spacing: 0.3rem;
  }

  @media screen and (min-width: 965px) {
    .title {
      font-size: 3rem;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    height: 100%;

    @media screen and (min-width: 965px) {
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translate(-30%, -50%);
    }
  }
  .link {
    position: relative;
    overflow: hidden;
    ::before {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: 400;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ::after {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "Font Awesome 5 Free";
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      display: none;
      justify-content: center;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      transform: scale(1.1);
      height: 140px;
      color: #fff;
      background: #000;
      border-radius: 100%;
      transform: rotate(360deg);
      transition: all 0.6s;
      ::before {
        display: none;
      }
      ::after {
        display: flex;
        height: 140px;
      }
    }
  }

  .source {
    ::before {
      content: "GitHub";
    }
    ::after {
      content: "\f0c1";
    }
  }

  .visit {
    ::before {
      content: "Visit";
    }
    ::after {
      content: "\f0c1";
    }
  }

  .section-left {
    max-width: 600px;
    margin: 2rem 0;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 965px) {
      min-height: 50vh;
      .img {
        min-height: 50vh;
      }
    }
  }

  .project-destails {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.7);
    font-family: var(--secundary-font);
    gap: 1rem;

    .project-descriptions {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h2 {
        color: #fff;
        font-size: 2rem;
        font-weight: 900;
        font-family: var(--primary-font);
        letter-spacing: 0.3rem;
      }
      .dsc {
        color: #fff;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    }

    .tags {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      justify-self: flex-end;
      flex-wrap: wrap;

      .btn {
        height: 50px;
        width: 100px;
        font-size: 16px;
        text-transform: capitalize;
        letter-spacing: normal;
      }
    }
    @media screen and (max-width: 965px) {
      padding: 1rem;
      .project-descriptions {
        h2 {
          font-size: 1.5rem;
        }
        .dsc {
          font-size: 1rem;
        }
      }
      .tags {
        gap: 0.5rem;
        .btn {
          height: 10px;
          min-width: 80px;
        }
      }
    }
  }
`;
export default SingleSection;
