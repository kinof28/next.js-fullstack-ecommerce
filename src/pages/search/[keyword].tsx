import { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "../../components/UI/Container";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const searchValue = router.query.keyword;
  return (
    <Container>
      <h1>Search page for {searchValue} </h1>
    </Container>
  );
};
export default SearchPage;
