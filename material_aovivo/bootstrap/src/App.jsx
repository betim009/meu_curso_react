import { Container } from "react-bootstrap";
import "./App.css";
import MyCarousel from "./components/MyCarousel";
import MyNavBar from "./components/MyNavBar";
import MyTable from "./components/MyTable";
import MyCards from "./components/MyCard";

function App() {
  return (
    <>
      <MyNavBar />
      <Container className="d-flex justify-content-center mt-5">
        <MyCarousel />
      </Container>
      <Container className="d-flex justify-content-center mt-5 my-table">
        <MyTable />
      </Container>
      <Container className="d-flex justify-content-center mt-5 my-table">
        <MyCards />
      </Container>
    </>
  );
}

export default App;
