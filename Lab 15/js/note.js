export class Note {
    constructor(title, content) {
        this.id = Date.now();
        this.title = title;
        this.content = content;
        this.date = new Date().toLocaleString();
    }
}

export class NoteManager {
    constructor() {
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    deleteNote(id) {
        this.notes = this.notes.filter(n => n.id !== id);
    }

    updateNote(id, newTitle, newContent) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.title = newTitle;
            note.content = newContent;
            note.date = new Date().toLocaleString();
        }
    }

    searchNotes(query) {
        return this.notes.filter(n => 
            n.title.toLowerCase().includes(query.toLowerCase()) ||
            n.content.toLowerCase().includes(query.toLowerCase())
        );
    }
}


