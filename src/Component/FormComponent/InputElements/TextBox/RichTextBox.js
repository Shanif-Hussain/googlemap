import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CkEditor(props) {
    let { name, value, onChange } = props;

    return (
        <div class="form-group">
            <label for="comment">Comment:</label>
            <CKEditor
                config={{
                    //removePlugins: [
                    //"ckfinder","imageTextAlternative","imageUpload","imageStyle:full",
                    //"imageStyle:side","tableColumn","tableRow","mergeTableCells"
                    //],
                    toolbar: [
                        "heading", "bold", "italic", "link", "bulletedList", "numberedList",
                        "blockQuote", "mediaEmbed", "insertTable", "undo", "redo"
                    ]
                }}
                editor={ClassicEditor}
                data={value[name] || ""}
                onReady={editor => {
                    editor.name = name;
                }}
                onChange={(event, editor) => {
                    let evt = { target: { name: editor.name, value: editor.getData() } };
                    onChange(evt);
                }}
            />
        </div>
    )
}