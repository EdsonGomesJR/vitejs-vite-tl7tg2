import { createContext, useContext, useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';

import { AdsPage } from './AdsPage';

interface GameBannerProps {
  id: string
  bannerUrl: string;
  title: string;
  adsCount: number;
}


export function GameBanner(props: GameBannerProps) {
  const pathTitle = props.title.replace(/\s/g, '').toLowerCase();


  return (
    <NavLink
    to={`/games/${props.id}/ads`}
  
      className="relative rounded-lg overflow-hidden"
    >
      <img src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} {props.adsCount <= 1 ? 'anúncio' : 'anúncios'}
        </span>
      </div>
    </NavLink>

  );
}
