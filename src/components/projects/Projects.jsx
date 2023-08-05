import SectionTitle from '../section-title/SectionTitle';
import Section from './projects.style';
import { useFetchProjects } from '../../utils/fetchProjects';
import ProjectsCard from '../projectsCard/ProjectsCard';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  return (
    <Section id='projects'>
      <SectionTitle title={'skills'} subTitle={'MY CREATION'} />
      <div className='projects-center' data-aos='fade-up'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} projects={project} />;
        })}
      </div>
    </Section>
  );
};
export default Projects;
