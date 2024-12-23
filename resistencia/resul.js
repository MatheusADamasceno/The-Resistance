const missions = {
    5: [[2, 3, 2, 3, 3]],
    6: [[2, 3, 4, 3, 4]],
    7: [[2, 3, 3, 4, 4]],
    8: [[3, 4, 4, 5, 5]],
    9: [[3, 4, 4, 5, 5]],
    10: [[3, 4, 4, 5, 5]]
};
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}
function updateResults() {
    const selectedNames = JSON.parse(localStorage.getItem("selectedNames"));
    const selectedMissions = JSON.parse(localStorage.getItem("selectedMissions"));
    const gameMode = localStorage.getItem("gameMode");
    const resultList = document.getElementById("resultList");
    const missionsList = document.getElementById("missionsList");
    const gameModeTitle = document.getElementById("gameModeTitle");
    gameModeTitle.textContent = `Missão para $ {
        gameMode
    } Jogadores`;
    resultList.innerHTML = '';
    selectedNames.forEach((name, index) => {
        const li = document.createElement("li");
        li.textContent = `$ {
            index +  1
        }°. $ {
            name
        }`;
        resultList.appendChild(li)
    });
    missionsList.innerHTML = '';
    selectedMissions.forEach((mission, index) => {
        const li = document.createElement("li");
        li.textContent = ` $ {
            index +  1
        }°:  $ {
            mission
        } jogadores`;
        missionsList.appendChild(li)
    })
}
updateResults();
document.getElementById("drawBtn").addEventListener("click", () => {
    const gameMode = parseInt(localStorage.getItem("gameMode"));
    const selectedNames = JSON.parse(localStorage.getItem("selectedNames"));
    const shuffledNames = shuffle(selectedNames);
    const newSelectedNames = shuffledNames.slice(0, 5);
    const newSelectedMissions = shuffle(missions[gameMode][0]);
    localStorage.setItem("selectedNames", JSON.stringify(newSelectedNames));
    localStorage.setItem("selectedMissions", JSON.stringify(newSelectedMissions));
    updateResults()
})
