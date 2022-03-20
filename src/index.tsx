import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Suspense} from 'react';
import useSWR from 'swr';
import {ErrorBoundary} from './ErrorBoundary';

const fetcher = async () => (await {
    "name": "Luke Skywalker1",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
});

function Profile() {
    const {data, error} = useSWR('call', fetcher, {suspense: true});
    if (error) return <div>failed to load</div>;
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
            <Suspense fallback={<div>loading...</div>}>
                <Profile/>
            </Suspense>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
