import page1Image from '../../static/images/129A3768.jpg';
import page2Image from '../../static/images/19.jpeg';
import page3Image from '../../static/images/Жирофле.jpg';
import page4Image from '../../static/images/129A8583.JPG';
import page5Image from '../../static/images/Маскарад с Головиным.jpg';
import page6Image from '../../static/images/129A8560.JPG';
import page7Image from '../../static/images/129A7489.jpg';
import page8Image from '../../static/images/129A0057.JPG';
import page9Image from '../../static/images/129A6577.JPG';
import page10Image from '../../static/images/129A7175.JPG';
import page11Image from '../../static/images/129A0174.JPG';
import page12Image from '../../static/images/DSC_9579.jpg';
import { PAGE_TICKET_URLS } from './ticketUrls';

export type VenueKey = 'schepkina' | 'borovskiy';

const MONTHS_GENITIVE = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export interface WorkshopDetailConfig {
  title: string;
  themeTag: string;
  image: string;
  imageAlt: string;
  ticketUrl: string;
  dateShort: string;
  timeRange: string;
  imageDateBadge: string;
  durationLabel: string;
  priceLabel: string;
  venueKey: VenueKey;
  descriptionParagraphs: string[];
}

const VENUE_ADDRESS: Record<VenueKey, string> = {
  schepkina: 'Дом-музей Щепкина ул. Щепкина, 47, стр. 2',
  borovskiy:
    'Музей-мастерская Давида Боровского, Москва, Б. Афанасьевский переулок, д. 3, стр. 3',
};

export function getVenueAddress(key: VenueKey): string {
  return VENUE_ADDRESS[key];
}

function formatDateShort(date: string): string {
  const [day, month] = date.split('.');
  return `${parseInt(day, 10)}.${month}`;
}

function formatImageDateBadge(eventDate: string, startTime: string): string {
  const [dayPart, monthPart] = eventDate.split('.');
  const day = parseInt(dayPart, 10);
  const month = parseInt(monthPart, 10) - 1;
  const monthName = MONTHS_GENITIVE[month] ?? monthPart;
  return `${day} ${monthName} ${startTime}`;
}

