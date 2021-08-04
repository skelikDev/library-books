import React from 'react';
import {Button} from './Button/Button';
import {BookCard} from './BookCard/BookCard';
import S from './Search.module.css';
import searchImg from '../../../img/search.svg';
import filterImg from '../../../img/filter.svg';


export const Search = ({data, changePage}) => {

  const ShowList = data.docs.map(list =>
    <BookCard changePage={changePage} item={list} authorPhoto={list.key} key={list.key} name={list.name} title={list.title} img={list.cover_edition_key}/>
  )

    return (
      <div className={S.content}>
        <form>
          <div className={S.search}>
            <img src={searchImg} alt="search"/>
            <input placeholder="Поиск..."/>
            <Button
              onClick={() => {alert('Отфильтруем книги?')}}
            >
              <img src={filterImg} alt="filter"/>
            </Button>
          </div>
        </form>
        <ul>
          {
            ShowList
          }
        </ul>
      </div>
    );
};


