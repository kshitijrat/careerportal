# Career & Skill Development Portal

A comprehensive platform aimed at empowering individuals by providing tools, resources, and a collaborative environment for career growth and skill development.

## Features
- **User Authentication and Authorization**: Secure user login and role-based access control using Spring Security and JWT.
- **Skill Assessment**: Users can assess their current skill levels and track progress.
- **Job Opportunities**: Browse and apply for jobs matching user skills.
- **Learning Resources**: Access curated resources for skill enhancement.
- **Collaboration Tools**: Forums and chat features for networking and guidance.

## Tech Stack

### Backend
- **Frameworks**: Spring Boot, Hibernate
- **Security**: Spring Security, JWT Authentication
- **Database**: MySQL 8

### Frontend
- **Host**: Vercel
- **Design Prototype**: [Figma Design](https://www.figma.com/design/u0PKyVnUZSyCipIGQAwfL9/Untitled?node-id=2-803&t=BGl4sPuKO4fsOJ6h-0)
- **Live Demo**: [Career & Skill Development Portal](https://careerportal-nine.vercel.app/)

## Installation

### Prerequisites
1. JDK 11 or higher
2. MySQL 8
3. Maven
4. Node.js (for frontend development)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd careerportal_back
   ```
3. Update application properties with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/career_portal
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   ```
4. Run the backend:
   ```bash
   mvn spring-boot:run
   ```
5. Navigate to the frontend directory and install dependencies:
   ```bash
   cd careerportal
   npm install
   ```
6. Start the frontend:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register/signup a new user.
- `POST /api/auth/login` - Login and receive a JWT token.

### User Management
- `GET /api/users` - Fetch all users (admin only).
- `GET /api/users/{id}` - Fetch a specific user.

### Skill Management
- `GET /api/skills` - Get all skills.
- `POST /api/skills` - Add a new skill (admin only).

### Job Opportunities
- `GET /api/jobs` - View all job postings.
- `POST /api/jobs` - Create a job posting (admin only).

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Contact
For further inquiries, feel free to reach out via email or connect on [LinkedIn](https://www.linkedin.com/in/kshitij-ratnawat/).
