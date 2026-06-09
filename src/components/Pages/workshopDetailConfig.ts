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
import page13Image from '../../static/images/18.06.jpg';
import page14Image from '../../static/images/25,06.jpg';
import page15Image from '../../static/images/16,07.jpg';
import page16Image from '../../static/images/23,07.jpg';
import page17Image from '../../static/images/06,08.jpg';
import page18Image from '../../static/images/13,08.jpg';
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
  ageRating: string;
  /** false — только «название», без префикса «ЦИКЛ ВСТРЕЧ» */
  useCycleMeetingTitle: boolean;
  descriptionParagraphs: string[];
}

const VENUE_ADDRESS: Record<VenueKey, string> = {
  schepkina: 'Дом-музей Щепкина ул. Щепкина, 47, стр. 2',
  borovskiy:
    'Музей-мастерская Д. Боровского, Москва, Б. Афанасьевский переулок, д. 3, стр. 3',
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
    | 'ageRating'
    | 'useCycleMeetingTitle'
  > & {
    eventDate: string;
    startTime: string;
    durationMin: number;
    priceRub: number;
    venueKey: VenueKey;
    ageRating?: string;
    useCycleMeetingTitle?: boolean;
  }
): WorkshopDetailConfig {
  const {
    eventDate,
    startTime,
    durationMin,
    priceRub,
    venueKey,
    ageRating = '6+',
    useCycleMeetingTitle = true,
    ...rest
  } = opts;
  return {
    ...rest,
    venueKey,
    ageRating,
    useCycleMeetingTitle,
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

const DRAWING_BORDERS_DESCRIPTION = [
  'На встрече участники познакомятся с популярным методом создания узоров из простых повторяющихся элементов.',
  'Работая чёрными ручками на белой бумаге, начинающие мастера шаг за шагом заполнят пространство листа ритмичными орнаментами.',
  'Эта медитативная практика докажет: красивый рисунок может получиться у всех. Даже у тех, кто якобы «совсем не умеет рисовать».',
  'Ведущая цикла – методист отдела «Мемориальный музей «Творческая мастерская театрального художника Давида Боровского» Гриценко Екатерина.',
];

const DRAWING_CYCLE_DESCRIPTION = [
  'Эта безмятежная летняя встреча будет посвящена природным мотивам: цветы, листья и стебли превратятся в декоративные паттерны.',
  'Участники освоят простые приемы стилизации и создадут свой ботанический сад на бумаге, наполненный изящными линиями и органичными формами.',
  'Ведущая цикла – методист отдела «Мемориальный музей «Творческая мастерская театрального художника Давида Боровского» Гриценко Екатерина.',
];

export const page1Config = buildConfig({
  title: 'С ЧЕГО НАЧИНАЕТСЯ ТЕАТР',
  useCycleMeetingTitle: false,
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
    'На встрече участники познакомятся с музыкальным произведением композитора Н.А. Римского-Корсакова - оперой «Золотой петушок», узнают об удивительных по красоте декорациях и о роли художника по костюмам. На актерском тренинге они потренируют дикцию с помощью скороговорок и перевоплотятся в одного из сказочных героев сказки А.С. Пушкина. А затем создадут своего собственного Золотого Петушка.',
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
    'На встрече участники узнают об уникальном жанре «оперетта» и о профессии «костюмер». Юные гости познакомятся с загадочной историей двух девушек-близнецов из оперетты Шарля Лекока «Жирофле-Жирофля» и особенностями ее авангардной постановки. В завершении программы участники пройдут актерский тренинг, а на мастер-классе изготовят два бутафорских бантика.',
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
    'Участникам предстоит погрузиться в волшебный мир сказки братьев Гримм про Гензель и Гретель, а также познакомиться с одноименной оперой Энгельберта Хумпердинка. Юные гости узнают о том, кто такой сценограф, и примут участие в игре, посвященной декорациям двух великих мастеров: Михаила Врубеля и Василия Поленова. В завершении программы участники изготовят бутафорские пряники.',
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
    'Опера С.С. Прокофьева «Любовь к трем апельсинам» — это фантастическая феерия со смешным, а иногда и страшным сюжетом. Участники познакомятся с прекрасной музыкой Сергея Прокофьева и веселым сказочным сюжетом оперы, а также узнают о профессии «композитор» и о том, как создавалась эта опера. На практической части юные гости пройдут актерский тренинг и изготовят волшебную поварешку страшной кухарки.',
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
    'Сказки Ханса Кристиана Андерсена знают все, но не все знают, когда появился первый спектакль по его произведениям на русском языке. На встрече участники познакомятся с первыми театральными постановками по сказкам Андерсена, узнают о профессии писателя и его роли в создании спектакля. В завершении программы гости примут участие в мастер-классе по изготовлению волшебной палочки.',
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
  venueKey: 'borovskiy',
  descriptionParagraphs: [
    'На встрече участники познакомятся с волшебной сказкой Ханса Кристиана Андерсена «Соловей» и яркими красивыми персонажами одноименной театральной постановки. Также гости узнают о всех тонкостях профессии «художественный руководитель». Во второй части программы пройдет актерский тренинг, а затем участники создадут посох китайского императора.',
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
    'Участники познакомятся с оперой Н.А. Римского-Корсакова «Сказка о царе Салтане» по мотивам произведения А.С. Пушкина. Гости узнают, как назывался город, которым правил царь Гвидон, и почему эскизы декораций, созданные Михаилом Врубелем, напоминают мозаику из драгоценных камней. Также участники узнают, кто такой театральный художник, и создадут театральный костюм Волны.',
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
    'Участники встречи познакомятся с профессией «режиссер» и узнают, как в постановке спектакля Евгения Вахтангова «Принцесса Турандот» старинная китайская сказка сочеталась с современностью. Затем юные гости попробуют расшифровать три загадки мудрецов. Во второй части программы участники пройдут актерский тренинг и изготовят оригинальную комикс-книжку по мотивам спектакля на мастер-классе.',
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
    'Мероприятие, где юные гости будут артистами, сценаристами, художниками, костюмерами и даже гримерами! Участники узнают, с чего начинается театр, нарисуют билеты, создадут свой образ и выйдут на сцену как артисты. В программе: театральные игры, импровизации и настоящий спектакль-сказка, где каждый ребенок сыграет своего персонажа, а родители будут зрителями. Это театр, где играют дети, но интересно будет и взрослым.',
  ],
});

export const page13Config = buildConfig({
  title: 'ТОЧКА ЗА ТОЧКОЙ, ИЛИ УСПОКАИВАЮЩИЕ РИСУНКИ',
  themeTag: THEME_DEFAULT,
  image: page13Image,
  imageAlt: 'Фото занятия «Точка за точкой, или успокаивающие рисунки»',
  ticketUrl: PAGE_TICKET_URLS.page13,
  eventDate: '18.06.2026',
  startTime: '19:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  ageRating: '12+',
  descriptionParagraphs: DRAWING_BORDERS_DESCRIPTION,
});

export const page14Config = buildConfig({
  title: 'РАЙСКИЙ САД: РИСУЕМ БОТАНИЧЕСКИЕ УЗОРЫ',
  themeTag: THEME_DEFAULT,
  image: page14Image,
  imageAlt: 'Фото занятия «Райский сад: рисуем ботанические узоры»',
  ticketUrl: PAGE_TICKET_URLS.page14,
  eventDate: '25.06.2026',
  startTime: '19:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  ageRating: '12+',
  descriptionParagraphs: DRAWING_CYCLE_DESCRIPTION,
});

export const page15Config = buildConfig({
  title: 'ОБМАН ЗРЕНИЯ, ИЛИ ОПТИЧЕСКОЕ ИСКУССТВО',
  themeTag: THEME_DEFAULT,
  image: page15Image,
  imageAlt: 'Фото занятия «Обман зрения, или оптическое искусство»',
  ticketUrl: PAGE_TICKET_URLS.page15,
  eventDate: '16.07.2026',
  startTime: '19:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  ageRating: '12+',
  descriptionParagraphs: [
    'Участники творческой встречи станут мастерами оптического искусства: с помощью чёрных ручек и простого карандаша можно сделать композиции, которые «дышат», пульсируют или уходят в бесконечную глубину.',
    'Это занятие учит управлять восприятием зрителя, играя с контрастом, ритмом и направлением линий.',
    'Ведущая цикла – методист отдела «Мемориальный музей «Творческая мастерская театрального художника Давида Боровского» Гриценко Екатерина.',
  ],
});

export const page16Config = buildConfig({
  title: 'ЦВЕТНЫЕ СНЫ: АКВАРЕЛЬНАЯ ИМПРОВИЗАЦИЯ',
  themeTag: THEME_DEFAULT,
  image: page16Image,
  imageAlt: 'Фото занятия «Цветные сны: акварельная импровизация»',
  ticketUrl: PAGE_TICKET_URLS.page16,
  eventDate: '23.07.2026',
  startTime: '19:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  ageRating: '12+',
  descriptionParagraphs: [
    'Эта неожиданная техника дает свободу воображению и позволяет освободиться от страха белого листа.',
    'Сначала участники встречи сделают акварельные пятна-оттиски, позволив краске растечься и смешаться в случайном порядке.',
    'В полученных разводах можно будет найти силуэты, фигуры и сюжеты, и затем дорисовать их и завершить собственную фантазийную историю.',
    'Ведущая цикла – методист отдела «Мемориальный музей «Творческая мастерская театрального художника Давида Боровского» Гриценко Екатерина.',
  ],
});

export const page17Config = buildConfig({
  title: 'ВСЁ НАОБОРОТ: РИСУЕМ БЕЛЫМ ПО ЧЁРНОМУ',
  themeTag: THEME_DEFAULT,
  image: page17Image,
  imageAlt: 'Фото занятия «Всё наоборот: рисуем белым по чёрному»',
  ticketUrl: PAGE_TICKET_URLS.page17,
  eventDate: '06.08.2026',
  startTime: '19:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  ageRating: '12+',
  descriptionParagraphs: [
    'На этой творческой встрече привычные роли поменяются: фоном для рисунков станет чёрная бумага, а инструментом — белые карандаши и ручки.',
    'Участники встречи освоят «негативное рисование», постараются создать свет там, где его, казалось бы, нет.',
    'Это очень контрастная и атмосферная техника, которая приучает мыслить иначе.',
    'Ведущая цикла – методист отдела «Мемориальный музей «Творческая мастерская театрального художника Давида Боровского» Гриценко Екатерина.',
  ],
});

export const page18Config = buildConfig({
  title: 'СВЕТ ИЗ ТЕМНОТЫ: РИСУНОК ПРОЦАРАПЫВАНИЕМ',
  useCycleMeetingTitle: false,
  themeTag: THEME_DEFAULT,
  image: page18Image,
  imageAlt: 'Фото занятия «Свет из темноты: рисунок процарапыванием»',
  ticketUrl: PAGE_TICKET_URLS.page18,
  eventDate: '13.08.2026',
  startTime: '19:00',
  durationMin: DEFAULT_DURATION,
  priceRub: DEFAULT_PRICE,
  venueKey: 'borovskiy',
  ageRating: '12+',
  descriptionParagraphs: [
    'Участники мастер-класса познакомятся с эффектной техникой «граттаж», в которой нужно стирать слой чёрной краски с поверхности цветных листов бумаги с помощью острой палочки.',
    'В процессе создания рисунка каждое движение руки будет освобождать из темноты яркие линии.',
    'В такой технике будут хорошо смотреться ночные городские пейзажи, фейерверки, космические ландшафты и подводный мир, сюрреалистические сюжеты и абстракция.',
    'Ведущая цикла – методист отдела «Мемориальный музей «Творческая мастерская театрального художника Давида Боровского» Гриценко Екатерина.',
  ],
});
