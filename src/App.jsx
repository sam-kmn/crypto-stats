import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Coin from "./components/Coin";


function App() {
  const [input, setInput] = useState({search:'', currency:'EUR'})
  const inputCallback = (input) => setInput(input)

  const [coins, setCoins] = useState({})
  const [filteredCoins, setFilteredCoins] = useState({})

  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&currency='+input.currency)
      .then(res => res.json())
      .then(data => setCoins(data.coins))
  }, [input.currency]);

  useEffect(()=> {
    if (input.search) setFilteredCoins(coins.filter(coin => coin.name.includes(input.search) || coin.symbol.includes(input.search) ))
    else setFilteredCoins(coins)
  },[coins, input])
  

  return (
    <div className="App">
      <Navbar inputCallback={inputCallback} />

      {filteredCoins.length > 0 ? 
      ( <div className="container-fluid pt-5">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gap-4 justify-content-center">
            {filteredCoins.map(coin => <Coin key={coin.id} coin={coin}/> )}
          </div>
        </div> 
      ) : (<div className="mt-5 fs-2 d-flex-center text-white">Loading...</div>) }
           
    </div>
  );
}

export default App;
