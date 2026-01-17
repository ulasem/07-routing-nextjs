import React from 'react';
import css from './LayoutNotes.module.css';

interface NoteLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  modal?: React.ReactNode;
}

function NoteLayout({ sidebar, children, modal }: NoteLayoutProps) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
      {modal}
    </section>
  );
}

export default NoteLayout;
