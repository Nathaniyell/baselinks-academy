import uiux from "../../public/images/uxui.jpg";
import design from "../../public/images/uiux.jpg";
import photography from "../../public/images/photography.jpg";
import webdev from "../../public/images/web-dev.jpg";
import mobiledev from "../../public/images/mobile-dev.jpg";
import programming from "../../public/images/programming.jpg";

export const courses = [
  {
    title: "Graphic Design",
    description: "Explore the fundamentals of graphic design, including color theory, typography, layout, and visual communication. Learn to create stunning designs that captivate audiences and convey your message effectively.",
    videoLink: "https://youtu.be/SnxFkHqN1RA?si=DbP1sOwjqGPMtabz",
    image: design,
    stars: 4,
    id: "1",
    price: 110,
    students: 120,
    tag: "design",
    quiz: {
      questions: [
        { 
          question: "What is color theory?", 
          options: ["The study of colors in art", "The use of colors in web design", "The arrangement of colors", "The scientific study of color"],
          answer: "The study of colors in art" 
        },
        { 
          question: "Define typography.", 
          options: ["The art of using images", "The art and technique of arranging type", "The use of color in text", "The study of font sizes"],
          answer: "The art and technique of arranging type" 
        }
      ]
    },
    exercise: "Design a poster using color theory and typography principles."
  },
  {
    title: "Photography",
    description: "Dive into the art of photography and learn how to capture breathtaking images. Discover techniques for composition, lighting, and post-processing to elevate your photography skills and create visually stunning photographs.",
    videoLink: "https://youtu.be/LxO-6rlihSg?si=_Uz2n1G7nIbu4XKC",
    image: photography,
    stars: 5,
    id: "10",
    price: 0,
    students: 100,
    tag: "design",
    quiz: {
      questions: [
        { 
          question: "What is composition in photography?", 
          options: ["The arrangement of elements in a photograph", "The use of lighting", "The type of camera used", "The color balance"],
          answer: "The arrangement of elements in a photograph" 
        },
        { 
          question: "Name a lighting technique.", 
          options: ["Rule of thirds", "Rembrandt lighting", "Depth of field", "ISO"],
          answer: "Rembrandt lighting" 
        }
      ]
    },
    exercise: "Capture a series of photos using different composition and lighting techniques."
  },
  {
    title: "UI/UX Design",
    description: "Gain expertise in user interface (UI) and user experience (UX) design. Learn how to create intuitive, visually appealing, and user-friendly digital interfaces that enhance the overall user experience.",
    videoLink: "https://youtu.be/t0OIk9FuMgM?si=1djYF90ApnuZCXRN",
    image: uiux,
    stars: 4,
    id: "2",
    price: 10,
    students: 80,
    tag: "design",
    quiz: {
      questions: [
        { 
          question: "What is UI design?", 
          options: ["User Interface design", "User Interaction design", "Unified Interface design", "Usability Interface design"],
          answer: "User Interface design" 
        },
        { 
          question: "Define UX design.", 
          options: ["User Exchange design", "User Experience design", "User Extension design", "User Experiment design"],
          answer: "User Experience design" 
        }
      ]
    },
    exercise: "Design a simple mobile app interface focusing on user experience."
  },
  {
    title: "Programming (various languages)",
    description: "Explore a variety of programming languages, including Python, JavaScript, Java, and C++. Learn the fundamentals of programming, problem-solving, and algorithm development to build robust and efficient applications.",
    videoLink: "https://youtu.be/zOjov-2OZ0E?si=r7jjs8Zd0sQ0K3Uz",
    image: programming,
    stars: 5,
    id: "20",
    price: 400,
    students: 20,
    tag: "coding",
    quiz: {
      questions: [
        { 
          question: "What is a variable in programming?", 
          options: ["A container for data values", "A type of function", "A programming language", "A type of error"],
          answer: "A container for data values" 
        },
        { 
          question: "Define a function.", 
          options: ["A block of code that performs a task", "A type of variable", "A data type", "A programming error"],
          answer: "A block of code that performs a task" 
        }
      ]
    },
    exercise: "Write a program in Python that calculates the factorial of a number."
  },
  {
    title: "Mobile App Development",
    description: "Dive into the world of mobile app development and learn how to create engaging and functional applications for iOS and Android platforms. Explore mobile design principles, frameworks, and best practices to build cutting-edge mobile apps.",
    videoLink: "https://youtu.be/fis26HvvDII?si=rIt7UbfmPHYbKiOT",
    image: mobiledev,
    stars: 4,
    id: "3",
    price: 210,
    students: 30,
    tag: "coding",
    quiz: {
      questions: [
        { 
          question: "What is the Android SDK?", 
          options: ["Software Development Kit for Android", "Standard Development Kit for Android", "Simple Development Kit for Android", "Secure Development Kit for Android"],
          answer: "Software Development Kit for Android" 
        },
        { 
          question: "Name an iOS development framework.", 
          options: ["Android Studio", "Xcode", "Visual Studio", "Eclipse"],
          answer: "Xcode" 
        }
      ]
    },
    exercise: "Create a simple to-do list mobile application for iOS or Android."
  },
  {
    title: "Web App Development",
    description: "Learn the skills to build dynamic and responsive web applications. Explore front-end and back-end technologies, such as HTML, CSS, JavaScript, and server-side frameworks, to create interactive and user-friendly web experiences.",
    videoLink: "https://youtu.be/ZxKM3DCV2kE?si=L_HeFDBKdtBn8SQ7",
    image: webdev,
    stars: 5,
    id: "30",
    price: 11,
    students: 400,
    tag: "coding",
    quiz: {
      questions: [
        { 
          question: "What is HTML?", 
          options: ["HyperText Markup Language", "HyperText Markdown Language", "HighText Markup Language", "HighText Markdown Language"],
          answer: "HyperText Markup Language" 
        },
        { 
          question: "Define CSS.", 
          options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
          answer: "Cascading Style Sheets" 
        }
      ]
    },
    exercise: "Develop a responsive personal portfolio website using HTML, CSS, and JavaScript."
  }
];
