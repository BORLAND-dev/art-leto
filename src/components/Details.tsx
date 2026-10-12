import { useRef } from 'react';
import Scene from './Scene';
import SocialLinks from './SocialLinks';
import ticket from '../static/images/cf923.png';
import { ticketUrl } from '../config/site';

export default function Details() {
  const dialog = useRef<HTMLDialogElement>(null);
  return <section className="details" aria-label="О спектакле и билеты">
    <Scene kind="details" />
    <div className="details__content">
      <p className="details__intro">Бахрушинский музей приглашает вас совершить увлекательное путешествие в сердце театральной истории и принять участие в новогоднем квесте,<br />где вам предстоит пройти испытания и раскрыть дело пропавшего актера Михаила Щепкина!</p>
      <address className="details__contacts">
        <p>Бахрушинский театральный музей</p>
        <p>Дом–музей Михаила Щепкина</p>
        <p>Адрес: Москва, ул. Щепкина, 47, стр. 2</p>
        <p>Заказ билетов и информация:<br /><a href="tel:+74994847777">+7 (499) 484–77–77</a><br /><a href="tel:+79636594088">+7 (963) 659–40–88</a></p>
      </address>
      {ticketUrl ? <a className="ticket" href={ticketUrl} target="_blank" rel="noopener noreferrer"><img src={ticket} alt="Купить билет" /></a>
        : <button className="ticket" type="button" aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}><img src={ticket} alt="Купить билет" /></button>}
      <SocialLinks />
    </div>
    <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
      <div className="booking-dialog__inner">
        <h2 id="booking-title">Билеты на спектакль</h2>
        <p>Онлайн-продажа появится позже.<br />Заказ билетов и информация:</p>
        <a href="tel:+74994847777">+7 (499) 484–77–77</a>
        <a href="tel:+79636594088">+7 (963) 659–40–88</a>
        <form method="dialog"><button>Закрыть</button></form>
      </div>
    </dialog>
  </section>;
}
