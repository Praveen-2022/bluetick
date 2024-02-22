import React from "react";
import "./blog.css";

const cardData = [
  {
    title: "Speaking SQL: Turning Natural Language into Database Dialogues",
    description:
      "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
    link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
  },
  {
    title:
      "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
    description:
      "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
    link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learningfrom-human-feedback.html",
  },
  {
    title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
    description:
      "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
    link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
  },
  {
    title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
    description:
      "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
    link: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <a href={card.link}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
