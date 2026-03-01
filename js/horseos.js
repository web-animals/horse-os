// HorseOS - Scheduled Horse Moments
// Retro Windows 98 Experience

// Reflection prompts for horse moments
const contemplationPrompts = [
    "What would you do if you were a horse with WiFi?",
    "Reflect on your last email. Was it necessary?",
    "The horse judges your browser tabs. Explain yourself.",
    "If horses could code, what would they build?",
    "Contemplate the last time you touched grass.",
    "The horse asks: Have you hydrated today?",
    "What is your favorite ponytail and why?",
    "Reflect on your screen time. The horse is concerned.",
    "If you were a horse, what would your LinkedIn headline be?",
    "The horse wants to know: When did you last stretch?",
    "Contemplate the concept of stable employment.",
    "What would a horse post on Instagram?",
    "The horse asks: Are you doomscrolling again?",
    "Reflect on your password choices. The horse sees all.",
    "If horses had meetings, how long would they be?",
    "The horse judges your chair posture. Sit up straight.",
    "Contemplate why you're reading this instead of working.",
    "What is the horsepower of your thoughts right now?",
    "The horse wants to know your 5-year plan.",
    "Reflect on the last time you said 'neigh' to something."
];

// Horse facts for the internet explorer
const horseFacts = [
    "Horses can sleep both lying down and standing up.",
    "A horse's heart weighs approximately 9 to 10 pounds.",
    "Horses have 205 bones in their skeleton.",
    "The average lifespan of a horse is 25-30 years.",
    "Horses can see nearly 360 degrees at once.",
    "A horse's teeth take up more space than its brain.",
    "Horses cannot vomit due to their digestive system anatomy.",
    "The fastest recorded speed of a horse was 55 mph.",
    "Horses have better hearing than dogs.",
    "There are over 300 different breeds of horses.",
    "Horses can run within hours of being born.",
    "A horse's height is measured in 'hands' (4 inches each).",
    "Horses have the largest eyes of any land mammal.",
    "The oldest horse on record lived to be 62 years old.",
    "Horses can recognize themselves in mirrors.",
    "A horse produces approximately 10 gallons of saliva per day.",
    "Horses have a great memory and can remember people.",
    "The Przewalski's horse is the only truly wild horse species.",
    "Horses use their ears, eyes, and nostrils to express mood.",
    "A horse's gallop has a moment where all four feet are off the ground."
];

// State
let currentTimer = 60;
let timerInterval = null;
let isContemplating = false;

// Window management
function openWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        window.style.display = 'block';
        // Bring to front
        window.style.zIndex = getHighestZIndex() + 1;
        
        // Special handling for horse moment
        if (windowId === 'horseMoment') {
            startHorseMoment();
        }
    }
}

function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        window.style.display = 'none';
        
        // Stop timer if closing horse moment
        if (windowId === 'horseMoment' && timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }
}

function getHighestZIndex() {
    const windows = document.querySelectorAll('.window');
    let maxZ = 10;
    windows.forEach(w => {
        const z = parseInt(w.style.zIndex) || 10;
        if (z > maxZ) maxZ = z;
    });
    return maxZ;
}

// Start Menu
function toggleStartMenu() {
    const menu = document.getElementById('startMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Close start menu when clicking elsewhere
document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('startMenu');
    const startBtn = document.querySelector('.start-btn');
    
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
        startMenu.style.display = 'none';
    }
});

