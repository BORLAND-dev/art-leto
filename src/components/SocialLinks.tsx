import { socials } from '../config/site';
import circle from '../static/images/81d69.svg';
import maxCenter from '../static/images/25a2a.svg';
const icons = import.meta.glob('../static/images/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
export default function SocialLinks() {
  return <nav className="socials" aria-label="Музей в социальных сетях">
    {socials.map(item => <a key={item.name} href={item.url} aria-label={item.name} target="_blank" rel="noopener noreferrer">
      <span className="social-icon">
        <img className="social-icon__circle" src={circle} alt="" />
        <img className={item.flip ? 'social-icon__shape social-icon__shape--flip' : 'social-icon__shape'} src={icons[`../static/images/${item.image}`]} alt="" />
        {item.name === 'MAX' && <img className="social-icon__center" src={maxCenter} alt="" />}
      </span>
    </a>)}
  </nav>;
}
