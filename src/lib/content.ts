export type Localized = { en: string; vi: string };
export type DemoAsset = { src: string; alt: Localized };

export const navigation = [
  { label: { en: "Work", vi: "Công việc" }, href: "/work" },
  { label: { en: "Notes", vi: "Ghi chép" }, href: "/notes" },
  { label: { en: "Reading", vi: "Đọc" }, href: "/reading" },
  { label: { en: "Places", vi: "Nơi chốn" }, href: "/places" },
  { label: { en: "About", vi: "Giới thiệu" }, href: "/about" },
] as const;

export const siteContent = {
  hero: {
    name: "Phạm Công Nguyễn Khôi",
    role: { en: "Data Engineer / Data Analyst", vi: "Kỹ sư dữ liệu / Chuyên viên phân tích dữ liệu" },
    headlineOne: { en: "A universe of signals.", vi: "Một vũ trụ của những tín hiệu." },
    headlineTwo: { en: "Some become systems. Others become memories.", vi: "Có tín hiệu thành hệ thống. Có tín hiệu thành ký ức." },
    body: {
      en: "I build reliable data pipelines and BI systems, then turn operational questions into evidence people can act on.",
      vi: "Mình xây dựng pipeline dữ liệu và hệ thống BI đáng tin cậy, rồi chuyển các câu hỏi vận hành thành bằng chứng có thể hành động.",
    },
    cta: { en: "Explore", vi: "Khám phá" },
    archive: { en: "An evolving archive", vi: "Một kho lưu trữ luôn tiếp diễn" },
    visualLabel: { en: "Archive map", vi: "Bản đồ lưu trữ" },
    visualContents: { en: "Work · Notes · Reading · Places", vi: "Công việc · Ghi chép · Đọc · Chuyến đi" },
    visual: {
      src: "/demo/universe/demo-universe-signal-map.svg",
      alt: {
        en: "An abstract signal map connecting work, notes, reading, and places",
        vi: "Bản đồ tín hiệu trừu tượng kết nối công việc, ghi chép, việc đọc và nơi chốn",
      },
    },
  },
  recent: {
    eyebrow: { en: "Recent signals", vi: "Tín hiệu gần đây" },
    title: { en: "What I am noticing now.", vi: "Những điều mình đang để ý." },
    intro: {
      en: "A live cross-section of work in progress, saved ideas, places, and small observations.",
      vi: "Một lát cắt đang sống của công việc, ý tưởng được lưu, nơi chốn và những quan sát nhỏ.",
    },
  },
  work: {
    eyebrow: { en: "Selected work", vi: "Công việc chọn lọc" },
    title: { en: "Questions that became systems.", vi: "Những câu hỏi đã thành hệ thống." },
    intro: {
      en: "Work drawn directly from my experience at FSS, Winwin Logistics, and a personal marketing analytics project.",
      vi: "Công việc được trình bày trực tiếp từ kinh nghiệm tại FSS, Winwin Logistics và dự án phân tích marketing cá nhân.",
    },
    previewLabel: { en: "Selected preview", vi: "Hình xem trước" },
  },
  notes: {
    eyebrow: { en: "Notes", vi: "Ghi chép" },
    title: { en: "Notes from unfinished thinking.", vi: "Ghi chép từ những suy nghĩ còn dang dở." },
    intro: {
      en: "Data, design, and everyday life.",
      vi: "Dữ liệu, thiết kế và đời sống thường ngày.",
    },
    allNotes: { en: "Open the notes archive", vi: "Mở kho ghi chép" },
  },
  reading: {
    eyebrow: { en: "Reading", vi: "Đọc" },
    title: { en: "On the shelf.", vi: "Trên kệ sách." },
    intro: {
      en: "Books and ideas worth returning to.",
      vi: "Những cuốn sách và ý tưởng đáng để quay lại.",
    },
    savedBecause: { en: "Saved because", vi: "Lưu lại vì" },
  },
  places: {
    eyebrow: { en: "Places", vi: "Chuyến đi" },
    title: { en: "Places I’ve been.", vi: "Những nơi mình đã đi qua." },
    intro: {
      en: "Photographs, weather, and a few things that stayed with me.",
      vi: "Ảnh, thời tiết và vài chuyện nhỏ còn nhớ.",
    },
  },
  about: {
    eyebrow: { en: "About", vi: "Giới thiệu" },
    title: { en: "The person behind the systems.", vi: "Con người phía sau những hệ thống." },
    bodyOne: {
      en: "I am a Data Engineer at FSS JSC with experience building banking BI systems, Python and PySpark pipelines, structured data models, and decision-ready reporting.",
      vi: "Tôi là Data Engineer tại FSS JSC, có kinh nghiệm xây dựng hệ thống BI ngân hàng, pipeline Python và PySpark, mô hình dữ liệu có cấu trúc và báo cáo hỗ trợ quyết định.",
    },
    bodyTwo: {
      en: "My background combines Management Information Systems, Digital Business and Artificial Intelligence with hands-on analytics in logistics, banking, and marketing.",
      vi: "Nền tảng của tôi kết hợp Hệ thống thông tin quản lý, Kinh doanh số và Trí tuệ nhân tạo với kinh nghiệm phân tích thực tế trong logistics, ngân hàng và marketing.",
    },
    hello: { en: "Say hello", vi: "Gửi lời chào" },
  },
  footer: { back: { en: "Back to top", vi: "Về đầu trang" } },
} as const;

