import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About Us",
      testimonials: "Testimonials",
      contact: "Contact Us"
    },
    hero: {
      welcome: "Welcome To",
      tech: "Technologies",
      difficulties:"Are you facing difficulties with your website? Do you have a website but lack traffic? No need to worry.",
      button: "Get Started"
    },
    about: {
      title1: "Thank You For Your",
      title2: "Interest In Us!",
      heading1: "Founded Over 7 Years Ago, RR Technologies",
      heading2: "Is Now The Main",
      design: "Web Design",
      and: "And",
      development: "Web Development",
      heading3: "Agency In Bangladesh.",

      paragraph1: "Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what",
      paragraph2: "exactly we aim to deliver to our esteemed clients, ng our mix of reliability, capability, and longevity to get your website blossoming.",
      paragraph3: "We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that",
      paragraph4: "you may consider availing for your website growth.",
 

      text1: "Are you facing difficulties with your website? Do you have a",
      text2: "website but lack traffic? No need to worry. We at RR",
      text3: "Technologies use our technological expertise amalgamated with",
      text4: "our experience to scoop out the right potion of success for",
      text5: "your firm. We are highly passionate about our work and leave",
      text6: "no stones unturned to delight our customers with high-quality",
      text7: "work. and efficient project management that comes as a surprise",
      text8: "bearing bounteous outcomes.",

      more1: "Owing to the years of expertise in web development and web",
      more2: "designing, our in-house professionals have been highly",
      more3: "successful in catering projects. May it be your small size or",
      more4: "Large-scale business; we excel in providing you with the best",
      more5: "interactive surfaces.",

      more: "Show More..",
      less: "Show Less.."
    },
    stats: {
      projects: {
        label: "projects",    
        number: "65+"
      },
      clients: {
        label: "clients",
        number: "30+"
      },
      experience: {
        label: "experience",
        number: "7years+"
      },
      company: {
        label: "company",
        number: "15+"
      }
    },
    services: {
        subTitle: "Services We Offer",

        title1: "We believe in true",
        title2: "partnership and thus get",
        title3: "our",
        customers: "customers",
        title4: "a bang for",
        title5: "their bucks. There are",
        title6: "various areas in which we",
        title7: "function, here are a few of them:",

        cards: {
            design: "Web Design & Web Development",
            solutions: "E-Commerce Solutions",
            custom: "Customized Application Development",
            search: "Search Engine Optimization & Digital Marketing"
        }
    },
    why: {
        title: "Why choose us",
        subtitle: "for your web development needs?",
        paragraph1: "We have passion and love for what we do& we don’t believe in cutting corners and setting wrong expectations. We aim at improving with",
        paragraph2: " each passing day and showcase what we actually are in reality, and we do not pretend in any circumstances. There are multiple reasons",
        paragraph3: "that will make you fall for us for availing top-notch web development services. Here are a few of them.",
 
        cards: {
         experience: {
          title: "Experience",
          text: 
          "Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines."
         },
         team: {
           title: "Dedicated team",
           text: 
           "Everyone has their own cup of tea to drink, and thus we do not mix up the different areas of functionality. We have dedicated teams for designing and graphics. While our web developers get the deigning part done, we have our own graphic designing team that handles all the quality imagery part for a successful website."
         },
         time: {
           title: "Rapid turnaround time",
           text: 
           "We aim at delivering quality work within fixed deadlines and thus are committed to delivering solutions when our clients need them without making them wait for it and extend beyond the fixed time frame. We chalk out our plans accordingly and also regularly update our clients regarding the progress to get what you desire. We give ears to your vision"
         },
         price: {
            title: "Competitive pricing",
            text:
            "Pricing is one crucial factor that every business owner considers while hiring a web development company. We are the best in the market and offer competitive pricing to our clients meeting all the demands of the clients with higher levels of efficiency."
         }
        }
    },

    portfolio: {
        title: "Our Portfolio",
        ecommerce: "Ecommerce Websites",
        wordpress: "WordPress Websites",
        logos: "Logos Design",
        graphics: "Graphics Design"
    },

    testimonials: {
        title: "Testimonials",

        user1: "Mr Smith",
        text1_line: "RR Technologies is the key to the success of our brands. A solid team of strategic planners and brilliant creators enables them to provide world-class service.",

        user2: "John Doe",
        text2_line: "RR Technologies played a major role in our business success. A solid team of strategic planners and brilliant creations enables them to provide world class service."
    },
    contact: {
      title: "Register interest",
      description:"Use the form below to contact us. Please be as detailed and precise as possible. Include your industry and any specific requests. To help us serve you better, give a short description of who you are.",
      name: "Name",
      name_placeholder: "Enter your name",
      company:"Company",
      company_placeholder: "Enter your company name",
      email: "Email Address",
      email_placeholder: "Enter your email address",
      message: "Message",
      message_placeholder: "Enter your message here",
      button: "Submit"
    },
    footer:{
        copyright: "© Copyright 2023 all right reserved by Naimur Rahman Hira"
    }
  },

  ar: {
    nav: {
      services: "الخدمات",
      portfolio: "أعمالنا",
      about: "من نحن",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا"
    },
    hero: {
      welcome: "مرحباً بك في",
      tech: "التكنولوجيا",
      difficulties:"هل تواجه صعوبات في موقعك الإلكتروني؟ هل لديك موقع إلكتروني لكن عدد زواره قليل؟ لا داعي للقلق.",
      button: "ابدأ الآن"
    },
     about: {
      title1: "شكرًا لاهتمامك",
      title2: "بنا!",
      heading1: "تأسست شركة RR Technologies منذ أكثر من 7 سنوات",
      heading2: "وأصبحت الآن الشركة الرائدة في",
      design: "تصميم المواقع",
      and: "و",
      development: "تطوير المواقع",
      heading3: "في بنغلاديش",

      paragraph1: "إن دمج التكنولوجيا مع الأعمال يؤدي إلى نتائج مثمرة",
      paragraph2: "وهذا ما نسعى لتحقيقه لعملائنا الكرام",
      paragraph3: "من خلال تقديم مزيج من الموثوقية والكفاءة",
      paragraph4: "لمساعدتك على ازدهار موقعك.",

      text1: "هل تواجه صعوبة في موقعك؟",
      text2: "هل لديك موقع ولكنك تفتقر إلى الزوار؟",
      text3: "نحن في RR Technologies نستخدم خبرتنا التقنية",
      text4: "وخبرتنا العملية للوصول إلى أفضل النتائج",
      text5: "نحن شغوفون بعملنا ونسعى دائمًا",
      text6: "لتقديم أفضل الخدمات لعملائنا",
      text7: "بجودة عالية وإدارة محترفة.",

      more1: "وبفضل سنوات الخبرة في تطوير وتصميم المواقع",
      more2: "تمكن فريقنا الداخلي من تحقيق نجاحات كبيرة",
      more3: "في مختلف المشاريع.",
      more4: "حتى في المشاريع الكبيرة نوفر أفضل الحلول",
      more5: "والواجهات التفاعلية المميزة.",

      more: "عرض المزيد",
      less: "عرض أقل"
    },
    stats: {
        projects: {
          label: "المشاريع",    
          number: "+٦٥"
        },
        clients: {
          label: "العملاء",
          number: "+٣٠"
        },
        experience: {
          label: "الخبرة",
          number: "+٧ سنوات"
        },
        company: {
          label: "الشركة",
          number: "+١٥"
        }
    },
    services: {
        subTitle: "الخدمات التي نقدمها",

        title1: "نحن نؤمن بالشراكة الحقيقية",
        title2: "ولذلك نوفر لعملائنا",
        title3: "أفضل",
        customers: "الخدمات",
        title4: "وبأفضل جودة",
        title5: "حيث نقدم العديد من",
        title6: "الخدمات المختلفة التي",
        title7: "نتميز بها، ومنها:",
        
        cards: {
            design: "تصميم وتطوير المواقع الإلكترونية",
            solutions: "حلول التجارة الإلكترونية",
            custom: "تطوير التطبيقات المخصصة",
            search: "تحسين محركات البحث والتسويق الرقمي"
        }
    },
    why: {
        title: "لماذا تختارنا",
        subtitle: "لتطوير موقعك الإلكتروني؟",
        paragraph1: "لدينا شغفٌ وحبٌّ لعملنا، ولا نؤمن بالتقصير أو وضع توقعاتٍ خاطئة. نهدف إلى التحسين",
        paragraph2: "يومًا بعد يوم، ونُظهر حقيقتنا على أرض الواقع، ولا ندّعي ذلك تحت أي ظرف. هناك أسبابٌ عديدةٌ",
        paragraph3: "ستجعلك تلجأ إلينا للحصول على خدمات تطوير ويبٍ عالية الجودة. إليك بعضًا منها.",

        cards: {
          experience: {
             title: "الخبرة",
             text: 
             "الخبرة تُحسب، وتوظيفنا يعني توظيف خبراء يتمتعون بسنوات من الخبرة ليضيفوها إلى رصيدهم المالي لإنجاز مشاريعك بالشكل الأمثل. كما نمتلك نظام إدارة مشاريع مُبسطًا يُلبي متطلبات مشروعك. يتيح لك التواصل معنا الاطلاع على مجموعة واسعة من الكفاءات القادرة على إنجاز مهمتك في مواعيدها المحددة."
          },
          team: {
             title: "فريق متخصص",
             text: 
             "لكل شخص خبرته الخاصة، ولذلك لا نخلط بين مختلف جوانب العمل. لدينا فرق متخصصة في التصميم والرسومات. بينما يتولى مطورو الويب لدينا مهمة التصميم، لدينا فريق تصميم جرافيكي خاص بنا يتولى جميع مهام الصور عالية الجودة اللازمة لإنشاء موقع ويب ناجح."
          },
          time: {
            title: "سرعة التنفيذ",
            text: 
            "نهدف إلى تقديم عمل عالي الجودة ضمن مواعيد نهائية محددة، وبالتالي نلتزم بتقديم الحلول عندما يحتاجها عملاؤنا دون الحاجة إلى الانتظار أو تجاوز الإطار الزمني المحدد. نخطط خططنا بناءً على ذلك، ونُطلع عملاءنا بانتظام على التقدم المحرز لتحقيق ما ترغبون به. نحن ننصت لرؤيتكم."
          },
          price: {
            title: "أسعار تنافسية",
            text:
            "يُعد التسعير عاملاً أساسياً يضعه كل صاحب عمل في اعتباره عند اختيار شركة تطوير مواقع ويب. نحن الأفضل في السوق، ونقدم أسعاراً تنافسية لعملائنا، ونلبي جميع احتياجاتهم بكفاءة عالية."
          }
        }
    },

    portfolio: {
        title: "أعمالنا",
        ecommerce: "حلول التجارة الإلكترونية",
        wordpress: "مواقع ووردبريس",
        logos: "تصميم الشعارات",
        graphics: "التصميم الجرافيكي"
    },
    testimonials: {
        title: "آراء العملاء",

        user1: "السيد سميث",
        text1_line: "شركة RR Technologies هي سر نجاح علاماتنا التجارية. فريقها المتين من المخططين الاستراتيجيين والمبدعين المتميزين يُمكّنها من تقديم خدمة عالمية المستوى. ",

        user2: "جون دو",
        text2_line: "شركة RR Technologies كانت سبباً أساسياً في نجاح أعمالنا. فريقها المتين من المخططين الاستراتيجيين والمبدعين المتميزين يُمكّنها من تقديم خدمة عالمية المستوى."
    },
    contact: {
      title: "سجل أهتمامك",
      description:"استخدم النموذج أدناه للتواصل معنا. يرجى أن تكون دقيقًا قدر الإمكان. اذكر مجالك وأي متطلبات خاصة. ولمساعدتنا على خدمتك بشكل أفضل، قدم وصفًا مختصرًا عنك.",
      name: "الأسم",
      name_placeholder: "أدخل أسمك",
      company:"أسم الشركة",
      company_placeholder: "أدخل أسم شركتك",
      email: "البريد الإلكتروني",
      email_placeholder: "أدخل بريدك الإلكتروني",
      message: "الرسالة",
      message_placeholder: "اكتب رسالتك هنا",
      button: "إرسال"
    },
    footer:{
        copyright: "© جميع الحقوق محفوظة 2023 - نعيم الرحمن هيرا"
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages
})
