
const SUPABASE_URL = 'https://ffkkaxkczubhckvymqiz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZma2theGtjenViaGNrdnltcWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDA1MTAsImV4cCI6MjA5MzMxNjUxMH0.NGtIAnMH2egQE1mkEV0FL4GLEAMguKeiEnA3rkrmvBw';

let supabaseClient = null;
try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (err) {
    console.error('Supabase initialization failed:', err);
}
let allRegistrations = [];

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    checkAuth();

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('filterLevel').addEventListener('change', applyFilters);
    document.getElementById('filterSource').addEventListener('change', applyFilters);

    document.getElementById('refreshBtn').addEventListener('click', () => {
        document.getElementById('refreshBtn').classList.add('spin');
        fetchData();
    });

    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('exportCsvBtn').addEventListener('click', exportCSV);
});

// Auth Logic
async function checkAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        showDashboard();
    } else {
        showLogin();
    }

    // Listen for changes
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
            showDashboard();
        } else if (event === 'SIGNED_OUT') {
            showLogin();
        }
    });
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Logging in...';
    lucide.createIcons();
    loginBtn.disabled = true;
    document.getElementById('authError').classList.add('hidden');

    const { error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    loginBtn.innerHTML = 'Login';
    loginBtn.disabled = false;

    if (error) {
        document.getElementById('authError').textContent = error.message;
        document.getElementById('authError').classList.remove('hidden');
    }
}

async function handleLogout() {
    if (supabaseClient) await supabaseClient.auth.signOut();
}

function showLogin() {
    document.getElementById('dashboardArea').classList.add('hidden');
    document.getElementById('authOverlay').classList.remove('hidden');
    document.getElementById('adminPassword').value = '';
    document.getElementById('authError').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('authOverlay').classList.add('hidden');
    document.getElementById('dashboardArea').classList.remove('hidden');
    fetchData();
}

// Data Fetching & Rendering
async function fetchData() {
    try {
        const { data, error } = await supabaseClient
            .from('registrations')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        allRegistrations = data || [];
        updateStats();
        applyFilters();
    } catch (err) {
        console.error('Error fetching data:', err);
        document.getElementById('tableBody').innerHTML = `
            <tr><td colspan="7" class="empty-state">
                <i data-lucide="alert-circle" style="color:var(--color-primary); width:24px; height:24px; margin-bottom:10px;"></i><br>
                Failed to load data. Did you set the Supabase keys in admin.js?
            </td></tr>
        `;
        lucide.createIcons();
    } finally {
        setTimeout(() => document.getElementById('refreshBtn').classList.remove('spin'), 500);
    }
}

function updateStats() {
    document.getElementById('statTotal').textContent = allRegistrations.length;

    let beg = 0, int = 0, adv = 0;
    let sources = {};

    allRegistrations.forEach(r => {
        if (r.level === 'beginner') beg++;
        if (r.level === 'intermediate') int++;
        if (r.level === 'advanced') adv++;

        if (r.discovery) {
            sources[r.discovery] = (sources[r.discovery] || 0) + 1;
        }
    });

    document.getElementById('statLevels').textContent = `${beg} / ${int} / ${adv}`;

    let topSource = '-';
    let maxCount = 0;
    for (const [source, count] of Object.entries(sources)) {
        if (count > maxCount) {
            maxCount = count;
            topSource = source.charAt(0).toUpperCase() + source.slice(1);
        }
    }
    document.getElementById('statSource').textContent = topSource;
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const levelFilter = document.getElementById('filterLevel').value;
    const sourceFilter = document.getElementById('filterSource').value;

    const filtered = allRegistrations.filter(r => {
        const matchSearch = r.name?.toLowerCase().includes(searchTerm) ||
            r.email?.toLowerCase().includes(searchTerm) ||
            r.phone?.toLowerCase().includes(searchTerm);

        const matchLevel = levelFilter ? r.level === levelFilter : true;
        const matchSource = sourceFilter ? r.discovery === sourceFilter : true;

        return matchSearch && matchLevel && matchSource;
    });

    renderTable(filtered);
}

