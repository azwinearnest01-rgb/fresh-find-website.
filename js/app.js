// 1. MARKETS DATASET
        const MARKETS_DATA = [
            {
                id: 'm1',
                name: 'Green Valley Farmers Market',
                area: 'Green Valley',
                address: '450 Green Valley Rd, Sector 4',
                daysOpen: [1, 3, 5, 6], // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
                daysText: 'Mon, Wed, Fri, Sat',
                openHour: 8,  // 8 AM
                closeHour: 17, // 5 PM
                hoursText: '08:00 AM - 05:00 PM',
                produceTypes: ['Organic Fruits', 'Fresh Vegetables', 'Herbs'],
                rating: 4.8,
                distance: 2.4, // km
                image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80',
                desc: 'Community-run market providing organic fruits, seasonal vegetables, and locally harvested honey directly from local farm owners.'
            },
            {
                id: 'm2',
                name: 'Downtown Organic Bazaar',
                area: 'Downtown',
                address: '122 Main Civic Center Plaza',
                daysOpen: [0, 2, 4, 6],
                daysText: 'Sun, Tue, Thu, Sat',
                openHour: 9,
                closeHour: 19,
                hoursText: '09:00 AM - 07:00 PM',
                produceTypes: ['Organic Fruits', 'Dairy & Eggs', 'Herbs'],
                rating: 4.6,
                distance: 1.1,
                image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80',
                desc: 'Bustling urban market with over 30 stalls featuring artisanal cheeses, farm-fresh eggs, and cold-pressed juices.'
            },
            {
                id: 'm3',
                name: 'North Park Harvest Square',
                area: 'North Park',
                address: '89 North Park Boulevard',
                daysOpen: [5, 6, 0],
                daysText: 'Fri, Sat, Sun',
                openHour: 7,
                closeHour: 14,
                hoursText: '07:00 AM - 02:00 PM',
                produceTypes: ['Fresh Vegetables', 'Herbs', 'Dairy & Eggs'],
                rating: 4.9,
                distance: 3.8,
                image: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=600&q=80',
                desc: 'Specialized weekend farmers market known for heirloom root vegetables, organic microgreens, and freshly baked bread.'
            },
            {
                id: 'm4',
                name: 'Eastside Community Fair',
                area: 'Eastside',
                address: '304 East Meadow Lane',
                daysOpen: [1, 2, 3, 4, 5, 6, 0], // Open everyday
                daysText: 'Daily (Mon - Sun)',
                openHour: 8,
                closeHour: 20,
                hoursText: '08:00 AM - 08:00 PM',
                produceTypes: ['Organic Fruits', 'Fresh Vegetables'],
                rating: 4.5,
                distance: 5.2,
                image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
                desc: 'Daily cooperative bazaar serving affordable hydroponic greens, fresh citrus, and zero-pesticide produce.'
            }
        ];

        // 2. PRODUCE GUIDE DATASET
        const PRODUCE_DATA = [
            {
                id: 'p1',
                name: 'Heirloom Vine Tomatoes',
                category: 'Vegetables',
                season: 'Summer / Autumn',
                price: '$3.50 / lb',
                desc: 'Rich, juicy vine-ripened heirloom tomatoes harvested without synthetic fertilizers.',
                image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80'
            },
            {
                id: 'p2',
                name: 'Organic Honeycrisp Apples',
                category: 'Fruits',
                season: 'Autumn / Winter',
                price: '$2.80 / lb',
                desc: 'Crisp, sweet orchard apples harvested directly from regional mountain growers.',
                image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80'
            },
            {
                id: 'p3',
                name: 'Fresh Sweet Basil Leaves',
                category: 'Herbs',
                season: 'Spring / Summer',
                price: '$1.99 / bunch',
                desc: 'Fragrant, green basil leaves grown in local greenhouse hydroponic units.',
                image: 'https://images.unsplash.com/photo-1608683232869-93d40ef148f3?auto=format&fit=crop&w=600&q=80'
            },
            {
                id: 'p4',
                name: 'Artisanal Goat Milk Cheese',
                category: 'Dairy',
                season: 'All Year',
                price: '$6.50 / block',
                desc: 'Handcrafted creamy goat cheese from pasture-raised organic dairy goats.',
                image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80'
            }
        ];

        // 3. RULE-BASED AI CHATBOT KNOWLEDGE BASE
        const FAQ_RULES = [
            {
                keywords: ['hi', 'hello', 'hey', 'start'],
                response: 'Hello! 🌿 Welcome to FreshFind. I can help you locate markets, check seasonal fruits, or guide you through bookmarks.'
            },
            {
                keywords: ['open', 'today', 'hours', 'time'],
                response: 'You can check real-time market open status directly in the "Market Directory" section. Look for the green "OPEN NOW" badges!'
            },
            {
                keywords: ['season', 'summer', 'winter', 'fruit', 'vegetable'],
                response: 'Current seasonal highlights include Heirloom Tomatoes, Honeycrisp Apples, and Fresh Basil! Visit the "Produce Guide" tab for details.'
            },
            {
                keywords: ['team', 'creator', 'who', 'aizaz', 'azwin', 'ali', 'huzaifa'],
                response: 'FreshFind was built by a 4-member student team: Aizaz (UI/UX), Azwin (Data Engine), Ali Akbar (Chatbot & Bookmarks), and Huzaifa (QA & Docs).'
            },
            {
                keywords: ['bookmark', 'favorite', 'save', 'notes'],
                response: 'Click the star icon ⭐️ on any market card to save it. You can add custom shopping notes in your Bookmarks section and export as a .txt file!'
            }
        ];

        let activeSection = 'home';
        let bookmarkedIds = JSON.parse(localStorage.getItem('freshfind_bookmarks') || '[]');
        let personalNotes = JSON.parse(localStorage.getItem('freshfind_notes') || '{}');

        // Navigation Switcher
        function navigateTo(sectionId) {
            activeSection = sectionId;
            document.querySelectorAll('.section-block').forEach(sec => sec.classList.add('hidden'));
            
            const target = document.getElementById(`section-${sectionId}`);
            if(target) target.classList.remove('hidden');

            // Update Nav Active State
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-egreen-700', 'bg-emerald-50');
                btn.classList.add('text-gray-600');
            });
            const activeNav = document.getElementById(`nav-${sectionId}`);
            if(activeNav) {
                activeNav.classList.remove('text-gray-600');
                activeNav.classList.add('text-egreen-700', 'bg-emerald-50');
            }

            // Update Breadcrumb Trail
            const currentLabel = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            document.getElementById('breadcrumb-current').textContent = currentLabel === 'Home' ? 'Overview' : currentLabel;

            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Trigger section-specific re-renders
            if(sectionId === 'markets') renderMarkets();
            if(sectionId === 'produce') renderProduce();
            if(sectionId === 'bookmarks') renderBookmarks();
        }

        // Dynamic "OPEN NOW" Calculator
        function isMarketOpenNow(market) {
            const now = new Date();
            const currentDay = now.getDay(); // 0=Sun, 1=Mon, ...
            const currentHour = now.getHours();

            const isOpenDay = market.daysOpen.includes(currentDay);
            const isOpenHour = currentHour >= market.openHour && currentHour < market.closeHour;

            return isOpenDay && isOpenHour;
        }

        // Render Market Directory
        function renderMarkets(customFilterList = null) {
            const grid = document.getElementById('markets-grid');
            if(!grid) return;
            grid.innerHTML = '';

            let listToRender = customFilterList || [...MARKETS_DATA];

            // Apply Sorting
            const sortVal = document.getElementById('market-sort')?.value || 'name';
            if(sortVal === 'name') {
                listToRender.sort((a,b) => a.name.localeCompare(b.name));
            } else if(sortVal === 'distance') {
                listToRender.sort((a,b) => a.distance - b.distance);
            } else if(sortVal === 'open') {
                listToRender.sort((a,b) => isMarketOpenNow(b) - isMarketOpenNow(a));
            }

            listToRender.forEach(m => {
                const isOpen = isMarketOpenNow(m);
                const isBookmarked = bookmarkedIds.includes(m.id);

                const cardHtml = `
                    <div class="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
                        <div>
                            <!-- Card Image & Badge Overlay -->
                            <div class="relative h-48 overflow-hidden">
                                <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div class="absolute top-3 left-3 flex gap-2">
                                    <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide text-white ${isOpen ? 'bg-emerald-600 shadow-md' : 'bg-gray-500'}">
                                        ${isOpen ? '🟢 Open Now' : '🔴 Closed'}
                                    </span>
                                </div>
                                <button onclick="toggleBookmark('${m.id}')" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-amber-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                                    <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                                </button>
                            </div>

                            <!-- Card Info -->
                            <div class="p-5 space-y-2 text-xs">
                                <div class="flex justify-between items-center text-gray-400 font-semibold">
                                    <span><i class="fa-solid fa-location-dot text-emerald-600 mr-1"></i> ${m.area}</span>
                                    <span><i class="fa-solid fa-route text-gray-400 mr-1"></i> ${m.distance} km</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 group-hover:text-egreen-700 transition-colors">${m.name}</h3>
                                <p class="text-gray-500 line-clamp-2">${m.desc}</p>
                                
                                <div class="pt-2 border-t border-gray-100 flex flex-wrap gap-1">
                                    ${m.produceTypes.map(t => `<span class="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md">${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- Card Action Footer -->
                        <div class="p-5 pt-0">
                            <button onclick="openMarketModal('${m.id}')" class="w-full bg-emerald-50 hover:bg-egreen-600 hover:text-white text-egreen-800 font-bold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2">
                                View Details & Schedule <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('beforeend', cardHtml);
            });
        }

        function executeQuickSearch() {
            const area = document.getElementById('quick-area').value;
            const day = document.getElementById('quick-day').value;
            const produce = document.getElementById('quick-produce').value;

            let filtered = MARKETS_DATA.filter(m => {
                let matchArea = (area === 'ALL') || (m.area === area);
                let matchProduce = (produce === 'ALL') || (m.produceTypes.includes(produce));
                
                let matchDay = true;
                if(day === 'TODAY') {
                    const todayNum = new Date().getDay();
                    matchDay = m.daysOpen.includes(todayNum);
                } else if(day !== 'ALL') {
                    matchDay = m.daysOpen.includes(parseInt(day));
                }

                return matchArea && matchProduce && matchDay;
            });

            // Update active tags UI
            const tagsBox = document.getElementById('active-filter-tags');
            tagsBox.innerHTML = `
                <span class="bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-800 font-medium">Area: ${area}</span>
                <span class="bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-800 font-medium">Day: ${day}</span>
                <span class="bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-800 font-medium">Category: ${produce}</span>
            `;

            navigateTo('markets');
            renderMarkets(filtered);
            showToast(`Found ${filtered.length} matching market(s)`, 'info');
        }

        function resetMarketFilters() {
            document.getElementById('quick-area').value = 'ALL';
            document.getElementById('quick-day').value = 'ALL';
            document.getElementById('quick-produce').value = 'ALL';
            document.getElementById('active-filter-tags').innerHTML = '<span class="bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-800 font-medium">All Markets</span>';
            renderMarkets();
            showToast('Filters reset to default', 'info');
        }

        function renderProduce(categoryFilter = 'ALL') {
            const grid = document.getElementById('produce-grid');
            if(!grid) return;
            grid.innerHTML = '';

            const list = (categoryFilter === 'ALL') 
                ? PRODUCE_DATA 
                : PRODUCE_DATA.filter(p => p.category === categoryFilter);

            list.forEach(p => {
                const card = `
                    <div class="bg-white rounded-3xl border border-gray-200 shadow-md p-4 space-y-3 hover:border-emerald-300 transition-all flex flex-col justify-between">
                        <div>
                            <img src="${p.image}" alt="${p.name}" class="w-full h-36 object-cover rounded-2xl mb-3" />
                            <span class="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">${p.category}</span>
                            <h3 class="text-sm font-bold text-gray-900 mt-1">${p.name}</h3>
                            <p class="text-xs text-gray-500 leading-snug mt-1">${p.desc}</p>
                        </div>
                        <div class="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                            <span class="font-bold text-egreen-700">${p.price}</span>
                            <span class="text-[10px] font-medium text-gray-400"><i class="fa-solid fa-sun text-amber-500"></i> ${p.season}</span>
                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('beforeend', card);
            });
        }

        function filterProduceCategory(cat) {
            document.querySelectorAll('.produce-cat-btn').forEach(btn => {
                btn.classList.remove('bg-egreen-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-600');
            });
            event.target.classList.remove('bg-white', 'text-gray-600');
            event.target.classList.add('bg-egreen-600', 'text-white');
            renderProduce(cat);
        }

        function toggleBookmark(id) {
            if(bookmarkedIds.includes(id)) {
                bookmarkedIds = bookmarkedIds.filter(i => i !== id);
                showToast('Removed from bookmarks', 'info');
            } else {
                bookmarkedIds.push(id);
                showToast('Added to bookmarks! ⭐️', 'success');
            }
            localStorage.setItem('freshfind_bookmarks', JSON.stringify(bookmarkedIds));
            updateBookmarkBadge();
            renderMarkets();
            if(activeSection === 'bookmarks') renderBookmarks();
        }

        function updateBookmarkBadge() {
            const badge = document.getElementById('bookmark-badge');
            if(badge) {
                badge.textContent = bookmarkedIds.length;
                if(bookmarkedIds.length > 0) badge.classList.remove('hidden');
                else badge.classList.add('hidden');
            }
        }

        function renderBookmarks() {
            const container = document.getElementById('bookmarks-container');
            if(!container) return;
            container.innerHTML = '';

            if(bookmarkedIds.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-12 bg-white rounded-3xl border border-gray-200 p-8">
                        <i class="fa-regular fa-star text-4xl text-gray-300 mb-3"></i>
                        <h3 class="text-base font-bold text-gray-800">No Bookmarks Saved Yet</h3>
                        <p class="text-xs text-gray-500 mt-1">Click the star icon on any market card to save your favorite shopping spots.</p>
                        <button onclick="navigateTo('markets')" class="mt-4 bg-egreen-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl">Browse Markets</button>
                    </div>
                `;
                return;
            }

            bookmarkedIds.forEach(id => {
                const m = MARKETS_DATA.find(item => item.id === id);
                if(!m) return;

                const noteText = personalNotes[id] || '';

                const itemHtml = `
                    <div class="bg-white rounded-3xl border border-gray-200 p-6 shadow-md flex flex-col md:flex-row gap-6 items-start">
                        <img src="${m.image}" alt="${m.name}" class="w-full md:w-44 h-32 object-cover rounded-2xl shrink-0" />
                        
                        <div class="flex-grow space-y-2 text-xs">
                            <div class="flex justify-between items-center">
                                <h3 class="text-base font-bold text-gray-900">${m.name}</h3>
                                <button onclick="toggleBookmark('${m.id}')" class="text-red-500 font-bold hover:underline">Remove</button>
                            </div>
                            <p class="text-gray-500"><i class="fa-solid fa-location-dot text-emerald-600"></i> ${m.address}</p>
                            
                            <!-- Personal Note Input Area -->
                            <div class="pt-2">
                                <label class="block text-[11px] font-bold text-emerald-800 mb-1"><i class="fa-solid fa-pen-to-square"></i> Your Custom Shopping Note:</label>
                                <textarea id="note-${m.id}" onblur="savePersonalNote('${m.id}')" placeholder="e.g. Remember to buy organic honey and fresh eggs on Saturday morning..." class="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">${noteText}</textarea>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', itemHtml);
            });
        }

        function savePersonalNote(id) {
            const val = document.getElementById(`note-${id}`)?.value || '';
            personalNotes[id] = val;
            localStorage.setItem('freshfind_notes', JSON.stringify(personalNotes));
            showToast('Personal note autosaved!', 'success');
        }

        // Export Bookmarks to formatted .txt File
        function exportBookmarksTxt() {
            if(bookmarkedIds.length === 0) {
                showToast('No bookmarks available to export!', 'error');
                return;
            }

            let textContent = `=======================================\n`;
            textContent += `  FRESHFIND (eGREEN BASKET) BOOKMARKS\n`;
            textContent += `  Generated on: ${new Date().toLocaleString()}\n`;
            textContent += `=======================================\n\n`;

            bookmarkedIds.forEach((id, idx) => {
                const m = MARKETS_DATA.find(item => item.id === id);
                if(m) {
                    textContent += `${idx + 1}. ${m.name.toUpperCase()}\n`;
                    textContent += `   Area: ${m.area}\n`;
                    textContent += `   Address: ${m.address}\n`;
                    textContent += `   Operating Hours: ${m.hoursText} (${m.daysText})\n`;
                    textContent += `   Personal Note: ${personalNotes[id] || 'None'}\n`;
                    textContent += `---------------------------------------\n`;
                }
            });

            const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `FreshFind_Bookmarks_${Date.now()}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Exported bookmarks text summary!', 'success');
        }

        function toggleChatbot() {
            const win = document.getElementById('chatbot-window');
            win.classList.toggle('hidden');
        }

        function handleChatSubmit(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const msg = input.value.trim();
            if(!msg) return;

            appendChatMessage('user', msg);
            input.value = '';

            // Parser match
            setTimeout(() => {
                const reply = computeBotResponse(msg);
                appendChatMessage('bot', reply);
            }, 500);
        }

        function sendQuickReply(text) {
            appendChatMessage('user', text);
            setTimeout(() => {
                const reply = computeBotResponse(text);
                appendChatMessage('bot', reply);
            }, 400);
        }

        function computeBotResponse(userMsg) {
            const lower = userMsg.toLowerCase();
            for(let rule of FAQ_RULES) {
                if(rule.keywords.some(kw => lower.includes(kw))) {
                    return rule.response;
                }
            }
            return "I'm not sure about that query, but you can explore our Market Directory or Produce Guide sections for detailed information!";
        }

        function appendChatMessage(sender, text) {
            const container = document.getElementById('chat-messages');
            if(!container) return;

            const isBot = sender === 'bot';
            const html = `
                <div class="flex gap-2 ${isBot ? '' : 'justify-end'}">
                    ${isBot ? '<div class="w-6 h-6 rounded-full bg-emerald-100 text-egreen-700 flex items-center justify-center text-[10px] shrink-0 font-bold">🤖</div>' : ''}
                    <div class="${isBot ? 'bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-tl-none' : 'bg-egreen-600 text-white rounded-tr-none'} p-3 rounded-2xl max-w-[80%]">
                        ${text}
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
            container.scrollTop = container.scrollHeight;
        }

        // Market Detail Modal
        function openMarketModal(id) {
            const m = MARKETS_DATA.find(item => item.id === id);
            if(!m) return;

            document.getElementById('modal-market-area').textContent = m.area;
            document.getElementById('modal-market-title').textContent = m.name;
            document.getElementById('modal-market-address').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${m.address}`;
            document.getElementById('modal-market-desc').textContent = m.desc;
            document.getElementById('modal-market-hours').textContent = m.hoursText;
            document.getElementById('modal-market-days').textContent = m.daysText;
            document.getElementById('modal-market-rating').textContent = `${m.rating} / 5.0 (Verified Feedback)`;
            document.getElementById('modal-map-label').textContent = `GPS Pin: Lat/Lng simulated for ${m.area}`;

            const tagsContainer = document.getElementById('modal-market-tags');
            tagsContainer.innerHTML = m.produceTypes.map(t => `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-lg">${t}</span>`).join('');

            const btn = document.getElementById('modal-bookmark-btn');
            btn.onclick = () => { toggleBookmark(m.id); closeMarketModal(); };

            document.getElementById('market-modal').classList.remove('hidden');
        }

        function closeMarketModal() {
            document.getElementById('market-modal').classList.add('hidden');
        }

        // Auth Modal
        function openAuthModal(mode) {
            document.getElementById('auth-modal-title').textContent = mode === 'login' ? 'Log In to FreshFind' : 'Create FreshFind Account';
            document.getElementById('auth-modal').classList.remove('hidden');
        }
        function closeAuthModal() { document.getElementById('auth-modal').classList.add('hidden'); }
        function handleAuthSubmit(e) {
            e.preventDefault();
            closeAuthModal();
            showToast('Successfully authenticated!', 'success');
        }

        // Share Modal
        function openShareModal() { document.getElementById('share-modal').classList.remove('hidden'); }
        function closeShareModal() { document.getElementById('share-modal').classList.add('hidden'); }
        function simulatedShare(platform) {
            showToast(`Shared bookmarks to ${platform}!`, 'success');
            closeShareModal();
        }
        function copyShareLink() {
            document.execCommand('copy');
            showToast('Share link copied to clipboard!', 'info');
            closeShareModal();
        }

        // Contact Form
        function handleContactSubmit(e) {
            e.preventDefault();
            showToast('Thank you! Your message has been sent to our team.', 'success');
            e.target.reset();
        }

        // Geolocation Finder
        function findNearbyMarketGeo() {
            const status = document.getElementById('geo-status');
            status.textContent = 'Locating position...';

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        status.textContent = 'Location detected! Showing nearest market.';
                        showToast('Detected position! Directing to nearest market.', 'success');
                        navigateTo('markets');
                    },
                    (error) => {
                        status.textContent = 'Unable to fetch position. Displaying default directory.';
                        showToast('Geolocation permission denied or unavailable.', 'error');
                    }
                );
            } else {
                status.textContent = 'Geolocation API not supported in browser.';
            }
        }

        // Mobile Drawer Toggle
        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Global Toast Utility
        function showToast(message, type = 'info') {
            const container = document.getElementById('toast-container');
            if(!container) return;

            const bgClass = type === 'success' ? 'bg-egreen-700' : (type === 'error' ? 'bg-red-600' : 'bg-gray-800');
            const toast = document.createElement('div');
            toast.className = `${bgClass} text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl pointer-events-auto flex items-center gap-2 transition-all transform translate-y-2 opacity-0`;
            toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i> ${message}`;

            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        window.onload = function() {
            // Start Realtime Clock Loop
            setInterval(() => {
                const now = new Date();
                const clockEl = document.getElementById('realtime-clock');
                if(clockEl) {
                    clockEl.textContent = now.toLocaleTimeString();
                }
            }, 1000);

            // Ticker status text
            const ticker = document.getElementById('hero-status-ticker');
            if(ticker) {
                const openCount = MARKETS_DATA.filter(isMarketOpenNow).length;
                ticker.textContent = `${openCount} Farmers Markets Open Right Now`;
            }

            // Initialize App State
            updateBookmarkBadge();
            renderMarkets();
            renderProduce();
        };
