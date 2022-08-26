import { useState, useEffect } from 'react';
import { IMyCard } from '../MyCard/MyCard';

function useMyMainHook() {
  const [cards, setCards] = useState([] as IMyCard[]);
  useEffect(() => {
    const getData = async () => {
      // const data = await fetch('https://fakestoreapi.com/products').then((res) => res.json()) as IMyCard[];
      const data = await fetch('http://localhost:3000').then((res) => res.json()) as IMyCard[];
      setCards(data);
    };
    getData().catch();
  }, []);

  return { cards };
}

export default useMyMainHook;
