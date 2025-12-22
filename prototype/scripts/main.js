// Main JavaScript for prototype interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Upvote/Downvote buttons
    const upvoteButtons = document.querySelectorAll('.upvote-btn');
    upvoteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentCount = parseInt(this.textContent.match(/\d+/)?.[0] || 0);
            this.textContent = `↑ ${currentCount + 1}`;
            this.style.color = 'var(--glassdoor-blue)';
            this.style.borderColor = 'var(--glassdoor-blue)';
        });
    });

    const downvoteButtons = document.querySelectorAll('.downvote-btn');
    downvoteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.color = '#ef4444';
            this.style.borderColor = '#ef4444';
        });
    });

    // Helpful button
    const helpfulButtons = document.querySelectorAll('.helpful-btn');
    helpfulButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentCount = parseInt(this.textContent.match(/\d+/)?.[0] || 0);
            this.textContent = `✓ Helpful (${currentCount + 1})`;
            this.style.color = 'var(--glassdoor-blue)';
            this.style.borderColor = 'var(--glassdoor-blue)';
        });
    });

    // Follow buttons
    const followButtons = document.querySelectorAll('.follow-btn');
    followButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === 'Follow') {
                this.textContent = 'Following';
                this.style.backgroundColor = 'var(--quora-text)';
                this.style.color = 'var(--white)';
            } else {
                this.textContent = 'Follow';
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--quora-text)';
            }
        });
    });

    // Best answer button
    const bestAnswerButtons = document.querySelectorAll('.best-answer-btn');
    bestAnswerButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === 'Mark as Best Answer') {
                this.textContent = '✓ Best Answer';
                this.style.backgroundColor = 'var(--glassdoor-blue)';
                this.style.color = 'var(--white)';
            }
        });
    });

    // Search functionality (basic)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Search functionality would be implemented here');
            }
        });
    }

    // Tag click functionality
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            console.log('Filter by tag:', this.textContent);
            // Would filter questions by this tag
        });
    });

    // Question title click
    const questionTitles = document.querySelectorAll('.question-title');
    questionTitles.forEach(title => {
        title.addEventListener('click', function() {
            console.log('View question:', this.textContent);
            // Would navigate to question detail page
        });
    });

    // Chat with students functionality
    const chatButtons = document.querySelectorAll('.chat-btn');
    chatButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const studentCard = this.closest('.student-card');
            const studentName = studentCard.querySelector('.student-name').textContent;
            const studentYear = studentCard.querySelector('.student-year').textContent;
            const studentProgram = studentCard.querySelector('.student-program').textContent;
            
            // In a real implementation, this would open a chat interface
            alert(`Starting chat with ${studentName} (${studentYear}, ${studentProgram})\n\nIn the full version, this would open a chat window where you can message the student directly.`);
            
            // Visual feedback
            this.style.backgroundColor = 'var(--glassdoor-blue)';
            setTimeout(() => {
                this.style.backgroundColor = 'var(--quora-text)';
            }, 300);
        });
    });

    // View all students link
    const viewAllLink = document.querySelector('.view-all-link');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This would show all 23 students registered for Computer Science program.\n\nIn the full version, this would navigate to a page listing all students with filters and search functionality.');
        });
    }

    // Read more fields functionality - run immediately on page load
    (function() {
        const readMoreBtn = document.getElementById('read-more-fields');
        const hiddenFields = document.querySelectorAll('.career-field-tag.hidden-field');
        
        // Force hide all hidden fields on page load
        hiddenFields.forEach(field => {
            field.style.display = 'none';
            field.style.visibility = 'hidden';
        });
        
        if (readMoreBtn && hiddenFields.length > 0) {
            readMoreBtn.addEventListener('click', function() {
                const isExpanded = this.classList.contains('expanded');
                
                if (isExpanded) {
                    // Collapse - hide fields
                    hiddenFields.forEach(field => {
                        field.classList.remove('show');
                        field.style.display = 'none';
                        field.style.visibility = 'hidden';
                    });
                    this.innerHTML = '<i class="fas fa-chevron-down"></i> Read More';
                    this.classList.remove('expanded');
                } else {
                    // Expand - show fields
                    hiddenFields.forEach(field => {
                        field.classList.add('show');
                        field.style.display = 'inline-block';
                        field.style.visibility = 'visible';
                    });
                    this.innerHTML = '<i class="fas fa-chevron-down"></i> Show Less';
                    this.classList.add('expanded');
                }
            });
        }
    })();
});

