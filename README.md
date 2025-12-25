
# Siva's DevOps Demo Website.

**🚀 Build & Deploy a Full-Stack Static Website for DevOps Practice**

Want to master Docker & Kubernetes with a real-world example? This project is a ready-to-run static website designed for practicing containerization and orchestration.

**✅ Features**

Multi-page Website: Home, Features, Contact
Live Temperature Widget: Uses Geolocation + Free API (Open-Meteo)
Dark Mode Toggle & Animations
Dockerfile (Nginx-based) for containerization
Kubernetes Manifests: Deployment, Service, Ingress, HPA


**📂 Tech Stack**

Frontend: HTML, CSS, JavaScript
Web Server: Nginx
Containerization: Docker
Orchestration: Kubernetes


**🌐 Repository**
"https://github.com/iam-siva-prasad/DevOps-Web"


**💡 How to Start?**

1️⃣ Clone the repo

Shell git clone **https://github.com/iam-siva-prasad/DevOps-Web.git** cd DevOps-Web Show more lines

2️⃣ Build Docker Image

Shell docker build -t devops-demo:1.0 .Show more lines

3️⃣ Run the Container

Shell docker run -d -p 80:80 devops-demo:1.0Show more lines

4️⃣ Deploy to Kubernetes (Optional)

Shell kubectl apply -f k8s/deployment.yamlkubectl apply -f k8s/service.yaml# Optional: ingress.yaml and hpa.yamlShow more lines

**📸 Preview**

![Demo.png](https://github.com/iam-siva-prasad/DevOps-Web/blob/main/Images/demo.png)

**🔥 Why This Matters?**

Hands-on projects like this help you bridge the gap between theory and production. Whether you’re preparing for DevOps interviews or building your cloud-native skills, this is a great starting point.


**👉 Follow for More**

Follow me for DevOps tips & projects!

💬 Drop your thoughts or questions in the comments.

Linkedin: "https://www.linkedin.com/in/iam-siva-prasad/"
