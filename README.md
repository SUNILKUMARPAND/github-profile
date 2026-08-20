GitHub Profile Finder

GitHub Profile Finder is a responsive web application built with React.js that allows users to search for GitHub profiles by entering a GitHub username. The application integrates with the GitHub REST API to fetch and display real-time user information.

The main goal of this project is to provide a simple and user-friendly interface for quickly finding and viewing GitHub developer profiles without manually navigating through GitHub.

Features

   🔍 Search GitHub Users
   
         Users can search for any GitHub profile by entering a valid GitHub username.
         
   👤 Profile Information
   
        Displays important profile details such as:
        
          1. Profile picture
          2. Username
          3. Full name
          4. Bio
          5. Location
          6. Company
          7. GitHub profile URL
          
    📊 GitHub Statistics
    
          1. Displays useful GitHub statistics including:
          2. Public repositories
          3. Followers
          4. Following
          5. Public gists
          
    📁 Repository Information
    
          Fetches and displays information about the user's GitHub repositories.
          
    🔗 GitHub Profile Link
    
          Provides a direct link to the user's GitHub profile.
          
    ⏳ Loading State
    
          Displays a loading indicator while profile information is being fetched from the API.

    ❌ Error Handling
    
          Shows an appropriate message when the username does not exist or the API request fails.
          
    📱 Responsive Design
    
          The application is designed to work across desktop, tablet, and mobile screen sizes.

          
Technologies Used
          1.React.js – Used to build the user interface and manage application state.
          
          2.JavaScript (ES6+) – Used for application logic and API handling.
          
          3.HTML5 – Used to structure the application.
          
          4.CSS3 – Used for styling and responsive design.
          
          5.GitHub REST API – Used to fetch GitHub user and repository information.
          
          6.Fetch API – Used to make API requests.
          
          7.React Hooks – Used hooks such as useState and useEffect for state management and API handling.


          
How It Works

       1. The user enters a GitHub username in the search input.
       2. The application sends a request to the GitHub API.
       3.The API returns the user's profile information.
       4.React stores the response data in state using useState.
       5.The profile information is displayed dynamically on the page.
       6.If the username is invalid, an error message is displayed.
       7.Users can click the GitHub profile link to visit the original profile.

View Link -  https://profilefindergit.netlify.app/
