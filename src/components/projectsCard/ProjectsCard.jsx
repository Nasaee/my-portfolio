import Card from './projectsCard.style';

const ProjectsCard = ({ projects }) => {
  const { title, url, img, sourceCode, info } = projects;

  return (
    <Card className='project-card'>
      <img src={img} alt={info} />
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
export default ProjectsCard;
