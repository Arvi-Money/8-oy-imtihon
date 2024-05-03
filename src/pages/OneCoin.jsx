import CoinInfo from '../components/CoinInfo/CoinInfo'
import LineChart from '../components/charts/LineChart'

function OneCoin() {
  return (
    <div className='OneCoin-wrapper'>
      <CoinInfo></CoinInfo>
      <LineChart></LineChart>
    </div>
  )
}

export default OneCoin