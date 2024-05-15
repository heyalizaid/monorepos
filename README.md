To create the folder structure and set up the projects as described, follow these steps. I'll guide you through initializing the projects and setting up the shared resources. We'll use `create-react-app` for the admin panel and `create-next-app` for the main website.

### Step-by-Step Guide

#### 1. **Initialize the Main Project Directory**
```sh
mkdir monorepos
cd monorepos
```

#### 2. **Set Up the Admin Panel with React**
```sh
npx create vite@latest
```

#### 3. **Set Up the Main Website with Next.js**
```sh
npx create-next-app@latest website
```

#### 4. **Create the Shared Directory**
```sh
mkdir shared
cd shared
mkdir components
```

#### 5. **Project Folder Structure Overview**
Your project directory should now look like this:
```
/monorepos
├── /admin                   # Vite React Admin Panel
│   ├── /public
│   ├── /src
│   ├── .env
│   ├── package.json
│   └── ...                 
├── /website                 # NextJs Main Website
│   ├── /public
│   ├── /src
│   ├── .env
│   ├── next.config.js
│   ├── package.json
│   └── ...                 
├── /shared                  # Shared Components
│   ├── /components                       
│   └── ...                  
├── .gitignore               
├── README.md                
└── package.json            # if needed 
```

#### 6. **Configure Shared Components**

If you want to share components or utilities between the admin panel and the main website, you can create a simple example. For instance, create a shared button component.

```sh
// /shared/components/Button.js
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>
      {children}
    </button>
  );
};

export default Button;
```

### 7. **Using Shared Components in Admin Panel**
Modify the `package.json` in the admin directory to include a path to the shared directory for easier imports.

```json
// /admin/package.json
{
  "name": "admin",
  "version": "0.1.0",
  // ...
  "dependencies": {
    // ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "jest": {
    "moduleDirectories": ["node_modules", "src", "../shared"]
  }
}
```

Then, import and use the shared Button component in the admin app.

### 8. **Using Shared Components in Next.js Website**
Similarly, configure the Next.js `jsconfig.json` to include the shared directory.

```json
// /website/jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["../shared/*"]
    }
  }
}
```

Then, import and use the shared Button component in the Next.js app.

#### 9. **Install and Run the Projects**

Navigate to each project directory and install the dependencies.

```sh
cd admin
npm install
npm start
```

```sh
cd ../website
npm install
npm run dev
```

You should now have a React admin panel and a Next.js main website running, both using shared components from the `shared` directory.