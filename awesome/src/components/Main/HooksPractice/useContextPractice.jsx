import { createContext, useContext } from "react";

const MyContext = createContext("without provider"); //Чтобы использовать контекст, мы создаём объект MyContext, вызывая метод createContext.
console.log(MyContext);

const External = () => {
  return (
    <MyContext.Provider value="Hello , I am External">
      <Intermediate />
    </MyContext.Provider>
  );
};

const Intermediate = () => {
  return <Internal />;
};

const Internal = () => {
  const messageFromParent = useContext(MyContext);
  //Хук useContext вернёт нам данные, переданные в параметр value у MyContext.Provider, которые мы поместим в const messageFromParent
  return `I am Internal component. I have got the message from External: "${messageFromParent}"`;
};
export default External;
