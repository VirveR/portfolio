import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalBackground from "./components/EducationalBackground";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <PersonalInfo />
      <EducationalBackground />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default App;