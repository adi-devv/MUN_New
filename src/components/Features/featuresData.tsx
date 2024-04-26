import React from "react"; 

export interface Feature {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: JSX.Element;
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <img src="./images/UNSC.png" alt="UNSC" />,
    title: "UNSC",
    paragraph: (
      <>
        Maintains global peace and security through sanctions, peacekeeping, and
        military action.
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Agenda:</span>
        <br />
        Situation in the Middle East, including the Israel - Palestine conflict.
      </>
    ),
  },
  {
    id: 2,
    icon: <img src="./images/AIPPM.png" alt="AIPPM" />,
    title: "AIPPM",
    paragraph: (
      <>
        Platform for Indian political parties to discuss and decide on national
        issues and policies.
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Agenda:</span>
        <br />
        Reviving statehood for both Jammu and Kashmir and Ladakh, including
        tribal status for Ladakh under the 6th schedule of the Indian
        constitution.
      </>
    ),
  },
  {
    id: 3,
    icon: <img src="./images/UNHRC.png" alt="UNHRC" />,
    title: "UNHRC",
    paragraph: (
      <>
        Promotes and protects human rights worldwide through investigations and
        advocacy.
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Agenda:</span>
        <br />
        Rights of non-combatant civilians in war zones (Russia-Ukraine,
        Israel-Palestine, etc.)
      </>
    ),
  },
  {
    id: 4,
    icon: <img src="./images/UNCSW.png" alt="UNCSW" />,
    title: "UNCSW",
    paragraph: (
      <>
        Advocates for gender equality and women's empowerment on a global scale.
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Agenda:</span>
        <br />
        Reproductive rights under threat: Backlash against abortion access
        globally.
      </>
    ),
  },
  {
    id: 5,
    icon: <img src="./images/UNSC.png" alt="UNGA" />,
    title: "UNGA",
    paragraph: (
      <>
        Main policymaking body of the UN, facilitating discussion and
        decision-making on international issues.
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Agenda:</span>
        <br />
        Addressing the Global Food Security Crisis.
      </>
    ),
  },
  {
    id: 6,
    icon: <img src="./images/IPC.png" alt="IPC" />,
    title: "IPC",
    paragraph: (
      <>
        The International Press Corps comprises journalists covering global
        events, shaping public understanding of international affairs.
      </>
    ),
  },
];

export default featuresData;
