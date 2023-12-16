import { useState } from 'react';

const DataForProjects = () => {
  const initialState = [
    {
      id: 'vitam',
      en: {
        language: 'en',
        id: 'vitam_en',
        name: 'Vitam Ukraine',
        achievements: [
          {
            id: 'vitam_en_achiev_1',
            achiev: '-I had practice with Next.js App Router approach;',
          },
          {
            id: 'vitam_en_achiev_2',
            achiev: '-Experience with CSS animation;',
          },
          { id: 'vitam_en_achiev_3', achiev: '-Better understanding of Object.entiers features;' },
          {
            id: 'vitam_en_achiev_4',
            achiev: '-Multi-Language adaptation practice;',
          },
        ],
      },
      uk: {
        language: 'uk',
        id: 'vitam_ua',
        name: 'Вітам Україна',
        achievements: [
          {
            id: 'vitam_ua_achiev_1',
            achiev: '-Практика використання App Router підходу в Next.js;',
          },
          {
            id: 'vitam_ua_achiev_2',
            achiev: '-Досвід роботи з CSS анімацією;',
          },
          { id: 'vitam_ua_achiev_3', achiev: '-Краще розуміння особливостей Object.enties;' },
          {
            id: 'vitam_ua_achiev_4',
            achiev: '-Практика багатомовної адаптації;',
          },
        ],
      },
      rise: false,
    },
  ];

  const [projectInfo, setProjectInfo] = useState(initialState);

  const onToggleProjectRise = (id) => {
    setProjectInfo((jobInfo) =>
      jobInfo.map((item) => {
        item.rise = false;
        if (item.id === id) {
          item.rise = true;
        }

        return item;
      })
    );
  };

  return { projectInfo, onToggleProjectRise };
};

export default DataForProjects;
