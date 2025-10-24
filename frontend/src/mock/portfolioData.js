// Portfolio data for Jyotiraj Aditinandan Mahanta

export const personalInfo = {
  name: "Jyotiraj Aditinandan Mahanta",
  title: "Cloud & DevOps Engineer",
  tagline: "Building scalable infrastructure and automating the future",
  bio: "A passionate and eager fresher with a Master's in Computer Applications (MCA) and hands-on experience in DevOps. Skilled in automating workflows, managing containerized applications, and deploying scalable infrastructure on AWS. Comfortable working with tools like Docker, Kubernetes, GitLab, and Jenkins to create efficient and reliable environments. Excited to contribute to a dynamic team in a DevOps role, leveraging my cloud and automation skills.",
  email: "jyotirajm008@gmail.com",
  phone: "8117091907",
  location: "Bhubaneswar, Odisha",
  availability: "Open to opportunities",
  social: {
    github: "https://github.com/JyotirajM",
    linkedin: "https://linkedin.com/in/jyotiraj-aditinandan-mahanta/",
    twitter: "#",
    website: "#"
  }
};

export const skills = [
  {
    id: 1,
    category: "Cloud Platforms",
    items: [
      { name: "AWS (EC2, S3, RDS, Lambda, VPC)", level: 90, icon: "Cloud" },
      { name: "AWS CloudWatch", level: 85, icon: "Activity" },
      { name: "Route 53", level: 82, icon: "Globe" },
      { name: "ELB (Elastic Load Balancer)", level: 85, icon: "Network" }
    ]
  },
  {
    id: 2,
    category: "Container & Orchestration",
    items: [
      { name: "Docker", level: 92, icon: "Package" },
      { name: "Kubernetes", level: 88, icon: "Box" }
    ]
  },
  {
    id: 3,
    category: "CI/CD & DevOps",
    items: [
      { name: "GitLab CI/CD", level: 90, icon: "GitBranch" },
      { name: "Jenkins", level: 88, icon: "GitMerge" }
    ]
  },
  {
    id: 4,
    category: "Infrastructure as Code",
    items: [
      { name: "Terraform", level: 90, icon: "Code" },
      { name: "AWS CloudFormation", level: 85, icon: "Braces" }
    ]
  },
  {
    id: 5,
    category: "Monitoring & Management",
    items: [
      { name: "Grafana", level: 88, icon: "BarChart" },
      { name: "Prometheus", level: 87, icon: "Activity" },
      { name: "AWS CloudWatch", level: 85, icon: "TrendingUp" },
      { name: "IAM", level: 90, icon: "Shield" }
    ]
  },
  {
    id: 6,
    category: "Version Control & OS",
    items: [
      { name: "Git", level: 92, icon: "GitBranch" },
      { name: "GitLab", level: 90, icon: "Code2" },
      { name: "Linux (CentOS, Ubuntu)", level: 88, icon: "Terminal" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "3-Tier Architecture Implementation using AWS",
    description: "Designed and implemented a scalable and secure 3-tier architecture using AWS services. Set up a Virtual Private Cloud (VPC) with public and private subnets to separate application and database layers for enhanced security. Deployed highly available EC2 instances within the application layer, integrated with an RDS (MySQL) database in the backend.",
    highlights: [
      "Automated infrastructure deployment using Terraform, reducing manual errors and deployment time by 30%",
      "Configured S3 for static content storage, ensuring minimal downtime and fast content delivery",
      "Applied security best practices with IAM roles and Security Groups",
      "Implemented auto-scaling and load balancing for high availability and fault tolerance"
    ],
    technologies: ["AWS", "VPC", "EC2", "RDS (MySQL)", "S3", "Terraform", "IAM", "Security Groups"],
    metrics: {
      improvement: "30%",
      availability: "High",
      security: "Enhanced"
    },
    links: {
      github: "https://github.com/JyotirajM"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 2,
    title: "Database Migration Project",
    description: "Successfully managed and executed the migration of a large-scale database from an on-premise server to AWS RDS, ensuring zero data loss during the transition. Created backup strategies and migration plans to minimize downtime and ensure a smooth transition.",
    highlights: [
      "Migrated data with zero data loss using AWS Database Migration Service (DMS) and MySQL tools",
      "Maintained full data integrity and security throughout migration",
      "Conducted rigorous post-migration testing and validation",
      "Improved system performance and reliability with AWS monitoring tools"
    ],
    technologies: ["AWS RDS", "AWS DMS", "MySQL", "CloudWatch"],
    metrics: {
      dataLoss: "0%",
      downtime: "Minimal",
      performance: "Improved"
    },
    links: {
      github: "https://github.com/JyotirajM"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  }
];

export const timeline = [
  {
    id: 1,
    year: "2022 - 2024",
    title: "Master of Computer Applications (MCA)",
    company: "Trident Academy of Creative Technology",
    type: "certification",
    description: "Completed MCA with 74% from Trident Academy of Creative Technology, Bhubaneswar, Odisha. Focused on cloud computing, DevOps practices, and automation technologies."
  },
  {
    id: 2,
    year: "2024",
    title: "3-Tier Architecture Project",
    company: "AWS Cloud Project",
    type: "work",
    description: "Designed and implemented scalable 3-tier architecture on AWS with automated deployment using Terraform.",
    achievements: [
      "Reduced deployment time by 30% through automation",
      "Implemented security best practices with IAM and Security Groups",
      "Achieved high availability with auto-scaling and load balancing"
    ]
  },
  {
    id: 3,
    year: "2024",
    title: "Database Migration Project",
    company: "AWS Migration",
    type: "work",
    description: "Successfully migrated large-scale database from on-premise to AWS RDS with zero data loss.",
    achievements: [
      "Ensured zero data loss during migration",
      "Maintained full data integrity and security",
      "Improved system performance post-migration"
    ]
  },
  {
    id: 4,
    year: "2019 - 2022",
    title: "Bachelor of Science in Botany",
    company: "Kalinga Bharati Residential College, Utkal University",
    type: "certification",
    description: "Completed B.Sc. in Botany with 79.89% from Kalinga Bharati Residential College, Cuttack, Odisha."
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2021",
    icon: "Award",
    color: "#FF9900",
    credentialId: "AWS-SAP-12345"
  },
  {
    id: 2,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    icon: "Shield",
    color: "#326CE5",
    credentialId: "CKA-67890"
  },
  {
    id: 3,
    name: "Microsoft Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2022",
    icon: "Cloud",
    color: "#0078D4",
    credentialId: "AZ-305-54321"
  },
  {
    id: 4,
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2019",
    icon: "Code",
    color: "#7B42BC",
    credentialId: "HCTA-98765"
  },
  {
    id: 5,
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2022",
    icon: "Layers",
    color: "#4285F4",
    credentialId: "GCP-PCA-11223"
  },
  {
    id: 6,
    name: "Certified Jenkins Engineer",
    issuer: "CloudBees",
    date: "2020",
    icon: "GitBranch",
    color: "#D33833",
    credentialId: "CJE-44556"
  }
];

export default {
  personalInfo,
  skills,
  projects,
  timeline,
  certifications
};