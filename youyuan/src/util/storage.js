/**
 * Created by Administrator on 2018/2/1.
 */
export const set = (key, value) => {
  if (value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}

export const get = (key) => {
  let item = sessionStorage.getItem(key)
  if (item) {
    let obj = JSON.parse(item)
    return obj
  } else {
    return null
  }
}

export const remove = (key) => {
  sessionStorage.removeItem(key)
}

export const clear = () => {
  sessionStorage.clear()
}

export const locset = (key, value) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const locget = (key) => {
  let item = localStorage.getItem(key)
  if (item) {
    let obj = JSON.parse(item)
    return obj
  } else {
    return null
  }
}

export const locremove = (key) => {
  localStorage.removeItem(key)
}

export const locclear = () => {
  localStorage.clear()
}
