import { IEvent } from './types';
import borovskiyImage from './static/images/129A3768.jpg';
import borovskiyImage3 from './static/images/19.jpeg';
import borovskiyImage4 from './static/images/Жирофле.jpg';
import borovskiyImage5 from './static/images/129A8583.JPG';
import maskaradImage from './static/images/Маскарад с Головиным.jpg';
import hanzelGretelImage from './static/images/129A8560.JPG';
import loveApplesImage from './static/images/129A7489.jpg';
import andersenImage from './static/images/129A0057.JPG';
import soloveyImage from './static/images/129A6577.JPG';
import saltanImage from './static/images/129A7175.JPG';
import turandotImage from './static/images/129A0174.JPG';
import eveningImage from './static/images/DSC_9579.jpg';

const venueTag = 'Дом-музей М.С. Щепкина';
/** Мастерская Боровского — метка на карточках */
const borovskiyVenueCard = 'Мастерская Боровского';

/** Первая карточка только в ряду «июль» (row === 1) */
const julyFirstCard: Omit<IEvent, 'id'> = {
	title: 'ЖЕМЧУЖИНА АДАЛЬМИНЫ',
	ticketLink: '',
	eventLink: '/Pages/Page5',
	imageLink: maskaradImage,
	type: '',
	eventDateTime: '2.07 15:00',
	tagVenue: borovskiyVenueCard,
	description:
		'Участники занятия познакомятся с малоизвестной, но очень яркой сказочной постановкой «Жемчужина Адальмины», созданной по мотивам чудесной сказки Сакариуса Топелиуса, узнают о рождении первого государственного детского театра и о тайнах профессии «гример». На практической части программы юные участники пройдут актерский тренинг, а в завершении их ждет мастер-класс по изготовлению короны для принцессы.',
};

/** Вторая карточка только в ряду «июль» (row === 1) */
const julySecondCard: Omit<IEvent, 'id'> = {
	title: 'ГЕНЗЕЛЬ И ГРЕТЕЛЬ',
	ticketLink: '',
	eventLink: '/Pages/Page6',
	imageLink: hanzelGretelImage,
	type: '',
	eventDateTime: '7.07 15:00',
	tagVenue: venueTag,
	description:
		'Участникам предстоит погрузиться в волшебный мир сказки братьев Гримм про Гензель и Гретель, а также познакомиться с одноименной оперой Энгельберта Хумпердинка. Юные гости узнают о том, кто такой сценограф, сыграют в игру, посвященную декорациям двух великих мастеров: Врубеля и Поленова, а в завершении программы изготовят бутафорские пряники.',
};

/** Четвёртая карточка только в ряду «июль» (row === 1, col === 3) */
const julyFourthCard: Omit<IEvent, 'id'> = {
	title: 'СКАЗКИ АНДЕРСЕНА',
	ticketLink: '',
	eventLink: '/Pages/Page8',
	imageLink: andersenImage,
	type: '',
	eventDateTime: '21.07 15:00',
	tagVenue: venueTag,
	description:
		'Сказки Ханса Кристиана Андерсена знают все, но знаете ли вы, когда появился первый спектакль по его произведениям на русском языке? На занятии участники познакомятся с первыми театральными постановками по сказкам Ханса Кристиана Андерсена, узнают о профессии писателя и его роли, а в завершении пройдут мастер-класс по изготовлению волшебной палочки.',
};

/** Первая карточка только в ряду «август» (row === 2) */
const augustFirstCard: Omit<IEvent, 'id'> = {
	title: 'СОЛОВЕЙ',
	ticketLink: '',
	eventLink: '/Pages/Page9',
	imageLink: soloveyImage,
	type: '',
	eventDateTime: '6.08 15:00',
	tagVenue: venueTag,
	description:
		'На занятии мы познакомимся с волшебной сказкой Ганса Христиана Андерсена «Соловей» и яркими красивыми персонажами одноименной театральной постановки, а также узнаем о всех сложностях профессии «художественный руководитель». Во второй части занятия пройдем актерский тренинг и своими руками изготовим посох китайского императора.',
};

/** Вторая карточка только в ряду «август» (row === 2) */
const augustSecondCard: Omit<IEvent, 'id'> = {
	title: 'СКАЗКА О ЦАРЕ САЛТАНЕ',
	ticketLink: '',
	eventLink: '/Pages/Page10',
	imageLink: saltanImage,
	type: '',
	eventDateTime: '11.08 15:00',
	tagVenue: venueTag,
	description:
		'Участники познакомятся с оперой Николая Римского-Корсакова «Сказка и царе Салтане» по мотивам произведения А.С. Пушкина, узнают, как назывался город, которым правил царь Гвидон и  почему эскизы декораций, созданные Михаилом Врубелем, напоминают мозаику из драгоценных камней. Также юные гости узнают кто такой театральный художник и попробуют себя в его роли создав костюм «Волны».',
};

/** Третья карточка только в ряду «август» (row === 2) */
const augustThirdCard: Omit<IEvent, 'id'> = {
	title: 'ПРИНЦЕССА ТУРАНДОТ',
	ticketLink: '',
	eventLink: '/Pages/Page11',
	imageLink: turandotImage,
	type: '',
	eventDateTime: '20.08 15:00',
	tagVenue: borovskiyVenueCard,
	description:
		'На занятии участники познакомятся с профессией «режиссер» и узнают, как в постановке спектакля режиссера Евгения Вахтангова «Принцесса Турандот» старинная китайская сказка сочеталась с современностью и попробуют расшифровать три загадки мудрецов. На второй части программы участники пройдут актерский тренинг и мастер-класс по изготовлению комикс-книжки по мотивам спектакля.',
};

