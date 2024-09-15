# Blog App with Next.js, Tailwind CSS, and Ghost CMS

A simple Blog app built using **Next.js 14**, **Tailwind CSS**, and **Ghost CMS**. This app demonstrates how to read blog posts and tags from Ghost CMS with server actions in Next.js.

## Features

1. **Read Blog Posts** with UI.
2. **Server-side actions** for fetch data from Ghost CMS.

## Prerequisites

- **Node.js** installed locally.
- An **Ghost CMS** accont or installed locally or hosted on [digital ocean](https://youtu.be/LGwHwwcrPac).
- API credentials added to `.env.local`.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/thetechmaze/nextjs-ghost-blog.git
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Set up Environment variables**

    Create a `.env.local` file in the root directory and add your AQWS credentials:

    ```bash
    GHOST_API_URL=
    GHOST_CONTENT_API_KEY=
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

    Open http://localhost:3000 in your browser to see the app in action.

## Deployment

To Deploy this app, you can use platforms like Vercel or Netlify. Ensure you have your environment variables set correctly on the chosen platform.

## License

This project is open source and available under the [MIT Licence](./LICENCE).
