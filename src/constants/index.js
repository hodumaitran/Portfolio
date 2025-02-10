import { faBookmark, faBriefcase, faGraduationCap, faLaptopCode, faTrophy } from '@fortawesome/free-solid-svg-icons'; 

export const skills = [
    { id: 1, name: "CSS", image: "css.png" },
    { id: 2, name: "HTML", image: "html.png" },
    { id: 3, name: "JavaScript", image: "javascript.png" },
    { id: 4, name: "Typescript", image: "typescript.png" },
    { id: 5, name: "React", image: "react.png" },
    { id: 6, name: "Nextjs", image: "nextjs-black.png" },
    { id: 7, name: "Node.js", image: "nodejs.png" },
    { id: 8, name: "Redux", image: "redux.png" },
    { id: 9, name: "tailwind", image: "tailwind.png" },
    { id: 10, name: "bootstrap", image: "bootstrap.png" },
    { id: 11, name: "Sass", image: "sass.png" },
    { id: 12, name: "Mongodb", image: "mongodb.svg" },
    { id: 13, name: "Mysql", image: "mysql.png" },
    { id: 14, name: "Firebase", image: "firebase.png" },
    { id: 15, name: "Figma", image: "figma.png" },
    { id: 16, name: "github", image: "github-black.png" },
    { id: 17, name: "wordpress", image: "wordpress.png" },
];




// constants.js
export const timelineData = [
    {
        index: 1,
        title: "Bắt đầu học Lập trình Web - Cao đẳng FPT Polytechnic Cần Thơ",
        content: "Bắt đầu niềm đam mê lập trình và chọn học Lập trình Web vì thích thú với việc xây dựng giao diện và dành rất nhiều thời gian tìm hiểu, thực hành với các công nghệ và ngôn ngữ mới như C, Java, Javascript, PHP để thực hiện được mong muốn trở thành lập trình viên.",
        icon: faBookmark,
        time: "08/2022"
    },
    {
        index: 2,
        title: "Tham gia làm dự án thực tế tại xưởng phầm mềm của trường",
        content: "Được làm những dự án thực tế từ khách hàng đặt tại trường dưới sự hướng dẫn của các thầy cô bộ môn công nghệ thông tin tại trường.",
        icon: faLaptopCode,
        time: "2/2024"
    },
    {
        index: 3,
        title: "Quán quân - FPT Edu Hackathon 2024: Generative AI",
        content: "Đây là cuộc thi công nghệ dành cho học sinh, sinh viên, học viên của Tổ chức Giáo dục FPT trên toàn quốc với chủ đề Generative AI - GenAI cho phát triển bền vững, đời sống. Cuộc thi là cơ hội để tôi tìm hiểu và tiếp cận nhiều hơn với AI. Với sự cố gắng không ngừng, tôi cùng với đồng đội đã đạt giải Quán quân bảng B. Đây là một bước tiến lớn trong sự nghiệp của tôi và mở ra cho tôi nhiều cơ hội.",
        icon: faTrophy,
        time: "06/2024 - 07/2024"
    },
    {
        index: 4,
        title: "Tốt nghiệp ngành Lập trình Web - Cao đẳng FPT Polytechnic Cần Thơ",
        content: "Chính thức tốt nghiệp ngành Lập trình Web tại FPT Polytechnic Cần Thơ với GPA 8.9. Kết thúc hành trình học tập và chuẩn bị cho công việc mới.",
        icon: faGraduationCap,
        time: "12/2024"
    },
    {
        index: 5,
        title: "Thực tập AI Engineer - FPT Software Quy Nhơn",
        content: "Thực tập tại Trung tâm Nghiên cứu và Ứng dụng Trí tuệ nhân tạo Quy Nhơn (QAI) - FPT Software Quy Nhơn với vị trí AI Engineer. Tham gia vào các dự án về AI, Computer Vison. Học hỏi nhiều từ các chuyên gia và đồng nghiệp trong công ty từ kiến thức, kỹ năng chuyên môn, kinh nghiệm làm việc đến tinh thần làm việc chuyên nghiệp và trách nhiệm.",
        icon: faBriefcase,
        time: "09/2024 - 12/2024"
    },
];


export const ProjectData = [
    {
        image: '1.png',
        title: 'Hệ thống hỗ trợ khám sàn lọc bệnh tích hợp trí tuệ nhân tạo - Pharmartist',
        role: ['Fullstack Developer'],
        link: 'https://github.com/ThanhNha3/Pharmartist_DATN/tree/dev',
        descript: 'Pharmartist là hệ thống hỗ trợ khám sàn lọc được xây dựng nhằm hỗ trợ đội ngũ y bác sĩ tại bệnh viện, tiết kiệm thời gian',
        technology: ['ReactJs', 'NodeJs','Express','MongoDB', 'Gemini API', 'Langchain', 'AssemblyAI API', 'Firebase']
    },
    {
        image: '2.png',
        title: 'An Minh Argimex Agricultural Project',
        role: ['Frontend','Design Figma','Wordpress'],
        link: 'https://anminhagrimex.com/',
        descript: 'Trang giới thiệu sản phẩm nông nghiệp, xuất nhập khẩu nông sản trong lĩnh vực cung cấp và chế biến nông sản thành phẩm cho các công ty xuất khẩu khác',
        technology: ['Wordpress', 'PHP', 'Bootstrap', 'Figma']
    },
    {
        image: '3.png',
        title: 'SGE Project Management System',
        role: ['Frontend','Design Figma','Wordpress'],
        link: 'https://sgegroup.com.vn/',
        descript: 'Trang website giới thiệu về SGE Group, SGE Group là đơn vị hàng đầu chuyên về dịch vụ tư vấn, thiết kế và cung  cấp, thi công lắp đặt thiết bị bếp quy mô công nghiệp phục vụ trong ngành nhà  hàng – khách sạn – Resort phân khúc 3 – 5 sao. Được thành lập vào năm 2016, Công ty Cổ Phần SGE GROUP đã hân hạnh triển khai đồng hành hơn 1000 dự án trên toàn quốc.',
        technology: ['Wordpress', 'PHP', 'Bootstrap', 'Figma']
    },
    {
        image: '4.png',
        title: 'Zalo Mini App - Trường Trung Tiểu học Việt Anh School',
        role: ['Fullstack Developer'],
        descript: 'Dự án kết hợp cùng với đối tác, Trường Trung Tiểu học Việt Anh School là một ứng dụng mini trên nền tảng Zalo. App bao gồm các chức năng quản lý thông tin học sinh, xem thời khóa biểu, điểm số, xin nghỉ phép, đăng ký các khóa học, dịch vụ xe bus, ăn uống, thông báo, và gửi tin nhắn trực tiếp giữa phụ huynh và giáo viên.',
        technology: ['ReactJs', 'Tailwind', 'Zalo Mini App', 'React Hook Form']
    },
    {
        image: '5.png',
        title: 'Personal Portfolio Website',
        role: ['Frontend Developer'],
        link: 'https://github.com/hodumaitran/Portfolio',
        descript: 'Website giới thiệu bản thân, thông tin cá nhân, dự án, kỹ năng và thông tin liên hệ',
        technology: ['ReactJs', 'Tailwind', 'Framer Motion']
    }
]
