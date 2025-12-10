import { Note, NoteManager } from "./note.js";
import { saveNotes, loadNotes } from "./storage.js";
import { renderNotes } from "./ui.js";

const noteManager = new NoteManager();
noteManager.notes = loadNotes();

const noteList = document.getElementById("note-list");
const noteForm = document.getElementById("note-form");
const noteTitle = document.getElementById("note-title");
const noteContent = document.getElementById("note-content");
const searchInput = document.getElementById("search-input");

function updateUI() {
    const filtered = searchInput.value ? noteManager.searchNotes(searchInput.value) : noteManager.notes;
    renderNotes(filtered, noteList, deleteNote, editNote);
    saveNotes(noteManager.notes);
}

// Добавление заметки
noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();
    if (!title || !content) return;

    const note = new Note(title, content);
    noteManager.addNote(note);
    noteTitle.value = "";
    noteContent.value = "";
    updateUI();
});

// Удаление заметки
function deleteNote(id) {
    noteManager.deleteNote(id);
    updateUI();
}

// Редактирование заметки
function editNote(id) {
    const note = noteManager.notes.find(n => n.id === id);
    if (!note) return;

    const newTitle = prompt("Введите новый заголовок", note.title);
    const newContent = prompt("Введите новое содержание", note.content);

    if (newTitle && newContent) {
        noteManager.updateNote(id, newTitle, newContent);
        updateUI();
    }
}

// Поиск
searchInput.addEventListener("input", updateUI);

// Начальное отображение
updateUI();
