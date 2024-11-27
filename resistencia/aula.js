const names = [];
const missions = {
    5: [[2, 3, 2, 3, 3]],
    6: [[2, 3, 4, 3, 4]],
    7: [[2, 3, 3, 4, 4]],
    8: [[3, 4, 4, 5, 5]],
    9: [[3, 4, 4, 5, 5]],
    10: [[3, 4, 4, 5, 5]]
};
document.getElementById("addNameBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        nameInput.value = '';
        updateNameList()
    }
});
function updateNameList() {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = '';
    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = `$ {
            index +  1
        }. $ {
            name
        }`;
        nameList.appendChild(li)
    })
}
document.getElementById("playerCount").value = 5;
document.getElementById("drawBtn").addEventListener("click", () => {
    const playerCount = parseInt(document.getElementById("playerCount").value);
    if (playerCount < 5 || playerCount > 10 || names.length < playerCount) {
        alert("Por favor, insira um número de jogadores válido (de 5 a 10) e adicione nomes suficientes.");
        return
    }
    const shuffledNames = shuffle(names.slice(0, playerCount));
    const selectedNames = shuffledNames.slice(0, 5);
    const selectedMissions = shuffle(missions[playerCount][0]);
    localStorage.setItem("selectedNames", JSON.stringify(selectedNames));
    localStorage.setItem("selectedMissions", JSON.stringify(selectedMissions));
    localStorage.setItem("gameMode", playerCount);
    window.location.href = "resultado.html"
});
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}
