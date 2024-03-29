<h1 align="center">Hi there<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>

Welcome to our online book rental service! Our platform provides a convenient way to select and rent books, as well as access to the latest news in the automotive industry.

## Features:
  - Book Selection and Rental: Users can browse available books, select a suitable one, and rent it for the desired period.

  - News Page: Users have access to the latest news in the automotive industry, allowing them to stay informed about events and trends.

  - Language Switching: Users can easily switch the interface language to one that suits them.

  - Admin Panel:

    - Book and User Information: Administrators have access to data on available books and registered users.
    - User and Book Management: Administrators can delete and modify user and book data.
    - Orders Page: Administrators can view incoming orders and manage them.

## Technical Details:
  - Frontend: HTML, CSS, JavaScript
  - Backend: Node.js (Express.js)
  - Database: MongoDB
  - Authentication and Authorization: JSON Web Tokens (JWT)


## Middleware Used

- **cookieJwtAuth**: Middleware for user authentication using JWT tokens stored in cookies.
- **isAdmin**: Middleware to check if the user is an admin.

## Additional Notes

- Multer is used for handling file uploads for book images.
- NewsAPI is used to fetch news articles based on the selected language.
- bcrypt is used for password hashing.

## Note on Multer Usage

- **Multer Limitation**: The program relies on Multer for handling file uploads of book images. However, Multer cannot function properly if the application is not running locally due to its dependency on the local file system.

## Steps to Run Locally

1. **Clone the Repository**: Clone the repository containing the project code from GitHub.

2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install all project dependencies.

3. **Start the Local Server**: Use the command `npm start` to start the local server. This will launch the Express.js backend, allowing you to access the application locally.

4. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the application running on your local server.

5. **Testing File Uploads**: Since Multer relies on the local file system, you can now test the file upload functionality by uploading book images through the application interface.

## Acknowledgement
- **Unawareness of Multer Limitation:** I sincerely apologize for not being aware of this limitation regarding Multer's functionality in non-local environments. This oversight on my part may have caused inconvenience during the development process. Moving forward, I will strive to better understand and account for such limitations to ensure smoother development and deployment processes in the future. Thank you for your understanding.

# External API Integration Overview
## 1. News API (https://newsapi.org)
  - Purpose: The News API provides access to a vast collection of news articles from various sources, allowing users to stay updated on current events and trends in the automotive industry.

  - Features:

    - Search Functionality: Users can search for news articles using keywords related to automobiles.
    - Language Support: The API supports multiple languages, allowing users to access news articles in their preferred language.
    - Article Metadata: Each article includes metadata such as title, author, publication date, and source.
    - Image Retrieval: Many articles come with accompanying images, enhancing the visual experience for users.
  -Endpoints:

    - /v2/everything: This endpoint allows users to search for news articles based on specific criteria, such as keywords, sources, language, and publication date.
    - /v2/top-headlines: Users can fetch top headlines from various sources and categories.
  - Usage in the Website:
    - The News API is integrated into the website to provide users with the latest news and updates in the automotive industry. Users can access the news page, where they can browse and read articles fetched from the News API.


# Test users
 - UserAdmin:
   - Name : Sagidolla
   - Password : admin001
 - User:
   - Name : Sagi
   - Password : 123
#   b o o k c h a r i n g - m a i n  
 #   b o o k c h a r i n g - m a i n  
 # bookcharing-main
