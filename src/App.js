import React, { useEffect,useState } from 'react';
import Card from './Components/Card';

//an array of all the news categories
const category =[
  "all",
"national",
"business",
"sports",
"world",
"politics",
"technology",
"startup",
"entertainment",
"miscellaneous",
"hatke",
"science",
"automobile",
]


function App() {

  // state to store the data
  //data is used to store array of news items. We initialize it as null
  const[data,setData]=useState(null)
  //stores the selected news category
  const [selected,setSelected]=useState('all')

  
  //this function fetches the news from the api
  async function getNews(){
    const res = await fetch(
      `https://inshorts.deta.dev/news?category=${selected}`
    );
    //we uses string literals ` ` here to add a variable inside a string
    // here the api is https://inshorts.deta.dev/news?category=all
    const response = await res.json();
    //we store the response inside the data state
    setData(response.data);
  }



  // this is a side effect hook. This hook is used to call the fetch news function that fetches the news articles
  useEffect(() => {
    getNews();
  }, [selected]);
  // we are passing selected variable here. It means that this hook will be called everytime the selected variable changes

  return (
    <div className="App">
      <div className="container pb-5 text-center pt-5">
        <h1>Quick News App</h1>
      </div>
      <div className="container">{category.map((item,index)=><button key={index} onClick={()=>setSelected(item)} className={item == selected ? ('btn btn-primary me-2 mb-2'):("btn btn-outline-primary me-2 mb-2")}>{item}</button>)}</div>
      {/* We are using a ternary operator here
      it says
      if data is null (i.e news is not yet fetched, show loading)
      else if data is fetched successfully map over the data array */}
      {data === null ? (
        <div className="text-center container">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="container mt-5">
          {/* iterating over the map array to display each news component */}
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
