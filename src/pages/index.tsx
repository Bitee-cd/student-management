import { GetServerSideProps } from "next";

const Home: React.FC = () => {
  return <div>Redirecting...</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/students",
      permanent: false,
    },
  };
};

export default Home;
