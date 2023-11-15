import { useState } from 'react';

const DataForStudy = () => {
  const initialState = [
    {
      id: 'university',
      en: {
        id: 'higher_en',
        language: 'en',
        name: 'National Transport University',
        graduated: '2011',
        place: 'Kyiv',
        education: 'Higher',
        descr: 'the Faculty of Management and Law, Logistics',
        achievements: [
          { id: 'higher_en_1', achieve: '-Had not burn down the university;' },
          { id: 'higher_en_2', achieve: '-Red diploma' },
        ],
      },
      uk: {
        language: 'uk',
        id: 'higher_ua',
        name: 'Національний транспортний університет',
        graduated: '2011',
        place: 'Київ',
        education: 'Вища',
        descr: 'факультет Менеджменту і права, Логістика',
        achievements: [
          { id: 'higher_ua_1', achieve: '-Не спалив ВНЗ;' },
          { id: 'higher_ua_2', achieve: '-Червоний диплом' },
        ],
      },
      rise: false,
    },

    {
      id: 'courses',
      en: {
        language: 'en',
        id: 'sem_en',
        name: 'English club "SEM"',
        graduated: '2015',
        place: 'Kyiv',
        education: 'Courses',
        descr: 'English courses',
        achievements: [{ id: 'sem_en_1', achieve: "-Understood 'Passive Voice'" }],
      },
      uk: {
        language: 'uk',
        id: 'sem_en',
        name: 'Англійський клуб "СЕМ"',
        graduated: '2015',
        place: 'Київ',
        education: 'Курси',
        descr: 'Курси англійської мови',
        achievements: [{ id: 'sem_ua_1', achieve: "-Зрозумів 'Passive Voice'" }],
      },
      rise: false,
    },

    {
      id: 'school',
      en: {
        language: 'en',
        id: 'school_en',
        name: 'secondary school №306',
        graduated: '2006',
        place: 'Kyiv',
        education: 'Secondary education',
        descr: 'General secondary school',
        achievements: [
          { id: 'school_en_1', achieve: '-The class teacher helped to achieve a silver medal' },
          {
            id: 'school_en_2',
            achieve:
              '-I was one of the three most popular boys in the school according to the school-wide vote among students',
          },
        ],
      },
      uk: {
        language: 'uk',
        id: 'school_ua',
        name: 'ЗСШ №306',
        graduated: '2006',
        place: 'Київ',
        education: 'Середня',
        descr: 'Загальноосвітня середня школа',
        achievements: [
          { id: 'school_ua_1', achieve: '-Класний керівник витягнув на срібну медаль' },
          {
            id: 'school_ua_2',
            achieve:
              '-Був одним з трьох найпопулярніших хлопців школи за версією всешкільного голосування серед старшокласників',
          },
        ],
      },
      rise: false,
    },
  ];

  const [studyInfo, setStudyInfo] = useState(initialState);

  const onToggleRiseStudy = (id) => {
    setStudyInfo((studyInfo) =>
      studyInfo.map((item) => {
        item.rise = false;
        if (item.id === id) {
          item.rise = true;
        }

        return item;
      })
    );
  };

  return { studyInfo, onToggleRiseStudy };
};

export default DataForStudy;
