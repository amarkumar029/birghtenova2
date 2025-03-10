import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Preschool",
    newTab: false,
    submenu: [
      {
        id: 6,
        title: "Bihar",
        path: "/pre-bihar",
        newTab: false,
        submenub: [
          {
            id: 7,
            title: "Patna",
            path: "/pre-patna",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "K12",
    newTab: false,
    submenu: [
      {
        id: 9,
        title: "Bihar",
        path: "/k12-bihar",
        newTab: false,
        submenub: [
          {
            id: 10,
            title: "Patna",
            path: "/k12-patna",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Academics",
    newTab: false,
    submenu: [
      {
        id: 12,
        title: "Pre Primary Years Curriculum",
        path: "/pre-primary-years-curriculum",
        newTab: false,
      },
      {
        id: 13,
        title: "Primary Years Curriculum",
        path: "/primary-years-curriculum",
        newTab: false,
      },
      {
        id: 14,
        title: "Middle Years Curriculum",
        path: "/middle-years-curriculum",
        newTab: false,
      },
      {
        id: 15,
        title: "High School Curriculum",
        path: "/high-school-curriculum",
        newTab: false,
      },
      {
        id: 16,
        title: "Teacher Training and Support",
        path: "/teacher-training-and-support",
        newTab: false,
      },
      {
        id: 17,
        title: "Birla Buzz (Newsletter)",
        path: "/birla-buzz",
        newTab: false,
        submenub: [
          {
            id: 18,
            title: "Volume 1",
            path: "/birla-buzz-volume-1",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: "Soul Science",
    path: "/soul-science",
    newTab: false,
  },
  {
    id: 20,
    title: "LearnLeap",
    path: "/learnleap",
    newTab: false,
  },
  {
    id: 21,
    title: "Special Projects",
    path: "/special-projects",
    newTab: false,
  },
  {
    id: 22,
    title: "Partner With Us",
    path: "/partner-with-us",
    newTab: false,
  },
  {
    id: 23,
    title: "Media",
    path: "/media",
    newTab: false,
  },
  {
    id: 24,
    title: "Alumni",
    path: "/alumni",
    newTab: false,
  },
  {
    id: 25,
    title: "Blogs",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 26,
    title: "Career",
    path: "/career",
    newTab: false,
  },
];

export default menuData;