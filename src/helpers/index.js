function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => {

    if (key.startsWith("data-")) {
      element.setAttribute(key, props[key]);
    } else {
      element[key] = props[key];
    }

  });

  if (children.length > 0) {
    children.forEach(child => {
      if (typeof child === 'string') {
        child = document.createTextNode(child);
      }

      element.appendChild(child);
    });
  }

  return element;
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, cb) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(cb);
  }

  emit(type, arg) {
    if (this.events[type]) {
      this.events[type].forEach(cb => cb(arg));
    }
  }
}

function save(payload) {
  const data = JSON.stringify(payload);

  localStorage.setItem("todos", data);
}

function load() {
  const payload = localStorage.getItem("todos");

  return JSON.parse(payload);
}

export {
  createElement,
  EventEmitter,
  save,
  load
};
