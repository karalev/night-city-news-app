import { useEffect, useRef, useState } from "react";
import axios from "axios";

import './main.css';

function Main({ selectedID, links }) {
  const [news, setNews] = useState([]);
  const [playersNews, setPlayersNews] = useState({
    title: 'ololo',
    text: 'azaza',
    share_link: 'https://www.google.com'
  });

  const parseRSS = (response) => {
    const data = new window.DOMParser().parseFromString(response.data, "text/xml")
    const entries = Array.from(data.querySelectorAll("entry"));
    return entries.map(el => {
      let textNode = el.querySelector("title").innerHTML;
      const title = textNode.slice(9, textNode.length - 3);
      textNode = el.querySelector("content").innerHTML;
      const text = textNode.slice(textNode.indexOf('<p>') + 3, textNode.indexOf('</p>'));
      const share_link = el.querySelector("link").getAttribute('href');
      return { title, text, share_link }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const playersText = await axios.get(`/player/${selectedID}`);
      setPlayersNews(playersText.data);
      const response = await axios.get(`/${links[selectedID]}`);
      switch (selectedID) {
        case 0:
          setNews(parseRSS(response));
          break;
        case 1:
          const items = response.data.items;
          setNews(items);
          break;
        default:
          setNews(parseRSS(response));
          break;
      }

    }
    fetchData();
  }, [selectedID]);

  return (
    <div className="main-container">
      <div key={0} className='main-newsItem'>
        <h3>{playersNews.title}</h3>
        <a href={playersNews.share_link}>Continue reading...</a>
        <p>{playersNews.text}</p>
      </div>
      {news.map((element, id) => {
        return (
          <div key={id + 1} className='main-newsItem'>
            <h3>{element.title}</h3>
            <a href={element.share_link}>Continue reading...</a>
            <p>{element.text}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Main;
