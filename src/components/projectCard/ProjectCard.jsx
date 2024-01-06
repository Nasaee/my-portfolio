import styled from 'styled-components';

const ProjectCard = ({ project }) => {
  const { title, url, img, sourceCode, info, technology } = project;
  return (
    <Card>
      <div className='card-header'>
        <img src={img} alt={info} />
      </div>
      <div className='card-body'>
        <h4>technologies :</h4>
        <ul>
          {technology.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </div>
      <div className='project-content'>
        <h4>{title}</h4>
        <p>{info}</p>
        <div className='button-container'>
          <button type='button' className='see-live'>
            <a href={url} target='_blank' rel='noreferrer'>
              See Live
            </a>
          </button>
          <button type='button'>
            <a href={sourceCode} target='_blank' rel='noreferrer'>
              Source
            </a>
          </button>
        </div>
      </div>
    </Card>
  );
};
export default ProjectCard;

const Card = styled.div`
  background: #e9ecef;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;

  @media (max-width: 500px) {
    max-width: 300px;
  }

  &::before {
    content: '';
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    opacity: 0.85;
    position: absolute;
    width: 100%;
    height: 0;
    transition: 0.4s ease-in-out;
    z-index: 1;
  }

  &:hover::before {
    height: 100%;
  }

  .card-header {
  }

  .card-body {
    padding: 1.5rem;

    h4 {
      margin-bottom: 1rem;
      text-transform: capitalize;
      font-size: 1.3rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    li {
      display: inline-block;
      padding: 4px 8px;
      color: var(--main-color);
      font-weight: 800;
      border: 1px solid #adb5bd;
      border-radius: 10px;
      letter-spacing: 0.75px;
    }
  }

  .project-content {
    padding: 2rem;
    position: absolute;
    text-align: center;
    top: 65%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.5s ease-in-out;
    z-index: 10;

    h4 {
      font-family: var(--subtitle-font);
      color: #fff;
      font-size: 1.8rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 3rem;
      font-size: 1.4rem;
      color: #ced4da;
      text-align: start;
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      button {
        background: transparent;
        border: 1.5px solid var(--color-blog);
        border-radius: var(--border-radius);
        transition: var(--transition);

        &.see-live {
          background: var(--color-blog);
          a {
            color: #fff;
          }
        }
      }

      button a {
        display: inline-block;
        padding: 1rem 2rem;
        font-family: var(--subtitle-font);
        font-size: clamp(0.8rem, 1vw, 1rem);
        font-weight: 800;
        color: var(--color-blog);
        letter-spacing: var(--letter-spacing);
      }

      button:hover {
        transform: scale(1.05);
      }
    }
  }

  &:hover .project-content {
    top: 50%;
    opacity: 1;
  }
`;
