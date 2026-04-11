async function fetchProfileData() {
    const url = 'https://github.com/James-Johny/js-developer-portfolio/raw/refs/heads/projeto-base/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}