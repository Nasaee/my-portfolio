import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: '2vsepbqtz7tv',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { titile, url, image, sourceCode, info } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        return { titile, url, img, sourceCode, info, id };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
