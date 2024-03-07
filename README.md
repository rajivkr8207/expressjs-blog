# Express.js Blog Website

This repository contains a blog website built using Express.js, a minimalist web framework for Node.js. The website allows for full CRUD (Create, Read, Update, Delete) operations on blog posts.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/rajivkr8207/expressjs-blog
    ```

2. Navigate into the project directory:

    ```bash
    cd expressjs-blog
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```
4. Create a env variable and paste in it:

    ```bash
    PORT = 3000
    Mongo_URL = mongodb://localhost:27017/Blog
    ```

### Starting the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running on port 3000 by default.

### Accessing the Website

Once the server is running, you can access the website by navigating to `http://localhost:3000` in your web browser.

## Usage

The website allows you to perform the following CRUD operations:

- **Create:** You can create new blog posts by clicking on the "Create Post" button and filling out the required information in the provided form.
  
- **Read:** All existing blog posts are displayed on the homepage. You can click on a post to view its full content.

- **Update:** You can edit existing blog posts by clicking on the "Edit" button next to each post. This will take you to a form where you can modify the post content.

- **Delete:** To delete a blog post, click on the "Delete" button next to the post you want to remove.

## Built With

- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager for JavaScript

## Authors

- [Your Name](https://github.com/rajivkr8207) - Initial work

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.