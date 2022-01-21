import { useEffect, useState } from "react";
import {FaBitcoin} from 'react-icons/fa'

const Navbar = ({inputCallback}) => {
  const [input, setInput] = useState({search:'', currency: 'EUR'})
  const handleInput = (event) => setInput({...input, [event.target.name]:event.target.value})

  useEffect(()=> inputCallback(input),[input, inputCallback])

  return (
    <nav id="Navbar" className="p-5 container-fluid">
      <div id="Navbar-logo" className="d-flex-center gap-2 fs-1">Crypto Stats <FaBitcoin/> </div>
      <div id="Navbar-inputs" className="row justify-content-center">
        <input className="col-5 col-md-3" type="text" placeholder="Search coins..." name="search" value={input.search} onChange={e => handleInput(e)} />
        <select className="col-2 col-md-1" name="currency" value={input.currency} onChange={e => handleInput(e)} >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </nav>
  )
};

export default Navbar;
