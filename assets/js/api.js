async function fetchProfileData() {
    const url = 'https://james-johny.github.io/js-developer-portfolio/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}