import React from 'react';
import { useTranslation } from 'react-i18next';
// import { CARD } from '../../app/constants';
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
  const { t, i18n } = useTranslation();
  // i18n.language
  return (
    <div className={s.MyCard}>
      <div className={s.imgcontainer}>
        <img className={s.img} src={cards.image} alt="cardimge" />
      </div>
      <div className={s.textcontainer}>
        <div className={s.price}>{cards.price}</div>
        <div>{t(cards.description)}</div>
        <button type="button" onClick={() => i18n.changeLanguage('fr')}>translate</button>
      </div>

    </div>
  );
}

export default MyCard;
