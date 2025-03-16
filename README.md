# Resume AI - Backend

## 🚀 Overview
This is the **backend** for Resume AI, built with **Node.js & Express.js**. It provides AI-powered resume and cover letter generation via REST API.

## 🛠️ Technologies Used
- **Node.js & Express.js** – Backend Framework
- **AI API Integration** – Google Gemini API
- **PostgreSQL** –  Data Storage

---

## 🔧 Installation & Setup (Local Development)
1️⃣ **Clone the Repository**
git clone https://github.com/PursuitMadeMe/resume_ai_backend
cd resume_ai_backend


2️⃣ **Install Dependencies**
npm install

3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory and add:
DATABASE_URL=postgresql://postgres:YOURLOCALHOST@localhost:5432/resume_ai
PORT=9000
AI_API_KEY=your_api_key_here
> Replace `your_api_key_here` with the actual AI API key.

4️⃣ **Start the Server**
npm start
- The backend will run on `http://localhost:9000/`

---

## 🚀 Deployment (Making the Backend Live)

✅ **Deploying on Render (Recommended)**
1. **Push your backend code to GitHub**:
   git add .
   git commit -m "Initial backend deployment"
   git push origin main
   ```
2. **Go to [Render](https://render.com/)** and create an account.
3. Click **New Web Service** → **Connect GitHub Repo**.
4. Select your **backend repository**.
5. Set the **Start Command**:
   ```sh
   npm start
   ```
6. Click **Deploy**.

🚀 Your backend will be live at:
```
https://resume-ai-backend.onrender.com
```

### ✅ **Deploying on Heroku**
1. Install **Heroku CLI**:
   ```sh
   npm install -g heroku
   ```
2. Login and create an app:
   ```sh
   heroku login
   heroku create resume-ai-backend
   ```
3. Deploy the backend:
   ```sh
   git push heroku main
   ```

### ✅ **Deploying on Railway**
1. **Go to [Railway](https://railway.app/)** and sign up.
2. **Create a new project** → **Connect GitHub repo**.
3. Set the **Start Command**:
   ```sh
   npm start
   ```
4. Click **Deploy**.

---

## 📌 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/ai/generate-resume` | Generates a resume from user input |
| `POST` | `/ai/generate-cover-letter` | Generates a cover letter from user input |

---

## ✅ Next Steps
- [ ] Add authentication (JWT)
- [ ] Store user-generated resumes (MongoDB/PostgreSQL)
- [ ] Improve AI-generated responses

## 🤝 Contributing
Feel free to fork the repository and submit a **pull request** if you have any improvements!

## 📄 License
This project is open-source and available under the **MIT License**.

---

🎉 **Backend is now documented and ready to push!** 🚀

