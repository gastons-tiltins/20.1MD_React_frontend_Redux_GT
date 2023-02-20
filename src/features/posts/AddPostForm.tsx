import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

import {postAdded} from './postsSlice';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e: any) => setTitle(e.target.value);
    const onContentChanged = (e: any) => setContent(e.target.value);

    const onSavePostClicked = (e: any) => {
        e.preventDefault();
        if (title && content) {
            dispatch(
                // postAdded(title, content),
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                }),
            );
            setTitle('');
            setContent('');
        }
    };

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={onSavePostClicked}>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content:</label>
                <textarea
                    name='postContent'
                    id='postContent'
                    onChange={onContentChanged}
                    value={content}
                ></textarea>
                <button>Save Post</button>
            </form>
        </section>
    );
};
