import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';

function Meet() {
    let { meetId } = useParams();

    return (
        <div className='mt-3'>
            Meet Id {meetId}
        </div>
    );
}

export default Meet;
