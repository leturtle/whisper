import {
  LIST_SESSIONS,
  SHOW_SESSION,
  SHOW_SESSION_BY_USER,
  LIST_USERS,
  SET_SESSIONS,
  SET_CURRENT_SESSION,
  SET_USERS,
  INIT_STATE,
  HIDE_SESSION,
  DELETE_MESSAGE,
  ESTABLISH_SOCKET,
  CLOSE_SOCKET,
  NOTIFY_NEW_MESSAGE
} from '../actions/chat'

export const USER_LIST_PAGE = 'UserList'
export const CHAT_SESSION_LIST_PAGE = 'ChatSessionList'
export const CHAT_SESSION_PAGE = 'ChatSession'

const initialState = {
  socket: null,
  socketEstablished: false,
  hasNewMessage: false,
  page: CHAT_SESSION_LIST_PAGE,
  sessionsById: new Map(),
  sessions: [],
  sessionsByUserId: new Map(),
  currentSession: {},
  users: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_SESSIONS:
      return Object.assign({}, state, {
        page: CHAT_SESSION_LIST_PAGE
      })
    case SHOW_SESSION:
      var session = state.sessionsById.get(action.payload.id)
      return Object.assign({}, state, {
        page: CHAT_SESSION_PAGE,
        currentSession: {
          id: session.id,
          userId: session.userId,
          username: session.username,
          messages: session.messages
        }
      })
    case SHOW_SESSION_BY_USER:
      return Object.assign({}, state, {
        page: CHAT_SESSION_PAGE,
        currentSession: {
          id: 0,
          userId: action.payload.userId,
          username: action.payload.username,
          messages: []
        }
      })
    case LIST_USERS:
      return Object.assign({}, state, {
        page: USER_LIST_PAGE
      })
    case SET_SESSIONS:
      var sessionsById = new Map(state.sessionsById)
      var sessionsByUserId = new Map(state.sessionsByUserId)
      var hasNewMessage = false
      action.payload.sessions.forEach(s => {
        sessionsById.set(s.id, s)
        sessionsByUserId.set(s.userId, s.id)
        if (s.newMessagesCount && s.newMessagesCount > 0) {
          hasNewMessage = true
        }
      })
      return Object.assign({}, state, {
        sessionsById: sessionsById,
        sessions: action.payload.sessions.map((s) => s.id),
        sessionsByUserId: sessionsByUserId,
        hasNewMessage: hasNewMessage
      })
    case SET_CURRENT_SESSION:
      var session = action.payload.session
      var sessionsById = new Map(state.sessionsById)
      var sessions = Array.from(state.sessions)
      var sessionsByUserId = new Map(state.sessionsByUserId)
      if (!sessionsById.get(session.id)) {
        sessions.unshift[session.id]
        sessionsByUserId.set(session.userId, session.id)
      }
      sessionsById.set(session.id, session)
      return Object.assign({}, state, {
        currentSession: {
          id: session.id,
          userId: session.userId,
          username: session.username,
          messages: session.messages
        },
        sessionsById: sessionsById,
        sessions: sessions,
        sessionsByUserId: sessionsByUserId
      })
    case SET_USERS:
      return Object.assign({}, state, {
        users: action.payload.users
      })
    case INIT_STATE:
      return initialState
    case HIDE_SESSION:
      return Object.assign({}, state, {
        sessions: state.sessions.filter((id) => id != action.payload.id)
      })
    case DELETE_MESSAGE:
      let messages = Array.from(state.currentSession.messages
        .filter((m)=>m.id != action.payload.id))
      let currentSession = Object.assign({}, state.currentSession, {
        messages: messages
      })
      return Object.assign({}, state, {
        currentSession: currentSession
      })
    case ESTABLISH_SOCKET:
      return Object.assign({}, state, {
        socket: action.payload,
        socketEstablished: true
      })
    case CLOSE_SOCKET:
      return Object.assign({}, state, {
        socketEstablished: false
      })
    case NOTIFY_NEW_MESSAGE:
      return Object.assign({}, state, {
        hasNewMessage: true
      })
    default:
      return state
  }
}
