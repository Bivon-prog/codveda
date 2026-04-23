// API Base URL
const API_URL = 'http://localhost:3000/api/users';

// DOM Elements
const userForm = document.getElementById('userForm');
const usersList = document.getElementById('usersList');
const loading = document.getElementById('loading');
const noUsers = document.getElementById('noUsers');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const refreshBtn = document.getElementById('refreshBtn');
const userId = document.getElementById('userId');
const modal = document.getElementById('messageModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = document.querySelector('.close');

// State
let isEditing = false;

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
});

userForm.addEventListener('submit', handleSubmit);
cancelBtn.addEventListener('click', resetForm);
refreshBtn.addEventListener('click', loadUsers);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Functions
async function loadUsers() {
    try {
        showLoading();
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.success) {
            displayUsers(data.data);
        } else {
            throw new Error(data.error || 'Failed to load users');
        }
    } catch (error) {
        showError('Error loading users: ' + error.message);
        displayUsers([]);
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: parseInt(document.getElementById('age').value)
    };

    // Validate form data
    if (!validateFormData(formData)) {
        return;
    }

    try {
        const url = isEditing ? `${API_URL}/${userId.value}` : API_URL;
        const method = isEditing ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            showSuccess(
                isEditing ? 'User updated successfully!' : 'User created successfully!'
            );
            resetForm();
            loadUsers();
        } else {
            throw new Error(data.error || 'Operation failed');
        }
    } catch (error) {
        showError('Error: ' + error.message);
    }
}

function validateFormData(data) {
    if (!data.name || data.name.length < 2) {
        showError('Name must be at least 2 characters long');
        return false;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    if (!data.age || data.age < 1 || data.age > 120) {
        showError('Age must be between 1 and 120');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function displayUsers(users) {
    hideLoading();
    
    if (users.length === 0) {
        noUsers.style.display = 'block';
        usersList.innerHTML = '';
        return;
    }
    
    noUsers.style.display = 'none';
    usersList.innerHTML = users.map(user => `
        <div class="user-card">
            <div class="user-info">
                <h3>${escapeHtml(user.name)}</h3>
                <p class="email">${escapeHtml(user.email)}</p>
                <p>Age: ${user.age}</p>
                <p>Created: ${formatDate(user.createdAt)}</p>
            </div>
            <div class="user-actions">
                <button class="btn btn-success" onclick="editUser('${user._id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser('${user._id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

function editUser(id) {
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const user = data.data;
                userId.value = user._id;
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                document.getElementById('age').value = user.age;
                
                isEditing = true;
                formTitle.textContent = 'Edit User';
                submitBtn.textContent = 'Update User';
                submitBtn.classList.remove('btn-primary');
                submitBtn.classList.add('btn-success');
                
                // Scroll to form
                document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
            } else {
                showError('Error loading user: ' + data.error);
            }
        })
        .catch(error => showError('Error loading user: ' + error.message));
}

async function deleteUser(id) {
    if (!confirm('Are you sure you want to delete this user?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
            showSuccess('User deleted successfully!');
            loadUsers();
        } else {
            throw new Error(data.error || 'Delete failed');
        }
    } catch (error) {
        showError('Error deleting user: ' + error.message);
    }
}

function resetForm() {
    userForm.reset();
    userId.value = '';
    isEditing = false;
    formTitle.textContent = 'Add New User';
    submitBtn.textContent = 'Add User';
    submitBtn.classList.remove('btn-success');
    submitBtn.classList.add('btn-primary');
}

function showLoading() {
    loading.style.display = 'block';
    usersList.innerHTML = '';
    noUsers.style.display = 'none';
}

function hideLoading() {
    loading.style.display = 'none';
}

function showModal(title, message, type = 'info') {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function showSuccess(message) {
    showModal('Success', message, 'success');
}

function showError(message) {
    showModal('Error', message, 'error');
}

function closeModal() {
    modal.style.display = 'none';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
