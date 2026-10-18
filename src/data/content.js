/* =========================================================================
   Arpita's After School Classes — SAARA CONTENT (Hindi + English)
   -------------------------------------------------------------------------
   Yahan se hi poori website ka text badal jaata hai.
   "hi" = Hindi  |  "en" = English
   Gallery images niche alag se hain.
   ========================================================================= */

/* Brand ke liye common cheezein (dono bhasha me same) */
export const site = {
  phoneDisplay: "+91 95842 37246",
  phoneDial: "+919584237246",
  whatsapp: "919584237246",
  email: "arpitagoyal57@gmail.com",
  instagram: "https://www.instagram.com/arpitas_after_school_classes?srtk=MXlyenN2MTlxeXF1&utm_source=qr",
  youtube: "https://youtube.com/@arpitasafterschoolclasses765",
  facebook: "https://www.facebook.com/share/1BjMNt6wLU/",
  maps:
    "https://www.google.com/maps/place/22%C2%B042'59.1%22N+75%C2%B053'18.2%22E/@22.7164021,75.8857994,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7164021!4d75.8883743?hl=en&entry=ttu",
  /* Google Business Profile — customers se rating / review lene ke liye */
  placeId: "ChIJETj4VyL9YjkR3nxCtg29kdk",
  googleReview:
    "https://search.google.com/local/writereview?placeid=ChIJETj4VyL9YjkR3nxCtg29kdk",
  googleListing:
    "https://www.google.com/maps/place/?q=place_id:ChIJETj4VyL9YjkR3nxCtg29kdk",
}

