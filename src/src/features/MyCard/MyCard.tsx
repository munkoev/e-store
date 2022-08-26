import React from 'react';
import s from './MyCard.module.scss';

interface IMyCardProps {
  cards: IMyCard
}

export interface IMyCard {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    count: number,
    rate: number
  }
  title: string
}

function MyCard({ cards }: IMyCardProps) {
  return (
    <div className={s.MyCard}>
      <div className={s.imgcontainer}>
        <img className={s.img} src={cards.image} alt="cardimge" />
      </div>
      <p>{cards.title}</p>
      <p>{cards.id}</p>
    </div>
  );
}

export default MyCard;
