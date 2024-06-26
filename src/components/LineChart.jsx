import './index.css'
import { useCurrency } from '../context/useContext';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Time from './Time';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
    const { id } = useParams()

    const { currency, days, } = useCurrency()

    const { data } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);

    return (
        <div className='line-wrapper'>
            {
                data && (
                    <Line
                        data={{
                            labels: data.total_volumes.map((crypto) => {
                                const date = new Date(crypto[0])
                                const time = date.getHours() > 12
                                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    : `${date.getHours()}:${date.getMinutes()} AM`

                                return days === 1 ? time : date.toLocaleDateString()
                            }),
                            datasets: [{
                                data: data.total_volumes.map((crypto) => crypto[1]),
                                label: `Price (Past ${days} Days) in ${currency}`,
                                borderColor: " rgb(135, 206, 235)"
                            }]
                        }}
                        options={{
                            elements: {
                                point: {
                                    radius: 1,
                                }
                            }
                        }}
                    />
                )
            }
            <Time></Time>
        </div>
    )
}

export default LineChart