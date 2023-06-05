import React, { useState } from "react";
import { getAllCharacters } from "../../api/getCharacters";
import "./RickAndMortyComponent.css";
import { useQuery } from "react-query";

function RickAndMortyComponent() {
    let [index, setIndex] = useState(1);

    const getCharacters = async () => {
        let response = await getAllCharacters(index);
        return response.results;
    };

    const { data, status } = useQuery(["character", index], getCharacters, {
        keepPreviousData: true,
    });


    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (status === "error") {
        return <div>Error...</div>;
    }
    return (
        <div className="container">
            <div className="inner-container">
                <div className="navigation">
                    <h1>Rick and Morty</h1>
                    <button
                        disabled={index === 1}
                        onClick={() => setIndex((index) => index - 1)}
                    >
                        ◀
                    </button>
                    <span className="pagenumber">{index}/42</span>
                    <button
                        disabled={index === 42}
                        onClick={() => setIndex(index + 1)}
                    >
                        ▶
                    </button>
                </div>
                <div className="row">
                    {data.map((res, index) => {
                        return (
                            <div className="col" key={index}>
                                <img src={`${res.image}`} alt="" />
                                <h2 className="card-title">{res.name}</h2>
                                {res.status === "Alive" && (
                                    <p className="card-text alive">
                                        {res.status} - {res.gender}
                                    </p>
                                )}
                                {res.status === "Dead" && (
                                    <p className="card-text dead">
                                        {res.status} - {res.gender}
                                    </p>
                                )}
                                {res.status === "unknown" && (
                                    <p className="card-text unknown">
                                        {res.status} - {res.gender}
                                    </p>
                                )}
                                <p className="card-subs">
                                    Last seen in {res.location.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default RickAndMortyComponent;
