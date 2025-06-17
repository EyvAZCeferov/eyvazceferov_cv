// Dil Tərcümələri
const translations = {
  az: {
      cv_title: "Eyvaz Cəfərov - CV",
      name: "Eyvaz Cəfərov",
      position: "Developer",
      about_html: "2018-ci ildən proqramlaşdırma sahəsində fəaliyyət göstərirəm. Fərqli istiqamətlərdə <strong>back-end</strong> və <strong>front-end</strong> layihələrdə iştirak etmiş, geniş miqyaslı sistemlərin qurulmasında və inteqrasiyasında rol oynamışam.",
      contact_phone_label: "Telefon:",
      contact_email_label: "Email:",
      contact_address_html: "<strong>Ünvan:</strong> Bakı / Azərbaycan",
      skills_title: "Biliklər",
      skill_web: "Web Development (Laravel, Vue, Node.js)",
      skill_flutter: "Flutter",
      skill_python: "Python",
      skill_go: "Go",
      skill_design: "Photoshop, Figma",
      education_title: "Təhsil",
      edu1_title: "Azərbaycan Texniki Universiteti (2017 - 2021)",
      edu1_desc: "Çoxillik, paralel olaraq, proqramlaşdırma sahəsində təcrübə qazanmaq üçün müxtəlif layihələrdə iştirak etmişəm.",
      edu2_title: "Azərbaycan Texniki Universiteti (2021 - 2023)",
      edu2_desc: "Şəbəkə mühəndisliyi magistr",
      edu3_title: "Doğuş Universiteti (2024 - 2028) --tam uzaqdan təhsil",
      edu3_desc: "Elektrik mühəndisliyi doktorantura",
      experience_title: "İş Təcrübəsi",
      exp1_title: "Beglobe Agency (2020.05 - 2020.09)",
      exp1_desc: "Müxtəlif veb layihələrin hazırlanması və optimizasiyası.",
      exp2_title: "Globalmart Group (2022.04 - hal-hazırda)",
      exp2_desc: "eCommerce saytlarının hazırlanması və idarəedilməsi.",
      projects_title: "Layihələr",
      proj_venta_title: "Venta",
      proj_venta_desc: "İşə düzəltmə şirkəti olub, daxildə HR, maliyyə, tədbir, təlim, whatsapp, sms, faq, reception, ticket, qr kod, file transfer, task, otaq bron, mobil tətbiq kimi böyük modulları özündə cəmləyən layihə.",
      proj_enverson_title: "Enverson",
      proj_enverson_desc: "Onlayn və daxili kurs sisteminə malik böyük layihə. Dərs, material, imtahan, maliyyə, görüntülü danışıq (combo), süni intellekt analizi kimi geniş modulları var.",
      proj_digitalexam_title: "Digitalexam",
      proj_digitalexam_desc: "Pullu və pulsuz imtahanların satışına, digər şirkətlərin də imtahan paylaşmasına imkan verən, subdomain-lərlə idarə panelləri avtomatik yaradan imtahan sistemi.",
      proj_kredit_title: "kredit.bilanco.az",
      proj_kredit_desc: "AKB-yə sorğu göndərən, link yaradaraq ödəniş haqqında müştərilərə kredit verilməsinə şərait yaradan, ödənişlərin izlənilməsi üçün avtomatlaşdırılmış idarə paneli.",
      proj_alfa_title: "alfahealing.com",
      proj_alfa_desc: "Meditasiya və sağlamlıq dərslərinin satışı, bloqlar, onlayn ödəniş funksiyaları ilə hazırlanmış vebsayt.",
      proj_anthill_title: "anthill.center",
      proj_anthill_desc: "Şirkətin məhsul və xidmətlərini onlayn nümayiş etdirən, qeydiyyatdan keçmiş istifadəçilərin suallarını “yazışma bölümü” vasitəsilə yönləndirdiyi platforma.",
      proj_mebaks_title: "Mebaks",
      proj_mebaks_desc: "Mebel məhsullarının satışı üçün nəzərdə tutulmuş mobil tətbiq. iOS hissəsini hazırlamışam.",
      proj_mhm_title: "mhmsinaq.az",
      proj_mhm_desc: "Digitalexam tərzində sınaq layihəsi. Çeşidli sual tipləri, böyük verilənlər bazası, köhnə dizayna baxmayaraq güclü idarəetmə strukturu.",
      proj_samgroup_title: "samgroup.az",
      proj_samgroup_desc: "Maşın hissələrinin topdan satışını idarə edən sistem. Partnyorlar üçün şəxsi giriş, sifariş, anbar, qazanc və xərc idarəsi kimi funksionallıqlar.",
      proj_yoldash_title: "Yoldash",
      proj_yoldash_desc: "Uzaq və yaxın məsafələrdə yol maşınları ilə səyahət, müştəri və sürücülər üçün ayrıca panellər, çat, onlayn zəng, nağd/online ödəniş sistemləri.",
      proj_artvarium_title: "Artvarium",
      proj_artvarium_desc: "Ev heyvanları və bitkilərin satışı üçün onlayn mağaza. Çatdırılma üsulları, bonus sistemi, heyvan sahibləndirmə modulu və s.",
      proj_ripschool_title: "Ripschool.az",
      proj_ripschool_desc: "Kurs təqdimat saytı, xidmətə sorğu göndərmək və bloq modulları mövcuddur.",
      proj_isgenc_title: "İşgəncəmərkəz",
      proj_isgenc_desc: "Dövlət üçün qrant layihəsi, kiçik tipli sosial portal. Xəbər, hesabat, tədbir modulları vardır.",
      proj_small_title: "AzerbaijanExperts, Chinamotors, ParadiseEvents, İrs, JJPro, NuhaGroup, Globalmart.az, Butass.com",
      proj_small_desc: "Kiçik tipli, infografik tipli veb layihələr. Şirkətlər və ya təşkilatlar üçün tanıtım funksiyasını daşıyır.",
      proj_gallco_title: "gallcogroup.az",
      proj_gallco_desc: "Holding şirkətləri haqqında vizitka tipli vebsayt. Hər səhifədə bir alt-şirkət barədə məlumat təqdim edilir.",
      proj_medium_title: "Tid.az, easyedu.az, kuponum.az, organiksatinal.az, newhouse.az, binaemlak.az, propws.com, tik.az, mathx.az, ework.az",
      proj_medium_desc: "Orta ölçülü, müxtəlif sahələrə yönəlik layihələr. Bəziləri hal-hazırda aktiv deyil, bəziləri isə API inteqrasiyası, onlayn ödəniş, imtahan sistemi, kupon satışı, elan saytı kimi funksiyalara malik olub.",
      proj_lokano_title: "lokano.az",
      proj_lokano_desc: "2020-2025 arası dizaynı hazırladığımız, 2025-dən sonra isə dizaynın yeniləndiyi, lakin admin panel və databazası əvvəlki versiyada qalan bir layihə.",
      proj_kafe_title: "Kafe Buxta",
      proj_kafe_desc: "Pos cihaz və pos terminal sistemi. Satış, anbar, işçi və maaş idarəsi kimi funksiyalara sahibdir.",
  },
  ru: {
      cv_title: "Эйваз Джафаров - Резюме",
      name: "Эйваз Джафаров",
      position: "Разработчик",
      about_html: "Работаю в сфере программирования с 2018 года. Участвовал в различных <strong>back-end</strong> и <strong>front-end</strong> проектах, играл роль в создании и интеграции крупномасштабных систем.",
      contact_phone_label: "Телефон:",
      contact_email_label: "Email:",
      contact_address_html: "<strong>Адрес:</strong> Баку / Азербайджан",
      skills_title: "Навыки",
      skill_web: "Веб-разработка (Laravel, Vue, Node.js)",
      skill_flutter: "Flutter",
      skill_python: "Python",
      skill_go: "Go",
      skill_design: "Photoshop, Figma",
      education_title: "Образование",
      edu1_title: "Азербайджанский Технический Университет (2017 - 2021)",
      edu1_desc: "Параллельно с обучением, я участвовал в различных проектах для получения опыта в программировании.",
      edu2_title: "Азербайджанский Технический Университет (2021 - 2023)",
      edu2_desc: "Магистр сетевой инженерии",
      edu3_title: "Университет Догуш (2024 - 2028) --полностью удаленно",
      edu3_desc: "Докторантура по электротехнике",
      experience_title: "Опыт работы",
      exp1_title: "Beglobe Agency (2020.05 - 2020.09)",
      exp1_desc: "Разработка и оптимизация различных веб-проектов.",
      exp2_title: "Globalmart Group (2022.04 - настоящее время)",
      exp2_desc: "Разработка и управление сайтами электронной коммерции.",
      projects_title: "Проекты",
      proj_venta_title: "Venta",
      proj_venta_desc: "Проект для кадрового агентства, включающий крупные модули, такие как HR, финансы, мероприятия, тренинги, WhatsApp, SMS, FAQ, ресепшн, тикеты, QR-код, передача файлов, задачи, бронирование комнат, мобильное приложение.",
      proj_enverson_title: "Enverson",
      proj_enverson_desc: "Крупный проект с онлайн и внутренней системой курсов. Имеет обширные модули, такие как уроки, материалы, экзамены, финансы, видеозвонки (комбо), анализ с помощью искусственного интеллекта.",
      proj_digitalexam_title: "Digitalexam",
      proj_digitalexam_desc: "Система экзаменов, позволяющая продавать платные и бесплатные тесты, а также дающая возможность другим компаниям публиковать свои экзамены, автоматически создавая панели управления через поддомены.",
      proj_kredit_title: "kredit.bilanco.az",
      proj_kredit_desc: "Автоматизированная панель управления для отправки запросов в АКБ, создания ссылок для предоставления кредитов клиентам и отслеживания платежей.",
      proj_alfa_title: "alfahealing.com",
      proj_alfa_desc: "Веб-сайт для продажи уроков по медитации и здоровью, с блогами и функциями онлайн-оплаты.",
      proj_anthill_title: "anthill.center",
      proj_anthill_desc: "Платформа, демонстрирующая продукты и услуги компании онлайн, где зарегистрированные пользователи могут направлять свои вопросы через «раздел переписки».",
      proj_mebaks_title: "Mebaks",
      proj_mebaks_desc: "Мобильное приложение для продажи мебельной продукции. Я разработал iOS-часть.",
      proj_mhm_title: "mhmsinaq.az",
      proj_mhm_desc: "Пробный проект в стиле Digitalexam. Разнообразные типы вопросов, большая база данных, сильная структура управления несмотря на старый дизайн.",
      proj_samgroup_title: "samgroup.az",
      proj_samgroup_desc: "Система для управления оптовыми продажами автозапчастей. Функционал включает личный кабинет для партнеров, заказы, склад, управление доходами и расходами.",
      proj_yoldash_title: "Yoldash",
      proj_yoldash_desc: "Путешествия на попутных машинах на дальние и близкие расстояния, отдельные панели для клиентов и водителей, чат, онлайн-звонки, системы наличной/онлайн-оплаты.",
      proj_artvarium_title: "Artvarium",
      proj_artvarium_desc: "Интернет-магазин по продаже домашних животных и растений. Способы доставки, бонусная система, модуль по пристройству животных и т.д.",
      proj_ripschool_title: "Ripschool.az",
      proj_ripschool_desc: "Сайт-презентация курсов, имеются модули для отправки запросов на услуги и блог.",
      proj_isgenc_title: "İşgəncəmərkəz",
      proj_isgenc_desc: "Грантовый проект для государства, небольшой социальный портал. Имеются модули новостей, отчетов, мероприятий.",
      proj_small_title: "AzerbaijanExperts, Chinamotors, ParadiseEvents, İrs, JJPro, NuhaGroup, Globalmart.az, Butass.com",
      proj_small_desc: "Небольшие веб-проекты инфографического типа. Выполняют презентационную функцию для компаний или организаций.",
      proj_gallco_title: "gallcogroup.az",
      proj_gallco_desc: "Сайт-визитка о холдинговых компаниях. На каждой странице представлена информация о дочерней компании.",
      proj_medium_title: "Tid.az, easyedu.az, kuponum.az, organiksatinal.az, newhouse.az, binaemlak.az, propws.com, tik.az, mathx.az, ework.az",
      proj_medium_desc: "Среднемасштабные проекты, ориентированные на различные сферы. Некоторые в настоящее время неактивны, другие имели функции, такие как интеграция API, онлайн-оплата, система экзаменов, продажа купонов, сайт объявлений.",
      proj_lokano_title: "lokano.az",
      proj_lokano_desc: "Проект, дизайн которого мы разрабатывали с 2020 по 2025 год, а после 2025 года дизайн был обновлен, но админ-панель и база данных остались от предыдущей версии.",
      proj_kafe_title: "Kafe Buxta",
      proj_kafe_desc: "Система для POS-устройств и POS-терминалов. Обладает функциями управления продажами, складом, персоналом и зарплатой.",
  },
  en: {
      cv_title: "Eyvaz Jafarov - CV",
      name: "Eyvaz Jafarov",
      position: "Developer",
      about_html: "I have been working in the programming field since 2018. I have participated in various <strong>back-end</strong> and <strong>front-end</strong> projects, playing a role in the construction and integration of large-scale systems.",
      contact_phone_label: "Phone:",
      contact_email_label: "Email:",
      contact_address_html: "<strong>Address:</strong> Baku / Azerbaijan",
      skills_title: "Skills",
      skill_web: "Web Development (Laravel, Vue, Node.js)",
      skill_flutter: "Flutter",
      skill_python: "Python",
      skill_go: "Go",
      skill_design: "Photoshop, Figma",
      education_title: "Education",
      edu1_title: "Azerbaijan Technical University (2017 - 2021)",
      edu1_desc: "In parallel with my multi-year studies, I participated in various projects to gain experience in programming.",
      edu2_title: "Azerbaijan Technical University (2021 - 2023)",
      edu2_desc: "Master of Network Engineering",
      edu3_title: "Doğuş University (2024 - 2028) --fully remote",
      edu3_desc: "PhD in Electrical Engineering",
      experience_title: "Work Experience",
      exp1_title: "Beglobe Agency (2020.05 - 2020.09)",
      exp1_desc: "Development and optimization of various web projects.",
      exp2_title: "Globalmart Group (2022.04 - present)",
      exp2_desc: "Development and management of eCommerce websites.",
      projects_title: "Projects",
      proj_venta_title: "Venta",
      proj_venta_desc: "A recruitment company project that includes large internal modules such as HR, finance, events, training, WhatsApp, SMS, FAQ, reception, tickets, QR code, file transfer, tasks, room booking, and a mobile application.",
      proj_enverson_title: "Enverson",
      proj_enverson_desc: "A large project with an online and internal course system. It has extensive modules like lessons, materials, exams, finance, video calls (combo), and artificial intelligence analysis.",
      proj_digitalexam_title: "Digitalexam",
      proj_digitalexam_desc: "An exam system that allows the sale of paid and free exams, enables other companies to share their exams, and automatically creates admin panels with subdomains.",
      proj_kredit_title: "kredit.bilanco.az",
      proj_kredit_desc: "An automated admin panel that sends requests to the Credit Bureau, creates links to provide loans to customers, and tracks payments.",
      proj_alfa_title: "alfahealing.com",
      proj_alfa_desc: "A website for selling meditation and health lessons, featuring blogs and online payment functionalities.",
      proj_anthill_title: "anthill.center",
      proj_anthill_desc: "A platform that showcases the company's products and services online, where registered users can direct their questions through a 'messaging section'.",
      proj_mebaks_title: "Mebaks",
      proj_mebaks_desc: "A mobile application designed for selling furniture products. I developed the iOS part.",
      proj_mhm_title: "mhmsinaq.az",
      proj_mhm_desc: "A trial project in the style of Digitalexam. Features a variety of question types, a large database, and a strong management structure despite its old design.",
      proj_samgroup_title: "samgroup.az",
      proj_samgroup_desc: "A system for managing wholesale of car parts. Functionalities include personal access for partners, ordering, inventory, and profit/expense management.",
      proj_yoldash_title: "Yoldash",
      proj_yoldash_desc: "A ride-sharing platform for long and short distances, with separate panels for customers and drivers, chat, online calls, and cash/online payment systems.",
      proj_artvarium_title: "Artvarium",
      proj_artvarium_desc: "An online store for selling pets and plants. Includes delivery methods, a bonus system, a pet adoption module, etc.",
      proj_ripschool_title: "Ripschool.az",
      proj_ripschool_desc: "A course presentation website with modules for sending service requests and a blog.",
      proj_isgenc_title: "İşgəncəmərkəz",
      proj_isgenc_desc: "A grant project for the state, a small-scale social portal. It includes news, reports, and event modules.",
      proj_small_title: "AzerbaijanExperts, Chinamotors, ParadiseEvents, İrs, JJPro, NuhaGroup, Globalmart.az, Butass.com",
      proj_small_desc: "Small, infographic-style web projects. They serve a promotional function for companies or organizations.",
      proj_gallco_title: "gallcogroup.az",
      proj_gallco_desc: "A business card-style website about holding companies. Each page presents information about a subsidiary.",
      proj_medium_title: "Tid.az, easyedu.az, kuponum.az, organiksatinal.az, newhouse.az, binaemlak.az, propws.com, tik.az, mathx.az, ework.az",
      proj_medium_desc: "Medium-sized projects for various fields. Some are currently inactive, while others had features like API integration, online payment, exam systems, coupon sales, and classified ad sites.",
      proj_lokano_title: "lokano.az",
      proj_lokano_desc: "A project whose design we created between 2020-2025, and after 2025 the design was updated, but the admin panel and database remained from the previous version.",
      proj_kafe_title: "Kafe Buxta",
      proj_kafe_desc: "A POS device and POS terminal system. It has functions for managing sales, inventory, employees, and salaries.",
  }
};