function renderTable(data) {
    const tbody = document.getElementById('tableBody');

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="empty-state">No submissions found.</td></tr>`;
        return;
    }

    tbody.innerHTML = data.map(row => {
        const date = new Date(row.created_at).toLocaleDateString('en-GB');
        return `
            <tr>
                <td>${date}</td>
                <td style="font-weight:600; color:var(--text-primary)">${escapeHtml(row.name)}</td>
                <td>${row.age}</td>
                <td>${escapeHtml(row.email)}</td>
                <td>${escapeHtml(row.phone)}</td>
                <td><span class="badge-level ${row.level}">${row.level}</span></td>
                <td class="text-right actions-cell">
                    <button class="btn-view" onclick="viewDetails('${row.id}')">View</button>
                    <button class="btn-delete" onclick="deleteRegistration('${row.id}')" title="Delete Registration">
                        <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    // Re-initialize Lucide for the new buttons
    lucide.createIcons();
}

window.deleteRegistration = async function (id) {
    if (!confirm('Are you sure you want to delete this registration? This action cannot be undone.')) return;

    try {
        const { error } = await supabaseClient
            .from('registrations')
            .delete()
            .eq('id', id);

        if (error) throw error;

        fetchData(); // Refresh list
    } catch (err) {
        console.error('Error deleting:', err);
        alert('Failed to delete registration: ' + err.message);
    }
}

// Modal & Utilities
window.viewDetails = function (id) {
    const row = allRegistrations.find(r => r.id === id);
    if (!row) return;

    const date = new Date(row.created_at).toLocaleString('en-GB');
    const html = `
        <div class="detail-row">
            <div class="detail-group">
                <div class="detail-label">Name</div>
                <div class="detail-value">${escapeHtml(row.name)}</div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Submitted On</div>
                <div class="detail-value">${date}</div>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-group">
                <div class="detail-label">Email</div>
                <div class="detail-value">${escapeHtml(row.email)}</div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Phone</div>
                <div class="detail-value">${escapeHtml(row.phone)}</div>
            </div>
        </div>

        <div class="detail-row">
            <div class="detail-group">
                <div class="detail-label">Age & Level</div>
                <div class="detail-value">${row.age} years old — <span style="text-transform:capitalize">${row.level}</span></div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Discovery Source</div>
                <div class="detail-value" style="text-transform:capitalize">${row.discovery} ${row.other_discovery ? `(${escapeHtml(row.other_discovery)})` : ''}</div>
            </div>
        </div>

        <div class="detail-group">
            <div class="detail-label">About Me</div>
            <div class="detail-value">${escapeHtml(row.about_me)}</div>
        </div>

        <div class="detail-group">
            <div class="detail-label">Goals</div>
            <div class="detail-value">${escapeHtml(row.goals)}</div>
        </div>

        <div class="detail-group">
            <div class="detail-label">Agreed to Terms</div>
            <div class="detail-value" style="color: #10B981; font-weight: bold;">${row.agreement ? 'Yes' : 'No'}</div>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('detailsModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailsModal').classList.add('hidden');
}

function exportCSV() {
    if (allRegistrations.length === 0) return alert('No data to export.');

    const headers = ['Date', 'Name', 'Age', 'Email', 'Phone', 'Level', 'Discovery', 'About', 'Goals'];

    const rows = allRegistrations.map(r => [
        `"${new Date(r.created_at).toLocaleString('en-GB')}"`,
        `"${r.name?.replace(/"/g, '""') || ''}"`,
        r.age,
        `"${r.email || ''}"`,
        `"${r.phone || ''}"`,
        r.level,
        `"${r.discovery}${r.other_discovery ? ' - ' + r.other_discovery : ''}"`,
        `"${r.about_me?.replace(/"/g, '""') || ''}"`,
        `"${r.goals?.replace(/"/g, '""') || ''}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `speakup_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
