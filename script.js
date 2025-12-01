// Data Storage
let userData = {
    totalPoints: 150,
    lifetimePoints: 0,
    monthlyPoints: 150,
    totalPurchases: 5,
    rewardsClaimed: 2,
    currentLevel: 'Silver',
	transactions: [
        {
            id: 1,
            type: 'earned',
            date: '2024-01-15',
            description: 'Pembelian - STR-2024-001',
            location: 'Jakarta Pusat - Grand Indonesia',
            points: 150,
            amount: 1500000,
            receiptNumber: 'STR-2024-001',
            receiptImage: 'https://picsum.photos/seed/receipt1/400/600.jpg'
        },
        {
            id: 2,
            type: 'earned',
            date: '2024-01-14',
            description: 'Pembelian - STR-2024-002',
            location: 'Jakarta Selatan - Pondok Indah Mall',
            points: 85,
            amount: 850000,
            receiptNumber: 'STR-2024-002',
            receiptImage: 'https://picsum.photos/seed/receipt2/400/600.jpg'
        },
        {
            id: 3,
            type: 'redeemed',
            date: '2024-01-13',
            description: 'Reward - Voucher Diskon 10%',
            location: '-',
            points: -100
        },
        {
            id: 4,
            type: 'earned',
            date: '2024-01-12',
            description: 'Pembelian - STR-2024-003',
            location: 'Jakarta Utara - Mall Kelapa Gading',
            points: 200,
            amount: 2000000,
            receiptNumber: 'STR-2024-003',
            receiptImage: 'https://picsum.photos/seed/receipt3/400/600.jpg'
        },
        {
            id: 5,
            type: 'redeemed',
            date: '2024-01-10',
            description: 'Reward - Gratis Ongkir',
            location: '-',
            points: -50
        },
        {
            id: 6,
            type: 'earned',
            date: '2024-01-08',
            description: 'Pembelian - STR-2024-004',
            location: 'Jakarta Barat - Central Park',
            points: 120,
            amount: 1200000,
            receiptNumber: 'STR-2024-004',
            receiptImage: 'https://picsum.photos/seed/receipt4/400/600.jpg'
        },
        {
            id: 7,
            type: 'earned',
            date: '2024-01-05',
            description: 'Pembelian - STR-2024-005',
            location: 'Tangerang - AEON Mall',
            points: 95,
            amount: 950000,
            receiptNumber: 'STR-2024-005',
            receiptImage: 'https://picsum.photos/seed/receipt5/400/600.jpg'
        },
        {
            id: 8,
            type: 'redeemed',
            date: '2024-01-03',
            description: 'Reward - Tote Bag Exclusive',
            location: '-',
            points: -300
        },
        {
            id: 9,
            type: 'earned',
            date: '2023-12-28',
            description: 'Pembelian - STR-2023-156',
            location: 'Bekasi - Summarecon Mall',
            points: 180,
            amount: 1800000,
            receiptNumber: 'STR-2023-156',
            receiptImage: 'https://picsum.photos/seed/receipt6/400/600.jpg'
        },
        {
            id: 10,
            type: 'earned',
            date: '2023-12-25',
            description: 'Pembelian - STR-2023-155',
            location: 'Depok - Depok Town Square',
            points: 75,
            amount: 750000,
            receiptNumber: 'STR-2023-155',
            receiptImage: 'https://picsum.photos/seed/receipt7/400/600.jpg'
        },
        {
            id: 11,
            type: 'earned',
            date: '2023-12-20',
            description: 'Pembelian - STR-2023-154',
            location: 'Jakarta Pusat - Grand Indonesia',
            points: 250,
            amount: 2500000,
            receiptNumber: 'STR-2023-154',
            receiptImage: 'https://picsum.photos/seed/receipt8/400/600.jpg'
        },
        {
            id: 12,
            type: 'redeemed',
            date: '2023-12-18',
            description: 'Reward - Cashback Rp 25.000',
            location: '-',
            points: -250
        }
    ],
	progressMissions: [
        {
            id: 1,
            type: 'dailyMission',
            name: 'Absen Setiap Hari',
            points: 10,
			usedAttempt: 1,
			maxAttempt: 1,
        },
        {
            id: 2,
            type: 'weeklyMission',
            name: 'Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)',
            points: 30,
			usedAttempt: 1,
			maxAttempt: 5
        },
		 {
            id: 3,
            type: 'dailyMission',
            name: 'Membeli kursus dengan minimal 1 juta rupiah',
            points: 100,
			usedAttempt: 1,
			maxAttempt: 1
        },
		 {
            id: 4,
            type: 'lifetimeMission',
            name: 'Mengikuti akun instagram resmi lembaga kursus',
            points: 75,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 5,
            type: 'dailyMission',
            name: 'Mereferensikan teman untuk bergabung',
            points: 100,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 6,
            type: 'dailyMission',
            name: 'Menyukai postingan instagram lembaga kursus',
            points: 5,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 7,
            type: 'dailyMission',
            name: 'Berkomentar pada postingan instagram lembaga kursus',
            points: 5,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 8,
            type: 'dailyMission',
            name: 'Membuat instagram story instagram lembaga kursus',
            points: 5,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 9,
            type: 'dailyMission',
            name: 'Memainkan mini game Monopoly',
            points: 30,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 10,
            type: 'dailyMission',
            name: 'Memberi review di google my business',
            points: 40,
			usedAttempt: 0,
			maxAttempt: 1
        },
		{
            id: 11,
            type: 'lifetimeMission',
            name: 'Join Academy Program',
            points: 100,
			usedAttempt: 0,
			maxAttempt: 1
        },
	]
};

