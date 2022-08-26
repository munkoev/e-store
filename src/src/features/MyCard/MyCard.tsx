import React from 'react';
import { CARD } from '../../app/constants';
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
      <div className={s.textcontainer}>
        <div className={s.price}>{cards.price}</div>
        <div>{cards.title.length > CARD.textlen ? `${cards.title.slice(0, CARD.textlen - 3)}...` : cards.title}</div>

      </div>

    </div>
  );
}

export default MyCard;