export const cvFacts = {
  experience: [
    {
      period: "APR 2025 — PRESENT",
      role: { en: "Data Engineer", vi: "Kỹ sư dữ liệu" },
      company: "FSS JSC · Ho Chi Minh City",
      highlights: [
        { en: "Delivered 10+ BI dashboards for banking clients to monitor operational and financial KPIs.", vi: "Triển khai hơn 10 dashboard BI cho khách hàng ngân hàng để theo dõi KPI vận hành và tài chính." },
        { en: "Designed automated Python and PySpark pipelines for reliable BI datasets.", vi: "Thiết kế pipeline tự động bằng Python và PySpark để tạo bộ dữ liệu BI đáng tin cậy." },
        { en: "Integrated and standardized 20+ data sources into structured data models.", vi: "Tích hợp và chuẩn hóa hơn 20 nguồn dữ liệu thành các mô hình dữ liệu có cấu trúc." },
      ],
    },
    {
      period: "SEP 2024 — MAR 2025",
      role: { en: "Data Analyst", vi: "Chuyên viên phân tích dữ liệu" },
      company: "Winwin Logistics JSC · Ho Chi Minh City",
      highlights: [
        { en: "Analyzed logistics and delivery operations to identify bottlenecks and performance gaps.", vi: "Phân tích vận hành logistics và giao nhận để xác định nút thắt và khoảng trống hiệu suất." },
        { en: "Built Power BI dashboards for delivery, cost-efficiency, and resource-utilization KPIs.", vi: "Xây dựng dashboard Power BI cho KPI giao hàng, hiệu quả chi phí và sử dụng nguồn lực." },
        { en: "Reduced manual reporting time by 20%.", vi: "Giảm 20% thời gian lập báo cáo thủ công." },
      ],
    },
  ],
  education: {
    period: "SEP 2021 — MAY 2025",
    school: "University of Economics and Law (UEL)",
    degree: { en: "Bachelor’s Degree in Management Information Systems", vi: "Cử nhân Hệ thống thông tin quản lý" },
    major: { en: "Digital Business and Artificial Intelligence · Ranking: Good", vi: "Kinh doanh số và Trí tuệ nhân tạo · Xếp loại: Khá" },
  },
  certifications: ["TOEIC Certificate · 690 / 270", "Google Data Analytics · Coursera", "Data Analyst Associate · DataCamp"],
  skills: [
    { label: "Analysis & BI", value: "Power BI · Excel · Tableau · IBM Cognos · KPI Reporting" },
    { label: "Programming", value: "SQL / T-SQL · Python · Pandas · NumPy · PySpark · Git" },
    { label: "Data Engineering", value: "ETL / ELT · Spark · Data Modeling · Warehousing · dbt · Validation · Automation" },
    { label: "Cloud", value: "AWS · Azure (fundamental)" },
  ],
} as const;

