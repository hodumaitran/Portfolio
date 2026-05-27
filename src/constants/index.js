import {
  faBookmark,
  faBriefcase,
  faGraduationCap,
  faLaptopCode,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export const skills = [
  { id: 1, name: "HTML", image: "html.png" },
  { id: 2, name: "CSS", image: "css.png" },
  { id: 3, name: "JavaScript", image: "javascript.png" },
  { id: 4, name: "TypeScript", image: "typescript.png" },
  { id: 5, name: "React", image: "react.png" },
  { id: 6, name: "Next.js", image: "nextjs-black.png" },
  { id: 7, name: "Node.js", image: "nodejs.png" },
  { id: 9, name: "MongoDB", image: "mongodb.svg" },
  { id: 11, name: "Figma", image: "figma.png" },
  { id: 12, name: "GitHub", image: "github-black.png" },
  { id: 13, name: "WordPress", image: "wordpress.png" },
  { id: 14, name: "Tailwind", image: "tailwind.png" },
  { id: 15, name: "Bootstrap", image: "bootstrap.png" },
  { id: 16, name: "SEO", image: "seo.png" },
];

// constants.js
export const timelineData = [
  {
    index: 1,
    title: "Golden Bee IT Solutions Co., Ltd",
    content:
      "Đơn vị tiên phong trong lĩnh vực chuyển đổi số tại Việt Nam. Chuyên cung cấp dịch vụ thiết kế website, phát triển mobile app, SEO, và các giải pháp công nghệ toàn diện cho doanh nghiệp. Với hệ thống 4 chi nhánh tại TPHCM 2 cơ sở và Cần Thơ 2 cơ sở, https://goldenbeeltd.vn/",
    icon: faBriefcase,
    time: "01/2025 - 02/2026",
  },
  {
    index: 2,
    title: "Tốt nghiệp ngành Lập trình Web - Cao đẳng FPT Polytechnic Cần Thơ",
    content:
      "Chính thức tốt nghiệp ngành Lập trình Web tại FPT Polytechnic Cần Thơ với GPA 3.82/4. Kết thúc hành trình học tập với 3 năm của mình. Tuy nhiều có những trắc trở nhưng tôi cũng đã có những trải nghiệm và cơ hội để học hỏi và phát triển bản thân mình.",
    icon: faGraduationCap,
    time: "12/2024",
  },
  {
    index: 3,
    title: "Thực tập AI Engineer - FPT Software Quy Nhơn",
    content:
      "Thực tập tại Trung tâm Nghiên cứu và Ứng dụng Trí tuệ nhân tạo Quy Nhơn (QAI) - FPT Software Quy Nhơn với vị trí AI Engineer. Tham gia vào các dự án về AI, Computer Vision. Học hỏi nhiều từ các chuyên gia và đồng nghiệp trong công ty từ kiến thức, kỹ năng chuyên môn, kinh nghiệm làm việc đến tinh thần làm việc chuyên nghiệp và trách nhiệm.",
    icon: faBriefcase,
    time: "09/2024 - 12/2024",
  },
  {
    index: 4,
    title: "Quán quân - FPT Edu Hackathon 2024: Generative AI",
    content:
      "Đây là cuộc thi công nghệ dành cho học sinh, sinh viên, học viên của Tổ chức Giáo dục FPT trên toàn quốc với chủ đề Generative AI - GenAI cho phát triển bền vững, đời sống. Cuộc thi là cơ hội để tôi tìm hiểu và tiếp cận nhiều hơn với AI. Với sự cố gắng không ngừng nghỉ, tôi cùng với đồng đội đã đạt giải Quán quân bảng B. Đây là một bước tiến lớn trong hành trình của tôi và mở ra cho tôi nhiều cơ hội.",
    icon: faTrophy,
    time: "06/2024 - 07/2024",
  },
  {
    index: 5,
    title: "Tham gia làm dự án thực tế tại xưởng phầm mềm của trường",
    content:
      "Được làm những dự án thực tế từ khách hàng đặt tại trường dưới sự hướng dẫn của các thầy cô bộ môn công nghệ thông tin tại trường.",
    icon: faLaptopCode,
    time: "02/2024",
  },
  {
    index: 6,
    title: "Bắt đầu học Lập trình Web - Cao đẳng FPT Polytechnic Cần Thơ",
    content:
      "Bắt đầu niềm đam mê lập trình và chọn học Lập trình Web vì thích thú với việc xây dựng giao diện và dành rất nhiều thời gian tìm hiểu, thực hành với các công nghệ và ngôn ngữ mới như C, Java, JavaScript, PHP để thực hiện được mong muốn trở thành lập trình viên.",
    icon: faBookmark,
    time: "08/2022",
  },
];

export const ProjectData = [
  {
    image: "8.png",
    title: "Bổ Túc Lái Xe Golden Bee",
    role: ["Frontend Developer"],
    link: "https://play.google.com/store/apps/details?id=com.botuclaixe.app",
    descript:
      "Ứng dụng Bổ Túc Lái Xe Golden Bee là cầu nối công nghệ trực tiếp từ Trung tâm Đào tạo và Bổ túc Lái xe Golden Bee – đơn vị uy tín hàng đầu tại TP. Hồ Chí Minh, Cần Thơ và các tỉnh lân cận (Bình Dương, Tây Ninh). Với cam kết mang đến giải pháp đào tạo thông minh.",
    technology: [
      "React Native",
      "Tailwind",
      "typeScript",
      "javaScript",
      "React Navigation",
      "React Query",
    ],
  },
  {
    image: "1.png",
    title:
      "Hệ thống hỗ trợ khám sàn lọc bệnh tích hợp trí tuệ nhân tạo - Pharmartist",
    role: ["Fullstack Developer"],
    link: "https://vimeo.com/1061162812?share=copy",
    descript:
      "Pharmartist là hệ thống hỗ trợ khám sàn lọc được xây dựng nhằm hỗ trợ đội ngũ y bác sĩ tại bệnh viện, tiết kiệm thời gian",
    technology: [
      "ReactJs",
      "NodeJs",
      "Express",
      "MongoDB",
      "Gemini API",
      "Langchain",
      "AssemblyAI API",
      "Firebase",
    ],
  },
  {
    image: "4.png",
    title: "Zalo Mini App - Trường Trung Tiểu học Việt Anh School",
    role: ["Frontend Developer"],
    link: "https://zalo.me/s/571631299348323199/",
    descript:
      "Ứng dụng mini trên Zalo, bao gồm quản lý thông tin học sinh, thời khóa biểu, điểm số, xin nghỉ phép, đăng ký khóa học, xe bus, ăn uống, thông báo và nhắn tin trực tiếp phụ huynh – giáo viên.",
    technology: ["Zalo Mini App", "ReactJs", "Tailwind", "React Hook Form"],
  },
  {
    image: "7.png",
    title: "THS Pickleball",
    role: ["Frontend Developer", "Wordpress"],
    link: "http://khoacuamekhach.space/",
    descript:
      "Website giới thiệu và đặt lịch cho bộ môn Pickleball, tích hợp các chức năng quản lý nội dung bằng Wordpress.",
    technology: ["Wordpress", "Tailwind", "PHP", "JavaScript"],
  },
  {
    image: "2.png",
    title: "Thực Dưỡng Thiên Minh",
    role: ["Frontend Developer", "Wordpress"],
    link: "https://thucduongthanhminh.com/",
    descript:
      "Website giới thiệu và bán sản phẩm thực dưỡng, tối ưu trải nghiệm người dùng với thiết kế hiện đại.",
    technology: ["Wordpress", "Tailwind", "PHP", "JavaScript"],
  },
  {
    image: "3.png",
    title: "2H Local Home",
    role: ["Frontend Developer", "Wordpress"],
    link: "https://zfigoodmeals.com/",
    descript:
      "Website giới thiệu dịch vụ và sản phẩm của 2H Local Home, xây dựng trên nền tảng Wordpress với giao diện tùy chỉnh.",
    technology: ["Wordpress", "Tailwind", "PHP", "JavaScript"],
  },
  {
    image: "6.png",
    title: "Bổ túc lái xe 247",
    role: ["Frontend Developer", "Design Figma", "Wordpress"],
    link: "https://kienthuclaixe.com/",
    descript:
      "Website giới thiệu dịch vụ đào tạo lái xe và các khóa học liên quan, tích hợp hệ thống quản lý khóa học và đăng ký trực tuyến.",
    technology: ["Wordpress", "PHP", "Bootstrap", "Figma"],
  },
  {
    image: "9.png",
    title: "Trung Tâm Nhà Đất Đà Nẵng",
    role: ["Frontend Developer", "Wordpress"],
    link: "https://trungtamnhadatdanang.com/",
    descript:
      "Website bất động sản chuyên nghiệp tại Đà Nẵng, cung cấp thông tin mua bán, cho thuê nhà đất với giao diện hiện đại và tối ưu SEO.",
    technology: ["Wordpress", "PHP", "JavaScript", "CSS"],
  },
  {
    image: "10.png",
    title: "Vua Kiểng Bến Tre",
    role: ["Frontend Developer", "Wordpress"],
    link: "https://vuakiengbentre.com/",
    descript:
      "Website giới thiệu và kinh doanh cây kiểng, cây cảnh tại Bến Tre với thiết kế thân thiện và dễ sử dụng.",
    technology: ["Wordpress", "PHP", "JavaScript", "CSS"],
  },
  {
    image: "11.png",
    title: "Cây Kiểng Sa Đéc",
    role: ["Frontend Developer", "Wordpress"],
    link: "https://caykiengsadec.com/",
    descript:
      "Website giới thiệu và bán cây kiểng, hoa cảnh từ làng hoa Sa Đéc nổi tiếng, với giao diện đẹp mắt và trải nghiệm mượt mà.",
    technology: ["Wordpress", "PHP", "JavaScript", "CSS"],
  },
  {
    image: "12.png",
    title: "Pylo Herb",
    role: ["Frontend Developer", "Wordpress"],
    link: "https://pyloherb.demogoldenbee.click/",
    descript:
      "Website giới thiệu sản phẩm thảo dược và chăm sóc sức khỏe, thiết kế hiện đại với trải nghiệm người dùng tối ưu.",
    technology: ["Wordpress", "PHP", "JavaScript", "Tailwind"],
  },
  {
    image: "13.png",
    title: "Da Tien Vua",
    role: ["Frontend Developer"],
    link: "https://datienvua.com/",
    descript:
      "Da Tien Vua - thuong hieu Viet duoc xay dung tren nen tang tu don vi san xuat va xuat khau da tu nhien hang dau Viet Nam.",
    technology: [],
  },
  {
    image: "14.png",
    title: "3F Studio",
    role: ["Frontend Developer"],
    link: "https://3f.scvweb.io.vn/3d-models/",
    descript:
      "3F Studio du an ban model so ve thiet ke tu dong, thanh toan online trong nuoc va quoc te.",
    technology: [],
  },
  {
    image: "15.png",
    title: "Nạp mực 247",
    role: ["Frontend Developer"],
    link: "https://napmuc247.vn/",
    descript:
      "Napmuc247.vn - mot thanh vien chuyen trach dich vu cua ECOink (Muc in tiet kiem) - ra doi voi su menh cung cap giai phap nap muc may in tan noi TP.HCM chuyen nghiep, uy tin va toi uu chi phi nhat.",
    technology: [],
  },
];
