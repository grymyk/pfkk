import ContainerBlock from "../components/ContainerBlock/";
import Hero from "../components/ContainerBlock/Hero";
import FavouriteProjects from "../components/ContainerBlock/FavouriteProjects";
import LatestCode from "../components/ContainerBlock/LatestCode";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
        title = { userData.name }
        description = { userData.designation }>
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories = { repositories } />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
