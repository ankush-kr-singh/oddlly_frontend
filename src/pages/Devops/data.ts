import { ProductDetailsCardProps } from "./app";

export const productDetails: ProductDetailsCardProps[] = [
  {
    bg_img_url: "devops1.jpeg",
    img_title: "CI/CD",
    title: "Continuous Integration and Continuous Deployment (CI/CD)",
    points: [
      {
        key: "Automated Builds and Testing",
        value:
          "Set up automated build and test processes to ensure code quality and functionality.",
      },
      {
        key: "Continuous Integration",
        value:
          "Integrate code changes frequently to detect and address issues early.",
      },
      {
        key: "Continuous Deployment",
        value:
          "Automate the deployment process to deliver features and updates rapidly.",
      },
    ],
    alignment: "LEFT",
  },
  {
    bg_img_url: "devops2.jpeg",
    img_title: "IaC",
    title: "Infrastructure as Code (IaC)",
    points: [
      {
        key: "Configuration Management",
        value:
          "Use tools like Ansible, Puppet, and Chef to manage and automate infrastructure configuration.",
      },
      {
        key: "Version Control",
        value:
          "Maintain infrastructure configurations in version control systems for consistency and traceability.",
      },
      {
        key: "Scalability",
        value: "Easily scale infrastructure up or down based on demand.",
      },
    ],
    alignment: "RIGHT",
  },
  {
    bg_img_url: "devops3.jpeg",
    img_title: "Automation",
    title: "Automation of Development and Operations Processes",
    points: [
      {
        key: "Automated Testing",
        value:
          "Implement automated testing frameworks to ensure software quality and reliability.",
      },
      {
        key: "Deployment Automation",
        value:
          "Automate deployment processes to reduce manual intervention and minimize errors.",
      },
      {
        key: "Monitoring and Logging",
        value:
          "Set up automated monitoring and logging to track performance and identify issues quickly.",
      },
    ],
    alignment: "LEFT",
  },
  {
    bg_img_url: "devops4.jpeg",
    img_title: "Collaboration Tools",
    title: "Collaboration and Communication Tools",
    points: [
      {
        key: "Integrated Toolchains",
        value:
          "Use integrated toolchains to enhance collaboration between development and operations teams.",
      },
      {
        key: "ChatOps",
        value:
          "Leverage chat platforms like Slack and Microsoft Teams to integrate development and operational workflows.",
      },
      {
        key: "Project Management Tools",
        value:
          "Implement project management tools like Jira and Trello to manage tasks and track progress.",
      },
    ],
    alignment: "RIGHT",
  },
];
