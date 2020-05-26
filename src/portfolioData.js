import pnpms_1 from "./assets/img/pnpmsv2_1.png";
import pnpms_2 from "./assets/img/pnpmsv2_2.png";
import pnpms_3 from "./assets/img/pnpmsv2_3.png";
import shuttle_1 from "./assets/img/shuttle_1.png";
import shuttle_2 from "./assets/img/shuttle_2.png";
import shuttle_3 from "./assets/img/shuttle_3.png";
import shuttle_4 from "./assets/img/shuttle_4.png";
import shuttle_5 from "./assets/img/shuttle_5.png";
import autowh_1 from "./assets/img/autowh_1.png";
import autowh_2 from "./assets/img/autowk_2.png";
import i18n_1 from "./assets/img/i18n_1.mp4";
//Intro section

const introContent = {
  name: "Esther Lin",
  title: "Hi, there!",
  subTitle: "Web Development & FrontEnd Development",
  resumeLink: "",
};

//timeline section

const timelineContent = {
  education: [
    { year: "2006.09", title: "國立文華高中", subTitle: "" },
    { year: "2009.09", title: "國立成功大學", subTitle: "工業與資訊管理學系" },
    {
      year: "2013.09",
      title: "國立成功大學",
      subTitle: "工業與資訊管理研究所",
    },
  ],
};

//skill section

const skillContent = {
  skillsPie: [
    {
      text: "JavaScript",
      type: "frontend",
      chart: "pie",
      percent: "",
    },
    {
      text: "CSS",
      type: "frontend",
      chart: "pie",
      percent: "",
    },
    {
      text: "C#",
      type: "backend",
      chart: "pie",
      percent: "",
    },
    {
      text: "MSSQL",
      type: "backend",
      chart: "pie",
      percent: "",
    },
  ],
  skillsBar: [
    {
      text: "Angular",
      type: "frontend",
      chart: "bar",
      percent: "75",
    },
    {
      text: "React",
      type: "frontend",
      chart: "bar",
      percent: "30",
    },

    {
      text: "SASS",
      type: "frontend",
      chart: "bar",
      percent: "50",
    },
    {
      text: "NodeJS",
      type: "backend",
      chart: "bar",
      percent: "20",
    },
  ],
};

//portfolio section

const portfolioContent = {
  projects: [
    {
      href: "project1",
      title: "維護保養系統",
      source: [
        {
          type: "img",
          path: pnpms_1,
          alt: "pnpms_photo1",
        },
        {
          type: "img",
          path: pnpms_2,
          alt: "pnpms_photo2",
        },
        {
          type: "img",
          path: pnpms_3,
          alt: "pnpms_photo3",
        },
      ],
      device: "desktop",
      desc: [
        "保養資料CRUD",
        "寄發信件通知",
        "執行保養及照片上傳",
        "後端使用C#撰寫WebAPI",
        "前端使用Angular",
      ],
      tags: ["Angular", "Bootstrap", "Responsive", "C#", "WebAPI"],
    },
    {
      href: "project2",
      title: "自動倉儲系統",
      source: [
        {
          type: "img",
          path: shuttle_1,
          alt: "shuttle_photo1",
        },
        {
          type: "img",
          path: shuttle_2,
          alt: "shuttle_photo2",
        },
        {
          type: "img",
          path: shuttle_3,
          alt: "shuttle_photo3",
        },
        {
          type: "img",
          path: shuttle_4,
          alt: "shuttle_photo4",
        },
        {
          type: "img",
          path: shuttle_5,
          alt: "shuttle_photo5",
        },
      ],
      device: "pda",
      desc: [
        "於PDA上使用",
        "倉儲設備出料操作",
        "接收MQTT資料",
        "RESTFUL API",
        "前端使用Angular",
      ],
      tags: ["Angular", "Bootstrap", "Responsive", "RESTFUL"],
    },
    {
      href: "project3",
      title: "工時回報系統",
      source: [
        {
          type: "img",
          path: autowh_1,
          alt: "autowh_photo1",
        },
        {
          type: "img",
          path: autowh_2,
          alt: "autowh_photo1",
        },
      ],
      device: "desktop",
      desc: ["工時資料CRUD", "後端使用C#", "前端使用Angular"],
      tags: ["Angular", "Bootstrap", "C#"],
    },
    {
      href: "project4",
      title: "i18n翻譯資料維護系統",
      source: [
        {
          type: "video",
          path: i18n_1,
          alt: "i18n_video",
        },
      ],
      device: "desktop",
      desc: ["翻譯資源CRUD", "檔案上傳"],
      tags: ["Angular", "Bootstrap", "RESTFUL"],
    },
    {
      href: "project4",
      title: "i18n翻譯資料維護系統",
      source: [
        {
          type: "video",
          path: i18n_1,
          alt: "i18n_video",
        },
      ],
      device: "desktop",
      desc: ["翻譯資源CRUD", "檔案上傳"],
      tags: ["Angular", "Bootstrap", "RESTFUL"],
    },
  ],
};

export { introContent, timelineContent, skillContent, portfolioContent };