document.addEventListener("DOMContentLoaded", () => {
  // Dil düymələri və digər elementlərin seçilməsi
  const langButtons = document.querySelectorAll(".lang-btn");
  const elementsToTranslate = document.querySelectorAll("[data-lang]");
  const htmlEl = document.documentElement;

  // Səhifə yükləndikdə animasiya
  const timelineItems = document.querySelectorAll(".timeline-item");
  const projectCards = document.querySelectorAll(".project-card");

  const fadeInOnLoad = (elements) => {
      elements.forEach((el, index) => {
          el.style.opacity = 0;
          el.style.transform = "translateY(15px)";
          // Hər elementin fərqli vaxtda görünməsini təmin edir
          const delay = el.closest('.project-grid') ? (index % 2) * 100 + Math.floor(index / 2) * 150 : index * 100;
          setTimeout(() => {
              el.style.transition = "all 0.5s ease";
              el.style.opacity = 1;
              el.style.transform = "translateY(0)";
          }, delay);
      });
  };

  // Dil dəyişdirmə funksiyası
  const changeLanguage = (lang) => {
      elementsToTranslate.forEach(el => {
          const key = el.dataset.lang;
          // HTML daxilində tag varsa (məsələn <strong>), innerHTML istifadə edirik
          if (key.endsWith('_html')) {
              el.innerHTML = translations[lang][key];
          } else {
              el.textContent = translations[lang][key];
          }
      });
      
      // Səhifənin dil atributunu dəyişir (SEO və screen reader-lər üçün yaxşıdır)
      htmlEl.setAttribute("lang", lang);

      // Aktiv düyməni yeniləyir
      langButtons.forEach(btn => {
          btn.classList.remove("active");
          if (btn.dataset.langSwitch === lang) {
              btn.classList.add("active");
          }
      });

      // Seçilmiş dili yaddaşda saxlayır
      localStorage.setItem("language", lang);
  };

  // Düymələrə click hadisəsi əlavə edir
  langButtons.forEach(button => {
      button.addEventListener("click", (e) => {
          e.preventDefault(); // a tag-inin standart davranışını ləğv edir
          const lang = button.dataset.langSwitch;
          changeLanguage(lang);
      });
  });

  // Səhifə yükləndikdə yaddaşdakı dili yoxlayır
  const savedLang = localStorage.getItem("language") || "az"; // Əgər dil seçilməyibsə 'az' olsun
  changeLanguage(savedLang);
  
  // Animasiyanı işə salır
  fadeInOnLoad([...timelineItems, ...projectCards]);
});