import DataContext from "./DataContext";
import { useEffect, useState } from "react";
import financeApp from '../../assets/Finance-tracker-app.png';
import bookNavigatorApp from '../../assets/Book-Navigator-app.png';
import cryptoTrackerApp from '../../assets/crypto-tracker-app.png';
import toDoApp from '../../assets/to-do-app.png';
import portfolioApp from '../../assets/portfolio-app.png';
import comingSoon from '../../assets/coming-soon.jpg';
// import img2 from "../../assets/jojo/project11.png";
// import img3 from "../../assets/jojo/project12.png";
// import img4 from "../../assets/jojo/project13.png";
// import img5 from "../../assets/jojo/project14.png";
// import img6 from "../../assets/jojo/project15.png";

const DataProvider = ({children})=>{

    const [darkTheme,setDarkTheme] = useState(true);
    const [toggleMenuBar,setToggleMenuBar] = useState(false);
    const projectList = [
      {
        img: financeApp,
        title: "Finance Tracker App",
        desc: "Track your income & expenses effortlessly. Take control of your finances today!",
        link: "https://sagu-finance-tracker-app.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/Finance-Tracker-App",
      },
      {
        img: cryptoTrackerApp,
        title: "Crypto Tracker App",
        desc: "Stay on top of the ever-changing cryptocurrency market. Get live prices, market data, insightful charts, and analyze trends – all in one place",
        link: "https://sagu-crypto-tracker.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/crypto-tracker",
      },
      {
        img: toDoApp,
        title: "ToDo List App",
        desc: "Organize your day and boost your productivity with the Todo List App. Create, manage, and track your tasks efficiently!",
        link: "https://react-to-do-app-flame.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/to-do-app",
      },
      {
        img: bookNavigatorApp,
        title: "Book Navigator App",
        desc: "Explore millions of books and find your next read with Book Navigator (powered by Google Books).",
        // desc:"Dive into the world of books and discover your next great read with Book Navigator App!"
        link: "https://virtual-book-beta.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/VirtualBook",
      },
      {
        img: portfolioApp,
        title: "Sagunthala's Portfolio",
        desc: "Evolving web developer, always learning, always growing. Explore my portfolio!.",
        link: "https://sagunthala-a-portfolio.vercel.app/",
        gitLink: "https://github.com/Sagunthala-A/reactjs-portfolio",
      },
      // {
      //   img: comingSoon,
      //   title: "Coming Soon",
      //   desc: "Project will be launch soon",
      //   link: "www.google.com",
      //   gitLink: "https://github.com/Sagunthala-A",
      // },
    ];
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
    // Update body background color when isDarkMode changes
    document.body.style.backgroundColor = darkTheme ? 'black' : 'white';
  }, [darkTheme]);
    return <DataContext.Provider value={{
        darkTheme,setDarkTheme,
        toggleMenuBar,setToggleMenuBar,
        projectList,
        hovered, setHovered
    }}>
        {children}
    </DataContext.Provider>
}

export default DataProvider;