// Horse Moment Logic
function startHorseMoment() {
    currentTimer = 60;
    isContemplating = false;
    
    // Set random prompt
    const promptEl = document.getElementById('reflectionPrompt');
    const randomPrompt = contemplationPrompts[Math.floor(Math.random() * contemplationPrompts.length)];
    promptEl.textContent = `"${randomPrompt}"`;
    
    // Update timer display
    updateTimerDisplay();
    
    // Reset progress bar
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = '0%';
    
    // Reset button
    const btn = document.getElementById('contemplateBtn');
    btn.textContent = 'I am Contemplating';
    btn.disabled = false;
    btn.classList.remove('disabled');
    
    // Start countdown
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        currentTimer--;
        updateTimerDisplay();
        updateProgressBar();
        
        if (currentTimer <= 0) {
            completeHorseMoment();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = currentTimer;
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const percentage = ((60 - currentTimer) / 60) * 100;
    progressFill.style.width = percentage + '%';
}

function contemplate() {
    isContemplating = true;
    const btn = document.getElementById('contemplateBtn');
    btn.textContent = 'Contemplating...';
    btn.disabled = true;
    btn.classList.add('disabled');
    
    // Visual feedback
    document.querySelector('.horse-3d').style.animation = 'horseFloat 0.5s ease-in-out infinite';
}

function completeHorseMoment() {
    clearInterval(timerInterval);
    timerInterval = null;
    
    const btn = document.getElementById('contemplateBtn');
    btn.textContent = '✓ Contemplation Complete';
    
    // Update global stats
    incrementContemplationCount();
    
    // Celebration animation
    document.querySelector('.horse-3d').textContent = '🦄';
    setTimeout(() => {
        document.querySelector('.horse-3d').textContent = '🐴';
    }, 2000);
}

// Internet Explorer Functions
function newFact() {
    const factEl = document.getElementById('horseFact');
    const randomFact = horseFacts[Math.floor(Math.random() * horseFacts.length)];
    
    // Typewriter effect
    factEl.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
        factEl.textContent += randomFact.charAt(i);
        i++;
        if (i >= randomFact.length) {
            clearInterval(typeInterval);
        }
    }, 30);
}

function incrementContemplationCount() {
    const countEl = document.getElementById('totalContemplations');
    const current = parseInt(countEl.textContent.replace(',', ''));
    const newCount = current + 1;
    countEl.textContent = newCount.toLocaleString();
}

// Recycle Bin Functions
function emptyTrash() {
    const trashItems = document.querySelectorAll('.trash-item');
    trashItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.5s';
    });
    
    setTimeout(() => {
        const recycleContent = document.querySelector('.recycle-content');
        recycleContent.innerHTML = `
            <div class="empty-message" style="text-align: center; padding: 40px; color: #808080;">
                <div style="font-size: 48px; margin-bottom: 16px;">🗑️</div>
                <p>The Recycle Bin is empty.</p>
                <p style="font-size: 11px; margin-top: 8px;">Your guilt has been successfully deleted.</p>
            </div>
        `;
    }, 500);
}

// Shutdown
function shutdown() {
    document.getElementById('shutdownScreen').style.display = 'flex';
    document.getElementById('startMenu').style.display = 'none';
}

// Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    clock.textContent = `${displayHours}:${minutes} ${ampm}`;
}

// Startup Sequence
function startupSequence() {
    const startupScreen = document.getElementById('startupScreen');
    
    // Show startup for 3 seconds
    setTimeout(() => {
        startupScreen.style.opacity = '0';
        startupScreen.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            startupScreen.style.display = 'none';
            // Auto-open horse moment after startup
            setTimeout(() => {
                openWindow('horseMoment');
            }, 500);
        }, 500);
    }, 3000);
}

// Draggable Windows
document.querySelectorAll('.window').forEach(windowEl => {
    const titleBar = windowEl.querySelector('.window-title');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    titleBar.addEventListener('mousedown', dragStart);

    function dragStart(e) {
        // Don't drag if clicking buttons
        if (e.target.closest('.window-buttons')) return;
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === titleBar || e.target.parentElement === titleBar) {
            isDragging = true;
            // Bring to front
            windowEl.style.zIndex = getHighestZIndex() + 1;
        }
    }

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);

    function dragMove(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;

            windowEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }

    function dragEnd() {
        initialX = windowEl.getBoundingClientRect().left;
        initialY = windowEl.getBoundingClientRect().top;
        xOffset = 0;
        yOffset = 0;
        windowEl.style.transform = 'none';
        windowEl.style.left = initialX + 'px';
        windowEl.style.top = initialY + 'px';
        isDragging = false;
    }
});