// Rewards Catalog
const rewardsCatalog = [
    { id: 1, name: 'Voucher Diskon 10%', points: 100, description: 'Berlaku untuk pembelian minimum Rp 100.000', icon: 'fa-tag', category: 'voucher', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Voucher Diskon 20%', points: 200, description: 'Berlaku untuk pembelian minimum Rp 200.000', icon: 'fa-percentage', category: 'voucher', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Gratis Ongkir', points: 50, description: 'Gratis ongkir untuk pembelian online', icon: 'fa-truck', category: 'voucher', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Cashback Rp 25.000', points: 250, description: 'Cashback langsung ke wallet', icon: 'fa-wallet', category: 'cashback', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Cashback Rp 50.000', points: 500, description: 'Cashback langsung ke wallet', icon: 'fa-money-bill-wave', category: 'cashback', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Tote Bag Exclusive', points: 300, description: 'Tote bag eksklusif LoyaltyPoints', icon: 'fa-shopping-bag', category: 'merchandise', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, name: 'Tumbler Premium', points: 400, description: 'Tumbler stainless steel premium', icon: 'fa-mug-hot', category: 'merchandise', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, name: 'Voucher Belanja Rp 100.000', points: 1000, description: 'Voucher belanja tanpa minimum', icon: 'fa-gift', category: 'voucher', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

//game
const tiles = [
    { id: 0, type: 'start', icon: '🏁', label: 'START', reward: 'Start Position' },
    { id: 1, type: 'points', icon: '💎', label: '+20', reward: 20 },
    { id: 2, type: 'discount', icon: '🎫', label: '10% OFF', reward: 'discount10' },
    { id: 3, type: 'points', icon: '💰', label: '+30', reward: 30 },
    { id: 4, type: 'bonus', icon: '🎁', label: 'Mystery', reward: 'mystery' },
    { id: 5, type: 'points', icon: '⭐', label: '+15', reward: 15 },
    { id: 6, type: 'discount', icon: '🎟️', label: '20% OFF', reward: 'discount20' },
    { id: 7, type: 'points', icon: '💎', label: '+25', reward: 25 },
    { id: 8, type: 'bonus', icon: '🎯', label: 'Double', reward: 'double' },
    { id: 9, type: 'points', icon: '💰', label: '+40', reward: 40 },
    { id: 10, type: 'discount', icon: '🎪', label: 'Free Ship', reward: 'freeship' },
    { id: 11, type: 'points', icon: '⭐', label: '+50', reward: 50 }
];

//setting game
let currentPosition = 0;
let loyaltyPoints = 0;
let isRolling = false;
let boardSize = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
	updateHistory('dailyMission');
	
    //loadUserData();
    initializeRewards();
    updateDisplay();
    setMaxDate();
    initializeEventListeners();
	
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Calculate points from amount
    document.getElementById('purchaseAmount').addEventListener('input', function(e) {
        const amount = parseInt(e.target.value) || 0;
        const points = Math.floor(amount / 10000);
        document.getElementById('pointsEarned').textContent = points;
    });

    // Handle form submission
    document.getElementById('purchaseForm').addEventListener('submit', handleFormSubmit);
}

// Set max date to today
function setMaxDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('purchaseDate').max = today;
    document.getElementById('purchaseDate').value = today;
}

