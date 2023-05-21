# __QuickChat__ 💬

- __Deployed Backend__ = https://
- __Deployed Webite__ = https://

---
<br/>

## 🏷️ What is __QuickChat__ ?

__QuickChat__ is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.

---

<br/>

## 🏷️ __Tech Stack Used__ :-

__Frontend__:
- HTML5
- CSS3
- JavaScript
- React.js

__Backend__:
- Node.js
- Express.js
- Socket.io

 **Database:** Mongo DB

<br/>

## 🏷️ __Special Features of QuickChat__ :-

- ### Authenticaton
<div style="display: flex; justify-content: space-evenly">
  <img width="48%" src="./screenshot/login.png" alt="Login"/>
  <img width="48%" src="./screenshot/signup.png" alt="Signup"/>
</div>

<!-- 
- ### Real Time Chatting with Typing indicators
- ### One to One chat
- ### Search Users
- ### Create Group Chats
- ### Notifications 
- ### Add or Remove users from group
- ### View Other user Profile 
-->


---

<br/>

## 🏷️ __API Routes__ :

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allows to register. Hash the password and store. | 201 |
| POST | /api/login | This endpoint should allow to login after comparing the user's credentails. | 201 |
| GET | /api/user | This endpoint should allow to search other user's. | 200 |
| POST | /api/chats/ | This endpoint should allow to post messages. | 201 |
| GET | /api/chats/ | This endpoint should allow to get the chats. | 200 |
| POST | /api/chats/group | This endpoint should allow to create a group. | 201 |
| PUT | /api/chats/rename | This endpoint should allow to create groups. | 202 |
| PUT | /api/chats/groupadd | This endpoint should allow to add someone to the group. | 202 |
| PUT | /api/chats/groupremove | This endpoint should allow to remove someone from the group. | 202 |



## Run Locally

Clone the project

```bash
  git clone https://github.com/Ananyakumarisingh/mern-chat-app
```

Go to the project directory

```bash
  cd QuickChat
```

Install dependencies

```bash
  npm install
```

```bash
  cd frontend/
  npm install
```

Start the server

```bash
  npm run start 
```
Start the Client

```bash
  //open now terminal
  cd frontend
  npm start
```

## Made By :
- [@Ananyakumarisingh](https://github.com/Ananyakumarisingh)

  
<h3 align="center" >Thankyou for your Time 💝</h3>
