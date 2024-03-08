import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software Engineer, React developer, and quick learner.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m John Doe, a software Engineer and entrepreneur . Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Unde, veniam vel officiis
          impedit et dolorum quasi est labore! Maxime quae magnam mollitia
          nobis. Aut, alias?.
        </p>
        <div className="flex mt-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-logo.png" alt="LinkedIn" className="w-6 h-6 mr-4" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="twitter-logo.png" alt="Twitter" className="w-6 h-6 mr-4" />
          </a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.png" alt="GitHub" className="w-6 h-6 mr-4" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
