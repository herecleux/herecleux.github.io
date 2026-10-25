// Interactive logic for Developer Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // 1. Copy Email to Clipboard Functionality
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = 'rapsh75@yahoo.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailText).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied! ✨';
        copyBtn.style.background = '#ECFDF5';
        copyBtn.style.color = '#065F46';
        copyBtn.style.borderColor = '#10B981';

        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

  // 2. Category Filter Pills for Selected Work
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryBlocks = document.querySelectorAll('.work-category-block');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.dataset.filter; // 'all', 'web', 'apps', 'plugin'

      categoryBlocks.forEach(block => {
        const cat = block.dataset.category;
        if (targetCategory === 'all' || cat === targetCategory) {
          block.style.display = 'block';
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  // 3. Playful Hover Tilt effect for project cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });

  // 3. Fallback for avatar image if local file fails to load
  const avatarImg = document.getElementById('hero-avatar-img');
  if (avatarImg) {
    avatarImg.addEventListener('error', () => {
      avatarImg.src = 'https://avatars.githubusercontent.com/u/45097168?v=4';
    });
  }
});
