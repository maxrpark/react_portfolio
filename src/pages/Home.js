import { useState, useEffect } from 'react';
import axios from 'axios';
import game from '../game.jpeg';
import styled from 'styled-components';
// componets
import Sections from '../components/Sections';

const url = 'https://my-portfolio-blog-website.netlify.app/api/myProjects';

function Home() {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await axios(url);
      const dataResponse = response.data;
      console.log(dataResponse);
      if (dataResponse) {
        const dataOrdered = dataResponse.sort(
          (a, b) => b.projectID - a.projectID
        );
        setProjects(dataOrdered);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <header>
        <div className='title-center'>
          <h1>Built with React & Gsap</h1>
          {/* <a
            href='https://my-portfolio-blog-website.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit my porfolio
          </a> */}
        </div>
      </header>
      {projects.map((project) => {
        return <Sections game={game} key={project.id} {...project} />;
      })}
    </Container>
  );
}
const Container = styled.div`
  .title-center {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background: black;
  }
  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
      width: 200px;
    }
  }

  /* a {
    color: #000;
    background: white;
    height: 50px;
    width: 150px;
    font-size: 16px;
    text-transform: capitalize;
    letter-spacing: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.2s linear;
    border: 2px solid black;
    margin-top: 2rem;
  }
  a:hover {
    color: white;
    background: black;
    border-color: white;
  } */
`;

export default Home;
