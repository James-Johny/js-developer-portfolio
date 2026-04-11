async function fetchProfileData() {
    /*const url = 'https://raw.githubusercontent.com/James-Johny/js-developer-portfolio/refs/heads/projeto-base/data/profile.json';*/
    const url = 'https://potential-space-telegram-4jwqqj6wqj4x3qw5g-5500.app.github.dev/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}