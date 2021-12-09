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

![demo1](https://user-images.githubusercontent.com/47623276/145351313-9f516abb-c37d-426b-9a5c-6839ac433663.png)
![demo2](https://user-images.githubusercontent.com/47623276/145351448-24e1fff9-8641-4e73-a323-60af1323ee57.png)