// Easter Eggs
let horseClicks = 0;
document.querySelector('.horse-3d')?.addEventListener('click', () => {
    horseClicks++;
    if (horseClicks === 5) {
        alert('🐴 The horse appreciates your attention. Your contemplation score has increased.');
        horseClicks = 0;
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Windows key simulation
    if (e.key === 'Meta' || (e.ctrlKey && e.key === 'Escape')) {
        e.preventDefault();
        toggleStartMenu();
    }
    
    // Alt+F4 to close active window
    if (e.altKey && e.key === 'F4') {
        const visibleWindows = Array.from(document.querySelectorAll('.window')).filter(w => w.style.display === 'block');
        if (visibleWindows.length > 0) {
            const topWindow = visibleWindows.sort((a, b) => (b.style.zIndex || 0) - (a.style.zIndex || 0))[0];
            // Don't allow closing horse moment with Alt+F4
            if (!topWindow.id.includes('horse')) {
                closeWindow(topWindow.id);
            }
        }
    }
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Start clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Run startup sequence
    startupSequence();
    
    // Initialize first fact
    setTimeout(newFact, 4000);
});

// Prevent context menu (authentic Windows feel)
document.addEventListener('contextmenu', (e) => {
    // Allow on inputs
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

// ==================== MINESWEEPER ====================
let mineGrid = [];
let mineRevealed = [];
let mineFlags = [];
let mineGameOver = false;
let mineTimer = 0;
let mineTimerInterval = null;
const MINE_ROWS = 8;
const MINE_COLS = 8;
const MINE_COUNT = 10;

function initMinesweeper() {
    const grid = document.getElementById('minesweeperGrid');
    grid.innerHTML = '';
    mineGrid = [];
    mineRevealed = [];
    mineFlags = [];
    mineGameOver = false;
    mineTimer = 0;
    
    // Create empty grid
    for (let r = 0; r < MINE_ROWS; r++) {
        mineGrid[r] = [];
        mineRevealed[r] = [];
        mineFlags[r] = [];
        for (let c = 0; c < MINE_COLS; c++) {
            mineGrid[r][c] = 0;
            mineRevealed[r][c] = false;
            mineFlags[r][c] = false;
            
            const cell = document.createElement('div');
            cell.className = 'mine-cell';
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener('click', () => clickMineCell(r, c));
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                rightClickMineCell(r, c);
            });
            grid.appendChild(cell);
        }
    }
    
    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < MINE_COUNT) {
        const r = Math.floor(Math.random() * MINE_ROWS);
        const c = Math.floor(Math.random() * MINE_COLS);
        if (mineGrid[r][c] !== -1) {
            mineGrid[r][c] = -1;
            minesPlaced++;
        }
    }
    
    // Calculate numbers
    for (let r = 0; r < MINE_ROWS; r++) {
        for (let c = 0; c < MINE_COLS; c++) {
            if (mineGrid[r][c] !== -1) {
                mineGrid[r][c] = countAdjacentMines(r, c);
            }
        }
    }
    
    updateMineCounter();
    document.getElementById('resetBtn').textContent = '😊';
}

function countAdjacentMines(row, col) {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            const r = row + dr;
            const c = col + dc;
            if (r >= 0 && r < MINE_ROWS && c >= 0 && c < MINE_COLS) {
                if (mineGrid[r][c] === -1) count++;
            }
        }
    }
    return count;
}

function clickMineCell(row, col) {
    if (mineGameOver || mineRevealed[row][col] || mineFlags[row][col]) return;
    
    if (!mineTimerInterval) {
        mineTimerInterval = setInterval(() => {
            mineTimer++;
            document.getElementById('mineTimer').textContent = mineTimer.toString().padStart(3, '0');
        }, 1000);
    }
    
    revealCell(row, col);
    
    if (mineGrid[row][col] === -1) {
        gameOver();
    } else if (checkWin()) {
        gameWin();
    }
}

function revealCell(row, col) {
    if (row < 0 || row >= MINE_ROWS || col < 0 || col >= MINE_COLS) return;
    if (mineRevealed[row][col] || mineFlags[row][col]) return;
    
    mineRevealed[row][col] = true;
    const cell = document.querySelector(`.mine-cell[data-row="${row}"][data-col="${col}"]`);
    cell.classList.add('revealed');
    
    if (mineGrid[row][col] === -1) {
        cell.classList.add('mine');
        cell.textContent = '💣';
    } else if (mineGrid[row][col] > 0) {
        cell.textContent = mineGrid[row][col];
        cell.classList.add(`number-${mineGrid[row][col]}`);
    } else {
        // Reveal adjacent cells for empty cells
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                revealCell(row + dr, col + dc);
            }
        }
    }
}