export const recentSignals = [
  {
    key: "banking",
    type: { en: "Work", vi: "Công việc" },
    meta: { en: "FSS JSC / Apr 2025—Present", vi: "FSS JSC / 04.2025—Hiện tại" },
    title: { en: "Building data systems for banking", vi: "Xây dựng hệ thống dữ liệu cho ngân hàng" },
    summary: {
      en: "Reliable pipelines, shared definitions, and decision-ready reporting across fragmented financial data.",
      vi: "Pipeline đáng tin cậy, định nghĩa dùng chung và báo cáo sẵn sàng cho quyết định từ dữ liệu tài chính phân mảnh.",
    },
    relation: {
      en: "Connected to a note about why more dashboard information does not always create more understanding.",
      vi: "Kết nối với một ghi chép về lý do nhiều thông tin trên dashboard chưa chắc tạo ra nhiều hiểu biết hơn.",
    },
    href: "/#work",
    size: "feature",
    asset: {
      src: "/demo/work/demo-banking-data-system.svg",
      alt: { en: "Abstract banking data system dashboard", vi: "Minh họa hệ thống dữ liệu ngân hàng" },
    },
  },
  {
    key: "dashboards",
    type: { en: "Note", vi: "Ghi chép" },
    meta: { en: "6 min / Interface", vi: "6 phút / Giao diện" },
    title: { en: "Why dashboards often show too much", vi: "Vì sao dashboard thường hiển thị quá nhiều" },
    summary: {
      en: "More information does not automatically create more understanding.",
      vi: "Nhiều thông tin hơn không tự động tạo ra nhiều hiểu biết hơn.",
    },
    relation: {
      en: "The same question appears in my banking work: what should remain visible when a system becomes complex?",
      vi: "Cùng câu hỏi ấy xuất hiện trong công việc ngân hàng: điều gì cần còn nhìn thấy khi hệ thống trở nên phức tạp?",
    },
    href: "/notes",
    size: "text",
  },
  {
    key: "dalat",
    type: { en: "Place", vi: "Chuyến đi" },
    meta: { en: "Đà Lạt / Field note", vi: "Đà Lạt / Ghi chú thực địa" },
    title: { en: "Morning fog, concrete, and quiet distance", vi: "Sương sớm, bê tông và khoảng cách tĩnh lặng" },
    summary: { en: "A small memory from a slower morning.", vi: "Một ký ức nhỏ từ buổi sáng chậm rãi." },
    relation: {
      en: "A reminder that distance and quiet can change the scale of a problem.",
      vi: "Một lời nhắc rằng khoảng cách và sự tĩnh lặng có thể thay đổi cách mình nhìn một vấn đề.",
    },
    href: "/#places",
    size: "image",
    asset: {
      src: "/demo/places/demo-place-dalat.svg",
      alt: { en: "Atmospheric morning landscape in Đà Lạt", vi: "Phong cảnh buổi sáng ở Đà Lạt" },
    },
  },
  {
    key: "reading",
    type: { en: "Reading", vi: "Đọc" },
    meta: { en: "Saved idea / Systems", vi: "Ý tưởng đã lưu / Hệ thống" },
    title: { en: "Seeing relationships, not isolated events", vi: "Nhìn thấy mối quan hệ, không chỉ sự kiện riêng lẻ" },
    summary: { en: "A reminder from Donella Meadows.", vi: "Một lời nhắc từ Donella Meadows." },
    relation: {
      en: "Systems thinking connects the feedback loops in my work with the patterns I notice elsewhere.",
      vi: "Tư duy hệ thống kết nối các vòng phản hồi trong công việc với những mẫu hình mình nhìn thấy ở nơi khác.",
    },
    href: "/#reading",
    size: "compact",
    asset: {
      src: "/demo/reading/demo-reading-systems.svg",
      alt: { en: "Abstract editorial cover about systems", vi: "Bìa biên tập trừu tượng về tư duy hệ thống" },
    },
  },
  {
    key: "thought",
    type: { en: "Thought", vi: "Suy nghĩ" },
    meta: { en: "Observation / 17 Aug", vi: "Quan sát / 17 Thg 8" },
    title: { en: "A useful system should leave room for judgment.", vi: "Một hệ thống hữu ích nên chừa chỗ cho phán đoán." },
    summary: {
      en: "Automation is strongest when it clarifies the human decision instead of hiding it.",
      vi: "Tự động hóa mạnh nhất khi làm rõ quyết định của con người thay vì che giấu nó.",
    },
    relation: {
      en: "A principle I carry from automation work into interface design and everyday decisions.",
      vi: "Một nguyên tắc mình mang từ công việc tự động hóa sang thiết kế giao diện và quyết định thường ngày.",
    },
    href: "/notes",
    size: "quote",
  },
] as const;

