const AddButton = document.querySelector('#AddButton');
const main = document.querySelector('.main');

AddButton.addEventListener('click', addNote);

function addNote() {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');

    const toolBar = document.createElement('div');
    toolBar.classList.add('tool');

    const saveIcon = document.createElement('i');
    saveIcon.classList.add('fa-solid', 'fa-floppy-disk');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');

    toolBar.appendChild(saveIcon);
    toolBar.appendChild(deleteIcon);

    const textArea = document.createElement('textarea');

    noteContainer.appendChild(toolBar);
    noteContainer.appendChild(textArea);

    document.querySelector('.main').appendChild(noteContainer);

    deleteIcon.addEventListener('click', () => {
        noteContainer.remove();
    });

    saveIcon.addEventListener('click', () => {
        const noteContent = textArea.value.trim();
        if (noteContent) {
            const noteKey = `note_${Date.now()}`;
            localStorage.setItem(noteKey, noteContent);
            alert('Note saved successfully!');
        } else {
            alert('Please enter some content before saving.');
        }
    });

}
