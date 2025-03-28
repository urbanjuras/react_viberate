import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
export const Header = () => {
    const [artists, setArtists] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://mocky.viberate.com/api/v1/navbar")
		.then((res) => res.json())
		.then((data) => {
			setArtists(data);
		});
    }, [])

    return (
        <>
        <header class="header">

            <div class="page">

                <a href="#" class="logo">
                    <img src="./exercise-01_files/logo-v.svg" alt="Viberate" /> Viberate
                </a>

                <nav class="navigation-primary">
                
                    <ul class="menu-sys">
                        <li>
                            
                            <button class="btn btn-menu search">Search</button>
                        </li>
                        <li>
                            <button class="btn btn-menu more">More</button>
                        </li>
                        
                    </ul>
        
                    <ul className="menu">
                            { artists && artists.map((artist, index) => (
                                <li key={index}>
                                    <a onClick={() => navigate(`/${artist.artist_uuid}`)}>{artist.artist_name}</a>
                                </li>
                        ))}
                    </ul>	

                </nav>

            </div>

        </header>
            
        </>
    )
}