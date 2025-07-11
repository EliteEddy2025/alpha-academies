import React, { useState } from 'react';

export default function FileUpload({ token }) {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      headers: { 'Authorization': token },
      body: formData,
    });
    const data = await res.json();
    setUploaded(data.path);
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit">Upload</button>
      {uploaded && <div>Uploaded: <a href={`http://localhost:3001${uploaded}`} target="_blank" rel="noopener noreferrer">View File</a></div>}
    </form>
  );
}