import "./styles.css";
import { useState } from "react/cjs/react.development";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsCurOpen] = useState(null);

  // const handleToggle = () => {
  //   setIsOpen((prev) => !prev);
  // };
  return (
    // <div className={`"accordion ${isOpen ? "open" : ""}"`}>
    <div className="accordion">
      {data.map((item, index) => (
        // console.log(index)
        <AccordionItem
          key={index}
          index={index}
          item={item}
          // handleToggle={handleToggle}
          curOpen={curOpen}
          onOpen={setIsCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ item, index, curOpen, onOpen, children }) {
  const isOpen = index === curOpen;
  // const [isOpen, setIsOpen] = useState(false);
  // console.log("s", curOpen);
  const handleToggle = () => {
    onOpen(isOpen ? null : index);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      {/* <div className={`${isOpen ? "item open" : "item"}`} onClick={handleToggle}> */}
      <p className="number">{index < 10 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
