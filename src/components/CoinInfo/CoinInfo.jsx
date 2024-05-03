import "./index.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useCurrency } from "../../context/useContext";

function CoinInfo() {
    const { id } = useParams();
    const { symbol, currency } = useCurrency();

    const { data } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`);

     function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function GetSentence(allSent) {
        const sentence = allSent.split(/[.!?]/);
        const TwoSentences = sentence.slice(0, 1).join(".").trim();
        return TwoSentences;
    }

    return (
        data && (
            <div className="content-wrapper">
                <img src={data.image.large} alt="" />
                <h2>{data.name}</h2>
                <p>{GetSentence(data.description.en)}.</p>
                <div className="rank-price">
                    <h2>
                        Rank:<span>{data.market_cap_rank}</span>
                    </h2>
                    <h2>
                        Current Price:{" "}
                        <span>
                            {symbol}{" "}
                            {data.market_data.current_price[`${currency.toLowerCase()}`]}
                        </span>
                    </h2>
                    <h2>
                        Market Cap:{" "}
                        <span>
                            {symbol}{" "}
                            {numberWithCommas(
                                data.market_data.market_cap[
                                    `${currency.toLowerCase()}`
                                ].toString().length > 7
                                    ? parseInt(
                                        data.market_data.market_cap[`${currency.toLowerCase()}`]
                                            .toString()
                                            .slice(0, -6)
                                    )
                                    : data.market_data.market_cap[`${currency.toLowerCase()}`]
                            )}
                            M
                        </span>
                    </h2>
                </div>
            </div>
        )
    );
}

export default CoinInfo;