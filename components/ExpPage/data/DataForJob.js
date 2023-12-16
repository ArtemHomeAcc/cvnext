import { useState } from 'react';

const DataForJob = () => {
  const initialState = [
    {
      id: 'vitam',
      en: {
        language: 'en',
        id: 'vitam_en',
        name: 'LLC Vitam Ukraine',
        terms: 'November 2016 - March 2022',
        time: '6 years',
        place: 'Kyiv',
        web: 'http://vitam.com.ua/',
        webToShow: 'vitam.com.ua',
        profile: 'Forwarding company:',
        descr:
          'Supply chain management of road transport for export-import operations, providing customs services.',
        position: 'Co-founder, head of the operational department',
        duties: [
          { id: 'vitam_en_1', dutie: "-Department's development strategy determination;" },
          { id: 'vitam_en_2', dutie: "-Control and assistance in the department's plans;" },
          { id: 'vitam_en_3', dutie: '-Providing Support colleagues in solving problems;' },
          { id: 'vitam_en_4', dutie: '-Training of new staff.' },
        ],
        achievements: [
          {
            id: 'vitam_en_achiev_1',
            achiev: '-Successfully entered the highly competitive market secured positions;',
          },
          {
            id: 'vitam_en_achiev_2',
            achiev: '-All target client were satisfied about our professional service;',
          },
          { id: 'vitam_en_achiev_3', achiev: '-Developed the operational department;' },
          {
            id: 'vitam_en_achiev_4',
            achiev: '-A clear system was organized, according to which the company works;',
          },
        ],
      },
      uk: {
        language: 'uk',
        id: 'vitam_ua',
        name: 'ТОВ "Вітам Україна"',
        terms: 'Листопад 2016 - Березень 2022',
        time: '6 років',
        place: 'Київ',
        web: 'http://vitam.com.ua/',
        webToShow: 'vitam.com.ua',
        profile: 'Транспортно-експедиційна компанія:',
        descr:
          'Пошук і супровід транспорту для експортно-імпортний операцій,надання митно-брокерських послуг.',
        position: 'Співзасновник, керівник оперативного відділу',
        duties: [
          { id: 'vitam_ua_1', dutie: '-Формування стратегії розвитку відділу;' },
          { id: 'vitam_ua_2', dutie: '-Контроль і допомога виконання планів відділу;' },
          {
            id: 'vitam_ua_3',
            dutie: '-Інформаційна підтримка вирішення проблем в середині компанії;',
          },
          { id: 'vitam_ua_4', dutie: '-Навчання нового персоналу.' },
        ],
        achievements: [
          {
            id: 'vitam_ua_achiev_1',
            achiev: '-Успішно увійшли на висококонкурентний ринок і закріпились;',
          },
          {
            id: 'vitam_ua_achiev_2',
            achiev:
              '-Не було втрачено жодного цільового клієнта (неодноразово отримували схвальні відгуки про нашу професійну роботу);',
          },
          { id: 'vitam_ua_achiev_3', achiev: '-Розбудовав оперативний відділ;' },
          {
            id: 'vitam_ua_achiev_4',
            achiev: '-Побудував зрозумілу систему за якої працювала команда;',
          },
        ],
      },
      rise: false,
    },

    {
      id: 'fozzy',
      en: {
        language: 'en',
        id: 'fozzy_en',
        name: 'LLC Fozzy-Food',
        terms: 'November 2012 - October 2016',
        time: '3 years and 11 months',
        place: 'Kyiv',
        web: 'https://www.fozzy.ua/ua/',
        webToShow: 'www.fozzy.ua',
        profile: 'Retail:',
        descr: 'is one of the largest trade industrial groups in Ukraine.',
        position: 'Logistics specialist',
        duties: [
          { id: 'fozzy_en_1', dutie: '-Transport search and follow import goods supply;' },
          { id: 'fozzy_en_2', dutie: '-Development of relations with haulers;' },
          { id: 'fozzy_en_3', dutie: '-Reporting to stakeholders;' },
          { id: 'fozzy_en_4', dutie: '-Financial flow control and planning.' },
        ],
        achievements: [
          { id: 'fozzy_en_achiev_1', achiev: '-Effectively controll up to 100 trucks per month;' },
          {
            id: 'fozzy_en_achiev_2',
            achiev:
              '-Developed the Baltic States direction. The flow increased from 1 truck per week to 40 truck per week;',
          },
        ],
      },
      uk: {
        language: 'uk',
        id: 'fozzy_ua',
        name: 'ТОВ "Фоззі-Фуд"',
        terms: 'Листопад 2012 - Жовтень 2016',
        time: '3 роки 11 місяців',
        place: 'Київ',
        web: 'https://www.fozzy.ua/ua/',
        webToShow: 'www.fozzy.ua',
        profile: 'Роздрібна торгівля:',
        descr: 'одна з найбільших торгово-промислових груп України.',
        position: 'Спеціаліст з логістики',
        duties: [
          { id: 'fozzy_ua_1', dutie: '-Пошук і супровід товарів в імпортному сполученні;' },
          { id: 'fozzy_ua_2', dutie: '-Розвиток відносин з контрагентами;' },
          { id: 'fozzy_ua_3', dutie: '-Звітність;' },
          { id: 'fozzy_ua_4', dutie: '-Контроль і планування фінансового потоку.' },
        ],
        achievements: [
          {
            id: 'fozzy_ua_achiev_1',
            achiev: '-Ефективно супроводжував до 100 авто в місяць (авто, які в дорозі);',
          },
          {
            id: 'fozzy_ua_achiev_2',
            achiev:
              '-Розробив напрям Прибалтики. Потік збільшився з 1 машини в тиждень на момент початку роботи до 40 авто в тиждень на момент звільнення;',
          },
        ],
      },
      rise: false,
    },

    {
      id: 'aec',
      en: {
        language: 'en',
        id: 'aec_en',
        name: 'LLC Automotiv Europe Corporation',
        terms: 'November 2011 - November 2012',
        time: '1 рік',
        place: 'Kyiv',
        web: '/before',
        webToShow: 'does not exist',
        profile: 'Automobile importer:',
        descr: 'importer of BYD cars in Ukraine.',
        position: 'Import manager',
        duties: [
          { id: 'eac_en_1', dutie: '-Agreeing on deadlines and equipment with the factory;' },
          { id: 'eac_en_2', dutie: '-Development of new ways of delivering goods;' },
          { id: 'eac_en_3', dutie: '-Reporting on delivery costs;' },
        ],
        achievements: [
          {
            id: 'eac_en_achiev_1',
            achiev:
              '-Changed the method of product delivery, thereby reduced the number of damaged products and delivery cost;',
          },
          {
            id: 'eac_en_achiev_2',
            achiev:
              '-Sent the exhibition car to Poland and returned it back, saving money on customs clearance and transportation;',
          },
        ],
      },
      uk: {
        language: 'uk',
        id: 'aec_ua',
        name: 'ТОВ "Автомотів Юроп Корпорейшн"',
        terms: 'Листопад 2011 - Листопад 2012',
        time: '1 рік',
        place: 'Київ',
        web: '/before',
        webToShow: 'не існуюча компанія',
        profile: 'Автомобільний імпортер:',
        descr: 'офіційний імпортер автомобілів BYD в Україні.',
        position: 'Менеджер ЗЕД',
        duties: [
          {
            id: 'eac_ua_1',
            dutie:
              '-Комунікація з відправником з приводу термінів готовності продукції і комплектації;',
          },
          { id: 'eac_ua_2', dutie: '-Розробка нових шляхів доставки товарів;' },
          { id: 'eac_ua_3', dutie: '-Звітність по витратам на доставку;' },
        ],
        achievements: [
          {
            id: 'eac_ua_achiev_1',
            achiev:
              '-Змінив метод доставки товару, чим зменшим кількість пошкодженої продукції і оптимізував вартість доставки;',
          },
          {
            id: 'eac_ua_achiev_2',
            achiev:
              '-Відправив виставковий екземпляр в Польщу і повернув назад, зекономивши кошти на митне оформлення і вартість транспортування в зворотному напрямку;',
          },
        ],
      },
      rise: false,
    },
  ];

  const [jobInfo, setJobInfo] = useState(initialState);

  const onToggleRise = (id) => {
    setJobInfo((jobInfo) =>
      jobInfo.map((item) => {
        console.log(item);
        item.rise = false;
        if (item.id === id) {
          item.rise = true;
        }

        return item;
      })
    );
  };

  return { jobInfo, onToggleRise };
};

export default DataForJob;
