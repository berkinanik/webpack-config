import Person from './Person';
import '../styles/index.scss';

const App = () => {
  return (
    <>
      <section className="banner"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
          <Person />
        </section>
      </main>
    </>
  )
};

export default App;