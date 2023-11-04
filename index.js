const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// Video list
app.get('/list', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/movie/by/filtres/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('فیلم مورد نظر  در دیتابیس پیدا نشد');
        }
    } catch (error) {
        res.status(500).send('فیلم مورد نظر  در دیتابیس پیدا نشد');
    }
});

// Search video
app.get('/search', async (req, res) => {
    const searchText = req.query.text;
    try {
        const response = await axios.get(`https://winbedrives.com/api/search/${searchText}/4F5A9C3D9A86FA54EACEDDD635185/`);
        if (response.status === 200 && response.data && response.data.posters.length > 0) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});

// Get series
app.get('/get', async (req, res) => {
    const id = req.query.id;
    try {
        const response = await axios.get(`http://winbedrives.com/api/season/by/serie/${id}/4F5A9C3D9A86FA54EACEDDD635185/`);
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});

// genres list
app.get('/MAction', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/2/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MAdventure', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/12/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MAnimation', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/3/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MApocalypse', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/40/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MBest5m', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/50/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MBiographydiary', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/11/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MChinaJapan', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/37/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MClassic', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/26/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MComedy', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/13/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MCool', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/16/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MCriminal', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/7/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MDocumentary', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/15/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MDownloadsMost', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/25/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MDrama', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/10/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MExciting', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/21/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MFamily', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/9/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MFantasy', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/20/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MFavorites', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/18/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MHistorical', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/5/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MIndian', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/38/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MKorean', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/36/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MMusic', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/30/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MMystery', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/14/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MNewseries', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/36/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MOscar2023', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/53/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MRomantic', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/30/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MScary', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/1/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MScienceFiction', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/19/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MSpecial', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/27/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MSports', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/17/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MSuggested', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/22/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MTop250', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/32/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MTurkish', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/35/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MWar', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/8/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MWeeklyoffer', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/49/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});
app.get('/MWestern', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/poster/by/filtres/28/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
