
$jsFile = "script.js"

$initCode = @"

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on index or detail page
    if (document.getElementById('mod-list')) {
        renderMods(allMods[currentGame]);
        updateModCount();
        updateHomeModCounts();
        renderFeaturedMods();
        renderPagination(); // Initial pagination render

        // Search Input Listener
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filtered = allMods[currentGame].filter(mod => 
                    mod.name.toLowerCase().includes(searchTerm) || 
                    mod.description.toLowerCase().includes(searchTerm)
                );
                currentPage = 1; // Reset to first page on search
                renderMods(filtered);
                renderPagination(filtered);
            });
        }

        // Category Buttons Listener
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                categoryButtons.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                btn.classList.add('active');

                const category = btn.dataset.category;
                let filtered = allMods[currentGame];
                
                if (category !== 'all') {
                    filtered = filtered.filter(mod => mod.category === category);
                }
                
                currentPage = 1; // Reset to first page on filter
                renderMods(filtered);
                renderPagination(filtered);
            });
        });
    }
    
    // Mobile Menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
});
"@

Add-Content -Path $jsFile -Value $initCode -Encoding UTF8
Write-Host "Added initialization code to $jsFile"