export const work = [
  {
    index: "01",
    slug: "banking-data-systems",
    year: { en: "Apr 2025 — Present", vi: "04.2025 — Hiện tại" },
    discipline: { en: "Data Engineer · FSS JSC", vi: "Kỹ sư dữ liệu · FSS JSC" },
    title: { en: "Banking BI & Data Systems", vi: "Hệ thống dữ liệu & BI ngân hàng" },
    description: {
      en: "Delivered 10+ BI dashboards, automated Python and PySpark pipelines, and standardized 20+ sources for banking reporting.",
      vi: "Triển khai hơn 10 dashboard BI, tự động hóa pipeline Python/PySpark và chuẩn hóa hơn 20 nguồn dữ liệu cho báo cáo ngân hàng.",
    },
    contribution: { en: "Data warehouse · ETL · BI dashboards", vi: "Kho dữ liệu · ETL · Dashboard BI" },
    asset: {
      src: "/demo/work/demo-banking-data-system.svg",
      alt: { en: "Banking data architecture and KPI preview", vi: "Minh họa kiến trúc dữ liệu và KPI ngân hàng" },
    },
  },
  {
    index: "02",
    slug: "logistics-analytics",
    year: { en: "Sep 2024 — Mar 2025", vi: "09.2024 — 03.2025" },
    discipline: { en: "Data Analyst · Winwin Logistics", vi: "Chuyên viên phân tích · Winwin Logistics" },
    title: { en: "Logistics Analytics", vi: "Phân tích logistics" },
    description: {
      en: "Analyzed delivery operations and built Power BI reporting for performance, cost efficiency, and resource use, reducing manual reporting time by 20%.",
      vi: "Phân tích vận hành giao nhận và xây dựng báo cáo Power BI cho hiệu suất, chi phí và nguồn lực, giảm 20% thời gian báo cáo thủ công.",
    },
    contribution: { en: "SQL · Power BI · Reporting automation", vi: "SQL · Power BI · Tự động hóa báo cáo" },
    asset: {
      src: "/demo/work/demo-logistics-analytics.svg",
      alt: { en: "Logistics route and operational analytics preview", vi: "Minh họa tuyến đường và phân tích vận hành logistics" },
    },
  },
  {
    index: "03",
    slug: "campaign-performance-atlas",
    year: { en: "Personal project", vi: "Dự án cá nhân" },
    discipline: { en: "Marketing Analytics · Power BI", vi: "Phân tích marketing · Power BI" },
    title: { en: "Marketing Campaign Performance Dashboard", vi: "Dashboard hiệu suất chiến dịch marketing" },
    description: {
      en: "Used Python and Power BI to analyze CTR, conversion rate, ROAS, and CPO, segment channels, detect anomalies, and support budget reallocation.",
      vi: "Dùng Python và Power BI để phân tích CTR, tỷ lệ chuyển đổi, ROAS và CPO, phân khúc kênh, phát hiện bất thường và hỗ trợ tái phân bổ ngân sách.",
    },
    contribution: { en: "Python / Pandas · Power BI · Segmentation", vi: "Python / Pandas · Power BI · Phân khúc" },
    asset: {
      src: "/demo/work/demo-campaign-performance.svg",
      alt: { en: "Marketing campaign analytics preview", vi: "Minh họa phân tích hiệu suất chiến dịch marketing" },
    },
  },
] as const;

export const notes = [
  {
    slug: "metric-and-question",
    date: "17 AUG 2026",
    topic: { en: "Data / Practice", vi: "Dữ liệu / Thực hành" },
    format: { en: "Essay", vi: "Bài luận" },
    title: { en: "The difference between a metric and a question", vi: "Khác biệt giữa một chỉ số và một câu hỏi" },
    excerpt: {
      en: "Good analysis starts before the query. It starts with deciding what uncertainty is actually worth reducing.",
      vi: "Phân tích tốt bắt đầu trước cả câu truy vấn: từ việc quyết định điều bất định nào thực sự đáng để làm rõ.",
    },
    readingTime: { en: "5 min", vi: "5 phút" },
    asset: {
      src: "/demo/notes/demo-note-data-thinking.svg",
      alt: { en: "Editorial graphic about metrics and questions", vi: "Đồ họa biên tập về chỉ số và câu hỏi" },
    },
  },
  {
    slug: "room-for-thought",
    date: "03 AUG 2026",
    topic: { en: "Design / Systems", vi: "Thiết kế / Hệ thống" },
    format: { en: "Note", vi: "Ghi chú" },
    title: { en: "Interfaces should leave room for thought", vi: "Giao diện nên chừa chỗ cho suy nghĩ" },
    excerpt: {
      en: "Not every interaction needs to be faster. Sometimes clarity arrives when the interface stops competing for attention.",
      vi: "Không phải tương tác nào cũng cần nhanh hơn. Đôi khi sự rõ ràng đến khi giao diện ngừng tranh giành sự chú ý.",
    },
    readingTime: { en: "7 min", vi: "7 phút" },
    asset: {
      src: "/demo/notes/demo-note-interface.svg",
      alt: { en: "Abstract editorial interface study", vi: "Nghiên cứu giao diện biên tập trừu tượng" },
    },
  },
  {
    slug: "city-information-system",
    date: "21 JUL 2026",
    topic: { en: "Everyday observation", vi: "Quan sát thường ngày" },
    format: { en: "Field note", vi: "Ghi chú thực địa" },
    title: { en: "The city as an information system", vi: "Thành phố như một hệ thống thông tin" },
    excerpt: {
      en: "Routes, queues, signs, and shortcuts reveal how people interpret constraints together.",
      vi: "Tuyến đường, hàng đợi, biển báo và lối tắt cho thấy cách con người cùng diễn giải những giới hạn.",
    },
    readingTime: { en: "4 min", vi: "4 phút" },
    asset: {
      src: "/demo/notes/demo-note-city-system.svg",
      alt: { en: "Abstract city route and signal map", vi: "Bản đồ tuyến đường và tín hiệu thành phố trừu tượng" },
    },
  },
  {
    slug: "quiet-confidence",
    date: "09 JUL 2026",
    topic: { en: "Career / Learning", vi: "Sự nghiệp / Học hỏi" },
    format: { en: "Short thought", vi: "Suy nghĩ ngắn" },
    title: { en: "Learning to be precise without pretending certainty", vi: "Học cách chính xác mà không giả vờ chắc chắn" },
    excerpt: {
      en: "Precision is useful. False confidence is not. The difference is often visible in how we explain the limits of our work.",
      vi: "Sự chính xác là hữu ích. Tự tin giả tạo thì không. Khác biệt thường nằm ở cách ta nói về giới hạn trong công việc của mình.",
    },
    readingTime: { en: "3 min", vi: "3 phút" },
  },
] as const;

