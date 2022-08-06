import React from 'react';

const Join = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Join;