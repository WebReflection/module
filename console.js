export default console;

const cb = e => (document.body.innerHTML += (e.type + '<br/>'));

addEventListener('DOMContentLoaded', cb);
addEventListener('load', cb);