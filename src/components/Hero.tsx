import Scene from './Scene';
import logo from '../static/images/16257.svg';
import title from '../static/images/96639.png';
import ribbon from '../static/images/4eb67.png';

export default function Hero() {
  return <section className="hero" aria-labelledby="show-title">
    <Scene kind="hero" />
    <div className="hero__content">
      <div className="museum-logo"><img src={logo} alt="Бахрушинский театральный музей" /></div>
      <div className="hero__heading">
        <p className="hero__eyebrow">иммерсивный спектакль</p>
        <h1 id="show-title"><img src={title} alt="Рождественский детектив" /></h1>
        <img className="hero__ribbon" src={ribbon} alt="Дело пропавшего актера" />
      </div>
      <p className="hero__date">4 декабря — 10 января</p>
    </div>
    <div className="scene-fade" aria-hidden="true" />
  </section>;
}
