import React from 'react';

import './Admin.scss';

export const Admin:React.FC = () => {
  const modules = [
    {
      id: 1,
      name: 'Intro',
      links : [
        { 
          linkName: 'Getting to Know the Speaker: An introduction',
          linkUrl: '#'
        },
        { 
          linkName: 'Exploring Main Fears: Addressing criticism, judgment, voice confidence, and expertise doubts',
          linkUrl: '#'
        },
        { 
          linkName: 'Envision achievements without fear of speaking',
          linkUrl: '#'
        },
        { 
          linkName: 'TED Talks: Utilizing this platform to enhance soft skills.',
          linkUrl: '#'
        },
        { 
          linkName: 'Crafting a Self-Presentation: A step-by-step guide',
          linkUrl: '#'
        },
        { 
          linkName: 'Homework',
          linkUrl: '#'
        },
      ],
      meditation: 'Module 1 Name Meditation*',
    },
    {
      id: 2,
      name: 'Overcoming Insecure Sounding',
      links : [
        { 
          linkName: 'Getting to Know the Speaker: An introduction',
          linkUrl: '#'
        },
        { 
          linkName: 'Exploring Main Fears: Addressing criticism, judgment, voice confidence, and expertise doubts',
          linkUrl: '#'
        },
        { 
          linkName: 'Envision achievements without fear of speaking',
          linkUrl: '#'
        },
        { 
          linkName: 'TED Talks: Utilizing this platform to enhance soft skills.',
          linkUrl: '#'
        },
        { 
          linkName: 'Crafting a Self-Presentation: A step-by-step guide',
          linkUrl: '#'
        },
        { 
          linkName: 'Homework',
          linkUrl: '#'
        },
      ],
      meditation: 'Module 2 Name Meditation*',
    },
    {
      id: 3,
      name: 'Improving Presentation Skills',
      links : [
        { 
          linkName: 'Getting to Know the Speaker: An introduction',
          linkUrl: '#'
        },
        { 
          linkName: 'Exploring Main Fears: Addressing criticism, judgment, voice confidence, and expertise doubts',
          linkUrl: '#'
        },
        { 
          linkName: 'Envision achievements without fear of speaking',
          linkUrl: '#'
        },
        { 
          linkName: 'TED Talks: Utilizing this platform to enhance soft skills.',
          linkUrl: '#'
        },
        { 
          linkName: 'Crafting a Self-Presentation: A step-by-step guide',
          linkUrl: '#'
        },
        { 
          linkName: 'Homework',
          linkUrl: '#'
        },
      ],
      meditation: 'Module 3 Name Meditation*',
    },
    {
      id: 4,
      name: 'Conducting HR Interviews Without Pressure',
      links : [
        { 
          linkName: 'Getting to Know the Speaker: An introduction',
          linkUrl: '#'
        },
        { 
          linkName: 'Exploring Main Fears: Addressing criticism, judgment, voice confidence, and expertise doubts',
          linkUrl: '#'
        },
        { 
          linkName: 'Envision achievements without fear of speaking',
          linkUrl: '#'
        },
        { 
          linkName: 'TED Talks: Utilizing this platform to enhance soft skills.',
          linkUrl: '#'
        },
        { 
          linkName: 'Crafting a Self-Presentation: A step-by-step guide',
          linkUrl: '#'
        },
        { 
          linkName: 'Homework',
          linkUrl: '#'
        },
      ],
      meditation: 'Module 4 Name Meditation*',
    },
    {
      id: 5,
      name: 'Final assessment at the end of the course',
      links : [
        { 
          linkName: 'Getting to Know the Speaker: An introduction',
          linkUrl: '#'
        },
        { 
          linkName: 'Exploring Main Fears: Addressing criticism, judgment, voice confidence, and expertise doubts',
          linkUrl: '#'
        },
        { 
          linkName: 'Envision achievements without fear of speaking',
          linkUrl: '#'
        },
        { 
          linkName: 'TED Talks: Utilizing this platform to enhance soft skills.',
          linkUrl: '#'
        },
        { 
          linkName: 'Crafting a Self-Presentation: A step-by-step guide',
          linkUrl: '#'
        },
        { 
          linkName: 'Homework',
          linkUrl: '#'
        },
      ],
      meditation: 'Module 5 Name Meditation*',
    },
  ];
  return (
    <div className="adminPage">
      <nav className="adminPage__nav">
        <h1 className="adminPage__nav__title">
          Admin cabinet
        </h1>
        <ul className="adminPage__nav__list">
          <li className="adminPage__nav__list__item">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.00098" cy="6.5" r="4" fill="#959595"/>
              <ellipse cx="9.00098" cy="17.501" rx="7" ry="4" fill="#959595"/>
              <path d="M20.9996 17.5005C20.9996 19.1573 18.9641 20.5004 16.4788 20.5004C17.211 19.7001 17.7145 18.6955 17.7145 17.5018C17.7145 16.3068 17.2098 15.3013 16.4762 14.5005C18.9615 14.5005 20.9996 15.8436 20.9996 17.5005Z" fill="#959595"/>
              <path d="M17.9996 6.50073C17.9996 8.15759 16.6565 9.50073 14.9996 9.50073C14.6383 9.50073 14.292 9.43687 13.9712 9.31981C14.4443 8.48772 14.7145 7.52522 14.7145 6.49962C14.7145 5.47477 14.4447 4.51294 13.9722 3.68127C14.2927 3.56446 14.6387 3.50073 14.9996 3.50073C16.6565 3.50073 17.9996 4.84388 17.9996 6.50073Z" fill="#959595"/>
            </svg>
            <span>Users</span>
          </li>
          <li className="adminPage__nav__list__item adminPage__nav__list__item--active">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16.6436V5.4978C2 4.39963 2.8863 3.50752 3.9824 3.57489C4.95877 3.6349 6.11349 3.75351 7 3.98744C8.04921 4.26431 9.29611 4.85401 10.2823 5.37546C10.5893 5.53782 10.9158 5.65044 11.25 5.71394L11.25 20.8926C10.9471 20.8258 10.6515 20.718 10.3724 20.5692C9.37293 20.0365 8.08145 19.4187 7 19.1334C6.12329 18.902 4.98428 18.7835 4.01486 18.7228C2.90605 18.6535 2 17.7546 2 16.6436Z" fill="#0E0E0E"/>
              <path d="M12.75 20.8926C13.0529 20.8258 13.3485 20.718 13.6276 20.5692C14.6271 20.0365 15.9185 19.4187 17 19.1334C17.8767 18.902 19.0157 18.7835 19.9851 18.7228C21.094 18.6535 22 17.7546 22 16.6436V5.43319C22 4.36075 21.1538 3.48041 20.082 3.51775C18.9534 3.55706 17.5469 3.67403 16.5 3.98744C15.5924 4.25916 14.5353 4.80418 13.6738 5.30275C13.3824 5.47145 13.0708 5.59535 12.75 5.67391L12.75 20.8926Z" fill="#0E0E0E"/>
            </svg>
            <span>Courses</span>
          </li>
          <li className="adminPage__nav__list__item">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1835 8.30516L16.2188 5.33755C14.1921 3.3089 13.1788 2.29457 12.0904 2.53468C11.0021 2.7748 10.5086 4.12155 9.5217 6.81506L8.85373 8.6381C8.59063 9.35617 8.45908 9.7152 8.22239 9.99292C8.11619 10.1175 7.99536 10.2289 7.86251 10.3245C7.56644 10.5377 7.19811 10.6392 6.46145 10.8423C4.80107 11.3 3.97088 11.5289 3.65804 12.0721C3.5228 12.3069 3.45242 12.5735 3.45413 12.8446C3.45809 13.4715 4.06698 14.081 5.28476 15.3L6.69935 16.7163L2.22345 21.1964C1.92552 21.4946 1.92552 21.9782 2.22345 22.2764C2.52138 22.5746 3.00443 22.5746 3.30236 22.2764L7.77841 17.7961L9.24441 19.2635C10.4699 20.4902 11.0827 21.1036 11.7134 21.1045C11.9792 21.1049 12.2404 21.0358 12.4713 20.9041C13.0192 20.5914 13.2493 19.7551 13.7095 18.0825C13.9119 17.3472 14.013 16.9795 14.2254 16.6835C14.3184 16.554 14.4262 16.4358 14.5468 16.3314C14.8221 16.093 15.1788 15.959 15.8922 15.691L17.7362 14.9981C20.4 13.9973 21.7319 13.4969 21.9667 12.4115C22.2014 11.326 21.1954 10.3191 19.1835 8.30516Z" fill="#959595"/>
            </svg>
            <span>Blog</span>
          </li>
          <li className="adminPage__nav__list__item">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35179 20.7418C9.19288 21.811 10.5142 22.5 12 22.5C13.4858 22.5 14.8071 21.811 15.6482 20.7418C13.2264 21.07 10.7736 21.07 8.35179 20.7418Z" fill="#959595"/>
              <path d="M18.7491 9.5V10.2041C18.7491 11.0491 18.9903 11.8752 19.4422 12.5782L20.5496 14.3012C21.5612 15.8749 20.789 18.0139 19.0296 18.5116C14.4273 19.8134 9.57274 19.8134 4.97036 18.5116C3.21105 18.0139 2.43882 15.8749 3.45036 14.3012L4.5578 12.5782C5.00972 11.8752 5.25087 11.0491 5.25087 10.2041V9.5C5.25087 5.63401 8.27256 2.5 12 2.5C15.7274 2.5 18.7491 5.63401 18.7491 9.5Z" fill="#959595"/>
            </svg>
            <span>Notifications</span>
          </li>
          <li className="adminPage__nav__list__item">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5V8.5C2 5.67157 2 4.25736 2.87868 3.37868C3.75736 2.5 5.17157 2.5 8 2.5H16C18.8284 2.5 20.2426 2.5 21.1213 3.37868C22 4.25736 22 5.67157 22 8.5V12.5C22 15.3284 22 16.7426 21.1213 17.6213C20.4749 18.2677 19.5388 18.4386 17.963 18.4838C17.9593 17.748 17.7037 17.0132 17.1961 16.4176C17.1674 16.3839 17.1501 16.342 17.1465 16.2979C17.0211 14.7264 15.7733 13.4785 14.2018 13.3531C14.1577 13.3496 14.1158 13.3322 14.0821 13.3035C12.8822 12.281 11.1174 12.281 9.91755 13.3035C9.88386 13.3322 9.84198 13.3496 9.79786 13.3531C8.22638 13.4785 6.9785 14.7264 6.85309 16.2979C6.84957 16.342 6.83222 16.3839 6.80352 16.4176C6.29595 17.0132 6.04033 17.748 6.03666 18.4838C4.4611 18.4386 3.52501 18.2677 2.87868 17.6213C2 16.7426 2 15.3284 2 12.5ZM8.25 6.5C8.25 6.08579 8.58579 5.75 9 5.75H15C15.4142 5.75 15.75 6.08579 15.75 6.5C15.75 6.91421 15.4142 7.25 15 7.25H9C8.58579 7.25 8.25 6.91421 8.25 6.5ZM7 9.25C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H7Z" fill="#959595"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1092 14.4452C12.4699 13.9004 11.5297 13.9004 10.8905 14.4452C10.6165 14.6786 10.276 14.8197 9.91719 14.8483C9.07997 14.9152 8.41515 15.58 8.34834 16.4172C8.31971 16.776 8.17863 17.1165 7.94519 17.3905C7.40043 18.0297 7.40043 18.9699 7.94519 19.6092C8.17863 19.8831 8.31971 20.2237 8.34834 20.5824C8.41515 21.4197 9.07997 22.0845 9.91719 22.1513C10.276 22.1799 10.6165 22.321 10.8905 22.5544C11.5297 23.0992 12.4699 23.0992 13.1092 22.5544C13.3831 22.321 13.7237 22.1799 14.0824 22.1513C14.9197 22.0845 15.5845 21.4197 15.6513 20.5824C15.6799 20.2237 15.821 19.8831 16.0544 19.6092C16.5992 18.9699 16.5992 18.0297 16.0544 17.3905C15.821 17.1165 15.6799 16.776 15.6513 16.4172C15.5845 15.58 14.9197 14.9152 14.0824 14.8483C13.7237 14.8197 13.3831 14.6786 13.1092 14.4452ZM14.0117 18.0483C14.3146 17.7657 14.3309 17.2911 14.0483 16.9883C13.7657 16.6855 13.2911 16.6691 12.9883 16.9517L11.3571 18.4741L11.0117 18.1517C10.7089 17.8691 10.2343 17.8855 9.95171 18.1883C9.66909 18.4911 9.68545 18.9657 9.98826 19.2483L10.8454 20.0483C11.1336 20.3172 11.5807 20.3172 11.8689 20.0483L14.0117 18.0483Z" fill="#959595"/>
            </svg>
            <span>Homework</span>
          </li>
          <li className="adminPage__nav__list__item">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9999 8.66234L21.9999 8.73487C21.9999 9.59561 21.9999 10.026 21.7927 10.3781C21.5855 10.7302 21.2093 10.9392 20.4569 11.3572L19.6636 11.798C20.2102 9.94984 20.3926 7.96414 20.4601 6.26597C20.4629 6.19316 20.4662 6.11945 20.4695 6.04497L20.4718 5.99279C21.1231 6.21896 21.4887 6.38758 21.7168 6.70408C22 7.09692 22 7.61873 21.9999 8.66234Z" fill="#959595"/>
              <path d="M2 8.66234L2 8.73487C2.00003 9.59561 2.00004 10.026 2.20723 10.3781C2.41442 10.7302 2.79063 10.9392 3.54305 11.3572L4.33681 11.7982C3.79007 9.95001 3.60767 7.96422 3.54025 6.26597C3.53736 6.19316 3.5341 6.11945 3.53081 6.04497L3.5285 5.99266C2.87701 6.2189 2.51126 6.38752 2.2831 6.70408C1.99996 7.09692 1.99997 7.61873 2 8.66234Z" fill="#959595"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3771 2.84674C15.2531 2.65709 13.7837 2.5 12.0002 2.5C10.2166 2.5 8.74724 2.65709 7.62318 2.84674C6.48445 3.03887 5.91508 3.13494 5.43937 3.72083C4.96365 4.30673 4.98879 4.93998 5.03907 6.20647C5.21169 10.5544 6.14996 15.9851 11.25 16.4657V20H9.8198C9.34312 20 8.93271 20.3365 8.83922 20.8039L8.65 21.75H6C5.58579 21.75 5.25 22.0858 5.25 22.5C5.25 22.9142 5.58579 23.25 6 23.25H18C18.4142 23.25 18.75 22.9142 18.75 22.5C18.75 22.0858 18.4142 21.75 18 21.75H15.35L15.1608 20.8039C15.0673 20.3365 14.6569 20 14.1802 20H12.75V16.4657C17.8503 15.9853 18.7886 10.5545 18.9612 6.20647C19.0115 4.93998 19.0367 4.30673 18.5609 3.72083C18.0852 3.13494 17.5159 3.03887 16.3771 2.84674Z" fill="#959595"/>
            </svg>
            <span>Success</span>
          </li>
        </ul>
      </nav>
      <section className="adminPage__content">
        <h2 className="adminPage__content__title">Courses / Preview</h2>
        <div className="adminPage__content__info">
          <div className="adminPage__content__info__name">Public speaking for IT</div>
          <div className="adminPage__content__info__add">Bonus one for free + meditation</div>
        </div>
        <div className="adminPage__content__course-type">Flexible</div>

        <div className="adminPage__content__main">
          <div className="adminPage__content__main__modules">
            {modules.map(module => (
              <div className="adminPage__content__main__modules__module">
                <div className="adminPage__content__main__modules__module__header">
                  <h3 className="adminPage__content__main__modules__module__title">
                    <span className="adminPage__content__main__modules__module__title__grey">{`Module ${module.id} `}</span>
                    {module.name}
                  </h3>
                  <div className="icon icon--opened"></div>
                </div>
                <div className="adminPage__content__main__modules__module__topics adminPage__content__main__modules__module__topics--opened">
                  {module.links.map(link => (
                    <div className="adminPage__content__main__modules__module__topic">
                      <div className="adminPage__content__main__modules__module__topic__marker"></div>
                      <a className="adminPage__content__main__modules__module__topic__link" href={link.linkUrl}>{link.linkName}</a>
                    </div>
  
                  ))}
                </div>
              </div>
            ))}
            <div className="adminPage__content__main__modules__add">
            *Access to all course materials for three months after the course is completed.
            </div>
          </div>
          <div className="adminPage__content__main__meditations">
            {modules.map(module => (
              <div className="adminPage__content__main__meditation">
                <div className="adminPage__content__main__meditation__image"></div>
                <div className="adminPage__content__main__meditation__topic">
                  <a className="adminPage__content__main__meditation__topic__link" href={'/' + module.meditation}>{module.meditation}</a>
                </div>
              </div>
            ))}

            <div className="adminPage__content__main__meditations__add">*Meditations are available according to the module </div>
          </div>
        </div>
        <div className="adminPage__content__buttons">
          <div className="adminPage__content__buttons__draft">Save as Draft</div>
          <div className="adminPage__content__buttons__save">Save Course</div>
        </div>
      </section>
    </div>
  );
};