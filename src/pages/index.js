import HomePage from "@/components/screens/home/home";

const Home = ({ reviews }) => {
  return <HomePage reviews={reviews || []} />;
};

export default Home;