function formatTimeRange(start: string, durationMin: number): string {
  const [h, m] = start.split(':').map(Number);
  const total = h * 60 + m + durationMin;
  const endH = Math.floor(total / 60) % 24;
  const endM = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${start} – ${pad(endH)}:${pad(endM)}`;
}

function buildConfig(
  opts: Omit<
    WorkshopDetailConfig,
    | 'dateShort'
    | 'timeRange'
    | 'imageDateBadge'
    | 'durationLabel'
    | 'priceLabel'
    | 'venueKey'
  > & {
    eventDate: string;
    startTime: string;
    durationMin: number;
    priceRub: number;
    venueKey: VenueKey;
  }
): WorkshopDetailConfig {
  const {
    eventDate,
    startTime,
    durationMin,
    priceRub,
    venueKey,
    ...rest
  } = opts;
  return {
    ...rest,
    venueKey,
    dateShort: formatDateShort(eventDate),
    timeRange: formatTimeRange(startTime, durationMin),
    imageDateBadge: formatImageDateBadge(eventDate, startTime),
    durationLabel: `Длительность ${durationMin} мин.`,
    priceLabel: `${priceRub} руб.`,
  };
}

const DEFAULT_DURATION = 90;
const DEFAULT_PRICE = 1300;
const THEME_DEFAULT = 'Мастер-класс';

export const page1Config = buildConfig({
  title: 'С ЧЕГО НАЧИНАЕТСЯ ТЕАТР',
  themeTag: THEME_DEFAULT,
  image: page1Image,
  imageAlt: 'Фото занятия «С чего начинается театр»',
  ticketUrl: PAGE_TICKET_URLS.page1,
  eventDate: '01.06.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'Участники мастер-класса узнают, благодаря кому открылся первый в мире театральный музей и почему театр начинается не с вешалки, а с афиши, познакомятся с некоторыми театральными профессиями и попробуют выполнить упражнения по актерскому тренингу на развитие коммуникации, а также своими руками сделают афишу к собственному спектаклю.',
  ],
});

export const page2Config = buildConfig({
  title: 'ЗОЛОТОЙ ПЕТУШОК',
  themeTag: 'Сказочная мозаика',
  image: page2Image,
  imageAlt: 'Фото занятия «Золотой петушок»',
  ticketUrl: PAGE_TICKET_URLS.page2,
  eventDate: '09.06.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'На занятии мы познакомимся с музыкальным произведением композитора Н. Римского-Корсакова — оперой «Золотой петушок», поговорим об удивительных по красоте декорациях и о роли художника по костюмам.',
    'Узнаем, что такое скороговорки и медленноговорки, перевоплотимся в одного из сказочных героев А.С. Пушкина и создадим своего собственного Золотого Петушка.',
  ],
});

export const page3Config = buildConfig({
  title: 'ЖИРОФЛЕ-ЖИРОФЛЯ',
  themeTag: THEME_DEFAULT,
  image: page3Image,
  imageAlt: 'Фото занятия «Жирофле-Жирофля»',
  ticketUrl: PAGE_TICKET_URLS.page3,
  eventDate: '18.06.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  descriptionParagraphs: [
    'На занятии юные участники узнают об уникальном жанре «оперетта» и о профессии «костюмер», познакомятся с загадочной историей двух девушек-близнецов из оперетты Шарля Лекока «Жирофле-Жирофля» и особенностями её авангардной постановки.',
    'В завершении занятия участники пройдут актерский тренинг и мастер-класс по изготовлению двух бантиков.',
  ],
});

export const page4Config = buildConfig({
  title: 'ИВАН-ЦАРЕВИЧ',
  themeTag: THEME_DEFAULT,
  image: page4Image,
  imageAlt: 'Фото занятия «Иван-царевич»',
  ticketUrl: PAGE_TICKET_URLS.page4,
  eventDate: '23.06.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'Юные участники познакомятся с волшебными героями сказочной постановки спектакля «Иван-царевич» по пьесе В.И. Родиславского, погрузятся в сюжет русской сказки, чтобы понять, какие испытания нужно преодолеть, чтобы победить нечистую силу.',
    'Попробуют себя в роли театральных костюмеров, сыграют в игру «костюмированный переполох» и на мастер-классе создадут свой бутафорский меч.',
  ],
});

export const page5Config = buildConfig({
  title: 'ЖЕМЧУЖИНА АДАЛЬМИНЫ',
  themeTag: THEME_DEFAULT,
  image: page5Image,
  imageAlt: 'Фото занятия «Жемчужина Адальмины»',
  ticketUrl: PAGE_TICKET_URLS.page5,
  eventDate: '02.07.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  descriptionParagraphs: [
    'Участники занятия познакомятся с малоизвестной, но очень яркой сказочной постановкой «Жемчужина Адальмины», созданной по мотивам чудесной сказки Сакариуса Топелиуса, узнают о рождении первого государственного детского театра и о тайнах профессии «гример».',
    'На практической части программы юные участники пройдут актерский тренинг, а в завершении их ждёт мастер-класс по изготовлению короны для принцессы.',
  ],
});

export const page6Config = buildConfig({
  title: 'ГЕНЗЕЛЬ И ГРЕТЕЛЬ',
  themeTag: THEME_DEFAULT,
  image: page6Image,
  imageAlt: 'Фото занятия «Гензель и Гретель»',
  ticketUrl: PAGE_TICKET_URLS.page6,
  eventDate: '07.07.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'Участникам предстоит погрузиться в волшебный мир сказки братьев Гримм про Гензель и Гретель, а также познакомиться с одноимённой оперой Энгельберта Хумпердинка.',
    'Юные гости узнают о том, кто такой сценограф, сыграют в игру, посвящённую декорациям двух великих мастеров: Врубеля и Поленова, а в завершении программы изготовят бутафорские пряники.',
  ],
});

export const page7Config = buildConfig({
  title: 'ЛЮБОВЬ К ТРЕМ АПЕЛЬСИНАМ',
  themeTag: THEME_DEFAULT,
  image: page7Image,
  imageAlt: 'Фото занятия «Любовь к трём апельсинам»',
  ticketUrl: PAGE_TICKET_URLS.page7,
  eventDate: '16.07.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  descriptionParagraphs: [
    'Опера С.С. Прокофьева «Любовь к трём апельсинам» — это фантастическая феерия со смешным, а иногда и страшным сюжетом. Юные участники познакомятся с прекрасной музыкой С. Прокофьева и весёлым сказочным сюжетом оперы, а также узнают о профессии «композитор».',
    'На практической части участники пройдут актерский тренинг и изготовят волшебную поварёшку страшной кухарки.',
  ],
});

export const page8Config = buildConfig({
  title: 'СКАЗКИ АНДЕРСЕНА',
  themeTag: THEME_DEFAULT,
  image: page8Image,
  imageAlt: 'Фото занятия «Сказки Андерсена»',
  ticketUrl: PAGE_TICKET_URLS.page8,
  eventDate: '21.07.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'Сказки Ханса Кристиана Андерсена знают все, но знаете ли вы, когда появился первый спектакль по его произведениям на русском языке?',
    'На занятии участники познакомятся с первыми театральными постановками по сказкам Андерсена, узнают о профессии писателя и его роли, а в завершении пройдут мастер-класс по изготовлению волшебной палочки.',
  ],
});

export const page9Config = buildConfig({
  title: 'СОЛОВЕЙ',
  themeTag: THEME_DEFAULT,
  image: page9Image,
  imageAlt: 'Фото занятия «Соловей»',
  ticketUrl: PAGE_TICKET_URLS.page9,
  eventDate: '06.08.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'На занятии мы познакомимся с волшебной сказкой Ганса Христиана Андерсена «Соловей» и яркими персонажами одноимённой театральной постановки, а также узнаем о всех сложностях профессии «художественный руководитель».',
    'Во второй части занятия пройдём актерский тренинг и своими руками изготовим посох китайского императора.',
  ],
});

export const page10Config = buildConfig({
  title: 'СКАЗКА О ЦАРЕ САЛТАНЕ',
  themeTag: 'Сказочная мозаика',
  image: page10Image,
  imageAlt: 'Фото занятия «Сказка о царе Салтане»',
  ticketUrl: PAGE_TICKET_URLS.page10,
  eventDate: '11.08.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'Участники познакомятся с оперой Николая Римского-Корсакова «Сказка о царе Салтане» по мотивам произведения А.С. Пушкина, узнают, как назывался город, которым правил царь Гвидон, и почему эскизы декораций Михаила Врубеля напоминают мозаику из драгоценных камней.',
    'Юные гости узнают, кто такой театральный художник, и попробуют себя в его роли, создав костюм «Волны».',
  ],
});

export const page11Config = buildConfig({
  title: 'ПРИНЦЕССА ТУРАНДОТ',
  themeTag: THEME_DEFAULT,
  image: page11Image,
  imageAlt: 'Фото занятия «Принцесса Турандот»',
  ticketUrl: PAGE_TICKET_URLS.page11,
  eventDate: '20.08.2026',
  startTime: '15:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  descriptionParagraphs: [
    'На занятии участники познакомятся с профессией «режиссёр» и узнают, как в постановке спектакля Евгения Вахтангова «Принцесса Турандот» старинная китайская сказка сочеталась с современностью, и попробуют расшифровать три загадки мудрецов.',
    'На второй части программы участники пройдут актерский тренинг и мастер-класс по изготовлению комикс-книжки по мотивам спектакля.',
  ],
});

export const page12Config = buildConfig({
  title: 'СКАЗОЧНАЯ ТЕАТРАЛЬНАЯ ВЕЧЕРИНКА',
  themeTag: THEME_DEFAULT,
  image: page12Image,
  imageAlt: 'Фото занятия «Сказочная театральная вечеринка»',
  ticketUrl: PAGE_TICKET_URLS.page12,
  eventDate: '28.08.2026',
  startTime: '15:00',
  durationMin: 120,
  priceRub: 1600,
  venueKey: 'schepkina',
  descriptionParagraphs: [
    'Мероприятие, где дети будут артистами, сценаристами, художниками, костюмерами и даже гримёрами! Юные участники узнают, с чего начинался театр, нарисуют билеты, создадут свой образ, придумают сказочный спектакль и выйдут на сцену как артисты.',
    'В программе: театральные игры, импровизации и настоящий спектакль-сказка, где каждый ребёнок сыграет своего персонажа, а родители будут зрителями.',
  ],
});
