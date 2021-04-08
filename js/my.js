function setInput(number) {
    document.getElementById('output').value += number;
}

function calculator() {
    let output = document.getElementById('output').value;

    // thuc hien tin toan dung ham co san eval()
    result = eval(output);

    // gan lai ket qua len o output
    document.getElementById('output').value = result;
}

