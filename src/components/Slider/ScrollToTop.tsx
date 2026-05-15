// src/ScrollToTop.tsx
import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

type Props = { targetRef?: React.RefObject<HTMLElement> };

export default function ScrollToTop({ targetRef }: Props) {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'

  useLayoutEffect(() => {
    // если есть #якорь — даём браузеру прокрутить к нему
    if (hash) return;

    // POP бывает и на первой загрузке. Сохраняем позицию ТОЛЬКО при реальном back/forward.
    const st = (window.history.state ?? {}) as { idx?: number };
    const isRealPop = navType === 'POP' && typeof st.idx === 'number' && st.idx > 0;
    if (isRealPop) return;

    // Выбираем корректный скроллер
    const target = targetRef?.current || null;
    const isScrollable =
      !!target && target.scrollHeight > target.clientHeight;

    const scroller =
      (isScrollable ? target : (document.scrollingElement as HTMLElement)) ||
      document.documentElement;

    // Скроллим после рендера страницы
    requestAnimationFrame(() => {
      scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, hash, navType, targetRef]);

  return null;
}
