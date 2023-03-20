function sayHello(name: string) {
  return `Hello, ${name}`;
}

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

// showHello("greeting", "Josh!");