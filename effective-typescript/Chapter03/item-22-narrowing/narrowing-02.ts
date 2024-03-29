const el = document.getElementById("foo");
if (!el) throw new Error("Unable to find #foo");
el;
el.innerHTML = "Party Time".blink();