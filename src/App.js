import Nav from './nav';
import Menu from './menu';
import Data from './data';
import { useState } from 'react';
function App() {
  const [listItem, setListItem] = useState(Data)

  const all = () => {
    setListItem(Data);
  }

  const lunch = () => {
    console.log('lunch');
    setListItem(Data.filter((listItem) => listItem.category === 'lunch'));
  }

  const shakes = () => {
    console.log('shakes');
    setListItem(Data.filter((listItem) => listItem.category === 'shakes'));
  }
  const break2 = () => {
    console.log('break');
    setListItem(Data.filter((listItem) => listItem.category === 'breakfast'));
  }

  return (
    <>
      <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Nav break={break2} lunch={lunch} all={all} shakes={shakes}/>
      <div className="section-center">
        {listItem.map((data)=>{
          return <Menu  key={data.id} {...data}></Menu>
        })}
      </div>
    </section>
    </>
  );
}

export default App;