export const reading = [
  {
    author: "Donella H. Meadows",
    title: "Thinking in Systems",
    status: { en: "Reading now", vi: "Đang đọc" },
    note: {
      en: "It makes relationships visible: feedback loops, leverage points, and the discipline of seeing wholes.",
      vi: "Cuốn sách làm các mối quan hệ trở nên hữu hình: vòng phản hồi, điểm đòn bẩy và cách nhìn vào toàn thể.",
    },
    asset: {
      src: "/demo/reading/demo-reading-systems.svg",
      alt: { en: "Abstract systems thinking cover", vi: "Bìa trừu tượng về tư duy hệ thống" },
    },
  },
  {
    author: "Edward Tufte",
    title: "The Visual Display of Quantitative Information",
    status: { en: "Reference", vi: "Tham khảo" },
    note: {
      en: "A durable standard for density, evidence, and respecting the intelligence of the reader.",
      vi: "Một chuẩn mực bền vững về mật độ, bằng chứng và sự tôn trọng dành cho trí tuệ người đọc.",
    },
    asset: {
      src: "/demo/reading/demo-reading-evidence.svg",
      alt: { en: "Editorial cover about evidence and information", vi: "Bìa biên tập về bằng chứng và thông tin" },
    },
  },
  {
    author: "Ursula K. Le Guin",
    title: "The Carrier Bag Theory of Fiction",
    status: { en: "Revisited", vi: "Đọc lại" },
    note: {
      en: "A reminder that stories can hold, gather, and connect—not only conquer.",
      vi: "Một lời nhắc rằng câu chuyện có thể chứa đựng, gom nhặt và kết nối—không chỉ chinh phục.",
    },
    asset: {
      src: "/demo/reading/demo-reading-carrier.svg",
      alt: { en: "Abstract editorial cover about gathering stories", vi: "Bìa biên tập trừu tượng về việc gom nhặt câu chuyện" },
    },
  },
] as const;

export const places = [
  {
    city: "Đà Lạt",
    coordinates: "11.9404° N / 108.4583° E",
    year: "2025",
    note: { en: "Fog, concrete, and quiet distance.", vi: "Sương, bê tông và khoảng cách tĩnh lặng." },
    asset: {
      src: "/demo/places/demo-place-dalat.svg",
      alt: { en: "A misty architectural morning in Đà Lạt", vi: "Buổi sáng sương mù và kiến trúc ở Đà Lạt" },
    },
  },
  {
    city: "Sài Gòn",
    coordinates: "10.8231° N / 106.6297° E",
    year: "Home",
    note: { en: "Heat, movement, signs, and familiar noise.", vi: "Nắng nóng, chuyển động, biển hiệu và tiếng ồn quen thuộc." },
    asset: {
      src: "/demo/places/demo-place-saigon.svg",
      alt: { en: "A quiet street observation in Hồ Chí Minh City", vi: "Một quan sát đường phố tại Thành phố Hồ Chí Minh" },
    },
  },
] as const;
