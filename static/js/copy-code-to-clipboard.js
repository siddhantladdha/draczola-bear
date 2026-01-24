const codeBlocks = document.querySelectorAll("pre code[data-lang]");

for (const codeBlock of codeBlocks) {
    let content;
    if (codeBlock.parentElement.hasAttribute("data-linenos")) {
        content = [...codeBlock.querySelectorAll("tr")]
            .map((row) => row.querySelector("td:last-child")?.innerText ?? "")
            .join("");
    } else {
        content = codeBlock.innerText;
    }

    if (navigator.clipboard !== undefined) {
        const copyButton = document.createElement("button");
        copyButton.classList.add("copy-button");
        copyButton.innerText = "Copy";

        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(content).then(() => {
                copyButton.innerText = "Copied!";
                setTimeout(() => copyButton.innerText = "Copy", 1000);
            }).catch(() => {
                copyButton.innerText = "Failed";
                setTimeout(() => copyButton.innerText = "Copy", 1000);
            });
        });

        codeBlock.prepend(copyButton);
    }
}
