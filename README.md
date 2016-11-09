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
```

## Redux State Shapes

```
{
  auth: {
    username: 'Turtle',
    token: '',
    isRegisterPage: false
  }
}
```
