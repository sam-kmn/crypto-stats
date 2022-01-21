import {BsGlobe, BsTwitter} from 'react-icons/bs'

const Coin = ({coin}) => {
  return (
    <div className="bg-dark text-light text-center py-3" style={{borderRadius: '.7rem'}}>
      <header className="fs-3">{coin.name}</header>
      <img src={coin.icon} alt={coin.id} className="my-3" width={64} />
      <div>Symbol: <span className="text-warning">{coin.symbol}</span> </div>
      <div>Price: {coin.price.toFixed(2)} </div>
      <div className="d-flex-center gap-3 mt-3">
        {coin.websiteUrl ? 
          (<a href={coin.websiteUrl}><BsGlobe className='text-white fs-5'/></a>) : (<></>)}
        {coin.twitterUrl ? 
          (<a href={coin.twitterUrl}><BsTwitter className='text-primary fs-5'/></a>) : (<></>)}
      </div>
    </div>
  )
};

export default Coin;
