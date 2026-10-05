import type { Localized } from "./content";

export type ArchiveEntry = {
  id: string;
  title: Localized;
  description?: Localized;
  meta?: string;
  href?: string;
};

// Add real entries here as each collection grows. Empty collections stay empty.
export const collections = {
  work: {
    index: "01", artifact: "lineage",
    eyebrow: { en: "Work", vi: "Công việc" },
    title: { en: "Things I build.", vi: "Những điều mình xây." },
    intro: { en: "A place for projects, one question at a time.", vi: "Một chỗ dành cho những dự án, từng câu hỏi một." },
    empty: { en: "No projects shared yet. A little possibility is taking shape.", vi: "Chưa có dự án nào được kể. Một chút khả năng đang thành hình." },
    entries: [] as ArchiveEntry[],
  },
  notes: {
    index: "02", artifact: "observation-slip",
    eyebrow: { en: "Notes", vi: "Ghi chép" },
    title: { en: "Thoughts in orbit.", vi: "Ý nghĩ trên quỹ đạo." },
    intro: { en: "Data, design, and everyday life.", vi: "Dữ liệu, thiết kế và đời sống thường ngày." },
    empty: { en: "No notes written yet. The page is waiting for a thought.", vi: "Chưa có ghi chép nào. Trang giấy đang chờ một ý nghĩ." },
    entries: [] as ArchiveEntry[],
  },
  reading: {
    index: "03", artifact: "moon-index",
    eyebrow: { en: "Reading", vi: "Đọc" },
    title: { en: "A pocket of ideas.", vi: "Một túi đầy ý tưởng." },
    intro: { en: "Books and ideas worth returning to.", vi: "Những cuốn sách và ý tưởng đáng để quay lại." },
    empty: { en: "No books saved here yet. There's room for the next chapter.", vi: "Chưa có cuốn sách nào được lưu. Vẫn còn chỗ cho chương tiếp theo." },
    entries: [] as ArchiveEntry[],
  },
  places: {
    index: "04", artifact: "route-map",
    eyebrow: { en: "Places", vi: "Nơi chốn" },
    title: { en: "Away from the desk.", vi: "Rời bàn làm việc." },
    intro: { en: "Places, photographs, and a few things to remember.", vi: "Những nơi chốn, khung hình và vài điều để nhớ." },
    empty: { en: "No journeys told yet. The road is still waiting.", vi: "Chưa có chuyến đi nào được kể. Con đường vẫn đang chờ." },
    entries: [] as ArchiveEntry[],
  },
} as const;
