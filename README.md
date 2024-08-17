![alt text](https://raw.githubusercontent.com/Shashwat-0077/care2gather/main/public/Care2GatherLogo.svg)

# Care2Gather 
A place where you can meet with those who may understand you better

## Tech Stack

**Client:** Next.js, shadcn, auth.js, tailwind

**Server:** hono.js

## Steps to run the project

This guide will walk you through the steps to set up and run a Next.js project. We'll also cover the necessary environment variables needed for the project.

## Prerequisites

Before you start, make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v12.x or later)
-   [npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/), or [Bun](https://bun.sh/)

## Steps to Run the Project

### 1. Clone the Repository

First, clone the repository from your version control system (e.g., GitHub):

```bash
git clone https://github.com/Shashwat-0077/care2gather.git

# to clone files in the current dir
git clone https://github.com/Shashwat-0077/care2gather.git .
```

### 2. Navigate to the Project Directory

Change into the project directory:

```bash
cd your-repo
```

### 3. Install Dependencies

Install the project dependencies using npm, Yarn, or Bun:

```bash
# Using npm
npm install

# Using Yarn
yarn install

# Using Bun
bun install
```

if you encounter any error while installing, try using

-   --force
-   --legacy-peer-deps

### 4. Set Up Environment Variables

Create a .env.local file in the root of your project and add the following environment variables:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000

AUTH_SECRET=your_auth_secret

TURSO_LOCAL_CONNECTION_URL=http://127.0.0.1:8080
TURSO_CONNECTION_URL=your_turso_database_connection
TURSO_AUTH_TOKEN=your_turso_db_auth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 5. Run the Development Server

Start the development server:

```bash
# Using npm
npm run dev

# Using Yarn
yarn dev

# Using Bun
bun dev
```

Your Next.js application should now be running on http://localhost:3000.
