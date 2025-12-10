export function renderNotes(notes, listElement, onDelete, onEdit) {
    listElement.innerHTML = "";

    notes.forEach(note => {
        const li = document.createElement("li");

        const title = document.createElement("strong");
        title.textContent = note.title;

        const content = document.createElement("p");
        content.textContent = note.content;

        const date = document.createElement("small");
        date.textContent = note.date;

        const actions = document.createElement("div");
        actions.className = "note-actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Редактировать";
        editBtn.onclick = () => onEdit(note.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.onclick = () => onDelete(note.id);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(title);
        li.appendChild(content);
        li.appendChild(date);
        li.appendChild(actions);

        listElement.appendChild(li);
    });
}
