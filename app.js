document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search');
    const createDataSheet = document.getElementById('create');
    const instructions = document.getElementById('instructions');
    const buttonContainer = document.querySelector('.btn-container');
    const container = document.querySelector('.container')

    //hide function
    function hideButtonContainer() {
        buttonContainer.style.display = 'none';
    }

    //show main menu
    function showButtonContainer() {
        buttonContainer.style.display = 'block';
    }

    //search tab function
    const searchTab = () => {
        hideButtonContainer();

        let searchArea = document.createElement('div');
        searchArea.id = 'search-tab';
        searchArea.innerHTML = `
        <div class="search-container"></div>
            <h1 class="heading">Look for your data</h1>
            <label for="search-bar" class="search-bar-container">
                <input type="text" name="search-bar" id="search-bar" placeholder="Enter Name">
                <input type="submit" id="search-btn" value="search" name="searched-name">
            </label>
            <div class="main-menu-container">
                <button id="main-menu">Main Menu</button>
            </div>
        </div>
       `
       container.appendChild(searchArea);

       const mainMenuButton = document.getElementById('main-menu');
       mainMenuButton.addEventListener('click', () => {
            container.removeChild(searchArea);
            showButtonContainer();
       })

       const searchBar = document.getElementById('search-bar');
       const searchBtn = document.getElementById('search-btn');

       searchBtn.addEventListener('click', () => {

        //alert if empty search bar and empties after search
        let searchedData = searchBar.value.trim();
        if (searchedData === '') {
            alert('Invalid input. Please Enter Name.');
        } else {
            searchBar.value = '';
        }
       })
    }

    search.addEventListener('click', searchTab);
});