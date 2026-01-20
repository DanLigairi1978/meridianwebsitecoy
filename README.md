# Meridian Solutions (Fiji) Ltd. - Website

This is a static website built with React and Tailwind CSS, designed for deployment on static hosting platforms like GitHub Pages.

## Deployment to GitHub Pages

This project is configured to be deployed directly to GitHub Pages without any build step.

1.  **Create a GitHub Repository:**
    *   Create a new public repository on your GitHub account. Do **not** initialize it with a README, .gitignore, or license.

2.  **Push the Code:**
    *   Navigate to your local project directory.
    *   Initialize a git repository, add the remote, and push the code.
    ```bash
    # Make sure you are in the project root directory
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    git push -u origin main
    ```
    *Replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your actual GitHub username and repository name.*

3.  **Configure GitHub Pages:**
    *   In your repository on GitHub, go to **Settings > Pages**.
    *   Under "Build and deployment", select the source as **Deploy from a branch**.
    *   Set the branch to `main` and the folder to `/(root)`.
    *   Click **Save**.

4.  **Done!**
    *   Your site will be deployed in a few minutes. You can find the URL in the same GitHub Pages settings section. It will be something like `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.

## Development

This project uses CDN-hosted libraries and does not require a local installation of Node.js or any package manager. To run it locally, you can use a simple static file server.

If you have Python installed:
```bash
# For Python 3
python3 -m http.server
```

If you have VS Code, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