/** Четвёртая карточка только в ряду «август» (row === 2) */
const augustFourthCard: Omit<IEvent, 'id'> = {
	title: 'СКАЗОЧНАЯ ТЕАТРАЛЬНАЯ ВЕЧЕРИНКА',
	ticketLink: '',
	eventLink: '/Pages/Page12',
	imageLink: eveningImage,
	type: '',
	eventDateTime: '28.08 15:00',
	tagVenue: venueTag,
	description:
		'Мероприятие, где дети будут артистами, сценаристами, художниками, костюмерами и даже гримерами! Юные участники узнают с чего начинался театр, нарисуют билеты, создадут свой образ, придумают свой сказочный спектакль и выйдут на сцену как артисты. В программе: театральные игры, импровизации и настоящий спектакль-сказка, где каждый ребенок сыграет своего персонажа, а родители будут зрителями. Это театр, где играют дети, но интересно будет и взрослым.',
};

/** Третья карточка только в ряду «июль» (row === 1) */
const julyThirdCard: Omit<IEvent, 'id'> = {
	title: 'ЛЮБОВЬ К ТРЕМ АПЕЛЬСИНАМ',
	ticketLink: '',
	eventLink: '/Pages/Page7',
	imageLink: loveApplesImage,
	type: '',
	eventDateTime: '16.07 15:00',
	tagVenue: borovskiyVenueCard,
	description:
		'Опера С.С. Прокофьева «Любовь к трем апельсинам» — это фантастическая феерия со смешным, а иногда и страшным сюжетом. Юные участники познакомятся с прекрасной музыкой С. Прокофьева и веселым сказочным сюжетом оперы, а также узнают о профессии «композитор» и о том как создавалась эта опера. На практической части участники пройдут актерский тренинг и изготовят волшебную поварешку страшной кухарки.',
};

const baseRow: Omit<IEvent, 'id'>[] = [
	{
		title: 'С ЧЕГО НАЧИНАЕТСЯ ТЕАТР',
		ticketLink: '',
		eventLink: '/Pages/Page1',
		imageLink: borovskiyImage,
		type: '',
		eventDateTime: '1.06 15:00',
		tagVenue: venueTag,
		description:
			'Участники мастер-класса узнают, благодаря кому открылся первый в мире театральный музей и почему театр начинается не с вешалки, а с афиши, познакомятся с некоторыми театральными профессиями и попробуют выполнить упражнения по актерскому тренингу на развитие коммуникации, а также своими руками сделают афишу к собственному спектаклю.',
	},
	{
		title: 'ЗОЛОТОЙ ПЕТУШОК',
		ticketLink: '',
		eventLink: '/Pages/Page2',
		imageLink: borovskiyImage3,
		type: '',
		eventDateTime: '9.06 15:00',
		tagVenue: venueTag,
		description:
			'На занятии мы познакомимся с музыкальным произведением композитора Н. Римского-Корсакова - оперой «Золотой петушок», поговорим об удивительных по красоте декорациях и о роли художника по костюмам. Узнаем, что такое скороговорки и медленноговорки, и даже перевоплотимся в одного из сказочных героев сказки А.С. Пушкина, а также создадим своего собственного Золотого Петушка.',
	},
	{
		title: 'ЖИРОФЛЕ-ЖИРОФЛЯ',
		ticketLink: '',
		eventLink: '/Pages/Page3',
		imageLink: borovskiyImage4,
		type: '',
		eventDateTime: '18.06 15:00',
		tagVenue: borovskiyVenueCard,
		description:
			'На занятии юные участники узнают об уникальном жанре «оперетта» и о профессии «костюмер», познакомятся с загадочной историей двух девушек-близнецов из оперетты Шарля Лекока «Жирофле-Жирофля» и особенностями ее авангардной постановки. В завершении занятия участники пройдут актерский тренинг и мастер-класс по изготовлению двух бантиков.',
	},
	{
		title: 'ИВАН-ЦАРЕВИЧ',
		ticketLink: '',
		eventLink: '/Pages/Page4',
		imageLink: borovskiyImage5,
		type: '',
		eventDateTime: '23.06 15:00',
		tagVenue: venueTag,
		description:
			'Юные участники познакомятся с волшебными героями сказочной постановки спектакля «Иван-царевич» по пьесе В.И. Родиславского, погрузятся в сюжет русской сказки чтобы понять, какие испытания нужно преодолеть, чтобы победить нечистую силу, попробуют себя в роли театральных костюмеров, сыграют в игру «костюмированный переполох», а также на мастер-классе создадут свой бутафорский меч.',
	},
];

const ROW_COUNT = 3;

const testEvents: IEvent[] = Array.from({ length: ROW_COUNT }, (_, row) =>
	baseRow.map((event, col) => {
		const id = row * baseRow.length + col + 1;
		if (row === 1 && col === 0) {
			return { ...julyFirstCard, id };
		}
		if (row === 1 && col === 1) {
			return { ...julySecondCard, id };
		}
		if (row === 1 && col === 2) {
			return { ...julyThirdCard, id };
		}
		if (row === 1 && col === 3) {
			return { ...julyFourthCard, id };
		}
		if (row === 2 && col === 0) {
			return { ...augustFirstCard, id };
		}
		if (row === 2 && col === 1) {
			return { ...augustSecondCard, id };
		}
		if (row === 2 && col === 2) {
			return { ...augustThirdCard, id };
		}
		if (row === 2 && col === 3) {
			return { ...augustFourthCard, id };
		}
		return { ...event, id };
	})
).flat();

export default testEvents;
