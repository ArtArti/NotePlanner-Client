import React, { useState } from 'react';

function TextEditor() {
  const [content, setContent] = useState('');

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
  };

  const handleBulletClick = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    // Create a bullet character
    const bullet = document.createElement('span');
    bullet.innerHTML = '•'; // You can replace '•' with any bullet symbol you prefer

    // Replace the selected text with the bullet character
    range.deleteContents();
    range.insertNode(bullet);

    // Move the cursor after the bullet
    range.setStartAfter(bullet);
    range.collapse(true);

    // Update the selection
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleContentChange = (e) => {
    setContent(e.target.innerHTML);
  };

  return (
    <div>
      <div>
        <button onClick={handleItalicClick} className='p-3'>Italic</button>
        <button onClick={handleBulletClick}>Bullet</button>
      </div>
      <div
        contentEditable={true}
        onInput={handleContentChange}
        dangerouslySetInnerHTML={{ __html: content }}
        className='p-3'
      />
    </div>
  );
}

export default TextEditor;
