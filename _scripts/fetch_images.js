const fs = require('fs');
const https = require('https');

// Read mod names
const content = fs.readFileSync('mod_names.txt', 'utf-8');
const modNames = content.split(/\r?\n/).filter(line => line.trim() !== '');

// Config
const BATCH_SIZE = 10;
const DELAY_MS = 1000;

const get = (url) => new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
    }).on('error', reject);
});

async function findImage(modName) {
    try {
        // Remove "FS25_" or similar prefixes
        const cleanName = modName.replace(/^FS25_/, '').replace(/_/g, ' ').trim();
        const safeFileName = cleanName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        // console.log(`Searching: ${cleanName}`);

        const searchUrl = `https://www.kingmods.net/en/search?q=${encodeURIComponent(cleanName)}`;
        const searchPage = await get(searchUrl);

        // Find first mod link
        // KingMods search results usually have links like: https://www.kingmods.net/en/fs25/mods/ID/SLUG
        const linkMatch = searchPage.match(/href="(https:\/\/www\.kingmods\.net\/en\/fs25\/mods\/[^"]+)"/);

        if (!linkMatch) return null;

        const modPageUrl = linkMatch[1];
        // console.log(`  Page Found: ${modPageUrl}`);

        const modPage = await get(modPageUrl);

        // Save HTML for debugging/verification
        fs.writeFileSync(path.join(HTML_DIR, `${safeFileName}.html`), modPage);

        // Find og:image
        const imgMatch = modPage.match(/property="og:image" content="([^"]+)"/);
        return imgMatch ? imgMatch[1] : null;
    } catch (e) {
        // console.error(e);
        return null;
    }
}

async function run() {
    const results = {};
    const batch = modNames.slice(0, BATCH_SIZE); // Testing with first 10

    console.log(`Processing ${batch.length} mods... HTML files will be saved to ${HTML_DIR}/`);

    for (const name of batch) {
        process.stdout.write(`Fetching for "${name}"... `);
        const url = await findImage(name);
        if (url) {
            console.log(`FOUND`);
            results[name] = url;
        } else {
            console.log(`NOT FOUND`);
        }
        await new Promise(r => setTimeout(r, DELAY_MS));
    }

    fs.writeFileSync('images_found.json', JSON.stringify(results, null, 2));
    console.log('Done. Results saved to images_found.json');
}

run();
