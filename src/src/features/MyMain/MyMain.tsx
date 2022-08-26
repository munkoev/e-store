import React from 'react';
import MyCard, { IMyCard } from '../MyCard/MyCard';
import MySidebar from '../MySideBar/MySidebar';
import useMyMainHook from './MyMain.hooks';
import s from './MyMain.module.scss';

function MyMain() {
  const { cards } = useMyMainHook();
  return (
    <div className={s.MyMain}>
      <MySidebar />
      <div className={s.container}>
        {cards.map((e: IMyCard) => (<MyCard cards={e} key={e.id} />))}
      </div>

    </div>
  );
}

export default MyMain;
