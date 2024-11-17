import { ResumeData } from "./resume-builder-types";
import { v4 as uuidv4 } from 'uuid';

export const mockResumeData: ResumeData = {
  id: uuidv4(),
  basics: {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "www.sarahjohnson.dev",
    summary: "Senior Full Stack Developer with 6+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture. Led multiple teams in delivering high-impact projects for enterprise clients. Passionate about creating intuitive user experiences and mentoring junior developers."
  },
  experience: [
    {
      id: uuidv4(),
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      startDate: "2021-03",
      current: true,
      description: "• Led a team of 5 developers in rebuilding the company's flagship SaaS platform, resulting in a 40% improvement in performance\n• Implemented microservices architecture using Node.js and Docker, improving system scalability\n• Mentored junior developers and conducted code reviews\n• Introduced automated testing practices, achieving 85% code coverage"
    },
    {
      id: uuidv4(),
      company: "InnovateSoft Inc.",
      position: "Full Stack Developer",
      startDate: "2018-06",
      endDate: "2021-02",
      current: false,
      description: "• Developed and maintained multiple React-based web applications for enterprise clients\n• Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%\n• Optimized database queries, resulting in 30% faster page load times\n• Collaborated with UX designers to implement responsive designs"
    },
    {
      id: uuidv4(),
      company: "StartUp Labs",
      position: "Junior Developer",
      startDate: "2017-01",
      endDate: "2018-05",
      current: false,
      description: "• Built and maintained RESTful APIs using Express.js\n• Implemented front-end features using React and Redux\n• Participated in daily stand-ups and sprint planning meetings\n• Assisted in the migration of legacy PHP applications to Node.js"
    }
  ],
  education: [
    {
      id: uuidv4(),
      institution: "University of California, Berkeley",
      degree: "Master of Science",
      field: "Computer Science",
      startDate: "2015-09",
      endDate: "2017-05",
      gpa: "3.8"
    },
    {
      id: uuidv4(),
      institution: "Stanford University",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      startDate: "2011-09",
      endDate: "2015-05",
      gpa: "3.9"
    }
  ],
  skills: [
    {
      id: uuidv4(),
      name: "React.js",
      level: "expert"
    },
    {
      id: uuidv4(),
      name: "Node.js",
      level: "expert"
    },
    {
      id: uuidv4(),
      name: "TypeScript",
      level: "advanced"
    },
    {
      id: uuidv4(),
      name: "AWS",
      level: "advanced"
    },
    {
      id: uuidv4(),
      name: "Docker",
      level: "intermediate"
    },
    {
      id: uuidv4(),
      name: "Kubernetes",
      level: "intermediate"
    },
    {
      id: uuidv4(),
      name: "GraphQL",
      level: "advanced"
    },
    {
      id: uuidv4(),
      name: "MongoDB",
      level: "advanced"
    }
  ],
  projects: [
    {
      id: uuidv4(),
      name: "E-commerce Platform Redesign",
      description: "Led the complete redesign and implementation of a high-traffic e-commerce platform",
      url: "https://github.com/sarahjohnson/ecommerce-platform",
      highlights: [
        "Implemented real-time inventory management system",
        "Integrated multiple payment gateways",
        "Achieved 99.9% uptime",
        "Reduced page load time by 50%"
      ]
    },
    {
      id: uuidv4(),
      name: "AI-Powered Analytics Dashboard",
      description: "Developed a real-time analytics dashboard with AI-driven insights",
      url: "https://github.com/sarahjohnson/analytics-dashboard",
      highlights: [
        "Integrated machine learning models for predictive analytics",
        "Built responsive data visualizations using D3.js",
        "Implemented real-time data processing pipeline",
        "Reduced data processing time by 70%"
      ]
    }
  ],
  certifications: [
    {
      id: uuidv4(),
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022-06",
      url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
    },
    {
      id: uuidv4(),
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2021-03",
      url: "https://cloud.google.com/certification/cloud-developer"
    },
    {
      id: uuidv4(),
      name: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2020-11",
      url: "https://university.mongodb.com/certification"
    }
  ]
};
