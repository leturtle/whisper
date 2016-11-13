export const LIST_SESSIONS = 'LIST_SESSIONS'
export const SHOW_SESSION = 'SHOW_SESSION'
export const SHOW_SESSION_BY_USER = 'SHOW_SESSION_BY_USER'
export const LIST_USERS = 'LIST_USERS'
export const SET_SESSIONS = 'SET_SESSIONS'
export const SET_CURRENT_SESSION = 'SET_CURRENT_SESSION'
export const SET_USERS = 'SET_USERS'
export const INIT_STATE = 'INIT_STATE'
export const HIDE_SESSION = 'HIDE_SESSION'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export function listSessions() {
  return {
    type: LIST_SESSIONS
  }
}

export function showSession(id) {
  return {
    type: SHOW_SESSION,
    payload: {
      id: id
    }
  }
}

export function showSessionByUser(userId, username) {
  return {
    type: SHOW_SESSION_BY_USER,
    payload: {
      userId: userId,
      username: username
    }
  }
}

export function listUsers() {
  return {
    type: LIST_USERS
  }
}

export function setSessions(sessions) {
  return {
    type: SET_SESSIONS,
    payload: {
      sessions: sessions
    }
  }
}

export function setCurrentSession(session) {
  return {
    type: SET_CURRENT_SESSION,
    payload: {
      session: session
    }
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: {
      users: users
    }
  }
}

export function initState() {
  return {
    type: INIT_STATE
  }
}

export function hideSession(id) {
  return {
    type: HIDE_SESSION,
    payload: {
      id: id
    }
  }
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    payload: {
      id: id
    }
  }
}

export function listSessionsRequest(token) {
  return (dispatch) => {
    dispatch(listSessions())
    return fetch('/api/chat/sessions?token=' + token)
      .then(response => response.json())
      .then(json => {
        dispatch(setSessions(json.sessions))
      })
  }
}

export function showSessionRequest(token, id) {
  return (dispatch) => {
    dispatch(showSession(id))
    return fetch('/api/chat/sessions/' + id + '?token=' + token)
      .then(response => response.json())
      .then(json => {
        dispatch(setCurrentSession(json.session))
      })
  }
}

export function showSessionByUserRequest(token, userId, username) {
  return (dispatch) => {
    dispatch(showSessionByUser(userId, username))
    return fetch('/api/chat/sessions/uid/' + userId + '?token=' + token)
      .then(response => response.json())
      .then(json => {
        if (json.session && json.session.id) {
          dispatch(setCurrentSession(json.session))
        }
      })
  }
}

export function listUsersRequest(token) {
  return (dispatch) => {
    dispatch(listUsers())
    return fetch('/api/chat/users?token=' + token)
      .then(response => response.json())
      .then(json => {
        dispatch(setUsers(json.users))
      })
  }
}

export function sendMessageRequest(token, userId, content) {
  return (dispatch) => {
    var form = new FormData
    form.append('token', token)
    form.append('userId', userId)
    form.append('content', content)
    return fetch('/api/chat/message', {
      method: 'POST',
      body: form
    }).then(response => response.json()).then(json => {
      dispatch(setCurrentSession(json.session))
    })
  }
}

export function hideSessionRequest(token, id) {
  return (dispatch) => {
    return fetch('/api/chat/sessions/' + id + '?token=' + token, {
      method: 'DELETE'
    }).then(response => response.json()).then(json => {
      if (id == json.id) {
        dispatch(hideSession(json.id))
      }
    })
  }
}

export function deleteMessageRequest(token, id) {
  return (dispatch) => {
    return fetch('/api/chat/messages/' + id + '?token=' + token, {
      method: 'DELETE'
    }).then(response => response.json()).then(json => {
      if (id == json.id) {
        dispatch(deleteMessage(json.id))
      }
    })
  }
}
