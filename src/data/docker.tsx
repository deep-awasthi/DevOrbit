export const roadmap = [
  "Images",
  "Containers",
  "Dockerfile",
  "Volumes",
  "Networking",
  "Docker Compose",
  "Production Deployment"
];

export const topics = [
  {
    title: "Containers & Engine Architecture",
    description: "Understand process isolation, namespaces, cgroups, Union File System, and container runtimes.",
    details: [
      "Docker vs. Virtual Machines: sharing host OS kernel vs running virtualized guest OS",
      "Namespaces: isolating processes (PID), networking (NET), mounts (MNT), and user IDs (USER)",
      "Control Groups (cgroups): governing resource limits for CPU, Memory, and disk I/O",
      "Union File System (UnionFS): overlaying separate directory layers for copy-on-write image caching"
    ]
  },
  {
    title: "Docker Images & Dockerfile optimization",
    description: "Build efficient, layered images, write custom Dockerfiles, and leverage build cache.",
    details: [
      "Dockerfile directives: FROM, WORKDIR, RUN, COPY, EXPOSE, ENTRYPOINT, CMD",
      "CMD vs ENTRYPOINT: using ENTRYPOINT for application executables and CMD for default parameters",
      "Layer caching mechanisms: ordering instructions from least frequently changed to most frequently changed to speed up builds",
      "PID 1 'Zombie' problem: using exec form (JSON array) over shell form to gracefully catch SIGTERM signals"
    ]
  },
  {
    title: "Persistent Storage: Volumes & Bind Mounts",
    description: "Configure persistent data, manage container state, and share files with host systems.",
    details: [
      "Docker Volumes: managed lifecycle storage independent of container lifecycle, managed by Docker",
      "Bind Mounts: mapping specific local host paths/directories to containers for live code development",
      "Avoiding data loss: why production databases or user files should never be stored directly in container filesystems"
    ]
  },
  {
    title: "Docker Networking",
    description: "Create isolated networks, manage port forwards, and enable container-to-container communication.",
    details: [
      "Bridge (default Network Driver) vs Host (removes network isolation entirely for high performance)",
      "Overlay driver (multi-host Swarm networking) and Macvlan (direct IP mapping from router)",
      "DNS resolution: seamless inter-container communication using container service names as hostnames"
    ]
  },
  {
    title: "Multi-Stage Builds",
    description: "Optimize production deployments by compiling code in intermediary containers and copying output.",
    details: [
      "Builder Environment Stage: downloading dependencies, compiling code, and packaging application targets",
      "Production Runtime Stage: copying only compiled artifacts to a lean base (e.g. alpine, distroless) to reduce attack surface",
      "Removing compiler libraries and tools (like SDKs, Maven) from the final production images"
    ]
  },
  {
    title: "Multi-Container Apps with Docker Compose",
    description: "Define, run, and scale multi-container environments using YAML configuration files.",
    details: [
      "Compose spec YAML: defining services, environment variables, mapped ports, and mounted volumes",
      "Database healthchecks: resolving startup race conditions with custom ping loops",
      "depends_on configuration with condition: service_healthy to sequence boot sequences cleanly"
    ]
  },
  {
    title: "Security & Registry Best Practices",
    description: "Scan images for vulnerabilities, enforce least privilege, and manage registries.",
    details: [
      "Non-root users: creating dedicated system groups and users to run containers securely",
      "Vulnerability scans: using docker scout quickview/cves to find outdated or exposed dependencies",
      "Environment injection: feeding passwords and credentials at runtime instead of saving secrets inside layers",
      "Read-only filesystems: protecting container write states via read-only flag options"
    ]
  }
];

export const interviewQuestions = [
  {
    question: "Difference between image and container?",
    answer: "Image is a template/blueprint, container is a running instance."
  },
  {
    question: "What are Docker volumes?",
    answer: "Persistent storage independent of container lifecycle."
  },
  {
    question: "What is the difference between CMD and ENTRYPOINT?",
    answer: "ENTRYPOINT defines the fixed executable running when the container starts. CMD provides default arguments that can be overridden at runtime. It is best practice to combine both (e.g., ENTRYPOINT ['java'] and CMD ['-jar', 'app.jar'])."
  },
  {
    question: "What Linux kernel features enable container isolation?",
    answer: "1) Namespaces (isolating processes, networks, mounts, and users so the container feels like its own OS). 2) Control Groups/cgroups (allocating resource limits for CPU, RAM, and disk I/O). 3) Union File System/UnionFS (overlaying layers to construct the container's file tree)."
  },
  {
    question: "What is the PID 1 'Zombie' process problem in Docker?",
    answer: "If you start your app via shell form ('ENTRYPOINT java -jar app.jar'), the shell wrapper runs as Process ID (PID) 1. This prevents the JVM from receiving SIGTERM shutdown signals from Docker, causing graceful shutdowns to fail. Eventually, the container is force-killed (SIGKILL) after a timeout. To fix this, always use the exec form (e.g., ENTRYPOINT ['java', '-jar', 'app.jar'])."
  },
  {
    question: "How do you solve container startup race conditions in Docker Compose?",
    answer: "By defining a healthcheck in the database service container (e.g., 'mysqladmin ping' or a postgres check) and specifying 'depends_on: mysql: condition: service_healthy' in your application service. This blocks the app from starting up until the database is fully initialized."
  }
];

export const pageData = {
  title: "Docker",
  badge: "Containerization Platform",
  description:
    "Learn Docker from container fundamentals to production deployments, networking, storage, security and cloud-native architectures.",
  stats: [
    { value: "12", label: "Learning Modules" },
    { value: "25+", label: "Interview Questions" },
    { value: "30+", label: "Core Concepts" },
    { value: "20+", label: "Production Examples" }
  ],
  roadmap,
  learnConcepts: [
    "Containers",
    "Images",
    "Dockerfile",
    "Build Context",
    "Volumes",
    "Bind Mounts",
    "Networking",
    "Docker Compose",
    "Multi-Stage Builds",
    "Registry",
    "Security",
    "Production Deployments"
  ],
  additionalGrids: [
    {
      title: "Docker Architecture",
      items: [
        "Docker CLI",
        "Docker Engine",
        "Docker Daemon",
        "containerd",
        "runc",
        "Namespaces",
        "cgroups",
        "Union File System",
        "Docker Hub",
        "Private Registry",
        "Compose",
        "Kubernetes Integration"
      ]
    },
    {
      title: "Projects You will Build",
      items: [
        "Spring Boot Container",
        "Node.js Container",
        "MySQL Container",
        "Redis Container",
        "Docker Compose Stack",
        "Multi-Stage Build",
        "Nginx Reverse Proxy",
        "Microservices Setup",
        "Private Registry",
        "CI/CD Pipeline",
        "Container Monitoring",
        "Production Deployment"
      ]
    }
  ],
  topics,
  interviewQuestions,
  resources: [
    "Docker Documentation",
    "Docker Hub",
    "Docker Compose",
    "BuildKit",
    "containerd",
    "Docker Scout",
    "Nginx",
    "Redis",
    "MySQL",
    "Kubernetes",
    "GitHub Actions",
    "Production Security"
  ],
  ctaTitle: "Become Production Ready with Docker",
  ctaDescription:
    "Explore container internals, image optimization, networking, storage, security and real-world deployment strategies."
};