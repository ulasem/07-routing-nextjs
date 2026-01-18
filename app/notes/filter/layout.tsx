import React from 'react';
import css from './LayoutNotes.module.css';

interface NoteLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

function NoteLayout({ sidebar, children }: NoteLayoutProps) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}

export default NoteLayout;
