import { Department, Doctor, TimeSlot, AppointmentRequest } from '@/types/clinic';

export const CLINIC_INFO = {
  nameAr: 'مجمع ميلا نجد الطبي',
  nameEn: 'Mila Najd Medical Complex',
  taglineAr: 'رعاية طبية متكاملة تجمع بين الخبرة والتكنولوجيا الحديثة',
  taglineEn: 'Comprehensive medical care combining expertise with modern technology',
  aboutAr: 'مجمع ميلا نجد الطبي هو مجمع صحي متكامل يقع في حي العارض بمدينة الرياض، ويتميز بتقديم باقة متكاملة من الخدمات الطبية والتجميلية في مختلف التخصصات. نعتمد على كوادر طبية مؤهلة وتجهيزات تشخيصية حديثة لتوفير بيئة علاجية مريحة وآمنة لك ولعائلتك.',
  aboutEn: 'Mila Najd Medical Complex is an integrated healthcare facility located in Al Aarid, Riyadh. It delivers a comprehensive range of clinical and aesthetic medical services with qualified physicians, modern diagnostic technology, and a welcoming, patient-centered care environment.',
  cityAr: 'الرياض',
  cityEn: 'Riyadh',
  districtAr: 'حي العارض، طريق الملك عبد العزيز',
  districtEn: 'King Abdulaziz Road, Al Aarid District',
  fullAddressAr: 'طريق الملك عبد العزيز، حي العارض، الرياض 13342، المملكة العربية السعودية',
  fullAddressEn: 'King Abdulaziz Road, Al Aarid, Riyadh 13342, Kingdom of Saudi Arabia',
  phoneDisplay: '050 462 7601',
  phoneInternational: '+966504627601',
  phoneClean: '+966504627601',
  googleMapsUrl: 'https://www.google.com/maps?cid=4274182766491625190',
  tebcanUrl: 'https://tebcan.com/ar/Saudi/مركز/مجمع-ميلا-نجد-الطبي_100517',
  existingWebsiteUrl: 'http://www.milanajd.com/',
  coordinates: {
    lat: 24.885918,
    lng: 46.610632,
  },
};

