# whisper
a simple web based chatting system

## Dependencies
先做一些技术选型吧

- Rails 5 刚发没多久，对 websocket 的支持好像能帮上忙
- authlogic 相对轻量的 Authentication
- React 这么火，现学一下咯
- Redux state 管理，配合 React

## Architecture

- 做成 Single Page App，登陆、消息都用 React 进行渲染
- 除了主页外，Rails 主要用于提供 API 服务

## React Components
```
- Whisper
  - Auth
    - Login
    - Register
  - Chat
    - Header
    - UserList
      - UserItem
    - ChatSessionList
      - ChatSessionItem
    - ChatSession
      - Message
      - ChatForm
```

## Redux State Shapes

```
{
  auth: {
    username: 'Turtle',
    token: '',
    isRegisterPage: false
  }
  chat: {
    page: '{UserList|ChatSessionList|ChatSession}',
    sessionsById: {
      1: {
        id: 1,
        userId: 3,
        username: 'abcd',
        newMessagesCount: 1,
        messages: [
          {
            isSentFromMe: true,
            content: 'aa',
            time: '2016-11-11 00:00:00'
          }
        ]
      }
    },
    sessions: [3, 2, 1],
    sessionsByUserId: {3: 1},
    currentSession: {
      userId: 3,
      username: 'abcd',
      messages: [
        {
          isSentFromMe: true,
          content: 'aa',
          time: '2016-11-11 00:00:00'
        }
      ]
    }
    users: [
      {
        userId: 3,
        username: 'abcd'
      }
    ]
  }
}
```

## Chat Models
```

  +------+                               +-------------+
  | User |                               | ChatSession |
  +------+                               +-------------+
     |                                      |        |
     |          +-----------------+         |        |        +-----------------+
     |          | UserChatSession |         |        |        | Messages        |
     |          +-----------------+         |        |        +-----------------+
     +----------> user_id         |         |        |        | user_id         |
                | chat_session_id <---------+        +--------> chat_session_id |
                | last_read_at    |                           |                 |
                | is_visable      |                           +-----------------+
                | last_message_at |
                +-----------------+

```

## Chat Service
- public
  - send_message(from_user, to_user, content)
  - list_chat_sessions(user)
  - show_chat_session(user_chat_session)
  - list_users
- internal
  - create_chat_session(users)


