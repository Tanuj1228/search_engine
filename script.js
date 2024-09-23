
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

function displaySearchHistory() {
    historyList.innerHTML = ''; 
    searchHistory.forEach(query => {
        const listItem = document.createElement('li');
        listItem.textContent = query;
        historyList.appendChild(listItem);
    });
}

function addToHistory(searchQuery) {
    if (searchQuery.trim()) {
        searchHistory.push(searchQuery);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }
}

searchBtn.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    addToHistory(searchQuery);
    searchInput.value = ''; 
});


clearHistoryBtn.addEventListener('click', () => {
    searchHistory = []; 
    localStorage.removeItem('searchHistory'); 
    displaySearchHistory(); 
});

displaySearchHistory();
