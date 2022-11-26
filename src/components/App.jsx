import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Api } from './API/Api';
import { Gallery } from './Gallery/Gallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      const data = await Api(searchValue, page);
      const { totalHits, hits } = data;
      setData(prevState => {
        return [...prevState, ...hits];
      });

      setTotalHits(totalHits);
      setIsLoading(false);
    };
    fetchData();
  }, [page, searchValue]);

  const onFormSubmit = query => {
    if (query === searchValue) {
      return;
    }
    setSearchValue(query);
    setPage(1);
    setData([]);
  };
  const onButtonClick = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onFormSubmit} />
      <Gallery data={data} />
      {data.length < totalHits ? <Button onClick={onButtonClick} /> : null}
      {isLoading && <Loader />}
    </div>
  );
};
