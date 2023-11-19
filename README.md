# __QuickChat__ 💬

- __Deployed Backend__ = https://
- __Deployed Webite__ = https://

---
<br/>

## 🏷️ What is __QuickChat__ ?

__QuickChat__ is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in MongoDB Database.

---

<br/>

## 🏷️ __Tech Stack Used__ :-

__Frontend:__
- HTML5
- CSS3
- JavaScript
- React.js
<!-- - Context APIs -->

__Backend:__
- Node.js
- Express.js
- Socket.io

 __Database:__ Mongo DB

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

| METHOD | ENDPOINT | BODY | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- | --- |
| POST | /api/register | __name__(Required), __email__(Required), __password__(Required), pic(Optional) | This endpoint should allow to register. Hash the password and store in MongoDB. | 201 |
| POST | /api/login | __email__(Required), __password__(Required) | This endpoint should allow to login after comparing the user's credentails. | 201 |
| GET | /api/user |  | This endpoint should allow to search other users. | 200 |
| GET | /api/chats/ |  | This endpoint should allow to get the chats. | 200 |
| POST | /api/chats/ | __userId__(Required) | This endpoint should allow to send messages. | 201 |
| POST | /api/chats/group | __users__(Required), __name__(Required) | This endpoint should allow to create a group. | 201 |
| PUT | /api/chats/rename | __chatId__(Required), __chatName__(Required) | This endpoint should allow to rename a groups. | 202 |
| PUT | /api/chats/groupadd | __chatId__(Required), __chatName__(Required) | This endpoint should allow to add people to the group. | 202 |
| PUT | /api/chats/groupremove | __chatId__(Required), __chatName__(Required) | This endpoint should allow to remove someone from the group. | 202 |

<!-- | GET | /api/chat/ |  | This endpoint should allow to get the chats. | 200 | -->


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