function rightClickMineCell(row, col) {
    if (mineGameOver || mineRevealed[row][col]) return;
    
    mineFlags[row][col] = !mineFlags[row][col];
    const cell = document.querySelector(`.mine-cell[data-row="${row}"][data-col="${col}"]`);
    cell.classList.toggle('flagged');
    updateMineCounter();
}

function updateMineCounter() {
    let flags = 0;
    for (let r = 0; r < MINE_ROWS; r++) {
        for (let c = 0; c < MINE_COLS; c++) {
            if (mineFlags[r][c]) flags++;
        }
    }
    document.getElementById('mineCounter').textContent = (MINE_COUNT - flags).toString().padStart(3, '0');
}

function gameOver() {
    mineGameOver = true;
    clearInterval(mineTimerInterval);
    document.getElementById('resetBtn').textContent = '😵';
    
    // Reveal all mines
    for (let r = 0; r < MINE_ROWS; r++) {
        for (let c = 0; c < MINE_COLS; c++) {
            if (mineGrid[r][c] === -1) {
                const cell = document.querySelector(`.mine-cell[data-row="${r}"][data-col="${c}"]`);
                cell.classList.add('revealed', 'mine');
                cell.textContent = '💣';
            }
        }
    }
}

function gameWin() {
    mineGameOver = true;
    clearInterval(mineTimerInterval);
    document.getElementById('resetBtn').textContent = '😎';
    
    setTimeout(() => {
        alert('🎉 Congratulations! You have achieved horse-level concentration!');
    }, 300);
}

function checkWin() {
    for (let r = 0; r < MINE_ROWS; r++) {
        for (let c = 0; c < MINE_COLS; c++) {
            if (mineGrid[r][c] !== -1 && !mineRevealed[r][c]) {
                return false;
            }
        }
    }
    return true;
}

function resetMinesweeper() {
    clearInterval(mineTimerInterval);
    mineTimerInterval = null;
    document.getElementById('mineTimer').textContent = '000';
    initMinesweeper();
}

// ==================== CALCULATOR ====================
let calcDisplay = '0';
let calcPrevious = null;
let calcOperator = null;
let calcNewNumber = true;

function updateCalcDisplay() {
    document.getElementById('calcDisplay').textContent = calcDisplay;
}

function calcNumber(num) {
    if (calcNewNumber) {
        calcDisplay = num;
        calcNewNumber = false;
    } else {
        calcDisplay = calcDisplay === '0' ? num : calcDisplay + num;
    }
    updateCalcDisplay();
}

function calcDecimal() {
    if (calcNewNumber) {
        calcDisplay = '0.';
        calcNewNumber = false;
    } else if (!calcDisplay.includes('.')) {
        calcDisplay += '.';
    }
    updateCalcDisplay();
}

function calcOperator(op) {
    calcPrevious = parseFloat(calcDisplay);
    calcOperator = op;
    calcNewNumber = true;
}

function calcEquals() {
    if (calcOperator === null || calcPrevious === null) return;
    
    const current = parseFloat(calcDisplay);
    let result;
    
    switch (calcOperator) {
        case '+': result = calcPrevious + current; break;
        case '-': result = calcPrevious - current; break;
        case '*': result = calcPrevious * current; break;
        case '/': result = current !== 0 ? calcPrevious / current : 'Error'; break;
        default: return;
    }
    
    calcDisplay = result.toString();
    calcPrevious = null;
    calcOperator = null;
    calcNewNumber = true;
    updateCalcDisplay();
}

function calcClear() {
    calcDisplay = '0';
    calcPrevious = null;
    calcOperator = null;
    calcNewNumber = true;
    updateCalcDisplay();
}

function calcBackspace() {
    if (calcDisplay.length > 1) {
        calcDisplay = calcDisplay.slice(0, -1);
    } else {
        calcDisplay = '0';
    }
    updateCalcDisplay();
}

// Initialize Minesweeper when window opens
const originalOpenWindow = openWindow;
openWindow = function(windowId) {
    originalOpenWindow(windowId);
    if (windowId === 'minesweeper') {
        initMinesweeper();
    }
};

// Console easter egg
console.log('%c🐴 HorseOS Loaded', 'font-size: 24px; font-weight: bold; color: #000080;');
console.log('%cPlease stand by for scheduled Horse Moments.', 'font-size: 14px; color: #808080;');
console.log('%cThis is not a suggestion.', 'font-size: 12px; color: #ff0000; font-weight: bold;');