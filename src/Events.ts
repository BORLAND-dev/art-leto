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
import drawingBordersImage from './static/images/18.06.jpg';
import drawingCycleImage from './static/images/25,06.jpg';
import julyOpticalImage from './static/images/16,07.jpg';
import julyWatercolorImage from './static/images/23,07.jpg';
import augustReverseImage from './static/images/06,08.jpg';
import augustScratchImage from './static/images/13,08.jpg';

const venueTag = 'Дом-музей М.С. Щепкина';
/** Музей-мастерская Д. Боровского — метка на карточках */
const borovskiyVenueCard = 'Музей-мастерская Д. Боровского';

const DRAWING_CARD_DESCRIPTION =
	'На встрече участники познакомятся с популярным методом создания узоров из простых повторяющихся элементов. Работая чёрными ручками на белой бумаге, начинающие мастера шаг за шагом заполнят пространство листа ритмичными орнаментами. Эта медитативная практика докажет: красивый рисунок может получиться у всех.';

const DRAWING_CYCLE_CARD_DESCRIPTION =
	'Эта безмятежная летняя встреча будет посвящена природным мотивам: цветы, листья и стебли превратятся в декоративные паттерны. Участники освоят простые приемы стилизации и создадут свой ботанический сад на бумаге, наполненный изящными линиями и органичными формами.';

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
		'Участникам предстоит погрузиться в волшебный мир сказки братьев Гримм про Гензель и Гретель, а также познакомиться с одноименной оперой Энгельберта Хумпердинка. Юные гости узнают о том, кто такой сценограф, и примут участие в игре, посвященной декорациям двух великих мастеров: Михаила Врубеля и Василия Поленова. В завершении программы участники изготовят бутафорские пряники.',
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
		'Сказки Ханса Кристиана Андерсена знают все, но не все знают, когда появился первый спектакль по его произведениям на русском языке. На встрече участники познакомятся с первыми театральными постановками по сказкам Андерсена, узнают о профессии писателя и его роли в создании спектакля. В завершении программы гости примут участие в мастер-классе по изготовлению волшебной палочки.',
};

/** Первая карточка только в ряду «август» (row === 2) */
const augustFirstCard: Omit<IEvent, 'id'> = {
	title: 'СОЛОВЕЙ',
	ticketLink: '',
	eventLink: '/Pages/Page9',
	imageLink: soloveyImage,
	type: '',
	eventDateTime: '6.08 15:00',
	tagVenue: borovskiyVenueCard,
	description:
		'На встрече участники познакомятся с волшебной сказкой Ханса Кристиана Андерсена «Соловей» и яркими красивыми персонажами одноименной театральной постановки. Также гости узнают о всех тонкостях профессии «художественный руководитель». Во второй части программы пройдет актерский тренинг, а затем участники создадут посох китайского императора.',
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
		'Участники познакомятся с оперой Н.А. Римского-Корсакова «Сказка о царе Салтане» по мотивам произведения А.С. Пушкина. Гости узнают, как назывался город, которым правил царь Гвидон, и почему эскизы декораций, созданные Михаилом Врубелем, напоминают мозаику из драгоценных камней. Также участники узнают, кто такой театральный художник, и создадут театральный костюм Волны.',
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
		'Участники встречи познакомятся с профессией «режиссер» и узнают, как в постановке спектакля Евгения Вахтангова «Принцесса Турандот» старинная китайская сказка сочеталась с современностью. Затем юные гости попробуют расшифровать три загадки мудрецов. Во второй части программы участники пройдут актерский тренинг и изготовят оригинальную комикс-книжку по мотивам спектакля на мастер-классе.',
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
		'Мероприятие, где юные гости будут артистами, сценаристами, художниками, костюмерами и даже гримерами! Участники узнают, с чего начинается театр, нарисуют билеты, создадут свой образ и выйдут на сцену как артисты. В программе: театральные игры, импровизации и настоящий спектакль-сказка, где каждый ребенок сыграет своего персонажа, а родители будут зрителями. Это театр, где играют дети, но интересно будет и взрослым.',
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
		'Опера С.С. Прокофьева «Любовь к трем апельсинам» — это фантастическая феерия со смешным, а иногда и страшным сюжетом. Участники познакомятся с прекрасной музыкой Сергея Прокофьева и веселым сказочным сюжетом оперы, а также узнают о профессии «композитор» и о том, как создавалась эта опера. На практической части юные гости пройдут актерский тренинг и изготовят волшебную поварешку страшной кухарки.',
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
			'На встрече участники познакомятся с музыкальным произведением композитора Н.А. Римского-Корсакова - оперой «Золотой петушок», узнают об удивительных по красоте декорациях и о роли художника по костюмам. На актерском тренинге они потренируют дикцию с помощью скороговорок и перевоплотятся в одного из сказочных героев сказки А.С. Пушкина. А затем создадут своего собственного Золотого Петушка.',
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
			'На встрече участники узнают об уникальном жанре «оперетта» и о профессии «костюмер». Юные гости познакомятся с загадочной историей двух девушек-близнецов из оперетты Шарля Лекока «Жирофле-Жирофля» и особенностями ее авангардной постановки. В завершении программы участники пройдут актерский тренинг, а на мастер-классе изготовят два бутафорских бантика.',
	},
	{
		title: 'ТОЧКА ЗА ТОЧКОЙ, ИЛИ УСПОКАИВАЮЩИЕ РИСУНКИ',
		ticketLink: '',
		eventLink: '/Pages/Page13',
		imageLink: drawingBordersImage,
		type: '',
		eventDateTime: '18.06 19:00',
		tagVenue: borovskiyVenueCard,
		ageRating: '12+',
		description: DRAWING_CARD_DESCRIPTION,
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
	{
		title: 'РАЙСКИЙ САД: РИСУЕМ БОТАНИЧЕСКИЕ УЗОРЫ',
		ticketLink: '',
		eventLink: '/Pages/Page14',
		imageLink: drawingCycleImage,
		type: '',
		eventDateTime: '25.06 19:00',
		tagVenue: borovskiyVenueCard,
		ageRating: '12+',
		description: DRAWING_CYCLE_CARD_DESCRIPTION,
	},
];

