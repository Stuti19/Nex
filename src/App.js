// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="logo.png" alt="CompoundN Logo" />
//         <span className="brand-name">CompoundN</span>
//       </div>
//       <div className="nav-links">
//         <a href="#">Use Cases</a>
//         <a href="#">Security</a>
//         <a href="#">Careers</a>
//       </div>
//       <div className="auth-buttons">
//         <a href="#" className="login-btn">Log in</a>
//         <a href="#" className="contact-btn">
//           <svg className="arrow-icon" viewBox="0 0 16 16" fill="none">
//             <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//           Contact sales
//         </a>
//       </div>
//       <div className="menu-icon">☰</div>
//     </nav>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">AI Copilot for <br /> Intelligent Investing</h1>
//         <div className="hero-buttons">
//           <a href="#" className="primary-btn">Contact sales</a>
//           <a href="#" className="secondary-btn">
//             <svg className="arrow-icon" viewBox="0 0 16 16" fill="none">
//               <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Get started
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// const FeatureBox = () => {
//   return (
//     <div className="feature-box">
//       <div className="feature-header">
//         <img src="logo.png" alt="Nex Logo" className="feature-logo" />
//         <span className="feature-title">Introducing Nex</span>
//       </div>
//       <p className="feature-description">
//         The world’s best copilot for Intelligent Investing. Optimize workflows and enhance analytical output with Nex.
//       </p>
//     </div>
//   );
// };

// const Section1 = () => {
//   return (
//     <section className="section1">
//       <div className="section1-heading">
//         Meet Nex from CompoundN,<br />
//         <p>Your Copilot for Intelligent Investing</p>
//       </div>
//       <div className="section1-container">
//         <div className="section1-column">
//           <img src="section1photo.png" alt="Task Automation" />
//           <div className="section1-1-text section-text">Delegate High-Frequency Tasks</div>
//           <p>
//             Nex agents create structured plans with traceable steps, automating analytical processes efficiently.
//           </p>
//         </div>
//         <div className="section1-column">
//           <video autoPlay loop muted playsInline>
//             <source src="section1vid.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="section1-1-text section-text">Comprehensive Data Reasoning</div>
//           <p>
//             Nex integrates internal files, external data, and trusted sources into a unified search platform for optimal analysis.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <FeatureBox />
//       <Section1 />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(<App />);
// } else {
//   console.error("Root element not found");
// }
// export default App;


import React from 'react';
import Login from './components/Login'; // Adjust path as needed

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
