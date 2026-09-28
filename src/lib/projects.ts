import type { Localized } from "@/lib/content";
import { work } from "@/lib/content";

type ProjectNarrative = {
  question: Localized;
  context: readonly [Localized, Localized];
  stages: readonly { index: string; title: Localized; body: Localized }[];
  outcomes: readonly Localized[];
};

const narratives: Record<(typeof work)[number]["slug"], ProjectNarrative> = {
  "banking-data-systems": {
    question: {
      en: "How can financial reporting move faster without hiding where a number came from?",
      vi: "Làm sao để báo cáo tài chính nhanh hơn mà không che khuất nguồn gốc của từng con số?",
    },
    context: [
      {
        en: "Teams were answering related questions from separate extracts, spreadsheets, and definitions. The difficult part was not drawing another dashboard; it was creating a shared layer people could inspect and trust.",
        vi: "Các nhóm trả lời những câu hỏi liên quan bằng các bản trích xuất, bảng tính và định nghĩa riêng. Phần khó không phải vẽ thêm dashboard, mà là tạo một lớp dữ liệu chung có thể kiểm tra và tin cậy.",
      },
      {
        en: "The demo follows a simple principle: every metric should retain its grain, freshness, owner, and path back to source. Speed matters, but explainability is part of the product.",
        vi: "Bản demo theo một nguyên tắc đơn giản: mỗi chỉ số phải giữ được cấp độ chi tiết, độ mới, người sở hữu và đường dẫn về nguồn. Tốc độ quan trọng, nhưng khả năng giải thích cũng là một phần của sản phẩm.",
      },
    ],
    stages: [
      { index: "01", title: { en: "Contract the sources", vi: "Chuẩn hóa nguồn" }, body: { en: "Define ownership, grain, keys, and freshness before transformation begins.", vi: "Xác định người sở hữu, cấp độ chi tiết, khóa và độ mới trước khi biến đổi dữ liệu." } },
      { index: "02", title: { en: "Model the shared truth", vi: "Mô hình hóa sự thật chung" }, body: { en: "Create reusable financial entities and tests instead of dashboard-specific logic.", vi: "Tạo thực thể tài chính và kiểm thử dùng chung thay vì logic riêng cho từng dashboard." } },
      { index: "03", title: { en: "Expose the evidence", vi: "Hiển thị bằng chứng" }, body: { en: "Let every headline number reveal its definition, update time, and contributing records.", vi: "Cho phép mỗi con số chính hiển thị định nghĩa, thời điểm cập nhật và dữ liệu cấu thành." } },
    ],
    outcomes: [
      { en: "One vocabulary for recurring banking KPIs", vi: "Một bộ từ vựng chung cho các KPI ngân hàng lặp lại" },
      { en: "A visible path from source record to decision view", vi: "Đường dẫn rõ ràng từ bản ghi nguồn đến góc nhìn quyết định" },
      { en: "Reusable foundations for reporting and investigation", vi: "Nền tảng tái sử dụng cho báo cáo và điều tra dữ liệu" },
    ],
  },
  "logistics-analytics": {
    question: {
      en: "What does on-time performance mean when every route carries a different constraint?",
      vi: "Hiệu suất đúng giờ có nghĩa gì khi mỗi tuyến đường mang một ràng buộc khác nhau?",
    },
    context: [
      {
        en: "A single delivery percentage flattened the operational story. Distance, hand-off time, service tier, and route conditions were being compressed into one number.",
        vi: "Một tỷ lệ giao hàng duy nhất đã làm phẳng câu chuyện vận hành. Khoảng cách, thời gian bàn giao, cấp dịch vụ và điều kiện tuyến đường đều bị nén vào một con số.",
      },
      {
        en: "This demo treats a route as a sequence of observable events. The analytical layer compares like with like, then makes exceptions visible before they become a weekly surprise.",
        vi: "Bản demo xem một tuyến đường như chuỗi sự kiện có thể quan sát. Lớp phân tích so sánh những trường hợp tương đồng và làm rõ ngoại lệ trước khi chúng trở thành bất ngờ cuối tuần.",
      },
    ],
    stages: [
      { index: "01", title: { en: "Capture the journey", vi: "Ghi lại hành trình" }, body: { en: "Turn scans, hand-offs, and delivery states into one ordered event model.", vi: "Biến lượt quét, bàn giao và trạng thái giao hàng thành một mô hình sự kiện có thứ tự." } },
      { index: "02", title: { en: "Normalize the promise", vi: "Chuẩn hóa cam kết" }, body: { en: "Compare service performance within route, tier, and operating-window context.", vi: "So sánh hiệu suất trong bối cảnh tuyến, cấp dịch vụ và khung giờ vận hành." } },
      { index: "03", title: { en: "Surface the exception", vi: "Làm rõ ngoại lệ" }, body: { en: "Give operators a short list of explainable issues instead of another dense report.", vi: "Đưa cho vận hành một danh sách ngắn các vấn đề có thể giải thích thay vì thêm một báo cáo dày đặc." } },
    ],
    outcomes: [
      { en: "Service-level performance with route context intact", vi: "Hiệu suất cấp dịch vụ vẫn giữ nguyên bối cảnh tuyến đường" },
      { en: "Earlier visibility into recurring operational exceptions", vi: "Nhìn thấy sớm hơn các ngoại lệ vận hành lặp lại" },
      { en: "A reporting flow designed for daily decisions", vi: "Luồng báo cáo được thiết kế cho quyết định hằng ngày" },
    ],
  },
  "campaign-performance-atlas": {
    question: {
      en: "How do we separate meaningful audience response from inexpensive reach?",
      vi: "Làm sao phân biệt phản hồi có ý nghĩa của khán giả với lượt tiếp cận giá rẻ?",
    },
    context: [
      {
        en: "Channel reports rewarded their own definitions of success. Cheap impressions looked efficient, while downstream quality arrived too late to influence the next allocation decision.",
        vi: "Báo cáo của từng kênh ưu tiên định nghĩa thành công riêng. Lượt hiển thị rẻ trông có vẻ hiệu quả, còn chất lượng ở cuối hành trình đến quá muộn để ảnh hưởng quyết định phân bổ tiếp theo.",
      },
      {
        en: "The atlas is a compact decision layer: normalize cost, connect response quality, and preserve enough segmentation to explain why a channel moved.",
        vi: "Atlas là một lớp quyết định gọn: chuẩn hóa chi phí, kết nối chất lượng phản hồi và giữ đủ phân khúc để giải thích vì sao một kênh thay đổi.",
      },
    ],
    stages: [
      { index: "01", title: { en: "Normalize the spend", vi: "Chuẩn hóa chi phí" }, body: { en: "Reconcile channel naming, attribution windows, currency, and campaign hierarchy.", vi: "Đồng bộ tên kênh, cửa sổ phân bổ, tiền tệ và phân cấp chiến dịch." } },
      { index: "02", title: { en: "Connect the response", vi: "Kết nối phản hồi" }, body: { en: "Pair reach and engagement with the audience actions that signal useful intent.", vi: "Ghép lượt tiếp cận và tương tác với hành động khán giả thể hiện ý định hữu ích." } },
      { index: "03", title: { en: "Design the decision", vi: "Thiết kế quyết định" }, body: { en: "Make trade-offs legible across efficiency, quality, scale, and confidence.", vi: "Làm rõ đánh đổi giữa hiệu quả, chất lượng, quy mô và độ tin cậy." } },
    ],
    outcomes: [
      { en: "Comparable channel economics in one view", vi: "Kinh tế học các kênh có thể so sánh trong một góc nhìn" },
      { en: "Quality signals beside headline growth metrics", vi: "Tín hiệu chất lượng đặt cạnh các chỉ số tăng trưởng bề mặt" },
      { en: "A clearer basis for the next budget conversation", vi: "Cơ sở rõ ràng hơn cho cuộc trao đổi ngân sách tiếp theo" },
    ],
  },
};

export const projects = work.map((project) => ({ ...project, ...narratives[project.slug] }));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
