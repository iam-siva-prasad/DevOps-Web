
/* =========================
   THEME TOGGLE (OPPOSITE COLOR)
   ========================= */

/* Base styling for the toggle button */
#themeToggle {
  /* Layout & spacing */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  padding: .55rem .95rem;

  /* Shape & border */
  border: 1px solid var(--border);
  border-radius: .6rem;

  /* Typography */
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: .2px;

  /* Interaction */
  cursor: pointer;
  user-select: none;
  transition:
    background-color .20s ease,
    color .20s ease,
    border-color .20s ease,
    box-shadow .25s ease,
    transform .08s ease;
}

/* Focus-visible for accessibility */
#themeToggle:focus-visible {
  outline: 2px solid transparent;
  box-shadow: 0 0 0 3px rgba(99,102,241,.35); /* indigo glow */
}

/* Active press feedback */
#themeToggle:active {
  transform: translateY(0); /* keep consistent with your .btn */
}

/* ---------------------------------
   LIGHT MODE PAGE → DARK BUTTON
   --------------------------------- */
body.theme-light #themeToggle {
  background-color: var(--bg);        /* dark slate background */
  color: var(--text);                 /* light text on dark */
  border-color: var(--border);        /* slate-700 */
  box-shadow: 0 8px 18px rgba(15, 23, 42, .20); /* subtle dark shadow */
}

/* Hover in light mode */
body.theme-light #themeToggle:hover {
  background-color: #0b1224;          /* slightly darker than var(--bg) */
  box-shadow: 0 10px 24px rgba(15, 23, 42, .28);
}

/* Disabled state (if needed later) */
body.theme-light #themeToggle:disabled {
  opacity: .65;
  cursor: not-allowed;
  box-shadow: none;
}

/* ---------------------------------
   DARK MODE PAGE → LIGHT BUTTON
   --------------------------------- */
body.theme-dark #themeToggle {
  background-color: var(--bg-light);  /* light background */
  color: var(--text-dark);            /* dark text */
  border-color: #e5e7eb;              /* light border for contrast */
  box-shadow: 0 8px 18px rgba(226, 232, 240, .35); /* light shadow */
}

/* Hover in dark mode */
body.theme-dark #themeToggle:hover {
  background-color: #ffffff;          /* pure white on hover for clarity */
  box-shadow: 0 10px 24px rgba(226, 232, 240, .45);
}

/* Disabled state (if needed later) */
body.theme-dark #themeToggle:disabled {
  opacity: .65;
  cursor: not-allowed;
  box-shadow: none;
}

/* ---------------------------------
   ENSURE THESE RULES WIN OVER .btn
   --------------------------------- */
/* If #themeToggle also uses .btn or .btn--ghost, inherit
   the theme-specific colors defined above. */
#themeToggle.btn,
#themeToggle.btn--ghost,
#themeToggle.btn--primary,
#themeToggle.btn--secondary {
  background: inherit;
  color: inherit;
  border-color: inherit;
  box-shadow: inherit;
}

/* Optional: compact variant if you use an icon-only toggle sometimes */
#themeToggle.icon-only {
  padding: .5rem;
  width: 2.25rem;
  height: 2.25rem;
}

/* Optional: smooth icon/text alignment for emoji labels */
#themeToggle > .label,
#themeToggle > .icon {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}
