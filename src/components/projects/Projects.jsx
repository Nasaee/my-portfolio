import SectionTitle from '../section-title/SectionTitle';
import Section from './projects.style';
import { projects } from '../../data';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
  return (
    <Section id='projects'>
      <SectionTitle title={'projects'} subTitle={'MY CREATION'} />
      <div className='projects-center' data-aos='fade-up'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </Section>
  );
};
export default Projects;
