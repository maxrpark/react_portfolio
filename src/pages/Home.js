import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import game from '../game.jpeg';
// componets
import Sections from '../components/Sections';

const url = 'https://my-portfolio-blog-website.netlify.app/api/myProjects';

function Home() {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await axios(url);
      const dataResponse = response.data;
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
    <>
      {projects.map((project) => {
        return <Sections game={game} key={project.id} {...project} />;
      })}
    </>
  );
}

export default Home;
