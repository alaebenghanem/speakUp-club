// Bilingual Content Configuration for Speak Up Website
const content = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            sessions: "Sessions",
            voices: "Voices",
            join: "Join Us"
        },

        // Home/Hero Section
        hero: {
            headline: "Speak Up",
            subheadline: "Your voice matters",
            description: "A safe space for shy and non-native speakers to gain confidence, find their voice, and grow without judgment.",
            cta: "Join a Session",
            ctaSecondary: "Learn More"
        },

        // About Section
        about: {
            title: "Why Speak Up Exists",
            subtitle: "Because your voice deserves to be heard",
            intro: "We know how it feels—the fear of speaking, the worry about judgment, the struggle to express yourself. Speak Up was created for everyone who wants to improve but needs a safe, supportive space to do it.",
            values: [
                {
                    icon: "shield",
                    title: "Emotional Safety",
                    description: "Zero judgment. Only support, encouragement, and understanding."
                },
                {
                    icon: "trending-up",
                    title: "Growth Over Perfection",
                    description: "Progress matters more than perfection. We celebrate every step forward."
                },
                {
                    icon: "users",
                    title: "Inclusive Community",
                    description: "A welcoming space for shy speakers, non-native speakers, and anyone finding their voice."
                }
            ]
        },

        // Sessions Section
        sessions: {
            title: "Our Speaking Sessions",
            subtitle: "Find the right session for your journey",
            types: [
                {
                    icon: "mic",
                    title: "Debates",
                    description: "Build argumentation skills through structured, respectful discussions on diverse topics.",
                    level: "Intermediate"
                },
                {
                    icon: "message-square",
                    title: "Pronunciation Exercises",
                    description: "Focused practice on clarity, articulation, and accent improvement with guided feedback.",
                    level: "All Levels"
                },
                {
                    icon: "book-open",
                    title: "Storytelling",
                    description: "Express yourself creatively through personal stories and narrative building.",
                    level: "Beginner - Intermediate"
                },
                {
                    icon: "user-plus",
                    title: "Casual Conversations",
                    description: "Low-pressure, friendly discussions to practice speaking naturally and build confidence.",
                    level: "All Levels"
                }
            ]
        },

        // Community Voices Section
        voices: {
            title: "Community Voices",
            subtitle: "Real stories from our members",
            testimonials: [
                {
                    text: "I was terrified of public speaking. After attending the Speak Up club, I gave my first presentation at university. This community changed my life.",
                    author: "Amira K.",
                    role: "Student"
                },
                {
                    text: "As a non-native speaker, I always felt embarrassed about my accent. Speak Up taught me that my voice matters exactly as it is.",
                    author: "Youssef M.",
                    role: "Young Professional"
                },
                {
                    text: "The pronunciation sessions helped me gain so much confidence. I finally feel comfortable speaking in class.",
                    author: "Leila",
                    role: "University Student"
                },
                {
                    text: "I found a community that understands my struggle. No judgment, just growth and support. I'm so grateful.",
                    author: "Anonymous",
                    role: "Member"
                },
                {
                    text: "From barely speaking to leading debates—Speak Up gave me the courage I never knew I had.",
                    author: "Omar S.",
                    role: "Member"
                }
            ]
        },

        // Join/Registration Section
        join: {
            title: "Ready to Find Your Voice?",
            subtitle: "Join our supportive community today. No pressure, no judgment—just growth.",
            formTitle: "Registration Form",
            form: {
                section1Note: "This helps us communicate and verify real participants.",
                name: "Full Name",
                age: "Age",
                email: "Email Address",
                phone: "Phone Number",
                agreementHint: "Sets the tone from day one",
                agreement: "Do you agree to respect all members and maintain a safe, supportive, and judgment-free environment?",
                agreementYes: "Yes, I agree",
                discovery: "How did you hear about us?",
                aboutMe: "Tell us about yourself",
                goals: "What do you aim to achieve from this club?",
                goalsPlaceholder: "e.g., Build confidence, improve fluency...",
                level: "Current English Level",
                levelOptions: {
                    beginner: "Beginner (A1-A2)",
                    intermediate: "Intermediate (B1-B2)",
                    advanced: "Advanced (C1-C2)"
                },
                submit: "Submit Registration"
            },
            discoveryOptions: {
                placeholder: "Select an option",
                instagram: "Instagram",
                tiktok: "TikTok",
                friend: "Friend",
                website: "Website",
                other: "Other"
            },
            socialTitle: "Connect With Us",
            socialSubtitle: "Follow along and stay in the loop",
            social: {
                instagram: "Follow on Instagram",
                tiktok: "Follow on TikTok",
                facebook: "Follow on Facebook",
                email: "Email Us"
            },
            contactEmail: "speakupclubens@gmail.com"
        },

        // Footer
        footer: {
            tagline: "Speak Up - Where Every Voice Matters",
            copyright: "© 2026 ENS Speak Up Club."
        }
    },

    ar: {
        // التنقل
        nav: {
            home: "الرئيسية",
            about: "عن النادي",
            sessions: "الجلسات",
            voices: "أصوات الأعضاء",
            join: "انضم إلينا"
        },

        // القسم الرئيسي
        hero: {
            headline: "Speak Up",
            subheadline: "Your voice matters",
            description: "بيئة داعمة ومساحة آمنة للخجولين وغير الناطقين بالإنجليزية لتطوير مهاراتهم، واكتساب الثقة، والتعبير عن أنفسهم بكل حرية دون خوف من الخطأ أو إطلاق أحكام.",
            cta: "انضم إلى جلسة",
            ctaSecondary: "اعرف المزيد"
        },

        // قسم "عن النادي"
        about: {
            title: "لماذا يوجد نادي Speak Up",
            subtitle: "لأن صوتك يستحق أن يُسمع",
            intro: "نعرف كيف يبدو الأمر—الخوف من التحدث، القلق من الحكم، الصراع للتعبير عن نفسك. تم إنشاء Speak Up للجميع الذين يريدون التحسن ولكنهم يحتاجون إلى مساحة آمنة وداعمة للقيام بذلك.",
            values: [
                {
                    icon: "shield",
                    title: "الأمان العاطفي",
                    description: "لا حكم. فقط الدعم والتشجيع والتفاهم."
                },
                {
                    icon: "trending-up",
                    title: "النمو فوق الكمال",
                    description: "التقدم أهم من الكمال. نحتفل بكل خطوة إلى الأمام."
                },
                {
                    icon: "users",
                    title: "مجتمع شامل",
                    description: "مساحة ترحيبية للمتحدثين الخجولين، وغير الناطقين بالإنجليزية كأصل، وكل من يسعى لتطوير مهاراته التعبيرية."
                }
            ]
        },

        // قسم الجلسات
        sessions: {
            title: "جلساتنا التدريبية",
            subtitle: "اعثر على الجلسة المناسبة لرحلتك",
            types: [
                {
                    icon: "mic",
                    title: "المناظرات",
                    description: "بناء مهارات الحجة من خلال مناقشات منظمة ومحترمة حول موضوعات متنوعة.",
                    level: "متوسط"
                },
                {
                    icon: "message-square",
                    title: "تمارين النطق",
                    description: "ممارسة مركزة على الوضوح والتعبير وتحسين اللكنة مع ملاحظات موجهة.",
                    level: "جميع المستويات"
                },
                {
                    icon: "book-open",
                    title: "رواية القصص",
                    description: "عبّر عن نفسك بشكل إبداعي من خلال قصصك الشخصية وبناء السرد.",
                    level: "مبتدئ - متوسط"
                },
                {
                    icon: "user-plus",
                    title: "محادثات غير رسمية",
                    description: "مناقشات ودية منخفضة الضغط لممارسة التحدث بشكل طبيعي وبناء الثقة.",
                    level: "جميع المستويات"
                }
            ]
        },

        // قسم أصوات المجتمع
        voices: {
            title: "أصوات المجتمع",
            subtitle: "قصص حقيقية من أعضائنا",
            testimonials: [
                {
                    text: "كنت خائفة من التحدث أمام الجمهور. بعد الالتحاق بالSpeak Up، قدمت أول عرض تقديمي في الجامعة. هذا المجتمع غيّر حياتي.",
                    author: "أميرة ك.",
                    role: "طالبة"
                },
                {
                    text: "كمتحدث غير أصلي، كنت دائمًا أشعر بالحرج من لهجتي. علمني Speak Up أن صوتي مهم تمامًا كما هو.",
                    author: "يوسف م.",
                    role: "محترف شاب"
                },
                {
                    text: "جلسات النطق ساعدتني على اكتساب الكثير من الثقة. أخيرًا أشعر بالراحة عند التحدث في الفصل.",
                    author: "ليلى",
                    role: "طالبة جامعية"
                },
                {
                    text: "وجدت مجتمعًا يفهم صراعي. لا حكم، فقط نمو ودعم. أنا ممتن جدًا.",
                    author: "مجهول",
                    role: "عضو"
                },
                {
                    text: "من بالكاد أتحدث إلى قيادة المناظرات—أعطاني Speak Up الشجاعة التي لم أكن أعلم أنني أملكها.",
                    author: "عمر س.",
                    role: "عضو"
                }
            ]
        },

        // قسم الانضمام/التسجيل
        join: {
            title: "هل أنت مستعد لاكتشاف صوتك؟",
            subtitle: "انضم إلى مجتمعنا الداعم اليوم. لا ضغط، لا حكم—فقط نمو.",
            formTitle: "استمارة التسجيل",
            form: {
                section1Note: "هذا يساعدنا في التواصل والتحقق من المشاركين الحقيقيين.",
                name: "الاسم الكامل",
                age: "العمر",
                email: "البريد الإلكتروني",
                phone: "رقم الهاتف",
                agreementHint: "نحدد التوجه منذ اليوم الأول",
                agreement: "هل توافق على احترام جميع الأعضاء والحفاظ على بيئة آمنة وداعمة وخالية من الأحكام؟",
                agreementYes: "نعم، أنا أوافق",
                discovery: "كيف سمعت عنا؟",
                aboutMe: "حدثنا عن نفسك",
                goals: "ما الذي تهدف إلى تحقيقه من هذا النادي؟",
                goalsPlaceholder: "مثلاً: بناء الثقة، تحسين الطلاقة...",
                level: "مستوى اللغة الإنجليزية الحالي",
                levelOptions: {
                    beginner: "مبتدئ (A1-A2)",
                    intermediate: "متوسط (B1-B2)",
                    advanced: "متقدم (C1-C2)"
                },
                submit: "إرسال التسجيل"
            },
            discoveryOptions: {
                placeholder: "اختر خياراً",
                instagram: "إنستغرام",
                tiktok: "تيك توك",
                friend: "صديق",
                website: "الموقع الإلكتروني",
                other: "آخر"
            },
            socialTitle: "تواصل معنا",
            socialSubtitle: "تابعونا لتبقوا على اطلاع دائم",
            social: {
                instagram: "تابعنا على Instagram",
                tiktok: "تابعنا على TikTok",
                facebook: "تابعنا على فيسبوك",
                email: "راسلنا عبر البريد"
            },
            contactEmail: "speakupclubens@gmail.com"
        },

        // التذييل
        footer: {
            tagline: "Speak Up - حيث كل صوت مهم",
            copyright: "© 2026 ENS Speak Up club."
        }
    },

    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            sessions: "Sessions",
            voices: "Témoignages",
            join: "Nous rejoindre"
        },

        // Section Hero
        hero: {
            headline: "Speak Up",
            subheadline: "Your voice matters",
            description: "Un espace sûr pour les personnes timides et les non-natifs pour gagner en confiance, trouver leur voix et progresser sans jugement.",
            cta: "Rejoindre une session",
            ctaSecondary: "En savoir plus"
        },

        // Section À Propos
        about: {
            title: "Pourquoi Speak Up ?",
            subtitle: "Parce que votre voix mérite d'être entendue",
            intro: "Nous savons ce que l'on ressent : la peur de parler, l'inquiétude du jugement, la difficulté à s'exprimer. Speak Up a été créé pour tous ceux qui veulent s'améliorer dans un cadre bienveillant.",
            values: [
                {
                    icon: "shield",
                    title: "Sécurité Émotionnelle",
                    description: "Aucun jugement. Uniquement du soutien, des encouragements et de la compréhension."
                },
                {
                    icon: "trending-up",
                    title: "Le Progrès avant tout",
                    description: "Le progrès compte plus que la perfection. Nous célébrons chaque étape franchie."
                },
                {
                    icon: "users",
                    title: "Communauté Inclusive",
                    description: "Un espace accueillant pour les timides, les non-natifs et tous ceux qui cherchent leur voix."
                }
            ]
        },

        // Section Sessions
        sessions: {
            title: "Nos Sessions de Parole",
            subtitle: "Trouvez la session adaptée à votre parcours",
            types: [
                {
                    icon: "mic",
                    title: "Débats",
                    description: "Développez vos compétences en argumentation à travers des discussions structurées et respectueuses.",
                    level: "Intermédiaire"
                },
                {
                    icon: "message-square",
                    title: "Exercices de Prononciation",
                    description: "Pratique ciblée sur la clarté, l'articulation et l'accent avec des retours guidés.",
                    level: "Tous niveaux"
                },
                {
                    icon: "book-open",
                    title: "Storytelling",
                    description: "Exprimez-vous de manière créative à travers des histoires personnelles et la narration.",
                    level: "Débutant - Intermédiaire"
                },
                {
                    icon: "user-plus",
                    title: "Conversations Informelles",
                    description: "Discussions amicales et sans pression pour pratiquer naturellement et gagner en confiance.",
                    level: "Tous niveaux"
                }
            ]
        },

        // Section Témoignages
        voices: {
            title: "Voix de la Communauté",
            subtitle: "Histoires réelles de nos membres",
            testimonials: [
                {
                    text: "J'étais terrifiée par la prise de parole en public. Après avoir rejoint Speak Up, j'ai fait ma première présentation à l'université.",
                    author: "Amira K.",
                    role: "Étudiante"
                },
                {
                    text: "En tant que non-native, j'avais toujours honte de mon accent. Speak Up m'a appris que ma voix compte telle qu'elle est.",
                    author: "Youssef M.",
                    role: "Jeune Professionnel"
                },
                {
                    text: "Les sessions de prononciation m'ont aidée à prendre beaucoup d'assurance. Je me sens enfin à l'aise en classe.",
                    author: "Leila",
                    role: "Étudiante"
                },
                {
                    text: "J'ai trouvé une communauté qui comprend mon combat. Pas de jugement, juste de l'entraide. Je suis reconnaissante.",
                    author: "Anonyme",
                    role: "Membre"
                },
                {
                    text: "De presque muet à meneur de débats — Speak Up m'a donné le courage que je ne pensais pas avoir.",
                    author: "Omar S.",
                    role: "Membre"
                }
            ]
        },

        // Section Rejoindre/Inscription
        join: {
            title: "Prêt à trouver votre voix ?",
            subtitle: "Rejoignez notre communauté bienveillante aujourd'hui. Sans pression, sans jugement.",
            formTitle: "Formulaire d'inscription",
            form: {
                section1Note: "Cela nous aide à communiquer et à vérifier les participants réels.",
                name: "Nom complet",
                age: "Âge",
                email: "Adresse e-mail",
                phone: "Numéro de téléphone",
                agreementHint: "Donne le ton dès le premier jour",
                agreement: "Acceptez-vous de respecter tous les membres et de maintenir un environnement sûr, bienveillant et sans jugement ?",
                agreementYes: "Oui, j'accepte",
                discovery: "Comment avez-vous entendu parler de nous ?",
                aboutMe: "Parlez-nous de vous",
                goals: "Que souhaitez-vous accomplir dans ce club ?",
                goalsPlaceholder: "ex : Gagner en confiance, améliorer la fluidité...",
                level: "Niveau d'anglais actuel",
                levelOptions: {
                    beginner: "Débutant (A1-A2)",
                    intermediate: "Intermédiaire (B1-B2)",
                    advanced: "Avancé (C1-C2)"
                },
                submit: "Envoyer l'inscription"
            },
            discoveryOptions: {
                placeholder: "Sélectionnez une option",
                instagram: "Instagram",
                tiktok: "TikTok",
                friend: "Ami",
                website: "Site web",
                other: "Autre"
            },
            socialTitle: "Suivez-nous",
            socialSubtitle: "Suivez-nous pour ne rien manquer",
            social: {
                instagram: "Suivre sur Instagram",
                tiktok: "Suivre sur TikTok",
                facebook: "Suivre sur Facebook",
                email: "Nous écrire"
            },
            contactEmail: "speakupclubens@gmail.com"
        },

        // Footer
        footer: {
            tagline: "Speak Up - Où chaque voix compte",
            copyright: "© 2026 ENS Speak Up Club."
        }
    }
};