const julyOpticalArtCard: Omit<IEvent, 'id'> = {
	title: 'ОБМАН ЗРЕНИЯ, ИЛИ ОПТИЧЕСКОЕ ИСКУССТВО',
	ticketLink: '',
	eventLink: '/Pages/Page15',
	imageLink: julyOpticalImage,
	type: '',
	eventDateTime: '16.07 19:00',
	tagVenue: borovskiyVenueCard,
	ageRating: '12+',
	description:
		'Участники творческой встречи станут мастерами оптического искусства: с помощью чёрных ручек и простого карандаша можно сделать композиции, которые «дышат», пульсируют или уходят в бесконечную глубину. Это занятие учит управлять восприятием зрителя, играя с контрастом, ритмом и направлением линий.',
};

const julyWatercolorCard: Omit<IEvent, 'id'> = {
	title: 'ЦВЕТНЫЕ СНЫ: АКВАРЕЛЬНАЯ ИМПРОВИЗАЦИЯ',
	ticketLink: '',
	eventLink: '/Pages/Page16',
	imageLink: julyWatercolorImage,
	type: '',
	eventDateTime: '23.07 19:00',
	tagVenue: borovskiyVenueCard,
	ageRating: '12+',
	description:
		'Эта неожиданная техника дает свободу воображению и позволяет освободиться от страха белого листа. Сначала участники встречи сделают акварельные пятна-оттиски, позволив краске растечься и смешаться в случайном порядке. В полученных разводах можно будет найти силуэты, фигуры и сюжеты, и затем дорисовать их и завершить собственную фантазийную историю.',
};

const augustReverseDrawingCard: Omit<IEvent, 'id'> = {
	title: 'ВСЁ НАОБОРОТ: РИСУЕМ БЕЛЫМ ПО ЧЁРНОМУ',
	ticketLink: '',
	eventLink: '/Pages/Page17',
	imageLink: augustReverseImage,
	type: '',
	eventDateTime: '6.08 19:00',
	tagVenue: borovskiyVenueCard,
	ageRating: '12+',
	description:
		'На этой творческой встрече привычные роли поменяются: фоном для рисунков станет чёрная бумага, а инструментом — белые карандаши и ручки. Участники встречи освоят «негативное рисование», постараются создать свет там, где его, казалось бы, нет. Это очень контрастная и атмосферная техника, которая приучает мыслить иначе.',
};

const augustScratchDrawingCard: Omit<IEvent, 'id'> = {
	title: 'СВЕТ ИЗ ТЕМНОТЫ: РИСУНОК ПРОЦАРАПЫВАНИЕМ',
	ticketLink: '',
	eventLink: '/Pages/Page18',
	imageLink: augustScratchImage,
	type: '',
	eventDateTime: '13.08 19:00',
	tagVenue: borovskiyVenueCard,
	ageRating: '12+',
	description:
		'Участники мастер-класса познакомятся с эффектной техникой «граттаж», в которой нужно стирать слой чёрной краски с поверхности цветных листов бумаги с помощью острой палочки. В процессе создания рисунка каждое движение руки будет освобождать из темноты яркие линии.',
};

const julyRow: Omit<IEvent, 'id'>[] = [
	julyFirstCard,
	julySecondCard,
	julyThirdCard,
	julyOpticalArtCard,
	julyFourthCard,
	julyWatercolorCard,
];

const augustRow: Omit<IEvent, 'id'>[] = [
	augustFirstCard,
	augustReverseDrawingCard,
	augustSecondCard,
	augustScratchDrawingCard,
	augustThirdCard,
	augustFourthCard,
];

function assignIds(monthGroups: Omit<IEvent, 'id'>[][]): IEvent[] {
	let id = 1;
	return monthGroups.flatMap((group, monthIndex) =>
		group.map((event) => ({ ...event, id: id++, monthIndex }))
	);
}

const testEvents: IEvent[] = assignIds([baseRow, julyRow, augustRow]);

export default testEvents;
