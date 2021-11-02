import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <aside>
      <form>
        <hgroup>
          <a href="https://www.smashingmagazine.com/the-smashing-newsletter/">
            <button></button>
          </a>
          <h1>Useful front-end & UX tips, delivered once a week.</h1>
          <h2>
            With tools to help you get your work done better. Subscribe and get{" "}
            <a href="https://www.smashingmagazine.com/2020/03/smart-interface-design-patterns-checklists/">
              Vitaly’s Smart Interface Design Checklists PDF
            </a>{" "}
            — in your inbox.{" "}
          </h2>
        </hgroup>
        <input
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>MEOW!</button>
      </form>
    </aside>
  );
};

export default Newsletter;
