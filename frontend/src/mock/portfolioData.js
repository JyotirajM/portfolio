// Mock data for Cloud & DevOps Portfolio

export const personalInfo = {
  name: "Alex Rivera",
  title: "Cloud & DevOps Engineer",
  tagline: "Building scalable infrastructure and automating the future",
  bio: "Passionate Cloud & DevOps Engineer with 6+ years of experience designing and implementing cloud-native solutions. Specialized in AWS, Azure, Kubernetes orchestration, and building robust CI/CD pipelines. Proven track record of reducing infrastructure costs by 40% while improving deployment efficiency by 60%.",
  email: "alex.rivera@clouddevops.dev",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  social: {
    github: "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    twitter: "https://twitter.com/alexrivera_dev",
    website: "https://alexrivera.dev"
  }
};

export const skills = [
  {
    id: 1,
    category: "Cloud Platforms",
    items: [
      { name: "AWS", level: 95, icon: "Cloud" },
      { name: "Azure", level: 88, icon: "Cloud" },
      { name: "Google Cloud Platform", level: 82, icon: "Cloud" },
      { name: "DigitalOcean", level: 85, icon: "Cloud" }
    ]
  },
  {
    id: 2,
    category: "Container & Orchestration",
    items: [
      { name: "Kubernetes", level: 92, icon: "Box" },
      { name: "Docker", level: 95, icon: "Package" },
      { name: "Helm", level: 88, icon: "Ship" },
      { name: "Docker Swarm", level: 80, icon: "Layers" }
    ]
  },
  {
    id: 3,
    category: "CI/CD & Automation",
    items: [
      { name: "Jenkins", level: 90, icon: "GitBranch" },
      { name: "GitLab CI/CD", level: 92, icon: "GitMerge" },
      { name: "GitHub Actions", level: 94, icon: "Github" },
      { name: "ArgoCD", level: 87, icon: "GitPullRequest" },
      { name: "CircleCI", level: 85, icon: "Circle" }
    ]
  },
  {
    id: 4,
    category: "Infrastructure as Code",
    items: [
      { name: "Terraform", level: 93, icon: "Code" },
      { name: "Ansible", level: 89, icon: "FileCode" },
      { name: "CloudFormation", level: 86, icon: "Braces" },
      { name: "Pulumi", level: 82, icon: "Terminal" }
    ]
  },
  {
    id: 5,
    category: "Monitoring & Observability",
    items: [
      { name: "Prometheus", level: 91, icon: "Activity" },
      { name: "Grafana", level: 90, icon: "BarChart" },
      { name: "ELK Stack", level: 87, icon: "Database" },
      { name: "Datadog", level: 85, icon: "TrendingUp" },
      { name: "New Relic", level: 83, icon: "Zap" }
    ]
  },
  {
    id: 6,
    category: "Programming & Scripting",
    items: [
      { name: "Python", level: 90, icon: "Code2" },
      { name: "Bash/Shell", level: 92, icon: "Terminal" },
      { name: "Go", level: 80, icon: "Code" },
      { name: "YAML/JSON", level: 95, icon: "FileJson" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Multi-Cloud Kubernetes Platform",
    description: "Designed and deployed a production-grade Kubernetes platform spanning AWS, Azure, and GCP with automated failover and disaster recovery. Achieved 99.99% uptime with zero-downtime deployments.",
    highlights: [
      "Managed 500+ microservices across 3 cloud providers",
      "Implemented GitOps with ArgoCD and Flux",
      "Reduced cross-cloud latency by 40% with intelligent routing"
    ],
    technologies: ["Kubernetes", "Terraform", "ArgoCD", "Istio", "AWS", "Azure", "GCP"],
    metrics: {
      uptime: "99.99%",
      services: "500+",
      costSaving: "35%"
    },
    links: {
      github: "https://github.com/alexrivera/multi-cloud-k8s",
      demo: "https://demo.multi-cloud.dev"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 2,
    title: "Automated CI/CD Pipeline Platform",
    description: "Built enterprise-grade CI/CD platform using Jenkins, GitLab, and GitHub Actions with automated testing, security scanning, and deployment to multiple environments. Reduced deployment time from 2 hours to 15 minutes.",
    highlights: [
      "Integrated automated security scanning with Trivy and SonarQube",
      "Implemented blue-green and canary deployment strategies",
      "Achieved 85% reduction in deployment time"
    ],
    technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    metrics: {
      deployments: "1000+/month",
      timeReduction: "85%",
      teams: "25+"
    },
    links: {
      github: "https://github.com/alexrivera/cicd-platform",
      docs: "https://docs.cicd-platform.dev"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    id: 3,
    title: "Cloud Cost Optimization Engine",
    description: "Developed intelligent cost optimization system using Python and AWS Lambda that analyzes resource usage patterns and automatically rightsizes instances, schedules non-critical workloads, and identifies unused resources.",
    highlights: [
      "Reduced AWS costs by $180K annually (42% savings)",
      "Automated rightsizing of 800+ EC2 instances",
      "Implemented predictive scaling based on historical patterns"
    ],
    technologies: ["Python", "AWS Lambda", "CloudWatch", "Boto3", "Terraform", "DynamoDB"],
    metrics: {
      costSaving: "42%",
      annualSavings: "$180K",
      instances: "800+"
    },
    links: {
      github: "https://github.com/alexrivera/cloud-cost-optimizer"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 4,
    title: "Infrastructure Monitoring Stack",
    description: "Deployed comprehensive monitoring solution using Prometheus, Grafana, and ELK Stack with custom dashboards and alerting. Provides real-time visibility into 300+ services across multiple clusters.",
    highlights: [
      "Created 50+ custom Grafana dashboards",
      "Implemented predictive alerting with ML models",
      "Reduced MTTR by 65% with intelligent alert routing"
    ],
    technologies: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana", "AlertManager"],
    metrics: {
      services: "300+",
      alerts: "10K+/day",
      mttrReduction: "65%"
    },
    links: {
      github: "https://github.com/alexrivera/monitoring-stack",
      demo: "https://monitoring.demo.dev"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 5,
    title: "Disaster Recovery Automation",
    description: "Architected and implemented automated disaster recovery system for critical applications with RPO of 5 minutes and RTO of 15 minutes. Includes automated failover, data replication, and regular DR drills.",
    highlights: [
      "Automated cross-region replication for 50+ databases",
      "Implemented automated failover with Route53 health checks",
      "Conducted quarterly DR drills with 100% success rate"
    ],
    technologies: ["AWS", "Terraform", "Route53", "RDS", "S3", "Lambda", "Python"],
    metrics: {
      rpo: "5 min",
      rto: "15 min",
      databases: "50+"
    },
    links: {
      github: "https://github.com/alexrivera/dr-automation"
    },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 6,
    title: "Serverless Microservices Platform",
    description: "Built serverless platform on AWS using Lambda, API Gateway, and DynamoDB. Implemented event-driven architecture with SNS/SQS, automatic scaling, and comprehensive logging and monitoring.",
    highlights: [
      "Handles 10M+ requests per day",
      "Reduced operational costs by 60%",
      "Achieved sub-100ms response times"
    ],
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "SNS", "SQS", "CloudFormation"],
    metrics: {
      requests: "10M+/day",
      costSaving: "60%",
      latency: "<100ms"
    },
    links: {
      github: "https://github.com/alexrivera/serverless-platform",
      docs: "https://docs.serverless-platform.dev"
    },
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
  }
];

export const timeline = [
  {
    id: 1,
    year: "2024",
    title: "Lead DevOps Engineer",
    company: "TechCorp Cloud Solutions",
    type: "work",
    description: "Leading cloud infrastructure transformation initiative for enterprise clients. Managing team of 8 DevOps engineers.",
    achievements: [
      "Migrated 50+ applications to Kubernetes",
      "Reduced infrastructure costs by $2M annually",
      "Implemented zero-trust security architecture"
    ]
  },
  {
    id: 2,
    year: "2023",
    title: "Certified Kubernetes Administrator (CKA)",
    company: "Cloud Native Computing Foundation",
    type: "certification",
    description: "Achieved CKA certification demonstrating expertise in Kubernetes administration, troubleshooting, and best practices."
  },
  {
    id: 3,
    year: "2022",
    title: "Senior DevOps Engineer",
    company: "FinTech Innovations Inc.",
    type: "work",
    description: "Architected and implemented CI/CD pipelines and cloud infrastructure for high-traffic financial applications.",
    achievements: [
      "Built multi-region disaster recovery system",
      "Achieved 99.99% uptime SLA",
      "Automated 90% of deployment processes"
    ]
  },
  {
    id: 4,
    year: "2021",
    title: "AWS Solutions Architect Professional",
    company: "Amazon Web Services",
    type: "certification",
    description: "Earned AWS Solutions Architect Professional certification, validating advanced AWS cloud architecture skills."
  },
  {
    id: 5,
    year: "2020",
    title: "DevOps Engineer",
    company: "StartupHub Technologies",
    type: "work",
    description: "Designed and deployed cloud infrastructure on AWS. Implemented monitoring and alerting systems.",
    achievements: [
      "Reduced deployment time by 75%",
      "Built automated scaling system",
      "Implemented comprehensive monitoring"
    ]
  },
  {
    id: 6,
    year: "2019",
    title: "Terraform Associate Certification",
    company: "HashiCorp",
    type: "certification",
    description: "Certified in Terraform for infrastructure as code best practices and automation."
  },
  {
    id: 7,
    year: "2018",
    title: "Systems Engineer",
    company: "Enterprise Systems Corp",
    type: "work",
    description: "Managed on-premise infrastructure and began cloud migration initiatives. Introduced automation practices.",
    achievements: [
      "Led AWS migration for 20+ applications",
      "Implemented configuration management with Ansible",
      "Reduced manual operations by 50%"
    ]
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