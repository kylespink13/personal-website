# GitHub Pages Deployment Guide

This guide will walk you through deploying your personal portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git**: Install Git on your local machine
3. **Node.js**: Ensure you have Node.js installed (version 16 or higher)

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `personal-website` (or your preferred name)
4. Make it public (required for free GitHub Pages)
5. Don't initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

1. Initialize Git in your project folder (if not already done):
```bash
git init
```

2. Add all files to Git:
```bash
git add .
```

3. Commit your changes:
```bash
git commit -m "Initial commit"
```

4. Add your GitHub repository as the remote origin:
```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
```

5. Push your code to GitHub:
```bash
git push -u origin main
```

## Step 3: Update Repository Name in Configuration

**Important**: Update the repository name in these files to match your actual repository name:

1. **package.json**: Update the `homepage` field:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

2. **vite.config.js**: Update the `base` field:
```javascript
base: '/YOUR_REPOSITORY_NAME/',
```

## Step 4: Deploy to GitHub Pages

### Option A: Automatic Deployment (Recommended)

1. Install the gh-pages package (if not already installed):
```bash
npm install gh-pages --save-dev
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This command will:
- Build your project for production
- Create a `gh-pages` branch
- Push the built files to that branch

### Option B: Manual Deployment

1. Build your project:
```bash
npm run build
```

2. Create and switch to a gh-pages branch:
```bash
git checkout -b gh-pages
```

3. Remove all files except the `dist` folder:
```bash
git rm -rf .
git checkout HEAD -- dist
```

4. Move the contents of `dist` to the root:
```bash
mv dist/* .
rmdir dist
```

5. Add and commit the files:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
```

6. Push the gh-pages branch:
```bash
git push origin gh-pages
```

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

## Step 6: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

**Note**: It may take a few minutes for the changes to appear.

## Step 7: Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your repository Settings > Pages
2. In the "Custom domain" field, enter your domain
3. Save the settings
4. Add a CNAME record to your domain's DNS settings pointing to `YOUR_USERNAME.github.io`

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository name in `package.json` and `vite.config.js` matches your actual repository name
2. **Build Errors**: Check that all dependencies are installed with `npm install`
3. **Routing Issues**: GitHub Pages doesn't support client-side routing by default. The current setup should work, but if you have issues, consider using HashRouter instead of BrowserRouter

### Updating Your Website

To update your website after making changes:

1. Make your changes locally
2. Commit and push to the main branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

3. Deploy the changes:
```bash
npm run deploy
```

## Security Notes

- Never commit sensitive information like API keys
- Use environment variables for any configuration that shouldn't be public
- The `.gitignore` file is already configured to exclude sensitive files

## Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Verify your repository settings
3. Check the Actions tab in your repository for build logs
4. Open an issue in your repository for specific problems 