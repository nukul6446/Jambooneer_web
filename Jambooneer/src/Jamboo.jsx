 
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiDroplet,
  FiMail,
  FiClock,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiSend,
  FiX,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./assets/logo.png";
import bottle from "./assets/product2.png";
import arrbottle1 from "./assets/arrbottle1.jpg";
import arrdelivery2 from "./assets/arrdelivery2.jpg";
import arrwater3 from "./assets/arrwater3.jpg";
import arrsource4 from "./assets/arrsource4.jpg";
import arroffice5 from "./assets/arroffice5.jpg";
import arrevent6 from "./assets/arrevent6.jpg";
import purpose from "./assets/purpose.jpg";
import engineer from "./assets/engineer.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* =========================================================
   CONFIG
========================================================= */

const SITE_TITLE = "Jambooneer | Pure Water. Honest Delivery.";

const META_DESCRIPTION =
  "Jambooneer brings rigorously purified, mineral-balanced water straight to your home, office, or event — clean water, honest delivery, every single time.";

const CONTACT_ADDRESS = "Khasra No. 261/2 Deeni, Waraseoni, Balaghat, Madhya Pradesh - 481331";
const CONTACT_PHONE = "+91 9770674420";
const CONTACT_EMAIL = "hello@jambooneer.com";
const OFFICE_HOURS = "10:00 AM - 6:00 PM · 7 Days a Week";
const WHATSAPP_NUMBER = "919770674420";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  en: {
    // Nav
    navAbout: "About",
    navProducts: "Products",
    navWhyUs: "Why Us",
    navProcess: "Process",
    navContact: "Contact",
    enquireNow: "Enquire Now",
    langLabel: "हिंदी",
    pureWaterHonest: "Pure water. Honest delivery.",

    // Hero
    heroEyebrow: "Pure Water • Honest Delivery",
    heroLine1: "Purity Poured",
    heroLine2: "With Purpose.",
    heroCopy:
      "Jambooneer brings rigorously purified, mineral-balanced water straight to your home, office, or event — clean water, honest delivery, every single time.",
    exploreWater: "Explore Water",
    ourStory: "Our Story",
    happyCustomers: "Happy Customers",
    purityTested: "Purity Tested",
    deliverySupport: "Delivery Support",
    stagePurification: "Stage Purification",
    fssaiCertified: "FSSAI Certified",
    isiCertified: "ISI Certified",
    sameDayDelivery: "Same-Day Delivery",
    labVerified: "Lab Verified",
    pureSource: "Pure Source",
    exploreJourney: "Explore the journey",

    // Story
    storyKicker: "Our Story",
    storyTitle1: "Where Every Drop",
    storyTitle2: "Has a Purpose.",
    storyLead:
      "We didn't set out to sell water. We set out to earn your trust, one delivery at a time.",
    storyP1:
      "Jambooneer began with one simple conviction — that clean, safe, great-tasting water shouldn't be a privilege, it should be a promise kept to every home, office, and celebration we serve.",
    storyP2:
      "That promise shapes everything: how we purify, how we pack, and how we show up at your door.",
    storyCard1Title: "Pure at the Source",
    storyCard1Text: "Multi-stage RO + UV + mineral balancing.",
    storyCard2Title: "Sustainable by Design",
    storyCard2Text: "Reusable jars and eco-conscious packaging.",
    storyCard3Title: "Lab-Verified, Always",
    storyCard3Text: "200+ safety and quality parameters.",
    ourBeginning: "Our Beginning",
    whereEveryDrop: "Where every drop",
    hasAPurpose: "has a purpose.",

    // Products
    productsKicker: "What We Offer",
    productsTitle1: "One Brand.",
    productsTitle2: "Every Kind of Thirst.",
    productsSub:
      "From a single bottle to a fleet of tankers — Jambooneer scales to meet you where you are.",

    productName1: "Packaged Drinking Water",
    productDesc1:
      "Crisp, refreshing water for daily life, on the move or at home.",
    productItem1_1: "BPA-free, food-grade plastic",
    productItem1_2: "Tamper-evident sealed caps",
    productItem1_3: "Bulk packs available",
    productItem1_4: "Chilled delivery option",

    productName2: "Dealer Partnership",
    productDesc2: "Build a business on a brand people already trust.",
    productItem2_1: "Exclusive, area-based dealership",
    productItem2_2: "Attractive profit margins",
    productItem2_3: "Marketing & promotional support",
    productItem2_4: "Reliable supply, fast assistance",

    productName3: "Bulk Water Supply",
    productDesc3:
      "Dependable tanker delivery for sites and businesses that cannot afford downtime.",
    productItem3_1: "Flexible volumes per delivery",
    productItem3_2: "Custom contracts available",
    productItem3_3: "Temperature-controlled transport",
    productItem3_4: "24/7 priority support",

    productName4: "Mineral-Enriched Water",
    productDesc4: "Thoughtfully balanced for everyday wellness.",
    productItem4_1: "pH balanced",
    productItem4_2: "Enhanced electrolytes",
    productItem4_3: "Doctor recommended",
    productItem4_4: "Ideal for infants & seniors",

    productName5: "Office Water Solutions",
    productDesc5:
      "Hydration, handled — so your team does not have to think about it.",
    productItem5_1: "Dedicated account manager",
    productItem5_2: "GST-compliant invoicing",
    productItem5_3: "Dispenser maintenance",
    productItem5_4: "Flexible monthly plans",

    productName6: "Event Water Packages",
    productDesc6:
      "Because every celebration deserves water as polished as the occasion.",
    productItem6_1: "Branded bottle labelling",
    productItem6_2: "On-site delivery & setup",
    productItem6_3: "Bulk quantity discounts",
    productItem6_4: "Last-minute availability",

    // Why Us
    whyUsKicker: "Why Jambooneer",
    whyUsTitle1: "Trust,",
    whyUsTitle2: "Engineered.",
    whyUsSub:
      "We don't just purify water. We engineer confidence, drop by drop.",
    whyStep1Title: "Multi-Stage Purification",
    whyStep1Text:
      "Sediment → RO → UV → UF → Minerals → Ozonation → Final QC Check.",
    whyStep2Title: "Same-Day Delivery",
    whyStep2Text:
      "Order before cutoff, receive it the same day. No delays, no excuses.",
    whyStep3Title: "Transparent Quality Reports",
    whyStep3Text:
      "Regular lab reports shared openly with our subscribers — nothing hidden.",
    whyStep4Title: "Support That Never Sleeps",
    whyStep4Text:
      "WhatsApp, call, or email — we're always one message away.",
    whyStep5Title: "A Commitment Beyond the Bottle",
    whyStep5Text:
      "Our reusable jar system keeps thousands of plastic bottles out of landfills every month.",
    bottlesDelivered: "Bottles Delivered Daily",
    purityRate: "Purity Rate",
    stageProcess: "Stage Process",

    // Process
    processKicker: "How It Works",
    processTitle1: "Pure Water.",
    processTitle2: "Four Simple Steps.",
    step1Title: "Place Your Order",
    step1Text:
      "Order via WhatsApp, our website, or a quick call — pick your product and delivery slot.",
    step2Title: "Order Confirmed",
    step2Text:
      "Instant confirmation with your order ID and delivery window.",
    step3Title: "We Deliver",
    step3Text:
      "Fresh, sealed, and quality-tagged — brought to you by our trained team.",
    step4Title: "Enjoy Pure Water",
    step4Text:
      "Hydrate with confidence. Tell us how we did — we're always improving.",

    // Testimonials
    testimonialsKicker: "Customer Voices",
    testimonialsTitle1: "Loved by Homes,",
    testimonialsTitle2: "Offices & Celebrations.",
    testimonials: [
      {
        quote: "Jambooneer has made our office water supply completely effortless. The quality stays consistent and deliveries are reliable.",
        name: "Rahul Sharma",
        role: "Operations Manager",
      },
      {
        quote: "The mineral water tastes genuinely fresh. We now use Jambooneer for our home and family gatherings.",
        name: "Priya Verma",
        role: "Customer",
      },
      {
        quote: "For our wedding, the bulk delivery and branded bottles arrived exactly when promised. Excellent coordination.",
        name: "Amit Jain",
        role: "Event Organizer",
      },
      {
        quote: "Switching to Jambooneer for our restaurant was the best decision. The bulk supply is always on time and the water quality is exceptional.",
        name: "Sneha Reddy",
        role: "Restaurant Owner",
      },
      {
        quote: "Their reusable jar program has cut our plastic waste dramatically. Great water, even better ethos.",
        name: "Vikram Mehta",
        role: "Sustainability Consultant",
      },
      {
        quote: "We ordered for a corporate event of 500+ people. The branded bottles looked premium and the delivery was flawless.",
        name: "Ananya Desai",
        role: "Corporate Event Planner",
      },
    ],

    // Contact
    contactKicker: "Get In Touch",
    contactTitle1: "Let's Start",
    contactTitle2: "Your Pure Water",
    contactTitle3: "Journey.",
    contactSub:
      "Home, office, or a grand occasion — we're ready. Reach out and we'll respond within the hour.",
    locationLabel: "Location",
    phoneLabel: "Phone",
    emailLabel: "Email",
    officeHoursLabel: "Office Hours",
    formKicker: "Request a Dealership / Enquiry",
    formTitle: "Tell us what you need.",
    fullNamePlaceholder: "Full Name",
    phonePlaceholder: "10-digit Phone Number",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Tell us about your requirement...",
    successMessage:
      "✅ Thank you! We have received your enquiry and will get back to you shortly.",
    errorMessage:
      "❌ Something went wrong. Please check your details and try again.",
    sendMessage: "Send Message",
    sending: "Sending...",
    formDisclaimer:
      "By submitting this form, you agree to be contacted by the Jambooneer team regarding your enquiry.",
    chatOnWhatsapp: "Chat on WhatsApp",

    // Footer
    footerProducts: "Products",
    footerCompany: "Company",
    footerAbout: "About Us",
    footerWhyChoose: "Why Choose Us",
    footerHowItWorks: "How It Works",
    footerContact: "Contact",
    footerCareers: "Careers",
    footerCopyright: "© 2026 Jambooneer. All rights reserved.",
    footerTagline: "Pure water. Honest delivery.",
    footerPackagedWater: "Packaged Water",
    footerDealership: "Dealership",
    footerBulkSupply: "Bulk Supply",
    footerMineralWater: "Mineral Water",
    footerOfficeSolutions: "Office Solutions",
    footerEventPackages: "Event Packages",
    footerPureWater:
      "Pure water delivered with care, straight to your doorstep.",

    // Validation
    fullNameRequired: "Full name is required",
    phoneRequired: "Phone number is required",
    phoneInvalid: "Please enter a valid 10-digit phone number",
    emailRequired: "Email address is required",
    emailInvalid: "Please enter a valid email address",
  },

  hi: {
    // Nav
    navAbout: "हमारे बारे में",
    navProducts: "उत्पाद",
    navWhyUs: "हमें क्यों चुनें",
    navProcess: "प्रक्रिया",
    navContact: "संपर्क करें",
    enquireNow: "पूछताछ करें",
    langLabel: "English",
    pureWaterHonest: "शुद्ध पानी। ईमानदार डिलीवरी।",

    // Hero
    heroEyebrow: "शुद्ध पानी • ईमानदार डिलीवरी",
    heroLine1: "शुद्धता से भरा",
    heroLine2: "उद्देश्य के साथ।",
    heroCopy:
      "जम्बूनीर कठोरता से शुद्ध, खनिज-संतुलित पानी सीधे आपके घर, कार्यालय या कार्यक्रम तक पहुँचाता है — स्वच्छ पानी, ईमानदार डिलीवरी, हर बार।",
    exploreWater: "पानी देखें",
    ourStory: "हमारी कहानी",
    happyCustomers: "खुश ग्राहक",
    purityTested: "शुद्धता परीक्षित",
    deliverySupport: "डिलीवरी सहायता",
    stagePurification: "चरण शुद्धिकरण",
    fssaiCertified: "FSSAI प्रमाणित",
    isiCertified: "ISI प्रमाणित",
    sameDayDelivery: "उसी दिन डिलीवरी",
    labVerified: "लैब सत्यापित",
    pureSource: "शुद्ध स्रोत",
    exploreJourney: "यात्रा देखें",

    // Story
    storyKicker: "हमारी कहानी",
    storyTitle1: "जहाँ हर बूँद",
    storyTitle2: "का एक उद्देश्य है।",
    storyLead:
      "हम पानी बेचने नहीं निकले। हम आपका विश्वास जीतने निकले, एक-एक डिलीवरी के साथ।",
    storyP1:
      "जम्बूनीर एक सरल विश्वास के साथ शुरू हुआ — कि स्वच्छ, सुरक्षित, बेहतरीन स्वाद वाला पानी एक विशेषाधिकार नहीं होना चाहिए, यह हर घर, कार्यालय और उत्सव के लिए एक वादा होना चाहिए।",
    storyP2:
      "यह वादा सब कुछ तय करता है: हम कैसे शुद्ध करते हैं, कैसे पैक करते हैं, और कैसे आपके दरवाज़े पर आते हैं।",
    storyCard1Title: "स्रोत पर शुद्ध",
    storyCard1Text: "मल्टी-स्टेज RO + UV + खनिज संतुलन।",
    storyCard2Title: "डिज़ाइन से टिकाऊ",
    storyCard2Text: "पुन: प्रयोज्य जार और पर्यावरण-अनुकूल पैकेजिंग।",
    storyCard3Title: "हमेशा लैब-सत्यापित",
    storyCard3Text: "200+ सुरक्षा और गुणवत्ता मापदंड।",
    ourBeginning: "हमारी शुरुआत",
    whereEveryDrop: "जहाँ हर बूँद",
    hasAPurpose: "का एक उद्देश्य है।",

    // Products
    productsKicker: "हम क्या प्रदान करते हैं",
    productsTitle1: "एक ब्रांड।",
    productsTitle2: "हर तरह की प्यास।",
    productsSub:
      "एक बोतल से लेकर टैंकरों के बेड़े तक — जम्बूनीर आपकी जरूरत के अनुसार बढ़ता है।",

    productName1: "पैकेज्ड पीने का पानी",
    productDesc1: "दैनिक जीवन के लिए ताज़ा, शुद्ध पानी।",
    productItem1_1: "BPA-मुक्त, फूड-ग्रेड प्लास्टिक",
    productItem1_2: "छेड़छाड़-रोधी सीलबंद कैप",
    productItem1_3: "थोक पैक उपलब्ध",
    productItem1_4: "ठंडी डिलीवरी का विकल्प",

    productName2: "डीलर भागीदारी",
    productDesc2:
      "एक ऐसे ब्रांड पर व्यापार बनाएं जिस पर लोग पहले से भरोसा करते हैं।",
    productItem2_1: "विशेष, क्षेत्र-आधारित डीलरशिप",
    productItem2_2: "आकर्षक लाभ मार्जिन",
    productItem2_3: "मार्केटिंग और प्रचार सहायता",
    productItem2_4: "विश्वसनीय आपूर्ति, तेज़ सहायता",

    productName3: "थोक पानी आपूर्ति",
    productDesc3:
      "उन साइटों और व्यवसायों के लिए भरोसेमंद टैंकर डिलीवरी जो डाउनटाइम बर्दाश्त नहीं कर सकते।",
    productItem3_1: "प्रति डिलीवरी लचीली मात्रा",
    productItem3_2: "कस्टम अनुबंध उपलब्ध",
    productItem3_3: "तापमान-नियंत्रित परिवहन",
    productItem3_4: "24/7 प्राथमिकता सहायता",

    productName4: "खनिज-समृद्ध पानी",
    productDesc4: "दैनिक कल्याण के लिए सोच-समझकर संतुलित।",
    productItem4_1: "pH संतुलित",
    productItem4_2: "उन्नत इलेक्ट्रोलाइट्स",
    productItem4_3: "डॉक्टर द्वारा अनुशंसित",
    productItem4_4: "शिशुओं और बुजुर्गों के लिए आदर्श",

    productName5: "कार्यालय जल समाधान",
    productDesc5:
      "हाइड्रेशन संभाला — ताकि आपकी टीम को इसके बारे में सोचना न पड़े।",
    productItem5_1: "समर्पित अकाउंट मैनेजर",
    productItem5_2: "GST-अनुपालन बिलिंग",
    productItem5_3: "डिस्पेंसर रखरखाव",
    productItem5_4: "लचीली मासिक योजनाएं",

    productName6: "इवेंट वॉटर पैकेज",
    productDesc6:
      "क्योंकि हर उत्सव को उतना ही शानदार पानी मिलना चाहिए जितना अवसर।",
    productItem6_1: "ब्रांडेड बोतल लेबलिंग",
    productItem6_2: "ऑन-साइट डिलीवरी और सेटअप",
    productItem6_3: "थोक मात्रा छूट",
    productItem6_4: "अंतिम समय उपलब्धता",

    // Why Us
    whyUsKicker: "जम्बूनीर क्यों",
    whyUsTitle1: "विश्वास,",
    whyUsTitle2: "इंजीनियर्ड।",
    whyUsSub:
      "हम सिर्फ पानी शुद्ध नहीं करते। हम विश्वास बनाते हैं, बूँद-बूँद करके।",
    whyStep1Title: "मल्टी-स्टेज शुद्धिकरण",
    whyStep1Text:
      "सेडिमेंट → RO → UV → UF → खनिज → ओज़ोनेशन → अंतिम QC जाँच।",
    whyStep2Title: "उसी दिन डिलीवरी",
    whyStep2Text:
      "कटऑफ से पहले ऑर्डर करें, उसी दिन प्राप्त करें। कोई देरी नहीं, कोई बहाना नहीं।",
    whyStep3Title: "पारदर्शी गुणवत्ता रिपोर्ट",
    whyStep3Text:
      "नियमित लैब रिपोर्ट हमारे सब्सक्राइबर्स के साथ खुलकर साझा की जाती हैं।",
    whyStep4Title: "सहायता जो कभी नहीं सोती",
    whyStep4Text:
      "WhatsApp, कॉल, या ईमेल — हम हमेशा एक संदेश दूर हैं।",
    whyStep5Title: "बोतल से परे एक प्रतिबद्धता",
    whyStep5Text:
      "हमारा पुन: प्रयोज्य जार सिस्टम हर महीने हज़ारों प्लास्टिक बोतलों को लैंडफिल से बचाता है।",
    bottlesDelivered: "दैनिक बोतलें वितरित",
    purityRate: "शुद्धता दर",
    stageProcess: "चरण प्रक्रिया",

    // Process
    processKicker: "यह कैसे काम करता है",
    processTitle1: "शुद्ध पानी।",
    processTitle2: "चार सरल चरण।",
    step1Title: "अपना ऑर्डर दें",
    step1Text:
      "WhatsApp, हमारी वेबसाइट, या कॉल से ऑर्डर करें — अपना उत्पाद और डिलीवरी स्लॉट चुनें।",
    step2Title: "ऑर्डर की पुष्टि",
    step2Text: "आपके ऑर्डर ID और डिलीवरी विंडो के साथ तुरंत पुष्टि।",
    step3Title: "हम डिलीवर करते हैं",
    step3Text:
      "ताज़ा, सीलबंद और गुणवत्ता-टैग — हमारी प्रशिक्षित टीम द्वारा आप तक पहुँचाया गया।",
    step4Title: "शुद्ध पानी का आनंद लें",
    step4Text:
      "विश्वास के साथ हाइड्रेट करें। हमें बताएं कि हमने कैसा किया — हम हमेशा सुधार कर रहे हैं।",

    // Testimonials
    testimonialsKicker: "ग्राहकों की आवाज़",
    testimonialsTitle1: "घरों से प्यार,",
    testimonialsTitle2: "कार्यालयों और उत्सवों से।",
    testimonials: [
      {
        quote: "जम्बूनीर ने हमारे ऑफिस के लिए पानी की सप्लाई को पूरी तरह से आसान बना दिया है। पानी की शुद्धता हमेशा बनी रहती है और डिलीवरी भी समय पर होती है।",
        name: "राहुल शर्मा",
        role: "ऑपरेशन्स मैनेजर",
      },
      {
        quote: "मिरनल वॉटर का स्वाद वास्तव में ताज़ा है। अब हम अपने घर और पारिवारिक आयोजनों के लिए जम्बूनीर के पानी का ही उपयोग करते हैं।",
        name: "प्रिया वर्मा",
        role: "ग्राहक",
      },
      {
        quote: "हमारी शादी के लिए, थोक आपूर्ति और ब्रांडेड बोतलें बिल्कुल वादे के अनुसार समय पर पहुंचीं। शानदार तालमेल!",
        name: "अमित जैन",
        role: "इवेंट मैनेजर",
      },
      {
        quote: "हमारे रेस्टोरेंट के लिए जम्बूनीर को चुनना सबसे अच्छा फैसला था। थोक आपूर्ति हमेशा समय पर होती है और पानी की गुणवत्ता भी बेहतरीन है।",
        name: "स्नेहा रेड्डी",
        role: "रेस्टोरेंट मालिक",
      },
      {
        quote: "उनके रीयूजेबल जार प्रोग्राम ने हमारे प्लास्टिक कचरे को काफी कम कर दिया है। शानदार पानी और बेहतरीन सोच।",
        name: "विक्रम मेहता",
        role: "पर्यावरण सलाहकार",
      },
      {
        quote: "हमने 500+ लोगों के कॉर्पोरेट इवेंट के लिए ऑर्डर किया था। ब्रांडेड बोतलें बहुत ही प्रीमियम लग रही थीं और डिलीवरी एकदम सही थी।",
        name: "अनन्या देसाई",
        role: "कॉर्पोरेट इवेंट प्लानर",
      },
    ],

    // Contact
    contactKicker: "संपर्क में रहें",
    contactTitle1: "शुरू करें",
    contactTitle2: "अपनी शुद्ध पानी",
    contactTitle3: "यात्रा।",
    contactSub:
      "घर, कार्यालय, या कोई भव्य अवसर — हम तैयार हैं। संपर्क करें और हम एक घंटे में जवाब देंगे।",
    locationLabel: "स्थान",
    phoneLabel: "फ़ोन",
    emailLabel: "ईमेल",
    officeHoursLabel: "कार्यालय समय",
    formKicker: "डीलरशिप / पूछताछ का अनुरोध",
    formTitle: "हमें बताएं आपको क्या चाहिए।",
    fullNamePlaceholder: "पूरा नाम",
    phonePlaceholder: "10 अंकों का फ़ोन नंबर",
    emailPlaceholder: "ईमेल पता",
    messagePlaceholder: "अपनी आवश्यकता के बारे में बताएं...",
    successMessage:
      "✅ धन्यवाद! हमें आपकी पूछताछ मिल गई है और हम जल्द ही आपसे संपर्क करेंगे।",
    errorMessage:
      "❌ कुछ गलत हो गया। कृपया अपनी जानकारी जाँचें और पुनः प्रयास करें।",
    sendMessage: "संदेश भेजें",
    sending: "भेज रहे हैं...",
    formDisclaimer:
      "इस फ़ॉर्म को जमा करके, आप जम्बूनीर टीम द्वारा आपकी पूछताछ के संबंध में संपर्क किए जाने के लिए सहमत हैं।",
    chatOnWhatsapp: "WhatsApp पर चैट करें",

    // Footer
    footerProducts: "उत्पाद",
    footerCompany: "कंपनी",
    footerAbout: "हमारे बारे में",
    footerWhyChoose: "हमें क्यों चुनें",
    footerHowItWorks: "यह कैसे काम करता है",
    footerContact: "संपर्क करें",
    footerCareers: "करियर",
    footerCopyright: "© 2026 जम्बूनीर। सर्वाधिकार सुरक्षित।",
    footerTagline: "शुद्ध पानी। ईमानदार डिलीवरी।",
    footerPackagedWater: "पैकेज्ड पानी",
    footerDealership: "डीलरशिप",
    footerBulkSupply: "थोक आपूर्ति",
    footerMineralWater: "मिनरल वॉटर",
    footerOfficeSolutions: "ऑफिस समाधान",
    footerEventPackages: "इवेंट पैकेज",
    footerPureWater:
      "देखभाल के साथ शुद्ध पानी, सीधे आपके दरवाज़े तक।",

    // Validation
    fullNameRequired: "पूरा नाम आवश्यक है",
    phoneRequired: "फ़ोन नंबर आवश्यक है",
    phoneInvalid: "कृपया एक वैध 10 अंकों का फ़ोन नंबर दर्ज करें",
    emailRequired: "ईमेल पता आवश्यक है",
    emailInvalid: "कृपया एक वैध ईमेल पता दर्ज करें",
  },
};

