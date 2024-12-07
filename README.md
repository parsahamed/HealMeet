# HealMeet

**HealMeet** is a full-stack web application designed to help therapists and their clients manage therapy sessions, bookings, and payments. It provides an intuitive interface for clients to book sessions with therapists and for admins to manage users and session data. Built with **React** on the frontend and **NestJS** with a microservice architecture on the backend, HealMeet is a scalable and flexible solution for therapy practice management.

This project serves as a showcase of my full-stack development abilities and can be deployed for real-world use.

---

 Medium Articles

Follow the journey of building HealMeet through these detailed Medium posts:

1. [Building HealMeet (A Therapist-Client Management App with React) - Part 1: Setup](https://medium.com/@parsa.hmd/building-healmeet-a-therapist-client-management-app-with-react-part-1-7be27aaf1376)
2. [Part 2: Setting Up Database and ORM](https://medium.com/@parsa.hmd/building-healmeet-a-therapist-client-management-app-with-react-4723199074ea)
3. [Part 3: Implementing Authentication](https://medium.com/@parsa.hmd/building-healmeet-a-therapist-client-management-app-with-react-712ce102f790)

## **Project Structure**

This project is organized as a monorepo, with both the frontend and backend in a single repository. The backend follows a **microservice architecture** using **NestJS**, and the frontend is built with **React**.

### **Frontend**  
The frontend uses **React** and **TypeScript**, with a custom design system using **pure CSS**.

### **Backend**  
The backend is built with **NestJS**, utilizing a **microservice** approach. The services include:
- **Authentication service**
- **Session management service**
- **Payment processing service**

### **Folder Structure**  
healmeet/ ├── frontend/ # React application │ ├── src/ │ │ ├── components/ # Reusable UI components │ │ ├── pages/ # Page-level components │ │ ├── features/ # Core features like auth, booking │ │ ├── styles/ # CSS and design system files │ │ └── App.tsx # Main React app component ├── backend/ # Backend microservices │ ├── auth-service/ # Microservice for authentication │ ├── session-service/ # Microservice for session management │ ├── payment-service/ # Microservice for payment uploads │ └── shared/ # Shared utilities, DTOs, etc. ├── docker-compose.yml # Containerized development environment ├── README.md # Project documentation └── package.json # Shared dependencies for both frontend and backend



---

## **Technologies Used**

- **Frontend**:  
  - React.js  
  - TypeScript  
  - Pure CSS (Custom Design System)  
  - Redux (for state management)  
  - React Router (for navigation)

- **Backend**:  
  - NestJS (with microservice architecture)  
  - TypeORM (for database interaction with PostgreSQL)  
  - JWT (for authentication)  
  - Docker (for containerized services)

- **Database**:  
  - PostgreSQL for relational data

---

## **Installation & Setup**

To get started with the project, follow these steps to set up both the frontend and backend:

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/healmeet.git
cd healmeet

### **2. Install Frontend Dependencies**
Navigate to the `frontend` directory and install the dependencies:
```bash
cd frontend
npm install

### 3. Install Backend Dependencies
Navigate to the `backend` directory and install the dependencies:

```bash
cd backend
npm install

### 4. Docker Setup
This project uses Docker to containerize both the frontend and backend services. To start all services using Docker Compose:

```bash
docker-compose up --build

### 5. Run the Application Locally

- **Frontend**:  
  The React app will run at `http://localhost:3000`.

- **Backend**:  
  Each microservice will run on different ports (e.g., Auth service on `http://localhost:4001`, Session service on `http://localhost:4002`, Payment service on `http://localhost:4003`).

---

## Next Steps

This project is in its early stages, and the initial goal is to complete the **authentication module**, which will include:  
- Login and registration for admins, therapists, and clients.  
- JWT-based authentication for secure API communication.  
- Role-based access control to manage access for different users (admin, therapist, client).

Subsequent milestones will include:  
- **Admin Dashboard**: Managing users, therapists, and session types.  
- **Client Features**: Booking sessions, viewing session details, and uploading payment receipts.

---

## Contributing

Contributions to the HealMeet project are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

