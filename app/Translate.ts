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
        // Dashboard
        lightMode: "الوضع الفاتح",
        
        topFiveCurrencies: "أهم خمس عملات",
        usdIndex: "مؤشر الدولار الأمريكي",
        dashboard: "لوحة التحكم",
        marketTrends: "اتجاهات السوق",
        usdCurrency: "عملة الدولار الأمريكي",
        liveCurrency: "العملات المباشرة",
        // Converter
        news1: "ارتفع الدولار الأمريكي مقابل العملات الرئيسية بعد بيانات تصنيع قوية واستقرار عوائد السندات.",
        news2: "يتوقع المحللون تراجع الدولار قليلاً مع تباطؤ التضخم واقتراب خفض أسعار الفائدة.",
        news3: "زاد المستثمرون العالميون الطلب على أصول الدولار وسط التوترات الجيوسياسية وعدم استقرار نمو الأسواق الناشئة.",
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