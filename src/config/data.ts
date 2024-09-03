import { HeroProps, ProductDetailsCardProps } from "./app";

export const DevopsProductDetails: ProductDetailsCardProps[] = [
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

export const SecurityProductDetails: ProductDetailsCardProps[] = [
  {
    bg_img_url: "sec-1.webp",
    img_title: "Cybersecurity Assessments",
    title: "Cybersecurity Assessments and Audits",
    points: [
      {
        key: "Vulnerability Assessments",
        value:
          "Identify and evaluate vulnerabilities in your systems and networks.",
      },
      {
        key: "Penetration Testing",
        value: "Simulate cyberattacks to assess the strength of your defenses.",
      },
      {
        key: "Compliance Audits",
        value:
          "Ensure your business meets regulatory requirements such as GDPR, HIPAA, and PCI-DSS.",
      },
    ],
    alignment: "LEFT",
  },
  {
    bg_img_url: "sec-2.webp",
    img_title: "Security Protocols",
    title: "Implementation of Security Protocols and Measures",
    points: [
      {
        key: "Firewalls and IDS",
        value:
          "Deploy advanced firewalls and IDS to protect against unauthorized access and threats.",
      },
      {
        key: "Endpoint Protection",
        value:
          "Implement comprehensive security solutions for desktops, laptops, and mobile devices.",
      },
      {
        key: "Encryption",
        value:
          "Secure sensitive data through encryption, both in transit and at rest.",
      },
    ],
    alignment: "RIGHT",
  },
  {
    bg_img_url: "sec-3.png",
    img_title: "Continuous Monitoring",
    title: "Continuous Monitoring and Incident Response",
    points: [
      {
        key: "24/7 Monitoring",
        value:
          "Continuous monitoring of networks and systems to detect and respond to threats in real-time.",
      },
      {
        key: "Threat Detection and Response",
        value:
          "Utilize advanced threat detection tools to identify and mitigate potential attacks.",
      },
      {
        key: "Incident Response Planning",
        value:
          "Develop and implement incident response plans to quickly address and recover from security breaches.",
      },
    ],
    alignment: "LEFT",
  },
  {
    bg_img_url: "sec-4.webp",
    img_title: "Security Training",
    title: "Security Training and Awareness",
    points: [
      {
        key: "Employee Training",
        value:
          "Conduct regular training sessions to educate employees on security best practices and threat awareness.",
      },
      {
        key: "Phishing Simulations",
        value:
          "Test and improve employee responses to phishing attacks through simulated exercises.",
      },
      {
        key: "Security Policies",
        value:
          "Develop and enforce security policies to maintain a secure workplace environment.",
      },
    ],
    alignment: "RIGHT",
  },
];

export const SoftwareProductDetails: ProductDetailsCardProps[] = [
  {
    bg_img_url: "custom_software_development.jpg",
    img_title: "Custom Software Development",
    title: "Custom Software Development",
    points: [
      {
        key: "Tailored Solutions",
        value:
          "We develop software that is customized to your specific business requirements.",
      },
      {
        key: "Agile Methodologies",
        value:
          "Our agile development approach ensures flexibility and quick adaptation to changes.",
      },
      {
        key: "Scalable Architecture",
        value: "We design scalable software that grows with your business.",
      },
    ],
    alignment: "LEFT",
  },
  {
    bg_img_url: "app_maintenance_support.jpg",
    img_title: "Application Maintenance",
    title: "Application Maintenance and Support",
    points: [
      {
        key: "Proactive Monitoring",
        value:
          "Continuous monitoring of applications to ensure optimal performance.",
      },
      {
        key: "Bug Fixes and Updates",
        value: "Regular updates and quick resolution of any issues.",
      },
      {
        key: "Performance Optimization",
        value: "Ongoing performance tuning to enhance efficiency.",
      },
    ],
    alignment: "RIGHT",
  },
  {
    bg_img_url: "integration_services.jpg",
    img_title: "Integration Services",
    title: "Integration Services",
    points: [
      {
        key: "Third-Party Integration",
        value:
          "Seamless integration with existing systems and third-party services.",
      },
      {
        key: "API Development",
        value:
          "Development of robust APIs for better connectivity and data exchange.",
      },
      {
        key: "Data Migration",
        value: "Secure and efficient migration of data between systems.",
      },
    ],
    alignment: "LEFT",
  },
];

export const AutomationProductDetails: ProductDetailsCardProps[] = [
  {
    bg_img_url: "automated_solutions.jpg",
    img_title: "Automated Solutions",
    title: "Automated Solutions",
    points: [
      {
        key: "Workflow Automation",
        value:
          "Automate repetitive tasks and processes to increase efficiency.",
      },
      {
        key: "Infrastructure Automation",
        value:
          "Utilize tools like Ansible, Puppet, and Chef to automate infrastructure management.",
      },
      {
        key: "Automated Monitoring",
        value:
          "Implement systems that automatically monitor and alert for potential issues.",
      },
    ],
    alignment: "LEFT",
  },
  {
    bg_img_url: "network_design.jpg",
    img_title: "Network Design",
    title: "Network Design and Implementation",
    points: [
      {
        key: "Custom Network Architecture",
        value:
          "Design networks tailored to your business needs, ensuring scalability and reliability.",
      },
      {
        key: "Implementation Services",
        value:
          "Complete setup and configuration of networking equipment and software.",
      },
      {
        key: "Secure Network Solutions",
        value:
          "Integrate security protocols to protect against unauthorized access and threats.",
      },
    ],
    alignment: "RIGHT",
  },
  {
    bg_img_url: "network_management.jpg",
    img_title: "Network Management",
    title: "Network Management and Maintenance",
    points: [
      {
        key: "Continuous Monitoring",
        value: "24/7 monitoring of network performance and health.",
      },
      {
        key: "Proactive Maintenance",
        value:
          "Regular updates and maintenance to prevent issues before they occur.",
      },
      {
        key: "Troubleshooting and Support",
        value: "Rapid response to any network issues, minimizing downtime.",
      },
    ],
    alignment: "LEFT",
  },
];

export const DevopsHero: HeroProps = {
  title: `DevOps`,
  desc: `Enhance your development and operations with our comprehensive DevOps services`,
};

export const AutomationHero: HeroProps = {
  title: `Automation`,
  desc: `Streamline your processes and improve efficiency with our automation solutions`,
};

export const SoftwareHero: HeroProps = {
  title: `Software Development`,
  desc: `Build custom software tailored to your business needs with our expert development services`,
};

export const SecurityHero: HeroProps = {
  title: `Security Services`,
  desc: `Protect your business with our advanced security services and solutions`,
};
