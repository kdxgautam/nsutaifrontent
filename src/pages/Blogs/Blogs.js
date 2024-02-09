import BlogHero from "./components/BlogHero";
import CardContainer from "./components/CardContainer";
import Featured from "./components/Featured";
import Search from "./components/Search";

export default function Blogs() {
  return (
    <>
      <BlogHero />
      <Featured />
      <Search />
      <CardContainer />
    </>
  );
}
