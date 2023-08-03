import SectionTitle from '../section-title/SectionTitle';
import Section from './projects.style';
import { useFetchProjects } from '../../utils/fetchProjects';

const Projects = () => {
  const { isLoading, Projects } = useFetchProjects();
  return (
    <Section id='projects'>
      <SectionTitle title={'skills'} subTitle={'MY CREATION'} />
    </Section>
  );
};
export default Projects;