export const VERIFIED_DEPARTMENTS: Department[] = [
  {
    id: 'dept-internal',
    slug: 'internal-medicine',
    nameAr: 'الطب الباطني',
    nameEn: 'Internal Medicine',
    shortDescAr: 'تشخيص ومتابعة الأمراض الباطنية المزمنة وضغط الدم والسكري واضطرابات الجهاز الهضمي.',
    shortDescEn: 'Diagnosis and clinical management of chronic conditions, diabetes, hypertension, and digestive health.',
    longDescAr: 'يقدم قسم الطب الباطني في مجمع ميلا نجد رعاية شاملة للبالغين تشمل الكشف المبكر والتشخيص الدقيق للأمراض الحادة والمزمنة، وإدارة متكاملة لمرضى السكري وارتفاع ضغط الدم والغدد الصماء، تحت إشراف أخصائيين واستشاريين معتمدين.',
    longDescEn: 'The Internal Medicine Department at Mila Najd Medical Complex delivers comprehensive care for adults, focusing on early diagnostic screening, treatment of acute and chronic disorders, and structured management of diabetes, hypertension, and endocrine conditions.',
    icon: 'Stethoscope',
    isVerified: true,
    verifiedSource: 'Tebcan Medical Registry & Google Profile',
    servicesAr: [
      'متابعة وتشخيص داء السكري واعتلالاته',
      'علاج ومراقبة ضغط الدم وأمراض القلب الوعائية الأولية',
      'فحوصات الجهاز الهضمي والقولون واضطرابات المعدة',
      'تقييم وظائف الكلى والكبد والدهون الثلاثية',
      'الفحص الطبي الدوري الشامل للبالغين'
    ],
    servicesEn: [
      'Comprehensive diabetes management and monitoring',
      'Hypertension and primary cardiovascular screening',
      'Gastrointestinal and digestive disorder evaluations',
      'Kidney, liver, and lipid panel clinical assessments',
      'Comprehensive routine wellness checkups for adults'
    ]
  },
  {
    id: 'dept-dental',
    slug: 'dentistry',
    nameAr: 'طب وجراحة الأسنان',
    nameEn: 'Dentistry & Oral Care',
    shortDescAr: 'علاجات الأسنان الشاملة، الحشوات التجميلية، علاج الجذور، والتنظيف وتبييض الأسنان.',
    shortDescEn: 'Comprehensive dental services, aesthetic restorations, root canal treatments, and preventive oral care.',
    longDescAr: 'يوفر قسم طب الأسنان أحدث الحلول العلاجية والتجميلية لصحة الفم والأسنان بأحدث تقنيات التعقيم والمعدات الرقمية، لتجربة علاجية مريحة ونتائج تجميلية طبيعية تمنحك ابتسامة واثقة.',
    longDescEn: 'The Dentistry Department offers modern clinical and cosmetic oral healthcare utilizing high-standard sterilization protocols and digital diagnostics for comfortable patient visits and lasting dental health.',
    icon: 'Smile',
    isVerified: true,
    verifiedSource: 'Tebcan Medical Registry & Google Profile',
    servicesAr: [
      'تنظيف الأسنان وإزالة الجير وتلميع المينا',
      'الحشوات التجميلية الدقيقة وعلاج التسوس',
      'علاج جذور وأعصاب الأسنان بأحدث الأجهزة',
      'تبييض الأسنان الاحترافي بالعيادة',
      'الفحص الوقائي الدوري لصحة اللثة والأسنان'
    ],
    servicesEn: [
      'Professional scaling, polishing, and calculus removal',
      'Aesthetic composite restorations and cavity treatment',
      'Advanced root canal endodontic therapy',
      'In-clinic professional teeth whitening',
      'Preventive periodontal and oral health examinations'
    ]
  },
  {
    id: 'dept-derma',
    slug: 'dermatology-aesthetics',
    nameAr: 'الجلدية والتجميل والليزر',
    nameEn: 'Dermatology & Aesthetics',
    shortDescAr: 'علاج الأمراض الجلدية، جلسات العناية بالبشرة، وإجراءات الليزر والتجميل الطبي غير الجراحي.',
    shortDescEn: 'Clinical dermatological care, aesthetic skin rejuvenation, and certified medical laser treatments.',
    longDescAr: 'يقدم قسم الجلدية والتجميل في مجمع ميلا نجد استشارات طبية متخصصة لعلاج مشكلات البشرة والشعر، بالإضافة إلى بروتوكولات العناية المتقدمة وجلسات الليزر الطبية المعتمدة لنتائج طبيعية وآمنة.',
    longDescEn: 'The Dermatology and Aesthetics department delivers specialized consultations for skin, hair, and nail health alongside certified non-surgical aesthetic enhancements and modern laser technology.',
    icon: 'Sparkles',
    isVerified: true,
    verifiedSource: 'Tebcan Medical Registry & Verified Clinic Scope',
    servicesAr: [
      'تشخيص وعلاج الأمراض الجلدية وحب الشباب والأكزيما',
      'جلسات الليزر الطبي لإزالة الشعر وتجديد البشرة',
      'حقن البوتوكس والفيلر التجميلي بإشراف طبيب مختص',
      'علاجات تساقط الشعر وبلازما النضارة (PRP)',
      'جلسات التقشير الطبي وتنظيف البشرة العميق'
    ],
    servicesEn: [
      'Diagnosis and treatment of skin conditions, acne, and eczema',
      'Medical laser hair removal and skin resurfacing',
      'Physician-administered neuromodulator and filler treatments',
      'PRP therapy for skin rejuvenation and hair loss management',
      'Medical chemical peels and deep facial cleansing'
    ]
  },
  {
    id: 'dept-pediatrics',
    slug: 'paediatrics',
    nameAr: 'طب الأطفال',
    nameEn: 'Paediatrics & Child Health',
    shortDescAr: 'متابعة نمو وصحة الأطفال وحديثي الولادة، وعلاج الأمراض التنفسية والمعدية الشائعة.',
    shortDescEn: 'Developmental monitoring, newborn checks, and pediatric care for acute and childhood illnesses.',
    longDescAr: 'يقدم قسم الأطفال رعاية دافئة ومتخصصة تلبي احتياجات طفلك الصحية منذ الولادة وحتى مرحلة المراهقة، مع متابعة دقيقة لمؤشرات النمو والتطور البدني ومناعة الطفل في بيئة مبهجة ومطمئنة.',
    longDescEn: 'The Paediatrics Department provides gentle, dedicated clinical care for infants, children, and adolescents, monitoring growth milestones and treating acute childhood illnesses in a child-friendly environment.',
    icon: 'Baby',
    isVerified: true,
    verifiedSource: 'Tebcan Medical Registry',
    servicesAr: [
      'فحص ومتابعة نمو الرضع وحديثي الولادة',
      'علاج نزلات البرد والالتهابات التنفسية والربو لدى الأطفال',
      'علاج اضطرابات الجهاز الهضمي والنزلة المعوية',
      'الاستشارات التغذوية ومتابعة حساسية الطعام',
      'الفحوصات الطبية الدورية لطلاب المدارس'
    ],
    servicesEn: [
      'Infant and newborn growth and wellness evaluations',
      'Treatment of pediatric respiratory infections and asthma',
      'Management of childhood gastrointestinal conditions',
      'Pediatric nutritional advice and allergy screening',
      'Routine pre-school and general health checkups'
    ]
  },
  {
    id: 'dept-obgyn',
    slug: 'obstetrics-gynaecology',
    nameAr: 'النساء والولادة',
    nameEn: 'Obstetrics & Gynaecology',
    shortDescAr: 'متابعة الحمل بالموجات فوق الصوتية، الرعاية النسائية الوقائية، وتنظيم الأسرة.',
    shortDescEn: 'Comprehensive prenatal ultrasound monitoring, preventive women health, and reproductive care.',
    longDescAr: 'يوفر قسم النساء والولادة رعاية طبية شاملة ترافق المرأة في جميع مراحل حياتها، بدءاً من الفحوصات الدورية وصولاً إلى برامج متابعة الحمل بأحدث أجهزة السونار المتقدمة للاطمئنان على صحة الأم والجنين.',
    longDescEn: 'The Obstetrics & Gynaecology department delivers comprehensive healthcare throughout all stages of women’s health, including ultrasound pregnancy monitoring and preventive clinical screenings.',
    icon: 'HeartHandshake',
    isVerified: true,
    verifiedSource: 'Tebcan Medical Registry',
    servicesAr: [
      'متابعة الحمل الدورية بالموجات فوق الصوتية (السونار)',
      'الفحص الوقائي الشامل لصحة المرأة',
      'علاج اضطرابات الدورة الشهرية والهرمونات',
      'استشارات تنظيم الأسرة وما قبل الزواج',
      'متابعة الحمل الحرج وتقديم الإرشادات التغذوية'
    ],
    servicesEn: [
      'Ultrasound pregnancy scans and fetal development checks',
      'Comprehensive preventive wellness exams for women',
      'Hormonal balance and menstrual disorder management',
      'Family planning and preconception clinical counseling',
      'Prenatal guidance and maternal nutritional planning'
    ]
  },
  {
    id: 'dept-general',
    slug: 'general-medicine-emergency',
    nameAr: 'الطب العام والطوارئ',
    nameEn: 'General Medicine & Urgent Care',
    shortDescAr: 'التقييم الطبي الفوري، علاج الحالات الحادة، الإسعافات الأولية، والإحالات التخصصية.',
    shortDescEn: 'First-line clinical triage, acute illness management, basic wound dressing, and specialist referrals.',
    longDescAr: 'يقف قسم الطب العام والطوارئ في الخط الأول لاستقبال المرضى وتقديم الفحص السريري الأولي، وتدبير الحالات المرضية العاجلة والحميات، وتوجيه المريض إلى التخصص المناسب بسرعة واحترافية.',
    longDescEn: 'The General Medicine & Urgent Care section serves as the primary clinical gateway for rapid symptom evaluation, minor wound dressings, acute symptom stabilization, and direct specialist referral.',
    icon: 'Activity',
    isVerified: true,
    verifiedSource: 'Tebcan Medical Registry',
    servicesAr: [
      'الفحص السريري الأولي وتشخيص الأعراض المفاجئة',
      'علاج حالات ارتفاع الحرارة والإنفلونزا الحادة',
      'العناية بالجروح السطحية والغيارات الطبية الأولية',
      'قياس المؤشرات الحيوية وفحوصات السكر وضغط الدم الفورية',
      'التوجيه الطبي والإحالة السريعة للعيادات التخصصية'
    ],
    servicesEn: [
      'Initial clinical triage and acute symptom assessment',
      'Treatment of seasonal viral infections and acute fevers',
      'Minor wound dressings and initial first-aid treatment',
      'Immediate vital sign, glucose, and blood pressure checks',
      'Integrated referral coordination to specialized clinics'
    ]
  }
];