/* =========================================================
   IMAGES
========================================================= */

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1600&q=85",
  purpose,
  bottle,
  arrbottle1,
  arrdelivery2,
  arrwater3,
  arrsource4,
  arroffice5,
  arrevent6,
  engineer,
};

/* =========================================================
   ANIMATED COUNTER COMPONENT
========================================================= */

function AnimatedCounter({ value, suffix = "+" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const target = Number(value);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 2000; // 2 seconds
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // Ease out quad
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  // If already animated, immediately output final parsed count on lang update
  useEffect(() => {
    if (hasAnimated) {
      setCount(Number(value));
    }
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {hasAnimated ? count.toLocaleString("en-IN") + suffix : "0" + suffix}
    </span>
  );
}

/* =========================================================
   MAIN APP COMPONENT
========================================================= */

export default function Jamboo() {
  const main = useRef(null);
  const hero = useRef(null);
  const bottleRef = useRef(null);
  const bottleWrap = useRef(null);
  const cursor = useRef(null);
  const cursorDot = useRef(null);
  const nav = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  const products = [
    {
      number: "01",
      title: t.productName1,
      text: t.productDesc1,
      image: IMAGES.arrbottle1,
      items: [t.productItem1_1, t.productItem1_2, t.productItem1_3, t.productItem1_4],
    },
    {
      number: "02",
      title: t.productName2,
      text: t.productDesc2,
      image: IMAGES.arrdelivery2,
      items: [t.productItem2_1, t.productItem2_2, t.productItem2_3, t.productItem2_4],
    },
    {
      number: "03",
      title: t.productName3,
      text: t.productDesc3,
      image: IMAGES.arrwater3,
      items: [t.productItem3_1, t.productItem3_2, t.productItem3_3, t.productItem3_4],
    },
    {
      number: "04",
      title: t.productName4,
      text: t.productDesc4,
      image: IMAGES.arrsource4,
      items: [t.productItem4_1, t.productItem4_2, t.productItem4_3, t.productItem4_4],
    },
    {
      number: "05",
      title: t.productName5,
      text: t.productDesc5,
      image: IMAGES.arroffice5,
      items: [t.productItem5_1, t.productItem5_2, t.productItem5_3, t.productItem5_4],
    },
    {
      number: "06",
      title: t.productName6,
      text: t.productDesc6,
      image: IMAGES.arrevent6,
      items: [t.productItem6_1, t.productItem6_2, t.productItem6_3, t.productItem6_4],
    },
  ];

  const processSteps = [
    { number: "01", title: t.step1Title, text: t.step1Text },
    { number: "02", title: t.step2Title, text: t.step2Text },
    { number: "03", title: t.step3Title, text: t.step3Text },
    { number: "04", title: t.step4Title, text: t.step4Text },
  ];

  const [formStatus, setFormStatus] = useState("idle");
  const [formErrors, setFormErrors] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      lang === "hi"
        ? "नमस्ते! मुझे जम्बूनीर के बारे में जानकारी चाहिए।"
        : "Hello! I would like to enquire about Jambooneer water services."
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  useEffect(() => {
    document.title = SITE_TITLE;
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    const setProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", META_DESCRIPTION);
    setProperty("og:title", SITE_TITLE);
    setProperty("og:description", META_DESCRIPTION);
    setProperty("og:type", "website");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", SITE_TITLE);
    setMeta("twitter:description", META_DESCRIPTION);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => prev.filter((err) => err.field !== name));
  };

  const getFieldError = (fieldName) => {
    const found = formErrors.find((err) => err.field === fieldName);
    return found ? found.message : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientErrors = [];
    if (!formData.fullName.trim())
      clientErrors.push({ field: "fullName", message: t.fullNameRequired });
    if (!formData.phone.trim())
      clientErrors.push({ field: "phone", message: t.phoneRequired });
    else if (!/^[0-9]{10}$/.test(formData.phone.trim()))
      clientErrors.push({ field: "phone", message: t.phoneInvalid });
    if (!formData.email.trim())
      clientErrors.push({ field: "email", message: t.emailRequired });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      clientErrors.push({ field: "email", message: t.emailInvalid });

    if (clientErrors.length > 0) {
      setFormErrors(clientErrors);
      setFormStatus("error");
      return;
    }
    setFormStatus("submitting");
    setFormErrors([]);
    const payload = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.status === 400) {
        setFormErrors(data.errors || []);
        setFormStatus("error");
        return;
      }
      if (response.status === 429) {
        setFormErrors([{ field: "email", message: data.message }]);
        setFormStatus("error");
        return;
      }
      if (!response.ok) {
        setFormErrors([]);
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      setFormErrors([]);
      setFormData({ fullName: "", phone: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 6000);
    } catch (err) {
      console.error("❌ Network error:", err);
      setFormErrors([]);
      setFormStatus("error");
    }
  };

  // ── GSAP TIMELINE & GRAPHICS (No custom counter loop) ──

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [".hero-eyebrow", ".hero-line", ".hero-copy", ".hero-stats", ".hero-proof", ".hero-cta"],
        { opacity: 0, y: 50 }
      );
      gsap.set(".hero-bottle", { opacity: 0, scale: 0.7, y: 100, rotate: -8 });

      const heroIntro = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroIntro
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.9 })
        .to(".hero-line", { opacity: 1, y: 0, duration: 1.15, stagger: 0.12 }, "-=0.55")
        .to(".hero-copy", { opacity: 1, y: 0, duration: 0.9 }, "-=0.65")
        .to(".hero-stats", { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
        .to(".hero-proof", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7 }, "-=0.45")
        .to(".hero-bottle", { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 1.4, ease: "expo.out" }, "-=1.2");

      gsap.to(bottleRef.current, { y: -14, rotation: 2, duration: 1.8, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const heroElement = hero.current;
      const moveBottle = (e) => {
        if (!heroElement || !bottleRef.current) return;
        const rect = heroElement.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(bottleRef.current, { x: x * 24, rotationY: x * 8, rotationX: -y * 6, duration: 0.8, ease: "power3.out", overwrite: "auto" });
      };
      if (heroElement) heroElement.addEventListener("mousemove", moveBottle);

      const heroScroll = gsap.timeline({
        scrollTrigger: { trigger: hero.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
      heroScroll
        .to(".hero-copy-area", { y: -180, opacity: 0.15, ease: "none" }, 0)
        .to(".hero-glow-one", { x: -150, y: 100, scale: 1.5, ease: "none" }, 0)
        .to(".hero-glow-two", { x: 180, y: -120, scale: 1.6, ease: "none" }, 0)
        .to(bottleWrap.current, { x: 360, y: 500, scale: 0.42, rotation: 32, ease: "none" }, 0)
        .to(".hero-wave", { y: -180, scale: 1.15, ease: "none" }, 0);

      ScrollTrigger.create({
        start: 100, end: 99999,
        onEnter: () => gsap.to(nav.current, { y: 8, scale: 0.97, duration: 0.4, ease: "power3.out" }),
        onLeaveBack: () => gsap.to(nav.current, { y: 0, scale: 1, duration: 0.4, ease: "power3.out" }),
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 86%", toggleActions: "play none none reverse" } });
      });
      gsap.utils.toArray(".section-title-line").forEach((line) => {
        gsap.fromTo(line, { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: line, start: "top 88%", toggleActions: "play none none reverse" } });
      });
      gsap.utils.toArray(".story-image").forEach((img) => {
        gsap.to(img, { yPercent: -12, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
      });
      gsap.fromTo(".product-card", { opacity: 0, y: 100, rotateX: 8 }, { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: ".products-grid", start: "top 78%" } });
      gsap.fromTo(".quality-line-progress", { scaleY: 0 }, { scaleY: 1, transformOrigin: "top", ease: "none", scrollTrigger: { trigger: ".quality-process", start: "top 70%", end: "bottom 65%", scrub: 1 } });
      gsap.utils.toArray(".quality-item").forEach((item) => {
        gsap.fromTo(item, { opacity: 0.55, x: 30 }, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 72%", end: "top 42%", scrub: true } });
      });
      gsap.fromTo(".process-progress", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", ease: "none", scrollTrigger: { trigger: ".process-section", start: "top 70%", end: "bottom 65%", scrub: 1 } });
      gsap.utils.toArray(".process-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.9, delay: i * 0.1, ease: "power4.out", scrollTrigger: { trigger: card, start: "top 82%" } });
      });
      gsap.to(".testimonial-track", { xPercent: -10, ease: "none", scrollTrigger: { trigger: ".testimonials-section", start: "top bottom", end: "bottom top", scrub: 1 } });

      const contactTL = gsap.timeline({ scrollTrigger: { trigger: ".contact-section", start: "top 75%" } });
      contactTL
        .fromTo(".contact-kicker", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".contact-heading", { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.35")
        .fromTo(".contact-info", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".contact-form", { opacity: 0, y: 100, rotateX: 8 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.1, ease: "power4.out" }, "-=0.65");

      gsap.fromTo(".footer-reveal", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, scrollTrigger: { trigger: ".footer", start: "top 85%" } });

      gsap.set([cursor.current, cursorDot.current], { opacity: 0 });
      const onMouseMove = (e) => {
        if (cursor.current && cursorDot.current) {
          gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power3.out", opacity: 1 });
          gsap.to(cursorDot.current, { x: e.clientX, y: e.clientY, duration: 0.08, opacity: 1 });
        }
      };
      const onMouseLeave = () => gsap.to([cursor.current, cursorDot.current], { opacity: 0, duration: 0.3 });
      window.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseleave", onMouseLeave);

      gsap.utils.toArray(".magnetic").forEach((btn) => {
        const move = (e) => { const r = btn.getBoundingClientRect(); gsap.to(btn, { x: (e.clientX - (r.left + r.width / 2)) * 0.22, y: (e.clientY - (r.top + r.height / 2)) * 0.22, duration: 0.35, ease: "power3.out" }); };
        const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
      });

      return () => {
        if (heroElement) heroElement.removeEventListener("mousemove", moveBottle);
        window.removeEventListener("mousemove", onMouseMove);
        document.body.removeEventListener("mouseleave", onMouseLeave);
      };
    }, main);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".mobile-menu", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "power4.inOut" });
      gsap.fromTo(".mobile-link", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, delay: 0.15, ease: "power4.out" });
    });
    return () => ctx.revert();
  }, [menuOpen]);

  // ── RENDER ───────────────────────────────────────────

  return (
    <main ref={main} className="relative overflow-hidden bg-[#F4FAFF] text-[#0A1E3F]">
      <noscript>
        <div style={{ padding: "2rem", textAlign: "center", background: "#0A1E3F", color: "white" }}>
          <h1>Jambooneer</h1>
          <p>Please enable JavaScript to view this site.</p>
        </div>
      </noscript>

      {/* FLOATING WHATSAPP */}
      <button
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)]"
      >
        <FaWhatsapp className="text-2xl" />
      </button>

      {/* CUSTOM CURSOR */}
      <div ref={cursor} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00B4D8]/60 mix-blend-difference md:block" />
      <div ref={cursorDot} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B4D8] md:block" />

      {/* NAVBAR */}
      <nav ref={nav} className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#0070C0]/85 px-4 py-3 shadow-[0_15px_60px_rgba(10,30,63,0.25)] backdrop-blur-xl md:px-6">
          <a href="#home" className="group flex items-center gap-3" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            <div className="relative flex h-11 w-[180px] items-center justify-center">
              <img src={logo} alt="Jambooneer logo" className="h-[70px] w-[290px] object-contain" />
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {[[t.navAbout, "about"], [t.navProducts, "products"], [t.navWhyUs, "why-us"], [t.navProcess, "process"], [t.navContact, "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link relative text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-[#7DD3FC]">{label}</button>
            ))}
            <button onClick={toggleLang} className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm transition-all hover:bg-white/20">
              <FiGlobe className="text-sm" />{t.langLabel}
            </button>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => scrollTo("contact")} className="magnetic rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0070C0] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all hover:bg-[#E6F4FE]">{t.enquireNow}</button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleLang} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25" aria-label="Toggle language"><FiGlobe /></button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25">{menuOpen ? <FiX /> : <FiMenu />}</button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu fixed inset-0 z-[90] flex flex-col justify-end bg-[#0A1E3F] px-7 pb-10 pt-32 text-white">
          <div className="flex flex-col">
            {[[t.navAbout, "about"], [t.navProducts, "products"], [t.navWhyUs, "why-us"], [t.navProcess, "process"], [t.navContact, "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="mobile-link border-b border-white/10 py-5 text-left text-4xl font-light">{label}</button>
            ))}
          </div>
          <div className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">{t.pureWaterHonest}</div>
        </div>
      )}

      {/* HERO */}
      <section ref={hero} id="home" className="hero relative flex min-h-[900px] items-center overflow-hidden bg-[#E6F4FE] pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,180,216,0.22),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(0,112,192,0.13),transparent_30%)]" />
        <div className="hero-glow-one absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#7DD3FC]/40 blur-[120px]" />
        <div className="hero-glow-two absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-[#00B4D8]/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden opacity-40">
          <div className="hero-wave absolute -bottom-24 left-1/2 h-80 w-[130%] -translate-x-1/2 rounded-[50%] bg-white/60 blur-sm" />
        </div>

        <div className="hero-copy-area relative z-20 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-28 md:px-10 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <div className="hero-eyebrow mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#00B4D8]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#0070C0]">{t.heroEyebrow}</span>
            </div>

            <h1 className="max-w-5xl overflow-hidden text-[clamp(2rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.05em] text-[#0A1E3F]">
              <span className="hero-line block">{t.heroLine1}</span>
              <span className="hero-line block">
                <span className="bg-gradient-to-r from-[#005C9E] via-[#00B4D8] to-[#7DD3FC] bg-clip-text text-transparent">{t.heroLine2}</span>
              </span>
            </h1>

            <p className="hero-copy mt-9 max-w-xl text-sm leading-7 text-[#1B3B6F] md:text-base">{t.heroCopy}</p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
              <button onClick={() => scrollTo("products")} className="magnetic group flex items-center gap-3 rounded-full bg-[#0A1E3F] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                {t.exploreWater}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:rotate-45"><FiArrowUpRight /></span>
              </button>
              <button onClick={() => scrollTo("about")} className="flex items-center gap-2 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0070C0]">{t.ourStory} <FiChevronDown /></button>
            </div>

            {/* HERO COUNTERS (RENDERED WITH FIXED STABLE KEYS [idx]) */}
            <div className="hero-stats mt-14 grid max-w-2xl grid-cols-2 border-y border-[#0A1E3F]/10 py-5 sm:grid-cols-4">
              {[["1000", t.happyCustomers], ["99", t.purityTested], ["24", t.deliverySupport], ["7", t.stagePurification]].map(([value, label], idx) => (
                <div key={idx} className="border-r border-[#0A1E3F]/10 px-4 first:pl-0 last:border-0">
                  <div className="flex items-end gap-0.5 text-2xl font-black tracking-tight text-[#0A1E3F]">
                    <AnimatedCounter value={value} />
                  </div>
                  <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#4A6B82]">{label}</div>
                </div>
              ))}
            </div>

            <div className="hero-proof mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#4A6B82]">
              <span>{t.fssaiCertified}</span><span>•</span><span>{t.isiCertified}</span><span>•</span><span>{t.sameDayDelivery}</span><span>•</span><span>{t.labVerified}</span>
            </div>
          </div>

          <div ref={bottleWrap} className="pointer-events-none relative flex min-h-[500px] items-center justify-center">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-white/80 bg-white/30 shadow-[0_0_100px_rgba(0,180,216,0.25)] backdrop-blur-sm md:h-[480px] md:w-[480px]" />
            <div className="absolute h-[280px] w-[280px] rounded-full border border-white/70 md:h-[380px] md:w-[380px]" />
            <div className="absolute bottom-20 h-16 w-64 rounded-full bg-[#0070C0]/20 blur-[35px]" />
            <div ref={bottleRef} className="hero-bottle relative z-10 w-[170px] transform-gpu sm:w-[200px] md:w-[235px] lg:w-[260px]" style={{ transformStyle: "preserve-3d" }}>
              <img src={IMAGES.bottle} alt="Jambooneer premium water bottle" className="h-auto w-full rounded-[30px] object-cover shadow-[0_45px_80px_rgba(10,30,63,0.25)]" />
              <div className="absolute -right-10 top-20 hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#0070C0] shadow-xl backdrop-blur-md sm:block">{t.labVerified}</div>
              <div className="absolute -left-10 bottom-24 hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#0070C0] shadow-xl backdrop-blur-md sm:block">{t.pureSource}</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#4A6B82]">{t.exploreJourney}</span>
          <span className="h-12 w-px bg-gradient-to-b from-[#00B4D8] to-transparent" />
        </div>
      </section>

      {/* STORY */}
      <section id="about" className="relative overflow-hidden bg-white px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal relative">
              <div className="absolute -inset-5 rounded-[40px] bg-[#E6F4FE]" />
              <div className="relative h-[520px] overflow-hidden rounded-[32px]">
                <img src={IMAGES.purpose} alt="Natural water source" className="story-image h-[120%] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/50 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">{t.ourBeginning}</div>
                    <div className="mt-2 text-2xl font-light">{t.whereEveryDrop}<br />{t.hasAPurpose}</div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md"><FiDroplet /></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#00B4D8]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0070C0]">{t.storyKicker}</span>
              </div>
              <div className="overflow-hidden">
                <h2 className="section-title-line text-5xl font-light leading-[0.95] tracking-[-0.05em] text-[#0A1E3F] md:text-7xl">{t.storyTitle1}<br /><span className="font-black">{t.storyTitle2}</span></h2>
              </div>
              <p className="reveal mt-8 max-w-2xl text-xl font-light leading-relaxed text-[#1B3B6F]">{t.storyLead}</p>
              <p className="reveal mt-6 max-w-2xl text-sm leading-7 text-[#4A6B82]">{t.storyP1}</p>
              <p className="reveal mt-5 max-w-2xl text-sm leading-7 text-[#4A6B82]">{t.storyP2}</p>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[["01", t.storyCard1Title, t.storyCard1Text], ["02", t.storyCard2Title, t.storyCard2Text], ["03", t.storyCard3Title, t.storyCard3Text]].map(([n, title, text]) => (
                  <div key={n} className="reveal rounded-2xl border border-[#0A1E3F]/10 bg-[#F4FAFF] p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(10,30,63,0.08)]">
                    <div className="text-[9px] font-black tracking-[0.2em] text-[#00B4D8]">{n}</div>
                    <h3 className="mt-5 text-sm font-black text-[#0A1E3F]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#4A6B82]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative overflow-hidden bg-[#DDF2FF] px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#00B4D8]" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0070C0]">{t.productsKicker}</span></div>
              <div className="overflow-hidden"><h2 className="section-title-line text-5xl font-light leading-none tracking-[-0.05em] text-[#0A1E3F] md:text-7xl">{t.productsTitle1}<br /><span className="font-black">{t.productsTitle2}</span></h2></div>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#4A6B82]">{t.productsSub}</p>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
            {products.map((p, i) => (
              <button key={p.number} onClick={() => setActiveProduct(i)} className={`whitespace-nowrap rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[0.15em] transition-all ${activeProduct === i ? "bg-[#0A1E3F] text-white" : "bg-white text-[#4A6B82] hover:bg-[#E6F4FE]"}`}>{p.title}</button>
            ))}
          </div>

          <div className="products-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <article key={p.number} onMouseEnter={() => setActiveProduct(i)} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className={`product-card group relative min-h-[500px] cursor-pointer overflow-hidden rounded-[28px] bg-white transition-all duration-700 ${activeProduct === i ? "shadow-[0_35px_80px_rgba(10,30,63,0.15)]" : "shadow-[0_15px_40px_rgba(10,30,63,0.04)]"}`}>
                <div className="absolute inset-0">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-[#0A1E3F]/30 to-transparent" />
                </div>
                <div className="relative flex h-full min-h-[500px] flex-col justify-between p-7 text-white">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black tracking-[0.2em] text-white/60">{p.number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:rotate-45"><FiArrowUpRight /></span>
                  </div>
                  <div>
                    <h3 className="max-w-sm text-2xl font-black tracking-tight">{p.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-5 text-white/70 sm:text-base md:text-lg">{p.text}</p>
                    <div className="mt-6 grid gap-2">
                      {p.items.map((item) => (<div key={item} className="flex items-center gap-2 text-[12px] font-medium text-white/80"><FiCheck className="text-[#00B4D8]" />{item}</div>))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="relative bg-[#0A1E3F] px-6 py-32 text-white md:px-10 md:py-44">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#00B4D8]/10 blur-[130px]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#7DD3FC]" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7DD3FC]">{t.whyUsKicker}</span></div>
              <div className="overflow-hidden"><h2 className="section-title-line text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">{t.whyUsTitle1}<br /><span className="font-black">{t.whyUsTitle2}</span></h2></div>
              <p className="reveal mt-8 max-w-md text-sm leading-7 text-white/55">{t.whyUsSub}</p>
              <div className="mt-12 flex flex-wrap gap-2">
                {["FSSAI Certified", "ISI Mark", "ISO 9001:2015", "NABL Tested"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white/60">{item}</span>
                ))}
              </div>
              <div className="reveal mt-14 hidden overflow-hidden rounded-[30px] lg:block">
                <img src={IMAGES.engineer} alt="Pure water" className="h-[300px] w-full object-cover opacity-60" />
              </div>
            </div>

            <div className="quality-process relative">
              <div className="absolute bottom-0 left-[22px] top-0 w-px bg-white/10">
                <div className="quality-line-progress h-full w-full bg-gradient-to-b from-[#7DD3FC] to-[#00B4D8]" />
              </div>
              <div className="grid gap-14">
                {[["01", t.whyStep1Title, t.whyStep1Text], ["02", t.whyStep2Title, t.whyStep2Text], ["03", t.whyStep3Title, t.whyStep3Text], ["04", t.whyStep4Title, t.whyStep4Text], ["05", t.whyStep5Title, t.whyStep5Text]].map(([n, title, text]) => (
                  <div key={n} className="quality-item relative grid grid-cols-[45px_1fr] gap-7">
                    <div className="relative z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-white/15 bg-[#0A1E3F] text-[9px] font-black text-[#7DD3FC]">{n}</div>
                    <div className="pb-5"><h3 className="text-2xl font-black tracking-tight">{title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/50">{text}</p></div>
                  </div>
                ))}
              </div>

              {/* WHY-US COUNTERS (RENDERED WITH FIXED STABLE KEYS [idx]) */}
              <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[25px] border border-white/10 bg-white/10 sm:grid-cols-4">
                {[["1000", t.happyCustomers], ["50000", t.bottlesDelivered], ["99", t.purityRate], ["7", t.stageProcess]].map(([value, label], idx) => (
                  <div key={idx} className="bg-[#0A1E3F] p-6 text-center">
                    <div className="text-2xl font-black text-[#7DD3FC]">
                      <AnimatedCounter value={value} />
                    </div>
                    <div className="mt-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white/35">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process-section relative overflow-hidden bg-white px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3"><span className="h-px w-10 bg-[#00B4D8]" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0070C0]">{t.processKicker}</span><span className="h-px w-10 bg-[#00B4D8]" /></div>
            <div className="overflow-hidden"><h2 className="section-title-line text-5xl font-light leading-none tracking-[-0.05em] text-[#0A1E3F] md:text-7xl">{t.processTitle1}<br /><span className="font-black">{t.processTitle2}</span></h2></div>
          </div>
          <div className="relative mx-auto mt-24 max-w-6xl">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#0A1E3F]/10 md:block"><div className="process-progress h-full w-full origin-left bg-[#00B4D8]" /></div>
            <div className="grid gap-8 md:grid-cols-4">
              {processSteps.map((s) => (
                <div key={s.number} className="process-card relative rounded-[25px] border border-[#0A1E3F]/10 bg-[#F4FAFF] p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(10,30,63,0.08)]">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1E3F] text-[9px] font-black text-white">{s.number}</div>
                  <h3 className="mt-10 text-xl font-black tracking-tight text-[#0A1E3F]">{s.title}</h3>
                  <p className="mt-4 text-xs leading-6 text-[#4A6B82]">{s.text}</p>
                  <div className="mt-8 h-px w-10 bg-[#00B4D8]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section relative overflow-hidden bg-[#E6F4FE] py-32 md:py-44">
        <div className="px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#00B4D8]" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0070C0]">{t.testimonialsKicker}</span></div>
              <div className="overflow-hidden"><h2 className="section-title-line text-5xl font-light leading-none tracking-[-0.05em] text-[#0A1E3F] md:text-7xl">{t.testimonialsTitle1}<br /><span className="font-black">{t.testimonialsTitle2}</span></h2></div>
            </div>
          </div>
        </div>
        <div className="testimonial-track flex w-max gap-5 px-6 md:px-10">
          {[...t.testimonials, ...t.testimonials].map((item, index) => (
            <article key={`${item.name}-${index}`} className="w-[330px] rounded-[28px] bg-white p-8 shadow-[0_20px_60px_rgba(10,30,63,0.07)] md:w-[430px]">
              <div className="text-xl tracking-[0.2em] text-[#00B4D8]">★★★★★</div>
              <p className="mt-7 text-lg font-light leading-7 text-[#1B3B6F]">"{item.quote}"</p>
              <div className="mt-10 border-t border-[#0A1E3F]/10 pt-5">
                <div className="text-sm font-black text-[#0A1E3F]">{item.name}</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#4A6B82]">{item.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section relative overflow-hidden bg-[#0A1E3F] px-6 py-32 text-white md:px-10 md:py-44">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#00B4D8]/10 blur-[130px]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="contact-info">
              <div className="contact-kicker mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#7DD3FC]" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7DD3FC]">{t.contactKicker}</span></div>
              <h2 className="contact-heading text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">{t.contactTitle1}<br /><span className="font-black">{t.contactTitle2}</span><br />{t.contactTitle3}</h2>
              <p className="mt-8 max-w-md text-[15px] leading-7 text-white/50">{t.contactSub}</p>
              <div className="mt-12 grid gap-6">
                {[[<FiMapPin key="map" />, t.locationLabel, CONTACT_ADDRESS], [<FiPhone key="ph" />, t.phoneLabel, CONTACT_PHONE], [<FiMail key="ml" />, t.emailLabel, CONTACT_EMAIL], [<FiClock key="cl" />, t.officeHoursLabel, OFFICE_HOURS]].map(([icon, label, val], i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#7DD3FC]">{icon}</span>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">{label}</div>
                      <div className="mt-2 text-sm text-white/70">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="contact-form rounded-[30px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-10" onSubmit={handleSubmit} noValidate>
              <div className="mb-8">
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#7DD3FC]">{t.formKicker}</div>
                <h3 className="mt-3 text-2xl font-black">{t.formTitle}</h3>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label htmlFor="fullName" className="sr-only">{t.fullNamePlaceholder}</label>
                  <input id="fullName" name="fullName" type="text" placeholder={t.fullNamePlaceholder} value={formData.fullName} onChange={handleInputChange} disabled={formStatus === "submitting"} className={`form-input w-full ${getFieldError("fullName") ? "border-red-400" : ""}`} />
                  {getFieldError("fullName") && <p className="mt-1 text-xs text-red-400">{getFieldError("fullName")}</p>}
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="phone" className="sr-only">{t.phonePlaceholder}</label>
                  <input id="phone" name="phone" type="tel" placeholder={t.phonePlaceholder} value={formData.phone} onChange={handleInputChange} disabled={formStatus === "submitting"} maxLength={10} className={`form-input w-full ${getFieldError("phone") ? "border-red-400" : ""}`} />
                  {getFieldError("phone") && <p className="mt-1 text-xs text-red-400">{getFieldError("phone")}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="sr-only">{t.emailPlaceholder}</label>
                  <input id="email" name="email" type="email" placeholder={t.emailPlaceholder} value={formData.email} onChange={handleInputChange} disabled={formStatus === "submitting"} className={`form-input w-full ${getFieldError("email") ? "border-red-400" : ""}`} />
                  {getFieldError("email") && <p className="mt-1 text-xs text-red-400">{getFieldError("email")}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="sr-only">{t.messagePlaceholder}</label>
                  <textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={6} value={formData.message} onChange={handleInputChange} disabled={formStatus === "submitting"} className="form-input w-full resize-none" />
                </div>
              </div>

              {formStatus === "success" && <div className="mt-5 rounded-xl bg-[#7DD3FC]/20 px-4 py-3 text-sm text-[#7DD3FC]">{t.successMessage}</div>}
              {formStatus === "error" && formErrors.length === 0 && <div className="mt-5 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-300">{t.errorMessage}</div>}

              <button type="submit" disabled={formStatus === "submitting"} className="magnetic mt-7 flex items-center justify-center gap-3 rounded-full bg-[#00B4D8] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1E3F] transition hover:bg-white disabled:opacity-60">
                {formStatus === "submitting" ? t.sending : t.sendMessage}<FiSend />
              </button>
              <p className="mt-5 text-[11px] leading-5 text-white/30">{t.formDisclaimer}</p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <button type="button" onClick={openWhatsApp} className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#20BD5A] hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)]">
                  <FaWhatsapp className="text-lg" />{t.chatOnWhatsapp}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer bg-[#051021] px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_1fr_1fr]">
            <div className="footer-reveal">
              <div className="flex items-center gap-3"><div className="relative flex h-11 w-[180px] items-center justify-center"><img src={logo} alt="Jambooneer logo" className="h-[70px] w-[290px] object-contain" /></div></div>
              <p className="mt-7 max-w-sm text-[19px] leading-6 text-white/40">{t.footerPureWater}</p>
            </div>
            <div className="footer-reveal">
              <div className="text-[19px] font-black uppercase tracking-[0.25em] text-[#7DD3FC]">{t.footerProducts}</div>
              <div className="mt-5 grid gap-3 text-[15px] text-white/45">
                <span>{t.footerPackagedWater}</span><span>{t.footerDealership}</span><span>{t.footerBulkSupply}</span><span>{t.footerMineralWater}</span><span>{t.footerOfficeSolutions}</span><span>{t.footerEventPackages}</span>
              </div>
            </div>
            <div className="footer-reveal">
              <div className="text-[19px] font-black uppercase tracking-[0.25em] text-[#7DD3FC]">{t.footerCompany}</div>
              <div className="mt-5 grid gap-3 text-[15px] text-white/45">
                <button onClick={() => scrollTo("about")} className="text-left">{t.footerAbout}</button>
                <button onClick={() => scrollTo("why-us")} className="text-left">{t.footerWhyChoose}</button>
                <button onClick={() => scrollTo("process")} className="text-left">{t.footerHowItWorks}</button>
                <button onClick={() => scrollTo("contact")} className="text-left">{t.footerContact}</button>
                <span>{t.footerCareers}</span>
              </div>
            </div>
          </div>
          <div className="footer-reveal flex flex-col justify-between gap-5 pt-8 text-[14px] uppercase tracking-[0.18em] text-white/25 md:flex-row">
            <span>{t.footerCopyright}</span><span>{t.footerTagline}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
 
