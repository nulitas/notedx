const getInitialData = () => {
  return [
    {
      id: 1,
      title: "Babel",
      body: "Babel is an open-source tool used to convert ECMAScript 2015+ syntax into syntax supported by older versions of the JavaScript engine. Babel is often used when we use the latest syntax including JSX syntax.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 2,
      title: "Functional Component",
      body: "Functional components are React components that are created using JavaScript functions. For a JavaScript function to be called a component it must return a React element and be called like a React component.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 3,
      title: "Modularization",
      body: "In the context of JavaScript programming, modularization is a technique of breaking up or using code in a JavaScript file separately based on its respective responsibilities.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 4,
      title: "Lifecycle",
      body: "In the context of React components, lifecycle is a collection of methods that make up the lifecycle from the component being created (constructor), printed (render), post-printed (componentDidMount), and so on. ",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 5,
      title: "ESM",
      body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: 6,
      title: "Module Bundler",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
  ];
};

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