export const VERIFIED_DOCTORS: Doctor[] = [
  {
    id: 'doc-abdullah-mokhtar',
    slug: 'abdullah-mokhtar',
    nameAr: 'أخصائي أول عبد الله مختار',
    nameEn: 'Senior Specialist Abdullah Mokhtar',
    titleAr: 'أخصائي أول الطب الباطني',
    titleEn: 'Senior Specialist - Internal Medicine',
    specialtyAr: 'الطب الباطني والأمراض المزمنة',
    specialtyEn: 'Internal Medicine & Chronic Disease Management',
    departmentSlug: 'internal-medicine',
    bioAr: 'أخصائي أول في الطب الباطني مع خبرة إكلينيكية واسعة في تشخيص وعلاج الأمراض الباطنية المزمنة وإدارة داء السكري وارتفاع ضغط الدم واضطرابات الجهاز الهضمي بمجمع ميلا نجد الطبي.',
    bioEn: 'Senior Specialist in Internal Medicine with extensive clinical experience managing chronic adult diseases, diabetes, hypertension, and digestive conditions at Mila Najd Medical Complex.',
    imageUrl: 'https://ui-avatars.com/api/?name=Dr+Abdullah&background=267D88&color=fff&size=400',
    isVerified: true,
    sourceVerification: 'Official profile listed on Tebcan Healthcare Registry for Mila Najd Medical Complex (Center ID 100517).'
  },
  {
    id: 'doc-yasser-abu-elkhair',
    slug: 'yasser-abu-elkhair',
    nameAr: 'دكتور ياسر أبو الخير',
    nameEn: 'Dr. Yasser Abu El-Khair',
    titleAr: 'طبيب أسنان وجراحة الفم',
    titleEn: 'Dentist - Dental & Oral Care',
    specialtyAr: 'طب وجراحة الأسنان والعلاجات التحفظية',
    specialtyEn: 'General & Restorative Dentistry',
    departmentSlug: 'dentistry',
    bioAr: 'طبيب أسنان ممارس في مجمع ميلا نجد الطبي، متخصص في علاجات الأسنان التحفظية، علاج الجذور، الحشوات التجميلية، والتنظيف وتبييض الأسنان بالعيادة.',
    bioEn: 'Dental practitioner at Mila Najd Medical Complex, specialized in restorative dentistry, endodontic treatment, aesthetic composite fillings, and clinical teeth whitening.',
    imageUrl: 'https://ui-avatars.com/api/?name=Dr+Yasser&background=267D88&color=fff&size=400',
    isVerified: true,
    sourceVerification: 'Official profile listed on Tebcan Healthcare Registry for Mila Najd Medical Complex (Center ID 100517).'
  }
];

