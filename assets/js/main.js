/**
 * CARES & JOSAE - Interactive Frontend Scripts
 * Centre for Agricultural Research and Extension Services
 * Federal University Dutse (FUD), Nigeria
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Article Live Filter & Search Engine
  const searchInput = document.getElementById('journalSearchInput');
  const categoryFilters = document.querySelectorAll('.category-filter-btn');
  const issueFilters = document.querySelectorAll('.issue-filter-btn');
  const articleCards = document.querySelectorAll('.article-item');
  const resultsCount = document.getElementById('searchResultsCount');

  let currentCategory = 'all';
  let currentIssue = 'all';
  let currentSearchQuery = '';

  function filterArticles() {
    let visibleCount = 0;

    articleCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const category = card.getAttribute('data-category') || 'all';
      const issue = card.getAttribute('data-issue') || 'all';

      const matchesQuery = currentSearchQuery === '' || text.includes(currentSearchQuery);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      const matchesIssue = currentIssue === 'all' || issue === currentIssue;

      if (matchesQuery && matchesCategory && matchesIssue) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCount} of ${articleCards.length} articles`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      filterArticles();
    });
  }

  if (categoryFilters.length > 0) {
    categoryFilters.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        categoryFilters.forEach(b => {
          b.classList.remove('active', 'btn-primary-fud');
          b.classList.add('btn-outline-fud');
        });

        btn.classList.remove('btn-outline-fud');
        btn.classList.add('active', 'btn-primary-fud');

        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterArticles();
      });
    });
  }

  if (issueFilters.length > 0) {
    issueFilters.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        issueFilters.forEach(b => {
          b.classList.remove('active', 'btn-success');
          b.classList.add('btn-outline-secondary');
        });

        btn.classList.remove('btn-outline-secondary');
        btn.classList.add('active', 'btn-success');

        currentIssue = btn.getAttribute('data-issue-filter') || 'all';
        filterArticles();
      });
    });
  }

  // 2. Abstract View/Hide Toggle Text
  const toggleAbstractButtons = document.querySelectorAll('.btn-toggle-abstract');
  toggleAbstractButtons.forEach(btn => {
    const targetId = btn.getAttribute('data-bs-target');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      targetEl.addEventListener('show.bs.collapse', () => {
        btn.innerHTML = '<i class="bi bi-chevron-up me-1"></i> Hide Abstract';
      });
      targetEl.addEventListener('hide.bs.collapse', () => {
        btn.innerHTML = '<i class="bi bi-chevron-down me-1"></i> View Abstract';
      });
    }
  });

  // 3. Manuscript Submission Form Helper
  const submissionForm = document.getElementById('manuscriptSubmissionForm');
  if (submissionForm) {
    submissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const authorName = document.getElementById('authorName')?.value || '';
      const email = document.getElementById('authorEmail')?.value || '';
      const phone = document.getElementById('authorPhone')?.value || '';
      const paperTitle = document.getElementById('paperTitle')?.value || '';
      const manuscriptCategory = document.getElementById('manuscriptCategory')?.value || '';
      const abstractText = document.getElementById('abstractText')?.value || '';

      const subject = encodeURIComponent(`[JOSAE Manuscript Submission] - ${paperTitle}`);
      const body = encodeURIComponent(
        `Dear Editors of JOSAE,\n\n` +
        `I would like to submit the following manuscript for review in the Journal of Smart Agriculture and Extension Services (JOSAE):\n\n` +
        `Corresponding Author: ${authorName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Discipline/Category: ${manuscriptCategory}\n` +
        `Paper Title: ${paperTitle}\n\n` +
        `Abstract:\n${abstractText}\n\n` +
        `I have attached the complete manuscript (Word/PDF) along with evidence of the handling fee.\n\n` +
        `Best regards,\n${authorName}`
      );

      // Trigger user's mail client
      window.location.href = `mailto:josaecares@fud.edu.ng?subject=${subject}&body=${body}`;

      const alertSuccess = document.getElementById('submissionSuccessAlert');
      if (alertSuccess) {
        alertSuccess.classList.remove('d-none');
        alertSuccess.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 4. Citation Copy Helper
  const copyCitationBtns = document.querySelectorAll('.btn-copy-citation');
  copyCitationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const citationText = btn.getAttribute('data-citation');
      if (citationText) {
        navigator.clipboard.writeText(citationText).then(() => {
          const originalHtml = btn.innerHTML;
          btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Copied!';
          btn.classList.add('btn-success');
          setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.classList.remove('btn-success');
          }, 2000);
        });
      }
    });
  });
});
