export type Localized = { en: string; vi: string };

export const navigation = [
  { label: { en: "Work", vi: "Công việc" }, href: "/work" },
  { label: { en: "Notes", vi: "Ghi chép" }, href: "/notes" },
  { label: { en: "Reading", vi: "Đọc" }, href: "/reading" },
  { label: { en: "Places", vi: "Nơi chốn" }, href: "/places" },
  { label: { en: "About", vi: "Giới thiệu" }, href: "/about" },
] as const;

export const siteContent = {
  hero: { name: "Phạm Công Nguyễn Khôi" },
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