export const content = {
  /* ============================= HINDI ============================= */
  hi: {
    metaTitle:
      "अर्पिता की स्कूल के बाद की क्लासेज़ — इंदौर (गीता भवन)",
    brand: "अर्पिता की स्कूल के बाद की क्लासेज़",
    tagline:
      "बच्चों की रचनात्मकता को बाहर लाना और स्कूल के बाद उनकी छिपी हुई प्रतिभा को निखारना।",
    hours: "सोम–शुक्र शाम 4–7 · शनि शाम 5–7 · रवि सुबह 10–12",
    shortLoc: "गीता भवन, इंदौर",
    address:
      "34, मिश्रा विहार, गीता भवन मंदिर के पास, मनोरमागंज, इंदौर, मध्य प्रदेश – 452001",

    nav: [
      { id: "top", label: "होम" },
      { id: "about", label: "हमारे बारे में" },
      { id: "classes", label: "कक्षाएँ" },
      { id: "why", label: "हमें क्यों चुनें" },
      { id: "gallery", label: "गैलरी" },
      { id: "contact", label: "संपर्क" },
    ],

    hero: {
      tag: "गीता भवन, इंदौर · प्रवेश आरंभ",
      title: "स्कूल की घंटी के बाद — कला, संगीत और प्रतिभा",
      intro:
        "सिर्फ़ स्कूल में ही नहीं, ज़िंदगी में भी बेहतर बनें! ड्राइंग, आर्ट एंड क्राफ्ट, डांस, संगीत, योगा, स्पोर्ट्स, कराटे, शतरंज, हैंडराइटिंग, मंत्र, भजन, गीता सार, ट्यूशन और स्पेशल कैंप — बच्चों के सर्वांगीण विकास के लिए।",
      points: [
        "अनुभवी और समर्पित ट्रेनर्स",
        "सुरक्षित और खुशनुमा माहौल",
        "नियमित एक्टिविटीज़ और त्यौहार सेलिब्रेशन",
        "खेल-खेल में सीखना + आत्मविश्वास",
      ],
      ctaPrimary: "नि:शुल्क ट्रायल बुक करें",
      ctaSecondary: "कॉल / व्हाट्सऐप",
      activitiesTitle: "हमारी गतिविधियाँ",
    },

    stats: [
      ["15", "गतिविधियाँ"],
      ["7 दिन", "कक्षाएँ उपलब्ध"],
      ["4–10", "वर्ष के बच्चे"],
      ["₹2000", "प्रति माह"],
    ],

    about: {
      eyebrow: "हमारे बारे में",
      heading: "हमारे बारे में",
      paras: [
        "अर्पिता की स्कूल के बाद की क्लासेज़, इंदौर के गीता भवन क्षेत्र में स्थित एक बेहतरीन लर्निंग और एक्टिविटी सेंटर है। हमारा उद्देश्य बच्चों को किताबी ज्ञान के अलावा कला, संगीत, नृत्य, योग, मार्शल आर्ट्स, शतरंज और आध्यात्मिक शिक्षा में आगे बढ़ाना है।",
        "हम बच्चों को एक ऐसा सुरक्षित और खुशनुमा माहौल देते हैं जहाँ वे खेल-खेल में नई चीज़ें सीखते हैं और अपने आत्मविश्वास को बढ़ाते हैं।",
      ],
      points: [
        "कला, संगीत, नृत्य, योग और मार्शल आर्ट्स",
        "शतरंज, मंत्र, भजन और गीता सार",
        "छोटे और दोस्तों भरे बैच",
        "नियमित एक्टिविटीज़ व फन सेशन",
      ],
      quote:
        "हर बच्चा ख़ास है। हम उन्हें केवल सिखाते नहीं — उनके अंदर छुपी प्रतिभा को बाहर लाते हैं।",
      quoteBy: "— अर्पिता, संस्थापक",
    },

    activities: [
      { icon: "🎨", name: "ड्राइंग / स्केचिंग", desc: "बच्चों में कला और रंग भरने की क्षमता को विकसित करना।", points: ["ड्राइंग", "स्केचिंग", "रंग भरना"] },
      { icon: "✂️", name: "आर्ट एंड क्राफ्ट", desc: "कागज़, रंग और सामग्री से रचनात्मक चीज़ें बनाना।", points: ["क्राफ्ट", "DIY", "रचनात्मकता"] },
      { icon: "💃", name: "डांस", desc: "अलग-अलग डांस फ़ॉर्म्स की ट्रेनिंग — कथक, भरतनाट्यम और वेस्टर्न/क्लासिकल।", points: ["कथक", "भरतनाट्यम", "वेस्टर्न/क्लासिकल"] },
      { icon: "🎸", name: "संगीत", desc: "बच्चों के लिए म्यूजिकल इंस्ट्रूमेंट्स और सिंगिंग की क्लासेज़।", points: ["इंस्ट्रूमेंट्स", "सिंगिंग", "सुर व ताल"] },
      { icon: "🧘", name: "योगा", desc: "आसन, ध्यान और श्वास से फिटनेस और मानसिक शांति।", points: ["आसन", "ध्यान", "श्वास"] },
      { icon: "⚽", name: "स्पोर्ट्स एंड फिटनेस", desc: "खेल और व्यायाम से शारीरिक फिटनेस और टीम भावना।", points: ["खेल", "व्यायाम", "टीम भावना"] },
      { icon: "🥋", name: "कराटे / मार्शल आर्ट्स", desc: "सेल्फ-डिफ़ेंस, फिटनेस और आत्मविश्वास — चैंपियनशिप और मेडल्स के साथ।", points: ["सेल्फ-डिफ़ेंस", "फिटनेस", "चैंपियनशिप/मेडल्स"] },
      { icon: "♟️", name: "शतरंज (चेस)", desc: "दिमाग तेज़ करने वाला खेल — रणनीति, सोच और धैर्य।", points: ["रणनीति", "सोच", "धैर्य"] },
      { icon: "🖋️", name: "हैंडराइटिंग / कैलीग्राफी", desc: "लिखावट को सुंदर और आकर्षक बनाने के लिए विशेष कक्षाएँ।", points: ["सुंदर लिखाई", "कैलीग्राफी", "नियमित अभ्यास"] },
      { icon: "🕉️", name: "मंत्र", desc: "मंत्रों का शुद्ध उच्चारण और उनका सरल ज्ञान।", points: ["मंत्र", "उच्चारण", "एकाग्रता"] },
      { icon: "🙏", name: "भजन", desc: "भजन और कीर्तन से आध्यात्मिक आनंद और सुर।", points: ["भजन", "कीर्तन", "सुर"] },
      { icon: "📖", name: "गीता सार", desc: "गीता की शिक्षाओं का सरल और बाल-अनुकूल ज्ञान।", points: ["गीता", "जीवन-मूल्य", "कहानियाँ"] },
      { icon: "📚", name: "अकादमिक ट्यूशन", desc: "स्कूल के विषयों में मदद और बेहतर पढ़ाई की तैयारी।", points: ["सभी विषय", "होमवर्क सहायता", "बेहतर पढ़ाई"] },
      { icon: "🏕️", name: "स्पेशल कैंप", desc: "छुट्टियों के दौरान स्पेशल फन-फिल्ड समर और विंटर एक्टिविटी कैंप्स।", points: ["समर कैंप", "विंटर कैंप", "मस्ती व सीख"] },
      { icon: "🎊", name: "फेस्टिवल वर्कशॉप", desc: "त्योहारों के हिसाब से अलग-अलग विशेष कार्यशालाएँ।", points: ["त्योहार", "वर्कशॉप", "मस्ती"] },
    ],

    classes: {
      eyebrow: "कक्षाएँ",
      title: "हमारी कक्षाएँ और गतिविधियाँ",
      lead: "हर गतिविधि के लिए अनुभवी ट्रेनर। शुल्क — ₹2000 प्रति माह, एक गतिविधि (रोज़ 1 घंटा), 4 से 10 वर्ष के बच्चों के लिए।",
    },

    timetable: {
      title: "साप्ताहिक समय-सारणी",
      dayCol: "दिन",
      timeCol: "समय",
      rows: [
        ["सोमवार – शुक्रवार", "शाम 4:00 – 7:00"],
        ["शनिवार", "शाम 5:00 – 7:00"],
        ["रविवार", "सुबह 10:00 – दोपहर 12:00"],
      ],
      note: "विशेष वीकेंड कक्षाएँ भी उपलब्ध हैं।",
    },

    fees: {
      amount: "₹2000",
      period: "प्रति माह",
      perActivity: "एक गतिविधि के लिए",
      duration: "रोज़ 1 घंटा",
      ages: "4 – 10 वर्ष",
      note: "हर गतिविधि का शुल्क ₹2000 प्रति माह है (रोज़ 1 घंटा)। एक से ज़्यादा गतिविधि या स्पेशल कैंप के लिए हमसे संपर्क करें। समय-सारणी देखें।",
      includes: [
        "हर गतिविधि के लिए अनुभवी ट्रेनर",
        "रोज़ 1 घंटा कक्षा",
        "4 – 10 वर्ष के बच्चों के लिए",
        "₹2000 प्रति माह, एक गतिविधि",
      ],
      ctaLabel: "पूछताछ करें",
    },

    why: {
      eyebrow: "हमें क्यों चुनें",
      title: "हमें क्यों चुनें?",
      lead: "हम बच्चों के सर्वांगीण विकास पर पूरा ध्यान देते हैं — पढ़ाई से लेकर खेल, कला और आध्यात्मिक शिक्षा तक।",
      items: [
        { icon: "👩‍🏫", title: "अनुभवी ट्रेनर्स", desc: "हर गतिविधि के लिए उसी क्षेत्र का अनुभवी ट्रेनर।" },
        { icon: "🌱", title: "सर्वांगीण विकास", desc: "फिजिकल, मेंटल और आध्यात्मिक विकास पर ध्यान।" },
        { icon: "🎉", title: "नियमित एक्टिविटीज़", desc: "त्यौहार वर्कशॉप, सेलिब्रेशन और फन सेशन।" },
        { icon: "🛡️", title: "सुरक्षित माहौल", desc: "सुरक्षित और बच्चों के अनुकूल वातावरण।" },
        { icon: "🎁", title: "नि:शुल्क ट्रायल क्लास", desc: "पहले एक मुफ़्त ट्रायल क्लास लेकर देखें — पसंद आए तभी प्रवेश लें। बिल्कुल बिना जोखिम।" },
        { icon: "🎯", title: "छोटे बैच, व्यक्तिगत ध्यान", desc: "हर बैच में सीमित बच्चे, ताकि हर बच्चे को ट्रेनर का पूरा ध्यान मिले और वह झिझके बिना सीखे।" },
      ],
    },

    achievement: "🥋 हमारे बच्चों ने कराटे चैंपियनशिप में मेडल जीते!",

    gallery: {
      eyebrow: "गैलरी",
      title: "हमारी गैलरी",
      lead: "अर्पिता की क्लासेज़ की कुछ झलक — कला, संगीत, नृत्य, कराटे और मस्ती।",
      photoAlt: "अर्पिता की स्कूल के बाद की क्लासेज़ — गतिविधि की तस्वीर",
    },

    teachers: {
      eyebrow: "ट्रेनर्स",
      title: "अनुभवी ट्रेनर्स — हर गतिविधि के लिए अलग",
      lead: "हर गतिविधि को उसी क्षेत्र का अनुभवी ट्रेनर सिखाता है।",
      items: [
        { icon: "🎨", subject: "ड्राइंग / स्केचिंग", role: "कला विशेषज्ञ", desc: "चित्रकला और स्केचिंग की अनुभवी शिक्षिका।" },
        { icon: "✂️", subject: "आर्ट एंड क्राफ्ट", role: "क्राफ्ट विशेषज्ञ", desc: "क्राफ्ट और रचनात्मक गतिविधियों की विशेषज्ञ।" },
        { icon: "💃", subject: "डांस", role: "नृत्य विशेषज्ञ", desc: "कथक, भरतनाट्यम और वेस्टर्न डांस की अनुभवी शिक्षिका।" },
        { icon: "🎸", subject: "संगीत", role: "संगीत विशेषज्ञ", desc: "इंस्ट्रूमेंट्स और सिंगिंग का अनुभवी प्रशिक्षण।" },
        { icon: "🧘", subject: "योगा", role: "योग प्रशिक्षक", desc: "आसन, ध्यान और श्वास का अनुभवी प्रशिक्षण।" },
        { icon: "⚽", subject: "स्पोर्ट्स एंड फिटनेस", role: "स्पोर्ट्स कोच", desc: "खेल और फिटनेस का अनुभवी कोच।" },
        { icon: "🥋", subject: "कराटे / मार्शल आर्ट्स", role: "कराटे कोच", desc: "सेल्फ-डिफ़ेंस और फिटनेस के अनुभवी कोच।" },
        { icon: "♟️", subject: "शतरंज (चेस)", role: "शतरंज कोच", desc: "शतरंज और रणनीति के अनुभवी कोच।" },
        { icon: "🖋️", subject: "हैंडराइटिंग / कैलीग्राफी", role: "हैंडराइटिंग विशेषज्ञ", desc: "सुंदर लिखाई और कैलीग्राफी की विशेषज्ञ।" },
        { icon: "🕉️", subject: "मंत्र", role: "मंत्र शिक्षक", desc: "मंत्रों के शुद्ध उच्चारण के अनुभवी शिक्षक।" },
        { icon: "🙏", subject: "भजन", role: "भजन शिक्षक", desc: "भजन और कीर्तन के अनुभवी शिक्षक।" },
        { icon: "📖", subject: "गीता सार", role: "गीता शिक्षक", desc: "गीता की शिक्षाओं के अनुभवी शिक्षक।" },
        { icon: "📚", subject: "अकादमिक ट्यूशन", role: "अकादमिक शिक्षक", desc: "स्कूल विषयों के अनुभवी शिक्षक।" },
        { icon: "🏕️", subject: "स्पेशल कैंप", role: "कैंप कोऑर्डिनेटर", desc: "समर व विंटर कैंप का अनुभवी संचालन।" },
        { icon: "🎊", subject: "फेस्टिवल वर्कशॉप", role: "वर्कशॉप कोऑर्डिनेटर", desc: "त्यौहार वर्कशॉप का अनुभवी संचालन।" },
      ],
    },

    contact: {
      eyebrow: "संपर्क",
      title: "संपर्क करें",
      phoneLabel: "फ़ोन",
      whatsappLabel: "व्हाट्सऐप",
      emailLabel: "ईमेल",
      addressLabel: "पता",
      timeLabel: "समय",
      socialLabel: "सोशल मीडिया",
      note: "बच्चे के लिए सही गतिविधि चुनने में मदद चाहिए? हमें कॉल या व्हाट्सऐप करें — हम खुशी से मार्गदर्शन करेंगे।",
      form: {
        title: "अभी पूछताछ करें",
        parent: "अभिभावक का नाम",
        parentPh: "अभिभावक का नाम",
        child: "बच्चे का नाम",
        childPh: "बच्चे का नाम",
        age: "बच्चे की आयु",
        agePh: "4 से 10",
        activity: "गतिविधि",
        selectPh: "चुनें",
        phone: "फ़ोन नंबर",
        phonePh: "10 अंकों का मोबाइल नंबर",
        message: "संदेश (वैकल्पिक)",
        messagePh: "कोई सवाल या जानकारी",
        submit: "व्हाट्सऐप पर पूछताछ भेजें",
        errRequired: "⚠️ कृपया अभिभावक का नाम, बच्चे का नाम और फ़ोन नंबर भरें।",
        errPhone: "⚠️ फ़ोन नंबर 10 अंकों का होना चाहिए (जैसे 9876543210)।",
        success: "✅ धन्यवाद! व्हाट्सऐप खुल रहा है — वहाँ \"Send\" दबाकर संदेश भेज दें।",
        waIntro: "नमस्ते! पूछताछ — अर्पिता की स्कूल के बाद की क्लासेज़",
        waParent: "अभिभावक",
        waChild: "बच्चा",
        waActivity: "गतिविधि",
      },
    },

    footer: {
      quickLinks: "ज़रूरी लिंक",
      contactTitle: "संपर्क",
      followTitle: "हमें फॉलो करें",
      rights: "सर्वाधिकार सुरक्षित।",
    },

    actions: {
      call: "कॉल करें",
      whatsapp: "व्हाट्सऐप",
    },

    rating: {
      title: "Google पर रेटिंग दें",
      value: "5.0",
      note: "आपके सुझाव हमारे लिए अनमोल हैं।",
    },
  },

  /* ============================ ENGLISH ============================ */
  en: {
    metaTitle: "Arpita's After School Classes — Geeta Bhawan, Indore",
    brand: "Arpita's After School Classes",
    tagline:
      "Unleashing creativity and discovering hidden talents after the final bell rings.",
    hours: "Mon–Fri 4–7 PM · Sat 5–7 PM · Sun 10 AM–12 PM",
    shortLoc: "Geeta Bhawan, Indore",
    address:
      "34, Mishra Vihar, Near Geeta Bhawan Temple, Manoramaganj, Indore, Madhya Pradesh – 452001",

    nav: [
      { id: "top", label: "Home" },
      { id: "about", label: "About" },
      { id: "classes", label: "Classes" },
      { id: "why", label: "Why Us" },
      { id: "gallery", label: "Gallery" },
      { id: "contact", label: "Contact" },
    ],

    hero: {
      tag: "Geeta Bhawan, Indore · Admissions Open",
      title: "After the final bell — art, music and talent",
      intro:
        "Get better not only in school but in life too! Drawing, Art & Craft, Dance, Music, Yoga, Sports, Karate, Chess, Handwriting, Mantra, Bhajan, Geeta Saar, Tuition and Special Camps — for your child's overall development.",
      points: [
        "Experienced & dedicated trainers",
        "Safe and joyful environment",
        "Regular activities & festival celebrations",
        "Learning through play + confidence",
      ],
      ctaPrimary: "Book a Free Trial",
      ctaSecondary: "Call / WhatsApp",
      activitiesTitle: "Our Activities",
    },

    stats: [
      ["15", "Activities"],
      ["7 days", "Classes available"],
      ["4–10", "Years"],
      ["₹2000", "Per month"],
    ],

    about: {
      eyebrow: "About Us",
      heading: "About Us",
      paras: [
        "Arpita's After School Classes is a wonderful learning and activity centre located in the Geeta Bhawan area of Indore. Our aim is to help children grow beyond textbooks — in art, music, dance, yoga, martial arts, chess and spiritual learning.",
        "We give children a safe and joyful environment where they learn new things through play and build their confidence.",
      ],
      points: [
        "Art, music, dance, yoga & martial arts",
        "Chess, Mantra, Bhajan and Geeta Saar",
        "Small, friendly batches",
        "Regular activities & fun sessions",
      ],
      quote:
        "Every child is special. We don't just teach them — we bring out the talent hidden inside them.",
      quoteBy: "— Arpita, Founder",
    },

    activities: [
      { icon: "🎨", name: "Drawing / Sketching", desc: "Developing a child's skill for art and colouring.", points: ["Drawing", "Sketching", "Colouring"] },
      { icon: "✂️", name: "Art & Craft", desc: "Making creative things with paper, colours and material.", points: ["Craft", "DIY", "Creativity"] },
      { icon: "💃", name: "Dance", desc: "Training in different dance forms — Kathak, Bharatanatyam and Western/Classical.", points: ["Kathak", "Bharatanatyam", "Western/Classical"] },
      { icon: "🎸", name: "Music", desc: "Musical instruments and singing classes for children.", points: ["Instruments", "Singing", "Rhythm & melody"] },
      { icon: "🧘", name: "Yoga", desc: "Fitness and mental calm through asanas, meditation and breathing.", points: ["Asanas", "Meditation", "Breathing"] },
      { icon: "⚽", name: "Sports & Fitness", desc: "Physical fitness and team spirit through games and exercise.", points: ["Games", "Exercise", "Team spirit"] },
      { icon: "🥋", name: "Karate / Martial Arts", desc: "Self-defence, fitness and confidence — with championships and medals.", points: ["Self-defence", "Fitness", "Championships/Medals"] },
      { icon: "♟️", name: "Chess", desc: "A brain-boosting game — strategy, thinking and patience.", points: ["Strategy", "Thinking", "Patience"] },
      { icon: "🖋️", name: "Handwriting / Calligraphy", desc: "Special classes to make handwriting beautiful and attractive.", points: ["Neat writing", "Calligraphy", "Daily practice"] },
      { icon: "🕉️", name: "Mantra", desc: "Correct pronunciation of mantras and their simple knowledge.", points: ["Mantras", "Pronunciation", "Focus"] },
      { icon: "🙏", name: "Bhajan", desc: "Spiritual joy and melody through bhajan and kirtan.", points: ["Bhajan", "Kirtan", "Melody"] },
      { icon: "📖", name: "Geeta Saar", desc: "Simple, child-friendly lessons from the Bhagavad Gita.", points: ["Gita", "Life values", "Stories"] },
      { icon: "📚", name: "Academic Tuition", desc: "Help with school subjects and better study preparation.", points: ["All subjects", "Homework help", "Better learning"] },
      { icon: "🏕️", name: "Special Camps", desc: "Special fun-filled summer and winter activity camps during holidays.", points: ["Summer camp", "Winter camp", "Fun & learning"] },
      { icon: "🎊", name: "Festival Workshops", desc: "Different special workshops conducted according to festivals.", points: ["Festivals", "Workshops", "Fun"] },
    ],

    classes: {
      eyebrow: "Classes",
      title: "Our Classes & Activities",
      lead: "An experienced trainer for every activity. Fees — ₹2000 per month, one activity (1 hour daily), for children aged 4 to 10.",
    },

    timetable: {
      title: "Weekly Timetable",
      dayCol: "Day",
      timeCol: "Time",
      rows: [
        ["Monday – Friday", "4:00 – 7:00 PM"],
        ["Saturday", "5:00 – 7:00 PM"],
        ["Sunday", "10:00 AM – 12:00 PM"],
      ],
      note: "Special weekend classes are also available.",
    },

    fees: {
      amount: "₹2000",
      period: "per month",
      perActivity: "For one activity",
      duration: "1 hour daily",
      ages: "4 – 10 years",
      note: "The fee is ₹2000 per month per activity (1 hour daily). For more than one activity or special camps, please contact us. See the timetable.",
      includes: [
        "An experienced trainer for every activity",
        "1-hour class daily",
        "For children aged 4 – 10",
        "₹2000 per month, one activity",
      ],
      ctaLabel: "Enquire Now",
    },

    why: {
      eyebrow: "Why Choose Us",
      title: "Why Choose Us?",
      lead: "We focus fully on the overall development of every child — from studies to sports, art and spiritual learning.",
      items: [
        { icon: "👩‍🏫", title: "Experienced Trainers", desc: "An experienced trainer from the same field for every activity." },
        { icon: "🌱", title: "Overall Development", desc: "Attention to physical, mental and spiritual growth." },
        { icon: "🎉", title: "Regular Activities", desc: "Festival workshops, celebrations and fun sessions." },
        { icon: "🛡️", title: "Safe Environment", desc: "A safe and child-friendly environment." },
        { icon: "🎁", title: "Free Trial Class", desc: "Take a free trial class first — join only if you love it. Completely risk-free." },
        { icon: "🎯", title: "Small Batches, Personal Attention", desc: "Limited children per batch, so every child gets the trainer's full attention and learns without hesitation." },
      ],
    },

    achievement: "🥋 Our children won medals at the Karate championship!",

    gallery: {
      eyebrow: "Gallery",
      title: "Our Gallery",
      lead: "A glimpse of Arpita's Classes — art, music, dance, karate and fun.",
      photoAlt: "Arpita's After School Classes — activity photo",
    },

    teachers: {
      eyebrow: "Trainers",
      title: "Experienced Trainers — separate for every activity",
      lead: "Every activity is taught by an experienced trainer from that field.",
      items: [
        { icon: "🎨", subject: "Drawing / Sketching", role: "Art Expert", desc: "An experienced teacher of drawing and sketching." },
        { icon: "✂️", subject: "Art & Craft", role: "Craft Expert", desc: "An expert in craft and creative activities." },
        { icon: "💃", subject: "Dance", role: "Dance Expert", desc: "An experienced teacher of Kathak, Bharatanatyam and Western dance." },
        { icon: "🎸", subject: "Music", role: "Music Expert", desc: "Experienced training in instruments and singing." },
        { icon: "🧘", subject: "Yoga", role: "Yoga Instructor", desc: "Experienced training in asanas, meditation and breathing." },
        { icon: "⚽", subject: "Sports & Fitness", role: "Sports Coach", desc: "An experienced coach for games and fitness." },
        { icon: "🥋", subject: "Karate / Martial Arts", role: "Karate Coach", desc: "An experienced coach for self-defence and fitness." },
        { icon: "♟️", subject: "Chess", role: "Chess Coach", desc: "An experienced coach for chess and strategy." },
        { icon: "🖋️", subject: "Handwriting / Calligraphy", role: "Handwriting Expert", desc: "An expert in neat handwriting and calligraphy." },
        { icon: "🕉️", subject: "Mantra", role: "Mantra Teacher", desc: "An experienced teacher of correct mantra pronunciation." },
        { icon: "🙏", subject: "Bhajan", role: "Bhajan Teacher", desc: "An experienced teacher of bhajan and kirtan." },
        { icon: "📖", subject: "Geeta Saar", role: "Gita Teacher", desc: "An experienced teacher of the teachings of the Gita." },
        { icon: "📚", subject: "Academic Tuition", role: "Academic Teacher", desc: "An experienced teacher for school subjects." },
        { icon: "🏕️", subject: "Special Camps", role: "Camp Coordinator", desc: "Experienced handling of summer and winter camps." },
        { icon: "🎊", subject: "Festival Workshops", role: "Workshop Coordinator", desc: "Experienced handling of festival workshops." },
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      addressLabel: "Address",
      timeLabel: "Time",
      socialLabel: "Social Media",
      note: "Need help choosing the right activity for your child? Call or WhatsApp us — we'll be happy to guide you.",
      form: {
        title: "Enquire Now",
        parent: "Parent's name",
        parentPh: "Parent's name",
        child: "Child's name",
        childPh: "Child's name",
        age: "Child's age",
        agePh: "4 to 10",
        activity: "Activity",
        selectPh: "Select",
        phone: "Phone number",
        phonePh: "10-digit mobile number",
        message: "Message (optional)",
        messagePh: "Any question or message",
        submit: "Send enquiry on WhatsApp",
        errRequired: "⚠️ Please fill in the parent's name, the child's name and the phone number.",
        errPhone: "⚠️ Phone number must be 10 digits (e.g. 9876543210).",
        success: "✅ Thank you! WhatsApp is opening — tap \"Send\" there to send your message.",
        waIntro: "Hello! Enquiry — Arpita's After School Classes",
        waParent: "Parent",
        waChild: "Child",
        waActivity: "Activity",
      },
    },

    footer: {
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      followTitle: "Follow Us",
      rights: "All rights reserved.",
    },

    actions: {
      call: "Call",
      whatsapp: "WhatsApp",
    },

    rating: {
      title: "Rate us on Google",
      value: "5.0",
      note: "Your feedback means a lot to us.",
    },
  },
}

/* -------------------------------------------------------------------------
   GALLERY IMAGES — Instagram (@arpitas_after_school_classes) se li gayi photos
   File folder: arpita-classes/public/gallery/
   Apni photo lagane ke liye: photo yahan rakhein aur "src" badal dein.
------------------------------------------------------------------------- */
export const gallery = Array.from({ length: 12 }, (_, i) => ({
  src: `gallery/photo${i + 1}.jpg`,
}))
