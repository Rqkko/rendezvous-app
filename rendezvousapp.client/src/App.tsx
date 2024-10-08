import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import './App.css';
import Button from '@mui/material/Button';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    const [forecasts, setForecasts] = useState<Forecast[]>();
    const [user, setUser] = useState<string>();

    //useEffect(() => {
    //    getUser();
    //    populateWeatherData();
    //}, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    const c = user === undefined
        ? <div>User is no where to be found</div>
        : <div>
            <div>{user}</div>
            <div>User should be here ^^^</div>
        </div>

    return (
        //<div>
        //    <h1 id="tableLabel">App.tsx Page</h1>
        //    {c}
        //    <Button variant="contained"npm install react-router-dom>Hello world</Button>
        //</div>
        <Router>
            <div>Ay Yo!</div>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<About />} />*/}
                {/*<Route path="*" element={<NotFound />} /> */}{/* Fallback for 404 */}
            </Routes>
         </Router>
    );

    async function populateWeatherData() {
        console.log("populateWeatherData is ran");
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }

    async function getUser() {
        const response = await fetch('user/getfirstname');
        const data = await response.text();
        setUser(data);
    }
}

export default App;