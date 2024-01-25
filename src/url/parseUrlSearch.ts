export function parseUrlSearch(url) {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    
    const params = {};
    for (const pair of searchParams.entries()) {
        params[pair[0]] = pair[1];
    }
    
    return params;
}
