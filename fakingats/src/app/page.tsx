import React from "react";

const Page: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h1 style={{ color: "#859F3D" ,fontWeight:'bold', fontSize: "5rem", margin:'30px 0'}}> <small style={{ fontSize: "3rem" }}>{'>>>>>>'}</small> Fucking ATS <small style={{ fontSize: "3rem" }}>{'<<<<<<'}</small> </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <div style={{ width: "48%" }}>
          <h2 style={{ fontSize: "1.4rem" }}>
            - <b>Job Description</b> -------------------------------------
          </h2>
          <textarea
            className="placeholder-gray-600 placeholder-opacity-50"
            style={{
              width: "100%",
              background: "var(--color4)",
              height: "500px",
              borderRadius: "7px",
              outline: "none",
              color: "var(--color1)",
              padding: "7px",
            }}
            placeholder="At least 3 years of experience in web front-end development for Enterprise projects;
Good knowledge of Javascript ES6+ (classes, objects, modules) and Typescript;
Excellent knowledge of HTML5, CSS3, SASS, CSS-in-JS and Responsive Design.
Knowledge of the basic concepts of functional programming (RXJS);
Esperienza con library React, React hooks, CSS-in-JS, Styled Component, Design Pattern (Singleton, Observer, Delegation), Networking (REST, Multi-threading, Cache, etc.)"
          ></textarea>
        </div>
        <div style={{ width: "48%" }}>
          <h2 style={{ fontSize: "1.4rem" }}>
            -{" "}
            <b>
              Resume <small style={{ fontSize: "1rem" }}>(LaTeX)</small>
            </b>{" "}
            -------------------------------------
          </h2>
          <textarea
            className="placeholder-gray-600 placeholder-opacity-50"
            style={{
              width: "100%",
              background: "var(--color4)",
              height: "500px",
              borderRadius: "7px",
              outline: "none",
              color: "var(--color1)",
              padding: "7px",
            }}
            placeholder="\documentclass[a4paper,10pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}
\usepackage{titlesec}
\usepackage{fontawesome5}
\usepackage{multicol}
\usepackage{helvet}
\hypersetup{
    pdfborder={0 0 0},
}
\renewcommand{\familydefault}{\sfdefault}

\titleformat{\section}{\Large\bfseries}{}{0pt}{}[\titlerule]
\renewcommand{\baselinestretch}{1.15}
\setlength{\parindent}{0pt}
\setlength{\parskip}{5pt}

\begin{document}

\begin{center}
    {\LARGE\bf John Doe}\\[5pt]
    \faPhone~(+39)123456789 \quad \faMapMarker~Italy, Genoa \quad \faEnvelope~\href{mailto:johndoe@example.com}{johndoe@example.com}\\[5pt]
    \faLinkedin~\href{https://linkedin.com/in/johndoe}{linkedin.com/in/johndoe} \quad \faGithub~\href{https://github.com/johndoe}{github.com/johndoe}
\end{center}

\section*{Summary}
Experienced Software Developer with expertise in web applications using modern technologies. Skilled in both frontend and backend development.

\section*{Professional Experience}

\textbf{Tech Company | Software Developer} \hfill \textit{Remote (Jan 2023 -- Present)}
\begin{itemize}[noitemsep]
    \item Developed and maintained web applications using React and Node.js.
    \item Improved application performance by 20% through code optimization.
\end{itemize}

\section*{Education}

\textbf{Bachelor of Computer Science} \hfill \textit{Sep 2018 -- Jun 2022}\\
\textit{University of Genoa}

\end{document}"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Page;
