import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";

function App() {
  return (
    <Layout startingThem="light">
      <di>
        <Header />
        <Speakers />
      </di>
    </Layout>
  );
}

export default App;
