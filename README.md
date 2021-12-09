# Giphy App

Giphy App is a SPA which is built on top of react.We can search gif and post
gif in public through this application.

## API Reference

```http
  GET api.giphy.com/v1/gifs/search/?${api_key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Id of item to fetch |

#### searchGif(data)

Takes search string returns the fetch result from the backend server.

## Run Locally

Clone the project

```bash
  git clone https://github.com/vishutiwari99/giphy-app.git
```

Go to the project directory

```bash
  cd giphy-app
```

Install dependencies

```bash
  npm install or yarn
```

Start the server

```bash
  npm run start or yarn start
```

## Demo

Insert gif or link to demo
![Alt text](relative/blob/main/demo1.png?raw=true "Demo1")

