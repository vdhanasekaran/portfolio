export const portfolioData = [
  {
    id: 1,
    class: "isotop-item logo",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/work/insureportal.png",
    subtitle: "Health, Business, Vehicle insurance product",
    title: "Insure Portal",
    target: "https://insure.marsh.com/",
    category: ["Insurance"],
    project: "Insurance Policy Assurance",
    "Tech stack": [".NET Core MVC", ".NET Core WebAPI", 'C#', 'Entity Framework Core', 'SQL Server', 'Hangfire Background Job', 'OpenID Connect', 'OAuth'],
    methodlogy: "Agile",
    previewLink: "https://insure.marsh.com/",
    previewName: "https://insure.marsh.com/",
    desc: [
      `Health and business insurance products for small and medium-sized enterprises`,
      `Our product was deployed on on-premise servers in a load-balanced environment.`,
      `We have both UI and Web API for customers to use. Customers can choose their model by either using our fully integrated user interface or integrating our API into their own user interface.`,
      `We support customers from various regions such as Japan, the United Arab Emirates, Indonesia, etc.`,
      `We followed agile methodology for our deliverables.`,
      `We implemented multilingual for Indonesia, Japan and UAE region.`,
      `Apart from the delivery, we have seen the satisfaction of our customers in the seamless and hassle-free use of our product, which has given us pleasure`
    ],
  },
  {
    id: 2,
    class: "isotop-item design mockup",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/prophoenix.png",
    subtitle: "Public Safety Software",
    title: "Police and Fire Record Management System",
    target: "#portfolio-1",
    category: ["Public Safety"],
    project: "Police and Fire RMS",
    "Tech stack": ["ASP.NET", "C#", "SQL Server", "Google map API", "Bootstrap", "Javascript", "JQuery"],
    methodlogy: "Agile",
    previewLink: "https://prophoenix.com/fire/",
    previewName: "https://prophoenix.com/fire/",
    desc: [
      `Develop questionnaire system to validate prisoners psychology`,
      `Troubleshoot and debug performance issues in product`,
      `Develop location tracking system using Google Map API to monitor patrol/ambulances`
    ],
  },
  {
    id: 3,
    class: "isotop-item logo mockup",
    bgClass: "bg-catkrill",
    imgSrc: "/assets/img/work/AutoNation_Logo.jpg",
    subtitle: "E-Commerce",
    title: "Automobile retail system",
    target: "#portfolio-1",
    category: ["Mockup", "Logo"],
    project: "E-Commerce Website",
    "Tech stack": [".NET Framework", "C#", "Azure App Service", "Azure Service bus queue", "Storage Account", "Web API", "WCF", "NUnit", "Moq"],
    methodlogy: "Agile",
    previewLink: "https://www.autonation.com/",
    previewName: "https://www.autonation.com/",
    desc: [
      `Migrating WCF service to ASP.NET WebAPI.`,
      `Deploy WebAPI to Azure App Service`,
      `Develop webjob to handle image pulled through Azure service bus queue`,
      `Store incoming images to Azure Storage Account`,
      `Use log4net and push logs to Azure application insights`,
      `Use Azure Search to index search keywords`
    ],
  },
  {
    id: 4,
    class: "American Express",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/work/amex.png",
    subtitle: "Banking",
    title: "Integration Service",
    target: "#portfolio-1",
    category: ["Mockup"],
    project: "website",
    "Tech stack": [".NET", "C#", "WCF", "Moq", "log4net", "Splunk"],
    methodlogy: "Agile",
    previewLink: "https://www.americanexpress.com/us/merchant/accept-the-card.html?inav=footer_accept_amex",
    previewName: "https://www.americanexpress.com/us/merchant/accept-the-card.html?inav=footer_accept_amex",
    desc: [
      `Develop and expose WCF service and integrate with third-party providers to fetch offers for prepaid cards`,
      `Followed test driven development and written unit test methods with 75% code coverage`,
      `Develop Web API and integrate with payment provider to manipulate payment data`,
      `Develop REST API in WCF using WebHttpBinding`,
      `Create low-level design document`
    ]
  },
  {
    id: 5,
    class: "AdminRe",
    bgClass: "bg-prink",
    imgSrc: "/assets/img/work/swissre.png",
    subtitle: "Re-insurance",
    title: "Application Refactoring",
    target: "#portfolio-1",
    category: ["Insurance"],
    project: "Windows application",
    "Tech stack": ["WPF", "C#", "MVVM"],
    methodlogy: "Envato",
    previewLink: "#",
    previewName: "",
    desc: [
      `Migrate VB applications to WPF applications`,
      `Architected application using MVVM design pattern`,
      `Implement multilingual using Resource files`
    ],
  }
];

export const filterButtons = [
  {
    id: 1,

    text: "All",
  }
  // {
  //   id: 2,
  //   text: "Mockup",
  // },
  // {
  //   id: 3,
  //   text: "Graphic Design",
  // },
  // {
  //   id: 4,
  //   text: "Logo",
  // },
];
