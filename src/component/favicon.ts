import icon from "@/static/img.jpeg";

const link = document.createElement("link");

link.type = "image/x-icon";

link.rel = "shortcut icon";

link.href = icon;

document.getElementsByTagName("head")[0].appendChild(link);
