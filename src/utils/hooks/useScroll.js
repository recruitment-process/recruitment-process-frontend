import { useRef, useEffect, useState, useCallback } from 'react';

import { debounce } from '../utils';

export function useScroll(idContainer) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  const handleSCrollPosition = useCallback(() => {
    setScrollPosition(document.querySelector(idContainer).scrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Чтобы функция вызывалась не чаще чем раз в 300 мсек
  const setScrollPositionDebaunced = debounce(handleSCrollPosition, 300);

  // Слушатель события на появление скролла у контейнера с кандидатами
  useEffect(() => {
    document
      .querySelector(idContainer)
      .addEventListener('scroll', setScrollPositionDebaunced);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Передвигаемся в начало контейнера с кандидатами
  const scrollToTop = () => {
    const firstChildElement = ref.current?.firstElementChild;
    firstChildElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return { scrollToTop, scrollPosition, ref };
  // scrollToTop - функция, которая возвращает скролл в начало
  // scrollPosition - текущее положение скролла
  // ref - ссылка на контейнер где должен быть скролл
}
