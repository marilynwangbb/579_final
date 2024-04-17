import React, { useState } from 'react';
import { Button, Form, ListGroup, Modal } from 'react-bootstrap';

const NotesManager = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '' });
    const [showAdd, setShowAdd] = useState(false);
    const [viewNote, setViewNote] = useState(null);

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);

    const handleShowView = (note) => {
        setViewNote(note);
    };
    const handleCloseView = () => {
        setViewNote(null);
    };

    const addNote = () => {
        if (newNote.title.trim() && newNote.content.trim()) {
            setNotes(prevNotes => [
                ...prevNotes,
                { id: prevNotes.length + 1, title: newNote.title, content: newNote.content, highlighted: false }
            ]);
            setNewNote({ title: '', content: '' });
            handleCloseAdd();
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShowAdd}>Add New Note</Button>
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={newNote.title}
                            onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                            placeholder="Note title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newNote.content}
                            onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                            placeholder="Write your note content here..."
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addNote}>
                        Save Note
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={viewNote !== null} onHide={handleCloseView}>
                <Modal.Header closeButton>
                    <Modal.Title>{viewNote?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{viewNote?.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseView}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <ListGroup className="mt-3">
                {notes.map(note => (
                    <ListGroup.Item
                        key={note.id}
                        action
                        onClick={() => handleShowView(note)}
                    >
                        {note.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default NotesManager;
