import SectionTitle from '../section-title/SectionTitle';
import Section from './projects.style';
import { useFetchProjects } from '../../utils/fetchProjects';
import ProjectsCard from '../projectsCard/ProjectsCard';
import CardSkeleton from '../cardSkeleton/CardSkeleton';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  return (
    <Section id='projects'>
      <SectionTitle title={'projects'} subTitle={'MY CREATION'} />
      <div className='projects-center' data-aos='fade-up'>
        {isLoading && <CardSkeleton cards={6} />}
        {!isLoading &&
          projects.map((project) => {
            return <ProjectsCard key={project.id} projects={project} />;
          })}
      </div>
    </Section>
  );
};
export default Projects;
