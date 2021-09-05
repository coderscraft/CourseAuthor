import React, { useState, useEffect } from "react";
import { getAuthors } from '../api/authorApi'

const AuthorPage = () => {

    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        getAuthors().then((data) => {
            setAuthors(data);
        });
      }, []);


    return (
        <>
          <h2 style={{ marginBottom: 20 }}>Authors</h2>
          <table className="table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(a => {
                return (
                    <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </>
    );
}

export default AuthorPage;
