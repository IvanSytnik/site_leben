import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './Slider';
import Section from './Section';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('ukr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(part => part);
    const validLanguages = ['ukr', 'de', 'eng'];

    const langFromUrl = pathParts[0];
    if (validLanguages.includes(langFromUrl)) {
      setLanguage(langFromUrl);
      const pageFromUrl = pathParts[1] || 'home';
      setCurrentPage(pageFromUrl);
    } else {
      const newPath = `/ukr${path === '/' ? '' : path}`;
      window.history.replaceState(null, '', newPath);
      setLanguage('ukr');
      setCurrentPage('home');
    }
  }, []);

  const translations = {
    ukr: {
      logoAlt: 'Lebenskapital Club',
      about: 'Про нас',
      aboutItems: [
        { label: 'Хто ми?', link: '/about-us' },
        { label: 'Наша місія', link: '/mission' },
        { label: 'Метод Lebenskapital', link: '/method' },
        { label: 'Команда', link: '/team' },
      ],
      activities: 'Наша діяльність',
      activitiesItems: [
        { label: 'Фінансова гра-симулятор “Lebenskapital”', link: '/game' },
        { label: 'Індивідуальний коучинг', link: '/coaching' },
        { label: 'Освітні заходи та події', link: '/events' },
        { label: 'Робота з дітьми та молоддю', link: '/youth' },
        { label: 'Клуб підприємців', link: '/entrepreneurs' },
      ],
      sections: [
        {
          id: 'section1',
          title: 'Розділ 1',
          text: 'Опис першого розділу з мінімалістичним текстом.',
          img: 'https://via.placeholder.com/600x400?text=Розділ+1',
        },
        {
          id: 'section2',
          title: 'Розділ 2',
          text: 'Опис другого розділу з мінімалістичним текстом.',
          img: 'https://via.placeholder.com/600x400?text=Розділ+2',
        },
        {
          id: 'section3',
          title: 'Розділ 3',
          text: 'Опис третього розділу з мінімалістичним текстом.',
          img: 'https://via.placeholder.com/600x400?text=Розділ+3',
        },
        {
          id: 'section4',
          title: 'Розділ 4',
          text: 'Опис четвертого розділу з мінімалістичним текстом.',
          img: 'https://via.placeholder.com/600x400?text=Розділ+4',
        },
      ],
      register: 'Зареєструватися',
      modalTitle: 'Реєстрація',
      namePlaceholder: "Ім'я",
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Телефон',
      submit: 'Відправити',
      signUpGame: 'Записатись на гру',
      signUpCoaching: 'Записатись на коучинг',
      signUpEvent: 'Записатись на подію',
      signUpYouth: 'Записатись на заняття',
      signUpEntrepreneur: 'Приєднатися до клубу',
      aboutUs: {
        title: 'Хто ми?',
        description: (
          <>
            <strong>Lebenskapital Club</strong> — це ініціатива українців, які опинились у Німеччині після 2022 року й вирішили не просто адаптуватися, а створити нову якісну спільноту. Ми об’єдналися, щоб пройти шлях інтеграції разом — підтримуючи одне одного знаннями, практикою та командним духом.
            <br /><br />
            Проєкт заснований на живому досвіді, реальних потребах і великому потенціалі кожного, хто шукає не просто допомогу, а нове майбутнє.
            <br /><br />
            <ul>
              <li>Ми не теоретизуємо — показуємо на практиці (ігропрактика → консультація → дії)</li>
              <li>Ми не нав’язуємо — запрошуємо до участі у спільноті</li>
              <li>Ми не продаємо — ми ділимось рішенням і підтримкою</li>
            </ul>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Історія+1',
        image2: 'https://via.placeholder.com/300x200?text=Історія+2',
      },
      mission: {
        title: 'Наша місія',
        description: (
          <>
            <p>Допомогти людям здобути фінансову впевненість, підвищити рівень життя, адаптуватися та розкрити свій потенціал через освіту, спільноту та реальні дії.</p>
            <br />
            <h2>Наші цінності:</h2>
            <ul>
              <li>Людяність і взаємодопомога</li>
              <li>Прозорість і довіра</li>
              <li>Освіта та фінансова грамотність</li>
              <li>Відповідальність і ініціативність</li>
              <li>Радість і енергія життя</li>
            </ul>
            <br />
            <h2>Бачення:</h2>
            <p>Lebenskapital Club стане міжнародним прикладом живої, сильної спільноти, де кожна людина може відчути підтримку, здобути знання і діяти. Ми будуємо платформу майбутнього.</p>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Місія+1',
        image2: 'https://via.placeholder.com/300x200?text=Місія+2',
      },
      method: {
        title: 'Метод Lebenskapital',
        description: (
          <>
            <p><strong>Метод Lebenskapital — це практичний підхід до життя в новій країні через гру, досвід, знання та дію.</strong></p>
            <p>Він допомагає не лише адаптуватися, а й розвиватися у новому середовищі — впевнено, системно та людяно.</p>
            <br />
            <h2>1. ГРА</h2>
            <p><em>"Проживи — щоб зрозуміти"</em></p>
            <ul>
              <li>Настільна симуляція життя в Німеччині.</li>
              <li>Практика прийняття рішень у безпечному середовищі.</li>
              <li>Спільне переживання досвіду: житло, робота, страхування, діти, податки.</li>
              <li>Групова динаміка, рефлексія, гумор і співпраця.</li>
            </ul>
            <br />
            <h2>2. ЗНАННЯ</h2>
            <p><em>"Розуміння народжує впевненість"</em></p>
            <ul>
              <li>Фінансова грамотність у практичному форматі.</li>
              <li>Розуміння системи державних інституцій, прав і обов'язків.</li>
              <li>Мовна інтеграція через побутові ситуації та контекстні діалоги.</li>
              <li>Освітні зустрічі, майстер-класи, міні-гайди.</li>
            </ul>
            <br />
            <h2>3. ДІЯ</h2>
            <p><em>"Маленькі кроки — великі зміни"</em></p>
            <ul>
              <li>Рекомендації після гри: що зробити вже завтра.</li>
              <li>Підтримка у пошуку роботи, житла, оформленні документів.</li>
              <li>Доступ до консультацій, шаблонів, партнерських послуг.</li>
              <li>Залучення до ініціатив, волонтерства, власних проєктів.</li>
            </ul>
            <br />
            <h2>4. СПІЛЬНОТА</h2>
            <p><em>"Ти — не один(на), ми поруч"</em></p>
            <ul>
              <li>Коло довіри, де тебе чують і підтримують.</li>
              <li>Можливість знайомств, обміну досвідом, взаємодопомоги.</li>
              <li>Внутрішній розвиток через участь у клубі.</li>
              <li>Простір, де кожен може знайти себе, реалізувати ідеї та підтримати інших.</li>
            </ul>
            <br />
            <p><strong>Метод Lebenskapital — це не курс і не тренінг. Це живий процес, який розгортається крок за кроком разом з тобою.</strong></p>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Метод+1',
        image2: 'https://via.placeholder.com/300x200?text=Метод+2',
      },
      team: {
        title: 'Наша команда',
        members: [
          {
            name: 'Олена Коваленко',
            role: 'Засновниця та координаторка проєктів',
            image: 'https://via.placeholder.com/300x400?text=Олена+Коваленко',
          },
          {
            name: 'Марія Шульга',
            role: 'Фасилітаторка гри Lebenskapital',
            image: 'https://via.placeholder.com/300x400?text=Марія+Шульга',
          },
          {
            name: 'Іван Петренко',
            role: 'Експерт з фінансової грамотності',
            image: 'https://via.placeholder.com/300x400?text=Іван+Петренко',
          },
          {
            name: 'Софія Левицька',
            role: 'Координаторка спільноти та заходів',
            image: 'https://via.placeholder.com/300x400?text=Софія+Левицька',
          },
        ],
      },
      game: {
        title: 'Фінансова гра-симулятор “Lebenskapital”',
        intro: (
          <>
            <p>«Lebenskapital» — це не просто гра, це реальний досвід фінансових рішень, де ви:</p>
            <ul>
              <li>Навчитесь контролювати свої витрати та доходи</li>
              <li>Спробуєте себе у ролі підприємця та інвестора</li>
              <li>Пройдете через реалістичні життєві ситуації: від народження дітей до несподіваних витрат</li>
              <li>Зрозумієте, як будувати свій шлях до фінансової свободи</li>
            </ul>
          </>
        ),
        introImage: 'https://via.placeholder.com/600x400?text=Гра+Lebenskapital+1',
        format: (
          <>
            <h2>Формат:</h2>
            <ul>
              <li>Офлайн-гра з ведучим і учасниками</li>
              <li>Інтерактивне проходження життєвих ситуацій: житло, податки, страховки, робота, діти</li>
              <li>Механіка: командна робота, прийняття рішень, нарахування балів</li>
            </ul>
          </>
        ),
        formatImage: 'https://via.placeholder.com/600x400?text=Формат+Гри',
        goal: (
          <>
            <h2>Мета:</h2>
            <ul>
              <li>Показати через гру, як влаштоване життя в Німеччині</li>
              <li>Допомогти учасникам розібратись у термінах, механізмах, логіці системи</li>
              <li>Підготувати до наступних кроків: консультацій, дій, адаптації</li>
            </ul>
          </>
        ),
        goalImage: 'https://via.placeholder.com/600x400?text=Мета+Гри',
        values: (
          <>
            <h2>Цінності гри:</h2>
            <ul>
              <li>Безпечний простір для запитань</li>
              <li>Елемент гумору та легкості</li>
              <li>Командна взаємодія та мотивація</li>
              <li>Емоційне залучення</li>
            </ul>
          </>
        ),
        valuesImage: 'https://via.placeholder.com/600x400?text=Цінності+Гри',
        result: (
          <>
            <h2>Результат:</h2>
            <ul>
              <li>Учасник отримує не теорію, а життєвий досвід “у мініатюрі”</li>
              <li>Зникає страх перед системою</li>
              <li>З’являється бажання рухатися далі</li>
            </ul>
          </>
        ),
        resultImage: 'https://via.placeholder.com/600x400?text=Результат+Гри',
        audience: (
          <>
            <h2>Для кого?</h2>
            <p>Підлітки, студенти, дорослі, родини</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Для+Кого',
      },
      coaching: {
        title: 'Індивідуальний коучинг',
        what: (
          <>
            <h2>Що це:</h2>
            <p>Індивідуальний коучинг — це персоналізована підтримка від експерта, який допоможе вам розібратися у фінансових питаннях, поставити конкретні цілі та досягти їх. Це не просто консультація, а глибока робота над вашими запитами: від планування бюджету до створення стратегії фінансового зростання. Ви отримаєте практичні інструменти, які можна застосувати вже наступного дня.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Що+Це+Коучинг',
        why: (
          <>
            <h2>Навіщо:</h2>
            <ul>
              <li>Щоб навчитися ефективно управляти своїми фінансами в новій країні.</li>
              <li>Розібратися в складних питаннях: податки, страхування, інвестування.</li>
              <li>Отримати чіткий план дій для досягнення фінансової стабільності.</li>
              <li>Розвинути впевненість у прийнятті фінансових рішень.</li>
              <li>Знайти мотивацію та підтримку для реалізації ваших ідей і проєктів.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Навіщо+Коучинг',
        audience: (
          <>
            <h2>Для кого:</h2>
            <p>Всі охочі, хто хоче впевнено орієнтуватися у фінансових темах, підприємці та ті, хто лише планує займатися самозайнятістю та шукає інформацію, партнерства чи наставництва. Це ідеально для тих, хто прагне адаптуватися до життя в Німеччині, розвинути фінансову грамотність або запустити власну справу.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Для+Кого+Коучинг',
      },
      events: {
        title: 'Освітні заходи та події',
        what: (
          <>
            <h2>Що це:</h2>
            <p>Фінансові семінари, консультації, міні-лекції та інтерактиви, які проводяться як офлайн, так і онлайн. Ми запрошуємо експертів, які діляться своїм досвідом, а також використовуємо інтерактивні формати, щоб учасники могли одразу застосовувати отримані знання на практиці.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Що+Це+Події',
        why: (
          <>
            <h2>Навіщо:</h2>
            <ul>
              <li>Пояснити простими словами складні фінансові теми: податки, бюджет, кредити, страхування.</li>
              <li>Дати практичні інструменти для управління особистими фінансами.</li>
              <li>Допомогти учасникам зрозуміти, як працює фінансова система в Німеччині.</li>
              <li>Створити простір для обміну досвідом і нетворкінгу.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Навіщо+Події',
        audience: (
          <>
            <h2>Для кого:</h2>
            <p>Всі охочі, хто хоче впевнено орієнтуватися у фінансових темах: від новачків, які тільки починають розбиратися, до тих, хто вже має базові знання, але прагне поглибити їх і отримати експертну підтримку.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Для+Кого+Події',
      },
      youth: {
        title: 'Робота з дітьми та молоддю',
        what: (
          <>
            <h2>Що це:</h2>
            <p>Інтерактивні заняття, ігри та воркшопи для дітей і молоді, які вчать фінансовій грамотності через гру та практичні завдання. Ми адаптуємо складні фінансові концепції до рівня розуміння молодших учасників, використовуючи історії, приклади та веселі активності.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Що+Це+Молодь',
        why: (
          <>
            <h2>Навіщо:</h2>
            <ul>
              <li>Навчити дітей і молодь основам фінансової грамотності з раннього віку.</li>
              <li>Розвинути відповідальне ставлення до грошей і вміння планувати.</li>
              <li>Підготувати молоде покоління до фінансових викликів у дорослому житті.</li>
              <li>Дати базові знання про заощадження, бюджетування та розумне споживання.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Навіщо+Молодь',
        audience: (
          <>
            <h2>Для кого:</h2>
            <p>Діти від 8 до 16 років, а також молодь до 25 років, які хочуть отримати базові знання про фінанси в легкій і зрозумілій формі, а також їхні батьки, які прагнуть допомогти своїм дітям сформувати фінансову відповідальність.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Для+Кого+Молодь',
      },
      entrepreneurs: {
        title: 'Клуб підприємців',
        what: (
          <>
            <h2>Що це:</h2>
            <p>Спільнота для підприємців і тих, хто хоче розпочати власну справу. Це регулярні зустрічі, майстер-класи, нетворкінг-сесії та обмін досвідом, де учасники можуть знайти партнерів, отримати підтримку та дізнатися про можливості розвитку бізнесу в Німеччині.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Що+Це+Клуб',
        why: (
          <>
            <h2>Навіщо:</h2>
            <ul>
              <li>Створити простір для обміну досвідом між підприємцями.</li>
              <li>Допомогти новачкам запустити власний бізнес: від ідеї до реалізації.</li>
              <li>Надати доступ до знань про особливості ведення бізнесу в Німеччині (податки, юридичні аспекти, маркетинг).</li>
              <li>Сприяти створенню партнерств і нових проєктів.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Навіщо+Клуб',
        audience: (
          <>
            <h2>Для кого:</h2>
            <p>Діючі підприємці, самозайняті особи, а також ті, хто лише планує відкрити власну справу і шукає підтримку, знання та ком’юніті для розвитку своїх ідей.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Для+Кого+Клуб',
      },
      footer: {
        logo: 'Lebenskapital Club',
        sections: [
          { title: 'Про нас', items: ['Хто ми?', 'Наша місія', 'Наша команда'] },
          { title: 'Діяльність', items: ['Зустрічі та програми', 'Події та ігри', 'Волонтерство'] },
          { title: 'Долучитись', items: ['Стати учасником', 'Стати волонтером', 'Написати нам'] },
        ],
        social: {
          title: 'Слідкуйте за нами',
          icons: ['instagram', 'facebook', 'telegram'],
        },
        questions: 'Зв’яжіться з нами: info@lebenskapital.club | © 2025 Lebenskapital Club',
      },
    },
    de: {
      logoAlt: 'Lebenskapital Club',
      about: 'Über uns',
      aboutItems: [
        { label: 'Wer wir sind', link: '/about-us' },
        { label: 'Unsere Mission', link: '/mission' },
        { label: 'Methode Lebenskapital', link: '/method' },
        { label: 'Team', link: '/team' },
      ],
      activities: 'Unsere Aktivitäten',
      activitiesItems: [
        { label: 'Finanzsimulationsspiel “Lebenskapital”', link: '/game' },
        { label: 'Individuelles Coaching', link: '/coaching' },
        { label: 'Bildungsveranstaltungen und Events', link: '/events' },
        { label: 'Arbeit mit Kindern und Jugendlichen', link: '/youth' },
        { label: 'Unternehmerclub', link: '/entrepreneurs' },
      ],
      sections: [
        {
          id: 'section1',
          title: 'Abschnitt 1',
          text: 'Beschreibung des ersten Abschnitts mit minimalistischem Text.',
          img: 'https://via.placeholder.com/600x400?text=Abschnitt+1',
        },
        {
          id: 'section2',
          title: 'Abschnitt 2',
          text: 'Beschreibung des zweiten Abschnitts mit minimalistischem Text.',
          img: 'https://via.placeholder.com/600x400?text=Abschnitt+2',
        },
        {
          id: 'section3',
          title: 'Abschnitt 3',
          text: 'Beschreibung des dritten Abschnitts mit minimalistischem Text.',
          img: 'https://via.placeholder.com/600x400?text=Abschnitt+3',
        },
        {
          id: 'section4',
          title: 'Abschnitt 4',
          text: 'Beschreibung des vierten Abschnitts mit minimalistischem Text.',
          img: 'https://via.placeholder.com/600x400?text=Abschnitt+4',
        },
      ],
      register: 'Registrieren',
      modalTitle: 'Registrierung',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Telefon',
      submit: 'Absenden',
      signUpGame: 'Für das Spiel anmelden',
      signUpCoaching: 'Für Coaching anmelden',
      signUpEvent: 'Für die Veranstaltung anmelden',
      signUpYouth: 'Für Kurse anmelden',
      signUpEntrepreneur: 'Dem Club beitreten',
      aboutUs: {
        title: 'Wer wir sind',
        description: (
          <>
            <strong>Lebenskapital Club</strong> ist eine Initiative von Ukrainern, die nach 2022 nach Deutschland gekommen sind und beschlossen haben, sich nicht nur anzupassen, sondern eine neue, hochwertige Gemeinschaft zu schaffen. Wir haben uns zusammengeschlossen, um den Weg der Integration gemeinsam zu gehen – indem wir uns gegenseitig mit Wissen, Praxis und Teamgeist unterstützen.
            <br /><br />
            Das Projekt basiert auf realen Erfahrungen, echten Bedürfnissen und dem großen Potenzial jedes Einzelnen, der nicht nur Hilfe sucht, sondern eine neue Zukunft.
            <br /><br />
            <ul>
              <li>Wir theoretisieren nicht – wir zeigen es in der Praxis (Spielpraxis → Beratung → Aktionen)</li>
              <li>Wir drängen nicht auf – wir laden zur Teilnahme an der Gemeinschaft ein</li>
              <li>Wir verkaufen nicht – wir teilen Lösungen und Unterstützung</li>
            </ul>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Geschichte+1',
        image2: 'https://via.placeholder.com/300x200?text=Geschichte+2',
      },
      mission: {
        title: 'Unsere Mission',
        description: (
          <>
            <p>Menschen dabei helfen, finanzielle Sicherheit zu erlangen, ihre Lebensqualität zu steigern, sich anzupassen und ihr Potenzial durch Bildung, Gemeinschaft und konkrete Maßnahmen zu entfalten.</p>
            <br />
            <h2>Unsere Werte:</h2>
            <ul>
              <li>Menschlichkeit und gegenseitige Hilfe</li>
              <li>Transparenz und Vertrauen</li>
              <li>Bildung und finanzielle Kompetenz</li>
              <li>Verantwortung und Eigeninitiative</li>
              <li>Freude und Lebensenergie</li>
            </ul>
            <br />
            <h2>Vision:</h2>
            <p>Lebenskapital Club wird ein internationales Beispiel für eine lebendige, starke Gemeinschaft werden, in der jede Person Unterstützung spüren, Wissen erlangen und handeln kann. Wir bauen eine Plattform der Zukunft.</p>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Mission+1',
        image2: 'https://via.placeholder.com/300x200?text=Mission+2',
      },
      method: {
        title: 'Methode Lebenskapital',
        description: (
          <>
            <p><strong>Die Methode Lebenskapital ist ein praktischer Ansatz für das Leben in einem neuen Land durch Spiel, Erfahrung, Wissen und Handeln.</strong></p>
            <p>Sie hilft nicht nur, sich anzupassen, sondern sich in einer neuen Umgebung sicher, systematisch und menschlich weiterzuentwickeln.</p>
            <br />
            <h2>1. SPIEL</h2>
            <p><em>"Erlebe – um zu verstehen"</em></p>
            <ul>
              <li>Brettspiel-Simulation des Lebens in Deutschland.</li>
              <li>Praxis der Entscheidungsfindung in einer sicheren Umgebung.</li>
              <li>Gemeinsames Erleben von Erfahrungen: Wohnen, Arbeit, Versicherung, Kinder, Steuern.</li>
              <li>Gruppendynamik, Reflexion, Humor und Zusammenarbeit.</li>
            </ul>
            <br />
            <h2>2. WISSEN</h2>
            <p><em>"Verständnis schafft Selbstvertrauen"</em></p>
            <ul>
              <li>Finanzielle Kompetenz in praktischer Form.</li>
              <li>Verständnis für staatliche Institutionen, Rechte und Pflichten.</li>
              <li>Sprachliche Integration durch Alltagssituationen und kontextbezogene Dialoge.</li>
              <li>Bildungstreffen, Workshops, Mini-Guides.</li>
            </ul>
            <br />
            <h2>3. HANDLUNG</h2>
            <p><em>"Kleine Schritte – große Veränderungen"</em></p>
            <ul>
              <li>Empfehlungen nach dem Spiel: Was du schon morgen tun kannst.</li>
              <li>Unterstützung bei der Jobsuche, Wohnungssuche, Behördengängen.</li>
              <li>Zugang zu Beratungen, Vorlagen, Partnerdiensten.</li>
              <li>Einbindung in Initiativen, Freiwilligenarbeit, eigene Projekte.</li>
            </ul>
            <br />
            <h2>4. GEMEINSCHAFT</h2>
            <p><em>"Du bist nicht allein, wir sind bei dir"</em></p>
            <ul>
              <li>Ein Kreis des Vertrauens, in dem du gehört und unterstützt wirst.</li>
              <li>Möglichkeit, Kontakte zu knüpfen, Erfahrungen auszutauschen, sich gegenseitig zu helfen.</li>
              <li>Persönliche Entwicklung durch die Teilnahme am Club.</li>
              <li>Ein Raum, in dem jeder sich selbst finden, Ideen umsetzen und andere unterstützen kann.</li>
            </ul>
            <br />
            <p><strong>Die Methode Lebenskapital ist kein Kurs und kein Training. Es ist ein lebendiger Prozess, der Schritt für Schritt gemeinsam mit dir entfaltet wird.</strong></p>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Methode+1',
        image2: 'https://via.placeholder.com/300x200?text=Methode+2',
      },
      team: {
        title: 'Unser Team',
        members: [
          {
            name: 'Olena Kowalenko',
            role: 'Gründerin und Projektkoordinatorin',
            image: 'https://via.placeholder.com/300x400?text=Olena+Kowalenko',
          },
          {
            name: 'Maria Schulga',
            role: 'Moderatorin des Spiels Lebenskapital',
   image: 'https://via.placeholder.com/300x400?text=Maria+Schulga',
          },
          {
            name: 'Iwan Petrenko',
            role: 'Experte für finanzielle Kompetenz',
            image: 'https://via.placeholder.com/300x400?text=Iwan+Petrenko',
          },
          {
            name: 'Sofia Lewytska',
            role: 'Koordinatorin der Gemeinschaft und Veranstaltungen',
            image: 'https://via.placeholder.com/300x400?text=Sofia+Lewytska',
          },
        ],
      },
      game: {
        title: 'Finanzsimulationsspiel “Lebenskapital”',
        intro: (
          <>
            <p>„Lebenskapital“ ist nicht nur ein Spiel, sondern eine echte Erfahrung mit finanziellen Entscheidungen, bei der Sie:</p>
            <ul>
              <li>Lernen, Ihre Ausgaben und Einnahmen zu kontrollieren</li>
              <li>Sich als Unternehmer und Investor versuchen</li>
              <li>Realistische Lebenssituationen durchlaufen: vom Kinder kriegen bis zu unerwarteten Ausgaben</li>
              <li>Verstehen, wie Sie Ihren Weg zur finanziellen Freiheit gestalten können</li>
            </ul>
          </>
        ),
        introImage: 'https://via.placeholder.com/600x400?text=Spiel+Lebenskapital+1',
        format: (
          <>
            <h2>Format:</h2>
            <ul>
              <li>Offline-Spiel mit Moderator und Teilnehmern</li>
              <li>Interaktives Durchlaufen von Lebenssituationen: Wohnen, Steuern, Versicherungen, Arbeit, Kinder</li>
              <li>Spielmechanik: Teamarbeit, Entscheidungsfindung, Punktevergabe</li>
            </ul>
          </>
        ),
        formatImage: 'https://via.placeholder.com/600x400?text=Spielformat',
        goal: (
          <>
            <h2>Ziel:</h2>
            <ul>
              <li>Durch das Spiel zeigen, wie das Leben in Deutschland funktioniert</li>
              <li>Den Teilnehmern helfen, Begriffe, Mechanismen und die Logik des Systems zu verstehen</li>
              <li>Auf die nächsten Schritte vorbereiten: Beratung, Aktionen, Anpassung</li>
            </ul>
          </>
        ),
        goalImage: 'https://via.placeholder.com/600x400?text=Spielziel',
        values: (
          <>
            <h2>Werte des Spiels:</h2>
            <ul>
              <li>Ein sicherer Raum für Fragen</li>
              <li>Ein Hauch von Humor und Leichtigkeit</li>
              <li>Teaminteraktion und Motivation</li>
              <li>Emotionale Einbindung</li>
            </ul>
          </>
        ),
        valuesImage: 'https://via.placeholder.com/600x400?text=Spielwerte',
        result: (
          <>
            <h2>Ergebnis:</h2>
            <ul>
              <li>Der Teilnehmer erhält keine Theorie, sondern eine „Miniatur“-Lebenserfahrung</li>
              <li>Die Angst vor dem System verschwindet</li>
              <li>Es entsteht der Wunsch, weiterzumachen</li>
            </ul>
          </>
        ),
        resultImage: 'https://via.placeholder.com/600x400?text=Spielergebnis',
        audience: (
          <>
            <h2>Für wen?</h2>
            <p>Jugendliche, Studenten, Erwachsene, Familien</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Für+Wen',
      },
      coaching: {
        title: 'Individuelles Coaching',
        what: (
          <>
            <h2>Was ist das:</h2>
            <p>Individuelles Coaching ist eine personalisierte Unterstützung durch einen Experten, der Ihnen hilft, finanzielle Fragen zu klären, konkrete Ziele zu setzen und diese zu erreichen. Es geht nicht nur um Beratung, sondern um eine tiefgehende Arbeit an Ihren Anliegen: von der Budgetplanung bis zur Erstellung einer Strategie für finanzielles Wachstum. Sie erhalten praktische Werkzeuge, die Sie bereits am nächsten Tag anwenden können.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Was+Ist+Coaching',
        why: (
          <>
            <h2>Wozu:</h2>
            <ul>
              <li>Um effektiv mit Ihren Finanzen in einem neuen Land umzugehen.</li>
              <li>Um komplexe Themen zu verstehen: Steuern, Versicherungen, Investitionen.</li>
              <li>Einen klaren Aktionsplan zur Erreichung finanzieller Stabilität zu erhalten.</li>
              <li>Selbstvertrauen bei finanziellen Entscheidungen zu entwickeln.</li>
              <li>Motivation und Unterstützung für die Umsetzung Ihrer Ideen und Projekte zu finden.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Wozu+Coaching',
        audience: (
          <>
            <h2>Für wen:</h2>
            <p>Alle, die sich sicher in finanziellen Themen zurechtfinden möchten, Unternehmer sowie diejenigen, die eine Selbstständigkeit planen und nach Informationen, Partnerschaften oder Mentoring suchen. Es ist ideal für diejenigen, die sich an das Leben in Deutschland anpassen, ihre finanzielle Kompetenz erweitern oder ein eigenes Unternehmen gründen möchten.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Für+Wen+Coaching',
      },
      events: {
        title: 'Bildungsveranstaltungen und Events',
        what: (
          <>
            <h2>Was ist das:</h2>
            <p>Finanzseminare, Beratungen, Kurzvorträge und interaktive Formate, die sowohl offline als auch online stattfinden. Wir laden Experten ein, die ihre Erfahrungen teilen, und nutzen interaktive Formate, damit die Teilnehmer das Gelernte direkt in der Praxis anwenden können.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Was+Ist+Events',
        why: (
          <>
            <h2>Wozu:</h2>
            <ul>
              <li>Komplexe Finanzthemen einfach erklären: Steuern, Budget, Kredite, Versicherungen.</li>
              <li>Praktische Werkzeuge für die Verwaltung persönlicher Finanzen vermitteln.</li>
              <li>Den Teilnehmern helfen zu verstehen, wie das Finanzsystem in Deutschland funktioniert.</li>
              <li>Einen Raum für Erfahrungsaustausch und Networking schaffen.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Wozu+Events',
        audience: (
          <>
            <h2>Für wen:</h2>
            <p>Alle, die sich sicher in Finanzthemen zurechtfinden möchten: von Anfängern, die gerade erst anfangen, sich einzuarbeiten, bis hin zu denen, die bereits über Grundkenntnisse verfügen, aber diese vertiefen und Unterstützung von Experten erhalten möchten.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Für+Wen+Events',
      },
      youth: {
        title: 'Arbeit mit Kindern und Jugendlichen',
        what: (
          <>
            <h2>Was ist das:</h2>
            <p>Interaktive Kurse, Spiele und Workshops für Kinder und Jugendliche, die finanzielle Kompetenz durch Spiele und praktische Aufgaben vermitteln. Wir passen komplexe Finanzkonzepte an das Verständnisniveau jüngerer Teilnehmer an und nutzen Geschichten, Beispiele und unterhaltsame Aktivitäten.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Was+Ist+Youth',
        why: (
          <>
            <h2>Wozu:</h2>
            <ul>
              <li>Kindern und Jugendlichen frühzeitig die Grundlagen finanzieller Kompetenz beizubringen.</li>
              <li>Ein verantwortungsvolles Verhältnis zu Geld und Planungsfähigkeiten zu entwickeln.</li>
              <li>Die junge Generation auf finanzielle Herausforderungen im Erwachsenenleben vorzubereiten.</li>
              <li>Grundkenntnisse über Sparen, Budgetierung und bewussten Konsum zu vermitteln.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Wozu+Youth',
        audience: (
          <>
            <h2>Für wen:</h2>
            <p>Kinder von 8 bis 16 Jahren sowie Jugendliche bis 25 Jahre, die grundlegende Finanzkenntnisse auf einfache und verständliche Weise erwerben möchten, sowie deren Eltern, die ihren Kindern helfen möchten, finanzielle Verantwortung zu entwickeln.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Für+Wen+Youth',
      },
      entrepreneurs: {
        title: 'Unternehmerclub',
        what: (
          <>
            <h2>Was ist das:</h2>
            <p>Eine Gemeinschaft für Unternehmer und diejenigen, die ein eigenes Unternehmen gründen möchten. Dies sind regelmäßige Treffen, Masterclasses, Networking-Sessions und Erfahrungsaustausch, bei denen die Teilnehmer Partner finden, Unterstützung erhalten und mehr über Geschäftsmöglichkeiten in Deutschland erfahren können.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=Was+Ist+Club',
        why: (
          <>
            <h2>Wozu:</h2>
            <ul>
              <li>Einen Raum für den Erfahrungsaustausch zwischen Unternehmern schaffen.</li>
              <li>Anfängern helfen, ein eigenes Unternehmen zu starten: von der Idee bis zur Umsetzung.</li>
              <li>Zugang zu Wissen über die Besonderheiten der Geschäftsführung in Deutschland bieten (Steuern, rechtliche Aspekte, Marketing).</li>
              <li>Die Schaffung von Partnerschaften und neuen Projekten fördern.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Wozu+Club',
        audience: (
          <>
            <h2>Für wen:</h2>
            <p>Aktive Unternehmer, Selbstständige sowie diejenigen, die ein eigenes Unternehmen gründen möchten und nach Unterstützung, Wissen und einer Gemeinschaft für die Entwicklung ihrer Ideen suchen.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Für+Wen+Club',
      },
      footer: {
        logo: 'Lebenskapital Club',
        sections: [
          { title: 'Über uns', items: ['Wer wir sind', 'Unsere Mission', 'Unser Team'] },
          { title: 'Aktivitäten', items: ['Treffen und Programme', 'Veranstaltungen und Spiele', 'Freiwilligenarbeit'] },
          { title: 'Mitmachen', items: ['Teilnehmer werden', 'Freiwilliger werden', 'Kontaktieren Sie uns'] },
        ],
        social: {
          title: 'Folgen Sie uns',
          icons: ['instagram', 'facebook', 'telegram'],
        },
        questions: 'Kontaktieren Sie uns: info@lebenskapital.club | © 2025 Lebenskapital Club',
      },
    },
    eng: {
      logoAlt: 'Lebenskapital Club',
      about: 'About Us',
      aboutItems: [
        { label: 'Who We Are', link: '/about-us' },
        { label: 'Our Mission', link: '/mission' },
        { label: 'Lebenskapital Method', link: '/method' },
        { label: 'Team', link: '/team' },
      ],
      activities: 'Our Activities',
      activitiesItems: [
        { label: 'Financial Simulation Game “Lebenskapital”', link: '/game' },
        { label: 'Individual Coaching', link: '/coaching' },
        { label: 'Educational Events and Activities', link: '/events' },
        { label: 'Work with Children and Youth', link: '/youth' },
        { label: 'Entrepreneur Club', link: '/entrepreneurs' },
      ],
      sections: [
        {
          id: 'section1',
          title: 'Section 1',
          text: 'Description of the first section with minimalistic text.',
          img: 'https://via.placeholder.com/600x400?text=Section+1',
        },
        {
          id: 'section2',
          title: 'Section 2',
          text: 'Description of the second section with minimalistic text.',
          img: 'https://via.placeholder.com/600x400?text=Section+2',
        },
        {
          id: 'section3',
          title: 'Section 3',
          text: 'Description of the third section with minimalistic text.',
          img: 'https://via.placeholder.com/600x400?text=Section+3',
        },
        {
          id: 'section4',
          title: 'Section 4',
          text: 'Description of the fourth section with minimalistic text.',
          img: 'https://via.placeholder.com/600x400?text=Section+4',
        },
      ],
      register: 'Register',
      modalTitle: 'Registration',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone',
      submit: 'Submit',
      signUpGame: 'Sign Up for the Game',
      signUpCoaching: 'Sign Up for Coaching',
      signUpEvent: 'Sign Up for the Event',
      signUpYouth: 'Sign Up for Classes',
      signUpEntrepreneur: 'Join the Club',
      aboutUs: {
        title: 'Who We Are',
        description: (
          <>
            <strong>Lebenskapital Club</strong> is an initiative by Ukrainians who arrived in Germany after 2022 and decided not just to adapt, but to create a new, high-quality community. We came together to navigate the path of integration as a team – supporting each other with knowledge, practice, and a sense of unity.
            <br /><br />
            The project is built on real-life experience, genuine needs, and the great potential of everyone seeking not just help, but a new future.
            <br /><br />
            <ul>
              <li>We don’t theorize – we demonstrate in practice (game practice → consultation → actions)</li>
              <li>We don’t impose – we invite you to join the community</li>
              <li>We don’t sell – we share solutions and support</li>
            </ul>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=History+1',
        image2: 'https://via.placeholder.com/300x200?text=History+2',
      },
      mission: {
        title: 'Our Mission',
        description: (
          <>
            <p>Help people gain financial confidence, improve their quality of life, adapt, and unlock their potential through education, community, and real actions.</p>
            <br />
            <h2>Our Values:</h2>
            <ul>
              <li>Humanity and mutual help</li>
              <li>Transparency and trust</li>
              <li>Education and financial literacy</li>
              <li>Responsibility and initiative</li>
              <li>Joy and energy of life</li>
            </ul>
            <br />
            <h2>Vision:</h2>
            <p>Lebenskapital Club will become an international example of a vibrant, strong community where every person can feel supported, gain knowledge, and take action. We are building a platform for the future.</p>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Mission+1',
        image2: 'https://via.placeholder.com/300x200?text=Mission+2',
      },
      method: {
        title: 'Lebenskapital Method',
        description: (
          <>
            <p><strong>The Lebenskapital Method is a practical approach to living in a new country through play, experience, knowledge, and action.</strong></p>
            <p>It helps not only to adapt but also to grow in a new environment—confidently, systematically, and humanely.</p>
            <br />
            <h2>1. GAME</h2>
            <p><em>"Live – to understand"</em></p>
            <ul>
              <li>Board game simulation of life in Germany.</li>
              <li>Practice decision-making in a safe environment.</li>
              <li>Shared experience: housing, work, insurance, children, taxes.</li>
              <li>Group dynamics, reflection, humor, and collaboration.</li>
            </ul>
            <br />
            <h2>2. KNOWLEDGE</h2>
            <p><em>"Understanding breeds confidence"</em></p>
            <ul>
              <li>Financial literacy in a practical format.</li>
              <li>Understanding the system of state institutions, rights, and responsibilities.</li>
              <li>Language integration through everyday situations and contextual dialogues.</li>
              <li>Educational meetups, workshops, mini-guides.</li>
            </ul>
            <br />
            <h2>3. ACTION</h2>
            <p><em>"Small steps – big changes"</em></p>
            <ul>
              <li>Post-game recommendations: what to do as early as tomorrow.</li>
              <li>Support in finding a job, housing, and handling paperwork.</li>
              <li>Access to consultations, templates, and partner services.</li>
              <li>Involvement in initiatives, volunteering, and personal projects.</li>
            </ul>
            <br />
            <h2>4. COMMUNITY</h2>
            <p><em>"You are not alone, we are here for you"</em></p>
            <ul>
              <li>A circle of trust where you are heard and supported.</li>
              <li>Opportunities for networking, experience sharing, and mutual help.</li>
              <li>Personal growth through participation in the club.</li>
              <li>A space where everyone can find themselves, realize ideas, and support others.</li>
            </ul>
            <br />
            <p><strong>The Lebenskapital Method is not a course or a training. It’s a living process that unfolds step by step together with you.</strong></p>
          </>
        ),
        image1: 'https://via.placeholder.com/600x400?text=Method+1',
        image2: 'https://via.placeholder.com/300x200?text=Method+2',
      },
      team: {
        title: 'Our Team',
        members: [
          {
            name: 'Olena Kovalenko',
            role: 'Founder and Project Coordinator',
            image: 'https://via.placeholder.com/300x400?text=Olena+Kovalenko',
          },
          {
            name: 'Maria Shulga',
            role: 'Lebenskapital Game Facilitator',
            image: 'https://via.placeholder.com/300x400?text=Maria+Shulga',
          },
          {
            name: 'Ivan Petrenko',
            role: 'Financial Literacy Expert',
            image: 'https://via.placeholder.com/300x400?text=Ivan+Petrenko',
          },
          {
            name: 'Sofia Levytska',
            role: 'Community and Events Coordinator',
            image: 'https://via.placeholder.com/300x400?text=Sofia+Levytska',
          },
        ],
      },
      game: {
        title: 'Financial Simulation Game “Lebenskapital”',
        intro: (
          <>
            <p>“Lebenskapital” is not just a game; it’s a real experience with financial decisions, where you:</p>
            <ul>
              <li>Learn to control your expenses and income</li>
              <li>Try your hand at being an entrepreneur and investor</li>
              <li>Navigate realistic life situations: from having children to unexpected expenses</li>
              <li>Understand how to build your path to financial freedom</li>
            </ul>
          </>
        ),
        introImage: 'https://via.placeholder.com/600x400?text=Game+Lebenskapital+1',
        format: (
          <>
            <h2>Format:</h2>
            <ul>
              <li>Offline game with a facilitator and participants</li>
              <li>Interactive navigation of life situations: housing, taxes, insurance, work, children</li>
              <li>Mechanics: teamwork, decision-making, point scoring</li>
            </ul>
          </>
        ),
        formatImage: 'https://via.placeholder.com/600x400?text=Game+Format',
        goal: (
          <>
            <h2>Goal:</h2>
            <ul>
              <li>Show through the game how life in Germany works</li>
              <li>Help participants understand terms, mechanisms, and system logic</li>
              <li>Prepare for the next steps: consultations, actions, adaptation</li>
            </ul>
          </>
        ),
        goalImage: 'https://via.placeholder.com/600x400?text=Game+Goal',
        values: (
          <>
            <h2>Game Values:</h2>
            <ul>
              <li>A safe space for questions</li>
              <li>An element of humor and ease</li>
              <li>Team interaction and motivation</li>
              <li>Emotional engagement</li>
            </ul>
          </>
        ),
        valuesImage: 'https://via.placeholder.com/600x400?text=Game+Values',
        result: (
          <>
            <h2>Result:</h2>
            <ul>
              <li>Participants gain not theory, but a “miniature” life experience</li>
              <li>Fear of the system disappears</li>
              <li>A desire to move forward emerges</li>
            </ul>
          </>
        ),
        resultImage: 'https://via.placeholder.com/600x400?text=Game+Result',
        audience: (
          <>
            <h2>Who is it for?</h2>
            <p>Teenagers, students, adults, families</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Who+Is+It+For',
      },
      coaching: {
        title: 'Individual Coaching',
        what: (
          <>
            <h2>What is it:</h2>
            <p>Individual coaching is personalized support from an expert who will help you navigate financial matters, set specific goals, and achieve them. It’s not just a consultation, but a deep dive into your needs: from budgeting to creating a strategy for financial growth. You’ll receive practical tools that you can apply the very next day.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=What+Is+Coaching',
        why: (
          <>
            <h2>Why:</h2>
            <ul>
              <li>To learn how to effectively manage your finances in a new country.</li>
              <li>To understand complex topics: taxes, insurance, investments.</li>
              <li>To get a clear action plan for achieving financial stability.</li>
              <li>To build confidence in making financial decisions.</li>
              <li>To find motivation and support for realizing your ideas and projects.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Why+Coaching',
        audience: (
          <>
            <h2>Who is it for:</h2>
            <p>Anyone eager to confidently navigate financial topics, entrepreneurs, and those planning to become self-employed and seeking information, partnerships, or mentorship. It’s perfect for those looking to adapt to life in Germany, improve their financial literacy, or start their own business.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Who+Is+It+For+Coaching',
      },
      events: {
        title: 'Educational Events and Activities',
        what: (
          <>
            <h2>What is it:</h2>
            <p>Financial seminars, consultations, mini-lectures, and interactive sessions held both offline and online. We invite experts to share their experiences and use interactive formats so participants can immediately apply what they’ve learned in practice.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=What+Is+Events',
        why: (
          <>
            <h2>Why:</h2>
            <ul>
              <li>To explain complex financial topics in simple terms: taxes, budgeting, loans, insurance.</li>
              <li>To provide practical tools for managing personal finances.</li>
              <li>To help participants understand how the financial system in Germany works.</li>
              <li>To create a space for experience sharing and networking.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Why+Events',
        audience: (
          <>
            <h2>Who is it for:</h2>
            <p>Anyone eager to confidently navigate financial topics: from beginners just starting out to those with basic knowledge who want to deepen their understanding and receive expert support.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Who+Is+It+For+Events',
      },
      youth: {
        title: 'Work with Children and Youth',
        what: (
          <>
            <h2>What is it:</h2>
            <p>Interactive classes, games, and workshops for children and youth that teach financial literacy through play and practical tasks. We adapt complex financial concepts to the understanding level of younger participants using stories, examples, and fun activities.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=What+Is+Youth',
        why: (
          <>
            <h2>Why:</h2>
            <ul>
              <li>To teach children and youth the basics of financial literacy from an early age.</li>
              <li>To develop a responsible attitude toward money and planning skills.</li>
              <li>To prepare the younger generation for financial challenges in adulthood.</li>
              <li>To provide basic knowledge about saving, budgeting, and mindful consumption.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Why+Youth',
        audience: (
          <>
            <h2>Who is it for:</h2>
            <p>Children aged 8 to 16 and youth up to 25 years who want to gain basic financial knowledge in an easy and understandable way, as well as their parents who aim to help their children build financial responsibility.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Who+Is+It+For+Youth',
      },
      entrepreneurs: {
        title: 'Entrepreneur Club',
        what: (
          <>
            <h2>What is it:</h2>
            <p>A community for entrepreneurs and those who want to start their own business. These are regular meetings, masterclasses, networking sessions, and experience sharing, where participants can find partners, gain support, and learn about business development opportunities in Germany.</p>
          </>
        ),
        whatImage: 'https://via.placeholder.com/600x400?text=What+Is+Club',
        why: (
          <>
            <h2>Why:</h2>
            <ul>
              <li>To create a space for entrepreneurs to exchange experiences.</li>
              <li>To help beginners launch their own business: from idea to implementation.</li>
              <li>To provide access to knowledge about the specifics of running a business in Germany (taxes, legal aspects, marketing).</li>
              <li>To foster partnerships and new projects.</li>
            </ul>
          </>
        ),
        whyImage: 'https://via.placeholder.com/600x400?text=Why+Club',
        audience: (
          <>
            <h2>Who is it for:</h2>
            <p>Active entrepreneurs, self-employed individuals, and those planning to start their own business and seeking support, knowledge, and a community to develop their ideas.</p>
          </>
        ),
        audienceImage: 'https://via.placeholder.com/600x400?text=Who+Is+It+For+Club',
      },
      footer: {
        logo: 'Lebenskapital Club',
        sections: [
          { title: 'About Us', items: ['Who We Are', 'Our Mission', 'Our Team'] },
          { title: 'Activities', items: ['Meetings and Programs', 'Events and Games', 'Volunteering'] },
          { title: 'Get Involved', items: ['Become a Participant', 'Become a Volunteer', 'Contact Us'] },
        ],
        social: {
          title: 'Follow Us',
          icons: ['instagram', 'facebook', 'telegram'],
        },
        questions: 'Contact us: info@lebenskapital.club | © 2025 Lebenskapital Club',
      },
    },
  };

  const t = translations[language];
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(part => part);
    const currentLang = pathParts[0];
    const restOfPath = pathParts.slice(1).join('/') || '';
    const validLanguages = ['ukr', 'de', 'eng'];

    if (validLanguages.includes(currentLang)) {
      const newPath = `/${lang}${restOfPath ? '/' + restOfPath : ''}`;
      window.history.pushState(null, '', newPath);
    } else {
      const newPath = `/${lang}${path === '/' ? '' : path}`;
      window.history.pushState(null, '', newPath);
    }
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  const getLocalizedLink = (link) => {
    return `/${language}${link}`;
  };

  const AboutUsPage = () => (
    <div className="page-content">
      <div className="page-section">
        <img src={t.aboutUs.image1} alt="History" className="page-image" />
        <div className="page-text">
          <h1>{t.aboutUs.title}</h1>
          <p>{t.aboutUs.description}</p>
        </div>
      </div>
      <div className="page-footer-image">
        <img src={t.aboutUs.image2} alt="Additional History" />
      </div>
    </div>
  );

  const MissionPage = () => (
    <div className="page-content">
      <div className="page-section">
        <img src={t.mission.image1} alt="Mission" className="page-image" />
        <div className="page-text">
          <h1>{t.mission.title}</h1>
          <p>{t.mission.description}</p>
        </div>
      </div>
      <div className="page-footer-image">
        <img src={t.mission.image2} alt="Additional Mission" />
      </div>
    </div>
  );

  const MethodPage = () => (
    <div className="page-content">
      <div className="page-section">
        <img src={t.method.image1} alt="Method" className="page-image" />
        <div className="page-text">
          <h1>{t.method.title}</h1>
          <p>{t.method.description}</p>
        </div>
      </div>
      <div className="page-footer-image">
        <img src={t.method.image2} alt="Additional Method" />
      </div>
    </div>
  );

  const TeamPage = () => (
    <div className="page-content">
      <h1>{t.team.title}</h1>
      <div className="team-grid">
        {t.team.members.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const GamePage = () => (
    <div className="page-content">
      <h1>{t.game.title}</h1>
      <div className="game-section game-section-left">
        <img src={t.game.introImage} alt="Game Intro" className="game-image" />
        <div className="game-text">
          {t.game.intro}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.game.format}
        </div>
        <img src={t.game.formatImage} alt="Game Format" className="game-image" />
      </div>
      <div className="game-section game-section-left">
        <img src={t.game.goalImage} alt="Game Goal" className="game-image" />
        <div className="game-text">
          {t.game.goal}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.game.values}
        </div>
        <img src={t.game.valuesImage} alt="Game Values" className="game-image" />
      </div>
      <div className="game-section game-section-left">
        <img src={t.game.resultImage} alt="Game Result" className="game-image" />
        <div className="game-text">
          {t.game.result}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.game.audience}
        </div>
        <img src={t.game.audienceImage} alt="Game Audience" className="game-image" />
      </div>
      <div className="game-signup">
        <button className="btn game-signup-btn" onClick={() => setIsModalOpen(true)}>
          {t.signUpGame}
        </button>
      </div>
    </div>
  );

  const CoachingPage = () => (
    <div className="page-content">
      <h1>{t.coaching.title}</h1>
      <div className="game-section game-section-left">
        <img src={t.coaching.whatImage} alt="Coaching What" className="game-image" />
        <div className="game-text">
          {t.coaching.what}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.coaching.why}
        </div>
        <img src={t.coaching.whyImage} alt="Coaching Why" className="game-image" />
      </div>
      <div className="game-section game-section-left">
        <img src={t.coaching.audienceImage} alt="Coaching Audience" className="game-image" />
        <div className="game-text">
          {t.coaching.audience}
        </div>
      </div>
      <div className="game-signup">
        <button className="btn game-signup-btn" onClick={() => setIsModalOpen(true)}>
          {t.signUpCoaching}
        </button>
      </div>
    </div>
  );

  const EventsPage = () => (
    <div className="page-content">
      <h1>{t.events.title}</h1>
      <div className="game-section game-section-left">
        <img src={t.events.whatImage} alt="Events What" className="game-image" />
        <div className="game-text">
          {t.events.what}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.events.why}
        </div>
        <img src={t.events.whyImage} alt="Events Why" className="game-image" />
      </div>
      <div className="game-section game-section-left">
        <img src={t.events.audienceImage} alt="Events Audience" className="game-image" />
        <div className="game-text">
          {t.events.audience}
        </div>
      </div>
      <div className="game-signup">
        <button className="btn game-signup-btn" onClick={() => setIsModalOpen(true)}>
          {t.signUpEvent}
        </button>
      </div>
    </div>
  );

  const YouthPage = () => (
    <div className="page-content">
      <h1>{t.youth.title}</h1>
      <div className="game-section game-section-left">
        <img src={t.youth.whatImage} alt="Youth What" className="game-image" />
        <div className="game-text">
          {t.youth.what}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.youth.why}
        </div>
        <img src={t.youth.whyImage} alt="Youth Why" className="game-image" />
      </div>
      <div className="game-section game-section-left">
        <img src={t.youth.audienceImage} alt="Youth Audience" className="game-image" />
        <div className="game-text">
          {t.youth.audience}
        </div>
      </div>
      <div className="game-signup">
        <button className="btn game-signup-btn" onClick={() => setIsModalOpen(true)}>
          {t.signUpYouth}
        </button>
      </div>
    </div>
  );
  const Footer = () => (
    <footer className="footer">
      <div className="footer-logo">
        <h3>{t.footer.logo}</h3>
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h4>{t.footer.sections[0].title}</h4>
          <ul>
            <li><a href={getLocalizedLink('/about-us')}>{t.footer.sections[0].items[0]}</a></li>
            <li><a href={getLocalizedLink('/mission')}>{t.footer.sections[0].items[1]}</a></li>
            <li><a href={getLocalizedLink('/team')}>{t.footer.sections[0].items[2]}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t.footer.sections[1].title}</h4>
          <ul>
            <li><a href={getLocalizedLink('/youth')}>{t.footer.sections[1].items[0]}</a></li>
            <li><a href={getLocalizedLink('/events')}>{t.footer.sections[1].items[1]}</a></li>
            <li><a href={getLocalizedLink('/volunteering')}>{t.footer.sections[1].items[2]}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t.footer.sections[2].title}</h4>
          <ul>
            <li onClick={() => setIsModalOpen(true)}>{t.footer.sections[2].items[0]}</li>
            <li onClick={() => setIsModalOpen(true)}>{t.footer.sections[2].items[1]}</li>
            <li><a href="mailto:info@lebenskapital.club">{t.footer.sections[2].items[2]}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h4>{t.footer.social.title}</h4>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="social-icon" />
          </a>
        </div>
      </div>
      <p>{t.footer.questions}</p>
    </footer>
  );
  const EntrepreneursPage = () => (
    <div className="page-content">
      <h1>{t.entrepreneurs.title}</h1>
      <div className="game-section game-section-left">
        <img src={t.entrepreneurs.whatImage} alt="Entrepreneur Club What" className="game-image" />
        <div className="game-text">
          {t.entrepreneurs.what}
        </div>
      </div>
      <div className="game-section game-section-right">
        <div className="game-text">
          {t.entrepreneurs.why}
        </div>
        <img src={t.entrepreneurs.whyImage} alt="Entrepreneur Club Why" className="game-image" />
      </div>
      <div className="game-section game-section-left">
        <img src={t.entrepreneurs.audienceImage} alt="Entrepreneur Club Audience" className="game-image" />
        <div className="game-text">
          {t.entrepreneurs.audience}
        </div>
      </div>
      <div className="game-signup">
        <button className="btn game-signup-btn" onClick={() => setIsModalOpen(true)}>
          {t.signUpEntrepreneur}
        </button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-logo">
          <img src="/images/logo.png" alt={t.logoAlt} className="logo" onClick={goToHome} style={{ cursor: 'pointer' }} />
        </div>
        <div className="burger" onClick={toggleMenu}>☰</div>
        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <div className={`dropdown ${openDropdown === 'about' ? 'active' : ''}`}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('about')}>
              {t.about}
            </button>
            <div className="dropdown-menu">
              {t.aboutItems.map((item, index) => (
                <a key={index} href={getLocalizedLink(item.link)} className="dropdown-item">{item.label}</a>
              ))}
            </div>
          </div>
          <div className={`dropdown ${openDropdown === 'activities' ? 'active' : ''}`}>
            <button className="dropdown-toggle" onClick={() => toggleDropdown('activities')}>
              {t.activities}
            </button>
            <div className="dropdown-menu">
              {t.activitiesItems.map((item, index) => (
                <a key={index} href={getLocalizedLink(item.link)} className="dropdown-item">{item.label}</a>
              ))}
            </div>
          </div>
          <div className="nav-languages">
            <button onClick={() => changeLanguage('ukr')} className={language === 'ukr' ? 'active' : ''}>УКР</button>
            <button onClick={() => changeLanguage('de')} className={language === 'de' ? 'active' : ''}>DE</button>
            <button onClick={() => changeLanguage('eng')} className={language === 'eng' ? 'active' : ''}>ENG</button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <>
          <Slider />
          {t.sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              text={section.text}
              img={section.img}
              onRegister={() => setIsModalOpen(true)}
              registerText={t.register}
            />
          ))}
        </>
      ) : currentPage === 'about-us' ? (
        <AboutUsPage />
      ) : currentPage === 'mission' ? (
        <MissionPage />
      ) : currentPage === 'method' ? (
        <MethodPage />
      ) : currentPage === 'team' ? (
        <TeamPage />
      ) : currentPage === 'game' ? (
        <GamePage />
      ) : currentPage === 'coaching' ? (
        <CoachingPage />
      ) : currentPage === 'events' ? (
        <EventsPage />
      ) : currentPage === 'youth' ? (
        <YouthPage />
      ) : currentPage === 'entrepreneurs' ? (
        <EntrepreneursPage />
      ) : (
        <div className="page-content">
          <h1>Сторінка не знайдена</h1>
          <p>Перевірте URL або поверніться на головну сторінку.</p>
        </div>
      )}
<Footer />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} translations={t} />}
    </div>
  );
}

export default App;