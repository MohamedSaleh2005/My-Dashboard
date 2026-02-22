"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("language")
    : null;
    
    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {
            // About
            
  about: {
            rateMe: {
    "title": "Please Rate Me"
  },
      future: {
      "title": "🚀 Future Improvements",
      "description": "The project already functions at a professional level, but several enhancements can take it to an enterprise-ready application:",
      "item1": "Backend Integration: Replace Local Storage with a real server and database for secure data handling.",
      "item2": "Dynamic Currency Expansion: Add new currencies automatically with real-time updates for trends and prices.",
      "item3": "Enhanced Authentication: Connect login/logout to a real backend and restrict access to settings and favorites.",
      "item4": "Advanced Analytics: Add interactive charts to track daily currency trends and market indicators.",
      "item5": "Mobile Optimization & PWA: Improve mobile experience and convert the project into a Progressive Web App.",
      "item6": "UI/UX Improvements: Refine navigation, multi-language support, and visual consistency across the dashboard.",
      "note": "These improvements will make the dashboard fully scalable, secure, and professional, ready for real-world deployment."
    },
        theme: {
      "title": "🌙 Advanced Dark / Light Mode System",
      "description": "The theme system is professionally engineered to deliver a seamless and flicker-free user experience.",
      "items": [
        "The selected theme is saved in Local Storage.",
        "A custom script is injected inside the main HTML file.",
        "The script runs before the page fully renders after reload.",
        "The theme remains synchronized across multiple tabs or windows."
      ],
      "note": "Additionally, a live theme indicator button in the main layout updates automatically whenever the theme changes, ensuring complete UI consistency across the entire application."
    },
      table: {
      "title": "📊 Currencies Table Page",
      "description": "The Currencies page showcases professional data handling and clean UI structuring. It is designed to simulate real-world production-level dashboards.",
      "features": [
        "🔍 Real-time search system",
        "📑 Professional pagination",
        "⭐ Favorite button for each currency"
      ],
      "favoriteIntro": "When a user marks a currency as favorite:",
      "favoriteItems": [
        "It is saved instantly in Local Storage.",
        "It appears automatically in the Favorites page.",
        "It can be removed at any time."
      ],
      "favoriteNote": "This structure simulates real production-level data management while remaining fully optimized on the frontend."
    },
       project: {
      "title": "🌍 Currency Dashboard – Professional Web Application",
      "paragraphs": [
        "At first glance, this project may look simple, but behind its clean interface lies a highly structured and professionally engineered system.",
        "The dashboard runs on a real API, where exchange rates are fetched dynamically and updated daily. Currency trends change automatically while the user is active, creating a realistic live financial experience.",
        "Although currently frontend-based, integrating a backend system in the future would enhance scalability, security, and long-term data management."
      ]
    },
      language: {
      "title": "🌐 Multi-Language Support System",
      "description": "The dashboard includes a fully integrated bilingual system, allowing users to switch seamlessly between Arabic and English.",
      "items": [
        "Full dynamic translation across all pages.",
        "Language preference is stored in Local Storage.",
        "Instant UI updates without page reload."
      ],
      "note": "The architecture ensures scalability, making it easy to integrate additional languages in the future."
    },
    favorites: {
      "title": "⭐ Favorites Management System",
      "description": "The Favorites system allows users to mark and manage preferred currencies with a smooth and intuitive experience.",
      "items": [
        "Favorites are saved instantly in Local Storage.",
        "Selected currencies appear automatically in the Favorites page.",
        "Items can be removed at any time."
      ],
      "note": "This structure simulates real production-level data persistence while maintaining a fast and fully client-side optimized performance."
    }
  },
            aboutConverter: {
              "title": "Currency Converter System",
              "description1": "The Currency Converter is one of the core features of the dashboard, designed with flexibility and scalability in mind.",
              "list1": "The target currency selector is fully dynamic and easily extendable.",
              "list2": "New currencies can be added with minimal adjustments.",
              "list3": "All conversions are saved in Local Storage.",
              "list4": "Each record stores its exact date and time.",
              "description2": "The conversion history is displayed in a structured table, simulating real-world financial applications while remaining fully optimized on the frontend."
            },
         titl: "About This Dashboard",
  description: "Explore the features and settings of your currency dashboard.",
      title: "Authentication & Access Control",
    description1: "The dashboard includes a simulated authentication system designed to introduce access control logic within the application.",
    list1: "Users can log in and log out (simulated system).",
    list2: "Certain settings cannot be modified without authentication.",
    list3: "The structure is ready to be connected to a real backend service.",
    description2: "Although currently frontend-based, the architecture reflects real-world authentication patterns and can be easily extended to integrate secure backend authorization in the future.",
        // Dashboard
        
        lightMode: "Light Mode",
        
        topFiveCurrencies: "Top Five Currencies",
        usdIndex: "USD Index",
        dashboard: "Dashboard",
        marketTrends: "Market Trends",
        usdCurrency: "USD Currency",
        
        liveCurrency: "Live Currency",
        // Converter
        news1: "The US dollar strengthened against major currencies following stronger manufacturing data and stable treasury yields.",
        news2: "Analysts expect the dollar to weaken slightly as inflation slows and interest rate cuts approach.",
        news3: "Global investors increased demand for dollar assets amid geopolitical tensions and uncertain emerging market growth.",
        add: "Add",
        convert: "Convert",
        currencyConverter: "Currency Converter",
        liveExchangeCurrency: "Live Exchange Currency",
        allConversionHistory: "All Conversion History",
        updatedJustNow: "Updated Just Now",
        id: "ID",
        amountShort: "Amt",
        from: "From",
        to: "To",
        resultShort: "Res",
        date: "Date",
        time: "Time",
        action: "Act",
        amount: "Amount",
      currencyPicture: "Currency Picture",
      // Curriences
      allCurrenciesHere: "All Currencies Here",
      asset: "Asset",
      symbol: "Symbol",
      price: "Price",
      status: "Status",
      trend: "Trend",
      favourite: "Favourite",
      search: "Search",
      noResultsFound: "No Results Found",
      currenciesTable: "Currencies Table",
      liveExchangeRates: "Live Exchange rates and market analytics",
      // Favourite
      AVAILABLE: "AVAILABLE",
      DEPRECIATED : "Unavailable",
      livefavurite: "Your Favourite will be here",
      favouriteCurrencies: "Favourite Currencies",
        loadingFavourites: "Loading favourites...",
        noFavourites: "No favourites yet",
        delete: "Delete",
        // SideBar
        Dashboard: "Dashboard",
        Converter: "Converter",
        Currencies: "Currencies",
        Favourite: "Favourite",
        Settings: "Settings",
        About: "About",
        // Settings
        settings: "Settings",
        darkMode: "Dark Mode",
        history: "Conversion History",
        defaultCurrency: "Default Currency",
        comingSoon: "Coming soon",
        selectLanguage: "Select Language",
        arabic: "Arabic",
        english: "English",
        letsAccessAccount: "Let's access your account",
        login: "Login",
        register: "Register",
        logout: "Logout",
        notification: "Notification",
        pleaseCreateAccount: "Please create an account to manage your settings",
      }
    },
    ar: {
      translation: {

        // About
        
        
  
  


about: {
   rateMe: {
    "title": "من فضلك قيمني"
  },
  
      future: {
      "title": "🚀 التحسينات المستقبلية",
      "description": "يعمل المشروع حاليًا بمستوى احترافي، لكن هناك عدة تحسينات يمكن أن تجعله جاهزًا للاستخدام على مستوى المؤسسات",
      "item1": "دمج Backend استبدال التخزين المحلي  بخادم حقيقي وقاعدة بيانات لمعالجة البيانات بأمان",
      "item2": "توسيع العملات الديناميكي: إضافة عملات جديدة تلقائيًا مع تحديثات لحظية للاتجاهات والأسعار",
      "item3": "تحسين المصادقة ربط تسجيل الدخول/الخروج بخادم حقيقي وتقييد الوصول إلى الإعدادات والمفضلة",
      "item4": "تحليلات متقدمة إضافة رسوم بيانية تفاعلية لتتبع اتجاهات العملات اليومية ومؤشرات السوق.",
      "item5": "تحسين الجوال و PWA تحسين تجربة الجوال وتحويل المشروع إلى تطبيق ويب تقدمي (PWA)",
      "item6": "تحسينات UI/UX: تحسين التنقل، ودعم تعدد اللغات، والتناسق البصري في جميع أنحاء لوحة التحكم",
      "note": "ستجعل هذه التحسينات لوحة التحكم قابلة للتوسع بالكامل وآمنة واحترافية، وجاهزة للنشر في العالم الحقيقي"
    },
      theme: {
      "title": "🌙 نظام الوضع الليلي / الفاتح المتقدم",
      "description": "تم تصميم نظام الثيم بشكل احترافي لتوفير تجربة مستخدم سلسة وخالية من الوميض",
      "items": [
        "يتم حفظ الثيم المحدد في التخزين المحلي",
        "يتم إدراج سكريبت مخصص داخل ملف HTML الرئيسي",
        "يعمل السكريبت قبل أن يتم تحميل الصفحة بالكامل بعد إعادة التحميل",
        "يظل الثيم متزامنًا عبر علامات تبويب أو نوافذ متعددة"
      ],
      "note": "بالإضافة إلى ذلك، يقوم زر مؤشر الثيم المباشر في التخطيط الرئيسي بالتحديث تلقائيًا عند تغيير الثيم، مما يضمن توافق واجهة المستخدم الكامل عبر التطبيق بأكمله"
    },

      table: {
      "title": "📊 صفحة جدول العملات",
      "description": "تعرض صفحة العملات معالجة بيانات احترافية وتصميم واجهة نظيفة. تم تصميمها لمحاكاة لوحات التحكم على مستوى الإنتاج",
      "features": [
        "🔍 نظام بحث فوري",
        "📑 تقسيم صفحات احترافي (Pagination)",
        "⭐ زر المفضلة لكل عملة"
      ],
      "favoriteIntro": "عندما يقوم المستخدم بتحديد عملة كمفضلة",
      "favoriteItems": [
        "يتم حفظها فورًا في التخزين المحلى ",
        "تظهر تلقائيًا في صفحة المفضلة",
        "يمكن إزالتها في أي وقت"
      ],
      "favoriteNote": "يحاكي هذا الهيكل إدارة البيانات على مستوى الإنتاج مع الحفاظ على تحسين الأداء بالكامل على جهة العميل"
    },
      project: {
      "title": "🌍 لوحة تحكم العملات – تطبيق ويب احترافي",
      "paragraphs": [
        "يبدو المشروع بسيطًا للوهلة الأولى، لكن خلف واجهته النظيفة يوجد نظام متقدم ومنظم بشكل احترافي",
        "تعمل لوحة التحكم على API حقيقي، حيث يتم جلب أسعار الصرف ديناميكيًا وتتحدث يوميًا. تتغير اتجاهات العملات تلقائيًا أثناء نشاط المستخدم، مما يخلق تجربة مالية حية وواقعية",
        "على الرغم من أنه يعتمد حاليًا على الواجهة الأمامية فقط، فإن دمج نظام Backend في المستقبل سيعزز القابلية للتوسع والأمان وإدارة البيانات طويلة المدى."
      ]
    },
      language: {
      "title": "🌐 نظام دعم اللغات المتعددة",
      "description": "تحتوي لوحة التحكم على نظام ثنائي اللغة مدمج بالكامل، مما يسمح للمستخدمين بالتبديل بسهولة بين العربية والإنجليزية",
      "items": [
        "ترجمة ديناميكية كاملة عبر جميع الصفحات",
        "يتم حفظ تفضيل اللغة في التخزين المحلى ",
        "تحديث واجهة المستخدم فورًا دون إعادة تحميل الصفحة"
      ],
      "note": "تضمن البنية القابلية للتوسع، مما يسهل دمج لغات إضافية في المستقبل"
    },

    favorites: {
      "title": "⭐ نظام إدارة المفضلة",
      "description": "يسمح نظام المفضلة للمستخدمين بتحديد وإدارة العملات المفضلة بطريقة سلسة وبديهية",
      "items": [
        "يتم حفظ المفضلات فورًا في التخزين المحلى ",
        "تظهر العملات المحددة تلقائيًا في صفحة المفضلة",
        "يمكن إزالة العناصر في أي وقت"
      ],
      "note": "يحاكي هذا الهيكل حفظ البيانات على مستوى الإنتاج مع الحفاظ على أداء سريع ومُحسّن بالكامل على جهة العميل"
    }
  },

    aboutConverter: {
    "title": "نظام محول العملات",
    "description1": "محول العملات هو أحد الميزات الأساسية للوحة التحكم، مصمم بالمرونة وقابلية التوسع في الاعتبار",
    "list1": "محدد العملة الهدف ديناميكي بالكامل وسهل التوسيع",
    "list2": "يمكن إضافة عملات جديدة مع تعديلات قليلة",
    "list3": "جميع التحويلات محفوظة في التخزين المحلي",
    "list4": "كل سجل يخزن التاريخ والوقت بدقة",
    "description2": "يتم عرض سجل التحويلات في جدول منظم، محاكياً تطبيقات مالية حقيقية مع بقاء الأداء الأمثل على الواجهة الأمامية"
  },

            titl: "المصادقة و التحكم في الوصول",
    description1: "لوحة التحكم تتضمن نظام مصادقة محاكٍ مصمم لإدخال منطق التحكم في الوصول داخل التطبيق",
    list1: "يمكن للمستخدمين تسجيل الدخول والخروج (نظام محاكٍ).",
    list2: "بعض الإعدادات لا يمكن تعديلها بدون المصادقة.",
    list3: "البنية جاهزة للاتصال بخدمة خلفية حقيقية",
    description2: "على الرغم من أن النظام حاليًا على الواجهة الأمامية، إلا أن البنية تعكس أنماط المصادقة الواقعية ويمكن توسيعها بسهولة لدمج التفويض الخلفي الآمن في المستقبل",
          title: "حول لوحة التحكم",
  description: "استكشف المميزات والإعدادات الخاصة بلوحة العملات الخاصة بك",
        // Dashboard
        lightMode: "الوضع الفاتح",
        
        topFiveCurrencies: "أهم خمس عملات",
        usdIndex: "مؤشر الدولار الأمريكي",
        dashboard: "لوحة التحكم",
        marketTrends: "اتجاهات السوق",
        usdCurrency: "عملة الدولار الأمريكي",
        liveCurrency: "العملات المباشرة",
        // Converter
        news1: "ارتفع الدولار الأمريكي مقابل العملات الرئيسية بعد بيانات تصنيع قوية واستقرار عوائد السندات",
        news2: "يتوقع المحللون تراجع الدولار قليلاً مع تباطؤ التضخم واقتراب خفض أسعار الفائدة",
        news3: "زاد المستثمرون العالميون الطلب على أصول الدولار وسط التوترات الجيوسياسية وعدم استقرار نمو الأسواق الناشئة",
        marketNews: "Market News",
        add: "إضافة",
      convert: "تحويل",
        currencyConverter: "محول العملات",
      liveExchangeCurrency: "تحويل العملات المباشر",
            allConversionHistory: "سجل التحويلات",
      updatedJustNow: "تم التحديث الآن",
      id: "الرقم",
      amountShort: "المبلغ",
      from: "من",
      to: "إلى",
      resultShort: "النتيجة",
      date: "التاريخ",
      time: "الوقت",
      action: "إجراء",
         amount: "المبلغ",
      currencyPicture: "صورة العملة",
        // Curriences
         allCurrenciesHere: "جميع العملات هنا",
         asset: "الأصل",
      symbol: "الرمز",
      price: "السعر",
      status: "الحالة",
      trend: "الاتجاه",
      favourite: "المفضلة",
         search: "ابحث",
        noResultsFound: "لم يتم العثور على نتائج",
            currenciesTable: "جدول العملات",
            liveExchangeRates: "أسعار الصرف الحية وتحليلات السوق",
        // Favourite
 AVAILABLE: "متاح",
      DEPRECIATED : "غير متاح",
              favouriteCurrencies: "العملات المفضلة",
              livefavurite: "كل عملاتك المفضله هنا",
        loadingFavourites: "جاري تحميل المفضلة...",
        noFavourites: "لا توجد عملات مفضلة بعد",
        delete: "حذف",
        // SideBar
        Dashboard: "لوحة التحكم",
        Converter: "المحوّل",
        Currencies: "العملات",
        Favourite: "المفضلة",
        Settings: "الإعدادات",
        About: "حول",
        // Settings
        settings: "الإعدادات",
        darkMode: "الوضع الليلي",
        history: "سجل التحويل",
        defaultCurrency: "العملة الافتراضية",
        comingSoon: "قريبًا",
        selectLanguage: "اختر اللغة",
        arabic: "العربية",
        english: "الإنجليزية",
        letsAccessAccount: "لنصل إلى حسابك",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        logout: "تسجيل الخروج",
        notification: "الإشعارات",
        pleaseCreateAccount: "يرجى إنشاء حساب لإدارة إعداداتك",


      }
    }
  },
  lng: savedLanguage || "en", // 👈 المهم ده
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;