// Load user data from localStorage
/*
function loadUserData() {
    const savedData = localStorage.getItem('loyaltyPointsData');
    if (savedData) {
        userData = JSON.parse(savedData);
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('loyaltyPointsData', JSON.stringify(userData));
}
*/

// Tab Navigation
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('tab-active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.remove('hidden');
    
    // Add active class to selected tab button
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('tab-active');
    
    // Update content based on tab
    if (tabName === 'rewards') {
        initializeRewards();
    } else if (tabName === 'earn') {
        updateHistory('dailyMission');
    } else if (tabName === 'game') {
		initializeGame();
	} 
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const receiptNumber = document.getElementById('receiptNumber').value;
    const storeLocation = document.getElementById('storeLocation').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const purchaseAmount = parseInt(document.getElementById('purchaseAmount').value);
    const pointsEarned = Math.floor(purchaseAmount / 10000);
    
    // Check if receipt already exists
    if (userData.transactions.some(t => t.receiptNumber === receiptNumber)) {
        showNotification('Nomor struk sudah pernah digunakan!', 'error');
        return;
    }
    
    // Add transaction
    const transaction = {
        id: Date.now(),
        type: 'earned',
        date: purchaseDate,
        description: `Pembelian - ${receiptNumber}`,
        location: storeLocation,
        points: pointsEarned,
        amount: purchaseAmount,
        receiptNumber: receiptNumber
    };
    
    userData.transactions.unshift(transaction);
    userData.totalPoints += pointsEarned;
    userData.lifetimePoints += pointsEarned;
    userData.monthlyPoints += pointsEarned;
    userData.totalPurchases++;
    
    // Save and update
    //saveUserData();
    updateDisplay();
    updateRecentActivity();
    
    // Reset form
    document.getElementById('purchaseForm').reset();
    document.getElementById('purchaseDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('pointsEarned').textContent = '0';
    
    // Show success notification
    showNotification(`Berhasil mendapatkan ${pointsEarned} poin!`, 'success');
    
    // Check level up
    checkLevelUp();
}

// Initialize rewards
function initializeRewards() {
    const rewardsGrid = document.getElementById('rewardsGrid');
    rewardsGrid.innerHTML = '';
    
    rewardsCatalog.forEach(reward => {
        const canRedeem = userData.totalPoints >= reward.points;
        const rewardCard = document.createElement('div');
        rewardCard.className = `reward-card bg-white rounded-lg card-shadow p-6 ${!canRedeem ? 'opacity-60' : ''}`;
        rewardCard.innerHTML = `
            <div class="text-center mb-4">
                
				<td><img src="${reward.image}" alt="${reward.image}"></td>
                <h3 class="font-bold text-gray-800">${reward.name}</h3>
                <p class="text-xs text-gray-600 mt-2">${reward.description}</p>
            </div>
            <div class="text-center">
                <p class="text-2xl font-bold text-purple-600 mb-3">${reward.points} Poin</p>
                <button onclick="redeemReward(${reward.id})" 
                    class="w-full py-2 rounded-lg font-medium transition ${
                        canRedeem 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }"
                    ${!canRedeem ? 'disabled' : ''}>
                    ${canRedeem ? 'Tukar Sekarang' : 'Poin Tidak Cukup'}
                </button>
            </div>
        `;
        rewardsGrid.appendChild(rewardCard);
    });
}


//start - function game

// Initialize game
function initializeGame() {
	initializeBoard();
    document.getElementById('rollButton').addEventListener('click', rollDice);
    document.getElementById('dice').addEventListener('click', rollDice);
    
    // Add resize listener
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
}

function initializeBoard() {
    const boardTrack = document.querySelector('.board-track');
    const boardContainer = document.querySelector('.game-board-container');
    boardSize = boardContainer.offsetWidth;
    
    const radius = boardSize * 0.42;
    const centerX = boardSize / 2;
    const centerY = boardSize / 2;

    tiles.forEach((tile, index) => {
        const angle = (index * 30) - 90;
        const radian = (angle * Math.PI) / 180;
        const tileWidth = tile.type === 'start' ? boardSize * 0.16 : boardSize * 0.14;
        const x = centerX + radius * Math.cos(radian) - tileWidth / 2;
        const y = centerY + radius * Math.sin(radian) - tileWidth / 2;

        const tileElement = document.createElement('div');
        tileElement.className = `tile ${tile.type}`;
        tileElement.style.left = `${x}px`;
        tileElement.style.top = `${y}px`;
        tileElement.style.width = tile.type === 'start' ? `${boardSize * 0.16}px` : `${boardSize * 0.14}px`;
        tileElement.style.height = tile.type === 'start' ? `${boardSize * 0.16}px` : `${boardSize * 0.14}px`;
        tileElement.innerHTML = `
            <div class="tile-icon">${tile.icon}</div>
            <div>${tile.label}</div>
        `;
        boardTrack.appendChild(tileElement);
    });

    updatePandaPosition(0);
}

function updatePandaPosition(position) {
    const panda = document.getElementById('panda');
    const radius = boardSize * 0.42;
    const centerX = boardSize / 2;
    const centerY = boardSize / 2;
    const angle = (position * 30) - 90;
    const radian = (angle * Math.PI) / 180;
    const pandaSize = boardSize * 0.07;
    const x = centerX + radius * Math.cos(radian) - pandaSize / 2;
    const y = centerY + radius * Math.sin(radian) - pandaSize / 2;

    panda.style.left = `${x}px`;
    panda.style.top = `${y}px`;
    panda.style.width = `${pandaSize}px`;
    panda.style.height = `${pandaSize}px`;
}

function rollDice() {
    if (isRolling) return;
    
    isRolling = true;
    const rollButton = document.getElementById('rollButton');
    const dice = document.getElementById('dice');
    const diceMovement = document.getElementById('diceMovement');
    
    rollButton.disabled = true;
    dice.classList.add('rolling');
    
    // Animate dice movement
    diceMovement.style.left = '10px';
    
    setTimeout(() => {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        dice.textContent = diceValue;
        dice.classList.remove('rolling');
        
        // Move dice back
        setTimeout(() => {
            diceMovement.style.left = '-100px';
        }, 300);
        
        // Move panda
        movePanda(diceValue);
    }, 500);
}

function movePanda(steps) {
    let currentStep = 0;
    
    const moveInterval = setInterval(() => {
        if (currentStep < steps) {
            currentPosition = (currentPosition + 1) % tiles.length;
            updatePandaPosition(currentPosition);
            currentStep++;
        } else {
            clearInterval(moveInterval);
            checkReward();
            isRolling = false;
            document.getElementById('rollButton').disabled = false;
        }
    }, 300);
}

function checkReward() {
    const currentTile = tiles[currentPosition];
    
    if (currentTile.type === 'points') {
        loyaltyPoints += currentTile.reward;
        updatePointsDisplay();
        showReward('Points Earned!', `You earned ${currentTile.reward} loyalty points!`);
    } else if (currentTile.type === 'discount') {
        let discountText = '';
        if (currentTile.reward === 'discount10') {
            discountText = '10% discount on your next purchase!';
        } else if (currentTile.reward === 'discount20') {
            discountText = '20% discount on your next purchase!';
        } else if (currentTile.reward === 'freeship') {
            discountText = 'Free shipping on your next order!';
        }
        showReward('Discount Unlocked!', discountText);
    } else if (currentTile.type === 'bonus') {
        if (currentTile.reward === 'mystery') {
            const mysteryPoints = Math.floor(Math.random() * 50) + 10;
            loyaltyPoints += mysteryPoints;
            updatePointsDisplay();
            showReward('Mystery Box!', `You found ${mysteryPoints} bonus points!`);
        } else if (currentTile.reward === 'double') {
            const doubledPoints = loyaltyPoints;
            loyaltyPoints *= 2;
            updatePointsDisplay();
            showReward('Double Points!', `Your points doubled from ${doubledPoints} to ${loyaltyPoints}!`);
        }
    }
}

function updatePointsDisplay() {
    const pointsElement = document.getElementById('points');
    const currentPoints = parseInt(pointsElement.textContent);
    const newPoints = loyaltyPoints;
    
    // Animate points change
    let displayPoints = currentPoints;
    const increment = (newPoints - currentPoints) / 20;
    const pointsInterval = setInterval(() => {
        displayPoints += increment;
        if ((increment > 0 && displayPoints >= newPoints) || (increment < 0 && displayPoints <= newPoints)) {
            displayPoints = newPoints;
            clearInterval(pointsInterval);
        }
        pointsElement.textContent = Math.round(displayPoints);
    }, 30);
}

function showReward(title, message) {
    const popup = document.getElementById('rewardPopup');
    const overlay = document.getElementById('overlay');
    const titleElement = document.getElementById('rewardTitle');
    const messageElement = document.getElementById('rewardMessage');
    
    titleElement.textContent = title;
    messageElement.textContent = message;
    
    overlay.classList.add('show');
    setTimeout(() => {
        popup.classList.add('show');
    }, 100);
}

function closeRewardPopup() {
    const popup = document.getElementById('rewardPopup');
    const overlay = document.getElementById('overlay');
    
    popup.classList.remove('show');
    overlay.classList.remove('show');
}

// Handle window resize
function handleResize() {
    const boardContainer = document.querySelector('.game-board-container');
    const newSize = boardContainer.offsetWidth;
    if (Math.abs(newSize - boardSize) > 10) {
        boardSize = newSize;
        // Clear and reinitialize board
        const boardTrack = document.querySelector('.board-track');
        boardTrack.innerHTML = '';
        initializeBoard();
    }
}

//end - function game

// Redeem reward
function redeemReward(rewardId) {
    const reward = rewardsCatalog.find(r => r.id === rewardId);
    
    if (!reward || userData.totalPoints < reward.points) {
        showNotification('Poin tidak cukup!', 'error');
        return;
    }
    
    // Confirm redemption
    if (!confirm(`Tukar ${reward.name} dengan ${reward.points} poin?`)) {
        return;
    }
    
    // Deduct points
    userData.totalPoints -= reward.points;
    userData.rewardsClaimed++;
    
    // Add transaction
    const transaction = {
        id: Date.now(),
        type: 'redeemed',
        date: new Date().toISOString().split('T')[0],
        description: `Reward - ${reward.name}`,
        location: '-',
        points: -reward.points
    };
    
    userData.transactions.unshift(transaction);
    
    // Save and update
    //saveUserData();
    updateDisplay();
    initializeRewards();
    updateHistory();
    
    showNotification(`Berhasil menukar ${reward.name}!`, 'success');
}

// Update display
function updateDisplay() {
    //document.getElementById('totalPointsDisplay').textContent = userData.totalPoints.toLocaleString();
    // document.getElementById('totalPurchases').textContent = userData.totalPurchases;
    // document.getElementById('rewardsClaimed').textContent = userData.rewardsClaimed;
    document.getElementById('lifetimePoints').textContent = userData.lifetimePoints.toLocaleString();
    
    // Update progress bar
    const progress = Math.min((userData.monthlyPoints / 500) * 100, 100);
    document.getElementById('progressBar').style.width = progress + '%';
    //document.getElementById('monthlyProgress').textContent = `${userData.monthlyPoints} / 500`;
    
    //updateRecentActivity();
}

// Update recent activity
function updateRecentActivity() {
    const recentActivity = document.getElementById('recentActivity');
    const recentTransactions = userData.transactions.slice(0, 3);
    
    if (recentTransactions.length === 0) {
        recentActivity.innerHTML = '<p class="text-gray-500 text-sm">Belum ada aktivitas</p>';
        return;
    }
    
    recentActivity.innerHTML = recentTransactions.map(transaction => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center">
                <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    transaction.type === 'earned' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }">
                    <i class="fas ${transaction.type === 'earned' ? 'fa-plus' : 'fa-minus'} text-xs"></i>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-800">${transaction.description}</p>
                    <p class="text-xs text-gray-500">${transaction.date}</p>
                </div>
            </div>
            <span class="font-bold ${
                transaction.type === 'earned' 
                ? 'text-green-600' 
                : 'text-red-600'
            }">
                ${transaction.type === 'earned' ? '+' : ''}${transaction.points}
            </span>
        </div>
    `).join('');
}

// progressMissionTableBody
function updateHistory(filter = 'dailyMission') {
    let tbody = document.getElementById('progressMissionTableBody');
	tbody = tbody.querySelector('.card-body .mission-list');

    let transactions = userData.transactions;
	let progressMissions = userData.progressMissions;
    
	/*
	console.log(userData);
	console.log(transactions);
	console.log(progressMissions);
	*/
	
    if (filter === 'dailyMission') {
		//alert('dailyMission');
		progressMissions = progressMissions.filter(pm => pm.type == 'dailyMission');
        //transactions = transactions.filter(t => t.type === 'earned');
    } else if (filter === 'weeklyMission') {
		//alert('weeklyMission');
		progressMissions = progressMissions.filter(pm => pm.type == 'weeklyMission');
        //transactions = transactions.filter(t => t.type === 'redeemed');
    } else if (filter === 'lifetimeMission') {
		//alert('lifetimeMission');
		progressMissions = progressMissions.filter(pm => pm.type == 'lifetimeMission');
	}
    
    if (transactions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-500">Belum ada riwayat transaksi</td></tr>';
        return;
    }
    
	/*
	tbody.innerHTML = progressMissions.map(progressMission => `
         <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-4">
                <div class="text-sm">${progressMission.name}</div>
				<div class="text-sm">${progressMission.points}</div>
            </td>
        </tr>
		
    `).join('');
	*/
	
	/*
	tbody.innerHTML = progressMissions.map(progressMission => `
        <div class="mission-item" id="mission1">
			<div class="mission-title">
				<span>${progressMission.name}</span>
				<span class="mission-reward">+${progressMission.points} poin</span>
			</div>
			<div class="mission-progress">
				<div class="mission-progress-bar" id="mission1Progress" style="width: ${progressPercentage}%"></div>
			</div>
			<small class="text-muted">${progressMission.usedAttempt} / ${progressMission.maxAttempt} selesai</small>
		</div>
    `).join('');
	*/
	
	tbody.innerHTML = progressMissions.map(progressMission => {
		const progressPercent = (progressMission.usedAttempt / progressMission.maxAttempt) * 100;
		return `
			<div class="mission-item" id="mission1">
				<div class="mission-title">
					<span>${progressMission.name}</span>
					<span class="mission-reward">+${progressMission.points} poin</span>
				</div>
				<div class="mission-progress">
					<div class="mission-progress-bar" id="mission1Progress" style="width: ${progressPercent}%"></div>
				</div>
				<small class="text-muted">${progressMission.usedAttempt} / ${progressMission.maxAttempt} selesai</small>
			</div>
		`;
		}).join('');
	}

// Filter history
function filterHistory(filter) {
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-purple-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-purple-600', 'text-white');
    
    updateHistory(filter);
}


// Show image modal
function showImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Show notification
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    notification.className = `notification ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg mb-4 flex items-center`;
    notification.innerHTML = `
        <i class="fas ${icon} mr-3"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Check level up
function checkLevelUp() {
    let newLevel = userData.currentLevel;
    
    if (userData.lifetimePoints >= 5000) {
        newLevel = 'Platinum';
    } else if (userData.lifetimePoints >= 2000) {
        newLevel = 'Gold';
    } else if (userData.lifetimePoints >= 500) {
        newLevel = 'Silver';
    } else {
        newLevel = 'Bronze';
    }
    
    if (newLevel !== userData.currentLevel) {
        userData.currentLevel = newLevel;
        showNotification(`Selamat! Anda naik ke level ${newLevel}!`, 'success');
        //saveUserData();
    }
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Utility function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Export functions for global access
window.showTab = showTab;
window.redeemReward = redeemReward;
window.filterHistory = filterHistory;