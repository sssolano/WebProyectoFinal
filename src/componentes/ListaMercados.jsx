import { useEffect, useState } from 'react';
import { db } from "../credenciales";


const MarketList = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      const snapshot = await db.collection('markets').get();
      const marketsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMarkets(marketsData);
    };

    fetchMarkets();
  }, []);

  return (
    <ul>
      {markets.map((market) => (
        <li key={market.id}>{market.name}</li>
      ))}
    </ul>
  );
};

export default MarketList;