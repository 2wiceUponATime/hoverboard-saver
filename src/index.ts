export {};

const explorer = window.explorer;
const key = "hoverboardProgress";
const endPos = {
    x: ( 512257 +  512309) / 2,
    y: (-549650 + -549584) / 2,
};

type SaveData = {
    pos: typeof explorer["pos"];
    got: boolean[];
}

function queueRedraw() {
    explorer._frameQueued = requestAnimationFrame(explorer.tick.bind(explorer));
}

const buttons: {
    text: string;
    onClick: (this: HTMLAnchorElement, ev: PointerEvent) => unknown;
}[] = [{
    text: "Save Progress",
    onClick() {
        localStorage[key] = JSON.stringify({
            pos: explorer.pos,
            got: explorer.objects.map(obj => obj.got),
        });
    }
}, {
    text: "Reset Position",
    onClick() {
        explorer.pos = startPos;
        queueRedraw();
    }
}, {
    text: "Reset Progress",
    onClick() {
        explorer.pos = {
            ...explorer.pos,
            ...endPos,
        };
        explorer.opts.onTick(explorer);
        explorer.pos = startPos;
        for (const coin of explorer.objects) {
            coin.got = false;
        }
        queueRedraw();
    }
}]

const startPos = explorer.pos;

if (key in localStorage) {
    const data: SaveData = JSON.parse(localStorage[key]);
    explorer.pos = data.pos;
    for (const [i, got] of data.got.entries()) {
        explorer.objects[i].got = got;
    }
    queueRedraw();
}

const extraButtons = document.createElement("ul");
extraButtons.classList.add("comicNav");
for (const [idx, button] of buttons.entries()) {
    const li = document.createElement("li");
    li.style.cursor = "pointer";
    const el = document.createElement("a");
    el.innerText = button.text;
    el.addEventListener("click", button.onClick);
    li.appendChild(el);
    extraButtons.appendChild(li);
    if (idx !== buttons.length - 1) {
        extraButtons.appendChild(new Text(" "));
    }
}
document.getElementById("comic").after(extraButtons);

console.log("hi", window.explorer);