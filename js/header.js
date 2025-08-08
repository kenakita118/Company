function generateHeader() {
	const body = document.querySelector('body');

	const header = document.createElement('header');
	header.innerHTML = `
    <nav>
        <div class="header__logo-container">
            <img class="header__logo" src="../img/logo/company_logo.png" alt="Company" />
        </div>

        <ul class="header__nav-links">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
        </ul>
    </nav>
    `;
	body.appendChild(header);
}

generateHeader();