export const SAMPLE_TIME_SLOTS: TimeSlot[] = [
  { id: 'm1', timeAr: '09:00 صباحاً', timeEn: '09:00 AM', period: 'morning' },
  { id: 'm2', timeAr: '10:00 صباحاً', timeEn: '10:00 AM', period: 'morning' },
  { id: 'm3', timeAr: '11:00 صباحاً', timeEn: '11:00 AM', period: 'morning' },
  { id: 'm4', timeAr: '11:30 صباحاً', timeEn: '11:30 AM', period: 'morning' },
  { id: 'e1', timeAr: '04:30 مساءً', timeEn: '04:30 PM', period: 'evening' },
  { id: 'e2', timeAr: '05:30 مساءً', timeEn: '05:30 PM', period: 'evening' },
  { id: 'e3', timeAr: '06:30 مساءً', timeEn: '06:30 PM', period: 'evening' },
  { id: 'e4', timeAr: '08:00 مساءً', timeEn: '08:00 PM', period: 'evening' },
  { id: 'e5', timeAr: '09:00 مساءً', timeEn: '09:00 PM', period: 'evening' }
];

export const SEEDED_DEMO_APPOINTMENTS: AppointmentRequest[] = [
  {
    id: 'req-01',
    referenceNumber: 'MN-8491',
    patientName: 'سارة عبد الرحمن العتيبي',
    phone: '0501234567',
    departmentSlug: 'dermatology-aesthetics',
    preferredDate: '2026-10-08',
    timeSlot: '05:30 مساءً (05:30 PM)',
    notes: 'طلب موعد استشارة جلسة نضارة وليزر',
    status: 'pending',
    createdAt: '2026-10-06T10:15:00Z'
  },
  {
    id: 'req-02',
    referenceNumber: 'MN-8492',
    patientName: 'فيصل محمد الدوسري',
    phone: '0559876543',
    departmentSlug: 'internal-medicine',
    doctorSlug: 'abdullah-mokhtar',
    preferredDate: '2026-10-07',
    timeSlot: '10:00 صباحاً (10:00 AM)',
    notes: 'متابعة قراءات السكر والضغط مع الأخصائي',
    status: 'confirmed',
    createdAt: '2026-10-06T09:30:00Z'
  },
  {
    id: 'req-03',
    referenceNumber: 'MN-8493',
    patientName: 'خالد إبراهيم الشمري',
    phone: '0543322110',
    departmentSlug: 'dentistry',
    doctorSlug: 'yasser-abu-elkhair',
    preferredDate: '2026-10-09',
    timeSlot: '06:30 مساءً (06:30 PM)',
    notes: 'فحص دوري وتنظيف أسنان',
    status: 'pending',
    createdAt: '2026-10-05T16:20:00Z'
  },
  {
    id: 'req-04',
    referenceNumber: 'MN-8494',
    patientName: 'نورة فهد القحطاني',
    phone: '0567788990',
    departmentSlug: 'paediatrics',
    preferredDate: '2026-10-07',
    timeSlot: '11:00 صباحاً (11:00 AM)',
    notes: 'فحص دوري لطفل عمره سنتين',
    status: 'completed',
    createdAt: '2026-10-04T12:00:00Z'
  },
  {
    id: 'req-05',
    referenceNumber: 'MN-8495',
    patientName: 'عبد العزيز ناصر المطيري',
    phone: '0507654321',
    departmentSlug: 'obstetrics-gynaecology',
    preferredDate: '2026-10-10',
    timeSlot: '04:30 مساءً (04:30 PM)',
    notes: 'استشارة سونار ومتابعة حمل',
    status: 'pending',
    createdAt: '2026-10-06T14:45:00Z'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    questionAr: 'أين يقع مجمع ميلا نجد الطبي في الرياض؟',
    questionEn: 'Where is Mila Najd Medical Complex located in Riyadh?',
    answerAr: 'يقع المجمع في حي العارض، على طريق الملك عبد العزيز بالرياض (الرمز البريدي 13342). يمكنك الضغط على زر "الاتجاهات على الخريطة" للوصول المباشر عبر خرائط Google.',
    answerEn: 'The complex is located on King Abdulaziz Road in Al Aarid district, Riyadh 13342. You can tap "Get Directions" in the navigation or footer for instant GPS navigation via Google Maps.'
  },
  {
    id: 'faq-2',
    questionAr: 'كيف يعمل نموذج طلب الموعد عبر هذا الموقع؟',
    questionEn: 'How does the online appointment request demo work?',
    answerAr: 'يتيح لك الموقع اختيار التخصص الطبي والطبيب والوقت المناسب، ثم إرسال طلب مبدئي. في الإصدار الفعلي، يتلقى قسم الاستقبال الطلب عبر لوحة التحكم ويتواصل مع المراجع لتأكيد الحجز.',
    answerEn: 'The site allows you to select a specialty, doctor, date, and time slot, then send an initial request. In the production version, the reception desk receives the request via the management dashboard and contacts the patient to confirm.'
  },
  {
    id: 'faq-3',
    questionAr: 'ما هي التخصصات الطبية المتوفرة بالمجمع؟',
    questionEn: 'What medical specialties are available at the complex?',
    answerAr: 'يضم المجمع 6 تخصصات رئيسية موثقة: الطب الباطني، طب وجراحة الأسنان، الجلدية والتجميل والليزر، طب الأطفال، النساء والولادة، والطب العام والطوارئ.',
    answerEn: 'The complex offers 6 verified clinical departments: Internal Medicine, Dentistry, Dermatology & Aesthetics, Paediatrics, Obstetrics & Gynaecology, and General Medicine & Urgent Care.'
  },
  {
    id: 'faq-4',
    questionAr: 'هل يتطلب حجز الموعد دفع رسوم مسبقة؟',
    questionEn: 'Does requesting an appointment require advance payment?',
    answerAr: 'طلب الموعد عبر الموقع الإلكتروني مجاني بالكامل؛ ويتم سداد رسوم الكشفية أو اعتماد التأمين الصحي مباشرة عند حضور المراجع إلى مكتب الاستقبال في المجمع.',
    answerEn: 'Requesting an appointment online is completely free of charge. Consultation fees or insurance approvals are handled directly upon check-in at the reception desk.'
  },
  {
    id: 'faq-5',
    questionAr: 'ما هي المستندات المطلوبة عند الحضور للعيادة؟',
    questionEn: 'What documents should I bring to the appointment?',
    answerAr: 'يرجى إبراز الهوية الوطنية أو الإقامة وبطاقة التأمين الصحي السارية (إن وجدت) لموظف الاستقبال لفتح أو استدعاء الملف الطبي.',
    answerEn: 'Please present your National ID or Iqama, along with your valid health insurance card (if applicable), to the reception team upon arrival.'
  }
];
