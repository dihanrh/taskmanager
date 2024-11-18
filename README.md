# Task Manager Documentation


**Live URL:** https://taskmanager-eight-mu.vercel.app/


## Badges

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


 
## Features

- Add Task
- Edit Task
- Add Tag
- Seach by Task Title
- Filter
- Dark Mode
- Notification



## Installation

You may follow the Installation process :

1. Copy the URL for the repository. To clone the repository using HTTPS, under "HTTPS", click. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click.To clone a repository using GitHub CLI, click GitHub CLI, then click .


2. Open Git Bash. 
3. Change the current working directory to the location where you want the cloned directory.
4. Clone the repository to your local machine using the following command:

```bash
  git clone https://github.com/dihanrh/taskmanager.git

```
5. Press Enter to create your local clone.

6. Go to the project directory

```bash
  cd taskmanager

```
7. Install dependencies

```bash
  yarn

```



## Run Locally

 Start the Server
```bash
  yarn  dev

```
This will start the development server and it will be accessible at http://localhost:5173.



## API Reference

#### mockapi

```http
  GET POST PUT DELETE
```

| Parameter    | Type     | Description                |
| :--------    | :------- | :------------------------- |
| `API Client` | `tasks` | **Required**. CRUD tasks  |

| Parameter    | Type     | Description                |
| :--------    | :------- | :------------------------- |
| `API Client` | `tagList` | **Required**. CRUD tag list  |


## Tech Stack

**Client:** React js, TailwindCSS
**API Test:** MockAPI

**Deploy:** Vercel


## Tools
**IDE** : Visual Studio Code, Git, Github


**Environment** : Node js



## Author

- [Rakibul Hasan Dihan](https://github.com/dihanrh)
